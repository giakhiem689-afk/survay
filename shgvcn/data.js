/**
  * DỮ LIỆU CHÍNH THỨC NỘI DUNG SINH HOẠT GIÁO VIÊN CHỦ NHIỆM
  * Căn cứ chuẩn xác 100% theo tài liệu: Thông tin học vụ.docx (HK 26.1A/ Năm học 2026-2027)
  * Trung tâm Hỗ trợ Học vụ - Trường Đại học Kinh tế - Tài chính TP.HCM (UEF)
  */

const SHGVCN_DATA = {
  semesterInfo: {
    semester: "Học kỳ 1A",
    academicYear: "Năm học 2026-2027",
    department: "Trung tâm Hỗ trợ học vụ - UEF",
    address: "Tầng 2, trụ sở 141 - 145 Điện Biên Phủ, Phường Gia Định, TP. Hồ Chí Minh"
  },
  
  khoaList: [
    { id: "k2023", name: "Khóa 2023", cover: "assets/bia_khoa_2023.png" },
    { id: "k2024", name: "Khóa 2024", cover: "assets/bia_khoa_2024.png" },
    { id: "k2025", name: "Khóa 2025", cover: "assets/bia_khoa_2025.png" },
    { id: "k2026", name: "Khóa 2026", cover: "assets/bia_khoa_2026.png" }
  ],

  topics: [
    // MỤC 1: TRUNG TÂM HỖ TRỢ HỌC VỤ
    {
      id: "trung-tam-ho-tro-hoc-vu",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
      title: "I. Trung tâm Hỗ trợ Học vụ",
      bgColor: "pastel-blue",
      accentColor: "#0284c7",
      summary: "Chức năng nhiệm vụ tiếp nhận, tư vấn quy chế, giải quyết thủ tục học vụ, thời gian và các kênh liên hệ trực tiếp & trực tuyến.",
      content: `
        <div class="topic-detail">
          
          <!-- Bento Grid: 4 Nhiệm vụ chính -->
          <div class="info-bento-grid">
            <div class="info-bento-card bento-blue">
              <div class="bento-header">
                <span class="bento-icon">💬</span>
                <h4 class="bento-title">1. Tiếp nhận & Tư vấn</h4>
              </div>
              <ul class="bento-list">
                <li>Quy định, quy chế đào tạo tín chỉ UEF</li>
                <li>Thông báo, kế hoạch giảng dạy - học tập</li>
                <li>Thời khóa biểu, lịch thi, kết quả học tập</li>
              </ul>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header">
                <span class="bento-icon">📝</span>
                <h4 class="bento-title">2. Giải quyết Thủ tục</h4>
              </div>
              <ul class="bento-list">
                <li>Bảo lưu kết quả học tập & Nhập học lại</li>
                <li>Chuyển trường, chuyển ngành đào tạo</li>
                <li>Đăng ký môn học & các đơn từ học vụ</li>
              </ul>
            </div>

            <div class="info-bento-card bento-red">
              <div class="bento-header">
                <span class="bento-icon">❤️</span>
                <h4 class="bento-title">3. Chăm sóc Học vụ</h4>
              </div>
              <p class="bento-desc">Theo dõi, đồng hành cùng sinh viên có kết quả chưa tốt; đề xuất các phương án hỗ trợ, cải thiện GPA và nâng cao học lực.</p>
            </div>

            <div class="info-bento-card bento-purple">
              <div class="bento-header">
                <span class="bento-icon">🤝</span>
                <h4 class="bento-title">4. Phối hợp Khoa Chuyên môn</h4>
              </div>
              <p class="bento-desc">Tư vấn chuyên ngành, xây dựng lộ trình học tập tối ưu và phương pháp học đại học hiệu quả cho sinh viên và phụ huynh.</p>
            </div>
          </div>

          <!-- Infographic Callout: Địa chỉ & Thời gian -->
          <div class="info-alert-callout callout-blue">
            <span class="callout-icon">📍</span>
            <div class="callout-text">
              <strong>Địa điểm làm việc trực tiếp:</strong> Tầng 2, trụ sở 141 - 145 Điện Biên Phủ, Phường Gia Định, TP. Hồ Chí Minh.<br>
              <strong>Thời gian làm việc:</strong> Thứ 2 đến Thứ 6 (Sáng 07:30 - 11:30 | Chiều 13:30 - 16:30) • Sáng Thứ 7 (07:30 - 11:30).
            </div>
          </div>

        </div>
      `
    },

    // MỤC 2: MỘT SỐ THÔNG TIN LƯU Ý QUAN TRỌNG
    {
      id: "thong-tin-luu-y-quan-trong",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 1 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
      title: "II. Một số Thông tin Lưu ý Quan trọng",
      bgColor: "pastel-red",
      accentColor: "#dc2626",
      summary: "Quy định bắt buộc xuất trình Thẻ Sinh viên khi thi & làm việc học vụ; thường xuyên kiểm tra Email UEF và tin nhắn.",
      content: `
        <div class="topic-detail">
          
          <div class="info-bento-grid">
            <div class="info-bento-card bento-red">
              <div class="bento-header">
                <span class="bento-icon">🪪</span>
                <h4 class="bento-title">Đeo Thẻ Sinh viên Khi Đến Trường & Dự Thi</h4>
              </div>
              <ul class="bento-list">
                <li>Bắt buộc xuất trình Thẻ Sinh viên khi vào phòng thi và thực hiện các thủ tục học vụ.</li>
                <li><strong>Trường hợp mất thẻ:</strong> Liên hệ Trung tâm Thông tin - Thư viện (Tầng 5) để làm lại thẻ SV.</li>
                <li>Nếu chưa kịp nhận thẻ SV mới trước giờ thi, liên hệ Trung tâm Hỗ trợ học vụ (Tầng 2) để được cấp <strong>Giấy xác nhận tạm thời</strong>.</li>
              </ul>
            </div>

            <div class="info-bento-card bento-blue">
              <div class="bento-header">
                <span class="bento-icon">📧</span>
                <h4 class="bento-title">Kiểm tra Email Sinh viên & Tin nhắn</h4>
              </div>
              <ul class="bento-list">
                <li>Email trường cấp (dạng <code>MSSV@uef.edu.vn</code>) là kênh liên lạc thông tin học vụ chính thức và duy nhất.</li>
                <li>Sinh viên có trách nhiệm kiểm tra email thường xuyên để cập nhật kịp thời các thông báo học tập, lịch thi và cảnh báo học vụ.</li>
              </ul>
            </div>
          </div>

          <div class="info-alert-callout callout-amber">
            <span class="callout-icon">⚠️</span>
            <div class="callout-text">
              <strong>Lưu ý cảnh báo:</strong> Mọi khiếu nại phát sinh do sinh viên không kiểm tra Email trường hoặc không xuất trình thẻ SV khi thi sẽ không được giải quyết.
            </div>
          </div>

        </div>
      `
    },

    // MỤC 3: KẾ HOẠCH ĐÀO TẠO - GIẢNG DẠY
    {
      id: "ke-hoach-dao-tao-giang-day",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
      title: "III. Kế hoạch Đào tạo - Giảng dạy",
      bgColor: "pastel-amber",
      accentColor: "#d97706",
      summary: "Khung thời gian học tập, 2 đợt học trong học kỳ chính, các đợt thi học phần và quy định về lịch học.",
      content: `
        <div class="topic-detail">
          
          <!-- Infographic Flow: 2 Đợt học trong Học kỳ -->
          <div class="info-flow-container">
            <div class="flow-step-card">
              <span class="flow-step-number">1</span>
              <h4 class="flow-step-title">Đợt 1 (8 tuần đầu)</h4>
              <p class="flow-step-desc">Bắt đầu giảng dạy và học tập các học phần đợt 1. Kết thúc học phần sẽ tổ chức thi kết thúc môn đợt 1 ngay sau đó.</p>
            </div>

            <div class="flow-step-card">
              <span class="flow-step-number">2</span>
              <h4 class="flow-step-title">Đợt 2 (8 tuần tiếp theo)</h4>
              <p class="flow-step-desc">Triển khai giảng dạy các học phần đợt 2. Sau đó tổ chức thi kết thúc học phần và hoàn tất điểm tổng kết học kỳ.</p>
            </div>

            <div class="flow-step-card">
              <span class="flow-step-number">3</span>
              <h4 class="flow-step-title">Học kỳ Phụ (Hè)</h4>
              <p class="flow-step-desc">Tổ chức linh hoạt trong hè dành cho sinh viên có nhu cầu học vượt, học lại hoặc học cải thiện điểm tích lũy.</p>
            </div>
          </div>

          <div class="info-alert-callout callout-blue">
            <span class="callout-icon">📌</span>
            <div class="callout-text">
              Sinh viên theo dõi Thời khóa biểu chi tiết tại Cổng thông tin đào tạo <code>daotao.uef.edu.vn</code> trước mỗi tuần học.
            </div>
          </div>

        </div>
      `
    },

    // MỤC 4: ĐĂNG KÝ MÔN HỌC
    {
      id: "dang-ky-mon-hoc",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
      title: "IV. Đăng ký Môn học",
      bgColor: "pastel-green",
      accentColor: "#059669",
      summary: "Quy trình khảo sát nhu cầu, đăng ký chính thức, đăng ký bổ sung, giới hạn tín chỉ tối thiểu 14 TC và tối đa 25 TC.",
      content: `
        <div class="topic-detail">
          
          <!-- Stat Strips: Tín chỉ quy định -->
          <div class="info-stat-strip">
            <div class="stat-pill-box">
              <div class="stat-value">14 TC</div>
              <div class="stat-label">Tối thiểu / Học kỳ chính</div>
            </div>
            <div class="stat-pill-box">
              <div class="stat-value">25 TC</div>
              <div class="stat-label">Tối đa / Học kỳ chính</div>
            </div>
            <div class="stat-pill-box">
              <div class="stat-value">08 TC</div>
              <div class="stat-label">Tối đa / Học kỳ Phụ (Hè)</div>
            </div>
          </div>

          <!-- Step Process Flow -->
          <div class="info-flow-container">
            <div class="flow-step-card">
              <span class="flow-step-number">1</span>
              <h4 class="flow-step-title">Khảo sát Nhu cầu</h4>
              <p class="flow-step-desc">Sinh viên đăng ký nguyện vọng học lại / học cải thiện để Nhà trường sắp xếp mở lớp.</p>
            </div>
            <div class="flow-step-card">
              <span class="flow-step-number">2</span>
              <h4 class="flow-step-title">Đăng ký Chính thức</h4>
              <p class="flow-step-desc">Đăng ký môn học trực tuyến theo đúng khung thời gian quy định của từng Khóa.</p>
            </div>
            <div class="flow-step-card">
              <span class="flow-step-number">3</span>
              <h4 class="flow-step-title">Đăng ký Bổ sung</h4>
              <p class="flow-step-desc">Điều chỉnh môn học, xử lý các trường hợp trùng lịch hoặc lớp bị hủy do thiếu sĩ số.</p>
            </div>
          </div>

          <div class="info-alert-callout callout-red">
            <span class="callout-icon">🚫</span>
            <div class="callout-text">
              <strong>Tuyệt đối không nhờ người khác đăng ký môn học:</strong> Sinh viên tự bảo mật tài khoản cá nhân, mọi sự cố trùng lịch hoặc mất môn do chia sẻ mật khẩu sinh viên tự chịu trách nhiệm.
            </div>
          </div>

        </div>
      `
    },

    // MỤC 5: LỚP PHỤ ĐẠO HỌC VỤ
    {
      id: "lop-phu-dao-hoc-vu",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>`,
      title: "V. Lớp Phụ đạo Học vụ",
      bgColor: "pastel-blue",
      accentColor: "#0284c7",
      summary: "Chương trình phụ đạo hoàn toàn miễn phí, hỗ trợ củng cố kiến thức môn khó, điểm danh qua mã QR động trên máy chiếu.",
      content: `
        <div class="topic-detail">
          
          <div class="info-stat-strip">
            <div class="stat-pill-box">
              <div class="stat-value">100% MIỄN PHÍ</div>
              <div class="stat-label">Không thu bất kỳ học phí nào</div>
            </div>
            <div class="stat-pill-box">
              <div class="stat-value">QUÉT QR</div>
              <div class="stat-label">Điểm danh trực tiếp tại lớp</div>
            </div>
          </div>

          <div class="info-bento-grid">
            <div class="info-bento-card bento-green">
              <div class="bento-header">
                <span class="bento-icon">🎯</span>
                <h4 class="bento-title">Mục tiêu Lớp Phụ đạo</h4>
              </div>
              <ul class="bento-list">
                <li>Hỗ trợ sinh viên nắm vững kiến thức các môn đại cương & cơ sở ngành khó (Toán cao cấp, Kinh tế vi mô, Nguyên lý kế toán, Tiếng Anh...).</li>
                <li>Ôn tập trọng tâm và giải đáp bài tập trước các kỳ thi kết thúc học phần.</li>
              </ul>
            </div>

            <div class="info-bento-card bento-blue">
              <div class="bento-header">
                <span class="bento-icon">📲</span>
                <h4 class="bento-title">Phương thức Đăng ký & Điểm danh</h4>
              </div>
              <ul class="bento-list">
                <li>Đăng ký trực tuyến qua Cổng thông tin Trung tâm Hỗ trợ học vụ (mục <strong>Lớp Phụ đạo</strong>).</li>
                <li>Điểm danh tự động qua hệ thống mã QR hiển thị trên màn hình máy chiếu phòng học.</li>
              </ul>
            </div>
          </div>

        </div>
      `
    },

    // MỤC 6: QUY ĐỊNH ĐÁNH GIÁ KẾT QUẢ HỌC TẬP
    {
      id: "quy-dinh-danh-gia-ket-qua",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
      title: "VI. Đánh giá Kết quả Học tập",
      bgColor: "pastel-purple",
      accentColor: "#7c3aed",
      summary: "Thang điểm 10, thang điểm 4, quy đổi điểm chữ (A, B+, B, C+, C, D+, D, F) và điều kiện tích lũy môn học.",
      content: `
        <div class="topic-detail">
          
          <!-- Infographic Table: Thang điểm quy đổi -->
          <div class="info-table-wrap">
            <table class="info-table">
              <thead>
                <tr>
                  <th>Thang điểm 10</th>
                  <th>Điểm Chữ</th>
                  <th>Thang điểm 4</th>
                  <th>Xếp loại Học lực</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>8.5 – 10.0</strong></td>
                  <td><span style="color:#15803d; font-weight:800;">A</span></td>
                  <td><strong>4.0</strong></td>
                  <td>Xuất sắc</td>
                </tr>
                <tr>
                  <td><strong>8.0 – 8.4</strong></td>
                  <td><span style="color:#15803d; font-weight:800;">B+</span></td>
                  <td><strong>3.5</strong></td>
                  <td>Giỏi</td>
                </tr>
                <tr>
                  <td><strong>7.0 – 7.9</strong></td>
                  <td><span style="color:#0284c7; font-weight:800;">B</span></td>
                  <td><strong>3.0</strong></td>
                  <td>Khá</td>
                </tr>
                <tr>
                  <td><strong>6.5 – 6.9</strong></td>
                  <td><span style="color:#0284c7; font-weight:800;">C+</span></td>
                  <td><strong>2.5</strong></td>
                  <td>Trung bình Khá</td>
                </tr>
                <tr>
                  <td><strong>5.5 – 6.4</strong></td>
                  <td><span style="color:#d97706; font-weight:800;">C</span></td>
                  <td><strong>2.0</strong></td>
                  <td>Trung bình</td>
                </tr>
                <tr>
                  <td><strong>5.0 – 5.4</strong></td>
                  <td><span style="color:#d97706; font-weight:800;">D+</span></td>
                  <td><strong>1.5</strong></td>
                  <td>Trung bình Yếu</td>
                </tr>
                <tr>
                  <td><strong>4.0 – 4.9</strong></td>
                  <td><span style="color:#d97706; font-weight:800;">D</span></td>
                  <td><strong>1.0</strong></td>
                  <td>Yếu (Đạt)</td>
                </tr>
                <tr style="background:#fee2e2;">
                  <td><strong>Dưới 4.0</strong></td>
                  <td><span style="color:#b91c1c; font-weight:800;">F</span></td>
                  <td><strong>0.0</strong></td>
                  <td>Kém (Không đạt - Học lại)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="info-alert-callout callout-amber">
            <span class="callout-icon">💡</span>
            <div class="callout-text">
              <strong>Điều kiện đạt môn học:</strong> Điểm tổng kết học phần đạt từ <strong>4.0 trở lên</strong> (Thang 10) và không có điểm thành phần nào bị điểm 0.
            </div>
          </div>

        </div>
      `
    },

    // MỤC 7: CẢNH BÁO HỌC VỤ & BUỘC THÔI HỌC
    {
      id: "canh-bao-hoc-vu",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`,
      title: "VII. Cảnh báo Học vụ & Buộc Thôi học",
      bgColor: "pastel-red",
      accentColor: "#dc2626",
      summary: "Các mức xử lý cảnh báo học tập theo điểm GPA tích lũy; quy định buộc thôi học khi bị 3 lần cảnh báo liên tiếp.",
      content: `
        <div class="topic-detail">
          
          <div class="info-bento-grid">
            <div class="info-bento-card bento-amber">
              <div class="bento-header">
                <span class="bento-icon">⚠️</span>
                <h4 class="bento-title">Tiêu chí Bị Cảnh báo Học vụ</h4>
              </div>
              <ul class="bento-list">
                <li><strong>Năm 1:</strong> ĐTB tích lũy đạt dưới <strong>1.20</strong></li>
                <li><strong>Năm 2:</strong> ĐTB tích lũy đạt dưới <strong>1.40</strong></li>
                <li><strong>Năm 3:</strong> ĐTB tích lũy đạt dưới <strong>1.60</strong></li>
                <li><strong>Năm 4 trở đi:</strong> ĐTB tích lũy đạt dưới <strong>1.80</strong></li>
              </ul>
            </div>

            <div class="info-bento-card bento-red">
              <div class="bento-header">
                <span class="bento-icon">🚨</span>
                <h4 class="bento-title">Quy chế Buộc Thôi học</h4>
              </div>
              <ul class="bento-list">
                <li>Bị <strong>3 lần cảnh báo học vụ liên tiếp</strong>.</li>
                <li>Vượt quá thời gian đào tạo tối đa theo quy định của khóa học.</li>
                <li>Tự ý bỏ học không đăng ký môn học và không xin phép bảo lưu.</li>
              </ul>
            </div>
          </div>

          <div class="info-alert-callout callout-red">
            <span class="callout-icon">📢</span>
            <div class="callout-text">
              Sinh viên có nguy cơ bị cảnh báo học vụ cần chủ động liên hệ ngay <strong>Trung tâm Hỗ trợ học vụ (Tầng 2)</strong> để được tư vấn kế hoạch cải thiện điểm số.
            </div>
          </div>

        </div>
      `
    },

    // MỤC 8: HỌC BỔNG & MIỄN GIẢM HỌC PHÍ
    {
      id: "hoc-bong-va-chinh-sach",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
      title: "VIII. Học bổng & Miễn giảm Học phí",
      bgColor: "pastel-green",
      accentColor: "#059669",
      summary: "Chính sách Học bổng Tuyển sinh, Học bổng Doanh nghiệp, Học bổng Khuyến khích học tập và điều kiện duy trì học bổng.",
      content: `
        <div class="topic-detail">
          
          <div class="info-bento-grid">
            <div class="info-bento-card bento-green">
              <div class="bento-header">
                <span class="bento-icon">🎓</span>
                <h4 class="bento-title">1. Học bổng Tuyển sinh</h4>
              </div>
              <p class="bento-desc">Các mức học bổng <strong>100%, 50%, 25%</strong> học phí dành cho tân sinh viên có thành tích xét tuyển xuất sắc.</p>
            </div>

            <div class="info-bento-card bento-blue">
              <div class="bento-header">
                <span class="bento-icon">🌟</span>
                <h4 class="bento-title">2. Học bổng Khuyến khích Học tập</h4>
              </div>
              <p class="bento-desc">Xét theo từng năm học dựa trên kết quả Điểm học tập (GPA) và Điểm rèn luyện (ĐRL) từ loại Khá, Giỏi đến Xuất sắc.</p>
            </div>

            <div class="info-bento-card bento-purple">
              <div class="bento-header">
                <span class="bento-icon">🏢</span>
                <h4 class="bento-title">3. Học bổng Doanh nghiệp</h4>
              </div>
              <p class="bento-desc">Học bổng tài trợ trực tiếp từ các tập đoàn, doanh nghiệp đối tác dành cho các ngành học thế mạnh và sinh viên vượt khó.</p>
            </div>
          </div>

          <!-- Infographic Table: Điều kiện duy trì học bổng -->
          <div class="info-table-wrap">
            <table class="info-table">
              <thead>
                <tr>
                  <th>Mức Học bổng</th>
                  <th>Điều kiện GPA năm học</th>
                  <th>Điều kiện Điểm Rèn luyện</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Học bổng 100%</strong></td>
                  <td>GPA ≥ <strong>3.7 / 4.0</strong></td>
                  <td>ĐRL ≥ <strong>80 điểm</strong> (Loại Tốt)</td>
                </tr>
                <tr>
                  <td><strong>Học bổng 50%</strong></td>
                  <td>GPA ≥ <strong>3.5 / 4.0</strong></td>
                  <td>ĐRL ≥ <strong>80 điểm</strong> (Loại Tốt)</td>
                </tr>
                <tr>
                  <td><strong>Học bổng 25%</strong></td>
                  <td>GPA ≥ <strong>3.2 / 4.0</strong></td>
                  <td>ĐRL ≥ <strong>80 điểm</strong> (Loại Tốt)</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      `
    },

    // MỤC 9: CHUẨN ĐẦU RA NGOẠI NGỮ & TIN HỌC
    {
      id: "chuan-dau-ra-ngoai-ngu-tin-hoc",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><globe cx="12" cy="12" r="10"></globe><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
      title: "IX. Chuẩn Đầu ra Ngoại ngữ & Tin học",
      bgColor: "pastel-blue",
      accentColor: "#0284c7",
      summary: "Yêu cầu chứng chỉ Ngoại ngữ (IELTS, TOEIC, VSTEP) và Tin học chuẩn quốc tế (MOS, IC3) bắt buộc để xét tốt nghiệp.",
      content: `
        <div class="topic-detail">
          
          <div class="info-bento-grid">
            <div class="info-bento-card bento-blue">
              <div class="bento-header">
                <span class="bento-icon">🌐</span>
                <h4 class="bento-title">Chuẩn Đầu ra Tiếng Anh</h4>
              </div>
              <ul class="bento-list">
                <li><strong>Khối ngành Kinh tế - Quản trị:</strong> IELTS ≥ 5.5 / TOEIC ≥ 600 / VSTEP Bậc 4 (B2).</li>
                <li><strong>Khối ngành Ngôn ngữ Anh:</strong> IELTS ≥ 6.5 / VSTEP Bậc 5 (C1).</li>
                <li><strong>Các ngành khác:</strong> IELTS ≥ 5.0 / TOEIC ≥ 500 / VSTEP Bậc 3 (B1).</li>
              </ul>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header">
                <span class="bento-icon">💻</span>
                <h4 class="bento-title">Chuẩn Đầu ra Tin học</h4>
              </div>
              <ul class="bento-list">
                <li>Chứng chỉ Tin học Quốc tế <strong>MOS</strong> (Word, Excel, PowerPoint đạt ≥ 700/1000 điểm).</li>
                <li>Hoặc Chứng chỉ Tin học Quốc tế <strong>IC3 GS5 / GS6</strong>.</li>
              </ul>
            </div>
          </div>

          <div class="info-alert-callout callout-amber">
            <span class="callout-icon">⏳</span>
            <div class="callout-text">
              Sinh viên nên hoàn thành chuẩn đầu ra Ngoại ngữ & Tin học ngay từ <strong>Năm 2 và Năm 3</strong> để không bị chậm tiến độ xét tốt nghiệp.
            </div>
          </div>

        </div>
      `
    },

    // MỤC 10: THỰC TẬP TỐT NGHIỆP & KHÓA LUẬN
    {
      id: "thuc-tap-tot-nghiep",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
      title: "X. Thực tập Tốt nghiệp & Khóa luận",
      bgColor: "pastel-amber",
      accentColor: "#d97706",
      summary: "Điều kiện tham gia thực tập doanh nghiệp, làm khóa luận tốt nghiệp hoặc học các môn thay thế khóa luận.",
      content: `
        <div class="topic-detail">
          
          <div class="info-stat-strip">
            <div class="stat-pill-box">
              <div class="stat-value">ĐỦ TÍN CHỈ</div>
              <div class="stat-label">Tích lũy các học phần tiên quyết</div>
            </div>
            <div class="stat-pill-box">
              <div class="stat-value">GPA ≥ 2.0</div>
              <div class="stat-label">Không bị cảnh báo học vụ</div>
            </div>
          </div>

          <div class="info-bento-grid">
            <div class="info-bento-card bento-amber">
              <div class="bento-header">
                <span class="bento-icon">🏢</span>
                <h4 class="bento-title">Thực tập Doanh nghiệp</h4>
              </div>
              <p class="bento-desc">Thời gian thực tập từ 10 - 12 tuần tại các doanh nghiệp đối tác của UEF hoặc đơn vị sinh viên tự liên hệ (được Khoa phê duyệt).</p>
            </div>

            <div class="info-bento-card bento-purple">
              <div class="bento-header">
                <span class="bento-icon">📚</span>
                <h4 class="bento-title">Khóa luận / Môn Thay thế</h4>
              </div>
              <p class="bento-desc">Sinh viên đạt điểm GPA cao theo quy định của Khoa được làm Khóa luận tốt nghiệp; các sinh viên còn lại học các môn chuyên đề thay thế.</p>
            </div>
          </div>

        </div>
      `
    },

    // MỤC 11: XÉT & CÔNG NHẬN TỐT NGHIỆP
    {
      id: "xet-cong-nhan-tot-nghiep",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`,
      title: "XI. Xét & Công nhận Tốt nghiệp",
      bgColor: "pastel-green",
      accentColor: "#059669",
      summary: "5 tiêu chuẩn vàng công nhận tốt nghiệp, 4 đợt xét tốt nghiệp trong năm và xếp loại bằng tốt nghiệp.",
      content: `
        <div class="topic-detail">
          
          <!-- 5 Tiêu chuẩn Tốt nghiệp -->
          <div class="info-bento-grid">
            <div class="info-bento-card bento-green">
              <div class="bento-header">
                <span class="bento-icon">1️⃣</span>
                <h4 class="bento-title">Tín chỉ Tích lũy</h4>
              </div>
              <p class="bento-desc">Hoàn thành đầy đủ số tín chỉ quy định trong chương trình đào tạo của ngành học.</p>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header">
                <span class="bento-icon">2️⃣</span>
                <h4 class="bento-title">Điểm GPA Tích lũy</h4>
              </div>
              <p class="bento-desc">Điểm trung bình chung tích lũy toàn khóa đạt từ <strong>2.00 / 4.00</strong> trở lên.</p>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header">
                <span class="bento-icon">3️⃣</span>
                <h4 class="bento-title">Chứng chỉ GDQP & GDTC</h4>
              </div>
              <p class="bento-desc">Có đầy đủ Chứng chỉ Giáo dục Quốc phòng - An ninh và hoàn thành các học phần Giáo dục Thể chất.</p>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header">
                <span class="bento-icon">4️⃣</span>
                <h4 class="bento-title">CĐR Ngoại ngữ & Tin học</h4>
              </div>
              <p class="bento-desc">Đã nộp và được công nhận đạt Chuẩn đầu ra Tiếng Anh và Chuẩn Tin học quốc tế.</p>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header">
                <span class="bento-icon">5️⃣</span>
                <h4 class="bento-title">Điểm Rèn luyện & Kỷ luật</h4>
              </div>
              <p class="bento-desc">Điểm rèn luyện toàn khóa đạt từ 50 điểm trở lên; không bị truy cứu trách nhiệm hình sự hoặc kỷ luật đình chỉ.</p>
            </div>
          </div>

          <div class="info-alert-callout callout-blue">
            <span class="callout-icon">🗓️</span>
            <div class="callout-text">
              <strong>4 Đợt xét tốt nghiệp trong năm:</strong> Đợt 1 (Tháng 3) • Đợt 2 (Tháng 6) • Đợt 3 (Tháng 9) • Đợt 4 (Tháng 12).
            </div>
          </div>

        </div>
      `
    },

    // MỤC 12: BIỂU MẪU & THỦ TỤC HỌC VỤ TRỰC TUYẾN
    {
      id: "bieu-mau-thu-tuc-hoc-vu",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>`,
      title: "XII. Biểu mẫu & Thủ tục Học vụ",
      bgColor: "pastel-blue",
      accentColor: "#0284c7",
      summary: "Kho biểu mẫu đơn từ học vụ chính thức (Bảo lưu, Nhập học lại, Chuyển ngành, Phúc khảo điểm thi...) và quy trình nộp đơn.",
      content: `
        <div class="topic-detail">
          
          <div class="info-bento-grid">
            <div class="info-bento-card bento-blue">
              <div class="bento-header">
                <span class="bento-icon">📄</span>
                <h4 class="bento-title">Đơn Xin Bảo lưu Kết quả</h4>
              </div>
              <p class="bento-desc">Nộp đơn trước khi học kỳ mới bắt đầu ít nhất 02 tuần. Thời gian bảo lưu tối đa 02 học kỳ liên tiếp.</p>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header">
                <span class="bento-icon">📋</span>
                <h4 class="bento-title">Đơn Xin Nhập học lại</h4>
              </div>
              <p class="bento-desc">Nộp đơn trước khi hết thời hạn bảo lưu ít nhất 02 tuần để được xếp lớp và mở cổng đăng ký môn học.</p>
            </div>

            <div class="info-bento-card bento-purple">
              <div class="bento-header">
                <span class="bento-icon">🔄</span>
                <h4 class="bento-title">Đơn Xin Chuyển ngành Học</h4>
              </div>
              <p class="bento-desc">Áp dụng cho sinh viên hoàn thành năm thứ nhất, đạt điểm trúng tuyển của ngành chuyển đến và được sự đồng ý của 2 Khoa.</p>
            </div>

            <div class="info-bento-card bento-amber">
              <div class="bento-header">
                <span class="bento-icon">✍️</span>
                <h4 class="bento-title">Đơn Phúc khảo Bài thi</h4>
              </div>
              <p class="bento-desc">Nộp đơn trong vòng 07 ngày làm việc kể từ ngày công bố điểm thi học phần trên cổng đào tạo.</p>
            </div>
          </div>

        </div>
      `
    },

    // MỤC 13: GHI NHẬN Ý KIẾN & PHẢN HỒI SINH VIÊN
    {
      id: "ghi-nhan-y-kien-phan-hoi",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
      title: "XIII. Ghi nhận Ý kiến & Phản hồi",
      bgColor: "pastel-green",
      accentColor: "#059669",
      summary: "Các kênh tiếp nhận phản ánh, khảo sát đánh giá chất lượng học vụ và chương trình đối thoại định kỳ giữa Nhà trường và Sinh viên.",
      content: `
        <div class="topic-detail">
          
          <div class="info-bento-grid">
            <div class="info-bento-card bento-green">
              <div class="bento-header">
                <span class="bento-icon">📊</span>
                <h4 class="bento-title">1. Khảo sát Học tập Trực tuyến</h4>
              </div>
              <p class="bento-desc">Tham gia hệ thống Khảo sát Sinh viên UEF tại Cổng thông tin <code>tththv.io.vn/khaosat/</code> để đóng góp ý kiến về môn học và dịch vụ hỗ trợ.</p>
            </div>

            <div class="info-bento-card bento-blue">
              <div class="bento-header">
                <span class="bento-icon">🗣️</span>
                <h4 class="bento-title">2. Diễn đàn Đối thoại Sinh viên</h4>
              </div>
              <p class="bento-desc">Chương trình đối thoại trực tiếp định kỳ giữa Ban Giám hiệu, Lãnh đạo các Phòng/Ban/Khoa/Viện với toàn thể Sinh viên UEF.</p>
            </div>

            <div class="info-bento-card bento-purple">
              <div class="bento-header">
                <span class="bento-icon">📮</span>
                <h4 class="bento-title">3. Hòm thư Góp ý Học vụ</h4>
              </div>
              <p class="bento-desc">Gửi ý kiến đóng góp trực tiếp qua Email <code>hotrohocvu@uef.edu.vn</code> hoặc Chat Zalo <code>0908 560 999</code> để được phản hồi trong vòng 24h.</p>
            </div>
          </div>

          <div class="info-alert-callout callout-green">
            <span class="callout-icon">🤝</span>
            <div class="callout-text">
              Trung tâm Hỗ trợ học vụ luôn lắng nghe và đồng hành cùng mọi thắc mắc của Sinh viên UEF để xây dựng môi trường học tập thân thiện, hiện đại và chất lượng!
            </div>
          </div>

        </div>
      `
    }
  ]
};
