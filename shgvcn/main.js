// Script điều khiển Cẩm nang Truyền thông Học vụ Sinh hoạt GVCN UEF
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const chipBtns = document.querySelectorAll('.chip-btn');
  const navList = document.getElementById('navList');
  const topicsList = document.getElementById('topicsList');
  const topicCountBadge = document.getElementById('topicCountBadge');
  const sectionHeading = document.getElementById('sectionHeading');

  let activeFilter = 'all';
  let searchQuery = '';

  // 1. Render Initial Data
  function renderAll() {
    renderSidebar();
    renderTopics();
  }

  // Render Sidebar Navigation Items
  function renderSidebar() {
    const filtered = getFilteredTopics();
    navList.innerHTML = filtered.map(topic => `
      <a href="#${topic.id}" class="nav-item" data-id="${topic.id}">
        ${topic.icon}
        <span class="truncate">${escapeHtml(topic.title)}</span>
      </a>
    `).join('');

    // Attach click listeners to sidebar links
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const id = item.getAttribute('data-id');
        const targetCard = document.getElementById(id);
        if (targetCard) {
          // Highlight active nav item
          document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
          item.classList.add('active');

          // Open card and smooth scroll
          targetCard.classList.add('open');
          targetCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // Render Topic Accordion Cards
  function renderTopics() {
    const filtered = getFilteredTopics();
    topicCountBadge.textContent = `${filtered.length} chuyên đề`;

    if (filtered.length === 0) {
      topicsList.innerHTML = `
        <div style="text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 48px; height: 48px; margin-bottom: 12px; opacity: 0.5;">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <p style="font-size: 16px; font-weight: 600;">Không tìm thấy chuyên đề học vụ phù hợp từ khóa.</p>
          <p style="font-size: 13px; margin-top: 6px;">Vui lòng thử gõ từ khóa khác (ví dụ: "gpa", "thi", "điểm danh", "rèn luyện").</p>
        </div>
      `;
      return;
    }

    topicsList.innerHTML = filtered.map((topic, index) => {
      // First topic open by default if searching or viewing all
      const isOpen = index === 0 && !searchQuery ? 'open' : '';

      return `
        <article class="topic-card ${isOpen}" id="${topic.id}">
          <div class="card-header">
            <div class="header-left">
              <div class="topic-icon">${topic.icon}</div>
              <div class="topic-meta">
                <h4>${escapeHtml(topic.title)}</h4>
                <p class="topic-summary">${escapeHtml(topic.summary)}</p>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 12px;">
              <span class="badge ${topic.badgeClass}">${escapeHtml(topic.badge)}</span>
              <svg class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 20px; height: 20px;">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
          <div class="card-content">
            ${topic.content}
          </div>
        </article>
      `;
    }).join('');

    // Attach Accordion Toggle Event Handlers
    document.querySelectorAll('.topic-card .card-header').forEach(header => {
      header.addEventListener('click', () => {
        const card = header.parentElement;
        card.classList.toggle('open');
      });
    });
  }

  // Filter Topics Data
  function getFilteredTopics() {
    return SHGVCN_DATA.topics.filter(topic => {
      // 1. Scenario Filter
      let matchesFilter = true;
      if (activeFilter === 'danger') {
        matchesFilter = topic.id === 'luu-y-quan-trong' || topic.id === 'hoc-lai-va-hoc-cai-thien' || topic.id === 'dang-ky-hoc-phu-dao' || topic.id === 'giai-phap-ho-tro-sinh-vien';
      } else if (activeFilter === 'warning') {
        matchesFilter = topic.id === 'cach-tinh-diem' || topic.id === 'duy-tri-hoc-bong' || topic.id === 'giai-phap-ho-tro-sinh-vien';
      } else if (activeFilter === 'success') {
        matchesFilter = topic.id === 'song-bang-song-nganh' || topic.id === 'chuong-chi-chuan-dau-ra' || topic.id === 'xet-tot-nghiep' || topic.id === 'giai-phap-ho-tro-sinh-vien';
      }

      // 2. Search Query Filter
      let matchesSearch = true;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const textToSearch = `${topic.title} ${topic.summary} ${topic.content}`.toLowerCase();
        matchesSearch = textToSearch.includes(q);
      }

      return matchesFilter && matchesSearch;
    });
  }

  // Search Event Listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      if (searchQuery) {
        clearSearchBtn.classList.remove('hidden');
        sectionHeading.textContent = `Kết quả tìm kiếm cho "${searchQuery}"`;
      } else {
        clearSearchBtn.classList.add('hidden');
        sectionHeading.textContent = 'Danh sách Chuyên đề Học vụ';
      }
      renderAll();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      clearSearchBtn.classList.add('hidden');
      sectionHeading.textContent = 'Danh sách Chuyên đề Học vụ';
      renderAll();
    });
  }

  // Filter Chips Listeners
  chipBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      chipBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');

      if (activeFilter === 'danger') sectionHeading.textContent = 'Chuyên đề dành cho Sinh viên đang gặp Khó khăn';
      else if (activeFilter === 'warning') sectionHeading.textContent = 'Chuyên đề dành cho Sinh viên Bứt phá GPA';
      else if (activeFilter === 'success') sectionHeading.textContent = 'Chuyên đề dành cho Sinh viên Học vượt / Song ngành';
      else sectionHeading.textContent = 'Danh sách Chuyên đề Học vụ';

      renderAll();
    });
  });

  // Helper Escape HTML
  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Run Initial Render
  renderAll();
});
