// Script điều khiển Thông tin Học vụ Sinh hoạt GVCN - HK 26.1A
// Master-Detail Topic Viewer, Calculators, Accordions, Modal Zoom, Flipbook & Video Integration

// Global Modal Handlers
window.openImageModal = function(src, title) {
  const overlay = document.getElementById('imageModalOverlay');
  const modalImg = document.getElementById('imageModalImg');
  const modalTitle = document.getElementById('imageModalTitle');
  const downloadBtn = document.getElementById('imageModalDownloadBtn');

  if (overlay && modalImg) {
    modalImg.src = src;
    if (modalTitle) modalTitle.textContent = title || 'Xem hình ảnh chi tiết';
    if (downloadBtn) {
      downloadBtn.href = src;
      const filename = src.split('/').pop() || 'image_uef.png';
      downloadBtn.setAttribute('download', filename);
    }
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

window.closeImageModal = function() {
  const overlay = document.getElementById('imageModalOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
};

window.handleModalOverlayClick = function(event) {
  if (event.target.id === 'imageModalOverlay') {
    closeImageModal();
  }
};

// Global Accordion Handler
window.toggleAccordion = function(btn) {
  const item = btn.closest('.accordion-item');
  if (item) {
    item.classList.toggle('active');
    const content = item.querySelector('.accordion-content');
    if (content) {
      content.style.display = item.classList.contains('active') ? 'block' : 'none';
    }
  }
};

// Global Calculator Subtab Switcher
window.switchCalcTab = function(tabId, btn) {
  const parentCard = btn.closest('.topic-detail');
  if (!parentCard) return;

  parentCard.querySelectorAll('.subnav-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  parentCard.querySelectorAll('.calc-tab-content').forEach(content => {
    content.classList.remove('active');
    content.style.display = 'none';
  });

  const activeContent = document.getElementById(tabId);
  if (activeContent) {
    activeContent.classList.add('active');
    activeContent.style.display = 'block';
  }
};

// Interactive Calculator 1: Điểm Tổng Kết Học Phần (TKHP)
window.calculateTKHP = function() {
  const cc = parseFloat(document.getElementById('inp-cc')?.value) || 0;
  const hd = parseFloat(document.getElementById('inp-hd')?.value) || 0;
  const gk = parseFloat(document.getElementById('inp-gk')?.value) || 0;
  const ck = parseFloat(document.getElementById('inp-ck')?.value) || 0;

  // QT = CC*0.1 + HD*0.2
  // TKHP = CC*0.1 + HD*0.2 + GK*0.2 + CK*0.5
  const rawScore = (cc * 0.1) + (hd * 0.2) + (gk * 0.2) + (ck * 0.5);
  
  // Rule of rounding: 1 decimal place
  const roundedScore = Math.round(rawScore * 10) / 10;

  let gradeLetter = 'F';
  let grade4 = 0.0;
  let status = 'KHÔNG ĐẠT ❌';
  let statusColor = '#b91c1c';

  if (roundedScore >= 8.5) {
    gradeLetter = 'A';
    grade4 = 4.0;
    status = 'ĐẠT (Xuất sắc) ✅';
    statusColor = '#15803d';
  } else if (roundedScore >= 7.0) {
    gradeLetter = 'B';
    grade4 = 3.0;
    status = 'ĐẠT (Giỏi/Khá) ✅';
    statusColor = '#0284c7';
  } else if (roundedScore >= 5.5) {
    gradeLetter = 'C';
    grade4 = 2.0;
    status = 'ĐẠT (Trung bình khá) ✅';
    statusColor = '#d97706';
  } else if (roundedScore >= 4.0) {
    gradeLetter = 'D';
    grade4 = 1.0;
    status = 'ĐẠT (Trung bình) ✅';
    statusColor = '#be185d';
  } else {
    gradeLetter = 'F';
    grade4 = 0.0;
    status = 'KHÔNG ĐẠT (Học lại) ❌';
    statusColor = '#b91c1c';
  }

  const el10 = document.getElementById('res-tkhp-10');
  const elChar = document.getElementById('res-tkhp-char');
  const el4 = document.getElementById('res-tkhp-4');
  const elStatus = document.getElementById('res-tkhp-status');

  if (el10) el10.textContent = roundedScore.toFixed(1);
  if (elChar) elChar.textContent = gradeLetter;
  if (el4) el4.textContent = grade4.toFixed(1);
  if (elStatus) {
    elStatus.textContent = status;
    elStatus.style.color = statusColor;
  }
};

// Interactive Calculator 2: Điểm TB Học Kỳ (TBHK)
window.calculateTBHK = function() {
  const container = document.getElementById('tbhk-courses-list');
  if (!container) return;

  const rows = container.querySelectorAll('.course-calc-row');
  let totalCredits = 0;
  let totalPoints = 0;

  rows.forEach(row => {
    const creditsInput = row.querySelector('.c-credits');
    const gradeSelect = row.querySelector('.c-grade');

    const credits = parseFloat(creditsInput?.value) || 0;
    const grade4 = parseFloat(gradeSelect?.value) || 0;

    if (credits > 0) {
      totalCredits += credits;
      totalPoints += (credits * grade4);
    }
  });

  const gpa = totalCredits > 0 ? (totalPoints / totalCredits) : 0;
  const roundedGpa = Math.round(gpa * 100) / 100;

  let rank = 'Yếu';
  let rankColor = '#b91c1c';

  if (roundedGpa >= 3.6) { rank = 'XUẤT SẮC 🏆'; rankColor = '#854d0e'; }
  else if (roundedGpa >= 3.2) { rank = 'GIỎI 🥇'; rankColor = '#15803d'; }
  else if (roundedGpa >= 2.5) { rank = 'KHÁ 🥈'; rankColor = '#0284c7'; }
  else if (roundedGpa >= 2.0) { rank = 'TRUNG BÌNH 🥉'; rankColor = '#475569'; }
  else { rank = 'YẾU / KÉM ⚠️'; rankColor = '#b91c1c'; }

  const resCred = document.getElementById('res-tbhk-credits');
  const resGpa = document.getElementById('res-tbhk-gpa');
  const resRank = document.getElementById('res-tbhk-rank');

  if (resCred) resCred.textContent = totalCredits;
  if (resGpa) resGpa.textContent = roundedGpa.toFixed(2);
  if (resRank) {
    resRank.textContent = rank;
    resRank.style.color = rankColor;
  }
};

window.addCourseRow = function(containerId, callback) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const rowCount = container.querySelectorAll('.course-calc-row').length + 1;
  const newRow = document.createElement('div');
  newRow.className = 'course-calc-row';
  newRow.innerHTML = `
    <input type="text" class="c-name" placeholder="Tên môn học ${rowCount}" value="Môn học ${rowCount}" />
    <input type="number" class="c-credits" placeholder="Số TC" value="3" min="1" max="10" oninput="calculateTBHK()" />
    <select class="c-grade" onchange="calculateTBHK()">
      <option value="4.0">Điểm A (4.0)</option>
      <option value="3.0" selected>Điểm B (3.0)</option>
      <option value="2.0">Điểm C (2.0)</option>
      <option value="1.0">Điểm D (1.0)</option>
      <option value="0.0">Điểm F (0.0)</option>
    </select>
  `;
  container.appendChild(newRow);
  if (typeof callback === 'function') callback();
};

window.removeCourseRow = function(containerId, callback) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const rows = container.querySelectorAll('.course-calc-row');
  if (rows.length > 1) {
    rows[rows.length - 1].remove();
    if (typeof callback === 'function') callback();
  }
};

// Interactive Calculator 3: Điểm TB Năm Học (TBNH)
window.calculateTBNH = function() {
  const tc1 = parseFloat(document.getElementById('tbnh-tc1')?.value) || 0;
  const gpa1 = parseFloat(document.getElementById('tbnh-gpa1')?.value) || 0;
  const tc2 = parseFloat(document.getElementById('tbnh-tc2')?.value) || 0;
  const gpa2 = parseFloat(document.getElementById('tbnh-gpa2')?.value) || 0;

  const totalTC = tc1 + tc2;
  const totalPoints = (tc1 * gpa1) + (tc2 * gpa2);
  const gpa = totalTC > 0 ? (totalPoints / totalTC) : 0;
  const roundedGpa = Math.round(gpa * 100) / 100;

  let rank = 'Yếu';
  let rankColor = '#b91c1c';

  if (roundedGpa >= 3.6) { rank = 'XUẤT SẮC 🏆'; rankColor = '#854d0e'; }
  else if (roundedGpa >= 3.2) { rank = 'GIỎI 🥇'; rankColor = '#15803d'; }
  else if (roundedGpa >= 2.5) { rank = 'KHÁ 🥈'; rankColor = '#0284c7'; }
  else if (roundedGpa >= 2.0) { rank = 'TRUNG BÌNH 🥉'; rankColor = '#475569'; }
  else { rank = 'YẾU / KÉM ⚠️'; rankColor = '#b91c1c'; }

  const resTc = document.getElementById('res-tbnh-tc');
  const resGpa = document.getElementById('res-tbnh-gpa');
  const resRank = document.getElementById('res-tbnh-rank');

  if (resTc) resTc.textContent = totalTC;
  if (resGpa) resGpa.textContent = roundedGpa.toFixed(2);
  if (resRank) {
    resRank.textContent = rank;
    resRank.style.color = rankColor;
  }
};

// Interactive Calculator 4: Điểm TB Tích Lũy (TBTL)
window.calculateTBTL = function() {
  const tcOld = parseFloat(document.getElementById('tbtl-tc-old')?.value) || 0;
  const gpaOld = parseFloat(document.getElementById('tbtl-gpa-old')?.value) || 0;
  const tcNew = parseFloat(document.getElementById('tbtl-tc-new')?.value) || 0;
  const gpaNew = parseFloat(document.getElementById('tbtl-gpa-new')?.value) || 0;

  const totalTC = tcOld + tcNew;
  const totalPoints = (tcOld * gpaOld) + (tcNew * gpaNew);
  const gpa = totalTC > 0 ? (totalPoints / totalTC) : 0;
  const roundedGpa = Math.round(gpa * 100) / 100;

  let rank = 'Yếu';
  let rankColor = '#b91c1c';

  if (roundedGpa >= 3.6) { rank = 'XUẤT SẮC 🏆'; rankColor = '#854d0e'; }
  else if (roundedGpa >= 3.2) { rank = 'GIỎI 🥇'; rankColor = '#15803d'; }
  else if (roundedGpa >= 2.5) { rank = 'KHÁ 🥈'; rankColor = '#0284c7'; }
  else if (roundedGpa >= 2.0) { rank = 'TRUNG BÌNH 🥉'; rankColor = '#475569'; }
  else { rank = 'YẾU / KÉM ⚠️'; rankColor = '#b91c1c'; }

  const resTc = document.getElementById('res-tbtl-tc');
  const resGpa = document.getElementById('res-tbtl-gpa');
  const resRank = document.getElementById('res-tbtl-rank');

  if (resTc) resTc.textContent = totalTC;
  if (resGpa) resGpa.textContent = roundedGpa.toFixed(2);
  if (resRank) {
    resRank.textContent = rank;
    resRank.style.color = rankColor;
  }
};

// Main DOM Content Loaded Listener
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const navList = document.getElementById('navList');
  const activeTopicViewer = document.getElementById('activeTopicViewer');
  const topicCountBadge = document.getElementById('topicCountBadge');
  const sectionHeading = document.getElementById('sectionHeading');
  const heroTargetPill = document.getElementById('heroTargetPill');

  // Sidebar Elements
  const stickySidebarNav = document.getElementById('stickySidebarNav');
  const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');

  // 5 Header Navigation Tabs
  const headerNavTabs = document.querySelectorAll('.shgvcn-nav-tab');

  let searchQuery = '';
  let selectedKhoa = 'all'; // Mặc định là 'Tổng hợp'
  let activeTopicIndex = 0; // Mặc định mở ngay Mục I

  // 0. Initialize Sidebar Collapsed State from localStorage
  const isSidebarCollapsed = localStorage.getItem('shgvcn_sidebar_collapsed') === 'true';
  if (isSidebarCollapsed && stickySidebarNav) {
    stickySidebarNav.classList.add('collapsed');
  }

  if (sidebarToggleBtn && stickySidebarNav) {
    sidebarToggleBtn.addEventListener('click', () => {
      stickySidebarNav.classList.toggle('collapsed');
      const collapsed = stickySidebarNav.classList.contains('collapsed');
      localStorage.setItem('shgvcn_sidebar_collapsed', collapsed);
    });
  }

  const khoaTitles = {
    all: { pill: "", heading: "Nội dung Thông tin Học vụ (Tổng hợp)", isAll: true },
    k2023: { pill: "Dành cho sinh viên Khóa 2023", heading: "Nội dung Thông tin Học vụ (Khóa 2023)", isAll: false },
    k2024: { pill: "Dành cho sinh viên Khóa 2024", heading: "Nội dung Thông tin Học vụ (Khóa 2024)", isAll: false },
    k2025: { pill: "Dành cho sinh viên Khóa 2025", heading: "Nội dung Thông tin Học vụ (Khóa 2025)", isAll: false },
    k2026: { pill: "Dành cho sinh viên Khóa 2026", heading: "Nội dung Thông tin Học vụ (Khóa 2026)", isAll: false }
  };

  // Header Nav Tab Switch Listener
  headerNavTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      headerNavTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      selectedKhoa = tab.getAttribute('data-khoa') || 'all';

      const meta = khoaTitles[selectedKhoa] || khoaTitles.all;
      if (heroTargetPill) {
        if (meta.isAll) {
          heroTargetPill.classList.add('cohort-tag-hidden');
        } else {
          heroTargetPill.classList.remove('cohort-tag-hidden');
          heroTargetPill.textContent = meta.pill;
        }
      }
      if (sectionHeading && !searchQuery) {
        sectionHeading.textContent = meta.heading;
      }

      renderSidebar();
    });
  });

  // Filter Topics by Search Query
  function getFilteredTopics() {
    return SHGVCN_DATA.topics.filter(topic => {
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      const textToSearch = `${topic.title} ${topic.summary || ''} ${topic.content}`.toLowerCase();
      return textToSearch.includes(q);
    });
  }

  // 1. Render Sidebar Navigation
  function renderSidebar() {
    const topics = getFilteredTopics();
    if (topicCountBadge) {
      topicCountBadge.textContent = `${topics.length} mục nội dung`;
    }

    if (topics.length === 0) {
      navList.innerHTML = `<p style="font-size: 12px; color: var(--text-muted); padding: 10px;">Không tìm thấy mục nào.</p>`;
      return;
    }

    navList.innerHTML = topics.map((topic, index) => {
      const originalIndex = SHGVCN_DATA.topics.findIndex(t => t.id === topic.id);
      const isActive = originalIndex === activeTopicIndex ? 'active' : '';

      return `
        <button type="button" class="nav-item ${isActive}" data-index="${originalIndex}" data-id="${topic.id}" title="${escapeHtml(topic.title)}">
          <span class="nav-icon-box">${topic.icon}</span>
          <span class="nav-title-text">${escapeHtml(topic.title)}</span>
        </button>
      `;
    }).join('');

    // Attach click listeners
    navList.querySelectorAll('.nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-index'), 10);
        selectTopic(index);
      });
    });
  }

  // 2. Select and Display a Single Topic
  function selectTopic(index) {
    if (index < 0 || index >= SHGVCN_DATA.topics.length) return;
    activeTopicIndex = index;

    // Update Sidebar active state
    navList.querySelectorAll('.nav-item').forEach(btn => {
      const btnIndex = parseInt(btn.getAttribute('data-index'), 10);
      if (btnIndex === activeTopicIndex) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    renderActiveTopic();

    // Smooth scroll on mobile
    const contentArea = document.querySelector('.content-area');
    if (contentArea && window.innerWidth < 992) {
      contentArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // 3. Render Active Topic Content View
  function renderActiveTopic() {
    const topic = SHGVCN_DATA.topics[activeTopicIndex];
    if (!topic) return;

    const totalTopics = SHGVCN_DATA.topics.length;
    const hasPrev = activeTopicIndex > 0;
    const hasNext = activeTopicIndex < totalTopics - 1;

    activeTopicViewer.innerHTML = `
      <article class="topic-detail-card">
        <!-- Topic Header Banner -->
        <div class="topic-detail-header">
          <div class="topic-title-badge-3d" style="background: linear-gradient(135deg, #ffffff 0%, var(--${topic.bgColor}-bg) 100%); border-color: var(--${topic.bgColor}-border);">
            <div class="topic-header-icon-box" style="background: ${topic.accentColor};">
              ${topic.icon}
            </div>
            <h2 class="active-topic-title">${escapeHtml(topic.title)}</h2>
          </div>
        </div>

        <!-- Topic Detail Body Content -->
        <div class="topic-detail-body">
          ${topic.content}
        </div>

        <!-- Bottom Navigation Controls -->
        <div class="topic-bottom-nav">
          <button type="button" class="topic-nav-btn prev-btn" ${!hasPrev ? 'disabled' : ''} id="prevTopicBtn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 16px; height: 16px;">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <span>Mục trước</span>
          </button>

          <span class="topic-counter-text">Mục ${activeTopicIndex + 1} trên tổng số ${totalTopics}</span>

          <button type="button" class="topic-nav-btn next-btn" ${!hasNext ? 'disabled' : ''} id="nextTopicBtn">
            <span>Mục tiếp theo</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 16px; height: 16px;">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </article>
    `;

    // Attach bottom navigation handlers
    const prevBtn = document.getElementById('prevTopicBtn');
    const nextBtn = document.getElementById('nextTopicBtn');

    if (prevBtn && hasPrev) {
      prevBtn.addEventListener('click', () => selectTopic(activeTopicIndex - 1));
    }

    if (nextBtn && hasNext) {
      nextBtn.addEventListener('click', () => selectTopic(activeTopicIndex + 1));
    }
  }

  // Search Input Listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      if (searchQuery) {
        clearSearchBtn.classList.remove('hidden');
        sectionHeading.textContent = `Kết quả tìm kiếm cho "${searchQuery}"`;
      } else {
        clearSearchBtn.classList.add('hidden');
        const meta = khoaTitles[selectedKhoa] || khoaTitles.all;
        sectionHeading.textContent = meta.heading;
      }
      renderSidebar();
      const filtered = getFilteredTopics();
      if (filtered.length > 0) {
        const firstMatchingIndex = SHGVCN_DATA.topics.findIndex(t => t.id === filtered[0].id);
        selectTopic(firstMatchingIndex);
      }
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      clearSearchBtn.classList.add('hidden');
      const meta = khoaTitles[selectedKhoa] || khoaTitles.all;
      sectionHeading.textContent = meta.heading;
      renderSidebar();
      selectTopic(0);
    });
  }

  // Helper Escape HTML
  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Initial Run: Open Topic 0 by default
  renderSidebar();
  renderActiveTopic();

  // Floating Back to Top Button
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        backToTopBtn.classList.remove('hidden');
      } else {
        backToTopBtn.classList.add('hidden');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

});
