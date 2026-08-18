/**
  * DỮ LIỆU CHÍNH THỨC NỘI DUNG SINH HOẠT GIÁO VIÊN CHỦ NHIỆM
  * Căn cứ chuẩn xác 100% theo tài liệu: Thông tin học vụ.docx (HK 26.1A/ Năm học 2026-2027)
  * Đường dẫn gốc: D:\GIA KHIEM\CONG VIEC SV\7. SHCN\HK 26.1A\Nội dung SH GVCN_HK26.1A\Thông tin học vụ.docx
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
    // -------------------------------------------------------------
    // MỤC I: TRUNG TÂM HỖ TRỢ HỌC VỤ
    // -------------------------------------------------------------
    {
      id: "trung-tam-ho-tro-hoc-vu",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
      title: "I. Trung tâm Hỗ trợ Học vụ",
      bgColor: "pastel-blue",
      accentColor: "#0284c7",
      summary: "5 nhiệm vụ chính của Trung tâm Hỗ trợ học vụ, thời gian làm việc và các kênh liên hệ trực tiếp & trực tuyến.",
      content: `
        <div class="topic-detail">
          
          <div class="info-bento-grid">
            <div class="info-bento-card bento-blue">
              <div class="bento-header">
                <span class="bento-icon">💬</span>
                <h4 class="bento-title">1. Tiếp nhận, Tư vấn & Giải đáp</h4>
              </div>
              <p class="bento-desc">Tiếp nhận, tư vấn và giải đáp cho sinh viên/phụ huynh về:</p>
              <ul class="bento-list">
                <li>Các quy định, quy chế đào tạo;</li>
                <li>Các thông báo liên quan đến vấn đề học tập;</li>
                <li>Kế hoạch giảng dạy - học tập của học kỳ/năm học;</li>
                <li>Thời khóa biểu;</li>
                <li>Kết quả học tập;</li>
                <li>Các vấn đề học vụ khác.</li>
              </ul>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header">
                <span class="bento-icon">📝</span>
                <h4 class="bento-title">2. Giải quyết Thủ tục Học vụ</h4>
              </div>
              <p class="bento-desc">Giải quyết các thủ tục học vụ cho sinh viên:</p>
              <ul class="bento-list">
                <li>Bảo lưu kết quả học tập;</li>
                <li>Nhập học lại;</li>
                <li>Chuyển trường;</li>
                <li>Chuyển ngành học;</li>
                <li>Đăng ký môn học;</li>
                <li>Các thủ tục học vụ khác.</li>
              </ul>
            </div>

            <div class="info-bento-card bento-red">
              <div class="bento-header">
                <span class="bento-icon">❤️</span>
                <h4 class="bento-title">3. Chăm sóc & Hỗ trợ Học vụ</h4>
              </div>
              <p class="bento-desc">Chăm sóc, hỗ trợ học vụ đối với sinh viên có kết quả học tập chưa tốt, tư vấn và đề xuất các phương án giúp sinh viên cải thiện kết quả học tập.</p>
            </div>

            <div class="info-bento-card bento-purple">
              <div class="bento-header">
                <span class="bento-icon">🤝</span>
                <h4 class="bento-title">4. Phối hợp với Khoa</h4>
              </div>
              <p class="bento-desc">Phối hợp với Khoa để tư vấn chuyên ngành, chương trình và lộ trình học cho sinh viên/phụ huynh, qua đó giúp sinh viên xây dựng: <strong>Kế hoạch học tập hợp lý</strong> và <strong>Phương pháp học hiệu quả</strong>.</p>
            </div>

            <div class="info-bento-card bento-amber">
              <div class="bento-header">
                <span class="bento-icon">📢</span>
                <h4 class="bento-title">5. Thông báo & Cung cấp Thông tin</h4>
              </div>
              <p class="bento-desc">Thông báo, cung cấp thông tin đến sinh viên/phụ huynh về: Kế hoạch giảng dạy - học tập của học kỳ/năm học; Các lưu ý về học vụ; Kết quả học tập của sinh viên; Các thông tin liên quan khác.</p>
            </div>
          </div>

          <div class="info-alert-callout callout-blue">
            <span class="callout-icon">📍</span>
            <div class="callout-text">
              <strong>Địa điểm làm việc trực tiếp:</strong> Tầng 2, trụ sở 141 - 145 Điện Biên Phủ, Phường Gia Định, TP. Hồ Chí Minh.<br>
              <strong>Thời gian làm việc:</strong> Từ Thứ Hai đến Thứ Sáu và sáng Thứ Bảy (Buổi sáng: 07:30 - 11:30 | Buổi chiều: 13:30 - 16:30).
            </div>
          </div>

          <div class="info-alert-callout callout-green">
            <span class="callout-icon">📞</span>
            <div class="callout-text">
              <strong>Liên hệ trực tuyến:</strong><br>
              • <strong>Gmail:</strong> <code>hotrohocvu@uef.edu.vn</code> • <strong>Website:</strong> <code>uef.edu.vn/tththv</code><br>
              • <strong>Zalopage:</strong> UEF Trung tâm Hỗ trợ học vụ (<code>zalo.me/2106368086678348926</code>)<br>
              • <strong>Fanpage:</strong> UEF Trung tâm Hỗ trợ học vụ (<code>facebook.com/TrungtamHTHV</code>)<br>
              • <strong>Chat Zalo:</strong> <code>0908 560 999</code> • <strong>Hotline:</strong> <code>028 2236 1111</code> hoặc <code>028 2235 1111</code><br>
              • <strong>Tổng đài:</strong> <code>028 2236 3333</code> hoặc <code>070 397 7799</code> (Số nội bộ: <code>2050, 2051, 2052, 2053, 2054, 2055, 2056, 2058, 2059, 2062</code>).
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------
    // MỤC II: MỘT SỐ THÔNG TIN LƯU Ý QUAN TRỌNG
    // -------------------------------------------------------------
    {
      id: "thong-tin-luu-y-quan-trong",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 1 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
      title: "II. Một số Thông tin Lưu ý Quan trọng",
      bgColor: "pastel-red",
      accentColor: "#dc2626",
      summary: "Quy định bắt buộc đeo Thẻ Sinh viên khi dự thi & liên hệ học vụ; thường xuyên kiểm tra Email UEF và tin nhắn.",
      content: `
        <div class="topic-detail">
          
          <div class="info-bento-grid">
            <div class="info-bento-card bento-red">
              <div class="bento-header">
                <span class="bento-icon">🪪</span>
                <h4 class="bento-title">1. Đeo Thẻ Sinh viên Khi Đến Trường</h4>
              </div>
              <ul class="bento-list">
                <li>Sinh viên tham gia thi <strong>phải xuất trình Thẻ Sinh viên</strong>.</li>
                <li><strong>Hội đồng thi sẽ không giải quyết</strong> trường hợp sinh viên không có Thẻ Sinh viên khi tham gia thi.</li>
                <li>Khi sinh viên liên hệ với các Phòng/Viện/Trung tâm của Nhà trường để được hỗ trợ, tư vấn hoặc xử lý các vấn đề học vụ, sinh viên cần xuất trình Thẻ Sinh viên để các đơn vị chức năng xác nhận thông tin.</li>
                <li>Trường hợp quên hoặc mất thẻ, sinh viên liên hệ <strong>Phòng Công tác sinh viên - tầng 6, trụ sở 141 Điện Biên Phủ</strong> để thực hiện cấp Thẻ Sinh viên.</li>
              </ul>
            </div>

            <div class="info-bento-card bento-blue">
              <div class="bento-header">
                <span class="bento-icon">📧</span>
                <h4 class="bento-title">2. Thường Xuyên Kiểm tra Email, Tin Nhắn Từ Nhà Trường</h4>
              </div>
              <ul class="bento-list">
                <li>Sinh viên cần đăng nhập và sử dụng <strong>Email UEF</strong> (dạng <code>MSSV@uef.edu.vn</code>), thường xuyên kiểm tra email và tin nhắn để tiếp nhận các thông tin, thông báo quan trọng về học tập từ: Trung tâm Hỗ trợ học vụ; Khoa; Các Phòng/Ban chức năng của Nhà trường.</li>
                <li>Trường hợp cần hỗ trợ về tài khoản Email UEF, sinh viên liên hệ <strong>Phòng Công nghệ thông tin và Chuyển đổi số</strong>:
                  <br>📍 Trực tiếp: Tầng 4, Trụ sở 141-145 Điện Biên Phủ, Phường Gia Định, TP. Hồ Chí Minh
                  <br>✉️ Email: <code>it@uef.edu.vn</code>
                  <br>☎️ Điện thoại: <code>028 2236 3333 - ext 2160</code>.
                </li>
              </ul>
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------
    // MỤC III: KẾ HOẠCH HỌC TẬP
    // -------------------------------------------------------------
    {
      id: "ke-hoach-hoc-tap",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
      title: "III. Kế hoạch Học tập",
      bgColor: "pastel-amber",
      accentColor: "#d97706",
      summary: "Kế hoạch năm học 2026-2027 (HK 1A, 1B, 2A, 2B, Hè) và Kế hoạch tốt nghiệp, thực tập tốt nghiệp Khóa 2023.",
      content: `
        <div class="topic-detail">
          
          <h4 style="font-size: 15px; font-weight: 800; color: var(--uef-blue-dark); margin-bottom: 10px;">1. Kế hoạch Năm học 2026-2027</h4>

          <div class="info-table-wrap">
            <table class="info-table">
              <thead>
                <tr>
                  <th>Học kỳ / Giai đoạn</th>
                  <th>Đối tượng</th>
                  <th>Thời gian Học</th>
                  <th>Thời gian Thi / Hoạt động</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowspan="3"><strong>Học kỳ 1A</strong><br><small>(07/09 – 14/11/2026)</small></td>
                  <td>Khóa 2025 và Khóa 2026</td>
                  <td>07/09 – 07/11/2026</td>
                  <td>09/11 – 14/11/2026</td>
                </tr>
                <tr>
                  <td>Khóa 2023 (nhóm 2) và Khóa 2024</td>
                  <td>07/09 – 31/10/2026</td>
                  <td>02/11 – 14/11/2026</td>
                </tr>
                <tr style="background: #f0fdf4;">
                  <td><strong>Khóa 2023 (nhóm 1)</strong></td>
                  <td>14/09 – 17/10/2026<br><small>(SHCK: 07/09-12/09/2026)</small></td>
                  <td>Thi: 19/10 – 24/10/2026<br><strong>TTTN (12 tuần): 26/10/2026 – 16/01/2027</strong><br>Nộp BC thực tập: 18/01 – 23/01/2027</td>
                </tr>
                <tr>
                  <td rowspan="2"><strong>Học kỳ 1B</strong><br><small>(16/11/2026 – 23/01/2027)</small></td>
                  <td>Khóa 2025 và Khóa 2026</td>
                  <td>16/11/2026 – 16/01/2027</td>
                  <td>18/01 – 23/01/2027</td>
                </tr>
                <tr>
                  <td>Khóa 2023 (nhóm 2) và Khóa 2024</td>
                  <td>16/11/2026 – 09/01/2027</td>
                  <td>11/01 – 23/01/2027</td>
                </tr>
                <tr style="background: #fee2e2;">
                  <td colspan="4"><strong>Nghỉ Tết Nguyên đán Đinh Mùi:</strong> 24/01 – 21/02/2027</td>
                </tr>
                <tr>
                  <td rowspan="3"><strong>Học kỳ 2A</strong><br><small>(22/02 – 01/05/2027)</small></td>
                  <td>Khóa 2026</td>
                  <td>22/02 – 24/04/2027</td>
                  <td>26/04 – 01/05/2027</td>
                </tr>
                <tr>
                  <td>Khóa 2023 (nhóm 1), Khóa 2024 và Khóa 2025</td>
                  <td>22/02 – 17/04/2027</td>
                  <td>19/04 – 01/05/2027</td>
                </tr>
                <tr style="background: #f0fdf4;">
                  <td><strong>Khóa 2023 (nhóm 2)</strong></td>
                  <td>01/03 – 03/04/2027<br><small>(SHCK: 22/02-27/02/2027)</small></td>
                  <td>Thi: 05/04 – 10/04/2027<br><strong>TTTN (12 tuần): 12/04 – 03/07/2027</strong><br>Nộp BC thực tập: 05/07 – 10/07/2027</td>
                </tr>
                <tr>
                  <td rowspan="2"><strong>Học kỳ 2B</strong><br><small>(10/05 – 17/07/2027)</small></td>
                  <td>Khóa 2026</td>
                  <td>10/05 – 20/07/2027</td>
                  <td>12/07 – 17/07/2027</td>
                </tr>
                <tr>
                  <td>Khóa 2023 (nhóm 1), Khóa 2024 và Khóa 2025</td>
                  <td>10/05 – 03/07/2027</td>
                  <td>05/07 – 17/07/2027</td>
                </tr>
                <tr>
                  <td><strong>Học kỳ Hè</strong><br><small>(19/07 – 28/08/2027)</small></td>
                  <td>Sinh viên học tập theo nhu cầu</td>
                  <td>19/07 – 21/08/2027</td>
                  <td>23/08 – 29/08/2027</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 style="font-size: 15px; font-weight: 800; color: var(--uef-blue-dark); margin: 20px 0 10px 0;">2. Kế hoạch Tốt nghiệp Năm học 2026-2027</h4>

          <!-- 2.1 Thực tập tốt nghiệp đợt tháng 10/2026 -->
          <div class="info-alert-callout callout-blue">
            <span class="callout-icon">📌</span>
            <div class="callout-text">
              <strong>2.1. THỰC TẬP TỐT NGHIỆP ĐỢT THÁNG 10/2026 (Khóa 2023 - Nhóm 1)</strong><br>
              Gồm 10 ngành: <em>1. Kế toán (Khoa TC-KT), 2. Kiểm toán (Khoa TC-KT), 3. Tài chính - Ngân hàng (Khoa TC-KT), 4. Tài chính quốc tế (Khoa TC-KT), 5. Công nghệ tài chính (Khoa TC-KT), 6. Kinh doanh thương mại (Khoa QTKD), 7. Marketing (Khoa Marketing), 8. Digital Marketing (Khoa Marketing), 9. Quản trị sự kiện (Khoa Marketing), 10. Kinh doanh quốc tế (Khoa Kinh tế).</em>
            </div>
          </div>

          <div class="info-table-wrap">
            <table class="info-table">
              <thead><tr><th>Nội dung (Nhóm 1 - TTTN Tháng 10/2026)</th><th>Thời gian</th></tr></thead>
              <tbody>
                <tr><td>Tổ chức Đăng ký (trực tuyến) học phần TTTN, Chuyên đề/Khóa luận tốt nghiệp</td><td>23/06 - 04/07/2026</td></tr>
                <tr><td>Sinh viên nộp học phí (dự kiến)</td><td>03 - 13/08/2026</td></tr>
                <tr><td>Chương trình Sinh hoạt cuối khóa & Công bố danh sách đơn vị tham gia Mock-Interview</td><td>Tháng 07 + 08/2026 | 01/09/2026 (dự kiến)</td></tr>
                <tr><td>Sinh hoạt cuối khóa, chương trình từ Giảng đường đến khởi nghiệp</td><td>08 - 12/09/2026</td></tr>
                <tr><td>Công bố danh sách phân công Giảng viên hướng dẫn</td><td>13/09/2026</td></tr>
                <tr><td>Công bố danh sách các đơn vị, doanh nghiệp,... tiếp nhận sinh viên thực tập và vị trí thực tập</td><td>14/09/2026</td></tr>
                <tr><td>Sinh viên nhận hồ sơ thực tập</td><td>21 - 23/10/2026</td></tr>
                <tr style="background:#f0fdf4;"><td><strong>THỰC TẬP TẠI DOANH NGHIỆP 12 TUẦN</strong></td><td><strong>26/10/2026 - 16/01/2027</strong></td></tr>
                <tr><td>SV nộp báo cáo Thực tập tốt nghiệp, Chuyên đề / Khóa luận tốt nghiệp</td><td>20 - 23/01/2027</td></tr>
                <tr><td>Hội đồng đánh giá Khóa luận tốt nghiệp & Công bố kết quả cho sinh viên</td><td>26 - 30/01/2027</td></tr>
              </tbody>
            </table>
          </div>

          <!-- 2.2 Thực tập tốt nghiệp đợt tháng 04/2027 -->
          <div class="info-alert-callout callout-purple">
            <span class="callout-icon">📌</span>
            <div class="callout-text">
              <strong>2.2. THỰC TẬP TỐT NGHIỆP ĐỢT THÁNG 04/2027 (Khóa 2023 - Nhóm 2)</strong><br>
              Gồm tất cả các ngành đào tạo còn lại khác Nhóm 1.
            </div>
          </div>

          <div class="info-table-wrap">
            <table class="info-table">
              <thead><tr><th>Nội dung (Nhóm 2 - TTTN Tháng 04/2027)</th><th>Thời gian</th></tr></thead>
              <tbody>
                <tr><td>Tổ chức Đăng ký (trực tuyến) học phần TTTN, Chuyên đề/Khóa luận tốt nghiệp</td><td>08 - 19/12/2026</td></tr>
                <tr><td>Sinh viên nộp học phí (dự kiến)</td><td>12 - 22/01/2027</td></tr>
                <tr><td>Chương trình Sinh hoạt cuối khóa & Công bố danh sách đơn vị tham gia Mock-Interview</td><td>Tháng 12/2026 | 09/02/2027 (dự kiến)</td></tr>
                <tr><td>Sinh hoạt cuối khóa, chương trình từ Giảng đường đến khởi nghiệp</td><td>22 - 27/02/2027</td></tr>
                <tr><td>Công bố danh sách phân công Giảng viên hướng dẫn</td><td>27/02/2027</td></tr>
                <tr><td>Công bố danh sách các đơn vị, doanh nghiệp tiếp nhận SV thực tập</td><td>01/03/2027</td></tr>
                <tr><td>Sinh viên nhận hồ sơ thực tập</td><td>05 - 07/04/2027</td></tr>
                <tr style="background:#f0fdf4;"><td><strong>THỰC TẬP TẠI DOANH NGHIỆP 12 TUẦN</strong></td><td><strong>12/04/2027 - 03/07/2027</strong></td></tr>
                <tr><td>SV nộp báo cáo Thực tập tốt nghiệp, Chuyên đề / Khóa luận tốt nghiệp</td><td>07 - 10/07/2027</td></tr>
                <tr><td>Hội đồng đánh giá Khóa luận tốt nghiệp & Công bố kết quả</td><td>14 - 21/07/2027</td></tr>
              </tbody>
            </table>
          </div>

          <!-- 2.3 & 2.4 Tốt nghiệp & Lễ trao bằng 2027 -->
          <div class="grid-2col" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 14px; margin-top: 14px;">
            <div class="info-table-wrap">
              <table class="info-table">
                <thead><tr><th colspan="2">2.3. TỐT NGHIỆP KHÓA 2023</th></tr></thead>
                <tbody>
                  <tr><td>SV bổ sung hồ sơ; xác nhận thông tin cấp bằng</td><td>01 - 30/03/2027</td></tr>
                  <tr><td><strong>SV NỘP CÁC CHỨNG CHỈ ĐIỀU KIỆN (Tiếng Anh, Tin học)</strong></td><td><strong>07 - 30/06/2027</strong></td></tr>
                  <tr style="background:#fef3c7;"><td><strong>HỌP HỘI ĐỒNG XÉT TỐT NGHIỆP THÁNG 07/2027</strong></td><td><strong>30/07/2027 (Thứ 7)</strong></td></tr>
                </tbody>
              </table>
            </div>

            <div class="info-table-wrap">
              <table class="info-table">
                <thead><tr><th colspan="2">2.4. LỄ TRAO BẰNG TỐT NGHIỆP NĂM 2027</th></tr></thead>
                <tbody>
                  <tr><td>SV xét tốt nghiệp các đợt từ 10/2026 đến 03/2027</td><td><strong>Tháng 04/2027</strong></td></tr>
                  <tr style="background:#dcfce7;"><td>SV xét tốt nghiệp đợt 30/07/2027</td><td><strong>Tháng 08/2027</strong><br><small>(Dự kiến 25 - 29/08/2027)</small></td></tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------
    // MỤC IV: CHECKLIST CÁC ĐIỀU KIỆN XÉT TỐT NGHIỆP
    // -------------------------------------------------------------
    {
      id: "checklist-dieu-kien-tot-nghiep",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>`,
      title: "IV. Checklist Các Điều kiện Xét Tốt nghiệp",
      bgColor: "pastel-green",
      accentColor: "#059669",
      summary: "Để được xét tốt nghiệp, sinh viên cần đảm bảo đầy đủ 7 điều kiện theo quy định của Trường.",
      content: `
        <div class="topic-detail">
          
          <div class="info-bento-grid">
            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">1️⃣</span><h4 class="bento-title">Kỷ luật & Tư cách</h4></div>
              <p class="bento-desc">Tại thời điểm xét tốt nghiệp, không bị truy cứu trách nhiệm hình sự hoặc không đang trong thời gian bị kỷ luật ở mức đình chỉ học tập.</p>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">2️⃣</span><h4 class="bento-title">Số Tín chỉ & Học phần</h4></div>
              <p class="bento-desc">Tích lũy đủ học phần, số tín chỉ và hoàn thành các nội dung bắt buộc khác theo yêu cầu của chương trình đào tạo.</p>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">3️⃣</span><h4 class="bento-title">Điểm GPA Tích lũy Toàn khóa</h4></div>
              <p class="bento-desc">Điểm trung bình tích lũy toàn khóa đạt từ <strong>2.00 / 4.00 trở lên</strong>.</p>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">4️⃣</span><h4 class="bento-title">Chuyên đề / Khóa luận</h4></div>
              <p class="bento-desc">Riêng điểm của học phần Chuyên đề / Khóa luận tốt nghiệp phải đạt từ <strong>điểm C trở lên</strong>.</p>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">5️⃣</span><h4 class="bento-title">GDQP & Giáo dục Thể chất</h4></div>
              <p class="bento-desc">Có Chứng chỉ Giáo dục Quốc phòng và Hoàn thành đủ số học phần Giáo dục thể chất theo quy định.</p>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">6️⃣</span><h4 class="bento-title">Chuẩn Đầu ra Ngoại ngữ & Tin học</h4></div>
              <p class="bento-desc">Có các chứng chỉ khác đạt chuẩn đầu ra theo quy định của Trường.</p>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">7️⃣</span><h4 class="bento-title">Học phí & Nghĩa vụ Khác</h4></div>
              <p class="bento-desc">Thanh toán đầy đủ học phí, lệ phí và hoàn thành các nghĩa vụ khác theo quy định của Trường.</p>
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------
    // MỤC V: ĐIỀU KIỆN CHỨNG CHỈ TIẾNG ANH, TIN HỌC CHUẨN ĐẦU RA
    // -------------------------------------------------------------
    {
      id: "chuan-dau-ra-ngoai-ngu-tin-hoc",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
      title: "V. Điều kiện Chứng chỉ Tiếng Anh, Tin học Chuẩn Đầu ra",
      bgColor: "pastel-blue",
      accentColor: "#0284c7",
      summary: "Bảng quy định chi tiết Chuẩn đầu ra Tiếng Anh và Tin học Quốc tế (MOS, IC3).",
      content: `
        <div class="topic-detail">
          
          <!-- Infographic Visual Placeholder Box -->
          <div class="infographic-placeholder-card">
            <div class="placeholder-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 42px; height: 42px; color: var(--vivid-blue);">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <h4 class="placeholder-title">Khu vực Đính kèm Hình ảnh Infographic Chuẩn Đầu ra</h4>
            <p class="placeholder-desc">Sẵn sàng hiển thị hình ảnh infographic bảng tổng hợp Chuẩn đầu ra Tiếng Anh & Tin học chuẩn quốc tế theo quy định.</p>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------
    // MỤC VI: TIẾN ĐỘ ĐÀO TẠO
    // -------------------------------------------------------------
    {
      id: "tien-do-dao-tao",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
      title: "VI. Tiến độ Đào tạo",
      bgColor: "pastel-purple",
      accentColor: "#7c3aed",
      summary: "Quy định tham gia học tập đúng tiến độ, khái niệm và ví dụ về học phần chưa đạt theo tiến độ.",
      content: `
        <div class="topic-detail">
          
          <div class="info-bento-grid">
            <div class="info-bento-card bento-purple">
              <div class="bento-header"><span class="bento-icon">🎯</span><h4 class="bento-title">Sinh viên Cần Thực Hiện</h4></div>
              <ul class="bento-list">
                <li>1. Đảm bảo tham gia học tập chính xác theo tiến độ và Chương trình đào tạo.</li>
                <li>2. Đối với các học phần chưa đạt theo tiến độ - bao gồm học phần nhận điểm F hoặc học phần chưa đăng ký theo đúng tiến độ - sinh viên cần: <strong>Theo dõi kế hoạch; Sớm đăng ký; Tham gia học tập; Hoàn thành theo quy định.</strong></li>
                <li>3. Sinh viên có học phần chưa đạt theo tiến độ cần <strong>liên hệ ngay Trung tâm Hỗ trợ học vụ</strong> để được hỗ trợ kịp thời.</li>
              </ul>
            </div>

            <div class="info-bento-card bento-blue">
              <div class="bento-header"><span class="bento-icon">📖</span><h4 class="bento-title">Khái niệm “Học phần Chưa đạt Theo Tiến độ”</h4></div>
              <p class="bento-desc">“Học phần chưa đạt theo tiến độ” là học phần sinh viên chưa hoàn thành theo tiến độ, kế hoạch học tập của khóa học, bao gồm:</p>
              <ul class="bento-list">
                <li>Học phần sinh viên đã đăng ký nhưng <strong>không đạt (điểm F)</strong>; hoặc</li>
                <li>Học phần sinh viên <strong>chưa đăng ký học</strong>.</li>
              </ul>
              <p class="bento-desc" style="margin-top: 8px;">Sau khi năm học/học kỳ kết thúc, nếu học phần sinh viên cần hoàn thành theo sơ đồ kế hoạch học tập của năm học/học kỳ đó chưa được hoàn thành thì được xác định là học phần chưa đạt theo tiến độ.</p>
            </div>
          </div>

          <div class="info-alert-callout callout-amber">
            <span class="callout-icon">💡</span>
            <div class="callout-text">
              <strong>Ví dụ cụ thể:</strong> “Pháp luật đại cương” là học phần sinh viên cần hoàn thành trong Học kỳ 2A của Năm 1. Tuy nhiên, sau khi kết thúc Năm 1, sinh viên chưa đăng ký và chưa tham gia học học phần này. Do đó, Pháp luật đại cương được xác định là học phần sinh viên chưa đạt theo tiến độ. Đối với các học phần chưa đạt theo tiến độ, sinh viên cần nhanh chóng đăng ký và hoàn thành nhằm đảm bảo kế hoạch học tập của mình.
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------
    // MỤC VII: XẾP LOẠI HỌC LỰC
    // -------------------------------------------------------------
    {
      id: "xep-loai-hoc-luc",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 20V10M12 20V4M6 20v-6"></path></svg>`,
      title: "VII. Xếp loại Học lực",
      bgColor: "pastel-green",
      accentColor: "#059669",
      summary: "Bảng xếp loại học lực theo thang điểm 4, định nghĩa ĐTB học kỳ, ĐTB năm học, ĐTB tích lũy và điều kiện GPA ≥ 2.00.",
      content: `
        <div class="topic-detail">
          
          <p style="margin-bottom: 10px; font-size: 13px; color: var(--text-sub);">Sinh viên được xếp loại học lực theo Điểm Trung bình học kỳ, Điểm Trung bình năm học hoặc Điểm Trung bình tích lũy (theo thang điểm hệ 4) như sau:</p>

          <div class="info-table-wrap">
            <table class="info-table">
              <thead>
                <tr>
                  <th>Xếp loại</th>
                  <th>Điểm Trung bình (Hệ 4)</th>
                  <th>Mô tả</th>
                </tr>
              </thead>
              <tbody>
                <tr style="background:#f0fdf4;">
                  <td><strong style="color:#15803d;">XUẤT SẮC</strong></td>
                  <td><strong>Điểm trung bình từ 3.60 đến 4.00</strong></td>
                  <td>Học lực xuất sắc</td>
                </tr>
                <tr style="background:#f0fdf4;">
                  <td><strong style="color:#15803d;">GIỎI</strong></td>
                  <td><strong>Điểm trung bình từ 3.20 đến 3.59</strong></td>
                  <td>Học lực giỏi</td>
                </tr>
                <tr>
                  <td><strong style="color:#0284c7;">KHÁ</strong></td>
                  <td><strong>Điểm trung bình từ 2.50 đến 3.19</strong></td>
                  <td>Học lực khá</td>
                </tr>
                <tr>
                  <td><strong style="color:#d97706;">TRUNG BÌNH</strong></td>
                  <td><strong>Điểm trung bình từ 2.00 đến 2.49</strong></td>
                  <td><strong>Mức sàn tối thiểu để đủ điều kiện xét Tốt nghiệp</strong></td>
                </tr>
                <tr style="background:#fff1f2;">
                  <td><strong style="color:#dc2626;">YẾU</strong></td>
                  <td><strong>Điểm trung bình từ 1.00 đến 1.99</strong></td>
                  <td>Cần cải thiện kết quả học tập</td>
                </tr>
                <tr style="background:#fee2e2;">
                  <td><strong style="color:#991b1b;">KÉM</strong></td>
                  <td><strong>Điểm trung bình dưới 1.00</strong></td>
                  <td>Nguy cơ cảnh báo học vụ</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="info-bento-grid">
            <div class="info-bento-card bento-blue">
              <div class="bento-header"><span class="bento-icon">📝</span><h4 class="bento-title">Ghi chú Định nghĩa Điểm</h4></div>
              <ul class="bento-list">
                <li><strong>Điểm Trung bình Học kỳ:</strong> Điểm Trung bình của những học phần sinh viên đã học trong một học kỳ.</li>
                <li><strong>Điểm Trung bình Năm học</strong> (áp dụng tính điểm các học kỳ chính gồm: HK 1A, 1B, 2A, 2B và không tính HK hè): Điểm Trung bình của những học phần sinh viên đã học trong một năm học.</li>
                <li><strong>Điểm Trung bình Tích lũy:</strong> Điểm Trung bình của những học phần sinh viên đã học tính từ đầu khóa học.</li>
              </ul>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">🎯</span><h4 class="bento-title">Sinh viên Cần Đảm bảo</h4></div>
              <p class="bento-desc"><strong>Điểm Trung bình học kỳ, Điểm Trung bình năm học và Điểm Trung bình tích lũy ≥ 2.00 (theo thang điểm hệ 4)</strong></p>
              <ul class="bento-list">
                <li><strong>1. NỖ LỰC HỌC TẬP:</strong> Bạn cần nỗ lực, chuyên cần học tập để cải thiện kết quả ngay từ HK 1A/NH 2026-2027 (Điểm TBHK / Điểm TBTL ≥ 2.00).</li>
                <li><strong>2. ĐIỀU KIỆN XÉT TỐT NGHIỆP:</strong> Một trong những điều kiện để Xét tốt nghiệp => SV phải đạt Điểm Trung bình tích lũy ≥ 2.00 (điểm hệ 4).</li>
                <li><strong>3. LIÊN HỆ HỖ TRỢ NGAY:</strong> Trường hợp cần tư vấn và hỗ trợ về việc Học cải thiện nhằm đạt kết quả học tập theo Quy định, bạn liên hệ ngay Trung tâm Hỗ trợ học vụ để được tư vấn và hỗ trợ ngay nhé!</li>
              </ul>
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------
    // MỤC VIII: ĐIỀU KIỆN DUY TRÌ HỌC BỔNG TUYỂN SINH
    // -------------------------------------------------------------
    {
      id: "dieu-kien-duy-tri-hoc-bong",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
      title: "VIII. Điều kiện Duy trì Học bổng Tuyển sinh",
      bgColor: "pastel-amber",
      accentColor: "#d97706",
      summary: "Quy định điều kiện Điểm Trung bình năm học và Điểm Rèn luyện để duy trì các suất học bổng tuyển sinh.",
      content: `
        <div class="topic-detail">
          
          <!-- Infographic Visual Placeholder Box -->
          <div class="infographic-placeholder-card">
            <div class="placeholder-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 42px; height: 42px; color: var(--vivid-amber);">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <h4 class="placeholder-title">Khu vực Đính kèm Hình ảnh Infographic Học bổng</h4>
            <p class="placeholder-desc">Sẵn sàng hiển thị hình ảnh infographic bảng quy định điều kiện duy trì học bổng tuyển sinh.</p>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------
    // MỤC IX: ĐĂNG KÝ HỌC PHỤ ĐẠO - HOÀN TOÀN MIỄN PHÍ
    // -------------------------------------------------------------
    {
      id: "dang-ky-hoc-phu-dao",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>`,
      title: "IX. Đăng ký Học Phụ đạo - Hoàn toàn Miễn phí",
      bgColor: "pastel-blue",
      accentColor: "#0284c7",
      summary: "Hạn chót đăng ký trước ngày 10/10/2026 (hết tuần 5 HK 1A); củng cố kiến thức môn khó và ôn thi hoàn toàn miễn phí.",
      content: `
        <div class="topic-detail">
          
          <div class="info-stat-strip">
            <div class="stat-pill-box">
              <div class="stat-value">100% MIỄN PHÍ</div>
              <div class="stat-label">Hỗ trợ tối đa sinh viên</div>
            </div>
            <div class="stat-pill-box">
              <div class="stat-value">TRƯỚC 10/10/2026</div>
              <div class="stat-label">Hạn đăng ký (Hết tuần 5 HK 1A)</div>
            </div>
          </div>

          <div class="info-bento-grid">
            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">🎯</span><h4 class="bento-title">Mục đích Lớp Phụ đạo</h4></div>
              <p class="bento-desc">Nếu sinh viên học chuyên cần nhưng không theo kịp bài trong quá trình học của HK 1A và cần phụ đạo để củng cố kiến thức, sinh viên có thể đăng ký nguyện vọng học phụ đạo. Trung tâm Hỗ trợ học vụ tổ chức lớp học phụ đạo nhằm:</p>
              <ul class="bento-list">
                <li>Giúp sinh viên nắm vững kiến thức chuyên môn;</li>
                <li>Hỗ trợ sinh viên đạt kết quả cao hơn trong học tập;</li>
                <li>Bổ trợ kiến thức trước kỳ thi.</li>
              </ul>
            </div>

            <div class="info-bento-card bento-blue">
              <div class="bento-header"><span class="bento-icon">📅</span><h4 class="bento-title">Thời gian Tổ chức</h4></div>
              <p class="bento-desc">Các lớp phụ đạo dự kiến được tổ chức vào các <strong>tuần học cuối</strong>, trước khi kỳ thi diễn ra và <strong>hoàn toàn miễn phí</strong>.</p>
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------
    // MỤC X: ĐÁNH GIÁ KẾT QUẢ HỌC TẬP
    // -------------------------------------------------------------
    {
      id: "danh-gia-ket-qua-hoc-tap",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>`,
      title: "X. Đánh giá Kết quả Học tập",
      bgColor: "pastel-purple",
      accentColor: "#7c3aed",
      summary: "Tiêu chí đánh giá sau từng học kỳ hoặc từng năm học theo quy chế đào tạo tín chỉ.",
      content: `
        <div class="topic-detail">
          
          <p style="margin-bottom: 12px; font-size: 13px; color: var(--text-sub);">Kết quả học tập được đánh giá sau <strong>từng học kỳ</strong> hoặc sau <strong>từng năm học</strong>, dựa trên kết quả các học phần nằm trong yêu cầu của chương trình đào tạo mà sinh viên đã học và có điểm theo tiêu chí sau đây:</p>

          <div class="info-bento-grid">
            <div class="info-bento-card bento-red">
              <div class="bento-header"><span class="bento-icon">❌</span><h4 class="bento-title">Tổng Tín chỉ Không đạt</h4></div>
              <p class="bento-desc">Tổng số tín chỉ của những học phần mà sinh viên không đạt trong một học kỳ, trong một năm học hoặc nợ đọng từ đầu khóa học.</p>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">✅</span><h4 class="bento-title">Số Tín chỉ Tích lũy</h4></div>
              <p class="bento-desc">Tổng số tín chỉ của những học phần mà sinh viên đã đạt từ đầu khóa học (số tín chỉ tích lũy), tính cả các học phần được miễn học, được công nhận tín chỉ.</p>
            </div>

            <div class="info-bento-card bento-blue">
              <div class="bento-header"><span class="bento-icon">📊</span><h4 class="bento-title">ĐTB Học kỳ</h4></div>
              <p class="bento-desc">Điểm trung bình của những học phần mà sinh viên đã học trong một học kỳ, dùng để xếp loại học lực sinh viên theo học kỳ và xử lý kết quả học tập (cảnh báo học tập, buộc thôi học).</p>
            </div>

            <div class="info-bento-card bento-amber">
              <div class="bento-header"><span class="bento-icon">🏆</span><h4 class="bento-title">ĐTB Năm học</h4></div>
              <p class="bento-desc">Điểm trung bình năm học (chỉ tính học kỳ chính) dùng để xét điều kiện duy trì học bổng tuyển sinh, cấp học bổng tài năng cho sinh viên.</p>
            </div>

            <div class="info-bento-card bento-purple">
              <div class="bento-header"><span class="bento-icon">🎓</span><h4 class="bento-title">ĐTB Tích lũy Toàn khóa</h4></div>
              <p class="bento-desc">Điểm trung bình tích luỹ được tính theo điểm học phần cao nhất trong các lần học của sinh viên. Điểm trung bình tích lũy toàn khóa học dùng để xếp hạng tốt nghiệp chỉ tính đối với các học phần theo chương trình đào tạo.</p>
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------
    // MỤC XI: HƯỚNG DẪN CÁCH TÍNH ĐIỂM
    // -------------------------------------------------------------
    {
      id: "huong-dan-cach-tinh-diem",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
      title: "XI. Hướng dẫn Cách tính Điểm",
      bgColor: "pastel-blue",
      accentColor: "#0284c7",
      summary: "Hướng dẫn cách tính điểm trung bình học kỳ, điểm trung bình tích lũy và quy đổi thang điểm.",
      content: `
        <div class="topic-detail">
          
          <!-- Infographic Visual Placeholder Box -->
          <div class="infographic-placeholder-card">
            <div class="placeholder-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 42px; height: 42px; color: var(--vivid-blue);">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <h4 class="placeholder-title">Khu vực Đính kèm Hình ảnh Infographic Hướng dẫn Tính điểm</h4>
            <p class="placeholder-desc">Sẵn sàng hiển thị hình ảnh infographic công thức và quy trình tính điểm trung bình học vụ.</p>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------
    // MỤC XII: HỌC LẠI VÀ HỌC CẢI THIỆN
    // -------------------------------------------------------------
    {
      id: "hoc-lai-va-hoc-cai-thien",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg>`,
      title: "XII. Học lại và Học Cải thiện",
      bgColor: "pastel-red",
      accentColor: "#dc2626",
      summary: "Quy định bắt buộc học lại môn F, học cải thiện nâng điểm GPA và lưu ý về việc hạ bậc tốt nghiệp nếu học lại vượt quá 5%.",
      content: `
        <div class="topic-detail">
          
          <div class="info-bento-grid">
            <div class="info-bento-card bento-red">
              <div class="bento-header"><span class="bento-icon">🔁</span><h4 class="bento-title">HỌC LẠI</h4></div>
              <ul class="bento-list">
                <li>Đối với học phần bắt buộc hoặc học phần lựa chọn bắt buộc theo ngành, chuyên ngành: Sinh viên có điểm tổng kết học phần không đạt bắt buộc phải đăng ký học lại khi học phần đó được tổ chức giảng dạy.</li>
                <li>Đối với học phần tự chọn: Sinh viên có thể chọn đăng ký học lại chính học phần đó hoặc chọn học các học phần tự chọn khác cùng nhóm để bảo đảm tích lũy đủ số tín chỉ.</li>
              </ul>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">📈</span><h4 class="bento-title">HỌC CẢI THIỆN</h4></div>
              <ul class="bento-list">
                <li>Đối với các học phần bất kỳ đã có kết quả đạt: Sinh viên được phép đăng ký học để cải thiện điểm trung bình tích lũy.</li>
                <li>Điểm cao nhất giữa các lần học sẽ được lấy để tính điểm trung bình tích lũy dùng để xếp hạng tốt nghiệp.</li>
              </ul>
            </div>
          </div>

          <div class="info-alert-callout callout-amber">
            <span class="callout-icon">⚠️</span>
            <div class="callout-text">
              <strong>Lưu ý Giảm hạng Tốt nghiệp & Giới hạn Tín chỉ:</strong><br>
              • Đối với sinh viên có điểm trung bình tích lũy toàn khóa <strong>xuất sắc và giỏi</strong>: Hạng tốt nghiệp sẽ <strong>bị giảm đi một mức</strong> nếu khối lượng của các học phần phải học lại <strong>vượt quá 5%</strong> so với tổng số tín chỉ của toàn bộ chương trình.<br>
              • Khối lượng học tập (tính bằng số tín chỉ) tối đa không vượt quá <strong>3/2 khối lượng trung bình</strong> một học kỳ theo kế hoạch học tập chuẩn. Do đó, khi đăng ký học lại hoặc học cải thiện học phần, Sinh viên cần đảm bảo số tín chỉ tối đa trong học kỳ theo đúng quy định.
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------
    // MỤC XIII: ĐĂNG KÝ CHƯƠNG TRÌNH HỌC SONG BẰNG/SONG NGÀNH
    // -------------------------------------------------------------
    {
      id: "hoc-song-bang-song-nganh",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
      title: "XIII. Đăng ký Chương trình Học Song bằng / Song ngành",
      bgColor: "pastel-green",
      accentColor: "#059669",
      summary: "Ưu đãi giảm 50% học phí suốt khóa cho ngành thứ 2, nhận 2 bằng cử nhân chính quy hoặc giấy chứng nhận song ngành.",
      content: `
        <div class="topic-detail">
          
          <p style="margin-bottom: 12px; font-size: 13px; color: var(--text-sub);">Học cùng lúc hai chương trình đào tạo theo hình thức song bằng hoặc song ngành dành cho sinh viên có đủ điều kiện theo quy định và có nhu cầu đăng ký học thêm một chương trình thứ hai để khi tốt nghiệp được cấp hai văn bằng, hoặc giấy chứng nhận hoàn thành chương trình song ngành.</p>

          <div class="info-stat-strip">
            <div class="stat-pill-box">
              <div class="stat-value">GIẢM 50% HỌC PHÍ</div>
              <div class="stat-label">Áp dụng suốt khóa học cho ngành thứ 2!</div>
            </div>
            <div class="stat-pill-box">
              <div class="stat-value">2 BẰNG TỐT NGHIỆP</div>
              <div class="stat-label">Cấp bằng cử nhân chính quy tương ứng</div>
            </div>
          </div>

          <div class="info-bento-grid">
            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">🎓</span><h4 class="bento-title">Ưu điểm Chương trình SONG BẰNG</h4></div>
              <ul class="bento-list">
                <li>Nhận <strong>2 Bằng tốt nghiệp</strong> cho 2 ngành học tương ứng khi hoàn thành chương trình đào tạo của ngành.</li>
                <li>Sinh viên <strong>chỉ cần học đạt 1 lần</strong> tại ngành học thứ 1 đối với: Các học phần giống nhau giữa 2 ngành & Học phần Thực tập tốt nghiệp.</li>
              </ul>
            </div>

            <div class="info-bento-card bento-blue">
              <div class="bento-header"><span class="bento-icon">📜</span><h4 class="bento-title">Ưu điểm Chương trình SONG NGÀNH</h4></div>
              <ul class="bento-list">
                <li>Sinh viên sẽ học và hoàn thành các học phần theo quy định của chương trình đào tạo song ngành.</li>
                <li>Nhận <strong>1 Bằng tốt nghiệp</strong> cho ngành học thứ 1 và <strong>Giấy chứng nhận</strong> hoàn thành chương trình song ngành (khi hoàn thành các chương trình theo quy định).</li>
              </ul>
            </div>
          </div>

          <div class="info-bento-grid">
            <div class="info-bento-card bento-amber">
              <div class="bento-header"><span class="bento-icon">📋</span><h4 class="bento-title">Điều kiện Học Cùng Lúc 2 Chương Trình</h4></div>
              <ul class="bento-list">
                <li>a) Đăng ký học sớm nhất sau khi đã kết thúc học kỳ thứ nhất năm học đầu tiên;</li>
                <li>b) Điểm trung bình tích lũy xếp loại trung bình trở lên (<strong>≥ 2.00</strong>);</li>
                <li>c) Trong quá trình SV học cùng lúc hai chương trình, nếu điểm trung bình tích lũy của chương trình thứ nhất đạt dưới điểm trung bình hoặc thuộc diện cảnh báo kết quả học tập thì phải dừng học chương trình thứ hai ở học kỳ tiếp theo.</li>
              </ul>
            </div>

            <div class="info-bento-card bento-purple">
              <div class="bento-header"><span class="bento-icon">⚖️</span><h4 class="bento-title">Quy định Khi Học Cùng Lúc 2 Chương Trình</h4></div>
              <ul class="bento-list">
                <li>a) <strong>Thời gian tối đa</strong> được phép học đối với SV học cùng lúc hai chương trình là thời gian tối đa quy định cho <strong>CHƯƠNG TRÌNH THỨ NHẤT</strong>;</li>
                <li>b) Khi học chương trình thứ hai, sinh viên được <strong>CÔNG NHẬN KẾT QUẢ</strong> của những học phần có nội dung và khối lượng kiến thức tương đương có trong chương trình thứ nhất;</li>
                <li>c) SV chỉ được xét tốt nghiệp chương trình thứ hai, hoặc xét cấp giấy chứng nhận hoàn thành chương trình song ngành nếu có đủ điều kiện tốt nghiệp ở chương trình thứ nhất.</li>
              </ul>
            </div>
          </div>

          <div class="info-alert-callout callout-green">
            <span class="callout-icon">🤝</span>
            <div class="callout-text">
              Trong trường hợp có nguyện vọng đăng ký học Song bằng / Song ngành, bạn hãy liên hệ ngay <strong>Trung tâm Hỗ trợ học vụ (Tầng 2)</strong> để được tư vấn và hỗ trợ chi tiết nhé!
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------
    // MỤC XIV: HƯỚNG DẪN SỬ DỤNG CỔNG THÔNG TIN QUẢN LÝ ĐÀO TẠO
    // -------------------------------------------------------------
    {
      id: "huong-dan-cong-thong-tin-dao-tao",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
      title: "XIV. Hướng dẫn Sử dụng Cổng thông tin Quản lý Đào tạo & Dịch vụ Trực tuyến",
      bgColor: "pastel-blue",
      accentColor: "#0284c7",
      summary: "Hướng dẫn thao tác đăng nhập, xem thời khóa biểu, lịch thi và nộp hồ sơ dịch vụ trực tuyến.",
      content: `
        <div class="topic-detail">
          
          <!-- Infographic Visual Placeholder Box -->
          <div class="infographic-placeholder-card">
            <div class="placeholder-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 42px; height: 42px; color: var(--vivid-blue);">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <h4 class="placeholder-title">Khu vực Đính kèm Hình ảnh Infographic Hướng dẫn Cổng Đào tạo</h4>
            <p class="placeholder-desc">Sẵn sàng hiển thị hình ảnh infographic hướng dẫn thao tác trên Cổng thông tin Quản lý đào tạo và Dịch vụ học vụ trực tuyến.</p>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------
    // MỤC XV: CẨM NANG HỖ TRỢ HỌC VỤ
    // -------------------------------------------------------------
    {
      id: "cam-nang-ho-tro-hoc-vu",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
      title: "XV. Cẩm nang Hỗ trợ Học vụ",
      bgColor: "pastel-amber",
      accentColor: "#d97706",
      summary: "Cẩm nang là nguồn thông tin hỗ trợ sinh viên tra cứu các quy định, hướng dẫn và nội dung học vụ cần thiết.",
      content: `
        <div class="topic-detail">
          
          <div class="info-bento-grid">
            <div class="info-bento-card bento-amber">
              <div class="bento-header"><span class="bento-icon">📖</span><h4 class="bento-title">Nội dung Cẩm nang Học vụ</h4></div>
              <p class="bento-desc">Cẩm nang là nguồn thông tin hỗ trợ sinh viên tra cứu các quy định, hướng dẫn và nội dung học vụ cần thiết trong suốt quá trình học tập tại Trường Đại học Kinh tế - Tài chính TP.HCM (UEF).</p>
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------
    // MỤC XVI: MỘT SỐ GIẢI PHÁP HỖ TRỢ SINH VIÊN HỌC TẬP HIỆU QUẢ
    // -------------------------------------------------------------
    {
      id: "giai-phap-ho-tro-hoc-tap-hieu-qua",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`,
      title: "XVI. Một số Giải pháp Hỗ trợ Sinh viên Học tập Hiệu quả",
      bgColor: "pastel-green",
      accentColor: "#059669",
      summary: "Các chương trình tư vấn, đồng hành học vụ, lớp phụ đạo và phương pháp học tập tích cực.",
      content: `
        <div class="topic-detail">
          
          <!-- Infographic Visual Placeholder Box -->
          <div class="infographic-placeholder-card">
            <div class="placeholder-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 42px; height: 42px; color: var(--vivid-green);">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <h4 class="placeholder-title">Khu vực Đính kèm Hình ảnh Infographic Giải pháp Học tập</h4>
            <p class="placeholder-desc">Sẵn sàng hiển thị hình ảnh infographic các giải pháp hỗ trợ sinh viên học tập hiệu quả.</p>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------
    // MỤC XVII: GHI NHẬN PHẢN HỒI, GÓP Ý TỪ SINH VIÊN
    // -------------------------------------------------------------
    {
      id: "ghi-nhan-phan-hoi-gop-y",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
      title: "XVII. Ghi nhận Phản hồi, Góp ý từ Sinh viên",
      bgColor: "pastel-green",
      accentColor: "#059669",
      summary: "Lấy ý kiến phản hồi về cơ sở vật chất, chương trình đào tạo, thắc mắc học vụ để nâng cao chất lượng phục vụ.",
      content: `
        <div class="topic-detail">
          
          <p style="margin-bottom: 12px; font-size: 13px; color: var(--text-sub);">Giáo viên chủ nhiệm thực hiện lấy ý kiến phản hồi, góp ý của sinh viên về:</p>

          <div class="info-bento-grid">
            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">🏢</span><h4 class="bento-title">Cơ sở Vật chất</h4></div>
              <p class="bento-desc">Phòng học, máy lạnh, máy chiếu, âm thanh, ánh sáng, thang máy, thư viện và không gian tự học.</p>
            </div>

            <div class="info-bento-card bento-blue">
              <div class="bento-header"><span class="bento-icon">📚</span><h4 class="bento-title">Chương trình Đào tạo</h4></div>
              <p class="bento-desc">Nội dung học phần, giáo trình, phương pháp giảng dạy, tính ứng dụng thực tiễn của môn học.</p>
            </div>

            <div class="info-bento-card bento-purple">
              <div class="bento-header"><span class="bento-icon">❓</span><h4 class="bento-title">Thắc mắc Học tập & Học vụ</h4></div>
              <p class="bento-desc">Quy chế đào tạo, điểm số, lịch thi, đăng ký môn học, xét tốt nghiệp và các thủ tục biểu mẫu.</p>
            </div>

            <div class="info-bento-card bento-amber">
              <div class="bento-header"><span class="bento-icon">💬</span><h4 class="bento-title">Tình hình Học tập & Khác</h4></div>
              <p class="bento-desc">Tâm tư nguyện vọng của sinh viên và các đóng góp xây dựng nâng cao chất lượng môi trường đào tạo tại UEF.</p>
            </div>
          </div>

          <div class="info-alert-callout callout-green">
            <span class="callout-icon">🤝</span>
            <div class="callout-text">
              Các phản hồi của sinh viên được ghi nhận đầy đủ để phục vụ công tác hỗ trợ và không ngừng cải thiện hoạt động học tập, học vụ tại UEF!
            </div>
          </div>

        </div>
      `
    }
  ]
};
