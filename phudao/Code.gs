/**
  * GOOGLE APPS SCRIPT - PHÂN HỆ ĐIỂM DANH HỌC PHỤ ĐẠO UEF
  * 
  * Đường dẫn Google Sheet của bạn:
  * https://docs.google.com/spreadsheets/d/1djq1LbSh_4mewr5Lj7qa2thJ3PTU5jsxPvAqtNPrUpY/edit
  * 
  * HƯỚNG DẪN CÀI ĐẶT:
  * 1. Truy cập link Google Sheets trên, chọn Extensions -> Apps Script.
  * 2. Xóa hết code mặc định và dán toàn bộ code dưới đây vào.
  * 3. Thay đổi SHEET_ID ở dòng 14 đúng với ID Google Sheet của bạn.
  * 4. Chọn Deploy -> New Deployment -> Select type: Web App.
  *    - Execute as: Me
  *    - Who has access: Anyone
  * 5. Copy URL Web App nhận được và dán vào biến GOOGLE_APPS_SCRIPT_ENDPOINT ở đầu file phudao/main.js.
  */

const SHEET_ID = '1djq1LbSh_4mewr5Lj7qa2thJ3PTU5jsxPvAqtNPrUpY'; 

const OTP_SHEET = 'OTP_Log';
const OTP_EXPIRE_MINUTES = 5;
const ALLOWED_EMAIL_DOMAIN = 'uef.edu.vn';

function doGet(e) {
  return jsonResponse({
    success: true,
    message: 'Tutoring Attendance API is running.',
    time: new Date()
  });
}

function doPost(e) {
  try {
    setupOtpSheetIfNeeded();

    const data = JSON.parse(e.postData.contents || '{}');
    const action = cleanText(data.action);

    if (action === 'sendOtp') return jsonResponse(sendOtp(data));
    if (action === 'verifyOtp') return jsonResponse(verifyOtp(data));
    if (action === 'submitAttendance') return jsonResponse(submitAttendance(data));
    if (action === 'getAttendance') return jsonResponse(getAttendance(data));
    if (action === 'createSubject') return jsonResponse(createSubject(data));

    return jsonResponse({
      success: false,
      message: 'Hành động (Action) không hợp lệ.'
    });

  } catch (error) {
    return jsonResponse({
      success: false,
      message: 'Lỗi hệ thống Apps Script: ' + error.message
    });
  }
}

// --- API 1: TẠO VÀ GỬI OTP 4 SỐ ---
function sendOtp(data) {
  const email = cleanEmail(data.email);

  if (!email) {
    return { success: false, message: 'Vui lòng nhập email.' };
  }

  if (!email.endsWith('@' + ALLOWED_EMAIL_DOMAIN)) {
    return { success: false, message: 'Vui lòng sử dụng email sinh viên @uef.edu.vn.' };
  }

  const otp = generate4DigitOtp();
  const now = new Date();
  const expiredAt = new Date(now.getTime() + OTP_EXPIRE_MINUTES * 60 * 1000);

  const sheet = getSheet(OTP_SHEET);
  sheet.appendRow([
    now,
    email,
    otp,
    expiredAt,
    false,
    'sent'
  ]);

  const subject = 'Mã OTP xác thực điểm danh phụ đạo UEF';
  const body = 
`Chào bạn,

Bạn đang thực hiện điểm danh học phụ đạo trên cổng UEF Academic Support.

Mã OTP xác minh của bạn là: ${otp}

Mã có hiệu lực trong ${OTP_EXPIRE_MINUTES} phút. Vui lòng điền mã này vào trang điểm danh để tiếp tục.

Trân trọng,
Trung tâm Hỗ trợ học vụ UEF`;

  MailApp.sendEmail({
    to: email,
    subject: subject,
    body: body,
    name: 'Trung tâm Hỗ trợ học vụ UEF'
  });

  return {
    success: true,
    message: 'Mã OTP đã gửi về email của bạn.'
  };
}

// --- API 2: XÁC MINH OTP ---
function verifyOtp(data) {
  const email = cleanEmail(data.email);
  const inputOtp = cleanText(data.otp);

  if (!email || !inputOtp) {
    return { success: false, message: 'Vui lòng cung cấp email và OTP.' };
  }

  const sheet = getSheet(OTP_SHEET);
  const values = sheet.getDataRange().getValues();
  const now = new Date();

  for (let i = values.length - 1; i >= 1; i--) {
    const rowEmail = cleanEmail(values[i][1]);
    const rowOtp = cleanText(values[i][2]);
    const expiredAt = new Date(values[i][3]);
    const verified = values[i][4];

    if (rowEmail === email && rowOtp === inputOtp) {
      if (verified === true || String(verified).toUpperCase() === 'TRUE') {
        return { success: false, message: 'Mã OTP này đã được xác thực trước đó.' };
      }

      if (now > expiredAt) {
        sheet.getRange(i + 1, 6).setValue('expired');
        return { success: false, message: 'Mã OTP đã hết hạn.' };
      }

      sheet.getRange(i + 1, 5).setValue(true);
      sheet.getRange(i + 1, 6).setValue('verified');

      return {
        success: true,
        message: 'Mã xác thực chính xác.'
      };
    }
  }

  return {
    success: false,
    message: 'Mã OTP không chính xác. Vui lòng nhập lại.'
  };
}

// --- API 3: GHI NHẬN ĐIỂM DANH ---
function submitAttendance(data) {
  const subject = cleanText(data.subject);
  const email = cleanEmail(data.email);
  const fullName = cleanText(data.fullName);
  const studentId = cleanText(data.studentId);

  if (!subject || !email || !fullName || !studentId) {
    return { success: false, message: 'Thiếu thông tin điểm danh bắt buộc.' };
  }

  // Xác minh xem email này có thực sự vừa qua xác thực OTP không
  if (!wasOtpVerified(email)) {
    return { success: false, message: 'Bạn chưa xác thực OTP hoặc phiên xác thực đã hết hạn.' };
  }

  setupSubjectSheetIfNeeded(subject);
  const sheet = getSheet(subject);

  // Thêm dòng mới ghi nhận điểm danh
  sheet.appendRow([
    new Date(),
    studentId,
    fullName,
    email
  ]);

  return {
    success: true,
    message: 'Điểm danh thành công.'
  };
}

// --- API 4: LẤY DANH SÁCH ĐIỂM DANH (SẮP XẾP MỚI NHẤT LÊN ĐẦU) ---
function getAttendance(data) {
  const subject = cleanText(data.subject);
  if (!subject) return { success: false, message: 'Thiếu tên môn học.' };

  setupSubjectSheetIfNeeded(subject);
  const sheet = getSheet(subject);
  const values = sheet.getDataRange().getValues();

  if (values.length <= 1) {
    return { success: true, responses: [] };
  }

  const responses = [];
  // Duyệt ngược từ dòng cuối cùng để dòng mới nhất lên đầu tiên
  for (let i = values.length - 1; i >= 1; i--) {
    responses.push({
      time: formatDate(values[i][0]),
      studentId: cleanText(values[i][1]),
      fullName: cleanText(values[i][2]),
      email: cleanEmail(values[i][3])
    });
  }

  return {
    success: true,
    responses: responses
  };
}

// --- API 5: TẠO MÔN HỌC MỚI ---
function createSubject(data) {
  const subject = cleanText(data.subject);
  if (!subject) return { success: false, message: 'Thiếu tên môn học cần tạo.' };

  setupSubjectSheetIfNeeded(subject);
  return {
    success: true,
    message: 'Môn học ' + subject + ' đã được thiết lập.'
  };
}

// --- HELPER FUNCTIONS ---
function wasOtpVerified(email) {
  const sheet = getSheet(OTP_SHEET);
  const values = sheet.getDataRange().getValues();

  for (let i = values.length - 1; i >= 1; i--) {
    const rowEmail = cleanEmail(values[i][1]);
    const verified = values[i][4];
    const status = cleanText(values[i][5]);

    if (rowEmail === email && (verified === true || String(verified).toUpperCase() === 'TRUE') && status === 'verified') {
      return true;
    }
  }
  return false;
}

function setupOtpSheetIfNeeded() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(OTP_SHEET);
  if (!sheet) {
    sheet = ss.insertSheet(OTP_SHEET);
    const headers = ['createdAt', 'email', 'otp', 'expiredAt', 'verified', 'status'];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
  }
}

function setupSubjectSheetIfNeeded(subjectName) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(subjectName);
  if (!sheet) {
    sheet = ss.insertSheet(subjectName);
    const headers = ['Thời gian điểm danh', 'MSSV', 'Họ tên', 'Email'];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
  }
}

function getSheet(sheetName) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet) throw new Error('Không thể tải sheet: ' + sheetName);
  return sheet;
}

function generate4DigitOtp() {
  return Math.floor(1000 + Math.random() * 9000).toString();
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
