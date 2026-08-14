// Script điều khiển Thông tin Học vụ Sinh hoạt GVCN - HK 26.1A (Master-Detail Topic Viewer)
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const navList = document.getElementById('navList');
  const activeTopicViewer = document.getElementById('activeTopicViewer');
  const topicCountBadge = document.getElementById('topicCountBadge');
  const sectionHeading = document.getElementById('sectionHeading');

  // Khóa Tabs Elements
  const khoaTabBtns = document.querySelectorAll('.khoa-tab-btn');
  const khoaBannerImg = document.getElementById('khoaBannerImg');

  let searchQuery = '';
  let selectedKhoa = 'k2023';
  let activeTopicIndex = 0; // Mặc định mở ngay Mục 1: Trung tâm Hỗ trợ học vụ

  const khoaMeta = {
    k2023: { cover: "assets/bia_khoa_2023.png", alt: "Bìa Sinh hoạt GVCN Khóa 2023" },
    k2024: { cover: "assets/bia_khoa_2024.png", alt: "Bìa Sinh hoạt GVCN Khóa 2024" },
    k2025: { cover: "assets/bia_khoa_2025.png", alt: "Bìa Sinh hoạt GVCN Khóa 2025" },
    k2026: { cover: "assets/bia_khoa_2026.png", alt: "Bìa Sinh hoạt GVCN Khóa 2026" }
  };

  // Khóa Tab Switch Listener
  khoaTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      khoaTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedKhoa = btn.getAttribute('data-khoa');

      const meta = khoaMeta[selectedKhoa];
      if (meta) {
        khoaBannerImg.src = meta.cover;
        khoaBannerImg.alt = meta.alt;
      }
    });
  });

  // Filter Topics by Search Query
  function getFilteredTopics() {
    return SHGVCN_DATA.topics.filter(topic => {
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      const textToSearch = `${topic.title} ${topic.summary} ${topic.content}`.toLowerCase();
      return textToSearch.includes(q);
    });
  }

  // 1. Render Sidebar Navigation (Bảng mục lục điều hướng)
  function renderSidebar() {
    const topics = getFilteredTopics();
    topicCountBadge.textContent = `${topics.length} mục nội dung`;

    if (topics.length === 0) {
      navList.innerHTML = `<p style="font-size: 12px; color: var(--text-muted); padding: 10px;">Không tìm thấy mục nào.</p>`;
      return;
    }

    navList.innerHTML = topics.map((topic, index) => {
      const originalIndex = SHGVCN_DATA.topics.findIndex(t => t.id === topic.id);
      const isActive = originalIndex === activeTopicIndex ? 'active' : '';

      return `
        <button type="button" class="nav-item ${isActive}" data-index="${originalIndex}" data-id="${topic.id}">
          <span class="nav-icon-box">${topic.icon}</span>
          <span class="truncate">${escapeHtml(topic.title)}</span>
        </button>
      `;
    }).join('');

    // Attach click listeners to sidebar navigation items
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
    renderSidebar();

    // Render the active topic's content
    renderActiveTopic();

    // Scroll smoothly to the top of content area on mobile/small screens
    const contentArea = document.querySelector('.content-area');
    if (contentArea && window.innerWidth < 900) {
      contentArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // 3. Render the Active Topic Content View
  function renderActiveTopic() {
    const topic = SHGVCN_DATA.topics[activeTopicIndex];
    if (!topic) return;

    const totalTopics = SHGVCN_DATA.topics.length;
    const hasPrev = activeTopicIndex > 0;
    const hasNext = activeTopicIndex < totalTopics - 1;

    activeTopicViewer.innerHTML = `
      <article class="topic-detail-card">
        <!-- Topic Header Banner - Enlarge & Center Title -->
        <div class="topic-detail-header" style="background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);">
          <div class="header-main-info centered-topic-header">
            <div class="topic-large-icon" style="background: white; color: ${topic.accentColor}; box-shadow: 0 4px 12px rgba(0,0,0,0.06); border: 1.5px solid var(--border-card);">
              ${topic.icon}
            </div>
            <h2 class="active-topic-title">${escapeHtml(topic.title)}</h2>
          </div>
        </div>

        <!-- Topic Detail Body Content -->
        <div class="topic-detail-body">
          ${topic.content}
        </div>

        <!-- Bottom Navigation Controls (Prev / Next Topic) -->
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

    // Attach bottom navigation event handlers
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
        sectionHeading.textContent = 'Nội dung Thông tin Học vụ';
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
      sectionHeading.textContent = 'Nội dung Thông tin Học vụ';
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

  // Initial Run: Open Topic 0 (Trung tâm Hỗ trợ Học vụ) by default
  renderSidebar();
  renderActiveTopic();
});
