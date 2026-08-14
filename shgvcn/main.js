// Script điều khiển Thông tin Học vụ Sinh hoạt GVCN - HK 26.1A (Chuẩn 13 Mục Học vụ UEF)
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const navList = document.getElementById('navList');
  const topicsList = document.getElementById('topicsList');
  const topicCountBadge = document.getElementById('topicCountBadge');
  const sectionHeading = document.getElementById('sectionHeading');

  // Khóa Tabs Elements
  const khoaTabBtns = document.querySelectorAll('.khoa-tab-btn');
  const khoaBannerImg = document.getElementById('khoaBannerImg');

  let searchQuery = '';
  let selectedKhoa = 'k2023';

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

  // 1. Render Initial Data
  function renderAll() {
    renderSidebar();
    renderTopics();
  }

  // Render Sidebar Navigation
  function renderSidebar() {
    const filtered = getFilteredTopics();
    navList.innerHTML = filtered.map(topic => `
      <a href="#${topic.id}" class="nav-item" data-id="${topic.id}">
        ${topic.icon}
        <span class="truncate">${escapeHtml(topic.title)}</span>
      </a>
    `).join('');

    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const id = item.getAttribute('data-id');
        const targetCard = document.getElementById(id);
        if (targetCard) {
          document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
          item.classList.add('active');

          targetCard.classList.add('open');
          targetCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // Render Topic Accordions
  function renderTopics() {
    const filtered = getFilteredTopics();
    topicCountBadge.textContent = `${filtered.length} mục nội dung`;

    if (filtered.length === 0) {
      topicsList.innerHTML = `
        <div style="text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 48px; height: 48px; margin-bottom: 12px; opacity: 0.5;">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <p style="font-size: 16px; font-weight: 700; color: var(--text-main);">Không tìm thấy nội dung học vụ phù hợp từ khóa.</p>
          <p style="font-size: 13px; margin-top: 6px;">Vui lòng thử từ khóa khác (ví dụ: "tốt nghiệp", "chuẩn đầu ra", "học bổng", "gpa", "học lại").</p>
        </div>
      `;
      return;
    }

    topicsList.innerHTML = filtered.map((topic, index) => {
      const isOpen = index === 0 && !searchQuery ? 'open' : '';

      return `
        <article class="topic-card ${isOpen}" id="${topic.id}">
          <div class="card-header">
            <div class="header-left">
              <div class="topic-icon" style="background: var(--${topic.bgColor}-bg); color: ${topic.accentColor};">
                ${topic.icon}
              </div>
              <div class="topic-meta">
                <h4>${escapeHtml(topic.title)}</h4>
                <p class="topic-summary">${escapeHtml(topic.summary)}</p>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 12px;">
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

    // Accordion Toggle Handlers
    document.querySelectorAll('.topic-card .card-header').forEach(header => {
      header.addEventListener('click', () => {
        const card = header.parentElement;
        card.classList.toggle('open');
      });
    });
  }

  // Filter Topics by Search Query
  function getFilteredTopics() {
    return SHGVCN_DATA.topics.filter(topic => {
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      const textToSearch = `${topic.title} ${topic.summary} ${topic.content}`.toLowerCase();
      return textToSearch.includes(q);
    });
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
      renderAll();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      clearSearchBtn.classList.add('hidden');
      sectionHeading.textContent = 'Nội dung Thông tin Học vụ';
      renderAll();
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

  // Initial Run
  renderAll();
});
