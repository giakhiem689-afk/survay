/*
  UEF ACADEMIC SUPPORT PORTAL - INTERACTIVE SCRIPT (V2)
  ======================================================
  - Tích hợp điều hướng tab mượt mà.
  - Xử lý xác thực OTP thực qua Google Apps Script (không dùng mã mặc định).
  - Tích hợp phiếu tự đánh giá 5 khía cạnh tại Bước 3 với Emojis SVGs.
  - Hỗ trợ các nút tích chọn "Cần hỗ trợ ngay" cho từng khía cạnh.
  - Bổ sung chọn ngày liên hệ với ràng buộc Thứ 2 - Sáng Thứ 7 và cảnh báo giờ nghỉ.
  - Phân tích chi tiết đa dạng hóa báo cáo kết quả Bước 5 (hiển thị nhiều lỗi hoặc không lỗi).
  - Hiển thị thông báo Toast tùy chỉnh chuyên nghiệp.
  - Đồng bộ và quản trị dữ liệu qua Apps Script / LocalStorage.
*/

// Cấu hình ứng dụng
const GOOGLE_APPS_SCRIPT_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwyS9sc9HSiZWqW2_JGR7VN3f8GPz14KiHkGLK09GtoG390wCf2XbrWBhrmUeMX9PBz/exec';
const ADMIN_PASSWORD = 'admin123';
const STORAGE_KEY = 'uef_survey_responses_v2';
const HIDDEN_ADMIN_HASH = '#admin';

// DOM Elements
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('[data-page]');
const resourceSearchInput = document.getElementById('resourceSearchInput');
const resourceCategoryFilter = document.getElementById('resourceCategoryFilter');
const resourceCards = document.querySelectorAll('.resource-card');

// Toast Notification System
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  // Choose icon based on type
  let iconSvg = '';
  if (type === 'success') {
    iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="width:18px;height:18px;color:var(--success)"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  } else if (type === 'error') {
    iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="width:18px;height:18px;color:var(--uef-red)"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
  } else {
    iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:18px;height:18px;color:var(--uef-blue)"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
  }

  toast.innerHTML = `
    <div style="flex-shrink:0; display:grid; place-items:center;">${iconSvg}</div>
    <div class="toast-message">${escapeHtml(message)}</div>
  `;

  container.appendChild(toast);

  // Automatically fade out and remove
  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => {
      if (toast.parentNode === container) {
        container.removeChild(toast);
      }
    }, 300);
  }, 4000);
}

// Page Navigation
function showPage(pageId) {
  pages.forEach((page) => page.classList.remove('active'));

  const targetPage = document.getElementById(pageId);
  if (targetPage) targetPage.classList.add('active');

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.remove('active');
    if (link.dataset.page === pageId) link.classList.add('active');
  });

  if (pageId === 'admin') {
    document.body.classList.add('admin-only-mode');
  } else {
    document.body.classList.remove('admin-only-mode');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (pageId === 'admin' && adminDashboard && !adminDashboard.classList.contains('hidden')) {
    renderDashboard();
  }
}

navLinks.forEach((button) => {
  button.addEventListener('click', () => {
    const pageId = button.dataset.page;
    if (pageId === 'admin') return;

    if (window.location.hash === HIDDEN_ADMIN_HASH) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    showPage(pageId);
  });
});

// Resource Search and Filtering
function filterResources() {
  const keyword = (resourceSearchInput?.value || '').toLowerCase().trim();
  const selectedCategory = resourceCategoryFilter?.value || 'all';

  resourceCards.forEach((card) => {
    const text = card.innerText.toLowerCase();
    const category = card.dataset.resourceCategory;
    const matchKeyword = text.includes(keyword);
    const matchCategory = selectedCategory === 'all' || selectedCategory === category;

    card.classList.toggle('hidden', !(matchKeyword && matchCategory));
  });
}

if (resourceSearchInput && resourceCategoryFilter) {
  resourceSearchInput.addEventListener('input', filterResources);
  resourceCategoryFilter.addEventListener('change', filterResources);
}

// Survey Management Variables
let currentStep = 1;
let verifiedStudent = null;
let otpTimer = null;
let latestDashboardData = [];

// Form DOM Elements
const surveyForm = document.getElementById('surveyForm');
const surveyProgressBar = document.getElementById('surveyProgressBar');
const stepIndicators = document.querySelectorAll('[data-step-indicator]');
const surveySteps = document.querySelectorAll('.survey-step');
const sendOtpBtn = document.getElementById('sendOtpBtn');
const verifyOtpBtn = document.getElementById('verifyOtpBtn');
const otpBox = document.getElementById('otpBox');
const otpStatus = document.getElementById('otpStatus');
const resetSurveyBtn = document.getElementById('resetSurveyBtn');

const contactDateInput = document.getElementById('preferredContactDate');
const timeRadios = document.getElementsByName('preferredContactTime');

// Configure date constraints
if (contactDateInput) {
  const today = new Date().toISOString().split('T')[0];
  contactDateInput.setAttribute('min', today);
}

// Date-Time Validation Logic
function validateDateTime() {
  const dateValStr = contactDateInput?.value;
  const selectedTime = Array.from(timeRadios).find(r => r.checked)?.value;
  const warningText = document.getElementById('dateTimeWarning');
  
  if (!warningText) return true;
  
  warningText.textContent = '';
  warningText.classList.add('hidden');
  
  if (!dateValStr) return true;
  
  const dateVal = new Date(dateValStr);
  const day = dateVal.getDay(); // 0 = Sunday, 6 = Saturday
  
  if (day === 0) {
    warningText.textContent = '⚠️ Cảnh báo: Trung tâm Hỗ trợ học vụ nghỉ làm việc ngày Chủ nhật. Vui lòng chọn ngày từ Thứ 2 đến Thứ 6 hoặc sáng Thứ 7.';
    warningText.classList.remove('hidden');
    return false;
  }
  
  if (day === 6) {
    // Saturday
    if (selectedTime && selectedTime !== 'Buổi sáng') {
      warningText.textContent = '⚠️ Cảnh báo: Thứ Bảy trung tâm chỉ làm việc BUỔI SÁNG (chiều và tối nghỉ). Vui lòng đổi khung giờ thành Buổi sáng hoặc chọn ngày khác.';
      warningText.classList.remove('hidden');
      return false;
    }
    
    if (!selectedTime) {
      warningText.textContent = '⚠️ Lưu ý: Bạn đã chọn Thứ 7, trung tâm chỉ nhận cuộc gọi/lịch hẹn vào BUỔI SÁNG.';
      warningText.classList.remove('hidden');
    }
  }
  
  return true;
}

if (contactDateInput) {
  contactDateInput.addEventListener('change', validateDateTime);
}
timeRadios.forEach(radio => {
  radio.addEventListener('change', validateDateTime);
});

function setSurveyStep(step) {
  currentStep = step;

  surveySteps.forEach((item) => {
    item.classList.toggle('active', Number(item.dataset.step) === step);
  });

  stepIndicators.forEach((item) => {
    const stepNum = Number(item.dataset.stepIndicator);
    item.classList.toggle('active', stepNum === step);
    item.classList.toggle('completed', stepNum < step);
  });

  if (surveyProgressBar) {
    surveyProgressBar.style.width = `${Math.max(20, step * 20)}%`;
  }

  // Scroll to survey section
  const section = document.getElementById('survey-section');
  if (section && step > 1 && step < 5) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Timer for OTP expiration
function startOtpTimer(durationSeconds) {
  clearInterval(otpTimer);
  let timeLeft = durationSeconds;

  const updateStatusText = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timeFormatted = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    if (otpStatus) {
      otpStatus.textContent = `Mã OTP đã được gửi. Hiệu lực còn: ${timeFormatted}`;
      otpStatus.style.color = 'var(--uef-blue-dark)';
    }
  };

  updateStatusText();

  otpTimer = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(otpTimer);
      if (otpStatus) {
        otpStatus.textContent = 'Mã OTP đã hết hạn. Vui lòng gửi lại mã mới.';
        otpStatus.style.color = 'var(--uef-red-dark)';
      }
      verifyOtpBtn.disabled = true;
    } else {
      updateStatusText();
    }
  }, 1000);
}

// Validator for Form Steps
function validateStep(step) {
  const activeStep = document.querySelector(`.survey-step[data-step="${step}"]`);
  const requiredFields = activeStep?.querySelectorAll('[required]') || [];

  for (const field of requiredFields) {
    if ((field.type === 'radio' || field.type === 'checkbox') && field.name) {
      const checked = activeStep.querySelector(`[name="${field.name}"]:checked`);
      if (!checked) {
        showToast('Vui lòng chọn đầy đủ thông tin bắt buộc trước khi tiếp tục.', 'error');
        return false;
      }
    } else if (!field.value.trim()) {
      field.focus();
      showToast('Vui lòng điền đầy đủ các trường thông tin bắt buộc.', 'error');
      return false;
    }
  }

  if (step === 4) {
    if (!validateDateTime()) {
      showToast('Lịch hẹn liên hệ mong muốn trùng với ngày nghỉ/giờ nghỉ của Trung tâm.', 'error');
      return false;
    }
  }

  return true;
}

// Helper methods for checkboxes and radios
function getCheckedValues(name) {
  return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`))
    .map((item) => item.value)
    .join('; ');
}

function getRadioValue(name) {
  return document.querySelector(`input[name="${name}"]:checked`)?.value || '';
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.endsWith('@uef.edu.vn');
}

function isValidStudentId(studentId) {
  return /^[A-Za-z0-9]{5,20}$/.test(studentId);
}

// Apps Script REST Calls
async function callAppsScript(payload) {
  if (!GOOGLE_APPS_SCRIPT_ENDPOINT) {
    throw new Error('Google Apps Script URL chưa được cấu hình.');
  }

  const response = await fetch(GOOGLE_APPS_SCRIPT_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(payload)
  });

  if (!response.ok) throw new Error('Không thể kết nối đến máy chủ Google Apps Script.');
  return await response.json();
}

// OTP Interactions
sendOtpBtn?.addEventListener('click', async () => {
  const studentId = document.getElementById('studentId')?.value.trim() || '';
  const email = document.getElementById('studentEmail')?.value.trim().toLowerCase() || '';

  if (!studentId || !email) {
    showToast('Vui lòng nhập đầy đủ MSSV và email sinh viên.', 'error');
    return;
  }

  if (!isValidStudentId(studentId)) {
    showToast('Mã số sinh viên không hợp lệ.', 'error');
    return;
  }

  if (!isValidEmail(email)) {
    showToast('Email không đúng định dạng hoặc không thuộc tên miền @uef.edu.vn.', 'error');
    return;
  }

  sendOtpBtn.disabled = true;
  sendOtpBtn.textContent = 'Đang gửi...';
  if (otpStatus) {
    otpStatus.textContent = 'Đang tiến hành tạo và gửi mã OTP...';
    otpStatus.style.color = 'var(--text-muted)';
  }

  try {
    const result = await callAppsScript({
      action: 'sendOtp',
      studentId,
      email
    });

    if (result.success) {
      showToast('Đã gửi mã OTP đến email sinh viên!', 'success');
      otpBox?.classList.remove('hidden');
      verifyOtpBtn.disabled = false;
      startOtpTimer(300); // 5 phút
    } else {
      if (otpStatus) {
        otpStatus.textContent = result.message || 'Gửi OTP thất bại.';
        otpStatus.style.color = 'var(--uef-red-dark)';
      }
      showToast(result.message || 'Lỗi gửi mã OTP.', 'error');
    }
  } catch (error) {
    if (otpStatus) {
      otpStatus.textContent = 'Lỗi kết nối. Vui lòng kiểm tra lại đường truyền.';
      otpStatus.style.color = 'var(--uef-red-dark)';
    }
    showToast(error.message || 'Gửi OTP thất bại.', 'error');
  } finally {
    sendOtpBtn.disabled = false;
    sendOtpBtn.textContent = 'Gửi mã OTP';
  }
});

verifyOtpBtn?.addEventListener('click', async () => {
  const studentId = document.getElementById('studentId')?.value.trim() || '';
  const email = document.getElementById('studentEmail')?.value.trim().toLowerCase() || '';
  const otp = document.getElementById('otpCode')?.value.trim() || '';

  if (!otp) {
    showToast('Vui lòng nhập mã OTP để xác minh.', 'error');
    return;
  }

  verifyOtpBtn.disabled = true;
  verifyOtpBtn.textContent = 'Đang xác thực...';

  try {
    const result = await callAppsScript({
      action: 'verifyOtp',
      studentId,
      email,
      otp
    });

    if (result.success) {
      clearInterval(otpTimer);
      showToast('Xác thực sinh viên thành công!', 'success');
      verifiedStudent = result.student || { studentId, email };
      setSurveyStep(2);
    } else {
      if (otpStatus) {
        otpStatus.textContent = result.message || 'Mã xác thực không chính xác.';
        otpStatus.style.color = 'var(--uef-red-dark)';
      }
      showToast(result.message || 'Xác thực thất bại.', 'error');
    }
  } catch (error) {
    showToast(error.message || 'Lỗi hệ thống xác thực OTP.', 'error');
  } finally {
    verifyOtpBtn.disabled = false;
    verifyOtpBtn.textContent = 'Xác minh & Tiếp tục';
  }
});

// Stepper navigation buttons
document.querySelectorAll('[data-next-step]').forEach((button) => {
  button.addEventListener('click', () => {
    const targetStep = Number(button.dataset.nextStep);
    if (validateStep(currentStep)) {
      setSurveyStep(targetStep);
    }
  });
});

document.querySelectorAll('[data-prev-step]').forEach((button) => {
  button.addEventListener('click', () => {
    setSurveyStep(Number(button.dataset.prevStep));
  });
});

// Mapping rating variables into database compatible fields (backward compatibility)
function mapRatingsToDatabase(payload, discipline, method, motivation, wellbeing, support) {
  // 1. Motivation -> academicStatus
  if (motivation <= 2) payload.academicStatus = 'gap-nhieu-kho-khan';
  else if (motivation === 3) payload.academicStatus = 'can-cai-thien';
  else if (motivation === 4) payload.academicStatus = 'on-dinh';
  else payload.academicStatus = 'muon-phat-trien';

  // 2. Method -> lessonFollow
  if (method <= 2) payload.lessonFollow = 'rat-kho';
  else if (method === 3) payload.lessonFollow = 'hoi-kho';
  else if (method === 4) payload.lessonFollow = 'binh-thuong';
  else payload.lessonFollow = 'tot';

  // 3. Wellbeing -> pressureLevel
  if (wellbeing === 1) payload.pressureLevel = 'Rất cao';
  else if (wellbeing === 2) payload.pressureLevel = 'Cao';
  else if (wellbeing === 3) payload.pressureLevel = 'Vừa phải';
  else payload.pressureLevel = 'Thấp';

  // Generate support group based on mapping rules
  payload.group = mapSurveyGroup(payload);
}

function mapSurveyGroup(payload) {
  // Triggers Cần hỗ trợ sâu if immediate support checked or rating is 1 (high danger)
  const hasImmediateSupport = 
    payload.needSupportDiscipline || 
    payload.needSupportMethod || 
    payload.needSupportMotivation || 
    payload.needSupportWellbeing || 
    payload.needSupportSupport;

  const highRisk =
    payload.ratings.discipline === 1 ||
    payload.ratings.method === 1 ||
    payload.ratings.motivation === 1 ||
    payload.ratings.wellbeing === 1 ||
    payload.ratings.support === 1 ||
    hasImmediateSupport;

  if (highRisk) return 'Cần hỗ trợ sâu';

  const improve =
    payload.ratings.discipline === 2 ||
    payload.ratings.method === 2 ||
    payload.ratings.motivation === 2 ||
    payload.ratings.wellbeing === 2 ||
    payload.ratings.support === 2;

  if (improve) return 'Cần cải thiện';

  if (payload.ratings.motivation === 5) return 'Phát triển thêm';

  return 'Theo dõi định kỳ';
}

// Compute ratings, generate custom report and advice (multi-dimensional)
function generateAcademicReport(discipline, method, motivation, wellbeing, support) {
  // Compute overall score
  const sum = discipline + method + motivation + wellbeing + support;
  const score100 = Math.round(((sum - 5) / 20) * 100);

  // Set overall score UI text
  const scoreText = document.getElementById('reportScoreText');
  if (scoreText) scoreText.textContent = score100;

  // Animate SVG circular progress gauge
  const reportSvgCircle = document.getElementById('reportSvgCircle');
  if (reportSvgCircle) {
    const circumference = 440; // 2 * pi * 70
    const offset = circumference - (score100 / 100) * circumference;
    reportSvgCircle.style.strokeDashoffset = offset;
  }

  // Set overall health description
  const titleText = document.getElementById('reportTitleText');
  const descText = document.getElementById('reportDescText');

  if (score100 <= 40) {
    if (titleText) titleText.textContent = 'Cần được hỗ trợ sớm';
    if (descText) descText.textContent = 'Kết quả tự đánh giá cho thấy việc học tập hiện tại đang tạo ra khá nhiều thách thức và áp lực cho bạn. Đừng lo lắng, hãy bắt đầu từ việc nhỏ nhất và liên hệ với Trung tâm để được hỗ trợ kịp thời.';
  } else if (score100 <= 60) {
    if (titleText) titleText.textContent = 'Cần điều chỉnh nhịp học';
    if (descText) descText.textContent = 'Bạn có nền tảng học tập tốt nhưng phương pháp và cách điều hòa thời gian biểu chưa đạt trạng thái tối ưu. Hãy thiết lập lại kỷ luật để tránh quá tải cuối kỳ.';
  } else if (score100 <= 80) {
    if (titleText) titleText.textContent = 'Nhịp học khá ổn định';
    if (descText) descText.textContent = 'Bạn đang duy trì thói quen học tập tương đối tốt. Hãy củng cố thêm các kỹ năng chuyên sâu và chủ động trao đổi bài để đạt kết quả xuất sắc hơn.';
  } else {
    if (titleText) titleText.textContent = 'Trạng thái rất xuất sắc!';
    if (descText) descText.textContent = 'Bạn có kỹ năng tự học, kỷ luật cá nhân và năng lực cân bằng tinh thần vượt trội. Hãy tiếp tục phát huy và thử thách bản thân ở những mục tiêu cao hơn!';
  }

  // Set progress bars for the 5 dimensions
  const updateBar = (barId, valId, rating) => {
    const pct = rating * 20;
    const bar = document.getElementById(barId);
    const text = document.getElementById(valId);
    if (bar) bar.style.width = `${pct}%`;
    if (text) text.textContent = `${pct}/100`;
  };

  updateBar('barDiscipline', 'valDiscipline', discipline);
  updateBar('barMethod', 'valMethod', method);
  updateBar('barMotivation', 'valMotivation', motivation);
  updateBar('barWellbeing', 'valWellbeing', wellbeing);
  updateBar('barSupport', 'valSupport', support);

  // Define dimension advices
  const dimensions = [
    { name: 'discipline', score: discipline, title: 'Chuyên cần & Kỷ luật', text: 'Bạn nên thiết lập lại thời khóa biểu cá nhân, ghi chú tất cả deadline vào điện thoại và đặt báo thức sớm hơn 15 phút trước tiết học.' },
    { name: 'method', score: method, title: 'Phương pháp học tập', text: 'Hãy tập thói quen xem bài trước khi lên lớp 10 phút, ghi chép lại các từ khóa cốt lõi và dành 20 phút ôn lại kiến thức ngay trong ngày.' },
    { name: 'motivation', score: motivation, title: 'Động lực & Mục tiêu', text: 'Hãy thảo luận định hướng học tập cùng cố vấn, thiết lập một mục tiêu nhỏ khả thi trong 2 tuần tới để lấy lại tự tin học tập.' },
    { name: 'wellbeing', score: wellbeing, title: 'Cân bằng cuộc sống & Tinh thần', text: 'Đảm bảo giấc ngủ sâu từ 7-8 tiếng và rà soát lại quỹ thời gian đi làm thêm hoặc giải trí ngoài giờ để tránh suy nhược, kiệt sức.' },
    { name: 'support', score: support, title: 'Chủ động tìm hỗ trợ', text: 'Nhận hỗ trợ là thế mạnh của người tự học. Hãy tích cực trao đổi bài với bạn học và đặt câu hỏi cho giảng viên đứng lớp khi gặp bài khó.' }
  ];

  // Identify all warnings (score <= 2: Rất yếu / Yếu)
  const warnings = dimensions.filter(d => d.score <= 2);
  const adviceBox = document.getElementById('reportAdviceBox');
  const adviceList = document.getElementById('reportAdviceList');

  if (adviceBox && adviceList) {
    if (warnings.length > 0) {
      // Dynamic rendering of multiple warning areas
      adviceBox.style.borderLeftColor = 'var(--uef-red)';
      adviceBox.style.background = 'var(--uef-red-light)';
      
      const titleElem = adviceBox.querySelector('h5');
      if (titleElem) titleElem.textContent = `Lưu ý học vụ ưu tiên cần cải thiện (${warnings.length})`;
      
      adviceList.innerHTML = warnings.map(w => `
        <div style="margin-bottom: 14px; padding-bottom: 10px; border-bottom: 1px solid rgba(225, 29, 72, 0.08);">
          <strong style="color: var(--uef-red-dark); font-size: 13.5px;">• Khía cạnh: ${escapeHtml(w.title)} (Thang điểm: ${w.score}/5)</strong>
          <p style="margin: 4px 0 0; font-size: 13px; color: var(--text-muted); line-height: 1.5;">${escapeHtml(w.text)}</p>
        </div>
      `).join('');
    } else {
      // Green style congratulating the student (No warnings at all)
      adviceBox.style.borderLeftColor = 'var(--success)';
      adviceBox.style.background = 'var(--success-light)';
      
      const titleElem = adviceBox.querySelector('h5');
      if (titleElem) titleElem.textContent = 'Chúc mừng! Sức khỏe học tập đang ở trạng thái tốt';
      
      adviceList.innerHTML = `
        <p style="font-size: 13.5px; color: var(--text-muted); line-height: 1.6;">
          Tất cả các khía cạnh học vụ và đời sống của bạn đều đạt từ mức Ổn định trở lên. Không phát hiện yếu tố nào rơi vào diện cảnh báo học tập. 
          Hãy tiếp tục duy trì phương pháp học và thói quen tích cực hiện tại nhé!
        </p>
      `;
    }
  }
}

// Database local responses cache (fallback)
function getLocalResponses() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (error) {
    return [];
  }
}

async function submitSurveyToSheet(payload) {
  try {
    return await callAppsScript({
      action: 'submitSurvey',
      payload
    });
  } catch (error) {
    // If Script is offline or fails, write to localstorage cache
    const data = getLocalResponses();
    data.push(payload);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return {
      success: true,
      message: 'Đã lưu dữ liệu tạm thời vào bộ nhớ trình duyệt vì không thể kết nối Apps Script.'
    };
  }
}

// Submit Form Action
surveyForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!verifiedStudent) {
    showToast('Vui lòng xác thực tài khoản qua OTP trước khi gửi.', 'error');
    setSurveyStep(1);
    return;
  }

  if (!validateStep(4)) return;

  const studentId = document.getElementById('studentId')?.value.trim() || '';
  const email = document.getElementById('studentEmail')?.value.trim().toLowerCase() || '';

  const discipline = Number(getRadioValue('disciplineRating') || 0);
  const method = Number(getRadioValue('methodRating') || 0);
  const motivation = Number(getRadioValue('motivationRating') || 0);
  const wellbeing = Number(getRadioValue('wellbeingRating') || 0);
  const support = Number(getRadioValue('supportRating') || 0);

  const needSupportDiscipline = document.querySelector('input[name="needSupportDiscipline"]')?.checked || false;
  const needSupportMethod = document.querySelector('input[name="needSupportMethod"]')?.checked || false;
  const needSupportMotivation = document.querySelector('input[name="needSupportMotivation"]')?.checked || false;
  const needSupportWellbeing = document.querySelector('input[name="needSupportWellbeing"]')?.checked || false;
  const needSupportSupport = document.querySelector('input[name="needSupportSupport"]')?.checked || false;

  const payload = {
    submittedAt: new Date().toLocaleString('vi-VN'),
    studentId,
    email,
    fullName: document.getElementById('fullName')?.value.trim() || '',
    phoneNumber: document.getElementById('phoneNumber')?.value.trim() || '',
    ratings: { discipline, method, motivation, wellbeing, support },
    needSupportDiscipline,
    needSupportMethod,
    needSupportMotivation,
    needSupportWellbeing,
    needSupportSupport,
    difficulty: getCheckedValues('difficulties'),
    support: getCheckedValues('supportNeeds'),
    contactNeed: getRadioValue('contactNeed'),
    preferredContactDate: contactDateInput?.value || '',
    preferredContactTime: getRadioValue('preferredContactTime'),
    note: document.getElementById('note')?.value.trim() || ''
  };

  // Perform compatibility mapping
  mapRatingsToDatabase(payload, discipline, method, motivation, wellbeing, support);

  const submitBtn = document.getElementById('submitSurveyBtn');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Đang gửi...';
  }

  try {
    const result = await submitSurveyToSheet(payload);

    if (result.success) {
      showToast('Gửi khảo sát thành công!', 'success');
      
      // Update local storage responses
      const localData = getLocalResponses();
      // Ensure we don't duplicate if it was already cached by submitSurveyToSheet
      if (!localData.some(item => item.submittedAt === payload.submittedAt && item.studentId === payload.studentId)) {
        localData.push(payload);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(localData));
      }

      // Generate results and show step 5
      generateAcademicReport(discipline, method, motivation, wellbeing, support);
      setSurveyStep(5);
      
      await renderDashboard();
    } else {
      showToast(result.message || 'Lỗi khi gửi dữ liệu khảo sát.', 'error');
    }
  } catch (error) {
    showToast(error.message || 'Không thể lưu phản hồi khảo sát.', 'error');
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `Gửi khảo sát ngay <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 18px; height: 18px;"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path></svg>`;
    }
  }
});

// Restart Survey
resetSurveyBtn?.addEventListener('click', () => {
  surveyForm?.reset();
  verifiedStudent = null;
  otpBox?.classList.add('hidden');
  if (otpStatus) otpStatus.textContent = '';
  
  // Unselect all choice cards classes
  document.querySelectorAll('.choice-card').forEach((card) => {
    card.classList.remove('selected');
  });

  const warningText = document.getElementById('dateTimeWarning');
  if (warningText) {
    warningText.textContent = '';
    warningText.classList.add('hidden');
  }

  setSurveyStep(1);
  showToast('Đã làm mới biểu mẫu khảo sát.', 'info');
});

// Update selected card background highlights
function updateChoiceCards() {
  document.querySelectorAll('.choice-card').forEach((card) => {
    const input = card.querySelector('input');
    card.classList.toggle('selected', Boolean(input?.checked));
  });
}

document.addEventListener('change', (event) => {
  if (event.target.matches('.choice-card input') || event.target.matches('.opt-card input')) {
    updateChoiceCards();
  }
});

// ADMIN PANEL LOGIC
const adminLogin = document.getElementById('adminLogin');
const adminDashboard = document.getElementById('adminDashboard');
const adminPassword = document.getElementById('adminPassword');
const adminLoginBtn = document.getElementById('adminLoginBtn');
const adminLoginStatus = document.getElementById('adminLoginStatus');
const adminSearchInput = document.getElementById('adminSearchInput');
const adminGroupFilter = document.getElementById('adminGroupFilter');

async function getDashboardResponses() {
  try {
    const result = await callAppsScript({
      action: 'getDashboardData',
      adminKey: ADMIN_PASSWORD
    });

    if (result.success) {
      return result.responses || [];
    } else {
      throw new Error(result.message || 'Lỗi truy cập dữ liệu quản trị.');
    }
  } catch (error) {
    console.warn('Apps Script Dashboard API failed, fallback to local storage:', error.message);
    return getLocalResponses();
  }
}

async function renderDashboard() {
  const tbody = document.getElementById('responsesTableBody');
  if (!tbody) return;

  try {
    latestDashboardData = await getDashboardResponses();
  } catch (error) {
    tbody.innerHTML = `<tr><td colspan="8" class="empty-row">${escapeHtml(error.message)}</td></tr>`;
    return;
  }

  const allData = latestDashboardData;
  const data = getFilteredResponses(allData);

  const totalResponses = document.getElementById('totalResponses');
  const groupIntensive = document.getElementById('groupIntensive');
  const groupImprove = document.getElementById('groupImprove');
  const groupDevelop = document.getElementById('groupDevelop');

  if (totalResponses) totalResponses.textContent = allData.length;
  if (groupIntensive) groupIntensive.textContent = allData.filter((item) => item.group === 'Cần hỗ trợ sâu').length;
  if (groupImprove) groupImprove.textContent = allData.filter((item) => item.group === 'Cần cải thiện').length;
  if (groupDevelop) groupDevelop.textContent = allData.filter((item) => item.group === 'Phát triển thêm').length;

  if (!data.length) {
    tbody.innerHTML = '<tr><td colspan="8" class="empty-row">Không tìm thấy dữ liệu sinh viên phù hợp.</td></tr>';
    return;
  }

  tbody.innerHTML = data.map((item) => `
    <tr>
      <td>${escapeHtml(item.submittedAt || '')}</td>
      <td><strong>${escapeHtml(item.studentId || '')}</strong></td>
      <td>${escapeHtml(item.fullName || 'Chưa cung cấp')}</td>
      <td>${escapeHtml(item.email || '')}</td>
      <td>
        <span class="eyebrow" style="margin-bottom:0; font-size:11px; padding:3px 10px; ${
          item.group === 'Cần hỗ trợ sâu' ? 'background:var(--uef-red-light); color:var(--uef-red-dark); border-color:rgba(225,29,72,0.1);' :
          item.group === 'Cần cải thiện' ? 'background:var(--warning-light); color:var(--warning); border-color:rgba(245,158,11,0.1);' :
          item.group === 'Phát triển thêm' ? 'background:var(--uef-blue-light); color:var(--uef-blue-dark); border-color:rgba(37,99,235,0.1);' :
          'background:var(--success-light); color:var(--success); border-color:rgba(16,185,129,0.1);'
        }">
          ${escapeHtml(item.group || 'Theo dõi định kỳ')}
        </span>
      </td>
      <td>${escapeHtml(item.phoneNumber || 'Chưa cung cấp')}</td>
      <td>${escapeHtml(item.difficulty || 'Không chọn')}</td>
      <td>${escapeHtml(item.support || 'Không chọn')}</td>
    </tr>
  `).join('');
}

function getFilteredResponses(sourceData = latestDashboardData) {
  const keyword = (adminSearchInput?.value || '').toLowerCase().trim();
  const selectedGroup = adminGroupFilter?.value || 'all';

  return sourceData.filter((item) => {
    const text = [
      item.studentId,
      item.fullName,
      item.email,
      item.phoneNumber,
      item.group,
      item.difficulty,
      item.support,
      item.contactNeed,
      item.preferredContactDate,
      item.preferredContactTime,
      item.note
    ].join(' ').toLowerCase();

    const matchKeyword = text.includes(keyword);
    const matchGroup = selectedGroup === 'all' || item.group === selectedGroup;

    return matchKeyword && matchGroup;
  });
}

adminLoginBtn?.addEventListener('click', async () => {
  if (adminPassword?.value === ADMIN_PASSWORD) {
    adminLogin?.classList.add('hidden');
    document.getElementById('adminAuthOverlay')?.classList.add('hidden');
    adminDashboard?.classList.remove('hidden');
    if (adminLoginStatus) adminLoginStatus.textContent = '';
    showToast('Chào mừng Quản trị viên!', 'success');
    await renderDashboard();
  } else {
    if (adminLoginStatus) {
      adminLoginStatus.textContent = 'Mật khẩu truy cập chưa chính xác.';
    }
    showToast('Đăng nhập thất bại.', 'error');
  }
});

adminPassword?.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') adminLoginBtn?.click();
});

adminSearchInput?.addEventListener('input', () => renderDashboard());
adminGroupFilter?.addEventListener('change', () => renderDashboard());

document.getElementById('refreshDashboardBtn')?.addEventListener('click', async () => {
  showToast('Đang cập nhật dữ liệu từ máy chủ...', 'info');
  await renderDashboard();
  showToast('Đã làm mới dữ liệu.', 'success');
});

document.getElementById('clearDemoDataBtn')?.addEventListener('click', () => {
  const confirmed = confirm('Bạn có chắc chắn muốn xóa dữ liệu khảo sát demo đang lưu tạm thời ở trình duyệt này? Dữ liệu trên Google Sheet sẽ KHÔNG bị ảnh hưởng.');
  if (!confirmed) return;

  localStorage.removeItem(STORAGE_KEY);
  showToast('Đã xóa dữ liệu demo trên thiết bị này.', 'success');
  renderDashboard();
});

// CSV Export Utility (Updated with new column sets)
document.getElementById('exportCsvBtn')?.addEventListener('click', () => {
  const data = getFilteredResponses(latestDashboardData);

  if (!data.length) {
    showToast('Không tìm thấy dữ liệu nào để xuất.', 'error');
    return;
  }

  const headers = [
    'Thời gian gửi', 'MSSV', 'Email', 'Họ tên', 'Số điện thoại', 'Nhóm hỗ trợ',
    'Điểm Chuyên cần', 'Cần hỗ trợ Chuyên cần',
    'Điểm Phương pháp', 'Cần hỗ trợ Phương pháp',
    'Điểm Động lực', 'Cần hỗ trợ Động lực',
    'Điểm Cân bằng', 'Cần hỗ trợ Cân bằng',
    'Điểm Chủ động hỗ trợ', 'Cần hỗ trợ Chủ động',
    'Khó khăn chính', 'Nhu cầu hỗ trợ', 'Đồng ý liên hệ', 'Ngày liên hệ', 'Khung giờ liên hệ', 'Ghi chú thêm'
  ];

  const rows = data.map((item) => [
    item.submittedAt,
    item.studentId,
    item.email,
    item.fullName,
    item.phoneNumber,
    item.group,
    item.disciplineScore !== undefined ? item.disciplineScore : (item.ratings?.discipline || ''),
    item.needSupportDiscipline === true || item.needSupportDiscipline === 'Cần hỗ trợ ngay' ? 'Cần hỗ trợ ngay' : 'Không',
    item.methodScore !== undefined ? item.methodScore : (item.ratings?.method || ''),
    item.needSupportMethod === true || item.needSupportMethod === 'Cần hỗ trợ ngay' ? 'Cần hỗ trợ ngay' : 'Không',
    item.motivationScore !== undefined ? item.motivationScore : (item.ratings?.motivation || ''),
    item.needSupportMotivation === true || item.needSupportMotivation === 'Cần hỗ trợ ngay' ? 'Cần hỗ trợ ngay' : 'Không',
    item.wellbeingScore !== undefined ? item.wellbeingScore : (item.ratings?.wellbeing || ''),
    item.needSupportWellbeing === true || item.needSupportWellbeing === 'Cần hỗ trợ ngay' ? 'Cần hỗ trợ ngay' : 'Không',
    item.supportScore !== undefined ? item.supportScore : (item.ratings?.support || ''),
    item.needSupportSupport === true || item.needSupportSupport === 'Cần hỗ trợ ngay' ? 'Cần hỗ trợ ngay' : 'Không',
    item.difficulty,
    item.support,
    item.contactNeed,
    item.preferredContactDate,
    item.preferredContactTime,
    item.note
  ]);

  const csvContent = [headers, ...rows]
    .map((row) => row.map((cell) => `"${String(cell || '').replace(/"/g, '""')}"`).join(','))
    .join('\n');

  const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = url;
  link.download = `nguyen-vong-sinh-vien-uef-${new Date().toISOString().slice(0, 10)}.csv`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showToast('Xuất tệp CSV thành công!', 'success');
});

// Admin hash trigger in URL
function openHiddenAdminFromHash() {
  if (window.location.hash === HIDDEN_ADMIN_HASH) {
    showPage('admin');
  } else if (document.body.classList.contains('admin-only-mode')) {
    document.body.classList.remove('admin-only-mode');
    showPage('home');
  }
}

// Escapes special HTML tags to prevent XSS injection
function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Initializing page elements
setSurveyStep(1);
updateChoiceCards();
openHiddenAdminFromHash();
window.addEventListener('hashchange', openHiddenAdminFromHash);
