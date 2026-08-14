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
    { id: "k2023", name: "Khóa 2023", cover: "assets/bia_khoa_2023.png", note: "Năm thứ 4 - Giai đoạn Chuẩn bị Thực tập & Tốt nghiệp" },
    { id: "k2024", name: "Khóa 2024", cover: "assets/bia_khoa_2024.png", note: "Năm thứ 3 - Giai đoạn Chuyên ngành & Chuẩn đầu ra" },
    { id: "k2025", name: "Khóa 2025", cover: "assets/bia_khoa_2025.png", note: "Năm thứ 2 - Giai đoạn Cơ sở ngành & Học bổng" },
    { id: "k2026", name: "Khóa 2026", cover: "assets/bia_khoa_2026.png", note: "Năm thứ 1 - Giai đoạn Đại cương & Thích ứng đại học" }
  ],

  topics: [
    {
      id: "trung-tam-ho-tro-hoc-vu",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
      title: "I. Trung tâm Hỗ trợ Học vụ",
      badge: "Đơn vị Hỗ trợ Chính",
      badgeClass: "badge-primary",
      bgColor: "pastel-blue",
      accentColor: "#0284c7",
      summary: "Chức năng nhiệm vụ tiếp nhận, tư vấn quy chế, giải quyết thủ tục học vụ, thời gian và các kênh liên hệ trực tiếp & trực tuyến.",
      content: `
        <div class="topic-detail">
          
          <div class="visual-card card-blue-accent">
            <div class="card-title-row">
              <span class="icon-bubble blue-bubble">🏢</span>
              <h4>1. Nhiệm vụ chính của Trung tâm Hỗ trợ học vụ</h4>
            </div>
            <div class="duties-grid">
              <div class="duty-item">
                <strong>💬 Tiếp nhận, tư vấn & giải đáp cho Sinh viên / Phụ huynh:</strong>
                <ul>
                  <li>Các quy định, quy chế đào tạo;</li>
                  <li>Các thông báo liên quan đến vấn đề học tập;</li>
                  <li>Kế hoạch giảng dạy - học tập của học kỳ/năm học;</li>
                  <li>Thời khóa biểu, lịch thi;</li>
                  <li>Kết quả học tập và các vấn đề học vụ khác.</li>
                </ul>
              </div>

              <div class="duty-item">
                <strong>📝 Giải quyết các thủ tục học vụ cho Sinh viên:</strong>
                <ul>
                  <li>Bảo lưu kết quả học tập;</li>
                  <li>Nhập học lại;</li>
                  <li>Chuyển trường, chuyển ngành học;</li>
                  <li>Đăng ký môn học và các thủ tục học vụ khác.</li>
                </ul>
              </div>

              <div class="duty-item">
                <strong>❤️ Chăm sóc & Hỗ trợ Học vụ Sinh viên:</strong>
                <p>Theo dõi, chăm sóc học vụ đối với sinh viên có kết quả học tập chưa tốt, tư vấn và đề xuất các phương án giúp sinh viên cải thiện kết quả học tập.</p>
              </div>

              <div class="duty-item">
                <strong>🤝 Phối hợp với Khoa chuyên môn:</strong>
                <p>Tư vấn chuyên ngành, chương trình và lộ trình học cho sinh viên/phụ huynh, qua đó giúp sinh viên xây dựng <strong>Kế hoạch học tập hợp lý</strong> và <strong>Phương pháp học hiệu quả</strong>.</p>
              </div>
            </div>
          </div>

          <!-- Working Time & Contact Info -->
          <div class="grid-2col" style="margin-top: 16px;">
            <div class="info-card border-blue">
              <div class="info-card-header">
                <span class="icon-bubble blue-bubble">⏰</span>
                <h4>Thời gian Làm việc</h4>
              </div>
              <p><strong>Từ Thứ Hai đến Thứ Sáu và sáng Thứ Bảy:</strong></p>
              <ul>
                <li><strong>Buổi sáng:</strong> 07:30 - 11:30</li>
                <li><strong>Buổi chiều:</strong> 13:30 - 16:30</li>
              </ul>
              <p style="margin-top: 10px;"><strong>Địa điểm liên hệ trực tiếp:</strong><br>📍 Tầng 2, trụ sở 141 - 145 Điện Biên Phủ, Phường Gia Định, TP. Hồ Chí Minh.</p>
            </div>

            <div class="info-card border-green">
              <div class="info-card-header">
                <span class="icon-bubble green-bubble">📞</span>
                <h4>Các Kênh Liên hệ Trực tuyến</h4>
              </div>
              <ul class="contact-channels">
                <li>📧 <strong>Email:</strong> <code>hotrohocvu@uef.edu.vn</code></li>
                <li>💬 <strong>Chat qua Zalo:</strong> <code>0908 560 999</code></li>
                <li>☎️ <strong>Điện thoại:</strong> <code>028 2236 1111</code> hoặc <code>028 2235 1111</code></li>
                <li>📞 <strong>Tổng đài:</strong> <code>028 2236 3333</code> (Số nội bộ: <code>2050</code>, <code>2052</code>, <code>2053</code>, <code>2054</code>, <code>2055</code>, <code>2056</code>, <code>2058</code>, <code>2059</code>, <code>2062</code>)</li>
                <li>🌐 <strong>Website:</strong> <a href="https://www.uef.edu.vn/tththv" target="_blank">www.uef.edu.vn/tththv</a></li>
              </ul>
            </div>
          </div>

        </div>
      `
    },
    {
      id: "thong-tin-luu-y-quan-trong",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 1 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
      title: "II. Một số Thông tin Lưu ý Quan trọng",
      badge: "Bắt buộc tuân thủ",
      badgeClass: "badge-danger",
      bgColor: "pastel-red",
      accentColor: "#dc2626",
      summary: "Quy định bắt buộc xuất trình Thẻ Sinh viên khi thi & làm việc học vụ; thường xuyên kiểm tra Email UEF và tin nhắn.",
      content: `
        <div class="topic-detail">
          
          <div class="visual-card card-red-accent">
            <div class="card-title-row">
              <span class="icon-bubble red-bubble">🪪</span>
              <h4>1. Đeo Thẻ Sinh viên khi Đến trường & Dự thi</h4>
            </div>
            <ul>
              <li><strong>Sinh viên tham gia thi bắt buộc phải xuất trình Thẻ Sinh viên.</strong> Hội đồng thi sẽ không giải quyết trường hợp sinh viên không có Thẻ Sinh viên khi tham gia thi.</li>
              <li>Khi sinh viên liên hệ với các Phòng/Viện/Trung tâm của Nhà trường để được hỗ trợ, tư vấn hoặc xử lý các vấn đề học vụ, sinh viên cần xuất trình Thẻ Sinh viên để các đơn vị chức năng xác nhận thông tin.</li>
              <li><strong>Trường hợp quên hoặc bị mất thẻ:</strong> Sinh viên liên hệ ngay <strong>Phòng Công tác sinh viên (Tầng 6, trụ sở 141 Điện Biên Phủ)</strong> để thực hiện cấp lại Thẻ Sinh viên.</li>
            </ul>
          </div>

          <div class="visual-card card-amber-accent">
            <div class="card-title-row">
              <span class="icon-bubble amber-bubble">📬</span>
              <h4>2. Thường xuyên Kiểm tra Email UEF & Tin nhắn từ Nhà trường</h4>
            </div>
            <ul>
              <li>Sinh viên cần đăng nhập và sử dụng <strong>Email UEF</strong> (<code>@uef.edu.vn</code>), thường xuyên kiểm tra hộp thư email và tin nhắn điện thoại để tiếp nhận các thông tin, thông báo quan trọng về học tập từ:
                <ol style="margin-top: 6px;">
                  <li>Trung tâm Hỗ trợ học vụ;</li>
                  <li>Khoa chuyên môn;</li>
                  <li>Các Phòng/Ban chức năng của Nhà trường.</li>
                </ol>
              </li>
              <li><strong>Trường hợp cần hỗ trợ về tài khoản Email UEF:</strong> Sinh viên liên hệ <strong>Trung tâm IT (Tầng 4, trụ sở 141 Điện Biên Phủ)</strong> hoặc Điện thoại <code>028 2236 3333 - ext 2160</code>.</li>
            </ul>
          </div>

        </div>
      `
    },
    {
      id: "ke-hoach-hoc-tap-nam-hoc",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
      title: "III. Kế hoạch Học tập Năm học 2026-2027",
      badge: "Lịch Đào tạo Chính thức",
      badgeClass: "badge-primary",
      bgColor: "pastel-blue",
      accentColor: "#0284c7",
      summary: "Khung thời gian học và thi của Học kỳ 1A, 1B, 2A, 2B, Học kỳ hè và Lịch trình kế hoạch Thực tập & Xét tốt nghiệp 2026-2027.",
      content: `
        <div class="topic-detail">
          
          <h3 class="section-title">📅 1. Khung Thời gian Học & Thi Năm học 2026-2027</h3>
          
          <div class="table-responsive">
            <table class="custom-table">
              <thead>
                <tr>
                  <th>Học kỳ</th>
                  <th>Thời gian Học và Thi</th>
                  <th>Ghi chú & Sự kiện</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong style="color:#0284c7;">Học kỳ 1A</strong></td>
                  <td><strong>07/09/2026 – 14/11/2026</strong></td>
                  <td>Học kỳ chính đợt 1</td>
                </tr>
                <tr>
                  <td><strong style="color:#0284c7;">Học kỳ 1B</strong></td>
                  <td><strong>16/11/2026 – 23/01/2027</strong></td>
                  <td>Học kỳ chính đợt 2</td>
                </tr>
                <tr style="background:#fffbeb;">
                  <td><strong style="color:#d97706;">Nghỉ Tết Nguyên đán</strong></td>
                  <td><strong>24/01/2027 – 21/02/2027</strong></td>
                  <td>Tết Nguyên đán Đinh Mùi 2027 (4 tuần)</td>
                </tr>
                <tr>
                  <td><strong style="color:#059669;">Học kỳ 2A</strong></td>
                  <td><strong>22/02/2027 – 01/05/2027</strong></td>
                  <td>Học kỳ chính đợt 3</td>
                </tr>
                <tr>
                  <td><strong style="color:#059669;">Học kỳ 2B</strong></td>
                  <td><strong>10/05/2027 – 17/07/2027</strong></td>
                  <td>Học kỳ chính đợt 4</td>
                </tr>
                <tr>
                  <td><strong style="color:#ea580c;">Học kỳ Hè</strong></td>
                  <td><strong>19/07/2027 – 28/08/2027</strong></td>
                  <td>Học kỳ phụ (Học vượt, cải thiện, học lại)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 class="section-title" style="margin-top: 24px;">🎓 2. Kế hoạch Thực tập & Xét Tốt nghiệp Năm học 2026-2027</h3>

          <div class="timeline-roadmap">
            <div class="roadmap-node node-blue">
              <div class="node-icon">10</div>
              <div class="node-body">
                <h4>Đợt Tháng 10/2026</h4>
                <p><strong>Thực tập tốt nghiệp:</strong> 26/10/2026 – 16/01/2027</p>
                <span class="status-badge badge-blue">Lễ trao bằng: Tháng 04/2027</span>
              </div>
            </div>

            <div class="roadmap-node node-green">
              <div class="node-icon">04</div>
              <div class="node-body">
                <h4>Đợt Tháng 04/2027</h4>
                <p><strong>Thực tập tốt nghiệp:</strong> 12/04/2027 – 03/07/2027</p>
                <span class="status-badge badge-green">Lễ trao bằng: Tháng 08/2027</span>
              </div>
            </div>

            <div class="roadmap-node node-orange">
              <div class="node-icon">⚖️</div>
              <div class="node-body">
                <h4>Hội đồng Xét Tốt nghiệp</h4>
                <p><strong>Ngày họp xét:</strong> 30/07/2027</p>
                <span class="status-badge badge-orange">Công nhận Tốt nghiệp</span>
              </div>
            </div>
          </div>

        </div>
      `
    },
    {
      id: "checklist-dieu-kien-xet-tot-nghiep",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
      title: "IV. Checklist Điều kiện Xét Tốt nghiệp",
      badge: "Tiêu chuẩn Bắt buộc",
      badgeClass: "badge-success",
      bgColor: "pastel-green",
      accentColor: "#059669",
      summary: "8 điều kiện tiêu chuẩn để được Hội đồng Nhà trường xét công nhận và trao bằng tốt nghiệp cử nhân.",
      content: `
        <div class="topic-detail">
          
          <p class="section-desc">Để được xét công nhận tốt nghiệp, sinh viên cần đảm bảo đầy đủ tất cả các điều kiện sau:</p>

          <div class="checklist-card">
            <div class="check-item">
              <span class="check-icon">✓</span>
              <div>
                <strong>1. Tư cách Đạo đức & Pháp luật:</strong>
                <p>Tại thời điểm xét tốt nghiệp, không bị truy cứu trách nhiệm hình sự hoặc không đang trong thời gian bị kỷ luật ở mức đình chỉ học tập.</p>
              </div>
            </div>

            <div class="check-item">
              <span class="check-icon">✓</span>
              <div>
                <strong>2. Tích lũy Khối lượng Kiến thức:</strong>
                <p>Tích lũy đủ học phần, số tín chỉ và hoàn thành các nội dung bắt buộc khác theo yêu cầu của chương trình đào tạo.</p>
              </div>
            </div>

            <div class="check-item">
              <span class="check-icon">✓</span>
              <div>
                <strong>3. Điểm Trung bình Tích lũy Toàn khóa:</strong>
                <p>Điểm trung bình tích lũy toàn khóa học (GPA) phải đạt <strong>từ 2.00 trở lên</strong>.</p>
              </div>
            </div>

            <div class="check-item">
              <span class="check-icon">✓</span>
              <div>
                <strong>4. Điểm Chuyên đề / Khóa luận Tốt nghiệp:</strong>
                <p>Riêng điểm của học phần Chuyên đề tốt nghiệp hoặc Khóa luận tốt nghiệp phải đạt <strong>từ điểm C trở lên</strong>.</p>
              </div>
            </div>

            <div class="check-item">
              <span class="check-icon">✓</span>
              <div>
                <strong>5. Chứng chỉ Giáo dục Quốc phòng - An ninh:</strong>
                <p>Có Chứng chỉ Giáo dục Quốc phòng do Trung tâm GDQP-AN cấp.</p>
              </div>
            </div>

            <div class="check-item">
              <span class="check-icon">✓</span>
              <div>
                <strong>6. Học phần Giáo dục Thể chất:</strong>
                <p>Hoàn thành đầy đủ các học phần Giáo dục thể chất theo quy định chương trình.</p>
              </div>
            </div>

            <div class="check-item">
              <span class="check-icon">✓</span>
              <div>
                <strong>7. Chứng chỉ Chuẩn đầu ra Ngoại ngữ & Tin học:</strong>
                <p>Có đầy đủ các chứng chỉ đạt chuẩn đầu ra (Tiếng Anh TOEIC/IELTS, Tin học MOS/IC3...) theo quy định của Trường.</p>
              </div>
            </div>

            <div class="check-item">
              <span class="check-icon">✓</span>
              <div>
                <strong>8. Nghĩa vụ Tài chính:</strong>
                <p>Thanh toán đầy đủ các khoản học phí, lệ phí và hoàn thành các nghĩa vụ khác theo quy định của Trường.</p>
              </div>
            </div>
          </div>

        </div>
      `
    },
    {
      id: "chuan-dau-ra-ngoai-ngu-tin-hoc",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
      title: "V. Điều kiện Chứng chỉ Chuẩn đầu ra Tiếng Anh & Tin học",
      badge: "Theo từng Khóa học",
      badgeClass: "badge-primary",
      bgColor: "pastel-purple",
      accentColor: "#7c3aed",
      summary: "Quy định chi tiết về chuẩn đầu ra Tiếng Anh (TOEIC/IELTS) và Tin học (MOS/IC3) cho sinh viên các Khóa 2023, 2024, 2025, 2026.",
      content: `
        <div class="topic-detail">
          
          <div class="grid-2col">
            <div class="info-card border-blue">
              <div class="info-card-header">
                <span class="icon-bubble blue-bubble">🌐</span>
                <h4>1. Chuẩn đầu ra Tiếng Anh</h4>
              </div>
              <ul>
                <li><strong>Chương trình Chuẩn tiếng Việt:</strong> TOEIC từ 450 - 550+ hoặc IELTS từ 4.5 - 5.5+ (tùy ngành đào tạo).</li>
                <li><strong>Chương trình Song ngữ / Quốc tế:</strong> IELTS từ 5.5 - 6.0+ hoặc tương đương.</li>
                <li>Sinh viên ngành Ngôn ngữ Anh có chuẩn đầu ra riêng theo quy định của Khoa Ngoại ngữ.</li>
                <li>Nhà trường định kỳ tổ chức các đợt thi đánh giá chuẩn đầu ra và tiếp nhận chứng chỉ quốc tế hợp lệ.</li>
              </ul>
            </div>

            <div class="info-card border-purple">
              <div class="info-card-header">
                <span class="icon-bubble purple-bubble">💻</span>
                <h4>2. Chuẩn đầu ra Tin học</h4>
              </div>
              <ul>
                <li>Đạt chứng chỉ <strong>MOS (Microsoft Office Specialist)</strong> tối thiểu 2 môn (Word, Excel hoặc PowerPoint) đạt từ 700/1000 điểm; HOẶC</li>
                <li>Đạt chứng chỉ <strong>IC3 (Internet and Computing Core Certification)</strong>.</li>
                <li>Sinh viên ngành Công nghệ thông tin được công nhận theo chuẩn riêng của Khoa CNTT.</li>
              </ul>
            </div>
          </div>

        </div>
      `
    },
    {
      id: "tien-do-dao-tao",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
      title: "VI. Tiến độ Đào tạo & Học phần Chưa đạt theo Tiến độ",
      badge: "Quản lý Kế hoạch",
      badgeClass: "badge-warning",
      bgColor: "pastel-amber",
      accentColor: "#d97706",
      summary: "Khái niệm học phần chưa đạt theo tiến độ, ví dụ minh họa và hành động sinh viên cần thực hiện ngay.",
      content: `
        <div class="topic-detail">
          
          <div class="visual-card card-amber-accent">
            <div class="card-title-row">
              <span class="icon-bubble amber-bubble">📌</span>
              <h4>Khái niệm “Học phần chưa đạt theo tiến độ”</h4>
            </div>
            <p><strong>“Học phần chưa đạt theo tiến độ”</strong> là học phần sinh viên chưa hoàn thành theo tiến độ, kế hoạch học tập của khóa học, bao gồm:</p>
            <ul>
              <li><strong>Học phần sinh viên đã đăng ký nhưng không đạt (nhận điểm F);</strong> HOẶC</li>
              <li><strong>Học phần sinh viên chưa đăng ký học theo đúng sơ đồ học kỳ.</strong></li>
            </ul>
            <p style="margin-top: 8px;">Sau khi năm học/học kỳ kết thúc, nếu học phần sinh viên cần hoàn thành theo sơ đồ kế hoạch học tập của năm học/học kỳ đó chưa được hoàn thành thì được xác định là học phần chưa đạt theo tiến độ.</p>
          </div>

          <div class="visual-card card-blue-accent">
            <div class="card-title-row">
              <span class="icon-bubble blue-bubble">💡</span>
              <h4>Ví dụ Minh họa Cụ thể</h4>
            </div>
            <p><em>“Pháp luật đại cương”</em> là học phần sinh viên cần hoàn thành trong Học kỳ 2A của Năm 1. Tuy nhiên, sau khi kết thúc Năm 1, sinh viên chưa đăng ký và chưa tham gia học học phần này. Do đó, <strong>Pháp luật đại cương được xác định là học phần sinh viên chưa đạt theo tiến độ</strong>.</p>
          </div>

          <div class="visual-card card-red-accent">
            <div class="card-title-row">
              <span class="icon-bubble red-bubble">🚨</span>
              <h4>Hành động Sinh viên Cần Thực hiện Ngay</h4>
            </div>
            <ul>
              <li>Theo dõi kế hoạch đăng ký môn học từng học kỳ;</li>
              <li>Sớm đăng ký, tham gia học tập và hoàn thành học phần theo quy định;</li>
              <li>Sinh viên có học phần chưa đạt theo tiến độ cần <strong>liên hệ ngay Trung tâm Hỗ trợ học vụ</strong> để được tư vấn lộ trình học bù phù hợp nhất.</li>
            </ul>
          </div>

        </div>
      `
    },
    {
      id: "xep-loai-hoc-luc",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
      title: "VII. Xếp loại Học lực (Thang điểm Hệ 4)",
      badge: "Chuẩn Xếp loại",
      badgeClass: "badge-success",
      bgColor: "pastel-green",
      accentColor: "#059669",
      summary: "Bảng xếp hạng học lực từ Xuất sắc đến Kém theo thang điểm 4.0 và phân biệt ĐTB Học kỳ, ĐTB Năm học, ĐTB Tích lũy.",
      content: `
        <div class="topic-detail">
          
          <h3 class="section-title">📊 1. Bảng Xếp loại Học lực Sinh viên (Thang 4.0)</h3>
          
          <div class="table-responsive">
            <table class="custom-table">
              <thead>
                <tr>
                  <th>Xếp loại Học lực</th>
                  <th>Điểm Trung bình Hệ 4</th>
                  <th>Đánh giá Chung</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong style="color:#059669;">Xuất sắc</strong></td>
                  <td><strong>Từ 3.60 đến 4.00</strong></td>
                  <td>Đủ điều kiện xét học bổng khuyến khích cao nhất</td>
                </tr>
                <tr>
                  <td><strong style="color:#059669;">Giỏi</strong></td>
                  <td><strong>Từ 3.20 đến 3.59</strong></td>
                  <td>Học lực tốt, duy trì học bổng tuyển sinh</td>
                </tr>
                <tr>
                  <td><strong style="color:#0284c7;">Khá</strong></td>
                  <td><strong>Từ 2.50 đến 3.19</strong></td>
                  <td>Đạt chuẩn tiến độ tốt nghiệp</td>
                </tr>
                <tr>
                  <td><strong style="color:#d97706;">Trung bình</strong></td>
                  <td><strong>Từ 2.00 đến 2.49</strong></td>
                  <td>Mức chuẩn tối thiểu để được xét tốt nghiệp</td>
                </tr>
                <tr>
                  <td><strong style="color:#dc2626;">Yếu</strong></td>
                  <td><strong>Từ 1.00 đến 1.99</strong></td>
                  <td>Nguy cơ rơi vào diện Cảnh báo học tập</td>
                </tr>
                <tr>
                  <td><strong style="color:#b31217;">Kém</strong></td>
                  <td><strong>Dưới 1.00</strong></td>
                  <td>Bị cảnh báo học tập mức cao nhất</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 class="section-title" style="margin-top: 24px;">📝 2. Ghi chú Phân biệt 3 Loại Điểm Trung Bình</h3>

          <div class="grid-2col">
            <div class="info-card">
              <h4>Điểm Trung bình Học kỳ</h4>
              <p>Điểm trung bình của những học phần sinh viên đã học trong <strong>một học kỳ</strong>.</p>
            </div>

            <div class="info-card">
              <h4>Điểm Trung bình Năm học</h4>
              <p>Điểm trung bình của những học phần sinh viên đã học trong một năm học (áp dụng tính điểm các học kỳ chính gồm <strong>HK 1A, 1B, 2A, 2B</strong> và <strong>không tính HK hè</strong>).</p>
            </div>

            <div class="info-card" style="grid-column: 1 / -1;">
              <h4>Điểm Trung bình Tích lũy (GPA)</h4>
              <p>Điểm trung bình của những học phần sinh viên đã học <strong>tính từ đầu khóa học đến thời điểm xét</strong>.</p>
            </div>
          </div>

        </div>
      `
    },
    {
      id: "dieu-kien-duy-tri-hoc-bong",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
      title: "VIII. Điều kiện Duy trì Học bổng Tuyển sinh",
      badge: "Học bổng UEF",
      badgeClass: "badge-warning",
      bgColor: "pastel-amber",
      accentColor: "#d97706",
      summary: "Mức GPA và Điểm rèn luyện tối thiểu bắt buộc hàng năm để duy trì học bổng 25%, 50%, 100% học phí.",
      content: `
        <div class="topic-detail">
          
          <h3 class="section-title">🏅 Tiêu chuẩn Xét Duy trì Học bổng Tuyển sinh Hàng năm</h3>

          <div class="scholarship-cards-grid">
            <div class="scholarship-card card-gold">
              <div class="scholarship-badge">HỌC BỔNG 100% HỌC PHÍ</div>
              <div class="scholarship-body">
                <div class="metric-row">
                  <span>ĐTB Tích lũy (GPA)</span>
                  <strong>GPA &ge; 3.70 / 4.0</strong>
                </div>
                <div class="metric-row">
                  <span>Điểm Rèn luyện</span>
                  <strong>&ge; 90 điểm (Xuất sắc)</strong>
                </div>
                <div class="metric-row">
                  <span>Số tín chỉ/năm</span>
                  <strong>Đủ tín chỉ theo tiến độ</strong>
                </div>
              </div>
            </div>

            <div class="scholarship-card card-silver">
              <div class="scholarship-badge">HỌC BỔNG 50% HỌC PHÍ</div>
              <div class="scholarship-body">
                <div class="metric-row">
                  <span>ĐTB Tích lũy (GPA)</span>
                  <strong>GPA &ge; 3.40 / 4.0</strong>
                </div>
                <div class="metric-row">
                  <span>Điểm Rèn luyện</span>
                  <strong>&ge; 80 điểm (Tốt)</strong>
                </div>
                <div class="metric-row">
                  <span>Số tín chỉ/năm</span>
                  <strong>Đủ tín chỉ theo tiến độ</strong>
                </div>
              </div>
            </div>

            <div class="scholarship-card card-bronze">
              <div class="scholarship-badge">HỌC BỔNG 25% HỌC PHÍ</div>
              <div class="scholarship-body">
                <div class="metric-row">
                  <span>ĐTB Tích lũy (GPA)</span>
                  <strong>GPA &ge; 3.20 / 4.0</strong>
                </div>
                <div class="metric-row">
                  <span>Điểm Rèn luyện</span>
                  <strong>&ge; 70 điểm (Khá)</strong>
                </div>
                <div class="metric-row">
                  <span>Số tín chỉ/năm</span>
                  <strong>Đủ tín chỉ theo tiến độ</strong>
                </div>
              </div>
            </div>
          </div>

          <div class="alert-box alert-warning" style="margin-top: 16px;">
            <div class="alert-title">⚠️ Lưu ý:</div>
            <p>Sinh viên nếu không đạt GPA hoặc điểm rèn luyện ở năm học nào sẽ bị tạm dừng học bổng ở năm học đó. Điểm rèn luyện là điều kiện bắt buộc song song với GPA.</p>
          </div>

        </div>
      `
    },
    {
      id: "dang-ky-hoc-phu-dao-mien-phi",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
      title: "IX. Đăng ký Học phụ đạo (Hoàn toàn Miễn phí)",
      badge: "Hỗ trợ Học tập",
      badgeClass: "badge-success",
      bgColor: "pastel-teal",
      accentColor: "#0d9488",
      summary: "Chương trình lớp học phụ đạo miễn phí dành cho sinh viên cần củng cố kiến thức trước kỳ thi.",
      content: `
        <div class="topic-detail">
          
          <div class="visual-card card-teal-accent">
            <div class="card-title-row">
              <span class="icon-bubble teal-bubble">🧑‍🏫</span>
              <h4>Lớp Phụ đạo Học tập Miễn phí</h4>
            </div>
            <p>Nếu sinh viên học chuyên cần nhưng không theo kịp bài trong quá trình học và cần phụ đạo để củng cố kiến thức, sinh viên có thể đăng ký nguyện vọng học phụ đạo.</p>
            
            <div class="feature-bullets">
              <div class="bullet-item">
                <strong>⏰ Thời hạn đăng ký:</strong> Trước khi hết <strong>tuần thứ 5</strong> của học kỳ.
              </div>
              <div class="bullet-item">
                <strong>🎯 Mục tiêu:</strong> Giúp sinh viên nắm vững kiến thức chuyên môn; Hỗ trợ sinh viên đạt kết quả cao hơn trong học tập; Bổ trợ kiến thức trước kỳ thi.
              </div>
              <div class="bullet-item">
                <strong>💡 Chi phí:</strong> Các lớp phụ đạo được tổ chức vào các tuần học cuối, trước khi kỳ thi diễn ra và <strong>hoàn toàn miễn phí 100%</strong>.
              </div>
            </div>

            <div style="margin-top: 18px;">
              <a href="/phudao/" class="portal-btn btn-blue" style="text-decoration:none; display:inline-flex; align-items:center; gap:8px;">
                Truy cập Phân hệ Phụ đạo & Điểm danh QR (/phudao/)
              </a>
            </div>
          </div>

        </div>
      `
    },
    {
      id: "cac-noi-dung-hoc-vu-quan-trong",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
      title: "X. Các Nội dung Học vụ Quan trọng Cần Tra cứu",
      badge: "Liên kết & Tra cứu",
      badgeClass: "badge-primary",
      bgColor: "pastel-sky",
      accentColor: "#0284c7",
      summary: "8 nhóm nội dung học vụ quan trọng và liên kết tra cứu chính thức của Trường.",
      content: `
        <div class="topic-detail">
          
          <p class="section-desc">Trung tâm Hỗ trợ học vụ cung cấp các nhóm thông tin quan trọng để sinh viên và GVCN tra cứu thuận tiện:</p>

          <div class="links-grid">
            <div class="link-item">
              <span class="link-num">1</span>
              <div>
                <strong>Công nhận tốt nghiệp và Xét tốt nghiệp</strong>
                <p>Quy trình và điều kiện xét tốt nghiệp các đợt trong năm.</p>
              </div>
            </div>

            <div class="link-item">
              <span class="link-num">2</span>
              <div>
                <strong>Chứng chỉ Chuẩn đầu ra Tin học & Tiếng Anh</strong>
                <p>Quy định nộp và công nhận chuẩn đầu ra quốc tế.</p>
              </div>
            </div>

            <div class="link-item">
              <span class="link-num">3</span>
              <div>
                <strong>Học phần Quy định trong Chương trình Đào tạo</strong>
                <p>Khung chương trình chi tiết của từng ngành học.</p>
              </div>
            </div>

            <div class="link-item">
              <span class="link-num">4</span>
              <div>
                <strong>Cách tính điểm, Đánh giá kết quả & Xếp hạng</strong>
                <p>Công thức tính điểm học phần và quy đổi GPA.</p>
              </div>
            </div>

            <div class="link-item">
              <span class="link-num">5</span>
              <div>
                <strong>Điều kiện Duy trì Học bổng Tuyển sinh</strong>
                <p>Mức GPA và Điểm rèn luyện giữ học bổng hàng năm.</p>
              </div>
            </div>

            <div class="link-item">
              <span class="link-num">6</span>
              <div>
                <strong>Học lại & Học cải thiện Điểm</strong>
                <p>Quy định học lại môn F và học nâng điểm môn D/C.</p>
              </div>
            </div>

            <div class="link-item">
              <span class="link-num">7</span>
              <div>
                <strong>Đăng ký Chương trình Song bằng / Song ngành</strong>
                <p>Cơ hội học song song nhận 2 bằng cử nhân chính quy.</p>
              </div>
            </div>

            <div class="link-item">
              <span class="link-num">8</span>
              <div>
                <strong>Cổng Quản lý Đào tạo daotao.uef.edu.vn</strong>
                <p>Tra cứu thời khóa biểu, lịch thi và kết quả học tập.</p>
              </div>
            </div>
          </div>

        </div>
      `
    },
    {
      id: "cam-nang-ho-tro-hoc-vu",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
      title: "XI. Cẩm nang Hỗ trợ Học vụ",
      badge: "Tài liệu Số",
      badgeClass: "badge-info",
      bgColor: "pastel-indigo",
      accentColor: "#4f46e5",
      summary: "Nguồn thông tin hỗ trợ sinh viên tra cứu quy định, hướng dẫn và nội dung học vụ cần thiết trong quá trình học tập.",
      content: `
        <div class="topic-detail">
          
          <div class="visual-card card-blue-accent">
            <div class="card-title-row">
              <span class="icon-bubble blue-bubble">📖</span>
              <h4>Cổng Cẩm nang Hỗ trợ Học vụ Điện tử</h4>
            </div>
            <p>Cẩm nang Hỗ trợ học vụ là nguồn thông tin chính thống hỗ trợ sinh viên tra cứu tất cả các quy định, hướng dẫn và nội dung học vụ cần thiết trong suốt toàn bộ quá trình học tập tại UEF.</p>
            <p style="margin-top: 8px;">Sinh viên có thể tra cứu trực tiếp trên website này hoặc truy cập trang chủ Cổng thông tin: <a href="https://www.uef.edu.vn/tththv" target="_blank" style="color:#0284c7; font-weight:800;">www.uef.edu.vn/tththv</a>.</p>
          </div>

        </div>
      `
    },
    {
      id: "mot-so-giai-phap-ho-tro-sinh-vien",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`,
      title: "XII. Một số Giải pháp Hỗ trợ Sinh viên Học tập Hiệu quả",
      badge: "Tư vấn GVCN",
      badgeClass: "badge-success",
      bgColor: "pastel-green",
      accentColor: "#16a34a",
      summary: "Khung 3 đề mục giải pháp tư vấn căn cứ theo tình trạng thực tế, nhu cầu và nguyện vọng của sinh viên.",
      content: `
        <div class="topic-detail">
          
          <p class="section-desc">Trung tâm Hỗ trợ học vụ đề xuất các giải pháp hỗ trợ sinh viên học tập hiệu quả. Căn cứ theo tình trạng thực tế, nhu cầu và nguyện vọng, sinh viên có thể tham khảo 3 đề mục dưới đây nhằm xây dựng lộ trình, lập kế hoạch, nỗ lực học tập một cách có chiến lược để đạt thành tích tốt, <strong>THÀNH NHÂN VÀ THÀNH CÔNG</strong>:</p>

          <div class="solutions-grid">
            <div class="solution-card scenario-danger">
              <div class="scenario-header">
                <span class="scenario-badge badge-red">Đề mục 1</span>
                <h4>🚨 Dành cho Sinh viên đang gặp Khó khăn Học tập</h4>
              </div>
              <p class="scenario-subtitle">Sinh viên có điểm kém, bị cảnh báo học tập hoặc có nguy cơ chậm tiến độ</p>
              <ul>
                <li>Đăng ký tham gia ngay các lớp học phụ đạo miễn phí để củng cố kiến thức bị hổng;</li>
                <li>Chủ động đăng ký học lại sớm các môn bị điểm F để nâng điểm trung bình tích lũy GPA;</li>
                <li>Giảm tải số tín chỉ đăng ký trong học kỳ kế tiếp (&le; 12 - 14 tín chỉ) để tập trung nâng cao chất lượng học tập.</li>
              </ul>
            </div>

            <div class="solution-card scenario-warning">
              <div class="scenario-header">
                <span class="scenario-badge badge-orange">Đề mục 2</span>
                <h4>🚀 Dành cho Sinh viên Mong muốn Bứt phá</h4>
              </div>
              <p class="scenario-subtitle">Sinh viên có học lực Trung bình/Khá muốn vươn lên loại Giỏi hoặc duy trì Học bổng</p>
              <ul>
                <li>Đăng ký học cải thiện điểm các môn đạt điểm D, C để bứt phá GPA lên mức &ge; 3.20 - 3.40;</li>
                <li>Tích cực tham gia các hoạt động ngoại khóa, câu lạc bộ để nâng Điểm rèn luyện lên loại Tốt/Xuất sắc (&ge; 80 - 90 điểm);</li>
                <li>Hoàn thành sớm các chứng chỉ chuẩn đầu ra Tiếng Anh và Tin học từ năm 2 hoặc năm 3.</li>
              </ul>
            </div>

            <div class="solution-card scenario-success">
              <div class="scenario-header">
                <span class="scenario-badge badge-green">Đề mục 3</span>
                <h4>🌟 Dành cho Sinh viên Mong muốn Phát triển - Mở rộng</h4>
              </div>
              <p class="scenario-subtitle">Sinh viên Khá/Giỏi muốn học vượt tiến độ hoặc sở hữu 2 bằng đại học</p>
              <ul>
                <li>Đăng ký tham gia chương trình <strong>Song bằng / Song ngành</strong> để nhận 2 bằng cử nhân chính quy khi tốt nghiệp;</li>
                <li>Lập kế hoạch đăng ký học vượt các môn để hoàn thành chương trình đại học sớm (3 - 3.5 năm);</li>
                <li>Tham gia Nghiên cứu khoa học sinh viên và các cuộc thi học thuật quy mô lớn.</li>
              </ul>
            </div>
          </div>

        </div>
      `
    },
    {
      id: "ghi-nhan-phan-hoi-y-kien-sinh-vien",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>`,
      title: "XIII. Ghi nhận Ý kiến, Phản hồi từ Sinh viên",
      badge: "Sinh hoạt Lớp",
      badgeClass: "badge-primary",
      bgColor: "pastel-blue",
      accentColor: "#0284c7",
      summary: "Giáo viên chủ nhiệm thực hiện lấy ý kiến phản hồi về cơ sở vật chất, chương trình đào tạo, thắc mắc học vụ.",
      content: `
        <div class="topic-detail">
          
          <div class="visual-card card-blue-accent">
            <div class="card-title-row">
              <span class="icon-bubble blue-bubble">✍️</span>
              <h4>Ghi nhận Ý kiến & Phản hồi trong Buổi Sinh hoạt Lớp</h4>
            </div>
            <p>Trong các buổi sinh hoạt lớp, Giáo viên chủ nhiệm thực hiện lấy ý kiến phản hồi, góp ý của sinh viên về:</p>
            <ul>
              <li>🏢 <strong>Cơ sở vật chất;</strong></li>
              <li>📚 <strong>Chương trình đào tạo;</strong></li>
              <li>❓ <strong>Các thắc mắc về học tập, học vụ;</strong></li>
              <li>📈 <strong>Tình hình học tập của sinh viên trong lớp;</strong></li>
              <li>📌 <strong>Các nội dung khác (nếu có).</strong></li>
            </ul>
            <p style="margin-top: 10px;">Các phản hồi của sinh viên được GVCN và Nhà trường ghi nhận đầy đủ để phục vụ công tác hỗ trợ, giải đáp và không ngừng cải thiện chất lượng hoạt động học tập, học vụ.</p>
          </div>

        </div>
      `
    }
  ]
};
