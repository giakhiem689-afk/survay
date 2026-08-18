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
      summary: "5 nhiệm vụ chính của Trung tâm Hỗ trợ học vụ, địa chỉ, thời gian tiếp đón và các kênh liên hệ trực tiếp & trực tuyến.",
      content: `
        <div class="topic-detail">
          
          <!-- 5 Nhiệm vụ chính Bento Grid -->
          <div class="info-bento-grid">
            <div class="info-bento-card bento-blue">
              <div class="bento-header">
                <span class="bento-icon">💬</span>
                <h4 class="bento-title">1. Tiếp nhận & Tư vấn Học vụ</h4>
              </div>
              <ul class="bento-list">
                <li>Quy định, quy chế đào tạo tín chỉ UEF</li>
                <li>Thông báo, kế hoạch giảng dạy - học tập học kỳ/năm học</li>
                <li>Thời khóa biểu, lịch thi và kết quả học tập</li>
                <li>Các vấn đề học vụ phát sinh khác</li>
              </ul>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header">
                <span class="bento-icon">📝</span>
                <h4 class="bento-title">2. Giải quyết Thủ tục Học vụ</h4>
              </div>
              <ul class="bento-list">
                <li>Bảo lưu kết quả học tập & Nhập học lại</li>
                <li>Chuyển trường, chuyển ngành học</li>
                <li>Đăng ký môn học & biểu mẫu đơn từ học vụ</li>
              </ul>
            </div>

            <div class="info-bento-card bento-red">
              <div class="bento-header">
                <span class="bento-icon">❤️</span>
                <h4 class="bento-title">3. Chăm sóc & Hỗ trợ Học vụ</h4>
              </div>
              <p class="bento-desc">Đồng hành, tư vấn và đề xuất các phương án hỗ trợ kịp thời đối với sinh viên có kết quả học tập chưa tốt nhằm cải thiện GPA và nâng cao học lực.</p>
            </div>

            <div class="info-bento-card bento-purple">
              <div class="bento-header">
                <span class="bento-icon">🤝</span>
                <h4 class="bento-title">4. Phối hợp Khoa Chuyên môn</h4>
              </div>
              <p class="bento-desc">Tư vấn chuyên ngành, chương trình và lộ trình học cho sinh viên/phụ huynh; giúp sinh viên xây dựng Kế hoạch học tập hợp lý và Phương pháp học hiệu quả.</p>
            </div>

            <div class="info-bento-card bento-amber">
              <div class="bento-header">
                <span class="bento-icon">📢</span>
                <h4 class="bento-title">5. Thông báo & Cung cấp Thông tin</h4>
              </div>
              <p class="bento-desc">Cung cấp kịp thời thông tin kế hoạch đào tạo, các lưu ý quan trọng về học vụ và kết quả học tập đến sinh viên và phụ huynh.</p>
            </div>
          </div>

          <!-- Infographic Callout: Địa chỉ & Giờ làm việc -->
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
                <h4 class="bento-title">1. Đeo Thẻ Sinh viên Khi Đến Trường & Dự Thi</h4>
              </div>
              <ul class="bento-list">
                <li>Sinh viên tham gia thi <strong>bắt buộc phải xuất trình Thẻ Sinh viên</strong>. Hội đồng thi sẽ không giải quyết trường hợp không có thẻ SV.</li>
                <li>Khi liên hệ các Phòng/Viện/Trung tâm để hỗ trợ học vụ, sinh viên cần xuất trình thẻ SV để xác nhận thông tin.</li>
                <li><strong>Quên hoặc mất thẻ:</strong> Liên hệ <strong>Phòng Công tác sinh viên (Tầng 6, trụ sở 141 Điện Biên Phủ)</strong> để thực hiện cấp Thẻ Sinh viên.</li>
              </ul>
            </div>

            <div class="info-bento-card bento-blue">
              <div class="bento-header">
                <span class="bento-icon">📧</span>
                <h4 class="bento-title">2. Thường Xuyên Kiểm tra Email & Tin Nhắn</h4>
              </div>
              <ul class="bento-list">
                <li>Sinh viên cần đăng nhập và sử dụng Email UEF (<code>MSSV@uef.edu.vn</code>) để tiếp nhận các thông báo học tập quan trọng từ Trung tâm Hỗ trợ học vụ, Khoa và các Phòng/Ban.</li>
                <li><strong>Hỗ trợ tài khoản Email UEF:</strong> Liên hệ <strong>Phòng CNTT & Chuyển đổi số</strong>:
                  <br>📍 Tầng 4, 141-145 Điện Biên Phủ • ✉️ <code>it@uef.edu.vn</code> • ☎️ <code>028 2236 3333 (ext 2160)</code>.
                </li>
              </ul>
            </div>
          </div>

        </div>
      `
    },

    // MỤC 3: KẾ HOẠCH HỌC TẬP & TỐT NGHIỆP NĂM HỌC 2026-2027
    {
      id: "ke-hoach-hoc-tap-tot-nghiep",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
      title: "III. Kế hoạch Học tập & Tốt nghiệp Năm học 2026-2027",
      bgColor: "pastel-amber",
      accentColor: "#d97706",
      summary: "Khung thời gian đào tạo các học kỳ 1A, 1B, 2A, 2B, Hè và Lộ trình thực tập tốt nghiệp, xét tốt nghiệp Khóa 2023.",
      content: `
        <div class="topic-detail">
          
          <!-- 1. Kế hoạch năm học -->
          <div class="info-table-wrap">
            <table class="info-table">
              <thead>
                <tr>
                  <th>Học kỳ / Giai đoạn</th>
                  <th>Đối tượng áp dụng</th>
                  <th>Thời gian Học</th>
                  <th>Thời gian Thi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowspan="3"><strong>Học kỳ 1A</strong><br>(07/09 – 14/11/2026)</td>
                  <td>Khóa 2025 & Khóa 2026</td>
                  <td>07/09 – 07/11/2026</td>
                  <td>09/11 – 14/11/2026</td>
                </tr>
                <tr>
                  <td>Khóa 2023 (Nhóm 2) & Khóa 2024</td>
                  <td>07/09 – 31/10/2026</td>
                  <td>02/11 – 14/11/2026</td>
                </tr>
                <tr style="background:#f0fdf4;">
                  <td>Khóa 2023 (Nhóm 1)</td>
                  <td>14/09 – 17/10/2026<br><small>(SHCK: 07/09-12/09)</small></td>
                  <td>19/10 – 24/10/2026<br><strong>TTTN: 26/10/26 - 16/01/27</strong></td>
                </tr>
                <tr>
                  <td rowspan="2"><strong>Học kỳ 1B</strong><br>(16/11/2026 – 23/01/2027)</td>
                  <td>Khóa 2025 & Khóa 2026</td>
                  <td>16/11/2026 – 16/01/2027</td>
                  <td>18/01 – 23/01/2027</td>
                </tr>
                <tr>
                  <td>Khóa 2023 (Nhóm 2) & Khóa 2024</td>
                  <td>16/11/2026 – 09/01/2027</td>
                  <td>11/01 – 23/01/2027</td>
                </tr>
                <tr style="background:#fee2e2;">
                  <td colspan="4"><strong>Nghỉ Tết Nguyên Đán Đinh Mùi:</strong> 24/01/2027 – 21/02/2027</td>
                </tr>
                <tr>
                  <td rowspan="3"><strong>Học kỳ 2A</strong><br>(22/02 – 01/05/2027)</td>
                  <td>Khóa 2026</td>
                  <td>22/02 – 24/04/2027</td>
                  <td>26/04 – 01/05/2027</td>
                </tr>
                <tr>
                  <td>Khóa 2023 (Nhóm 1), Khóa 2024 & Khóa 2025</td>
                  <td>22/02 – 17/04/2027</td>
                  <td>19/04 – 01/05/2027</td>
                </tr>
                <tr style="background:#f0fdf4;">
                  <td>Khóa 2023 (Nhóm 2)</td>
                  <td>01/03 – 03/04/2027<br><small>(SHCK: 22/02-27/02)</small></td>
                  <td>05/04 – 10/04/2027<br><strong>TTTN: 12/04 - 03/07/2027</strong></td>
                </tr>
                <tr>
                  <td><strong>Học kỳ 2B</strong><br>(10/05 – 17/07/2027)</td>
                  <td>Toàn bộ các khóa theo kế hoạch</td>
                  <td>10/05 – 03/07/2027</td>
                  <td>05/07 – 17/07/2027</td>
                </tr>
                <tr>
                  <td><strong>Học kỳ Hè</strong><br>(19/07 – 28/08/2027)</td>
                  <td>Sinh viên học vượt, học lại, học cải thiện</td>
                  <td>19/07 – 21/08/2027</td>
                  <td>23/08 – 29/08/2027</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Phân nhóm TTTN Khóa 2023 -->
          <div class="info-bento-grid">
            <div class="info-bento-card bento-blue">
              <div class="bento-header">
                <span class="bento-icon">🏢</span>
                <h4 class="bento-title">Khóa 2023 - Nhóm 1 (TTTN Tháng 10/2026)</h4>
              </div>
              <p class="bento-desc">Gồm 10 ngành: Kế toán, Kiểm toán, Tài chính - Ngân hàng, Tài chính quốc tế, Công nghệ tài chính, Kinh doanh thương mại, Marketing, Digital Marketing, Quản trị sự kiện, Kinh doanh quốc tế.</p>
            </div>

            <div class="info-bento-card bento-purple">
              <div class="bento-header">
                <span class="bento-icon">🏢</span>
                <h4 class="bento-title">Khóa 2023 - Nhóm 2 (TTTN Tháng 04/2027)</h4>
              </div>
              <p class="bento-desc">Gồm tất cả các ngành đào tạo còn lại của Khóa 2023.</p>
            </div>
          </div>

          <!-- Các mốc xét & trao bằng -->
          <div class="info-alert-callout callout-green">
            <span class="callout-icon">🎓</span>
            <div class="callout-text">
              <strong>Kế hoạch Lễ trao bằng tốt nghiệp 2027:</strong><br>
              • Đợt xét từ 10/2026 - 03/2027: Lễ bế giảng & trao bằng vào <strong>Tháng 04/2027</strong>.<br>
              • Đợt xét 30/07/2027: Lễ bế giảng & trao bằng vào <strong>Tháng 08/2027</strong> (dự kiến 25 - 29/08/2027).
            </div>
          </div>

        </div>
      `
    },

    // MỤC 4: CHECKLIST CÁC ĐIỀU KIỆN XÉT TỐT NGHIỆP
    {
      id: "checklist-dieu-kien-tot-nghiep",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>`,
      title: "IV. Checklist Các Điều kiện Xét Tốt nghiệp",
      bgColor: "pastel-green",
      accentColor: "#059669",
      summary: "Đảm bảo đầy đủ 7 điều kiện xét tốt nghiệp: Tín chỉ, GPA ≥ 2.00, Điểm khóa luận ≥ C, GDQP, GDTC, CĐR Ngoại ngữ & Tin học.",
      content: `
        <div class="topic-detail">
          
          <div class="info-bento-grid">
            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">1️⃣</span><h4 class="bento-title">Kỷ luật & Tư cách</h4></div>
              <p class="bento-desc">Không bị truy cứu trách nhiệm hình sự hoặc không đang trong thời gian bị kỷ luật đình chỉ học tập.</p>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">2️⃣</span><h4 class="bento-title">Số Tín chỉ Tích lũy</h4></div>
              <p class="bento-desc">Tích lũy đủ học phần, số tín chỉ và hoàn thành các nội dung bắt buộc theo chương trình đào tạo.</p>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">3️⃣</span><h4 class="bento-title">Điểm GPA Tích lũy</h4></div>
              <p class="bento-desc">Điểm trung bình tích lũy toàn khóa đạt từ <strong>2.00 / 4.00 trở lên</strong>.</p>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">4️⃣</span><h4 class="bento-title">Chuyên đề / Khóa luận</h4></div>
              <p class="bento-desc">Riêng điểm học phần Chuyên đề / Khóa luận tốt nghiệp phải đạt từ <strong>điểm C trở lên</strong>.</p>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">5️⃣</span><h4 class="bento-title">GDQP & Thể chất</h4></div>
              <p class="bento-desc">Có Chứng chỉ Giáo dục Quốc phòng và hoàn thành đủ số học phần Giáo dục Thể chất.</p>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">6️⃣</span><h4 class="bento-title">CĐR Tiếng Anh & Tin học</h4></div>
              <p class="bento-desc">Có các chứng chỉ Ngoại ngữ quốc tế và Tin học quốc tế đạt chuẩn đầu ra theo quy định của Trường.</p>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">7️⃣</span><h4 class="bento-title">Học phí & Nghĩa vụ</h4></div>
              <p class="bento-desc">Thanh toán đầy đủ học phí, lệ phí và hoàn tất các nghĩa vụ khác đối với Nhà trường.</p>
            </div>
          </div>

        </div>
      `
    },

    // MỤC 5: ĐIỀU KIỆN CHỨNG CHỈ TIẾNG ANH, TIN HỌC CHUẨN ĐẦU RA
    {
      id: "chuan-dau-ra-tieng-anh-tin-hoc",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
      title: "V. Điều kiện Chứng chỉ Tiếng Anh, Tin học Chuẩn Đầu ra",
      bgColor: "pastel-blue",
      accentColor: "#0284c7",
      summary: "Bảng quy định chuẩn đầu ra Tiếng Anh (IELTS, TOEIC, VSTEP) và Chuẩn đầu ra Tin học (MOS, IC3) theo từng Khóa ngành.",
      content: `
        <div class="topic-detail">
          
          <div class="info-bento-grid">
            <div class="info-bento-card bento-blue">
              <div class="bento-header">
                <span class="bento-icon">🌐</span>
                <h4 class="bento-title">Chuẩn Đầu ra Tiếng Anh</h4>
              </div>
              <ul class="bento-list">
                <li>IELTS, TOEIC Quốc tế, TOEFL iBT hoặc VSTEP theo khung năng lực 6 bậc Việt Nam.</li>
                <li>Khối Kinh tế - Kinh doanh: IELTS ≥ 5.5 / TOEIC ≥ 600 / VSTEP Bậc 4 (B2).</li>
                <li>Khối Ngôn ngữ Anh: IELTS ≥ 6.5 / VSTEP Bậc 5 (C1).</li>
              </ul>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header">
                <span class="bento-icon">💻</span>
                <h4 class="bento-title">Chuẩn Đầu ra Tin học</h4>
              </div>
              <ul class="bento-list">
                <li>Chứng chỉ Tin học Quốc tế <strong>MOS (Microsoft Office Specialist)</strong> Word, Excel, PowerPoint đạt từ 700/1000 điểm.</li>
                <li>Hoặc Chứng chỉ Tin học Quốc tế <strong>IC3 GS5 / GS6</strong>.</li>
              </ul>
            </div>
          </div>

          <div class="info-alert-callout callout-amber">
            <span class="callout-icon">⏱️</span>
            <div class="callout-text">
              Sinh viên Khóa 2023 cần nộp chứng chỉ Tiếng Anh & Tin học trong khoảng thời gian từ <strong>07/06 đến 30/06/2027</strong> để kịp xét tốt nghiệp đợt tháng 07/2027.
            </div>
          </div>

        </div>
      `
    },

    // MỤC 6: TIẾN ĐỘ ĐÀO TẠO
    {
      id: "tien-do-dao-tao",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
      title: "VI. Tiến độ Đào tạo",
      bgColor: "pastel-purple",
      accentColor: "#7c3aed",
      summary: "Khái niệm học phần chưa đạt theo tiến độ (điểm F hoặc chưa đăng ký) và giải pháp khắc phục kịp thời.",
      content: `
        <div class="topic-detail">
          
          <div class="info-bento-grid">
            <div class="info-bento-card bento-purple">
              <div class="bento-header"><span class="bento-icon">📌</span><h4 class="bento-title">Khái niệm Học phần Chưa Đạt</h4></div>
              <p class="bento-desc">Là học phần sinh viên chưa hoàn thành theo tiến độ, kế hoạch học tập của khóa học, bao gồm:</p>
              <ul class="bento-list">
                <li>Học phần sinh viên đã đăng ký nhưng nhận <strong>điểm F (không đạt)</strong>; hoặc</li>
                <li>Học phần sinh viên <strong>chưa đăng ký học</strong> theo sơ đồ kế hoạch học tập.</li>
              </ul>
            </div>

            <div class="info-bento-card bento-blue">
              <div class="bento-header"><span class="bento-icon">💡</span><h4 class="bento-title">Ví dụ Cụ thể</h4></div>
              <p class="bento-desc">Học phần <em>"Pháp luật đại cương"</em> cần hoàn thành trong HK 2A Năm 1. Nếu kết thúc Năm 1 sinh viên chưa đăng ký học, môn này được xác định là học phần chưa đạt theo tiến độ.</p>
            </div>
          </div>

          <div class="info-alert-callout callout-amber">
            <span class="callout-icon">⚡</span>
            <div class="callout-text">
              Sinh viên có học phần chưa đạt theo tiến độ cần theo dõi thông báo mở lớp và <strong>liên hệ ngay Trung tâm Hỗ trợ học vụ (Tầng 2)</strong> để được hỗ trợ đăng ký học bù sớm nhất.
            </div>
          </div>

        </div>
      `
    },

    // MỤC 7: XẾP LOẠI HỌC LỰC
    {
      id: "xep-loai-hoc-luc",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 20V10M12 20V4M6 20v-6"></path></svg>`,
      title: "VII. Xếp loại Học lực",
      bgColor: "pastel-green",
      accentColor: "#059669",
      summary: "Bảng xếp loại học lực theo thang điểm 4, định nghĩa ĐTB học kỳ, ĐTB năm học, ĐTB tích lũy và mục tiêu GPA ≥ 2.00.",
      content: `
        <div class="topic-detail">
          
          <div class="info-table-wrap">
            <table class="info-table">
              <thead>
                <tr>
                  <th>Xếp loại Học lực</th>
                  <th>Điểm Trung bình (Thang hệ 4)</th>
                  <th>Ghi chú</th>
                </tr>
              </thead>
              <tbody>
                <tr style="background:#f0fdf4;">
                  <td><strong style="color:#15803d;">XUẤT SẮC</strong></td>
                  <td><strong>3.60 – 4.00</strong></td>
                  <td>Đạt chuẩn duy trì học bổng 100% (ĐRL ≥ 80)</td>
                </tr>
                <tr style="background:#f0fdf4;">
                  <td><strong style="color:#15803d;">GIỎI</strong></td>
                  <td><strong>3.20 – 3.59</strong></td>
                  <td>Đạt chuẩn duy trì học bổng 50% - 25% (ĐRL ≥ 80)</td>
                </tr>
                <tr>
                  <td><strong style="color:#0284c7;">KHÁ</strong></td>
                  <td><strong>2.50 – 3.19</strong></td>
                  <td>Học lực tốt, tiến độ ổn định</td>
                </tr>
                <tr>
                  <td><strong style="color:#d97706;">TRUNG BÌNH</strong></td>
                  <td><strong>2.00 – 2.49</strong></td>
                  <td><strong>Mức sàn tối thiểu để đủ điều kiện Tốt nghiệp</strong></td>
                </tr>
                <tr style="background:#fff1f2;">
                  <td><strong style="color:#dc2626;">YẾU</strong></td>
                  <td><strong>1.00 – 1.99</strong></td>
                  <td>Chưa đủ điều kiện tốt nghiệp, cần học cải thiện</td>
                </tr>
                <tr style="background:#fee2e2;">
                  <td><strong style="color:#991b1b;">KÉM</strong></td>
                  <td><strong>Dưới 1.00</strong></td>
                  <td>Nguy cơ bị cảnh báo học vụ</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="info-stat-strip">
            <div class="stat-pill-box">
              <div class="stat-value">GPA ≥ 2.00</div>
              <div class="stat-label">Điều kiện Xét Tốt nghiệp</div>
            </div>
            <div class="stat-pill-box">
              <div class="stat-value">4 HỌC KỲ CHÍNH</div>
              <div class="stat-label">HK 1A, 1B, 2A, 2B (Tính ĐTB Năm)</div>
            </div>
          </div>

        </div>
      `
    },

    // MỤC 8: ĐIỀU KIỆN DUY TRÌ HỌC BỔNG TUYỂN SINH
    {
      id: "dieu-kien-duy-tri-hoc-bong",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
      title: "VIII. Điều kiện Duy trì Học bổng Tuyển sinh",
      bgColor: "pastel-amber",
      accentColor: "#d97706",
      summary: "Quy định điều kiện Điểm Trung bình năm học (GPA) và Điểm Rèn luyện (ĐRL) để duy trì các suất học bổng 100%, 50%, 25%.",
      content: `
        <div class="topic-detail">
          
          <div class="info-table-wrap">
            <table class="info-table">
              <thead>
                <tr>
                  <th>Mức Học bổng Tuyển sinh</th>
                  <th>Điều kiện Điểm TB Năm học (GPA hệ 4)</th>
                  <th>Điều kiện Điểm Rèn luyện (ĐRL)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Học bổng 100%</strong></td>
                  <td>GPA Năm học ≥ <strong>3.70 / 4.00</strong></td>
                  <td>ĐRL Năm học ≥ <strong>80 điểm</strong> (Loại Tốt)</td>
                </tr>
                <tr>
                  <td><strong>Học bổng 50%</strong></td>
                  <td>GPA Năm học ≥ <strong>3.50 / 4.00</strong></td>
                  <td>ĐRL Năm học ≥ <strong>80 điểm</strong> (Loại Tốt)</td>
                </tr>
                <tr>
                  <td><strong>Học bổng 25%</strong></td>
                  <td>GPA Năm học ≥ <strong>3.20 / 4.00</strong></td>
                  <td>ĐRL Năm học ≥ <strong>80 điểm</strong> (Loại Tốt)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="info-alert-callout callout-blue">
            <span class="callout-icon">📌</span>
            <div class="callout-text">
              Điểm Trung bình năm học dùng để xét duy trì học bổng chỉ tính kết quả của <strong>4 học kỳ chính (HK 1A, 1B, 2A, 2B)</strong>, không tính học kỳ hè.
            </div>
          </div>

        </div>
      `
    },

    // MỤC 9: ĐĂNG KÝ HỌC PHỤ ĐẠO - HOÀN TOÀN MIỄN PHÍ
    {
      id: "dang-ky-hoc-phu-dao",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>`,
      title: "IX. Đăng ký Học Phụ đạo - Hoàn toàn Miễn phí",
      bgColor: "pastel-blue",
      accentColor: "#0284c7",
      summary: "Hạn chót đăng ký trước 10/10/2026 (tuần 5 HK 1A); củng cố kiến thức môn khó và ôn thi hoàn toàn miễn phí.",
      content: `
        <div class="topic-detail">
          
          <div class="info-stat-strip">
            <div class="stat-pill-box">
              <div class="stat-value">100% MIỄN PHÍ</div>
              <div class="stat-label">Hỗ trợ toàn diện cho sinh viên</div>
            </div>
            <div class="stat-pill-box">
              <div class="stat-value">TRƯỚC 10/10/2026</div>
              <div class="stat-label">Hạn đăng ký (Hết tuần 5 HK 1A)</div>
            </div>
          </div>

          <div class="info-bento-grid">
            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">🎯</span><h4 class="bento-title">Mục đích Lớp Phụ đạo</h4></div>
              <ul class="bento-list">
                <li>Giúp sinh viên nắm vững kiến thức chuyên môn các môn học khó.</li>
                <li>Hỗ trợ sinh viên đạt kết quả cao hơn trong học tập.</li>
                <li>Bổ trợ và tổng hợp kiến thức trọng tâm trước các kỳ thi kết thúc học phần.</li>
              </ul>
            </div>

            <div class="info-bento-card bento-blue">
              <div class="bento-header"><span class="bento-icon">📅</span><h4 class="bento-title">Thời gian Tổ chức</h4></div>
              <p class="bento-desc">Các lớp phụ đạo dự kiến được tổ chức vào <strong>các tuần học cuối</strong> trước khi kỳ thi diễn ra.</p>
            </div>
          </div>

        </div>
      `
    },

    // MỤC 10: ĐÁNH GIÁ KẾT QUẢ HỌC TẬP
    {
      id: "danh-gia-ket-qua-hoc-tap",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>`,
      title: "X. Đánh giá Kết quả Học tập",
      bgColor: "pastel-purple",
      accentColor: "#7c3aed",
      summary: "Tiêu chí đánh giá số tín chỉ không đạt, tín chỉ tích lũy, ĐTB học kỳ, ĐTB năm học và ĐTB tích lũy toàn khóa.",
      content: `
        <div class="topic-detail">
          
          <div class="info-bento-grid">
            <div class="info-bento-card bento-blue">
              <div class="bento-header"><span class="bento-icon">📊</span><h4 class="bento-title">ĐTB Học kỳ</h4></div>
              <p class="bento-desc">Dùng để xếp loại học lực sinh viên theo học kỳ và xử lý kết quả học tập (cảnh báo học vụ, buộc thôi học).</p>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">🏆</span><h4 class="bento-title">ĐTB Năm học</h4></div>
              <p class="bento-desc">Chỉ tính 4 học kỳ chính, dùng để xét duy trì học bổng tuyển sinh và cấp học bổng tài năng.</p>
            </div>

            <div class="info-bento-card bento-purple">
              <div class="bento-header"><span class="bento-icon">🎓</span><h4 class="bento-title">ĐTB Tích lũy Toàn khóa</h4></div>
              <p class="bento-desc">Tính theo điểm học phần cao nhất trong các lần học; dùng để xếp hạng bằng tốt nghiệp.</p>
            </div>
          </div>

        </div>
      `
    },

    // MỤC 11: HỌC LẠI VÀ HỌC CẢI THIỆN
    {
      id: "hoc-lai-va-hoc-cai-thien",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg>`,
      title: "XI. Học lại và Học Cải thiện",
      bgColor: "pastel-red",
      accentColor: "#dc2626",
      summary: "Quy định bắt buộc học lại môn F, học cải thiện nâng điểm GPA và lưu ý về việc hạ bậc tốt nghiệp nếu học lại vượt quá 5%.",
      content: `
        <div class="topic-detail">
          
          <div class="info-bento-grid">
            <div class="info-bento-card bento-red">
              <div class="bento-header"><span class="bento-icon">🔁</span><h4 class="bento-title">Học Lại (Môn Điểm F)</h4></div>
              <ul class="bento-list">
                <li><strong>Học phần bắt buộc:</strong> Bắt buộc đăng ký học lại khi học phần được tổ chức giảng dạy.</li>
                <li><strong>Học phần tự chọn:</strong> Có thể học lại chính môn đó hoặc chọn môn khác cùng nhóm để tích lũy đủ tín chỉ.</li>
              </ul>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">📈</span><h4 class="bento-title">Học Cải Thiện</h4></div>
              <ul class="bento-list">
                <li>Được phép đăng ký học lại các môn đã đạt để nâng cao điểm trung bình tích lũy.</li>
                <li><strong>Điểm cao nhất</strong> giữa các lần học sẽ được chọn để tính điểm tích lũy xếp hạng tốt nghiệp.</li>
              </ul>
            </div>
          </div>

          <div class="info-alert-callout callout-amber">
            <span class="callout-icon">⚠️</span>
            <div class="callout-text">
              <strong>Lưu ý giảm hạng tốt nghiệp:</strong> Sinh viên đạt điểm tích lũy toàn khóa loại <strong>Xuất sắc hoặc Giỏi</strong> sẽ bị <strong>giảm đi 1 mức tốt nghiệp</strong> nếu khối lượng tín chỉ phải học lại vượt quá <strong>5% tổng số tín chỉ</strong> toàn khóa.
            </div>
          </div>

        </div>
      `
    },

    // MỤC 12: ĐĂNG KÝ CHƯƠNG TRÌNH HỌC SONG BẰNG / SONG NGÀNH
    {
      id: "hoc-song-bang-song-nganh",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
      title: "XII. Đăng ký Học Song bằng / Song ngành",
      bgColor: "pastel-green",
      accentColor: "#059669",
      summary: "Ưu đãi giảm 50% học phí ngành thứ 2 suốt khóa học, nhận 2 bằng cử nhân chính quy hoặc giấy chứng nhận song ngành.",
      content: `
        <div class="topic-detail">
          
          <div class="info-stat-strip">
            <div class="stat-pill-box">
              <div class="stat-value">GIẢM 50% HỌC PHÍ</div>
              <div class="stat-label">Áp dụng suốt khóa cho ngành thứ 2</div>
            </div>
            <div class="stat-pill-box">
              <div class="stat-value">2 BẰNG TỐT NGHIỆP</div>
              <div class="stat-label">Nhận 2 bằng cử nhân chính quy</div>
            </div>
          </div>

          <div class="info-bento-grid">
            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">🎓</span><h4 class="bento-title">Chương trình Song Bằng</h4></div>
              <p class="bento-desc">Nhận 2 Bằng tốt nghiệp đại học chính quy cho 2 ngành tương ứng. Sinh viên chỉ cần học đạt 1 lần tại ngành thứ nhất đối với các học phần giống nhau và học phần Thực tập tốt nghiệp.</p>
            </div>

            <div class="info-bento-card bento-blue">
              <div class="bento-header"><span class="bento-icon">📜</span><h4 class="bento-title">Chương trình Song Ngành</h4></div>
              <p class="bento-desc">Nhận 1 Bằng tốt nghiệp chính quy cho ngành thứ nhất và Giấy chứng nhận hoàn thành chương trình đào tạo song ngành khi tích lũy đủ các môn theo quy định.</p>
            </div>
          </div>

          <div class="info-alert-callout callout-blue">
            <span class="callout-icon">📋</span>
            <div class="callout-text">
              <strong>Điều kiện đăng ký:</strong> Đăng ký sớm nhất sau khi kết thúc HK1 năm thứ nhất • Điểm GPA tích lũy đạt từ <strong>2.00 trở lên</strong> • Liên hệ Trung tâm Hỗ trợ học vụ (Tầng 2) để được hướng dẫn hồ sơ.
            </div>
          </div>

        </div>
      `
    },

    // MỤC 13: GHI NHẬN PHẢN HỒI, GÓP Ý TỪ SINH VIÊN
    {
      id: "ghi-nhan-phan-hoi-y-kien",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
      title: "XIII. Ghi nhận Phản hồi, Góp ý từ Sinh viên",
      bgColor: "pastel-green",
      accentColor: "#059669",
      summary: "Các kênh lấy ý kiến phản hồi về cơ sở vật chất, chương trình đào tạo, thắc mắc học vụ nhằm nâng cao chất lượng phục vụ.",
      content: `
        <div class="topic-detail">
          
          <div class="info-bento-grid">
            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">📝</span><h4 class="bento-title">Nội dung Lấy Ý kiến Phản hồi</h4></div>
              <ul class="bento-list">
                <li>Cơ sở vật chất, phòng học, trang thiết bị phục vụ học tập</li>
                <li>Chương trình đào tạo, nội dung môn học, phương pháp giảng dạy</li>
                <li>Các thắc mắc, đề xuất về quy chế học tập, học vụ và điểm số</li>
                <li>Tình hình học tập và tâm tư nguyện vọng của sinh viên</li>
              </ul>
            </div>

            <div class="info-bento-card bento-blue">
              <div class="bento-header"><span class="bento-icon">🤝</span><h4 class="bento-title">Kênh Góp ý & Phản hồi</h4></div>
              <ul class="bento-list">
                <li>Khảo sát sinh viên trực tuyến tại <code>tththv.io.vn/khaosat/</code></li>
                <li>Gửi email trực tiếp đến <code>hotrohocvu@uef.edu.vn</code></li>
                <li>Nhắn tin qua Zalo Hotline <code>0908 560 999</code> hoặc trao đổi trực tiếp với GVCN</li>
              </ul>
            </div>
          </div>

          <div class="info-alert-callout callout-green">
            <span class="callout-icon">💬</span>
            <div class="callout-text">
              Mọi ý kiến đóng góp của Sinh viên đều được Trung tâm Hỗ trợ học vụ tiếp nhận, xử lý và phản hồi nhanh chóng nhằm không ngừng cải thiện chất lượng phục vụ và môi trường học tập tại UEF!
            </div>
          </div>

        </div>
      `
    }
  ]
};
