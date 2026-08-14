// Script điều khiển Thông tin Học vụ Sinh hoạt GVCN - HK 26.1A (13 Chuyên đề Chuẩn xác UEF)
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const chipBtns = document.querySelectorAll('.chip-btn');
  const navList = document.getElementById('navList');
  const topicsList = document.getElementById('topicsList');
  const topicCountBadge = document.getElementById('topicCountBadge');
  const sectionHeading = document.getElementById('sectionHeading');

  // Khóa Tabs Elements
  const khoaTabBtns = document.querySelectorAll('.khoa-tab-btn');
  const khoaBannerImg = document.getElementById('khoaBannerImg');
  const khoaBannerTitle = document.getElementById('khoaBannerTitle');
  const khoaBannerDesc = document.getElementById('khoaBannerDesc');

  let activeFilter = 'all';
  let searchQuery = '';
  let selectedKhoa = 'k2023';

  const khoaMeta = {
    k2023: {
      name: "Khóa 2023",
      cover: "assets/bia_khoa_2023.png",
      title: "Tài liệu Sinh hoạt GVCN Khóa 2023",
      desc: "Áp dụng cho học kỳ 1A năm học 2026-2027 - Giai đoạn Chuẩn bị Thực tập & Xét Tốt nghiệp"
    },
    k2024: {
      name: "Khóa 2024",
      cover: "assets/bia_khoa_2024.png",
      title: "Tài liệu Sinh hoạt GVCN Khóa 2024",
      desc: "Áp dụng cho học kỳ 1A năm học 2026-2027 - Giai đoạn Chuyên ngành & Hoàn thiện Chuẩn đầu ra"
    },
    k2025: {
      name: "Khóa 2025",
      cover: "assets/bia_khoa_2025.png",
      title: "Tài liệu Sinh hoạt GVCN Khóa 2025",
      desc: "Áp dụng cho học kỳ 1A năm học 2026-2027 - Giai đoạn Cơ sở ngành & Duy trì Học bổng tuyển sinh"
    },
    k2026: {
      name: "Khóa 2026",
      cover: "assets/bia_khoa_2026.png",
      title: "Tài liệu Sinh hoạt GVCN Khóa 2026",
      desc: "Áp dụng cho học kỳ 1A năm học 2026-2027 - Giai đoạn Đại cương & Thích ứng môi trường đại học"
    }
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
        khoaBannerTitle.textContent = meta.title;
        khoaBannerDesc.textContent = meta.desc;
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
    topicCountBadge.textContent = `${filtered.length} chuyên đề`;

    if (filtered.length === 0) {
      topicsList.innerHTML = `
        <div style="text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 48px; height: 48px; margin-bottom: 12px; opacity: 0.5;">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <p style="font-size: 16px; font-weight: 700; color: var(--text-main);">Không tìm thấy chuyên đề học vụ phù hợp từ khóa.</p>
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

    // Accordion Toggle Handlers
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
      let matchesFilter = true;
      if (activeFilter === 'danger') {
        matchesFilter = topic.id === 'thong-tin-luu-y-quan-trong' || topic.id === 'tien-do-dao-tao' || topic.id === 'dang-ky-hoc-phu-dao-mien-phi' || topic.id === 'mot-so-giai-phap-ho-tro-sinh-vien';
      } else if (activeFilter === 'warning') {
        matchesFilter = topic.id === 'xep-loai-hoc-luc' || topic.id === 'dieu-kien-duy-tri-hoc-bong' || topic.id === 'mot-so-giai-phap-ho-tro-sinh-vien';
      } else if (activeFilter === 'success') {
        matchesFilter = topic.id === 'checklist-dieu-kien-xet-tot-nghiep' || topic.id === 'chuan-dau-ra-ngoai-ngu-tin-hoc' || topic.id === 'mot-so-giai-phap-ho-tro-sinh-vien';
      }

      let matchesSearch = true;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const textToSearch = `${topic.title} ${topic.summary} ${topic.content}`.toLowerCase();
        matchesSearch = textToSearch.includes(q);
      }

      return matchesFilter && matchesSearch;
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
      else if (activeFilter === 'success') sectionHeading.textContent = 'Chuyên đề dành cho Sinh viên Chuẩn bị Tốt nghiệp / Bằng 2';
      else sectionHeading.textContent = 'Danh sách Chuyên đề Học vụ';

      renderAll();
    });
  });

  // -------------------------------------------------------------
  // 🧮 INTERACTIVE WIDGET 1: GPA CALCULATOR LOGIC
  // -------------------------------------------------------------
  const calcGpaBtn = document.getElementById('calcGpaBtn');
  if (calcGpaBtn) {
    calcGpaBtn.addEventListener('click', () => {
      const processScore = parseFloat(document.getElementById('inputProcessScore').value) || 0;
      const processWeight = parseFloat(document.getElementById('inputProcessWeight').value) || 40;
      const examScore = parseFloat(document.getElementById('inputExamScore').value) || 0;
      const examWeight = parseFloat(document.getElementById('inputExamWeight').value) || 60;

      // Calculate Total Score 10
      const total10 = Math.round(((processScore * (processWeight / 100)) + (examScore * (examWeight / 100))) * 10) / 10;

      // Determine Grade & GPA 4.0
      let gradeLetter = 'F';
      let gpa4 = 0.0;
      let statusBadge = '<span class="status-badge badge-danger-bold">Kém (Không đạt - Phải học lại)</span>';

      if (total10 >= 8.5) {
        gradeLetter = 'A'; gpa4 = 4.0;
        statusBadge = '<span class="status-badge badge-green">Xuất sắc</span>';
      } else if (total10 >= 8.0) {
        gradeLetter = 'B+'; gpa4 = 3.5;
        statusBadge = '<span class="status-badge badge-green">Giỏi</span>';
      } else if (total10 >= 7.0) {
        gradeLetter = 'B'; gpa4 = 3.0;
        statusBadge = '<span class="status-badge badge-blue">Khá</span>';
      } else if (total10 >= 6.5) {
        gradeLetter = 'C+'; gpa4 = 2.5;
        statusBadge = '<span class="status-badge badge-orange">Trung bình khá</span>';
      } else if (total10 >= 5.5) {
        gradeLetter = 'C'; gpa4 = 2.0;
        statusBadge = '<span class="status-badge badge-orange">Trung bình</span>';
      } else if (total10 >= 5.0) {
        gradeLetter = 'D+'; gpa4 = 1.5;
        statusBadge = '<span class="status-badge badge-red">Trung bình yếu</span>';
      } else if (total10 >= 4.0) {
        gradeLetter = 'D'; gpa4 = 1.0;
        statusBadge = '<span class="status-badge badge-red">Yếu (Đạt)</span>';
      }

      document.getElementById('resTotal10').textContent = total10.toFixed(1);
      document.getElementById('resGradeLetter').textContent = gradeLetter;
      document.getElementById('resGpa4').textContent = gpa4.toFixed(1);
      document.getElementById('resStatusBadge').innerHTML = statusBadge;
    });
  }

  // -------------------------------------------------------------
  // 🏅 INTERACTIVE WIDGET 2: SCHOLARSHIP RETENTION CHECKER
  // -------------------------------------------------------------
  const checkScholarshipBtn = document.getElementById('checkScholarshipBtn');
  if (checkScholarshipBtn) {
    checkScholarshipBtn.addEventListener('click', () => {
      const tier = document.getElementById('selectScholarshipTier').value;
      const studentGpa = parseFloat(document.getElementById('inputStudentGpa').value) || 0;
      const studentConduct = parseInt(document.getElementById('inputStudentConduct').value) || 0;

      let minGpa = 3.70;
      let minConduct = 90;
      let tierName = '100%';

      if (tier === '50') {
        minGpa = 3.40; minConduct = 80; tierName = '50%';
      } else if (tier === '25') {
        minGpa = 3.20; minConduct = 70; tierName = '25%';
      }

      const gpaPassed = studentGpa >= minGpa;
      const conductPassed = studentConduct >= minConduct;
      const isQualified = gpaPassed && conductPassed;

      const scholarshipResultBox = document.getElementById('scholarshipResultBox');

      if (isQualified) {
        scholarshipResultBox.innerHTML = `
          <div class="alert-box alert-warning" style="background:#f0fdf4; border-color:#bbf7d0; color:#15803d; margin:0;">
            <div class="alert-title">🎉 ĐỦ ĐIỀU KIỆN DUY TRÌ HỌC BỔNG ${tierName}!</div>
            <p>Sinh viên đạt đủ cả 2 chỉ tiêu: GPA <strong>${studentGpa.toFixed(2)} / ${minGpa.toFixed(2)}</strong> và Điểm rèn luyện <strong>${studentConduct} / ${minConduct} điểm</strong>.</p>
          </div>
        `;
      } else {
        let reasons = [];
        if (!gpaPassed) reasons.push(`GPA thiếu ${(minGpa - studentGpa).toFixed(2)} điểm (yêu cầu &ge; ${minGpa.toFixed(2)})`);
        if (!conductPassed) reasons.push(`Điểm rèn luyện thiếu ${minConduct - studentConduct} điểm (yêu cầu &ge; ${minConduct})`);

        scholarshipResultBox.innerHTML = `
          <div class="alert-box alert-danger" style="margin:0;">
            <div class="alert-title">⚠️ CHƯA ĐỦ ĐIỀU KIỆN DUY TRÌ HỌC BỔNG ${tierName}</div>
            <p><strong>Lý do chưa đạt:</strong> ${reasons.join(', ')}.</p>
            <p style="margin-top:6px; font-size:12px;">👉 <em>Lời khuyên: Lập kế hoạch đăng ký học cải thiện điểm và tham gia các hoạt động ngoại khóa để nâng điểm rèn luyện trong đợt tới.</em></p>
          </div>
        `;
      }
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
