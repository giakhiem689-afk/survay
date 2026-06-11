/**
 * CODE.GS FINAL - BACKEND KHẢO SÁT SINH VIÊN QUA OTP EMAIL
 *
 * Phiên bản này:
 * - Ghi nhận chính xác 22 tiêu đề cột tiếng Việt rõ ràng.
 * - Gửi email bản sao về cho sinh viên dưới dạng bạch văn, dễ hiểu.
 * - Hỗ trợ phân nhóm và dashboard quản trị đồng bộ.
 */

const SHEET_ID = 'DAN_ID_GOOGLE_SHEET_CUA_BAN_O_DAY';

const OTP_SHEET = 'OTP_Log';
const RESPONSE_SHEET = 'Survey_Responses';

const OTP_EXPIRE_MINUTES = 5;
const ALLOWED_EMAIL_DOMAIN = 'uef.edu.vn';
const ADMIN_API_KEY = 'admin123';

function doGet(e) {
  return jsonResponse({
    success: true,
    message: 'Survey OTP API is running.',
    time: new Date()
  });
}

function doPost(e) {
  try {
    setupSheetsIfNeeded();

    const data = JSON.parse(e.postData.contents || '{}');
    const action = cleanText(data.action);

    if (action === 'sendOtp') return jsonResponse(sendOtp(data));
    if (action === 'verifyOtp') return jsonResponse(verifyOtp(data));
    if (action === 'submitSurvey') return jsonResponse(submitSurvey(data));
    if (action === 'getDashboardData') return jsonResponse(getDashboardData(data));

    return jsonResponse({
      success: false,
      message: 'Action không hợp lệ.'
    });

  } catch (error) {
    return jsonResponse({
      success: false,
      message: 'Lỗi hệ thống: ' + error.message
    });
  }
}

function sendOtp(data) {
  const studentId = cleanText(data.studentId);
  const email = cleanEmail(data.email);

  if (!studentId || !email) {
    return {
      success: false,
      message: 'Vui lòng nhập đầy đủ MSSV và email sinh viên.'
    };
  }

  if (!isValidStudentId(studentId)) {
    return {
      success: false,
      message: 'MSSV không hợp lệ. Vui lòng kiểm tra lại.'
    };
  }

  if (!isValidEmailFormat(email)) {
    return {
      success: false,
      message: 'Email không hợp lệ. Vui lòng kiểm tra lại.'
    };
  }

  if (!isAllowedStudentEmail(email)) {
    return {
      success: false,
      message: 'Vui lòng sử dụng email sinh viên do Trường cấp.'
    };
  }

  const otp = generateOtp();
  const now = new Date();
  const expiredAt = new Date(now.getTime() + OTP_EXPIRE_MINUTES * 60 * 1000);

  const sheet = getSheet(OTP_SHEET);
  sheet.appendRow([
    now,
    studentId,
    email,
    otp,
    expiredAt,
    false,
    'sent'
  ]);

  const subject = 'Mã OTP xác nhận khảo sát hỗ trợ học tập - UEF';
  const body =
`Chào bạn,

Bạn đang thực hiện khảo sát nguyện vọng hỗ trợ học tập của Trung tâm Hỗ trợ học vụ UEF.

Mã OTP xác nhận của bạn là: ${otp}

Mã này có hiệu lực trong ${OTP_EXPIRE_MINUTES} phút. Vui lòng không chia sẻ mã này cho bất kỳ ai.

Nếu bạn không thực hiện yêu cầu này, vui lòng bỏ qua email.

Trân trọng,
Trung tâm Hỗ trợ học vụ UEF`;

  MailApp.sendEmail({
    to: email,
    subject,
    body,
    name: 'Trung tâm Hỗ trợ học vụ UEF'
  });

  return {
    success: true,
    message: 'Mã OTP đã được gửi đến email sinh viên. Vui lòng kiểm tra hộp thư đến hoặc thư rác.',
    student: { studentId, email }
  };
}

function verifyOtp(data) {
  const studentId = cleanText(data.studentId);
  const email = cleanEmail(data.email);
  const inputOtp = cleanText(data.otp);

  if (!studentId || !email || !inputOtp) {
    return {
      success: false,
      message: 'Vui lòng nhập đầy đủ MSSV, email và mã OTP.'
    };
  }

  const sheet = getSheet(OTP_SHEET);
  const values = sheet.getDataRange().getValues();
  const now = new Date();

  for (let i = values.length - 1; i >= 1; i--) {
    const row = values[i];

    const rowStudentId = cleanText(row[1]);
    const rowEmail = cleanEmail(row[2]);
    const rowOtp = cleanText(row[3]);
    const expiredAt = new Date(row[4]);
    const verified = row[5];

    if (rowStudentId === studentId && rowEmail === email && rowOtp === inputOtp) {
      if (verified === true || String(verified).toUpperCase() === 'TRUE') {
        return {
          success: false,
          message: 'Mã OTP này đã được sử dụng. Bạn có thể gửi lại OTP mới nếu cần.'
        };
      }

      if (now > expiredAt) {
        sheet.getRange(i + 1, 7).setValue('expired');
        return {
          success: false,
          message: 'Mã OTP đã hết hạn. Vui lòng gửi lại mã mới.'
        };
      }

      sheet.getRange(i + 1, 6).setValue(true);
      sheet.getRange(i + 1, 7).setValue('verified');

      return {
        success: true,
        message: 'Xác thực thành công. Bạn có thể bắt đầu khảo sát.',
        student: { studentId, email }
      };
    }
  }

  return {
    success: false,
    message: 'Mã OTP không đúng. Vui lòng kiểm tra lại.'
  };
}

function submitSurvey(data) {
  const payload = data.payload || {};
  const studentId = cleanText(payload.studentId);
  const email = cleanEmail(payload.email);

  if (!studentId || !email) {
    return {
      success: false,
      message: 'Thiếu MSSV hoặc email sinh viên.'
    };
  }

  if (!wasOtpVerified(studentId, email)) {
    return {
      success: false,
      message: 'Bạn cần xác thực OTP trước khi gửi khảo sát.'
    };
  }

  const sheet = getSheet(RESPONSE_SHEET);

  sheet.appendRow([
    new Date(),
    studentId,
    email,
    cleanText(payload.fullName),
    cleanText(payload.phoneNumber),
    cleanText(payload.group),
    cleanText(payload.ratings.discipline),
    payload.needSupportDiscipline ? 'Cần hỗ trợ ngay' : 'Không',
    cleanText(payload.ratings.method),
    payload.needSupportMethod ? 'Cần hỗ trợ ngay' : 'Không',
    cleanText(payload.ratings.motivation),
    payload.needSupportMotivation ? 'Cần hỗ trợ ngay' : 'Không',
    cleanText(payload.ratings.wellbeing),
    payload.needSupportWellbeing ? 'Cần hỗ trợ ngay' : 'Không',
    cleanText(payload.ratings.support),
    payload.needSupportSupport ? 'Cần hỗ trợ ngay' : 'Không',
    cleanText(payload.difficulty),
    cleanText(payload.support),
    cleanText(payload.contactNeed),
    cleanText(payload.preferredContactDate),
    cleanText(payload.preferredContactTime),
    cleanText(payload.note),
    JSON.stringify(payload)
  ]);

  sendSurveyCopyEmail(payload);

  return {
    success: true,
    message: 'Đã lưu kết quả khảo sát và gửi bản sao về email sinh viên.'
  };
}

function sendSurveyCopyEmail(payload) {
  const email = cleanEmail(payload.email);
  if (!email) return;

  const subject = 'Bản sao khảo sát hỗ trợ học tập của bạn - UEF';

  const formatSupport = (need) => need ? ' -> [CẦN HỖ TRỢ NGAY]' : '';

  const body =
`Chào bạn,

Trung tâm Hỗ trợ học vụ UEF đã ghi nhận phản hồi khảo sát nguyện vọng hỗ trợ học tập của bạn gửi lúc ${cleanText(payload.submittedAt) || formatDate(new Date())}.

Dưới đây là thông tin chi tiết các nội dung bạn đã thực hiện khảo sát:

1. THÔNG TIN CÁ NHÂN
- Mã số sinh viên: ${cleanText(payload.studentId)}
- Họ và tên: ${cleanText(payload.fullName) || 'Không cung cấp'}
- Số điện thoại: ${cleanText(payload.phoneNumber) || 'Không cung cấp'}

2. KẾT QUẢ TỰ ĐÁNH GIÁ TÌNH TRẠNG HỌC TẬP (Thang điểm từ 1 đến 5)
- Chuyên cần & Kỷ luật: ${cleanText(payload.ratings.discipline)}/5${formatSupport(payload.needSupportDiscipline)}
- Phương pháp học tập: ${cleanText(payload.ratings.method)}/5${formatSupport(payload.needSupportMethod)}
- Động lực & Mục tiêu: ${cleanText(payload.ratings.motivation)}/5${formatSupport(payload.needSupportMotivation)}
- Cân bằng cuộc sống & Tinh thần: ${cleanText(payload.ratings.wellbeing)}/5${formatSupport(payload.needSupportWellbeing)}
- Chủ động tìm hỗ trợ: ${cleanText(payload.ratings.support)}/5${formatSupport(payload.needSupportSupport)}

=> Nhóm hỗ trợ hệ thống ghi nhận: ${cleanText(payload.group)}

3. NHU CẦU HỖ TRỢ CHI TIẾT
- Khó khăn chính đang gặp phải: ${cleanText(payload.difficulty) || 'Không có'}
- Nội dung muốn được hỗ trợ: ${cleanText(payload.support) || 'Không có'}
- Đồng ý để Trung tâm liên hệ: ${cleanText(payload.contactNeed)}
- Ngày liên hệ mong muốn: ${cleanText(payload.preferredContactDate) || 'Chưa chọn'}
- Khung giờ liên hệ mong muốn: ${cleanText(payload.preferredContactTime) || 'Chưa chọn'}
- Chia sẻ thêm của bạn: ${cleanText(payload.note) || 'Không có'}

Trung tâm Hỗ trợ học vụ sẽ sớm rà soát thông tin này và phối hợp với Khoa chuyên ngành cùng Cố vấn học tập của bạn để đưa ra phương án đồng hành thích hợp nhất.

Nếu bạn cần hỗ trợ khẩn cấp, vui lòng liên hệ trực tiếp văn phòng tại Tầng 2 - Trụ sở 141 Điện Biên Phủ hoặc qua hotline/email học vụ của trường.

Chúc bạn luôn học tập tốt và giữ vững tinh thần nhé!

Trân trọng,
Trung tâm Hỗ trợ học vụ UEF`;

  MailApp.sendEmail({
    to: email,
    subject,
    body,
    name: 'Trung tâm Hỗ trợ học vụ UEF'
  });
}

function getDashboardData(data) {
  const adminKey = cleanText(data.adminKey);

  if (adminKey !== ADMIN_API_KEY) {
    return {
      success: false,
      message: 'Bạn không có quyền truy cập dữ liệu quản trị.'
    };
  }

  const sheet = getSheet(RESPONSE_SHEET);
  const values = sheet.getDataRange().getValues();

  if (values.length <= 1) {
    return {
      success: true,
      message: 'Chưa có dữ liệu khảo sát.',
      total: 0,
      groupSummary: {},
      responses: []
    };
  }

  const responses = [];
  const groupSummary = {};

  for (let i = 1; i < values.length; i++) {
    const row = values[i];

    const item = {
      submittedAt: formatDate(row[0]),
      studentId: cleanText(row[1]),
      email: cleanEmail(row[2]),
      fullName: cleanText(row[3]),
      phoneNumber: cleanText(row[4]),
      group: cleanText(row[5]),
      disciplineScore: cleanText(row[6]),
      needSupportDiscipline: cleanText(row[7]),
      methodScore: cleanText(row[8]),
      needSupportMethod: cleanText(row[9]),
      motivationScore: cleanText(row[10]),
      needSupportMotivation: cleanText(row[11]),
      wellbeingScore: cleanText(row[12]),
      needSupportWellbeing: cleanText(row[13]),
      supportScore: cleanText(row[14]),
      needSupportSupport: cleanText(row[15]),
      difficulty: cleanText(row[16]),
      support: cleanText(row[17]),
      contactNeed: cleanText(row[18]),
      preferredContactDate: cleanText(row[19]),
      preferredContactTime: cleanText(row[20]),
      note: cleanText(row[21])
    };

    responses.push(item);

    const groupName = item.group || 'Chưa phân nhóm';
    groupSummary[groupName] = (groupSummary[groupName] || 0) + 1;
  }

  return {
    success: true,
    message: 'Lấy dữ liệu thành công.',
    total: responses.length,
    groupSummary,
    responses
  };
}

function wasOtpVerified(studentId, email) {
  const sheet = getSheet(OTP_SHEET);
  const values = sheet.getDataRange().getValues();

  if (values.length <= 1) return false;

  for (let i = values.length - 1; i >= 1; i--) {
    const rowStudentId = cleanText(values[i][1]);
    const rowEmail = cleanEmail(values[i][2]);
    const verified = values[i][5];
    const status = cleanText(values[i][6]);

    if (
      rowStudentId === studentId &&
      rowEmail === email &&
      (verified === true || String(verified).toUpperCase() === 'TRUE') &&
      status === 'verified'
    ) {
      return true;
    }
  }

  return false;
}

function setupSheetsIfNeeded() {
  const ss = SpreadsheetApp.openById(SHEET_ID);

  createSheetIfMissing(ss, OTP_SHEET, [
    'createdAt',
    'studentId',
    'email',
    'otp',
    'expiredAt',
    'verified',
    'status'
  ]);

  createSheetIfMissing(ss, RESPONSE_SHEET, [
    'Thời gian gửi',
    'MSSV',
    'Email',
    'Họ tên',
    'Số điện thoại',
    'Nhóm hỗ trợ',
    'Điểm Chuyên cần & Kỷ luật',
    'Cần hỗ trợ Chuyên cần ngay',
    'Điểm Phương pháp học tập',
    'Cần hỗ trợ Phương pháp ngay',
    'Điểm Động lực & Mục tiêu',
    'Cần hỗ trợ Động lực ngay',
    'Điểm Cân bằng & Tinh thần',
    'Cần hỗ trợ Cân bằng ngay',
    'Điểm Chủ động tìm hỗ trợ',
    'Cần hỗ trợ Chủ động ngay',
    'Khó khăn chính',
    'Nhu cầu hỗ trợ',
    'Đồng ý liên hệ',
    'Ngày liên hệ mong muốn',
    'Khung giờ liên hệ mong muốn',
    'Ghi chú thêm',
    'Dữ liệu gốc (JSON)'
  ]);
}

function createSheetIfMissing(ss, sheetName, headers) {
  let sheet = ss.getSheetByName(sheetName);

  if (!sheet) sheet = ss.insertSheet(sheetName);

  const firstRow = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
  const hasHeader = firstRow.some(cell => String(cell).trim() !== '');

  if (!hasHeader) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
  }
}

function getSheet(sheetName) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName(sheetName);

  if (!sheet) throw new Error('Không tìm thấy sheet: ' + sheetName);
  return sheet;
}

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function isValidStudentId(studentId) {
  return /^[A-Za-z0-9]{5,20}$/.test(studentId);
}

function isValidEmailFormat(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isAllowedStudentEmail(email) {
  return email.endsWith('@' + ALLOWED_EMAIL_DOMAIN);
}

function cleanText(value) {
  return String(value || '').trim();
}

function cleanEmail(value) {
  return String(value || '').trim().toLowerCase();
}

function formatDate(value) {
  if (!value) return '';

  try {
    return Utilities.formatDate(
      new Date(value),
      Session.getScriptTimeZone(),
      'dd/MM/yyyy HH:mm:ss'
    );
  } catch (error) {
    return String(value);
  }
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
