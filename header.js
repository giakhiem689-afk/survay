/**
 * =========================================================
 * UEF ACADEMIC SUPPORT PORTAL - SHARED GLOBAL COMPONENT
 * =========================================================
 * Single source of truth for Header, Navigation, and Footer.
 */

(function () {
  'use strict';

  const MASTER_KEY = '000000000';
  const SESSION_AUTH_KEY = 'uef_portal_authenticated';

  let pendingNavigationUrl = null;

  function initPortalHeader() {
    // Inject Global Security Password Modal for protected routes
    injectPasswordModal();
    setupAuthListeners();
  }

  function injectPasswordModal() {
    if (document.getElementById('portalSecurityModal')) return;

    const modalMarkup = `
      <div id="portalSecurityModal" class="portal-modal-overlay" aria-hidden="true">
        <div class="portal-modal-card">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="width: 44px; height: 44px; border-radius: 14px; background: #fff1f2; color: #b31217; display: flex; align-items: center; justify-content: center; font-size: 20px;">
                🔒
              </div>
              <div>
                <h3 style="font-size: 17px; font-weight: 800; color: #0f2b52; margin: 0;">Xác thực Quyền Truy cập</h3>
                <p style="font-size: 12px; color: #64748b; margin: 2px 0 0 0;" id="portalModalTargetName">Phân hệ bảo mật</p>
              </div>
            </div>
            <button type="button" id="portalModalCloseBtn" style="background: none; border: none; font-size: 18px; cursor: pointer; color: #94a3b8;">✕</button>
          </div>

          <p style="font-size: 13.5px; color: #334155; line-height: 1.5; margin-bottom: 18px;">
            Vui lòng nhập mật khẩu bảo vệ hệ thống để tiếp tục truy cập phân hệ này:
          </p>

          <form id="portalAuthForm">
            <div style="margin-bottom: 16px;">
              <input type="password" id="portalPasswordInput" placeholder="Nhập mật khẩu (9 chữ số)..." autocomplete="current-password"
                style="width: 100%; padding: 14px 18px; border: 2px solid #e2e8f0; border-radius: 14px; font-size: 15px; font-weight: 700; color: #0f172a; outline: none; transition: border-color 0.2s;" />
              <p id="portalAuthError" style="font-size: 12px; color: #dc2626; font-weight: 700; margin-top: 6px; display: none;">
                ✕ Mật khẩu không chính xác! Vui lòng thử lại.
              </p>
            </div>

            <div style="display: flex; gap: 10px;">
              <button type="button" id="portalModalCancelBtn" style="flex: 1; padding: 12px; border: 1.5px solid #e2e8f0; border-radius: 14px; background: white; color: #334155; font-weight: 700; font-size: 13.5px; cursor: pointer;">
                Hủy bỏ
              </button>
              <button type="submit" id="portalModalSubmitBtn" style="flex: 1.5; padding: 12px; border: none; border-radius: 14px; background: #b31217; color: white; font-weight: 800; font-size: 13.5px; cursor: pointer; box-shadow: 0 4px 12px rgba(179, 18, 23, 0.25);">
                Xác nhận truy cập
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalMarkup);

    const modal = document.getElementById('portalSecurityModal');
    const closeBtn = document.getElementById('portalModalCloseBtn');
    const cancelBtn = document.getElementById('portalModalCancelBtn');
    const form = document.getElementById('portalAuthForm');
    const pwdInput = document.getElementById('portalPasswordInput');
    const errText = document.getElementById('portalAuthError');

    function closeModal() {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      pwdInput.value = '';
      errText.style.display = 'none';
      pendingNavigationUrl = null;
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const enteredPwd = pwdInput.value.trim();

      if (enteredPwd === MASTER_KEY) {
        sessionStorage.setItem(SESSION_AUTH_KEY, 'true');
        closeModal();
        if (pendingNavigationUrl) {
          window.location.href = pendingNavigationUrl;
        }
      } else {
        errText.style.display = 'block';
        pwdInput.style.borderColor = '#dc2626';
        pwdInput.focus();
      }
    });
  }

  function setupAuthListeners() {
    document.querySelectorAll('.portal-auth-trigger, .protected-link').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        const targetUrl = trigger.getAttribute('data-url') || trigger.getAttribute('href');
        const targetTitle = trigger.getAttribute('data-title') || trigger.getAttribute('data-module') || 'Phân hệ Bảo mật';

        // Check if destination is protected (Phụ đạo & Công cụ)
        const isProtected = targetUrl && (targetUrl.includes('/phudao') || targetUrl.includes('/congcu') || targetUrl.includes('/thphudao'));

        if (isProtected && !sessionStorage.getItem(SESSION_AUTH_KEY)) {
          e.preventDefault();
          pendingNavigationUrl = targetUrl;

          const modal = document.getElementById('portalSecurityModal');
          const targetNameEl = document.getElementById('portalModalTargetName');
          const pwdInput = document.getElementById('portalPasswordInput');

          if (modal) {
            if (targetNameEl) targetNameEl.textContent = targetTitle;
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            if (pwdInput) setTimeout(() => pwdInput.focus(), 100);
          }
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortalHeader);
  } else {
    initPortalHeader();
  }
})();
