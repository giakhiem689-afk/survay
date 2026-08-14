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
    const currentPath = window.location.pathname.toLowerCase();
    const isSHGVCN = currentPath.includes('/shgvcn');

    // Remove any accidental existing headers
    document.querySelectorAll('header.site-header, header.app-header, header.portal-global-header').forEach(el => el.remove());

    const headerEl = document.createElement('header');
    headerEl.className = 'portal-global-header';

    if (isSHGVCN) {
      // ISOLATED SHGVCN HEADER: NO NAV BUTTONS & NO HOME LINK
      headerEl.innerHTML = `
        <div class="portal-header-container">
          <div class="portal-brand-link">
            <span class="portal-uef-logo-text">UEF</span>
            <div class="portal-brand-text-group">
              <h1 class="portal-brand-title">CỔNG THÔNG TIN TRUNG TÂM HỖ TRỢ HỌC VỤ</h1>
              <p class="portal-brand-subtitle">Thông tin Học vụ Sinh hoạt GVCN • Học kỳ 1A / Năm học 2026-2027</p>
            </div>
          </div>
        </div>
      `;
    } else {
      // 5-ITEM UNIFIED NAVIGATION HEADER
      const isHome = currentPath === '/' || currentPath === '' || (currentPath.endsWith('/index.html') && !currentPath.includes('/khaosat') && !currentPath.includes('/phudao') && !currentPath.includes('/congcu'));
      const isKhaoSat = currentPath.includes('/khaosat');
      const isPhuDao = currentPath.includes('/phudao') || currentPath.includes('/thphudao');
      const isCongCu = currentPath.includes('/congcu');

      headerEl.innerHTML = `
        <div class="portal-header-container">
          <a href="/" class="portal-brand-link">
            <span class="portal-uef-logo-text">UEF</span>
            <div class="portal-brand-text-group">
              <h1 class="portal-brand-title">CỔNG THÔNG TIN TRUNG TÂM HỖ TRỢ HỌC VỤ</h1>
              <p class="portal-brand-subtitle">Trường Đại học Kinh tế - Tài chính TP.HCM</p>
            </div>
          </a>

          <nav class="portal-header-nav">
            <a href="/" class="portal-nav-btn ${isHome ? 'active' : ''}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span>Trang chủ</span>
            </a>

            <!-- Khảo sát: UNLOCKED (FREE ACCESS) -->
            <a href="/khaosat/" class="portal-nav-btn ${isKhaoSat ? 'active' : ''}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M9 11l3 3L22 4"></path>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>
              <span>Khảo sát</span>
            </a>

            <!-- Phụ đạo: PROTECTED (LOCK 🔒) -->
            <a href="/phudao/" class="portal-nav-btn portal-auth-trigger ${isPhuDao ? 'active' : ''}" data-url="/phudao/" data-title="Lớp Phụ đạo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <span>Phụ đạo</span>
              <span class="portal-lock-pill">🔒</span>
            </a>

            <!-- SH GVCN: UNLOCKED (FREE ACCESS) -->
            <a href="/shgvcn/" class="portal-nav-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
              <span>SH GVCN</span>
            </a>

            <!-- Công cụ: PROTECTED (LOCK 🔒) -->
            <a href="/congcu/" class="portal-nav-btn portal-auth-trigger ${isCongCu ? 'active' : ''}" data-url="/congcu/" data-title="Công cụ Hỗ trợ Học vụ">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
              <span>Công cụ</span>
              <span class="portal-lock-pill">🔒</span>
            </a>
          </nav>
        </div>
      `;

      injectPasswordModal();
    }

    const placeholder = document.getElementById('portal-header-placeholder');
    if (placeholder) {
      placeholder.replaceWith(headerEl);
    } else {
      document.body.prepend(headerEl);
    }

    setupAuthListeners();
  }

  function initPortalFooter() {
    // Remove existing old footers
    document.querySelectorAll('footer.site-footer, footer.app-footer, footer.portal-global-footer').forEach(el => el.remove());

    const footerEl = document.createElement('footer');
    footerEl.className = 'portal-global-footer';
    footerEl.innerHTML = `
      <div class="portal-footer-container">
        <div class="portal-footer-brand">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
            <span style="color: #b31217; font-size: 26px; font-weight: 900; line-height: 1;">UEF</span>
            <span style="font-size: 14px; font-weight: 800; color: #0f2b52;">TRUNG TÂM HỖ TRỢ HỌC VỤ</span>
          </div>
          <p style="font-size: 12.5px; color: #64748b; margin: 0; line-height: 1.6;">
            Trường Đại học Kinh tế - Tài chính Thành phố Hồ Chí Minh (UEF)<br />
            Trụ sở: Tầng 2, 141 - 145 Điện Biên Phủ, Phường Gia Định, TP. Hồ Chí Minh
          </p>
        </div>

        <div class="portal-footer-contact">
          <p style="font-size: 12.5px; color: #334155; margin: 0; line-height: 1.6;">
            <strong>Hotline:</strong> 028 2236 1111 • <strong>Email:</strong> hotrohocvu@uef.edu.vn<br />
            <strong>Website:</strong> <a href="https://uef.edu.vn" target="_blank" rel="noopener" style="color: #0284c7; text-decoration: none; font-weight: 700;">uef.edu.vn</a> • <strong>Cổng thông tin:</strong> <a href="https://tththv.io.vn/" style="color: #0284c7; text-decoration: none; font-weight: 700;">tththv.io.vn</a>
          </p>
        </div>
      </div>
      <div class="portal-footer-bottom">
        <p>© 2026 Trung tâm Hỗ trợ học vụ UEF. Bản quyền thuộc về Trường Đại học Kinh tế - Tài chính TP.HCM.</p>
      </div>
    `;

    const placeholder = document.getElementById('portal-footer-placeholder');
    if (placeholder) {
      placeholder.replaceWith(footerEl);
    } else {
      document.body.appendChild(footerEl);
    }
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
    document.querySelectorAll('.portal-auth-trigger').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        const targetUrl = trigger.getAttribute('data-url') || trigger.getAttribute('href');
        const targetTitle = trigger.getAttribute('data-title') || 'Phân hệ Bảo mật';

        if (!sessionStorage.getItem(SESSION_AUTH_KEY)) {
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

  function init() {
    initPortalHeader();
    initPortalFooter();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
