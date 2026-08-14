// Cổng thông tin Trung tâm Hỗ trợ học vụ UEF - Portal Interactivity & Security Gate
document.addEventListener('DOMContentLoaded', () => {
  const CORRECT_PASSWORD = '000000000'; // 9 số 0

  const passwordModal = document.getElementById('passwordModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCard = document.getElementById('modalCard');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const passwordForm = document.getElementById('passwordForm');
  const passwordInput = document.getElementById('passwordInput');
  const togglePwdBtn = document.getElementById('togglePwdBtn');
  const passwordError = document.getElementById('passwordError');
  const targetModuleName = document.getElementById('targetModuleName');

  let pendingRedirectUrl = '';

  // Check if session is already authenticated
  function isSessionAuthenticated() {
    return sessionStorage.getItem('portal_authenticated') === 'true';
  }

  // Open Password Modal
  function openPasswordModal(url, moduleName) {
    if (isSessionAuthenticated()) {
      window.location.href = url;
      return;
    }

    pendingRedirectUrl = url;
    targetModuleName.textContent = moduleName || 'được bảo vệ';
    passwordInput.value = '';
    passwordError.classList.add('hidden');
    passwordModal.classList.add('active');
    setTimeout(() => passwordInput.focus(), 150);
  }

  // Close Password Modal
  function closePasswordModal() {
    passwordModal.classList.remove('active');
    pendingRedirectUrl = '';
  }

  // Attach click listeners to all protected links & buttons
  document.querySelectorAll('.protected-link').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const url = btn.getAttribute('data-url');
      const moduleName = btn.getAttribute('data-module');
      openPasswordModal(url, moduleName);
    });
  });

  // Close modal event listeners
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closePasswordModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closePasswordModal);

  // Toggle Password Visibility
  if (togglePwdBtn && passwordInput) {
    togglePwdBtn.addEventListener('click', () => {
      const isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password';
      togglePwdBtn.textContent = isPassword ? '🙈' : '👁️';
    });
  }

  // Submit Password Form
  if (passwordForm) {
    passwordForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const enteredPass = passwordInput.value.trim();

      if (enteredPass === CORRECT_PASSWORD) {
        // Authenticated successfully!
        sessionStorage.setItem('portal_authenticated', 'true');
        passwordError.classList.add('hidden');
        
        // Show success state briefly before redirect
        const submitBtn = document.getElementById('submitPwdBtn');
        if (submitBtn) {
          submitBtn.innerHTML = '<span>Đang chuyển hướng...</span>';
          submitBtn.style.background = 'var(--vivid-green)';
        }

        setTimeout(() => {
          window.location.href = pendingRedirectUrl || '/';
        }, 300);
      } else {
        // Incorrect password
        passwordError.classList.remove('hidden');
        modalCard.classList.remove('shake');
        // Trigger reflow to restart animation
        void modalCard.offsetWidth;
        modalCard.classList.add('shake');
        passwordInput.select();
      }
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && passwordModal.classList.contains('active')) {
      closePasswordModal();
    }
  });

  console.log('UEF Academic Support Portal Initialized.');
});
