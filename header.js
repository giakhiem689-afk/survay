/**
 * =========================================================
 * UEF ACADEMIC SUPPORT PORTAL - SPA ROUTER & GLOBAL COMPONENT
 * =========================================================
 * Seamless Instant Tab Navigation (Zero-Reload Architecture)
 */

(function () {
  'use strict';

  const MASTER_KEY = '000000000';
  const SESSION_AUTH_KEY = 'uef_portal_authenticated';

  let pendingNavigationUrl = null;
  const pageCache = new Map();

  // 1. Initialize SPA Router and Events
  function initRouter() {
    setupTabClickListeners();
    setupAuthModal();
    window.addEventListener('popstate', handlePopState);
  }

  // 2. Tab Click Listener - Intercepts Navigation for Zero-Reload Experience
  function setupTabClickListeners() {
    document.querySelectorAll('.portal-nav-btn, .portal-btn[href], a.portal-btn').forEach(btn => {
      // Remove previous listener by cloning if needed
      btn.onclick = function (e) {
        const href = btn.getAttribute('href') || btn.getAttribute('data-url');
        if (!href) return;

        // Isolated destination: /shgvcn/ (standard navigation)
        if (href.includes('/shgvcn')) {
          return; // Allow native navigation to isolated handbook
        }

        // External links or anchors
        if (href.startsWith('http') && !href.includes(window.location.host)) return;
        if (href.startsWith('#')) return;

        e.preventDefault();

        // Check if destination requires password authentication
        const isProtected = href.includes('/phudao') || href.includes('/congcu') || href.includes('/thphudao');
        const isAuth = sessionStorage.getItem(SESSION_AUTH_KEY) === 'true';

        if (isProtected && !isAuth) {
          const targetTitle = btn.getAttribute('data-title') || btn.getAttribute('data-module') || 'Phân hệ Bảo mật';
          openPasswordModal(href, targetTitle);
          return;
        }

        // Perform instant SPA Navigation
        navigateTo(href);
      };
    });
  }

  // 3. Instant Client-Side Page Switcher
  async function navigateTo(url) {
    const currentUrl = window.location.pathname;
    const cleanUrl = url.split('?')[0].split('#')[0];

    // Update active tab highlight immediately
    updateActiveTab(cleanUrl);

    // Update Browser Address Bar with History API
    if (window.location.pathname !== cleanUrl) {
      window.history.pushState({ url: cleanUrl }, '', url);
    }

    // Load & Render Content Seamlessly
    await loadPageContent(cleanUrl);
  }

  // 4. Update Tab Active Highlight in Real-Time (Thứ thay đổi duy nhất trên tab là tab được chọn sẽ sáng lên)
  function updateActiveTab(targetPath) {
    const path = targetPath.toLowerCase();

    document.querySelectorAll('.portal-nav-btn').forEach(btn => {
      btn.classList.remove('active');
      const href = (btn.getAttribute('href') || btn.getAttribute('data-url') || '').toLowerCase();

      if (path === '/' || path === '' || path.endsWith('/index.html') && !path.includes('/khaosat') && !path.includes('/phudao') && !path.includes('/congcu')) {
        if (href === '/' || href === '') btn.classList.add('active');
      } else if (path.includes('/khaosat') && href.includes('/khaosat')) {
        btn.classList.add('active');
      } else if ((path.includes('/phudao') || path.includes('/thphudao')) && href.includes('/phudao')) {
        btn.classList.add('active');
      } else if (path.includes('/congcu') && href.includes('/congcu')) {
        btn.classList.add('active');
      } else if (path.includes('/shgvcn') && href.includes('/shgvcn')) {
        btn.classList.add('active');
      }
    });
  }

  // 5. Load and Swap Page Content without touching the Header
  async function loadPageContent(url) {
    try {
      let htmlText = pageCache.get(url);

      if (!htmlText) {
        const response = await fetch(url, { headers: { 'X-Requested-With': 'SPA-Router' } });
        if (!response.ok) {
          window.location.href = url; // Fallback to normal navigation
          return;
        }
        htmlText = await response.text();
        pageCache.set(url, htmlText);
      }

      // Parse HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, 'text/html');

      // Update Page Title
      if (doc.title) document.title = doc.title;

      // Extract new content (Everything between header and footer)
      const newMain = doc.querySelector('main, .portal-main, .container.section, #home') || doc.body;
      const currentMain = document.querySelector('main, .portal-main, .container.section, #home');

      // Also get any hero section if present
      const newHero = doc.querySelector('.portal-hero, .survey-hero-banner, .tools-hero');
      const currentHero = document.querySelector('.portal-hero, .survey-hero-banner, .tools-hero');

      // Handle Smooth Transition
      if (currentHero && newHero) {
        currentHero.replaceWith(newHero);
      } else if (currentHero && !newHero) {
        currentHero.remove();
      } else if (!currentHero && newHero && currentMain) {
        currentMain.parentNode.insertBefore(newHero, currentMain);
      }

      if (currentMain && newMain) {
        currentMain.style.opacity = '0';
        currentMain.style.transition = 'opacity 0.15s ease';

        setTimeout(() => {
          currentMain.replaceWith(newMain);
          newMain.style.opacity = '0';
          newMain.style.transition = 'opacity 0.2s ease';

          // Re-bind scripts and event listeners for the newly injected view
          executePageScripts(doc, url);
          setupTabClickListeners();

          window.scrollTo({ top: 0, behavior: 'instant' });
          setTimeout(() => { newMain.style.opacity = '1'; }, 20);
        }, 150);
      } else {
        // Fallback
        window.location.href = url;
      }
    } catch (err) {
      console.warn('SPA navigation error, falling back:', err);
      window.location.href = url;
    }
  }

  // 6. Execute scripts for the swapped view
  function executePageScripts(doc, url) {
    // Inject any page-specific stylesheet not already loaded
    doc.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
      const href = link.getAttribute('href');
      if (href && !document.querySelector(`link[href="${href}"]`)) {
        const newLink = document.createElement('link');
        newLink.rel = 'stylesheet';
        newLink.href = href;
        document.head.appendChild(newLink);
      }
    });

    // Execute page scripts
    doc.querySelectorAll('script').forEach(oldScript => {
      const src = oldScript.getAttribute('src');
      if (src && (src.includes('header.js'))) return; // Don't re-run header

      const newScript = document.createElement('script');
      if (src) {
        newScript.src = src.split('?')[0] + '?v=' + Date.now();
      } else {
        newScript.textContent = oldScript.textContent;
      }
      document.body.appendChild(newScript);
    });
  }

  // 7. PopState Handler for Browser Back / Forward Buttons
  function handlePopState(e) {
    const targetUrl = window.location.pathname;
    updateActiveTab(targetUrl);
    loadPageContent(targetUrl);
  }

  // 8. Security Password Modal Setup
  function setupAuthModal() {
    const modal = document.getElementById('portalSecurityModal');
    if (!modal) return;

    const closeBtn = document.getElementById('portalModalCloseBtn');
    const cancelBtn = document.getElementById('portalModalCancelBtn');
    const form = document.getElementById('portalAuthForm');
    const pwdInput = document.getElementById('portalPasswordInput');
    const errText = document.getElementById('portalAuthError');

    function closeModal() {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      if (pwdInput) pwdInput.value = '';
      if (errText) errText.style.display = 'none';
      pendingNavigationUrl = null;
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const enteredPwd = pwdInput.value.trim();

        if (enteredPwd === MASTER_KEY) {
          sessionStorage.setItem(SESSION_AUTH_KEY, 'true');
          closeModal();
          if (pendingNavigationUrl) {
            navigateTo(pendingNavigationUrl);
          }
        } else {
          if (errText) errText.style.display = 'block';
          pwdInput.style.borderColor = '#dc2626';
          pwdInput.focus();
        }
      });
    }
  }

  function openPasswordModal(url, moduleName) {
    pendingNavigationUrl = url;
    const modal = document.getElementById('portalSecurityModal');
    const targetNameEl = document.getElementById('portalModalTargetName');
    const pwdInput = document.getElementById('portalPasswordInput');

    if (modal) {
      if (targetNameEl) targetNameEl.textContent = moduleName || 'Phân hệ Bảo mật';
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      if (pwdInput) setTimeout(() => pwdInput.focus(), 100);
    }
  }

  // Initialize on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRouter);
  } else {
    initRouter();
  }
})();
