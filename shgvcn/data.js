/**
  * DỮ LIỆU CHÍNH THỨC NỘI DUNG SINH HOẠT GIÁO VIÊN CHỦ NHIỆM
  * Căn cứ chuẩn xác 100% nguyên văn từng câu chữ, bảng biểu, quy định theo tài liệu:
  * "Thông tin học vụ.docx" (HK 26.1A/ Năm học 2026-2027)
  * Đường dẫn: D:\GIA KHIEM\CONG VIEC SV\7. SHCN\HK 26.1A\Nội dung SH GVCN_HK26.1A\Thông tin học vụ.docx
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
    // -------------------------------------------------------------------------
    // MỤC I: TRUNG TÂM HỖ TRỢ HỌC VỤ
    // -------------------------------------------------------------------------
    {
      id: "trung-tam-ho-tro-hoc-vu",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
      title: "I. TRUNG TÂM HỖ TRỢ HỌC VỤ",
      bgColor: "pastel-blue",
      accentColor: "#0284c7",
      content: `
        <div class="topic-detail">
          
          <p style="font-size: 13.5px; font-weight: 700; color: var(--uef-blue-dark); margin-bottom: 12px;">
            Trung tâm Hỗ trợ học vụ thực hiện các nhiệm vụ chính sau:
          </p>

          <div class="info-bento-grid">
            <div class="info-bento-card bento-blue">
              <div class="bento-header">
                <span class="bento-icon">1️⃣</span>
                <h4 class="bento-title">1. Tiếp nhận, tư vấn và giải đáp</h4>
              </div>
              <p class="bento-desc">Tiếp nhận, tư vấn và giải đáp cho sinh viên/phụ huynh về:</p>
              <ul class="bento-list">
                <li>Các quy định, quy chế;</li>
                <li>Các thông báo liên quan đến vấn đề học tập;</li>
                <li>Kế hoạch giảng dạy - học tập của học kỳ/năm học;</li>
                <li>Thời khóa biểu;</li>
                <li>Kết quả học tập;</li>
                <li>Các vấn đề học vụ khác.</li>
              </ul>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header">
                <span class="bento-icon">2️⃣</span>
                <h4 class="bento-title">2. Giải quyết thủ tục học vụ</h4>
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
                <span class="bento-icon">3️⃣</span>
                <h4 class="bento-title">3. Chăm sóc, hỗ trợ học vụ</h4>
              </div>
              <p class="bento-desc">
                Chăm sóc, hỗ trợ học vụ đối với sinh viên có kết quả học tập chưa tốt, tư vấn và đề xuất các phương án giúp sinh viên cải thiện kết quả học tập.
              </p>
            </div>

            <div class="info-bento-card bento-purple">
              <div class="bento-header">
                <span class="bento-icon">4️⃣</span>
                <h4 class="bento-title">4. Phối hợp với Khoa</h4>
              </div>
              <p class="bento-desc">
                Phối hợp với Khoa để tư vấn chuyên ngành, chương trình và lộ trình học cho sinh viên/phụ huynh, qua đó giúp sinh viên xây dựng: <strong>Kế hoạch học tập hợp lý; Phương pháp học hiệu quả.</strong>
              </p>
            </div>

            <div class="info-bento-card bento-amber">
              <div class="bento-header">
                <span class="bento-icon">5️⃣</span>
                <h4 class="bento-title">5. Thông báo, cung cấp thông tin</h4>
              </div>
              <p class="bento-desc">
                Thông báo, cung cấp thông tin đến sinh viên/phụ huynh về: Kế hoạch giảng dạy - học tập của học kỳ/năm học; Các lưu ý về học vụ; Kết quả học tập của sinh viên; Các thông tin liên quan khác.
              </p>
            </div>
          </div>

          <!-- Thời gian làm việc -->
          <div class="info-alert-callout callout-blue">
            <span class="callout-icon">⏰</span>
            <div class="callout-text">
              <strong>Thời gian làm việc:</strong><br>
              • Từ Thứ Hai đến Thứ Sáu và sáng Thứ Bảy.<br>
              • Buổi sáng: <strong>07:30 - 11:30</strong>.<br>
              • Buổi chiều: <strong>13:30 - 16:30</strong>.<br>
              • <strong>Liên hệ trực tiếp:</strong> Tầng 2, trụ sở 141 - 145 Điện Biên Phủ, Phường Gia Định, TP. Hồ Chí Minh.
            </div>
          </div>

          <!-- Liên hệ trực tuyến -->
          <div class="info-alert-callout callout-green">
            <span class="callout-icon">📞</span>
            <div class="callout-text">
              <strong>Liên hệ trực tuyến:</strong><br>
              • <strong>Gmail:</strong> <a href="mailto:hotrohocvu@uef.edu.vn">hotrohocvu@uef.edu.vn</a><br>
              • <strong>Website:</strong> <a href="https://uef.edu.vn/tththv" target="_blank">uef.edu.vn/tththv</a><br>
              • <strong>Zalopage:</strong> UEF Trung tâm Hỗ trợ học vụ (<a href="http://zalo.me/2106368086678348926" target="_blank">zalo.me/2106368086678348926</a>)<br>
              • <strong>Fanpage:</strong> UEF Trung tâm Hỗ trợ học vụ (<a href="https://facebook.com/TrungtamHTHV" target="_blank">facebook.com/TrungtamHTHV</a>)<br>
              • <strong>Chat Zalo:</strong> 0908 560 999<br>
              • <strong>Hotline:</strong> 028 2236 1111 hoặc 028 2235 1111<br>
              • <strong>Tổng đài:</strong> 028 2236 3333 hoặc 070 397 7799 số nội bộ: <code>2050, 2051, 2052, 2053, 2054, 2055, 2056, 2058, 2059, 2062</code>
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC II: MỘT SỐ THÔNG TIN LƯU Ý QUAN TRỌNG
    // -------------------------------------------------------------------------
    {
      id: "thong-tin-luu-y-quan-trong",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 1 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
      title: "II. MỘT SỐ THÔNG TIN LƯU Ý QUAN TRỌNG",
      bgColor: "pastel-red",
      accentColor: "#dc2626",
      content: `
        <div class="topic-detail">
          
          <div class="info-bento-grid">
            <div class="info-bento-card bento-red">
              <div class="bento-header">
                <span class="bento-icon">🪪</span>
                <h4 class="bento-title">1. Đeo thẻ sinh viên khi đến trường</h4>
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
                <h4 class="bento-title">2. Thường xuyên kiểm tra email, tin nhắn từ Nhà trường</h4>
              </div>
              <ul class="bento-list">
                <li>Sinh viên cần đăng nhập và sử dụng <strong>Email UEF</strong>, thường xuyên kiểm tra email và tin nhắn để tiếp nhận các thông tin, thông báo quan trọng về học tập từ: <strong>Trung tâm Hỗ trợ học vụ; Khoa; Các Phòng/Ban chức năng của Nhà trường</strong>.</li>
                <li>Trường hợp cần hỗ trợ về tài khoản Email UEF, sinh viên liên hệ <strong>Phòng Công nghệ thông tin và Chuyển đổi số</strong>:
                  <br>+ Trực tiếp: <strong>Tầng 4, Trụ sở 141-145 Điện Biên Phủ, Phường Gia Định, TP. Hồ Chí Minh</strong>
                  <br>+ Email: <code>it@uef.edu.vn</code>
                  <br>+ Điện thoại: <code>028 2236 3333 - ext 2160</code>.
                </li>
              </ul>
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC III: KẾ HOẠCH HỌC TẬP
    // -------------------------------------------------------------------------
    {
      id: "ke-hoach-hoc-tap",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
      title: "III. KẾ HOẠCH HỌC TẬP",
      bgColor: "pastel-amber",
      accentColor: "#d97706",
      content: `
        <div class="topic-detail">
          
          <!-- 1. Kế hoạch năm học -->
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
            <span style="display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px; background: #0284c7; color: white; border-radius: 8px; font-weight: 900; font-size: 13px;">1</span>
            <h4 style="font-size: 16px; font-weight: 900; color: #0f2b52; margin: 0;">Năm học 2026-2027</h4>
          </div>

          <div class="info-table-wrap" style="box-shadow: 0 4px 14px rgba(15,43,82,0.08); border: 1.5px solid #cbd5e1;">
            <table class="info-table" style="font-size: 12.5px;">
              <thead>
                <tr style="background: linear-gradient(135deg, #0f2b52 0%, #1e3a8a 100%); color: #ffffff;">
                  <th style="padding: 10px 12px; font-weight: 800; border-right: 1px solid rgba(255,255,255,0.15);">Học kỳ</th>
                  <th style="padding: 10px 12px; font-weight: 800; border-right: 1px solid rgba(255,255,255,0.15);">Khóa áp dụng</th>
                  <th style="padding: 10px 12px; font-weight: 800; border-right: 1px solid rgba(255,255,255,0.15);">Thời gian học</th>
                  <th style="padding: 10px 12px; font-weight: 800;">Thời gian thi / Hoạt động</th>
                </tr>
              </thead>
              <tbody>
                <!-- HK 1A -->
                <tr style="border-top: 2px solid #bae6fd;">
                  <td rowspan="3" style="background: #f0f9ff; color: #0369a1; font-weight: 800; border-right: 1.5px solid #bae6fd; vertical-align: middle; text-align: center;">
                    <div style="font-size: 14px; color: #0284c7; font-weight: 900;">* Học kỳ 1A</div>
                    <div style="font-size: 11px; color: #64748b; margin-top: 2px;">07/09 – 14/11/2026</div>
                  </td>
                  <td style="font-weight: 600; color: #334155; border-right: 1px solid #e2e8f0;">Khóa 2025 và Khóa 2026</td>
                  <td style="border-right: 1px solid #e2e8f0;"><span style="background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 6px; font-weight: 700;">07/09 – 07/11/2026</span></td>
                  <td><span style="background: #fef3c7; color: #b45309; padding: 2px 8px; border-radius: 6px; font-weight: 700;">09/11 – 14/11/2026</span></td>
                </tr>
                <tr>
                  <td style="font-weight: 600; color: #334155; border-right: 1px solid #e2e8f0;">Khóa 2023 (nhóm 2) và Khóa 2024</td>
                  <td style="border-right: 1px solid #e2e8f0;"><span style="background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 6px; font-weight: 700;">07/09 – 31/10/2026</span></td>
                  <td><span style="background: #fef3c7; color: #b45309; padding: 2px 8px; border-radius: 6px; font-weight: 700;">02/11 – 14/11/2026</span></td>
                </tr>
                <tr style="background: #f0fdf4; border-bottom: 2px solid #bbf7d0;">
                  <td style="font-weight: 800; color: #15803d; border-right: 1px solid #bbf7d0;">
                    🎯 Khóa 2023 (nhóm 1)
                  </td>
                  <td style="border-right: 1px solid #bbf7d0;">
                    <div style="margin-bottom: 4px;"><span style="background: #ede9fe; color: #6d28d9; padding: 2px 6px; border-radius: 4px; font-weight: 700; font-size: 11px;">SHCK:</span> 07/09 – 12/09/2026</div>
                    <div><span style="background: #e0f2fe; color: #0369a1; padding: 2px 6px; border-radius: 4px; font-weight: 700; font-size: 11px;">Học:</span> 14/09 – 17/10/2026</div>
                  </td>
                  <td>
                    <div style="margin-bottom: 4px;"><span style="background: #fef3c7; color: #b45309; padding: 2px 6px; border-radius: 4px; font-weight: 700; font-size: 11px;">Thi:</span> 19/10 – 24/10/2026</div>
                    <div style="margin-bottom: 4px;"><strong style="color: #15803d; background: #dcfce7; padding: 3px 8px; border-radius: 6px; border: 1px solid #86efac; display: inline-block;">🚀 Thực tập (12 tuần): 26/10/2026 – 16/01/2027</strong></div>
                    <div><span style="background: #f1f5f9; color: #475569; padding: 2px 6px; border-radius: 4px; font-size: 11px; font-weight: 700;">Nộp BC thực tập:</span> 18/01 – 23/01/2027</div>
                  </td>
                </tr>

                <!-- HK 1B -->
                <tr style="border-top: 2px solid #ddd6fe;">
                  <td rowspan="2" style="background: #faf5ff; color: #6d28d9; font-weight: 800; border-right: 1.5px solid #ddd6fe; vertical-align: middle; text-align: center;">
                    <div style="font-size: 14px; color: #7c3aed; font-weight: 900;">* Học kỳ 1B</div>
                    <div style="font-size: 11px; color: #64748b; margin-top: 2px;">16/11/2026 – 23/01/2027</div>
                  </td>
                  <td style="font-weight: 600; color: #334155; border-right: 1px solid #e2e8f0;">Khóa 2025 và Khóa 2026</td>
                  <td style="border-right: 1px solid #e2e8f0;"><span style="background: #f3e8ff; color: #7c3aed; padding: 2px 8px; border-radius: 6px; font-weight: 700;">16/11/2026 – 16/01/2027</span></td>
                  <td><span style="background: #fef3c7; color: #b45309; padding: 2px 8px; border-radius: 6px; font-weight: 700;">18/01 – 23/01/2027</span></td>
                </tr>
                <tr style="border-bottom: 2px solid #e2e8f0;">
                  <td style="font-weight: 600; color: #334155; border-right: 1px solid #e2e8f0;">Khóa 2023 (nhóm 2) và Khóa 2024</td>
                  <td style="border-right: 1px solid #e2e8f0;"><span style="background: #f3e8ff; color: #7c3aed; padding: 2px 8px; border-radius: 6px; font-weight: 700;">16/11/2026 – 09/01/2027</span></td>
                  <td><span style="background: #fef3c7; color: #b45309; padding: 2px 8px; border-radius: 6px; font-weight: 700;">11/01 – 23/01/2027</span></td>
                </tr>

                <!-- Tết -->
                <tr style="background: linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%); border: 1.5px solid #fecdd3;">
                  <td colspan="4" style="text-align: center; padding: 10px; color: #b91c1c; font-weight: 800; font-size: 13.5px;">
                    🧧 <strong>* Nghỉ Tết Nguyên đán Đinh Mùi:</strong> 24/01/2027 – 21/02/2027 (4 tuần sum vầy)
                  </td>
                </tr>

                <!-- HK 2A -->
                <tr style="border-top: 2px solid #fed7aa;">
                  <td rowspan="3" style="background: #fff7ed; color: #c2410c; font-weight: 800; border-right: 1.5px solid #fed7aa; vertical-align: middle; text-align: center;">
                    <div style="font-size: 14px; color: #ea580c; font-weight: 900;">* Học kỳ 2A</div>
                    <div style="font-size: 11px; color: #64748b; margin-top: 2px;">22/02 – 01/05/2027</div>
                  </td>
                  <td style="font-weight: 600; color: #334155; border-right: 1px solid #e2e8f0;">Khóa 2026</td>
                  <td style="border-right: 1px solid #e2e8f0;"><span style="background: #ffedd5; color: #c2410c; padding: 2px 8px; border-radius: 6px; font-weight: 700;">22/02 – 24/04/2027</span></td>
                  <td><span style="background: #fef3c7; color: #b45309; padding: 2px 8px; border-radius: 6px; font-weight: 700;">26/04 – 01/05/2027</span></td>
                </tr>
                <tr>
                  <td style="font-weight: 600; color: #334155; border-right: 1px solid #e2e8f0;">Khóa 2023 (nhóm 1), Khóa 2024 và Khóa 2025</td>
                  <td style="border-right: 1px solid #e2e8f0;"><span style="background: #ffedd5; color: #c2410c; padding: 2px 8px; border-radius: 6px; font-weight: 700;">22/02 – 17/04/2027</span></td>
                  <td><span style="background: #fef3c7; color: #b45309; padding: 2px 8px; border-radius: 6px; font-weight: 700;">19/04 – 01/05/2027</span></td>
                </tr>
                <tr style="background: #f0fdf4; border-bottom: 2px solid #bbf7d0;">
                  <td style="font-weight: 800; color: #15803d; border-right: 1px solid #bbf7d0;">
                    🎯 Khóa 2023 (nhóm 2)
                  </td>
                  <td style="border-right: 1px solid #bbf7d0;">
                    <div style="margin-bottom: 4px;"><span style="background: #ede9fe; color: #6d28d9; padding: 2px 6px; border-radius: 4px; font-weight: 700; font-size: 11px;">SHCK:</span> 22/02 – 27/02/2027</div>
                    <div><span style="background: #ffedd5; color: #c2410c; padding: 2px 6px; border-radius: 4px; font-weight: 700; font-size: 11px;">Học:</span> 01/03 – 03/04/2027</div>
                  </td>
                  <td>
                    <div style="margin-bottom: 4px;"><span style="background: #fef3c7; color: #b45309; padding: 2px 6px; border-radius: 4px; font-weight: 700; font-size: 11px;">Thi:</span> 05/04 – 10/04/2027</div>
                    <div style="margin-bottom: 4px;"><strong style="color: #15803d; background: #dcfce7; padding: 3px 8px; border-radius: 6px; border: 1px solid #86efac; display: inline-block;">🚀 Thực tập (12 tuần): 12/04 – 03/07/2027</strong></div>
                    <div><span style="background: #f1f5f9; color: #475569; padding: 2px 6px; border-radius: 4px; font-size: 11px; font-weight: 700;">Nộp BC thực tập:</span> 05/07 – 10/07/2027</div>
                  </td>
                </tr>

                <!-- HK 2B -->
                <tr style="border-top: 2px solid #bbf7d0;">
                  <td rowspan="2" style="background: #f0fdf4; color: #15803d; font-weight: 800; border-right: 1.5px solid #bbf7d0; vertical-align: middle; text-align: center;">
                    <div style="font-size: 14px; color: #16a34a; font-weight: 900;">* Học kỳ 2B</div>
                    <div style="font-size: 11px; color: #64748b; margin-top: 2px;">10/05 – 17/07/2027</div>
                  </td>
                  <td style="font-weight: 600; color: #334155; border-right: 1px solid #e2e8f0;">Khóa 2026</td>
                  <td style="border-right: 1px solid #e2e8f0;"><span style="background: #dcfce7; color: #15803d; padding: 2px 8px; border-radius: 6px; font-weight: 700;">10/05 – 20/07/2027</span></td>
                  <td><span style="background: #fef3c7; color: #b45309; padding: 2px 8px; border-radius: 6px; font-weight: 700;">12/07 – 17/07/2027</span></td>
                </tr>
                <tr style="border-bottom: 2px solid #e2e8f0;">
                  <td style="font-weight: 600; color: #334155; border-right: 1px solid #e2e8f0;">Khóa 2023 (nhóm 1), Khóa 2024 và Khóa 2025</td>
                  <td style="border-right: 1px solid #e2e8f0;"><span style="background: #dcfce7; color: #15803d; padding: 2px 8px; border-radius: 6px; font-weight: 700;">10/05 – 03/07/2027</span></td>
                  <td><span style="background: #fef3c7; color: #b45309; padding: 2px 8px; border-radius: 6px; font-weight: 700;">05/07 – 17/07/2027</span></td>
                </tr>

                <!-- HK Hè -->
                <tr style="background: #fefce8; border-top: 2px solid #fde047;">
                  <td style="background: #fef9c3; color: #854d0e; font-weight: 900; border-right: 1.5px solid #fde047; text-align: center;">
                    <div style="font-size: 14px; color: #ca8a04;">* Học kỳ Hè</div>
                    <div style="font-size: 11px; color: #854d0e; margin-top: 2px;">19/07 – 28/08/2027</div>
                  </td>
                  <td colspan="2" style="font-weight: 600; color: #334155; border-right: 1px solid #e2e8f0;">
                    <span style="background: #fef08a; color: #854d0e; padding: 2px 8px; border-radius: 6px; font-weight: 700;">Thời gian học: 19/07 – 21/08/2027</span>
                  </td>
                  <td>
                    <span style="background: #fef3c7; color: #b45309; padding: 2px 8px; border-radius: 6px; font-weight: 700;">Thời gian thi: 23/08 – 29/08/2027</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- 2. Kế hoạch tốt nghiệp -->
          <div style="display: flex; align-items: center; gap: 8px; margin: 30px 0 14px 0;">
            <span style="display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px; background: #059669; color: white; border-radius: 8px; font-weight: 900; font-size: 13px;">2</span>
            <h4 style="font-size: 16px; font-weight: 900; color: #0f2b52; margin: 0;">Kế hoạch Tốt nghiệp Năm học 2026-2027</h4>
          </div>

          <!-- 2.1 Nhóm 1 -->
          <div style="background: #f0fdf4; border: 1.5px solid #86efac; border-radius: 12px; padding: 14px; margin-bottom: 14px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
              <span style="background: #15803d; color: white; font-weight: 900; font-size: 11px; padding: 2px 8px; border-radius: 100px;">NHÓM 1</span>
              <strong style="color: #166534; font-size: 14px;">2.1. THỰC TẬP TỐT NGHIỆP ĐỢT THÁNG 10/2026</strong>
            </div>
            <p style="font-size: 12.5px; color: #1e3a8a; margin-bottom: 8px;">Khóa 2023 - Nhóm 1 (Thực tập tốt nghiệp đợt tháng 10/2026), gồm các ngành:</p>
            
            <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px;">
              <span style="background: #ffffff; color: #0369a1; border: 1px solid #bae6fd; padding: 4px 10px; border-radius: 8px; font-size: 12px; font-weight: 700;">1. Kế toán <small style="color:#64748b;">(Khoa TC-KT)</small></span>
              <span style="background: #ffffff; color: #0369a1; border: 1px solid #bae6fd; padding: 4px 10px; border-radius: 8px; font-size: 12px; font-weight: 700;">2. Kiểm toán <small style="color:#64748b;">(Khoa TC-KT)</small></span>
              <span style="background: #ffffff; color: #0369a1; border: 1px solid #bae6fd; padding: 4px 10px; border-radius: 8px; font-size: 12px; font-weight: 700;">3. Tài chính - Ngân hàng <small style="color:#64748b;">(Khoa TC-KT)</small></span>
              <span style="background: #ffffff; color: #0369a1; border: 1px solid #bae6fd; padding: 4px 10px; border-radius: 8px; font-size: 12px; font-weight: 700;">4. Tài chính quốc tế <small style="color:#64748b;">(Khoa TC-KT)</small></span>
              <span style="background: #ffffff; color: #0369a1; border: 1px solid #bae6fd; padding: 4px 10px; border-radius: 8px; font-size: 12px; font-weight: 700;">5. Công nghệ tài chính <small style="color:#64748b;">(Khoa TC-KT)</small></span>
              <span style="background: #ffffff; color: #0369a1; border: 1px solid #bae6fd; padding: 4px 10px; border-radius: 8px; font-size: 12px; font-weight: 700;">6. Kinh doanh thương mại <small style="color:#64748b;">(Khoa QTKD)</small></span>
              <span style="background: #ffffff; color: #0369a1; border: 1px solid #bae6fd; padding: 4px 10px; border-radius: 8px; font-size: 12px; font-weight: 700;">7. Marketing <small style="color:#64748b;">(Khoa Marketing)</small></span>
              <span style="background: #ffffff; color: #0369a1; border: 1px solid #bae6fd; padding: 4px 10px; border-radius: 8px; font-size: 12px; font-weight: 700;">8. Digital Marketing <small style="color:#64748b;">(Khoa Marketing)</small></span>
              <span style="background: #ffffff; color: #0369a1; border: 1px solid #bae6fd; padding: 4px 10px; border-radius: 8px; font-size: 12px; font-weight: 700;">9. Quản trị sự kiện <small style="color:#64748b;">(Khoa Marketing)</small></span>
              <span style="background: #ffffff; color: #0369a1; border: 1px solid #bae6fd; padding: 4px 10px; border-radius: 8px; font-size: 12px; font-weight: 700;">10. Kinh doanh quốc tế <small style="color:#64748b;">(Khoa Kinh tế)</small></span>
            </div>

            <!-- Bảng mốc thời gian Nhóm 1 -->
            <div class="info-table-wrap" style="margin: 0; background: white;">
              <table class="info-table" style="font-size: 12px;">
                <thead>
                  <tr style="background: #15803d; color: white;">
                    <th style="padding: 8px 10px;">NỘI DUNG (Nhóm 1 - TTTN Tháng 10/2026)</th>
                    <th style="padding: 8px 10px; width: 190px;">THỜI GIAN</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Tổ chức Đăng ký (trực tuyến) học phần Thực tập tốt nghiệp, Chuyên đề/Khóa luận tốt nghiệp</td><td><span style="background: #e0f2fe; color: #0369a1; font-weight: 700; padding: 2px 6px; border-radius: 4px;">23/06 - 04/07/2026</span></td></tr>
                  <tr><td>Sinh viên nộp học phí (dự kiến)</td><td><span style="background: #fef3c7; color: #b45309; font-weight: 700; padding: 2px 6px; border-radius: 4px;">03 - 13/08/2026</span></td></tr>
                  <tr><td>- Chương trình Sinh hoạt cuối khóa<br>- Công bố danh sách đơn vị tham gia Mock-Interview</td><td>tháng 07 + 08/2026<br>01/09/2026 (dự kiến)</td></tr>
                  <tr><td>Sinh hoạt cuối khóa, chương trình từ Giảng đường đến khởi nghiệp</td><td>08 - 12/09/2026</td></tr>
                  <tr><td>Công bố danh sách phân công Giảng viên hướng dẫn</td><td><span style="background: #ede9fe; color: #6d28d9; font-weight: 700; padding: 2px 6px; border-radius: 4px;">13/09/2026</span></td></tr>
                  <tr><td>Công bố danh sách các đơn vị, doanh nghiệp,... tiếp nhận sinh viên thực tập và vị trí thực tập</td><td>14/09/2026</td></tr>
                  <tr><td>Sinh viên nhận hồ sơ thực tập</td><td>21 - 23/10/2026</td></tr>
                  <tr style="background: #dcfce7; border: 2px solid #16a34a;">
                    <td><strong style="color: #15803d; font-size: 12.5px;">🏢 THỰC TẬP TẠI DOANH NGHIỆP 12 TUẦN</strong></td>
                    <td><strong style="color: #15803d; font-size: 12.5px;">26/10/2026 - 16/01/2027</strong></td>
                  </tr>
                  <tr><td>SV nộp báo cáo Thực tập tốt nghiệp, Chuyên đề / Khóa luận tốt nghiệp</td><td><span style="background: #fee2e2; color: #b91c1c; font-weight: 700; padding: 2px 6px; border-radius: 4px;">20 - 23/01/2027</span></td></tr>
                  <tr><td>- Hội đồng đánh giá Khóa luận tốt nghiệp<br>- Công bố kết quả cho sinh viên</td><td>26 - 30/01/2027</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- 2.2 Nhóm 2 -->
          <div style="background: #faf5ff; border: 1.5px solid #c084fc; border-radius: 12px; padding: 14px; margin-bottom: 14px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
              <span style="background: #7c3aed; color: white; font-weight: 900; font-size: 11px; padding: 2px 8px; border-radius: 100px;">NHÓM 2</span>
              <strong style="color: #6b21a8; font-size: 14px;">2.2. THỰC TẬP TỐT NGHIỆP ĐỢT THÁNG 04/2027</strong>
            </div>
            <p style="font-size: 12.5px; color: #581c87; margin-bottom: 10px;">Khóa 2023 - Nhóm 2 (Thực tập tốt nghiệp đợt tháng 04/2027), gồm các ngành khác nhóm 1</p>

            <div class="info-table-wrap" style="margin: 0; background: white;">
              <table class="info-table" style="font-size: 12px;">
                <thead>
                  <tr style="background: #7c3aed; color: white;">
                    <th style="padding: 8px 10px;">NỘI DUNG (Nhóm 2 - TTTN Tháng 04/2027)</th>
                    <th style="padding: 8px 10px; width: 190px;">THỜI GIAN</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Tổ chức Đăng ký (trực tuyến) học phần Thực tập tốt nghiệp, Chuyên đề/Khóa luận tốt nghiệp</td><td><span style="background: #e0f2fe; color: #0369a1; font-weight: 700; padding: 2px 6px; border-radius: 4px;">08 - 19/12/2026</span></td></tr>
                  <tr><td>Sinh viên nộp học phí (dự kiến)</td><td><span style="background: #fef3c7; color: #b45309; font-weight: 700; padding: 2px 6px; border-radius: 4px;">12 - 22/01/2027</span></td></tr>
                  <tr><td>- Chương trình Sinh hoạt cuối khóa<br>- Công bố danh sách đơn vị tham gia Mock-Interview</td><td>tháng 12/2026<br>09/02/2027 (dự kiến)</td></tr>
                  <tr><td>Sinh hoạt cuối khóa, chương trình từ Giảng đường đến khởi nghiệp</td><td>22 - 27/02/2027</td></tr>
                  <tr><td>Công bố danh sách phân công Giảng viên hướng dẫn</td><td><span style="background: #ede9fe; color: #6d28d9; font-weight: 700; padding: 2px 6px; border-radius: 4px;">27/02/2027</span></td></tr>
                  <tr><td>Công bố danh sách các đơn vị, doanh nghiệp,... tiếp nhận sinh viên thực tập và vị trí thực tập</td><td>01/03/2027</td></tr>
                  <tr><td>Sinh viên nhận hồ sơ thực tập</td><td>05 - 07/04/2027</td></tr>
                  <tr style="background: #ede9fe; border: 2px solid #7c3aed;">
                    <td><strong style="color: #6d28d9; font-size: 12.5px;">🏢 THỰC TẬP TẠI DOANH NGHIỆP 12 TUẦN</strong></td>
                    <td><strong style="color: #6d28d9; font-size: 12.5px;">12/04/2027 - 03/07/2027</strong></td>
                  </tr>
                  <tr><td>SV nộp báo cáo Thực tập tốt nghiệp, Chuyên đề / Khóa luận tốt nghiệp</td><td><span style="background: #fee2e2; color: #b91c1c; font-weight: 700; padding: 2px 6px; border-radius: 4px;">07 - 10/07/2027</span></td></tr>
                  <tr><td>- Hội đồng đánh giá Khóa luận tốt nghiệp<br>- Công bố kết quả cho sinh viên</td><td>14 - 21/07/2027</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- 2.3 & 2.4 -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 14px; margin-top: 14px;">
            <div style="background: #fffbeb; border: 1.5px solid #fde68a; border-radius: 12px; padding: 12px;">
              <strong style="color: #b45309; font-size: 13.5px; display: block; margin-bottom: 8px;">2.3. TỐT NGHIỆP KHÓA 2023</strong>
              <div class="info-table-wrap" style="margin: 0; background: white;">
                <table class="info-table" style="font-size: 12px;">
                  <thead><tr style="background:#d97706; color:white;"><th>NỘI DUNG</th><th>THỜI GIAN</th></tr></thead>
                  <tbody>
                    <tr><td>Sinh viên bổ sung các loại hồ sơ; xác nhận thông tin sử dụng cấp bằng tốt nghiệp</td><td>01 - 30/03/2027</td></tr>
                    <tr style="background: #fef3c7;"><td><strong>SINH VIÊN NỘP CÁC CHỨNG CHỈ ĐIỀU KIỆN XÉT TỐT NGHIỆP (Chứng chỉ Tiếng Anh, Chứng chỉ Tin học)</strong></td><td><strong style="color:#b45309;">07 - 30/06/2027</strong></td></tr>
                    <tr style="background: #fee2e2;"><td><strong>HỌP HỘI ĐỒNG XÉT TỐT NGHIỆP THÁNG 07/2027</strong></td><td><strong style="color:#b91c1c;">30/07/2027 (Thứ 7)</strong></td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div style="background: #f0fdf4; border: 1.5px solid #bbf7d0; border-radius: 12px; padding: 12px;">
              <strong style="color: #15803d; font-size: 13.5px; display: block; margin-bottom: 8px;">2.4. LỄ TRAO BẰNG TỐT NGHIỆP NĂM 2027</strong>
              <div class="info-table-wrap" style="margin: 0; background: white;">
                <table class="info-table" style="font-size: 12px;">
                  <thead><tr style="background:#059669; color:white;"><th>NỘI DUNG</th><th>THỜI GIAN</th></tr></thead>
                  <tbody>
                    <tr><td>Sinh viên được Xét tốt nghiệp các đợt từ tháng 10/2026 đến 03/2027<br>- Lễ bế giảng và trao bằng tốt nghiệp</td><td><strong style="color:#0369a1; background:#e0f2fe; padding:2px 6px; border-radius:4px;">Tháng 04/2027</strong></td></tr>
                    <tr style="background: #dcfce7;"><td>Sinh viên được Xét tốt nghiệp đợt 30/07/2027<br>- Lễ bế giảng và trao bằng tốt nghiệp</td><td><strong style="color:#15803d; background:#bbf7d0; padding:2px 6px; border-radius:4px;">Tháng 08/2027</strong><br><small>(dự kiến 25-29/08/2027)</small></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
`
    },

    // -------------------------------------------------------------------------
    // MỤC IV: CHECKLIST CÁC ĐIỀU KIỆN XÉT TỐT NGHIỆP
    // -------------------------------------------------------------------------
    {
      id: "checklist-cac-dieu-kien-xet-tot-nghiep",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>`,
      title: "IV. CHECKLIST CÁC ĐIỀU KIỆN XÉT TỐT NGHIỆP",
      bgColor: "pastel-green",
      accentColor: "#059669",
      content: `
        <div class="topic-detail">
          
          <p style="font-size: 13.5px; font-weight: 700; color: var(--uef-blue-dark); margin-bottom: 12px;">
            Để được xét tốt nghiệp, sinh viên cần đảm bảo đầy đủ các điều kiện:
          </p>

          <div class="info-bento-grid">
            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">1️⃣</span><h4 class="bento-title">Kỷ luật & Tư cách</h4></div>
              <p class="bento-desc">- Tại thời điểm xét tốt nghiệp, không bị truy cứu trách nhiệm hình sự hoặc không đang trong thời gian bị kỷ luật ở mức đình chỉ học tập;</p>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">2️⃣</span><h4 class="bento-title">Học phần & Tín chỉ</h4></div>
              <p class="bento-desc">- Tích lũy đủ học phần, số tín chỉ và hoàn thành các nội dung bắt buộc khác theo yêu cầu của chương trình đào tạo;</p>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">3️⃣</span><h4 class="bento-title">Điểm trung bình tích lũy</h4></div>
              <p class="bento-desc">- Điểm trung bình tích lũy toàn khóa đạt từ <strong>2.00 trở lên</strong>;</p>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">4️⃣</span><h4 class="bento-title">Chuyên đề / Khóa luận tốt nghiệp</h4></div>
              <p class="bento-desc">- Riêng điểm của học phần Chuyên đề / Khóa luận tốt nghiệp phải đạt từ <strong>điểm C trở lên</strong>;</p>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">5️⃣</span><h4 class="bento-title">GDQP & GDTC</h4></div>
              <p class="bento-desc">- Có Chứng chỉ Giáo dục Quốc phòng và Hoàn thành đủ số học phần Giáo dục thể chất theo quy định;</p>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">6️⃣</span><h4 class="bento-title">Chuẩn đầu ra</h4></div>
              <p class="bento-desc">- Có các chứng chỉ khác đạt chuẩn đầu ra theo quy định của Trường;</p>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">7️⃣</span><h4 class="bento-title">Học phí & Nghĩa vụ</h4></div>
              <p class="bento-desc">- Thanh toán đầy đủ học phí, lệ phí và hoàn thành các nghĩa vụ khác theo quy định của Trường.</p>
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC V: ĐIỀU KIỆN CHỨNG CHỈ TIẾNG ANH, TIN HỌC CHUẨN ĐẦU RA
    // -------------------------------------------------------------------------
    {
      id: "dieu-kien-chung-chi-tieng-anh-tin-hoc-chuan-dau-ra",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
      title: "V. ĐIỀU KIỆN CHỨNG CHỈ TIẾNG ANH, TIN HỌC CHUẨN ĐẦU RA",
      bgColor: "pastel-blue",
      accentColor: "#0284c7",
      content: `
        <div class="topic-detail">
          
          <div class="infographic-placeholder-card">
            <div class="placeholder-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 42px; height: 42px; color: var(--vivid-blue);">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <h4 class="placeholder-title">V. ĐIỀU KIỆN CHỨNG CHỈ TIẾNG ANH, TIN HỌC CHUẨN ĐẦU RA</h4>
            <p class="placeholder-desc">(Khu vực hiển thị hình ảnh infographic nội dung chuẩn đầu ra Tiếng Anh & Tin học)</p>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC VI: TIẾN ĐỘ ĐÀO TẠO
    // -------------------------------------------------------------------------
    {
      id: "tien-do-dao-tao",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
      title: "VI. TIẾN ĐỘ ĐÀO TẠO",
      bgColor: "pastel-purple",
      accentColor: "#7c3aed",
      content: `
        <div class="topic-detail">
          
          <p style="font-size: 13.5px; font-weight: 700; color: var(--uef-blue-dark); margin-bottom: 8px;">Sinh viên cần:</p>
          <div class="info-bento-grid">
            <div class="info-bento-card bento-purple">
              <ul class="bento-list">
                <li>1. Đảm bảo tham gia học tập chính xác theo tiến độ và Chương trình đào tạo.</li>
                <li>2. Đối với các học phần chưa đạt theo tiến độ - bao gồm học phần nhận điểm F hoặc học phần chưa đăng ký theo đúng tiến độ - sinh viên cần: <strong>Theo dõi kế hoạch; Sớm đăng ký; Tham gia học tập; Hoàn thành theo quy định.</strong></li>
                <li>3. Sinh viên có học phần chưa đạt theo tiến độ cần <strong>liên hệ ngay Trung tâm Hỗ trợ học vụ để được hỗ trợ kịp thời</strong>.</li>
              </ul>
            </div>
          </div>

          <h4 style="font-size: 14.5px; font-weight: 800; color: var(--uef-blue-dark); margin: 20px 0 8px 0;">Khái niệm “Học phần chưa đạt theo tiến độ”</h4>
          <p style="font-size: 13px; line-height: 1.6; margin-bottom: 8px;">
            “Học phần chưa đạt theo tiến độ” là học phần sinh viên chưa hoàn thành theo tiến độ, kế hoạch học tập của khóa học, bao gồm:
          </p>
          <ul style="margin-left: 20px; font-size: 13px; margin-bottom: 10px;">
            <li>- Học phần sinh viên đã đăng ký nhưng không đạt; hoặc</li>
            <li>- Học phần sinh viên chưa đăng ký học.</li>
          </ul>
          <p style="font-size: 13px; line-height: 1.6; margin-bottom: 12px;">
            Sau khi năm học/học kỳ kết thúc, nếu học phần sinh viên cần hoàn thành theo sơ đồ kế hoạch học tập của năm học/học kỳ đó chưa được hoàn thành thì được xác định là học phần chưa đạt theo tiến độ.
          </p>

          <div class="info-alert-callout callout-blue">
            <span class="callout-icon">💡</span>
            <div class="callout-text">
              <strong>Ví dụ:</strong><br>
              “Pháp luật đại cương” là học phần sinh viên cần hoàn thành trong Học kỳ 2A của Năm 1.<br>
              Tuy nhiên, sau khi kết thúc Năm 1, sinh viên chưa đăng ký và chưa tham gia học học phần này.<br>
              Do đó, Pháp luật đại cương được xác định là học phần sinh viên chưa đạt theo tiến độ.<br><br>
              <strong>Đối với các học phần chưa đạt theo tiến độ, sinh viên cần nhanh chóng đăng ký và hoàn thành nhằm đảm bảo kế hoạch học tập của mình.</strong>
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC VII: XẾP LOẠI HỌC LỰC
    // -------------------------------------------------------------------------
    {
      id: "xep-loai-hoc-luc",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 20V10M12 20V4M6 20v-6"></path></svg>`,
      title: "VII. XẾP LOẠI HỌC LỰC",
      bgColor: "pastel-green",
      accentColor: "#059669",
      content: `
        <div class="topic-detail">
          
          <p style="font-size: 13px; line-height: 1.6; margin-bottom: 12px;">
            Sinh viên được xếp loại học lực theo Điểm Trung bình học kỳ, Điểm Trung bình năm học hoặc Điểm Trung bình tích lũy (theo thang điểm hệ 4) như sau:
          </p>

          <div class="info-table-wrap">
            <table class="info-table">
              <thead><tr><th>Xếp loại</th><th>Điểm trung bình</th></tr></thead>
              <tbody>
                <tr style="background:#f0fdf4;"><td><strong style="color:#15803d;">XUẤT SẮC</strong></td><td>Điểm trung bình từ 3.60 đến 4.00</td></tr>
                <tr style="background:#f0fdf4;"><td><strong style="color:#15803d;">GIỎI</strong></td><td>Điểm trung bình từ 3.20 đến 3.59</td></tr>
                <tr><td><strong style="color:#0284c7;">KHÁ</strong></td><td>Điểm trung bình từ 2.50 đến 3.19</td></tr>
                <tr><td><strong style="color:#d97706;">TRUNG BÌNH</strong></td><td>Điểm trung bình từ 2.00 đến 2.49</td></tr>
                <tr style="background:#fff1f2;"><td><strong style="color:#dc2626;">YẾU</strong></td><td>Điểm trung bình từ 1.00 đến 1.99</td></tr>
                <tr style="background:#fee2e2;"><td><strong style="color:#991b1b;">KÉM</strong></td><td>Điểm trung bình dưới 1.00</td></tr>
              </tbody>
            </table>
          </div>

          <div class="info-alert-callout callout-blue">
            <span class="callout-icon">📝</span>
            <div class="callout-text">
              <strong>Ghi chú:</strong><br>
              - <strong>Điểm Trung bình Học kỳ:</strong> Điểm Trung bình của những học phần sinh viên đã học trong một học kỳ.<br>
              - <strong>Điểm Trung bình Năm học</strong> (áp dụng tính điểm các học kỳ chính gồm: HK 1A, 1B, 2A, 2B và không tính HK hè): Điểm Trung bình của những học phần sinh viên đã học trong một năm học.<br>
              - <strong>Điểm Trung bình Tích lũy:</strong> Điểm Trung bình của những học phần sinh viên đã học tính từ đầu khóa học.
            </div>
          </div>

          <div class="info-alert-callout callout-amber">
            <span class="callout-icon">🎯</span>
            <div class="callout-text">
              <strong style="font-size: 13.5px;">Sinh viên cần đảm bảo:</strong><br>
              <strong style="color:#b91c1c;">Điểm Trung bình học kỳ, Điểm Trung bình năm học và Điểm Trung bình tích lũy ≥ 2.00 (theo thang điểm hệ 4)</strong><br><br>
              <strong>1. NỖ LỰC HỌC TẬP:</strong><br>
              Bạn cần nỗ lực, chuyên cần học tập để cải thiện kết quả ngay từ HK 1A/NH 2026-2027.<br>
              <em>Điểm Trung bình học kỳ / Điểm Trung bình tích lũy ≥ 2.00 (điểm hệ 4)</em><br><br>
              <strong>2. ĐIỀU KIỆN XÉT TỐT NGHIỆP:</strong><br>
              Một trong những điều kiện để Xét tốt nghiệp => SV phải đạt <strong>Điểm Trung bình tích lũy ≥ 2.00 (điểm hệ 4)</strong><br><br>
              <strong>3. LIÊN HỆ HỖ TRỢ NGAY!</strong><br>
              Trường hợp cần tư vấn và hỗ trợ về việc Học cải thiện nhằm đạt kết quả học tập theo Quy định, bạn liên hệ ngay Trung tâm Hỗ trợ học vụ để được tư vấn và hỗ trợ ngay nhé!
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC VIII: ĐIỀU KIỆN DUY TRÌ HỌC BỔNG TUYỂN SINH
    // -------------------------------------------------------------------------
    {
      id: "dieu-kien-duy-tri-hoc-bong-tuyen-sinh",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
      title: "VIII. ĐIỀU KIỆN DUY TRÌ HỌC BỔNG TUYỂN SINH",
      bgColor: "pastel-amber",
      accentColor: "#d97706",
      content: `
        <div class="topic-detail">
          
          <div class="infographic-placeholder-card">
            <div class="placeholder-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 42px; height: 42px; color: var(--vivid-amber);">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <h4 class="placeholder-title">VIII. ĐIỀU KIỆN DUY TRÌ HỌC BỔNG TUYỂN SINH</h4>
            <p class="placeholder-desc">(Khu vực hiển thị hình ảnh infographic điều kiện duy trì học bổng tuyển sinh)</p>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC IX: ĐĂNG KÝ HỌC PHỤ ĐẠO - HOÀN TOÀN MIỄN PHÍ
    // -------------------------------------------------------------------------
    {
      id: "dang-ky-hoc-phu-dao-hoan-toan-mien-phi",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>`,
      title: "IX. ĐĂNG KÝ HỌC PHỤ ĐẠO - HOÀN TOÀN MIỄN PHÍ",
      bgColor: "pastel-blue",
      accentColor: "#0284c7",
      content: `
        <div class="topic-detail">
          
          <p style="font-size: 13px; line-height: 1.6; margin-bottom: 10px;">
            Nếu sinh viên học chuyên cần nhưng không theo kịp bài trong quá trình học của HK 1A và cần phụ đạo để củng cố kiến thức, sinh viên có thể đăng ký nguyện vọng học phụ đạo.
          </p>

          <div class="info-alert-callout callout-amber">
            <span class="callout-icon">⏰</span>
            <div class="callout-text">
              <strong>Thời hạn đăng ký:</strong> Trước ngày <strong>10/10/2026</strong>, tức hết tuần thứ 5 của HK 1A.
            </div>
          </div>

          <p style="font-size: 13px; font-weight: 700; color: var(--uef-blue-dark); margin: 16px 0 8px 0;">
            Trung tâm Hỗ trợ học vụ tổ chức lớp học phụ đạo nhằm:
          </p>
          <ul style="margin-left: 20px; font-size: 13px; line-height: 1.6; margin-bottom: 12px;">
            <li>- Giúp sinh viên nắm vững kiến thức chuyên môn;</li>
            <li>- Hỗ trợ sinh viên đạt kết quả cao hơn trong học tập;</li>
            <li>- Bổ trợ kiến thức trước kỳ thi.</li>
          </ul>

          <div class="info-alert-callout callout-green">
            <span class="callout-icon">🎁</span>
            <div class="callout-text">
              Các lớp phụ đạo dự kiến được tổ chức vào các tuần học cuối, trước khi kỳ thi diễn ra và <strong>hoàn toàn miễn phí</strong>.
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC X: ĐÁNH GIÁ KẾT QUẢ HỌC TẬP
    // -------------------------------------------------------------------------
    {
      id: "danh-gia-ket-qua-hoc-tap",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>`,
      title: "X. ĐÁNH GIÁ KẾT QUẢ HỌC TẬP",
      bgColor: "pastel-purple",
      accentColor: "#7c3aed",
      content: `
        <div class="topic-detail">
          
          <p style="font-size: 13px; line-height: 1.6; margin-bottom: 12px;">
            Kết quả học tập được đánh giá sau <strong>từng học kỳ</strong> hoặc sau <strong>từng năm học</strong>, dựa trên kết quả các học phần nằm trong yêu cầu của chương trình đào tạo mà sinh viên đã học và có điểm theo tiêu chí sau đây:
          </p>

          <div class="info-bento-grid">
            <div class="info-bento-card bento-red">
              <div class="bento-header"><span class="bento-icon">❌</span><h4 class="bento-title">Tổng số tín chỉ không đạt</h4></div>
              <p class="bento-desc">- Tổng số tín chỉ của những học phần mà sinh viên không đạt trong một học kỳ, trong một năm học hoặc nợ đọng từ đầu khóa học.</p>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">✅</span><h4 class="bento-title">Số tín chỉ tích lũy</h4></div>
              <p class="bento-desc">- Tổng số tín chỉ của những học phần mà sinh viên đã đạt từ đầu khóa học (số tín chỉ tích lũy), tính cả các học phần được miễn học, được công nhận tín chỉ.</p>
            </div>

            <div class="info-bento-card bento-blue">
              <div class="bento-header"><span class="bento-icon">📊</span><h4 class="bento-title">Điểm trung bình học phần</h4></div>
              <p class="bento-desc">- Điểm trung bình của những học phần mà sinh viên đã học trong một học kỳ (điểm trung bình học kỳ), trong một năm học (điểm trung bình năm học) hoặc tính từ đầu khóa học (điểm trung bình tích lũy), tính theo điểm chính thức của học phần và trọng số là số tín chỉ của học phần đó.</p>
            </div>

            <div class="info-bento-card bento-amber">
              <div class="bento-header"><span class="bento-icon">⚠️</span><h4 class="bento-title">Điểm trung bình học kỳ</h4></div>
              <p class="bento-desc">- Điểm trung bình học kỳ dùng để xếp loại học lực sinh viên theo học kỳ và xử lý kết quả học tập (cảnh báo học tập, buộc thôi học).</p>
            </div>

            <div class="info-bento-card bento-purple">
              <div class="bento-header"><span class="bento-icon">🏆</span><h4 class="bento-title">Điểm trung bình năm học</h4></div>
              <p class="bento-desc">- Điểm trung bình năm học (chỉ tính học kỳ chính) dùng để xét điều kiện duy trì học bổng tuyển sinh, cấp học bổng tài năng cho sinh viên.</p>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">🎓</span><h4 class="bento-title">Điểm trung bình tích lũy toàn khóa</h4></div>
              <p class="bento-desc">- Điểm trung bình tích luỹ được tính theo điểm học phần cao nhất trong các lần học của sinh viên. Điểm trung bình tích lũy toàn khóa học dùng để xếp hạng tốt nghiệp chỉ tính đối với các học phần theo chương trình đào tạo.</p>
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC XI: HƯỚNG DẪN CÁCH TÍNH ĐIỂM
    // -------------------------------------------------------------------------
    {
      id: "huong-dan-cach-tinh-diem",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
      title: "XI. HƯỚNG DẪN CÁCH TÍNH ĐIỂM",
      bgColor: "pastel-blue",
      accentColor: "#0284c7",
      content: `
        <div class="topic-detail">
          
          <div class="infographic-placeholder-card">
            <div class="placeholder-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 42px; height: 42px; color: var(--vivid-blue);">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <h4 class="placeholder-title">XI. HƯỚNG DẪN CÁCH TÍNH ĐIỂM</h4>
            <p class="placeholder-desc">(Khu vực hiển thị hình ảnh infographic hướng dẫn cách tính điểm)</p>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC XII: HỌC LẠI VÀ HỌC CẢI THIỆN
    // -------------------------------------------------------------------------
    {
      id: "hoc-lai-va-hoc-cai-thien",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg>`,
      title: "XII. HỌC LẠI VÀ HỌC CẢI THIỆN",
      bgColor: "pastel-red",
      accentColor: "#dc2626",
      content: `
        <div class="topic-detail">
          
          <div class="info-bento-grid">
            <div class="info-bento-card bento-red">
              <div class="bento-header"><span class="bento-icon">🔁</span><h4 class="bento-title">HỌC LẠI</h4></div>
              <p class="bento-desc"><strong>Đối với học phần bắt buộc hoặc học phần lựa chọn bắt buộc theo ngành, chuyên ngành:</strong><br>
              Sinh viên có điểm tổng kết học phần không đạt bắt buộc phải đăng ký học lại khi học phần đó được tổ chức giảng dạy.</p>
              <p class="bento-desc" style="margin-top: 8px;"><strong>Đối với học phần tự chọn:</strong><br>
              Sinh viên có thể chọn đăng ký học lại chính học phần đó hoặc chọn học các học phần tự chọn khác cùng nhóm để bảo đảm tích lũy đủ số tín chỉ.</p>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">📈</span><h4 class="bento-title">HỌC CẢI THIỆN</h4></div>
              <p class="bento-desc"><strong>Đối với các học phần bất kỳ đã có kết quả đạt:</strong><br>
              Sinh viên được phép đăng ký học để cải thiện điểm trung bình tích lũy.</p>
              <p class="bento-desc" style="margin-top: 8px;"><strong>Điểm cao nhất giữa các lần học sẽ được lấy để tính điểm trung bình tích lũy dùng để xếp hạng tốt nghiệp.</strong></p>
            </div>
          </div>

          <div class="info-alert-callout callout-amber">
            <span class="callout-icon">⚠️</span>
            <div class="callout-text">
              <strong>Đối với sinh viên có điểm trung bình tích lũy toàn khóa xuất sắc và giỏi:</strong><br>
              Hạng tốt nghiệp sẽ bị giảm đi một mức nếu khối lượng của các học phần phải học lại vượt quá 5% so với tổng số tín chỉ của toàn bộ chương trình.<br><br>
              Khối lượng học tập (tính bằng số tín chỉ) tối đa không vượt quá 3/2 khối lượng trung bình một học kỳ theo kế hoạch học tập chuẩn.<br><br>
              <strong>Do đó, khi đăng ký học lại hoặc học cải thiện học phần, Sinh viên cần đảm bảo số tín chỉ tối đa trong học kỳ theo đúng quy định.</strong>
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC XIII: ĐĂNG KÝ CHƯƠNG TRÌNH HỌC SONG BẰNG/SONG NGÀNH
    // -------------------------------------------------------------------------
    {
      id: "dang-ky-chuong-trinh-hoc-song-bang-song-nganh",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
      title: "XIII. ĐĂNG KÝ CHƯƠNG TRÌNH HỌC SONG BẰNG/SONG NGÀNH",
      bgColor: "pastel-green",
      accentColor: "#059669",
      content: `
        <div class="topic-detail">
          
          <p style="font-size: 13px; line-height: 1.6; margin-bottom: 12px;">
            Học cùng lúc hai chương trình đào tạo theo hình thức song bằng hoặc song ngành dành cho sinh viên có đủ điều kiện theo quy định và có nhu cầu đăng ký học thêm một chương trình thứ hai để khi tốt nghiệp được cấp hai văn bằng, hoặc giấy chứng nhận hoàn thành chương trình song ngành.
          </p>

          <p style="font-weight: 800; color: var(--uef-blue-dark); margin-bottom: 10px;">ƯU ĐIỂM NỔI TRỘI KHI ĐĂNG KÝ HỌC CHƯƠNG TRÌNH</p>

          <div class="info-bento-grid">
            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">🎓</span><h4 class="bento-title">SONG BẰNG</h4></div>
              <p class="bento-desc">Nhận 2 Bằng tốt nghiệp cho 2 ngành học tương ứng khi hoàn thành chương trình đào tạo của ngành.</p>
              <p class="bento-desc" style="margin-top: 6px;">Sinh viên chỉ cần học đạt 1 lần tại ngành học thứ 1:</p>
              <ul class="bento-list">
                <li>Học phần giống nhau giữa 2 ngành</li>
                <li>Học phần Thực tập tốt nghiệp</li>
              </ul>
            </div>

            <div class="info-bento-card bento-blue">
              <div class="bento-header"><span class="bento-icon">📜</span><h4 class="bento-title">SONG NGÀNH</h4></div>
              <p class="bento-desc">Sinh viên sẽ học và hoàn thành các học phần theo quy định của chương trình đào tạo song ngành.</p>
              <p class="bento-desc" style="margin-top: 6px;">Nhận 1 Bằng tốt nghiệp cho ngành học thứ 1 và Giấy chứng nhận hoàn thành chương trình song ngành (khi hoàn thành các chương trình theo quy định).</p>
            </div>
          </div>

          <div class="info-alert-callout callout-green">
            <span class="callout-icon">🎁</span>
            <div class="callout-text" style="font-size: 13.5px;">
              TẠI CHƯƠNG TRÌNH ĐÀO TẠO CỦA NGÀNH HỌC THỨ HAI SINH VIÊN ĐƯỢC:<br>
              <strong style="color: #b91c1c; font-size: 16px;">MIỄN GIẢM 50% HỌC PHÍ SUỐT KHÓA HỌC!</strong>
            </div>
          </div>

          <div class="info-bento-grid">
            <div class="info-bento-card bento-amber">
              <div class="bento-header"><span class="bento-icon">📋</span><h4 class="bento-title">ĐIỀU KIỆN ĐỂ HỌC CÙNG LÚC 2 CHƯƠNG TRÌNH</h4></div>
              <ul class="bento-list">
                <li>a) Đăng ký học sớm nhất sau khi đã kết thúc học kỳ thứ nhất năm học đầu tiên;</li>
                <li>b) Điểm trung bình tích lũy xếp loại trung bình trở lên (<strong>≥ 2.00</strong>);</li>
                <li>c) Trong quá trình SV học cùng lúc hai chương trình, nếu điểm trung bình tích lũy của chương trình thứ nhất đạt dưới điểm trung bình hoặc thuộc diện cảnh báo kết quả học tập thì phải dừng học chương trình thứ hai ở học kỳ tiếp theo.</li>
              </ul>
            </div>

            <div class="info-bento-card bento-purple">
              <div class="bento-header"><span class="bento-icon">⚖️</span><h4 class="bento-title">QUY ĐỊNH KHI HỌC CÙNG LÚC 2 CHƯƠNG TRÌNH</h4></div>
              <ul class="bento-list">
                <li>a) <strong>THỜI GIAN TỐI ĐA</strong> được phép học đối với SV học cùng lúc hai chương trình là thời gian tối đa quy định cho <strong>CHƯƠNG TRÌNH THỨ NHẤT</strong>;</li>
                <li>b) Khi học chương trình thứ hai, sinh viên được <strong>CÔNG NHẬN KẾT QUẢ</strong> của những học phần có nội dung và khối lượng kiến thức tương đương có trong chương trình thứ nhất;</li>
                <li>c) SV chỉ được xét tốt nghiệp chương trình thứ hai, hoặc xét cấp giấy chứng nhận hoàn thành chương trình song ngành nếu có đủ điều kiện tốt nghiệp ở chương trình thứ nhất.</li>
              </ul>
            </div>
          </div>

          <div class="info-alert-callout callout-blue">
            <span class="callout-icon">💬</span>
            <div class="callout-text">
              Vậy trong trường hợp có nguyện vọng, Bạn hãy liên hệ ngay <strong>Trung tâm Hỗ trợ học vụ</strong> để được tư vấn và hỗ trợ chi tiết bạn nhé!
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC XIV: HƯỚNG DẪN SỬ DỤNG CỔNG THÔNG TIN QUẢN LÝ ĐÀO TẠO VÀ DỊCH VỤ TRỰC TUYẾN
    // -------------------------------------------------------------------------
    {
      id: "huong-dan-su-dung-cong-thong-tin-quan-ly-dao-tao",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
      title: "XIV. HƯỚNG DẪN SỬ DỤNG CỔNG THÔNG TIN QUẢN LÝ ĐÀO TẠO VÀ DỊCH VỤ TRỰC TUYẾN",
      bgColor: "pastel-blue",
      accentColor: "#0284c7",
      content: `
        <div class="topic-detail">
          
          <div class="infographic-placeholder-card">
            <div class="placeholder-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 42px; height: 42px; color: var(--vivid-blue);">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <h4 class="placeholder-title">XIV. HƯỚNG DẪN SỬ DỤNG CỔNG THÔNG TIN QUẢN LÝ ĐÀO TẠO VÀ DỊCH VỤ TRỰC TUYẾN</h4>
            <p class="placeholder-desc">(Khu vực hiển thị hình ảnh infographic hướng dẫn sử dụng Cổng thông tin Quản lý đào tạo và Dịch vụ trực tuyến)</p>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC XV: CẨM NANG HỖ TRỢ HỌC VỤ
    // -------------------------------------------------------------------------
    {
      id: "cam-nang-ho-tro-hoc-vu",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
      title: "XV. CẨM NANG HỖ TRỢ HỌC VỤ",
      bgColor: "pastel-amber",
      accentColor: "#d97706",
      content: `
        <div class="topic-detail">
          
          <div class="info-alert-callout callout-blue">
            <span class="callout-icon">📖</span>
            <div class="callout-text" style="font-size: 13.5px; line-height: 1.6;">
              Cẩm nang là nguồn thông tin hỗ trợ sinh viên tra cứu các quy định, hướng dẫn và nội dung học vụ cần thiết trong quá trình học tập.
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC XVI: MỘT SỐ GIẢI PHÁP HỖ TRỢ SINH VIÊN HỌC TẬP HIỆU QUẢ
    // -------------------------------------------------------------------------
    {
      id: "mot-so-giai-phap-ho-tro-sinh-vien-hoc-tap-hieu-qua",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`,
      title: "XVI. MỘT SỐ GIẢI PHÁP HỖ TRỢ SINH VIÊN HỌC TẬP HIỆU QUẢ",
      bgColor: "pastel-green",
      accentColor: "#059669",
      content: `
        <div class="topic-detail">
          
          <div class="infographic-placeholder-card">
            <div class="placeholder-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 42px; height: 42px; color: var(--vivid-green);">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <h4 class="placeholder-title">XVI. MỘT SỐ GIẢI PHÁP HỖ TRỢ SINH VIÊN HỌC TẬP HIỆU QUẢ</h4>
            <p class="placeholder-desc">(Khu vực hiển thị hình ảnh infographic giải pháp hỗ trợ sinh viên học tập hiệu quả)</p>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC XVII: GHI NHẬN PHẢN HỒI, GÓP Ý TỪ SINH VIÊN
    // -------------------------------------------------------------------------
    {
      id: "ghi-nhan-phan-hoi-gop-y-tu-sinh-vien",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
      title: "XVII. GHI NHẬN PHẢN HỒI, GÓP Ý TỪ SINH VIÊN",
      bgColor: "pastel-green",
      accentColor: "#059669",
      content: `
        <div class="topic-detail">
          
          <p style="font-size: 13px; line-height: 1.6; margin-bottom: 12px;">
            Giáo viên chủ nhiệm thực hiện lấy ý kiến phản hồi, góp ý của sinh viên về:
          </p>

          <div class="info-bento-grid">
            <div class="info-bento-card bento-green">
              <div class="bento-header"><span class="bento-icon">🏢</span><h4 class="bento-title">Cơ sở vật chất</h4></div>
              <p class="bento-desc">Ghi nhận các ý kiến phản ánh về cơ sở vật chất, trang thiết bị học tập.</p>
            </div>

            <div class="info-bento-card bento-blue">
              <div class="bento-header"><span class="bento-icon">📚</span><h4 class="bento-title">Chương trình đào tạo</h4></div>
              <p class="bento-desc">Ghi nhận ý kiến đóng góp về chương trình và kế hoạch giảng dạy.</p>
            </div>

            <div class="info-bento-card bento-purple">
              <div class="bento-header"><span class="bento-icon">❓</span><h4 class="bento-title">Các thắc mắc về học tập, học vụ</h4></div>
              <p class="bento-desc">Tiếp nhận và giải đáp các vướng mắc trong quá trình học vụ.</p>
            </div>

            <div class="info-bento-card bento-amber">
              <div class="bento-header"><span class="bento-icon">💬</span><h4 class="bento-title">Tình hình học tập; Các nội dung khác nếu có</h4></div>
              <p class="bento-desc">Lắng nghe tâm tư, nguyện vọng và tình hình học tập thực tế của sinh viên.</p>
            </div>
          </div>

          <div class="info-alert-callout callout-green">
            <span class="callout-icon">🤝</span>
            <div class="callout-text">
              Các phản hồi của sinh viên được ghi nhận để phục vụ công tác hỗ trợ và cải thiện hoạt động học tập, học vụ.
            </div>
          </div>

        </div>
      `
    }
  ]
};
