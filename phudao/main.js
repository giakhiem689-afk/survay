/*
  UEF TUTORING ATTENDANCE SYSTEM - MAIN.JS
  ========================================
*/

// Cấu hình Google Apps Script Endpoint cho file điểm danh phụ đạo
// Sau khi bạn deploy Web App từ Google Sheets phụ đạo, hãy dán URL vào đây
const GOOGLE_APPS_SCRIPT_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxo9zJkI3BwFt58rJktDrDbzvIx_arZubllovesOnXL1Hcr-zwtO-vY8oGmwiwZmOhe/exec'; 

const TEACHER_PASSWORD = 'phudao2026';
const SALT = 'uef_phudao_2026'; // Mã muối bảo mật
const LOCAL_SUBJECTS_KEY = 'uef_phudao_subjects';
const LOCAL_ATTENDANCE_PREFIX = 'uef_phudao_attendance_';

// State Management
let currentRole = 'teacher'; // 'teacher' hoặc 'student'
let currentSubject = '';
let subjectsList = []; // Danh sách môn học lưu trong bộ nhớ
let qrTimer = null;
let qrExpireTime = 0;
let pollingTimer = null;
let otpCooldownTimer = null;
let isAuthRequired = false; // Chế độ xác thực mặc định là false

// DOM Elements
const toastContainer = document.getElementById('toastContainer');
const teacherFlow = document.getElementById('teacherFlow');
const teacherDashboard = document.getElementById('teacherDashboard');
const syncStatusBadge = document.getElementById('syncStatusBadge');
const subjectListContainer = document.getElementById('subjectList');
const qrPanel = document.getElementById('qrPanel');
const currentSubjectTitle = document.getElementById('currentSubjectTitle');
const qrExpiredOverlay = document.getElementById('qrExpiredOverlay');
const regenerateQrBtn = document.getElementById('regenerateQrBtn');
const qrCodeImage = document.getElementById('qrCodeImage');
const qrCountdown = document.getElementById('qrCountdown');
const zoomQrBtn = document.getElementById('zoomQrBtn');

// QR Zoom Modal DOM Elements
const qrModal = document.getElementById('qrModal');
const modalSubjectTitle = document.getElementById('modalSubjectTitle');
const modalQrCodeImage = document.getElementById('modalQrCodeImage');
const modalQrCountdown = document.getElementById('modalQrCountdown');
const closeQrModalBtn = document.getElementById('closeQrModalBtn');

const attendancePanel = document.getElementById('attendancePanel');
const attendanceCount = document.getElementById('attendanceCount');
const attendanceTableBody = document.getElementById('attendanceTableBody');

// Student DOM Elements
const studentFlow = document.getElementById('studentFlow');
const studentExpiredScreen = document.getElementById('studentExpiredScreen');
const studentStepEmail = document.getElementById('studentStepEmail');
const studentSubjectTitle = document.getElementById('studentSubjectTitle');
const studentEmailInput = document.getElementById('studentEmail');
const emailError = document.getElementById('emailError');
const sendStudentOtpBtn = document.getElementById('sendStudentOtpBtn');
const studentStepOtp = document.getElementById('studentStepOtp');
const studentOtpInput = document.getElementById('studentOtp');
const otpError = document.getElementById('otpError');
const otpTimerMsg = document.getElementById('otpTimerMsg');
const verifyStudentOtpBtn = document.getElementById('verifyStudentOtpBtn');
const studentStepInfo = document.getElementById('studentStepInfo');
const studentNameInput = document.getElementById('studentName');
const studentIdInput = document.getElementById('studentId');
const infoError = document.getElementById('infoError');
const submitAttendanceBtn = document.getElementById('submitAttendanceBtn');
const studentStepSuccess = document.getElementById('studentStepSuccess');

// --- TOAST SYSTEM ---
function showToast(message, type = 'info') {
  if (!toastContainer) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let iconSvg = '';
  if (type === 'success') {
    iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="width:18px;height:18px;color:var(--success)"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  } else if (type === 'error') {
    iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="width:18px;height:18px;color:var(--error)"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
  } else {
    iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:18px;height:18px;color:var(--uef-blue)"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
  }

  toast.innerHTML = `
    <div style="flex-shrink:0; display:grid; place-items:center;">${iconSvg}</div>
    <div class="toast-message">${escapeHtml(message)}</div>
  `;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => {
      if (toast.parentNode === toastContainer) {
        toastContainer.removeChild(toast);
      }
    }, 300);
  }, 4000);
}

// --- SECURE QR TOKEN SYSTEM (2-MINUTE TIMEOUT & CHECKSUM) ---
function generateQrToken(subject, timestamp) {
  const str = subject + timestamp + SALT;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return btoa(timestamp + '|' + Math.abs(hash));
}

function verifyQrToken(subject, b64Token) {
  try {
    const raw = atob(b64Token);
    const parts = raw.split('|');
    const timestamp = parseInt(parts[0]);
    const receivedHash = parseInt(parts[1]);
    
    const str = subject + timestamp + SALT;
    let computedHash = 0;
    for (let i = 0; i < str.length; i++) {
      computedHash = (computedHash << 5) - computedHash + str.charCodeAt(i);
      computedHash |= 0;
    }
    
    if (Math.abs(computedHash) !== receivedHash) {
      return { valid: false, reason: 'Mã QR không hợp lệ (sai chữ ký xác thực).' };
    }
    
    const now = Math.floor(Date.now() / 1000);
    const diff = now - timestamp;
    if (diff > 120) {
      return { valid: false, reason: 'Mã QR đã hết hạn (quá 2 phút).' };
    }
    if (diff < -60) {
      return { valid: false, reason: 'Thời gian trên thiết bị không đồng bộ.' };
    }
    
    return { valid: true };
  } catch (e) {
    return { valid: false, reason: 'Định dạng mã QR không chính xác.' };
  }
}

// --- CALL GOOGLE APPS SCRIPT API ---
async function callApi(payload) {
  if (!GOOGLE_APPS_SCRIPT_ENDPOINT) {
    // Trả về kết quả mô phỏng (Local Mode) nếu chưa cài đặt Sheet URL
    return await simulateLocalApi(payload);
  }

  try {
    const response = await fetch(GOOGLE_APPS_SCRIPT_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error('Không thể kết nối đến Web App Apps Script.');
    return await response.json();
  } catch (error) {
    console.error('API Error:', error.message);
    return { success: false, message: 'Lỗi kết nối máy chủ Google Sheets. Đang tự động dùng bộ nhớ máy.' };
  }
}

// Mô phỏng API thông qua LocalStorage giúp trải nghiệm trước không cần cấu hình
async function simulateLocalApi(payload) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const action = payload.action;
      if (action === 'sendOtp') {
        const otp = Math.floor(1000 + Math.random() * 9000).toString();
        localStorage.setItem(`sim_otp_${payload.email}`, otp);
        console.log(`[SIMULATED OTP] Mã OTP gửi về email ${payload.email} là: ${otp}`);
        showToast(`[Demo Mode] Mã OTP 4 số gửi về email là: ${otp}`, 'info');
        resolve({ success: true, message: 'Mã xác thực mô phỏng đã được gửi.' });
      } 
      else if (action === 'verifyOtp') {
        const savedOtp = localStorage.getItem(`sim_otp_${payload.email}`);
        if (savedOtp === payload.otp) {
          resolve({ success: true, message: 'Xác thực thành công.' });
        } else {
          resolve({ success: false, message: 'Mã OTP không đúng.' });
        }
      } 
      else if (action === 'submitAttendance') {
        const key = LOCAL_ATTENDANCE_PREFIX + payload.subject;
        const list = JSON.parse(localStorage.getItem(key)) || [];
        const record = {
          time: new Date().toLocaleString('vi-VN'),
          studentId: payload.studentId,
          fullName: payload.fullName,
          email: payload.email
        };
        list.unshift(record);
        localStorage.setItem(key, JSON.stringify(list));
        resolve({ success: true, message: 'Ghi nhận điểm danh thành công.' });
      } 
      else if (action === 'getAttendance') {
        const key = LOCAL_ATTENDANCE_PREFIX + payload.subject;
        const list = JSON.parse(localStorage.getItem(key)) || [];
        resolve({ success: true, responses: list });
      } 
      else if (action === 'createSubject') {
        resolve({ success: true, message: 'Môn học mới đã được cấu hình.' });
      }
      else if (action === 'getSubjects') {
        const list = JSON.parse(localStorage.getItem(LOCAL_SUBJECTS_KEY)) || [''];
        resolve({ success: true, subjects: list });
      }
    }, 400);
  });
}

// --- ROUTING FLOW DETERMINATION ---
function initRoute() {
  const params = new URLSearchParams(window.location.search);
  const role = params.get('role');
  const subject = params.get('subject');
  const token = params.get('token');

  if (role === 'student' && subject && token) {
    currentRole = 'student';
    currentSubject = subject;
    teacherFlow.classList.add('hidden');
    studentFlow.classList.remove('hidden');
    
    // Đọc tham số auth từ URL (mặc định là false để chuyển thẳng sang trang nhập thông tin)
    isAuthRequired = params.get('auth') === 'true';
    
    // Check QR expiration
    const check = verifyQrToken(subject, token);
    if (!check.valid) {
      studentStepEmail.classList.add('hidden');
      studentStepInfo.classList.add('hidden');
      studentExpiredScreen.classList.remove('hidden');
      showToast(check.reason, 'error');
    } else {
      studentSubjectTitle.textContent = subject;
      studentExpiredScreen.classList.add('hidden');
      if (isAuthRequired) {
        studentStepEmail.classList.remove('hidden');
        studentStepInfo.classList.add('hidden');
      } else {
        studentStepEmail.classList.add('hidden');
        studentStepInfo.classList.remove('hidden');
      }
    }
  } else {
    currentRole = 'teacher';
    studentFlow.classList.add('hidden');
    teacherFlow.classList.remove('hidden');
    teacherDashboard.classList.remove('hidden');
    
    // Clear any previous selection on fresh entry
    clearSelectedSubject();
    
    loadSubjects();
    autoSyncSubjects();
  }
}

function loadSubjects() {
  renderSubjectButtons(subjectsList);
}

async function autoSyncSubjects() {
  if (syncStatusBadge) syncStatusBadge.style.display = 'inline-flex';
  try {
    const res = await callApi({ action: 'getSubjects' });
    if (res.success && res.subjects && res.subjects.length > 0) {
      subjectsList = res.subjects;
      
      const oldSubject = currentSubject;
      
      // Render updated list of buttons
      renderSubjectButtons(subjectsList);
      
      if (oldSubject) {
        if (!subjectsList.includes(oldSubject)) {
          // If current subject was deleted, clear selection
          clearSelectedSubject();
        } else {
          // Just refresh the attendance table of active subject without changing QR
          currentSubject = oldSubject;
          document.querySelectorAll('.subject-btn').forEach(btn => {
            btn.classList.toggle('active', btn.querySelector('span').textContent === oldSubject);
          });
          await loadAttendance();
        }
      }
    }
  } catch (e) {
    console.error('Lỗi tự động đồng bộ môn học:', e);
  } finally {
    if (syncStatusBadge) syncStatusBadge.style.display = 'none';
  }
}

function renderSubjectButtons(subjects) {
  subjectListContainer.innerHTML = '';
  subjects.forEach(sub => {
    const btn = document.createElement('button');
    btn.className = `subject-btn ${sub === currentSubject ? 'active' : ''}`;
    btn.innerHTML = `
      <span>${escapeHtml(sub)}</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 16px; height: 16px;">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    `;
    btn.addEventListener('click', () => selectSubject(sub));
    subjectListContainer.appendChild(btn);
  });

  // Add "+" subject button
  const plusBtn = document.createElement('button');
  plusBtn.className = 'add-subject-btn';
  plusBtn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="width: 16px; height: 16px;">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
    Thêm môn học mới
  `;
  plusBtn.addEventListener('click', handleAddSubject);
  subjectListContainer.appendChild(plusBtn);
}

async function handleAddSubject() {
  const name = prompt('Nhập tên môn học cần thêm:');
  if (!name || !name.trim()) return;

  const cleanName = name.trim();
  if (subjectsList.includes(cleanName)) {
    showToast('Môn học này đã tồn tại trong danh sách.', 'error');
    return;
  }

  showToast('Đang khởi tạo môn học mới...', 'info');
  const res = await callApi({ action: 'createSubject', subject: cleanName });
  
  if (res.success) {
    showToast('Khởi tạo môn học thành công!', 'success');
    await autoSyncSubjects();
    selectSubject(cleanName);
  } else {
    showToast(res.message || 'Lỗi tạo môn học.', 'error');
  }
}

function selectSubject(subjectName) {
  currentSubject = subjectName;
  
  // Highlight active button
  document.querySelectorAll('.subject-btn').forEach(btn => {
    btn.classList.toggle('active', btn.querySelector('span').textContent === subjectName);
  });

  // Show panels
  currentSubjectTitle.textContent = subjectName;
  qrPanel.classList.remove('hidden');
  attendancePanel.classList.remove('hidden');

  // Trigger QR generation
  generateQrCode();
  
  // Reset table & Load attendance records
  updateAttendanceTable([]);
  loadAttendance();
  
  // Reset Polling Timer
  clearInterval(pollingTimer);
  pollingTimer = setInterval(loadAttendance, 5000);
}

// --- QR CODE GENERATION & COUNTDOWN TIMER ---
function generateQrCode() {
  clearInterval(qrTimer);
  qrExpiredOverlay.classList.add('hidden');

  const timestamp = Math.floor(Date.now() / 1000);
  const token = generateQrToken(currentSubject, timestamp);
  
  // Create student attendance URL
  const baseUrl = window.location.href.split('?')[0];
  const url = `${baseUrl}?role=student&subject=${encodeURIComponent(currentSubject)}&token=${token}&auth=false`;

  // Call QR Server API to generate image
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(url)}`;
  qrCodeImage.src = qrUrl;

  qrExpireTime = timestamp + 120; // 2 minutes (120s)
  startQrCountdown();
}

function startQrCountdown() {
  const updateTimer = () => {
    const now = Math.floor(Date.now() / 1000);
    const timeLeft = qrExpireTime - now;

    if (timeLeft <= 0) {
      clearInterval(qrTimer);
      qrCountdown.textContent = '00:00';
      if (modalQrCountdown) modalQrCountdown.textContent = '00:00';
      qrExpiredOverlay.classList.remove('hidden');
      if (qrModal) qrModal.classList.remove('active');
      showToast('Mã QR điểm danh đã hết hạn.', 'error');
    } else {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      const formattedTime = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      qrCountdown.textContent = formattedTime;
      if (modalQrCountdown) modalQrCountdown.textContent = formattedTime;
    }
  };

  updateTimer();
  qrTimer = setInterval(updateTimer, 1000);
}

regenerateQrBtn.addEventListener('click', generateQrCode);

// --- ATTENDANCE RECORDS LOADER & LIVE POLLING ---
async function loadAttendance() {
  if (!currentSubject) return;
  const res = await callApi({
    action: 'getAttendance',
    subject: currentSubject
  });

  if (res.success && res.responses) {
    updateAttendanceTable(res.responses);
  }
}

function updateAttendanceTable(records) {
  attendanceCount.textContent = `Đã điểm danh: ${records.length}`;
  if (records.length === 0) {
    attendanceTableBody.innerHTML = `
      <tr>
        <td colspan="3" class="empty-table">Chưa có sinh viên nào điểm danh môn này.</td>
      </tr>
    `;
    return;
  }

  // Render rows with vibrant, cyclic colors
  attendanceTableBody.innerHTML = records.map((rec, index) => {
    const colorIndex = (index % 5) + 1; // row-color-1 to row-color-5
    return `
      <tr class="row-color-${colorIndex}">
        <td><strong>${escapeHtml(rec.fullName)}</strong></td>
        <td><code>${escapeHtml(rec.studentId)}</code></td>
        <td>${escapeHtml(rec.time)}</td>
      </tr>
    `;
  }).join('');
}

// --- STUDENT FLOW INTERACTION ---
sendStudentOtpBtn.addEventListener('click', async () => {
  const email = studentEmailInput.value.trim().toLowerCase();
  emailError.textContent = '';

  if (!email) {
    emailError.textContent = 'Vui lòng nhập email sinh viên.';
    return;
  }

  if (!email.endsWith('@uef.edu.vn')) {
    emailError.textContent = 'Chỉ chấp nhận email sinh viên đuôi @uef.edu.vn.';
    return;
  }

  sendStudentOtpBtn.disabled = true;
  sendStudentOtpBtn.textContent = 'Đang gửi...';

  const res = await callApi({
    action: 'sendOtp',
    email: email
  });

  if (res.success) {
    showToast('Mã OTP 4 số đã được gửi về email của bạn!', 'success');
    studentStepEmail.classList.add('hidden');
    studentStepOtp.classList.remove('hidden');
    startOtpCooldown(300); // Cooldown 5 minutes
  } else {
    showToast(res.message || 'Lỗi gửi OTP.', 'error');
  }

  sendStudentOtpBtn.disabled = false;
  sendStudentOtpBtn.textContent = 'Nhận mã xác thực';
});

function startOtpCooldown(seconds) {
  clearInterval(otpCooldownTimer);
  let timeLeft = seconds;
  const updateMsg = () => {
    const min = Math.floor(timeLeft / 60);
    const sec = timeLeft % 60;
    otpTimerMsg.textContent = `Mã OTP có hiệu lực trong: ${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
  };
  
  updateMsg();
  otpCooldownTimer = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(otpCooldownTimer);
      otpTimerMsg.textContent = 'Mã OTP đã hết hạn. Hãy quay lại nhập email để gửi lại mã mới.';
      verifyStudentOtpBtn.disabled = true;
    } else {
      updateMsg();
    }
  }, 1000);
}

verifyStudentOtpBtn.addEventListener('click', async () => {
  const email = studentEmailInput.value.trim().toLowerCase();
  const otp = studentOtpInput.value.trim();
  otpError.textContent = '';

  if (!otp || otp.length !== 4) {
    otpError.textContent = 'Vui lòng nhập đầy đủ mã OTP gồm 4 số.';
    return;
  }

  verifyStudentOtpBtn.disabled = true;
  verifyStudentOtpBtn.textContent = 'Đang xác thực...';

  const res = await callApi({
    action: 'verifyOtp',
    email: email,
    otp: otp
  });

  if (res.success) {
    clearInterval(otpCooldownTimer);
    showToast('Xác thực OTP thành công!', 'success');
    studentStepOtp.classList.add('hidden');
    studentStepInfo.classList.remove('hidden');
  } else {
    otpError.textContent = res.message || 'Mã OTP không đúng.';
    showToast(res.message || 'Xác thực OTP thất bại.', 'error');
  }

  verifyStudentOtpBtn.disabled = false;
  verifyStudentOtpBtn.textContent = 'Xác minh & Tiếp tục';
});

submitAttendanceBtn.addEventListener('click', async () => {
  const email = isAuthRequired ? studentEmailInput.value.trim().toLowerCase() : 'Không xác thực';
  const fullName = studentNameInput.value.trim();
  const studentId = studentIdInput.value.trim();
  infoError.textContent = '';

  if (!fullName || !studentId) {
    infoError.textContent = 'Vui lòng nhập đầy đủ họ tên và mã số sinh viên.';
    return;
  }

  if (!/^[A-Za-z0-9]{5,20}$/.test(studentId)) {
    infoError.textContent = 'Mã số sinh viên không hợp lệ.';
    return;
  }

  submitAttendanceBtn.disabled = true;
  submitAttendanceBtn.textContent = 'Đang ghi nhận...';

  const res = await callApi({
    action: 'submitAttendance',
    subject: currentSubject,
    email: email,
    fullName: fullName,
    studentId: studentId,
    isUnauthenticated: !isAuthRequired
  });

  if (res.success) {
    showToast('Điểm danh thành công!', 'success');
    studentStepInfo.classList.add('hidden');
    studentStepSuccess.classList.remove('hidden');
  } else {
    showToast(res.message || 'Gửi điểm danh thất bại.', 'error');
  }

  submitAttendanceBtn.disabled = false;
  submitAttendanceBtn.textContent = 'Xác nhận Điểm danh';
});

// --- REFRESH BUTTON LOGIC ---
const refreshDataBtn = document.getElementById('refreshDataBtn');
const refreshIcon = document.getElementById('refreshIcon');

if (refreshDataBtn) {
  refreshDataBtn.addEventListener('click', async () => {
    if (refreshDataBtn.disabled) return;
    refreshDataBtn.disabled = true;
    if (refreshIcon) {
      refreshIcon.style.transform = 'rotate(360deg)';
    }

    try {
      showToast('Đang làm mới dữ liệu từ Google Sheets...', 'info');
      // 1. Sync subjects list
      const res = await callApi({ action: 'getSubjects' });
      if (res.success && res.subjects && res.subjects.length > 0) {
        subjectsList = res.subjects;
        loadSubjects();
        
        // If currentSubject is active, reload its attendance
        if (currentSubject) {
          if (!res.subjects.includes(currentSubject)) {
            // Clear selection if old one was deleted
            clearSelectedSubject();
          } else {
            await loadAttendance();
          }
        }
        showToast('Đã làm mới dữ liệu từ Google Sheets!', 'success');
      } else {
        showToast(res.message || 'Không thể lấy dữ liệu từ Google Sheets.', 'error');
      }
    } catch (e) {
      console.error(e);
      showToast('Có lỗi xảy ra khi làm mới.', 'error');
    } finally {
      setTimeout(() => {
        refreshDataBtn.disabled = false;
        if (refreshIcon) {
          refreshIcon.style.transform = 'none';
        }
      }, 500);
    }
  });
}

// --- BACK TO SUBJECTS LOGIC ---
const backToSubjectsBtn = document.getElementById('backToSubjectsBtn');

function clearSelectedSubject() {
  currentSubject = '';
  
  // Remove active class from buttons
  document.querySelectorAll('.subject-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  // Hide panels
  qrPanel.classList.add('hidden');
  attendancePanel.classList.add('hidden');
  if (qrModal) qrModal.classList.remove('active');

  // Clear timers
  clearInterval(qrTimer);
  clearInterval(pollingTimer);
}

if (backToSubjectsBtn) {
  backToSubjectsBtn.addEventListener('click', () => {
    clearSelectedSubject();
    showToast('Đã quay về danh sách môn học.', 'info');
  });
}

// --- QR ZOOM MODAL LOGIC ---
if (zoomQrBtn) {
  zoomQrBtn.addEventListener('click', () => {
    if (!currentSubject || !qrCodeImage.src) return;
    
    // Show high resolution version of the QR code (500x500)
    const highResUrl = qrCodeImage.src.replace('size=250x250', 'size=500x500');
    modalQrCodeImage.src = highResUrl;
    
    // Update modal content
    modalSubjectTitle.textContent = currentSubject;
    
    // Synchronize countdown timer text
    const now = Math.floor(Date.now() / 1000);
    const timeLeft = qrExpireTime - now;
    if (timeLeft > 0) {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      modalQrCountdown.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    } else {
      modalQrCountdown.textContent = '00:00';
    }
    
    // Show Modal
    qrModal.classList.add('active');
  });
}

if (closeQrModalBtn) {
  closeQrModalBtn.addEventListener('click', () => {
    qrModal.classList.remove('active');
  });
}

if (qrModal) {
  // Close modal when clicking on the dark backdrop overlay
  qrModal.addEventListener('click', (e) => {
    if (e.target === qrModal) {
      qrModal.classList.remove('active');
    }
  });
}

// --- HELPER FUNCTIONS ---
function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Initial Run
window.addEventListener('DOMContentLoaded', () => {
  initRoute();
});
