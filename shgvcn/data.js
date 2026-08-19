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
          
          <p style="font-size: 14px; font-weight: 800; color: #0f2b52; margin-bottom: 14px;">
            Trung tâm Hỗ trợ học vụ thực hiện các nhiệm vụ chính sau:
          </p>

          <div class="grid-5-balanced">
            <!-- Row 1: 2 Cards -->
            <div class="grid-5-row-2">
              <div class="info-bento-card bento-blue" style="background: linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%); border: 1.5px solid #bae6fd;">
                <div class="bento-header">
                  <span class="bento-icon" style="background: #0284c7; color: white; border: none; box-shadow: 0 2px 6px rgba(2,132,199,0.3);">💬</span>
                  <h4 class="bento-title" style="color: #0369a1;">1. Tiếp nhận, tư vấn và giải đáp</h4>
                </div>
                <p class="bento-desc" style="color: #334155;">Tiếp nhận, tư vấn và giải đáp cho sinh viên/phụ huynh về:</p>
                <ul class="bento-list">
                  <li>Các quy định, quy chế;</li>
                  <li>Các thông báo liên quan đến vấn đề học tập;</li>
                  <li>Kế hoạch giảng dạy - học tập của học kỳ/năm học;</li>
                  <li>Thời khóa biểu;</li>
                  <li>Kết quả học tập;</li>
                  <li>Các vấn đề học vụ khác.</li>
                </ul>
              </div>

              <div class="info-bento-card bento-green" style="background: linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%); border: 1.5px solid #bbf7d0;">
                <div class="bento-header">
                  <span class="bento-icon" style="background: #059669; color: white; border: none; box-shadow: 0 2px 6px rgba(5,150,105,0.3);">📝</span>
                  <h4 class="bento-title" style="color: #15803d;">2. Giải quyết thủ tục học vụ</h4>
                </div>
                <p class="bento-desc" style="color: #334155;">Giải quyết các thủ tục học vụ cho sinh viên:</p>
                <ul class="bento-list">
                  <li>Bảo lưu kết quả học tập;</li>
                  <li>Nhập học lại;</li>
                  <li>Chuyển trường;</li>
                  <li>Chuyển ngành học;</li>
                  <li>Đăng ký môn học;</li>
                  <li>Các thủ tục học vụ khác.</li>
                </ul>
              </div>
            </div>

            <!-- Row 2: 3 Cards -->
            <div class="grid-5-row-3">
              <div class="info-bento-card bento-red" style="background: linear-gradient(180deg, #fff1f2 0%, #ffffff 100%); border: 1.5px solid #fecdd3;">
                <div class="bento-header">
                  <span class="bento-icon" style="background: #dc2626; color: white; border: none; box-shadow: 0 2px 6px rgba(220,38,38,0.3);">❤️</span>
                  <h4 class="bento-title" style="color: #b91c1c;">3. Chăm sóc, hỗ trợ học vụ</h4>
                </div>
                <p class="bento-desc" style="color: #334155;">
                  Chăm sóc, hỗ trợ học vụ đối với sinh viên có kết quả học tập chưa tốt, tư vấn và đề xuất các phương án giúp sinh viên cải thiện kết quả học tập.
                </p>
              </div>

              <div class="info-bento-card bento-purple" style="background: linear-gradient(180deg, #faf5ff 0%, #ffffff 100%); border: 1.5px solid #e9d5ff;">
                <div class="bento-header">
                  <span class="bento-icon" style="background: #7c3aed; color: white; border: none; box-shadow: 0 2px 6px rgba(124,58,237,0.3);">🤝</span>
                  <h4 class="bento-title" style="color: #6d28d9;">4. Phối hợp với Khoa</h4>
                </div>
                <p class="bento-desc" style="color: #334155;">
                  Phối hợp với Khoa để tư vấn chuyên ngành, chương trình và lộ trình học cho sinh viên/phụ huynh, qua đó giúp sinh viên xây dựng: <strong>Kế hoạch học tập hợp lý; Phương pháp học hiệu quả.</strong>
                </p>
              </div>

              <div class="info-bento-card bento-amber" style="background: linear-gradient(180deg, #fffbeb 0%, #ffffff 100%); border: 1.5px solid #fde68a;">
                <div class="bento-header">
                  <span class="bento-icon" style="background: #d97706; color: white; border: none; box-shadow: 0 2px 6px rgba(217,119,6,0.3);">📢</span>
                  <h4 class="bento-title" style="color: #b45309;">5. Thông báo, cung cấp thông tin</h4>
                </div>
                <p class="bento-desc" style="color: #334155;">
                  Thông báo, cung cấp thông tin đến sinh viên/phụ huynh về: Kế hoạch giảng dạy - học tập của học kỳ/năm học; Các lưu ý về học vụ; Kết quả học tập của sinh viên; Các thông tin liên quan khác.
                </p>
              </div>
            </div>
          </div>

          <!-- Thời gian làm việc -->
          <div class="info-alert-callout callout-blue" style="box-shadow: 0 2px 8px rgba(2,132,199,0.08);">
            <span class="callout-icon" style="font-size: 24px;">⏰</span>
            <div class="callout-text">
              <strong style="color: #0369a1; font-size: 13.5px;">Thời gian làm việc:</strong><br>
              • Từ Thứ Hai đến Thứ Sáu và sáng Thứ Bảy.<br>
              • Buổi sáng: <strong style="color: #0369a1; background: #e0f2fe; padding: 1px 6px; border-radius: 4px;">07:30 - 11:30</strong>.<br>
              • Buổi chiều: <strong style="color: #0369a1; background: #e0f2fe; padding: 1px 6px; border-radius: 4px;">13:30 - 16:30</strong>.<br>
              • <strong>Liên hệ trực tiếp:</strong> 📍 Tầng 2, trụ sở 141 - 145 Điện Biên Phủ, Phường Gia Định, TP. Hồ Chí Minh.
            </div>
          </div>

          <!-- Liên hệ trực tuyến -->
          <div class="info-alert-callout callout-green" style="box-shadow: 0 2px 8px rgba(5,150,105,0.08);">
            <span class="callout-icon" style="font-size: 24px;">📞</span>
            <div class="callout-text">
              <strong style="color: #15803d; font-size: 13.5px;">Liên hệ trực tuyến:</strong><br>
              • <strong>Gmail:</strong> <a href="mailto:hotrohocvu@uef.edu.vn" style="color:#0284c7; font-weight:700;">hotrohocvu@uef.edu.vn</a><br>
              • <strong>Website:</strong> <a href="https://uef.edu.vn/tththv" target="_blank" style="color:#0284c7; font-weight:700;">uef.edu.vn/tththv</a><br>
              • <strong>Zalopage:</strong> UEF Trung tâm Hỗ trợ học vụ (<a href="http://zalo.me/2106368086678348926" target="_blank" style="color:#0284c7; font-weight:700;">zalo.me/2106368086678348926</a>)<br>
              • <strong>Fanpage:</strong> UEF Trung tâm Hỗ trợ học vụ (<a href="https://facebook.com/TrungtamHTHV" target="_blank" style="color:#0284c7; font-weight:700;">facebook.com/TrungtamHTHV</a>)<br>
              • <strong>Chat Zalo:</strong> <strong style="color:#15803d;">0908 560 999</strong><br>
              • <strong>Hotline:</strong> <strong style="color:#dc2626;">028 2236 1111</strong> hoặc <strong style="color:#dc2626;">028 2235 1111</strong><br>
              • <strong>Tổng đài:</strong> <strong style="color:#0f2b52;">028 2236 3333</strong> hoặc <strong style="color:#0f2b52;">070 397 7799</strong> số nội bộ: <code style="background:#e0f2fe; color:#0369a1; padding:2px 4px; border-radius:4px; font-weight:700;">2050, 2051, 2052, 2053, 2054, 2055, 2056, 2058, 2059, 2062</code>
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
          
          <div class="grid-2col">
            <div class="info-bento-card bento-red" style="background: linear-gradient(180deg, #fff1f2 0%, #ffffff 100%); border: 1.5px solid #fecdd3;">
              <div class="bento-header">
                <span class="bento-icon" style="background: #dc2626; color: white; border: none; box-shadow: 0 2px 6px rgba(220,38,38,0.3);">🪪</span>
                <h4 class="bento-title" style="color: #b91c1c;">1. Đeo thẻ sinh viên khi đến trường</h4>
              </div>
              <ul class="bento-list">
                <li>Sinh viên tham gia thi <strong style="color: #dc2626;">phải xuất trình Thẻ Sinh viên</strong>.</li>
                <li><strong style="color: #b91c1c;">Hội đồng thi sẽ không giải quyết</strong> trường hợp sinh viên không có Thẻ Sinh viên khi tham gia thi.</li>
                <li>Khi sinh viên liên hệ với các Phòng/Viện/Trung tâm của Nhà trường để được hỗ trợ, tư vấn hoặc xử lý các vấn đề học vụ, sinh viên cần xuất trình Thẻ Sinh viên để các đơn vị chức năng xác nhận thông tin.</li>
                <li>Trường hợp quên hoặc mất thẻ, sinh viên liên hệ <strong style="background: #fee2e2; color: #b91c1c; padding: 2px 6px; border-radius: 4px;">Phòng Công tác sinh viên - tầng 6, trụ sở 141 Điện Biên Phủ</strong> để thực hiện cấp Thẻ Sinh viên.</li>
              </ul>
            </div>

            <div class="info-bento-card bento-blue" style="background: linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%); border: 1.5px solid #bae6fd;">
              <div class="bento-header">
                <span class="bento-icon" style="background: #0284c7; color: white; border: none; box-shadow: 0 2px 6px rgba(2,132,199,0.3);">📧</span>
                <h4 class="bento-title" style="color: #0369a1;">2. Thường xuyên kiểm tra email, tin nhắn từ Nhà trường</h4>
              </div>
              <ul class="bento-list">
                <li>Sinh viên cần đăng nhập và sử dụng <strong style="color: #0284c7;">Email UEF</strong>, thường xuyên kiểm tra email và tin nhắn để tiếp nhận các thông tin, thông báo quan trọng về học tập từ: <strong>Trung tâm Hỗ trợ học vụ; Khoa; Các Phòng/Ban chức năng của Nhà trường</strong>.</li>
                <li>Trường hợp cần hỗ trợ về tài khoản Email UEF, sinh viên liên hệ <strong>Phòng Công nghệ thông tin và Chuyển đổi số</strong>:
                  <br>+ Trực tiếp: <span style="background: #e0f2fe; color: #0369a1; padding: 2px 6px; border-radius: 4px; font-weight: 700;">Tầng 4, Trụ sở 141-145 Điện Biên Phủ, Phường Gia Định, TP. Hồ Chí Minh</span>
                  <br>+ Email: <code style="background: #f1f5f9; color: #0284c7; font-weight: 700;">it@uef.edu.vn</code>
                  <br>+ Điện thoại: <strong style="color: #0f2b52;">028 2236 3333 - ext 2160</strong>.
                </li>
              </ul>
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC III: KẾ HOẠCH HỌC TẬP (Giữ nguyên phần đã hoàn thiện)
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
                  <th style="padding: 10px 12px; font-weight: 800; border-right: 1px solid rgba(255,255,255,0.15); width: 140px;">Học kỳ</th>
                  <th style="padding: 10px 12px; font-weight: 800; border-right: 1px solid rgba(255,255,255,0.15); width: 220px;">Khóa học</th>
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
                  <td style="font-weight: 600; color: #334155; border-right: 1px solid #e2e8f0;">Khóa 2025 và Khóa 2026:</td>
                  <td style="border-right: 1px solid #e2e8f0;"><span style="background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 6px; font-weight: 700;">07/09 – 07/11/2026</span></td>
                  <td><span style="background: #fef3c7; color: #b45309; padding: 2px 8px; border-radius: 6px; font-weight: 700;">09/11 – 14/11/2026</span></td>
                </tr>
                <tr>
                  <td style="font-weight: 600; color: #334155; border-right: 1px solid #e2e8f0;">Khóa 2023 (nhóm 2) và Khóa 2024:</td>
                  <td style="border-right: 1px solid #e2e8f0;"><span style="background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 6px; font-weight: 700;">07/09 – 31/10/2026</span></td>
                  <td><span style="background: #fef3c7; color: #b45309; padding: 2px 8px; border-radius: 6px; font-weight: 700;">02/11 – 14/11/2026</span></td>
                </tr>
                <tr style="background: #f0fdf4; border-bottom: 2px solid #bbf7d0;">
                  <td style="font-weight: 800; color: #15803d; border-right: 1px solid #bbf7d0;">
                    Khóa 2023 (nhóm 1):
                  </td>
                  <td style="border-right: 1px solid #bbf7d0;">
                    <div style="margin-bottom: 4px;"><span style="background: #ede9fe; color: #6d28d9; padding: 2px 6px; border-radius: 4px; font-weight: 700; font-size: 11px;">Sinh hoạt cuối khóa:</span> 07/09 – 12/09/2026</div>
                    <div><span style="background: #e0f2fe; color: #0369a1; padding: 2px 6px; border-radius: 4px; font-weight: 700; font-size: 11px;">Thời gian học:</span> 14/09 – 17/10/2026</div>
                  </td>
                  <td>
                    <div style="margin-bottom: 4px;"><span style="background: #fef3c7; color: #b45309; padding: 2px 6px; border-radius: 4px; font-weight: 700; font-size: 11px;">Thời gian thi:</span> 19/10 – 24/10/2026</div>
                    <div style="margin-bottom: 4px;"><strong style="color: #15803d; background: #dcfce7; padding: 3px 8px; border-radius: 6px; border: 1px solid #86efac; display: inline-block;">Thời gian thực tập (12 tuần): 26/10/2026 – 16/01/2027</strong></div>
                    <div><span style="background: #f1f5f9; color: #475569; padding: 2px 6px; border-radius: 4px; font-size: 11px; font-weight: 700;">Nộp báo cáo thực tập:</span> 18/01 – 23/01/2027</div>
                  </td>
                </tr>

                <!-- HK 1B -->
                <tr style="border-top: 2px solid #ddd6fe;">
                  <td rowspan="2" style="background: #faf5ff; color: #6d28d9; font-weight: 800; border-right: 1.5px solid #ddd6fe; vertical-align: middle; text-align: center;">
                    <div style="font-size: 14px; color: #7c3aed; font-weight: 900;">* Học kỳ 1B</div>
                    <div style="font-size: 11px; color: #64748b; margin-top: 2px;">16/11/2026 – 23/01/2027</div>
                  </td>
                  <td style="font-weight: 600; color: #334155; border-right: 1px solid #e2e8f0;">Khóa 2025 và Khóa 2026:</td>
                  <td style="border-right: 1px solid #e2e8f0;"><span style="background: #f3e8ff; color: #7c3aed; padding: 2px 8px; border-radius: 6px; font-weight: 700;">16/11/2026 – 16/01/2027</span></td>
                  <td><span style="background: #fef3c7; color: #b45309; padding: 2px 8px; border-radius: 6px; font-weight: 700;">18/01 – 23/01/2027</span></td>
                </tr>
                <tr style="border-bottom: 2px solid #e2e8f0;">
                  <td style="font-weight: 600; color: #334155; border-right: 1px solid #e2e8f0;">Khóa 2023 (nhóm 2) và Khóa 2024:</td>
                  <td style="border-right: 1px solid #e2e8f0;"><span style="background: #f3e8ff; color: #7c3aed; padding: 2px 8px; border-radius: 6px; font-weight: 700;">16/11/2026 – 09/01/2027</span></td>
                  <td><span style="background: #fef3c7; color: #b45309; padding: 2px 8px; border-radius: 6px; font-weight: 700;">11/01 – 23/01/2027</span></td>
                </tr>

                <!-- Tết -->
                <tr style="background: linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%); border: 1.5px solid #fecdd3;">
                  <td colspan="4" style="text-align: center; padding: 10px; color: #b91c1c; font-weight: 800; font-size: 13px;">
                    * Nghỉ Tết Nguyên đán Đinh Mùi: 24/01 – 21/02/2027.
                  </td>
                </tr>

                <!-- HK 2A -->
                <tr style="border-top: 2px solid #fed7aa;">
                  <td rowspan="3" style="background: #fff7ed; color: #c2410c; font-weight: 800; border-right: 1.5px solid #fed7aa; vertical-align: middle; text-align: center;">
                    <div style="font-size: 14px; color: #ea580c; font-weight: 900;">* Học kỳ 2A</div>
                    <div style="font-size: 11px; color: #64748b; margin-top: 2px;">22/02 – 01/05/2027</div>
                  </td>
                  <td style="font-weight: 600; color: #334155; border-right: 1px solid #e2e8f0;">Khóa 2026:</td>
                  <td style="border-right: 1px solid #e2e8f0;"><span style="background: #ffedd5; color: #c2410c; padding: 2px 8px; border-radius: 6px; font-weight: 700;">22/02 – 24/04/2027</span></td>
                  <td><span style="background: #fef3c7; color: #b45309; padding: 2px 8px; border-radius: 6px; font-weight: 700;">26/04 – 01/05/2027</span></td>
                </tr>
                <tr>
                  <td style="font-weight: 600; color: #334155; border-right: 1px solid #e2e8f0;">Khóa 2023 (nhóm 1), Khóa 2024 và Khóa 2025:</td>
                  <td style="border-right: 1px solid #e2e8f0;"><span style="background: #ffedd5; color: #c2410c; padding: 2px 8px; border-radius: 6px; font-weight: 700;">22/02 – 17/04/2027</span></td>
                  <td><span style="background: #fef3c7; color: #b45309; padding: 2px 8px; border-radius: 6px; font-weight: 700;">19/04 – 01/05/2027</span></td>
                </tr>
                <tr style="background: #f0fdf4; border-bottom: 2px solid #bbf7d0;">
                  <td style="font-weight: 800; color: #15803d; border-right: 1px solid #bbf7d0;">
                    Khóa 2023 (nhóm 2):
                  </td>
                  <td style="border-right: 1px solid #bbf7d0;">
                    <div style="margin-bottom: 4px;"><span style="background: #ede9fe; color: #6d28d9; padding: 2px 6px; border-radius: 4px; font-weight: 700; font-size: 11px;">Sinh hoạt cuối khóa:</span> 22/02 – 27/02/2027</div>
                    <div><span style="background: #ffedd5; color: #c2410c; padding: 2px 6px; border-radius: 4px; font-weight: 700; font-size: 11px;">Thời gian học:</span> 01/03 – 03/04/2027</div>
                  </td>
                  <td>
                    <div style="margin-bottom: 4px;"><span style="background: #fef3c7; color: #b45309; padding: 2px 6px; border-radius: 4px; font-weight: 700; font-size: 11px;">Thời gian thi:</span> 05/04 – 10/04/2027</div>
                    <div style="margin-bottom: 4px;"><strong style="color: #15803d; background: #dcfce7; padding: 3px 8px; border-radius: 6px; border: 1px solid #86efac; display: inline-block;">Thời gian thực tập (12 tuần): 12/04 – 03/07/2027</strong></div>
                    <div><span style="background: #f1f5f9; color: #475569; padding: 2px 6px; border-radius: 4px; font-size: 11px; font-weight: 700;">Nộp báo cáo thực tập:</span> 05/07 – 10/07/2027</div>
                  </td>
                </tr>

                <!-- HK 2B -->
                <tr style="border-top: 2px solid #bbf7d0;">
                  <td rowspan="2" style="background: #f0fdf4; color: #15803d; font-weight: 800; border-right: 1.5px solid #bbf7d0; vertical-align: middle; text-align: center;">
                    <div style="font-size: 14px; color: #16a34a; font-weight: 900;">* Học kỳ 2B</div>
                    <div style="font-size: 11px; color: #64748b; margin-top: 2px;">10/05 – 17/07/2027</div>
                  </td>
                  <td style="font-weight: 600; color: #334155; border-right: 1px solid #e2e8f0;">Khóa 2026:</td>
                  <td style="border-right: 1px solid #e2e8f0;"><span style="background: #dcfce7; color: #15803d; padding: 2px 8px; border-radius: 6px; font-weight: 700;">10/05 – 20/07/2027</span></td>
                  <td><span style="background: #fef3c7; color: #b45309; padding: 2px 8px; border-radius: 6px; font-weight: 700;">12/07 – 17/07/2027</span></td>
                </tr>
                <tr style="border-bottom: 2px solid #e2e8f0;">
                  <td style="font-weight: 600; color: #334155; border-right: 1px solid #e2e8f0;">Khóa 2023 (nhóm 1), Khóa 2024 và Khóa 2025:</td>
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

          <!-- Ghi chú về Khóa 2023 (nhóm 1) và Khóa 2023 (nhóm 2) ngay dưới phần 1 -->
          <div class="info-alert-callout callout-blue" style="margin: 14px 0 24px 0;">
            <span class="callout-icon">📌</span>
            <div class="callout-text" style="font-size: 12.5px; line-height: 1.6;">
              <strong>Ghi chú phân nhóm Khóa 2023:</strong><br>
              • <strong>Khóa 2023 (nhóm 1):</strong> Gồm 10 ngành đào tạo đi Thực tập tốt nghiệp đợt tháng 10/2026 (Kế toán, Kiểm toán, Tài chính - Ngân hàng, Tài chính quốc tế, Công nghệ tài chính, Kinh doanh thương mại, Marketing, Digital Marketing, Quản trị sự kiện, Kinh doanh quốc tế).<br>
              • <strong>Khóa 2023 (nhóm 2):</strong> Gồm tất cả các ngành đào tạo còn lại đi Thực tập tốt nghiệp đợt tháng 04/2027.
            </div>
          </div>

          <!-- 2. Kế hoạch tốt nghiệp -->
          <div style="display: flex; align-items: center; gap: 8px; margin: 28px 0 14px 0;">
            <span style="display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px; background: #059669; color: white; border-radius: 8px; font-weight: 900; font-size: 13px;">2</span>
            <h4 style="font-size: 16px; font-weight: 900; color: #0f2b52; margin: 0;">Kế hoạch Tốt nghiệp Năm học 2026-2027</h4>
          </div>

          <!-- 2.1 Nhóm 1 -->
          <div style="background: #f0fdf4; border: 1.5px solid #86efac; border-radius: 12px; padding: 16px; margin-bottom: 16px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
              <span style="background: #15803d; color: white; font-weight: 900; font-size: 11px; padding: 2px 8px; border-radius: 100px;">NHÓM 1</span>
              <strong style="color: #166534; font-size: 14px;">2.1. THỰC TẬP TỐT NGHIỆP ĐỢT THÁNG 10/2026</strong>
            </div>
            <p style="font-size: 12.5px; color: #1e3a8a; margin-bottom: 10px;">Khóa 2023 - Nhóm 1 (Thực tập tốt nghiệp đợt tháng 10/2026), gồm các ngành:</p>
            
            <!-- Danh sách 10 ngành xếp thành 10 thẻ độc lập trong lưới 2 cột đối xứng -->
            <div class="grid-2col" style="gap: 10px; margin-bottom: 16px;">
              
              <!-- Ngành 1 -->
              <div style="display: flex; align-items: center; justify-content: space-between; background: #ffffff; border: 1.5px solid #bae6fd; border-radius: 10px; padding: 10px 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; background: #0284c7; color: white; border-radius: 6px; font-weight: 800; font-size: 11.5px;">1</span>
                  <strong style="color: #0f2b52; font-size: 12.5px;">Kế toán</strong>
                </div>
                <span style="font-size: 11px; color: #0369a1; background: #f0f9ff; padding: 2px 6px; border-radius: 4px; font-weight: 600; border: 1px solid #e0f2fe;">Khoa Tài chính - Kế toán</span>
              </div>

              <!-- Ngành 2 -->
              <div style="display: flex; align-items: center; justify-content: space-between; background: #ffffff; border: 1.5px solid #bae6fd; border-radius: 10px; padding: 10px 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; background: #0284c7; color: white; border-radius: 6px; font-weight: 800; font-size: 11.5px;">2</span>
                  <strong style="color: #0f2b52; font-size: 12.5px;">Kiểm toán</strong>
                </div>
                <span style="font-size: 11px; color: #0369a1; background: #f0f9ff; padding: 2px 6px; border-radius: 4px; font-weight: 600; border: 1px solid #e0f2fe;">Khoa Tài chính - Kế toán</span>
              </div>

              <!-- Ngành 3 -->
              <div style="display: flex; align-items: center; justify-content: space-between; background: #ffffff; border: 1.5px solid #bae6fd; border-radius: 10px; padding: 10px 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; background: #0284c7; color: white; border-radius: 6px; font-weight: 800; font-size: 11.5px;">3</span>
                  <strong style="color: #0f2b52; font-size: 12.5px;">Tài chính - Ngân hàng</strong>
                </div>
                <span style="font-size: 11px; color: #0369a1; background: #f0f9ff; padding: 2px 6px; border-radius: 4px; font-weight: 600; border: 1px solid #e0f2fe;">Khoa Tài chính - Kế toán</span>
              </div>

              <!-- Ngành 4 -->
              <div style="display: flex; align-items: center; justify-content: space-between; background: #ffffff; border: 1.5px solid #bae6fd; border-radius: 10px; padding: 10px 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; background: #0284c7; color: white; border-radius: 6px; font-weight: 800; font-size: 11.5px;">4</span>
                  <strong style="color: #0f2b52; font-size: 12.5px;">Tài chính quốc tế</strong>
                </div>
                <span style="font-size: 11px; color: #0369a1; background: #f0f9ff; padding: 2px 6px; border-radius: 4px; font-weight: 600; border: 1px solid #e0f2fe;">Khoa Tài chính - Kế toán</span>
              </div>

              <!-- Ngành 5 -->
              <div style="display: flex; align-items: center; justify-content: space-between; background: #ffffff; border: 1.5px solid #bae6fd; border-radius: 10px; padding: 10px 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; background: #0284c7; color: white; border-radius: 6px; font-weight: 800; font-size: 11.5px;">5</span>
                  <strong style="color: #0f2b52; font-size: 12.5px;">Công nghệ tài chính</strong>
                </div>
                <span style="font-size: 11px; color: #0369a1; background: #f0f9ff; padding: 2px 6px; border-radius: 4px; font-weight: 600; border: 1px solid #e0f2fe;">Khoa Tài chính - Kế toán</span>
              </div>

              <!-- Ngành 6 -->
              <div style="display: flex; align-items: center; justify-content: space-between; background: #ffffff; border: 1.5px solid #fed7aa; border-radius: 10px; padding: 10px 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; background: #ea580c; color: white; border-radius: 6px; font-weight: 800; font-size: 11.5px;">6</span>
                  <strong style="color: #0f2b52; font-size: 12.5px;">Kinh doanh thương mại</strong>
                </div>
                <span style="font-size: 11px; color: #c2410c; background: #fff7ed; padding: 2px 6px; border-radius: 4px; font-weight: 600; border: 1px solid #ffedd5;">Khoa Quản trị kinh doanh</span>
              </div>

              <!-- Ngành 7 -->
              <div style="display: flex; align-items: center; justify-content: space-between; background: #ffffff; border: 1.5px solid #fbcfe8; border-radius: 10px; padding: 10px 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; background: #db2777; color: white; border-radius: 6px; font-weight: 800; font-size: 11.5px;">7</span>
                  <strong style="color: #0f2b52; font-size: 12.5px;">Marketing</strong>
                </div>
                <span style="font-size: 11px; color: #be185d; background: #fdf2f8; padding: 2px 6px; border-radius: 4px; font-weight: 600; border: 1px solid #fce7f3;">Khoa Marketing</span>
              </div>

              <!-- Ngành 8 -->
              <div style="display: flex; align-items: center; justify-content: space-between; background: #ffffff; border: 1.5px solid #fbcfe8; border-radius: 10px; padding: 10px 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; background: #db2777; color: white; border-radius: 6px; font-weight: 800; font-size: 11.5px;">8</span>
                  <strong style="color: #0f2b52; font-size: 12.5px;">Digital Marketing</strong>
                </div>
                <span style="font-size: 11px; color: #be185d; background: #fdf2f8; padding: 2px 6px; border-radius: 4px; font-weight: 600; border: 1px solid #fce7f3;">Khoa Marketing</span>
              </div>

              <!-- Ngành 9 -->
              <div style="display: flex; align-items: center; justify-content: space-between; background: #ffffff; border: 1.5px solid #fbcfe8; border-radius: 10px; padding: 10px 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; background: #db2777; color: white; border-radius: 6px; font-weight: 800; font-size: 11.5px;">9</span>
                  <strong style="color: #0f2b52; font-size: 12.5px;">Quản trị sự kiện</strong>
                </div>
                <span style="font-size: 11px; color: #be185d; background: #fdf2f8; padding: 2px 6px; border-radius: 4px; font-weight: 600; border: 1px solid #fce7f3;">Khoa Marketing</span>
              </div>

              <!-- Ngành 10 -->
              <div style="display: flex; align-items: center; justify-content: space-between; background: #ffffff; border: 1.5px solid #c7d2fe; border-radius: 10px; padding: 10px 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; background: #4f46e5; color: white; border-radius: 6px; font-weight: 800; font-size: 11.5px;">10</span>
                  <strong style="color: #0f2b52; font-size: 12.5px;">Kinh doanh quốc tế</strong>
                </div>
                <span style="font-size: 11px; color: #4338ca; background: #eef2ff; padding: 2px 6px; border-radius: 4px; font-weight: 600; border: 1px solid #e0e7ff;">Khoa Kinh tế</span>
              </div>

            </div>

            <!-- Bảng mốc thời gian Nhóm 1 -->
            <div class="info-table-wrap" style="margin: 0; background: white;">
              <table class="info-table" style="font-size: 12px;">
                <thead>
                  <tr style="background: #15803d; color: white;">
                    <th style="padding: 8px 10px;">NỘI DUNG</th>
                    <th style="padding: 8px 10px; width: 200px;">THỜI GIAN</th>
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
                    <td><strong style="color: #15803d; font-size: 12.5px;">THỰC TẬP TẠI DOANH NGHIỆP 12 TUẦN</strong></td>
                    <td><strong style="color: #15803d; font-size: 12.5px;">26/10/2026 - 16/01/2027</strong></td>
                  </tr>
                  <tr><td>Sinh viên nộp báo cáo Thực tập tốt nghiệp, Chuyên đề / Khóa luận tốt nghiệp</td><td><span style="background: #fee2e2; color: #b91c1c; font-weight: 700; padding: 2px 6px; border-radius: 4px;">20 - 23/01/2027</span></td></tr>
                  <tr><td>- Hội đồng đánh giá Khóa luận tốt nghiệp<br>- Công bố kết quả cho sinh viên</td><td>26 - 30/01/2027</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- 2.2 Nhóm 2 -->
          <div style="background: #faf5ff; border: 1.5px solid #c084fc; border-radius: 12px; padding: 16px; margin-bottom: 16px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
              <span style="background: #7c3aed; color: white; font-weight: 900; font-size: 11px; padding: 2px 8px; border-radius: 100px;">NHÓM 2</span>
              <strong style="color: #6b21a8; font-size: 14px;">2.2. THỰC TẬP TỐT NGHIỆP ĐỢT THÁNG 04/2027</strong>
            </div>
            <p style="font-size: 12.5px; color: #581c87; margin-bottom: 10px;">Khóa 2023 - Nhóm 2 (Thực tập tốt nghiệp đợt tháng 04/2027), gồm các ngành khác nhóm 1</p>

            <div class="info-table-wrap" style="margin: 0; background: white;">
              <table class="info-table" style="font-size: 12px;">
                <thead>
                  <tr style="background: #7c3aed; color: white;">
                    <th style="padding: 8px 10px;">NỘI DUNG</th>
                    <th style="padding: 8px 10px; width: 200px;">THỜI GIAN</th>
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
                    <td><strong style="color: #6d28d9; font-size: 12.5px;">THỰC TẬP TẠI DOANH NGHIỆP 12 TUẦN</strong></td>
                    <td><strong style="color: #6d28d9; font-size: 12.5px;">12/04/2027 - 03/07/2027</strong></td>
                  </tr>
                  <tr><td>Sinh viên nộp báo cáo Thực tập tốt nghiệp, Chuyên đề / Khóa luận tốt nghiệp</td><td><span style="background: #fee2e2; color: #b91c1c; font-weight: 700; padding: 2px 6px; border-radius: 4px;">07 - 10/07/2027</span></td></tr>
                  <tr><td>- Hội đồng đánh giá Khóa luận tốt nghiệp<br>- Công bố kết quả cho sinh viên</td><td>14 - 21/07/2027</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- 2.3 & 2.4 -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 14px; margin-top: 14px;">
            <div style="background: #fffbeb; border: 1.5px solid #fde68a; border-radius: 12px; padding: 14px;">
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

            <div style="background: #f0fdf4; border: 1.5px solid #bbf7d0; border-radius: 12px; padding: 14px;">
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
          
          <p style="font-size: 14px; font-weight: 800; color: #0f2b52; margin-bottom: 14px;">
            Để được xét tốt nghiệp, sinh viên cần đảm bảo đầy đủ các điều kiện:
          </p>

          <div class="grid-7-balanced">
            <div class="info-bento-card" style="background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%); border: 1.5px solid #cbd5e1; border-left: 4px solid #0f2b52;">
              <div class="bento-header">
                <span class="bento-icon" style="background: #0f2b52; color: white; border: none;">1️⃣</span>
                <h4 class="bento-title" style="color: #0f2b52;">Kỷ luật & Tư cách</h4>
              </div>
              <p class="bento-desc">- Tại thời điểm xét tốt nghiệp, không bị truy cứu trách nhiệm hình sự hoặc không đang trong thời gian bị kỷ luật ở mức đình chỉ học tập;</p>
            </div>

            <div class="info-bento-card" style="background: linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%); border: 1.5px solid #bae6fd; border-left: 4px solid #0284c7;">
              <div class="bento-header">
                <span class="bento-icon" style="background: #0284c7; color: white; border: none;">2️⃣</span>
                <h4 class="bento-title" style="color: #0369a1;">Học phần & Tín chỉ</h4>
              </div>
              <p class="bento-desc">- Tích lũy đủ học phần, số tín chỉ và hoàn thành các nội dung bắt buộc khác theo yêu cầu của chương trình đào tạo;</p>
            </div>

            <div class="info-bento-card" style="background: linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%); border: 1.5px solid #bbf7d0; border-left: 4px solid #059669;">
              <div class="bento-header">
                <span class="bento-icon" style="background: #059669; color: white; border: none;">3️⃣</span>
                <h4 class="bento-title" style="color: #15803d;">Điểm trung bình tích lũy</h4>
              </div>
              <p class="bento-desc">- Điểm trung bình tích lũy toàn khóa đạt từ <strong style="color: #15803d; font-size: 13.5px; background: #dcfce7; padding: 2px 6px; border-radius: 4px;">2.00 trở lên</strong>;</p>
            </div>

            <div class="info-bento-card" style="background: linear-gradient(180deg, #fff7ed 0%, #ffffff 100%); border: 1.5px solid #fed7aa; border-left: 4px solid #ea580c;">
              <div class="bento-header">
                <span class="bento-icon" style="background: #ea580c; color: white; border: none;">4️⃣</span>
                <h4 class="bento-title" style="color: #c2410c;">Chuyên đề / Khóa luận tốt nghiệp</h4>
              </div>
              <p class="bento-desc">- Riêng điểm của học phần Chuyên đề / Khóa luận tốt nghiệp phải đạt từ <strong style="color: #c2410c; font-size: 13.5px; background: #ffedd5; padding: 2px 6px; border-radius: 4px;">điểm C trở lên</strong>;</p>
            </div>

            <div class="info-bento-card" style="background: linear-gradient(180deg, #faf5ff 0%, #ffffff 100%); border: 1.5px solid #e9d5ff; border-left: 4px solid #7c3aed;">
              <div class="bento-header">
                <span class="bento-icon" style="background: #7c3aed; color: white; border: none;">5️⃣</span>
                <h4 class="bento-title" style="color: #6d28d9;">GDQP & GDTC</h4>
              </div>
              <p class="bento-desc">- Có Chứng chỉ Giáo dục Quốc phòng và Hoàn thành đủ số học phần Giáo dục thể chất theo quy định;</p>
            </div>

            <div class="info-bento-card" style="background: linear-gradient(180deg, #ecfeff 0%, #ffffff 100%); border: 1.5px solid #a5f3fc; border-left: 4px solid #0891b2;">
              <div class="bento-header">
                <span class="bento-icon" style="background: #0891b2; color: white; border: none;">6️⃣</span>
                <h4 class="bento-title" style="color: #0e7490;">Chuẩn đầu ra</h4>
              </div>
              <p class="bento-desc">- Có các chứng chỉ khác đạt chuẩn đầu ra theo quy định của Trường;</p>
            </div>

            <div class="info-bento-card card-full-span" style="background: linear-gradient(180deg, #fffbeb 0%, #ffffff 100%); border: 1.5px solid #fde68a; border-left: 4px solid #d97706;">
              <div class="bento-header">
                <span class="bento-icon" style="background: #d97706; color: white; border: none;">7️⃣</span>
                <h4 class="bento-title" style="color: #b45309;">Học phí & Nghĩa vụ</h4>
              </div>
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
          
          <div class="infographic-placeholder-card" style="background: linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%); border: 2px dashed #38bdf8;">
            <div class="placeholder-icon-wrap" style="background: #e0f2fe; border-color: #bae6fd;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 42px; height: 42px; color: #0284c7;">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <h4 class="placeholder-title" style="color: #0369a1;">V. ĐIỀU KIỆN CHỨNG CHỈ TIẾNG ANH, TIN HỌC CHUẨN ĐẦU RA</h4>
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
          
          <div class="grid-2col">
            <!-- Cột 1 -->
            <div class="info-bento-card" style="background: linear-gradient(180deg, #faf5ff 0%, #ffffff 100%); border: 1.5px solid #e9d5ff; border-left: 4px solid #7c3aed;">
              <div class="bento-header">
                <span class="bento-icon" style="background: #7c3aed; color: white; border: none;">🎯</span>
                <h4 class="bento-title" style="color: #6d28d9;">Sinh viên cần:</h4>
              </div>
              <ul class="bento-list">
                <li>1. Đảm bảo tham gia học tập chính xác theo tiến độ và Chương trình đào tạo.</li>
                <li>2. Đối với các học phần chưa đạt theo tiến độ - bao gồm học phần nhận điểm F hoặc học phần chưa đăng ký theo đúng tiến độ - sinh viên cần: <strong style="color: #6d28d9;">Theo dõi kế hoạch; Sớm đăng ký; Tham gia học tập; Hoàn thành theo quy định.</strong></li>
                <li>3. Sinh viên có học phần chưa đạt theo tiến độ cần <strong style="color: #dc2626;">liên hệ ngay Trung tâm Hỗ trợ học vụ để được hỗ trợ kịp thời</strong>.</li>
              </ul>
            </div>

            <!-- Cột 2 -->
            <div class="info-bento-card" style="background: linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%); border: 1.5px solid #bae6fd; border-left: 4px solid #0284c7;">
              <div class="bento-header">
                <span class="bento-icon" style="background: #0284c7; color: white; border: none;">📖</span>
                <h4 class="bento-title" style="color: #0369a1;">Khái niệm “Học phần chưa đạt theo tiến độ”</h4>
              </div>
              <p class="bento-desc">“Học phần chưa đạt theo tiến độ” là học phần sinh viên chưa hoàn thành theo tiến độ, kế hoạch học tập của khóa học, bao gồm:</p>
              <ul class="bento-list">
                <li>- Học phần sinh viên đã đăng ký nhưng không đạt; hoặc</li>
                <li>- Học phần sinh viên chưa đăng ký học.</li>
              </ul>
              <p class="bento-desc" style="margin-top: 8px;">Sau khi năm học/học kỳ kết thúc, nếu học phần sinh viên cần hoàn thành theo sơ đồ kế hoạch học tập của năm học/học kỳ đó chưa được hoàn thành thì được xác định là học phần chưa đạt theo tiến độ.</p>
            </div>
          </div>

          <div class="info-alert-callout callout-amber" style="margin-top: 16px;">
            <span class="callout-icon">💡</span>
            <div class="callout-text">
              <strong style="color: #b45309; font-size: 13.5px;">Ví dụ:</strong><br>
              “Pháp luật đại cương” là học phần sinh viên cần hoàn thành trong Học kỳ 2A của Năm 1.<br>
              Tuy nhiên, sau khi kết thúc Năm 1, sinh viên chưa đăng ký và chưa tham gia học học phần này.<br>
              Do đó, Pháp luật đại cương được xác định là học phần sinh viên chưa đạt theo tiến độ.<br><br>
              <strong style="color: #b45309;">Đối với các học phần chưa đạt theo tiến độ, sinh viên cần nhanh chóng đăng ký và hoàn thành nhằm đảm bảo kế hoạch học tập của mình.</strong>
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
          
          <p style="font-size: 13.5px; color: #334155; margin-bottom: 14px;">
            Sinh viên được xếp loại học lực theo Điểm Trung bình học kỳ, Điểm Trung bình năm học hoặc Điểm Trung bình tích lũy (theo thang điểm hệ 4) như sau:
          </p>

                    <div class="info-table-wrap" style="box-shadow: 0 4px 14px rgba(15,43,82,0.08); border: 1.5px solid #cbd5e1; max-width: 700px; margin: 16px auto;">
            <table class="info-table" style="font-size: 12.5px; text-align: center;">
              <thead>
                <tr style="background: linear-gradient(135deg, #0f2b52 0%, #1e3a8a 100%); color: #ffffff;">
                  <th style="padding: 10px 14px; font-weight: 800; width: 40%; text-align: center; border-right: 1px solid rgba(255,255,255,0.15);">Xếp loại</th>
                  <th style="padding: 10px 14px; font-weight: 800; text-align: center;">Điểm trung bình</th>
                </tr>
              </thead>
              <tbody>
                <tr style="background:#f0fdf4; border-bottom: 1px solid #bbf7d0;">
                  <td style="padding: 10px 14px; text-align: center; border-right: 1px solid #bbf7d0;"><strong style="color:#15803d; font-size: 13px;">🌟 XUẤT SẮC</strong></td>
                  <td style="padding: 10px 14px; text-align: center;"><span style="background: #dcfce7; color: #15803d; padding: 3px 12px; border-radius: 6px; font-weight: 800;">Điểm trung bình từ 3.60 đến 4.00</span></td>
                </tr>
                <tr style="background:#f0fdf4; border-bottom: 1px solid #bbf7d0;">
                  <td style="padding: 10px 14px; text-align: center; border-right: 1px solid #bbf7d0;"><strong style="color:#15803d; font-size: 13px;">✨ GIỎI</strong></td>
                  <td style="padding: 10px 14px; text-align: center;"><span style="background: #dcfce7; color: #15803d; padding: 3px 12px; border-radius: 6px; font-weight: 800;">Điểm trung bình từ 3.20 đến 3.59</span></td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 10px 14px; text-align: center; border-right: 1px solid #e2e8f0;"><strong style="color:#0284c7; font-size: 13px;">👍 KHÁ</strong></td>
                  <td style="padding: 10px 14px; text-align: center;"><span style="background: #e0f2fe; color: #0369a1; padding: 3px 12px; border-radius: 6px; font-weight: 800;">Điểm trung bình từ 2.50 đến 3.19</span></td>
                </tr>
                <tr style="background: #fffbeb; border-bottom: 1.5px solid #fde68a;">
                  <td style="padding: 10px 14px; text-align: center; border-right: 1px solid #fde68a;"><strong style="color:#d97706; font-size: 13px;">⚠️ TRUNG BÌNH</strong></td>
                  <td style="padding: 10px 14px; text-align: center;">
                    <span style="background: #fef3c7; color: #b45309; padding: 3px 12px; border-radius: 6px; font-weight: 800;">Điểm trung bình từ 2.00 đến 2.49</span>
                  </td>
                </tr>
                <tr style="background:#fff1f2; border-bottom: 1px solid #fecdd3;">
                  <td style="padding: 10px 14px; text-align: center; border-right: 1px solid #fecdd3;"><strong style="color:#dc2626; font-size: 13px;">❗ YẾU</strong></td>
                  <td style="padding: 10px 14px; text-align: center;"><span style="background: #fee2e2; color: #b91c1c; padding: 3px 12px; border-radius: 6px; font-weight: 800;">Điểm trung bình từ 1.00 đến 1.99</span></td>
                </tr>
                <tr style="background:#fee2e2;">
                  <td style="padding: 10px 14px; text-align: center; border-right: 1px solid #fee2e2;"><strong style="color:#991b1b; font-size: 13px;">🚨 KÉM</strong></td>
                  <td style="padding: 10px 14px; text-align: center;"><span style="background: #fecdd3; color: #991b1b; padding: 3px 12px; border-radius: 6px; font-weight: 800;">Điểm trung bình dưới 1.00</span></td>
                </tr>
              </tbody>
            </table>
          </div>

                    <div class="grid-2col" style="margin-top: 16px;">
            <!-- Khung 1: Ghi chú -->
            <div class="info-bento-card bento-blue" style="background: linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%); border: 1.5px solid #bae6fd; border-radius: 14px; padding: 16px; display: flex; flex-direction: column;">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px; border-bottom: 1px solid #e0f2fe; padding-bottom: 8px;">
                <span style="font-size: 20px;">📝</span>
                <h4 style="margin: 0; font-size: 14px; font-weight: 800; color: #0369a1;">Ghi chú:</h4>
              </div>
              <div style="font-size: 12px; line-height: 1.6; color: #334155; text-align: justify;">
                <p style="margin: 0 0 8px 0;">- <strong>Điểm Trung bình Học kỳ:</strong> Điểm Trung bình của những học phần sinh viên đã học trong một học kỳ.</p>
                <p style="margin: 0 0 8px 0;">- <strong>Điểm Trung bình Năm học</strong> (áp dụng tính điểm các học kỳ chính gồm: HK 1A, 1B, 2A, 2B và không tính HK hè): Điểm Trung bình của những học phần sinh viên đã học trong một năm học.</p>
                <p style="margin: 0;">- <strong>Điểm Trung bình Tích lũy:</strong> Điểm Trung bình của những học phần sinh viên đã học tính từ đầu khóa học.</p>
              </div>
            </div>

            <!-- Khung 2: Sinh viên cần đảm bảo -->
            <div class="info-bento-card bento-amber" style="background: linear-gradient(180deg, #fffbeb 0%, #ffffff 100%); border: 1.5px solid #fde68a; border-radius: 14px; padding: 16px; display: flex; flex-direction: column;">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px; border-bottom: 1px solid #fef3c7; padding-bottom: 8px;">
                <span style="font-size: 20px;">🎯</span>
                <h4 style="margin: 0; font-size: 14px; font-weight: 800; color: #b45309;">Sinh viên cần đảm bảo:</h4>
              </div>
              
              <div style="text-align: center; margin-bottom: 12px;">
                <strong style="color: #b91c1c; font-size: 12.5px; background: #fee2e2; border: 1px solid #fecdd3; padding: 6px 10px; border-radius: 8px; display: block; line-height: 1.4; text-align: center;">
                  Điểm Trung bình học kỳ, Điểm Trung bình năm học và Điểm Trung bình tích lũy ≥ 2.00 (theo thang điểm hệ 4)
                </strong>
              </div>

              <div style="font-size: 12px; line-height: 1.6; color: #334155; text-align: justify; display: flex; flex-direction: column; gap: 8px;">
                <div>
                  <strong style="color: #b45309;">1. NỖ LỰC HỌC TẬP:</strong> Bạn cần nỗ lực, chuyên cần học tập để cải thiện kết quả ngay từ HK 1A/NH 2026-2027.<br>
                  <em>Điểm Trung bình học kỳ / Điểm Trung bình tích lũy ≥ 2.00 (điểm hệ 4)</em>
                </div>
                <div>
                  <strong style="color: #b45309;">2. ĐIỀU KIỆN XÉT TỐT NGHIỆP:</strong> Một trong những điều kiện để Xét tốt nghiệp => SV phải đạt Điểm Trung bình tích lũy ≥ 2.00 (điểm hệ 4)
                </div>
                <div>
                  <strong style="color: #b45309;">3. LIÊN HỆ HỖ TRỢ NGAY!</strong> Trường hợp cần tư vấn và hỗ trợ về việc Học cải thiện nhằm đạt kết quả học tập theo Quy định, bạn liên hệ ngay Trung tâm Hỗ trợ học vụ để được tư vấn và hỗ trợ ngay nhé!
                </div>
              </div>
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
          
          <div class="infographic-placeholder-card" style="background: linear-gradient(180deg, #fffbeb 0%, #ffffff 100%); border: 2px dashed #f59e0b;">
            <div class="placeholder-icon-wrap" style="background: #fef3c7; border-color: #fde68a;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 42px; height: 42px; color: #d97706;">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <h4 class="placeholder-title" style="color: #b45309;">VIII. ĐIỀU KIỆN DUY TRÌ HỌC BỔNG TUYỂN SINH</h4>
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
          
          <div class="info-stat-strip" style="margin-bottom: 16px;">
            <div class="stat-pill-box" style="background: #f0fdf4; border: 1.5px solid #86efac;">
              <div class="stat-value" style="color: #15803d;">100% MIỄN PHÍ</div>
              <div class="stat-label">Hỗ trợ tối đa sinh viên</div>
            </div>
            <div class="stat-pill-box" style="background: #fef2f2; border: 1.5px solid #fca5a5;">
              <div class="stat-value" style="color: #dc2626;">TRƯỚC 10/10/2026</div>
              <div class="stat-label">Hạn đăng ký (Hết tuần 5 HK 1A)</div>
            </div>
          </div>

          <p style="font-size: 13px; line-height: 1.6; margin-bottom: 12px;">
            Nếu sinh viên học chuyên cần nhưng không theo kịp bài trong quá trình học của HK 1A và cần phụ đạo để củng cố kiến thức, sinh viên có thể đăng ký nguyện vọng học phụ đạo.
          </p>

          <div class="grid-2col">
            <div class="info-bento-card" style="background: linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%); border: 1.5px solid #bbf7d0; border-left: 4px solid #059669;">
              <div class="bento-header">
                <span class="bento-icon" style="background: #059669; color: white; border: none;">🎯</span>
                <h4 class="bento-title" style="color: #15803d;">Mục đích Lớp Phụ đạo</h4>
              </div>
              <p class="bento-desc" style="margin-bottom: 6px;">Trung tâm Hỗ trợ học vụ tổ chức lớp học phụ đạo nhằm:</p>
              <ul class="bento-list">
                <li>- Giúp sinh viên nắm vững kiến thức chuyên môn;</li>
                <li>- Hỗ trợ sinh viên đạt kết quả cao hơn trong học tập;</li>
                <li>- Bổ trợ kiến thức trước kỳ thi.</li>
              </ul>
            </div>

            <div class="info-bento-card" style="background: linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%); border: 1.5px solid #bae6fd; border-left: 4px solid #0284c7;">
              <div class="bento-header">
                <span class="bento-icon" style="background: #0284c7; color: white; border: none;">📅</span>
                <h4 class="bento-title" style="color: #0369a1;">Thời gian & Hình thức</h4>
              </div>
              <p class="bento-desc">
                Các lớp phụ đạo dự kiến được tổ chức vào các <strong>tuần học cuối</strong>, trước khi kỳ thi diễn ra và <strong>hoàn toàn miễn phí</strong>.
              </p>
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
          
          <p style="font-size: 13.5px; color: #334155; margin-bottom: 14px;">
            Kết quả học tập được đánh giá sau <strong>từng học kỳ</strong> hoặc sau <strong>từng năm học</strong>, dựa trên kết quả các học phần nằm trong yêu cầu của chương trình đào tạo mà sinh viên đã học và có điểm theo tiêu chí sau đây:
          </p>

          <div class="grid-3col">
            <div class="info-bento-card" style="background: linear-gradient(180deg, #fff1f2 0%, #ffffff 100%); border: 1.5px solid #fecdd3; border-top: 3px solid #dc2626;">
              <div class="bento-header"><span class="bento-icon" style="background: #dc2626; color: white; border: none;">❌</span><h4 class="bento-title" style="color: #b91c1c;">Tín chỉ không đạt</h4></div>
              <p class="bento-desc">- Tổng số tín chỉ của những học phần mà sinh viên không đạt trong một học kỳ, trong một năm học hoặc nợ đọng từ đầu khóa học.</p>
            </div>

            <div class="info-bento-card" style="background: linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%); border: 1.5px solid #bbf7d0; border-top: 3px solid #059669;">
              <div class="bento-header"><span class="bento-icon" style="background: #059669; color: white; border: none;">✅</span><h4 class="bento-title" style="color: #15803d;">Tín chỉ tích lũy</h4></div>
              <p class="bento-desc">- Tổng số tín chỉ của những học phần mà sinh viên đã đạt từ đầu khóa học (số tín chỉ tích lũy), tính cả các học phần được miễn học, được công nhận tín chỉ.</p>
            </div>

            <div class="info-bento-card" style="background: linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%); border: 1.5px solid #bae6fd; border-top: 3px solid #0284c7;">
              <div class="bento-header"><span class="bento-icon" style="background: #0284c7; color: white; border: none;">📊</span><h4 class="bento-title" style="color: #0369a1;">ĐTB học phần</h4></div>
              <p class="bento-desc">- Điểm trung bình của những học phần mà sinh viên đã học trong một học kỳ (điểm trung bình học kỳ), trong một năm học (điểm trung bình năm học) hoặc tính từ đầu khóa học (điểm trung bình tích lũy), tính theo điểm chính thức của học phần và trọng số là số tín chỉ của học phần đó.</p>
            </div>

            <div class="info-bento-card" style="background: linear-gradient(180deg, #fffbeb 0%, #ffffff 100%); border: 1.5px solid #fde68a; border-top: 3px solid #d97706;">
              <div class="bento-header"><span class="bento-icon" style="background: #d97706; color: white; border: none;">⚠️</span><h4 class="bento-title" style="color: #b45309;">ĐTB học kỳ</h4></div>
              <p class="bento-desc">- Điểm trung bình học kỳ dùng để xếp loại học lực sinh viên theo học kỳ và xử lý kết quả học tập (cảnh báo học tập, buộc thôi học).</p>
            </div>

            <div class="info-bento-card" style="background: linear-gradient(180deg, #faf5ff 0%, #ffffff 100%); border: 1.5px solid #e9d5ff; border-top: 3px solid #7c3aed;">
              <div class="bento-header"><span class="bento-icon" style="background: #7c3aed; color: white; border: none;">🏆</span><h4 class="bento-title" style="color: #6d28d9;">ĐTB năm học</h4></div>
              <p class="bento-desc">- Điểm trung bình năm học (chỉ tính học kỳ chính) dùng để xét điều kiện duy trì học bổng tuyển sinh, cấp học bổng tài năng cho sinh viên.</p>
            </div>

            <div class="info-bento-card" style="background: linear-gradient(180deg, #ecfeff 0%, #ffffff 100%); border: 1.5px solid #a5f3fc; border-top: 3px solid #0891b2;">
              <div class="bento-header"><span class="bento-icon" style="background: #0891b2; color: white; border: none;">🎓</span><h4 class="bento-title" style="color: #0e7490;">ĐTB tích lũy toàn khóa</h4></div>
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
          
          <div class="infographic-placeholder-card" style="background: linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%); border: 2px dashed #38bdf8;">
            <div class="placeholder-icon-wrap" style="background: #e0f2fe; border-color: #bae6fd;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 42px; height: 42px; color: #0284c7;">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <h4 class="placeholder-title" style="color: #0369a1;">XI. HƯỚNG DẪN CÁCH TÍNH ĐIỂM</h4>
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
          
          <div class="grid-2col">
            <div class="info-bento-card" style="background: linear-gradient(180deg, #fff1f2 0%, #ffffff 100%); border: 1.5px solid #fecdd3; border-left: 4px solid #dc2626;">
              <div class="bento-header"><span class="bento-icon" style="background: #dc2626; color: white; border: none;">🔁</span><h4 class="bento-title" style="color: #b91c1c;">HỌC LẠI</h4></div>
              <p class="bento-desc"><strong>Đối với học phần bắt buộc hoặc học phần lựa chọn bắt buộc theo ngành, chuyên ngành:</strong><br>
              Sinh viên có điểm tổng kết học phần không đạt bắt buộc phải đăng ký học lại khi học phần đó được tổ chức giảng dạy.</p>
              <p class="bento-desc" style="margin-top: 8px;"><strong>Đối với học phần tự chọn:</strong><br>
              Sinh viên có thể chọn đăng ký học lại chính học phần đó hoặc chọn học các học phần tự chọn khác cùng nhóm để bảo đảm tích lũy đủ số tín chỉ.</p>
            </div>

            <div class="info-bento-card" style="background: linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%); border: 1.5px solid #bbf7d0; border-left: 4px solid #059669;">
              <div class="bento-header"><span class="bento-icon" style="background: #059669; color: white; border: none;">📈</span><h4 class="bento-title" style="color: #15803d;">HỌC CẢI THIỆN</h4></div>
              <p class="bento-desc"><strong>Đối với các học phần bất kỳ đã có kết quả đạt:</strong><br>
              Sinh viên được phép đăng ký học để cải thiện điểm trung bình tích lũy.</p>
              <p class="bento-desc" style="margin-top: 8px;"><strong style="color: #15803d; background: #dcfce7; padding: 2px 6px; border-radius: 4px;">Điểm cao nhất giữa các lần học sẽ được lấy để tính điểm trung bình tích lũy dùng để xếp hạng tốt nghiệp.</strong></p>
            </div>
          </div>

          <div class="info-alert-callout callout-amber" style="margin-top: 16px;">
            <span class="callout-icon">⚠️</span>
            <div class="callout-text">
              <strong style="color: #92400e;">Đối với sinh viên có điểm trung bình tích lũy toàn khóa xuất sắc và giỏi:</strong><br>
              Hạng tốt nghiệp sẽ bị <strong style="color: #b91c1c;">giảm đi một mức</strong> nếu khối lượng của các học phần phải học lại <strong style="color: #b91c1c;">vượt quá 5%</strong> so với tổng số tín chỉ của toàn bộ chương trình.<br><br>
              Khối lượng học tập (tính bằng số tín chỉ) tối đa không vượt quá <strong>3/2 khối lượng trung bình</strong> một học kỳ theo kế hoạch học tập chuẩn.<br><br>
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
          
          <p style="font-size: 13.5px; color: #334155; margin-bottom: 14px;">
            Học cùng lúc hai chương trình đào tạo theo hình thức song bằng hoặc song ngành dành cho sinh viên có đủ điều kiện theo quy định và có nhu cầu đăng ký học thêm một chương trình thứ hai để khi tốt nghiệp được cấp hai văn bằng, hoặc giấy chứng nhận hoàn thành chương trình song ngành.
          </p>

          <div class="info-alert-callout callout-green" style="margin-bottom: 16px;">
            <span class="callout-icon" style="font-size: 24px;">🎁</span>
            <div class="callout-text" style="font-size: 14px;">
              TẠI CHƯƠNG TRÌNH ĐÀO TẠO CỦA NGÀNH HỌC THỨ HAI SINH VIÊN ĐƯỢC:<br>
              <strong style="color: #b91c1c; font-size: 18px; display: inline-block; margin-top: 4px;">MIỄN GIẢM 50% HỌC PHÍ SUỐT KHÓA HỌC!</strong>
            </div>
          </div>

          <p style="font-weight: 800; color: #0f2b52; margin-bottom: 10px;">ƯU ĐIỂM NỔI TRỘI KHI ĐĂNG KÝ HỌC CHƯƠNG TRÌNH</p>

          <div class="grid-2col">
            <div class="info-bento-card" style="background: linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%); border: 1.5px solid #bbf7d0; border-left: 4px solid #059669;">
              <div class="bento-header"><span class="bento-icon" style="background: #059669; color: white; border: none;">🎓</span><h4 class="bento-title" style="color: #15803d;">SONG BẰNG</h4></div>
              <p class="bento-desc">Nhận <strong>2 Bằng tốt nghiệp</strong> cho 2 ngành học tương ứng khi hoàn thành chương trình đào tạo của ngành.</p>
              <p class="bento-desc" style="margin-top: 6px;">Sinh viên chỉ cần học đạt 1 lần tại ngành học thứ 1:</p>
              <ul class="bento-list">
                <li>Học phần giống nhau giữa 2 ngành</li>
                <li>Học phần Thực tập tốt nghiệp</li>
              </ul>
            </div>

            <div class="info-bento-card" style="background: linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%); border: 1.5px solid #bae6fd; border-left: 4px solid #0284c7;">
              <div class="bento-header"><span class="bento-icon" style="background: #0284c7; color: white; border: none;">📜</span><h4 class="bento-title" style="color: #0369a1;">SONG NGÀNH</h4></div>
              <p class="bento-desc">Sinh viên sẽ học và hoàn thành các học phần theo quy định của chương trình đào tạo song ngành.</p>
              <p class="bento-desc" style="margin-top: 6px;">Nhận <strong>1 Bằng tốt nghiệp</strong> cho ngành học thứ 1 và <strong>Giấy chứng nhận</strong> hoàn thành chương trình song ngành (khi hoàn thành các chương trình theo quy định).</p>
            </div>
          </div>

          <div class="grid-2col" style="margin-top: 16px;">
            <div class="info-bento-card" style="background: linear-gradient(180deg, #fffbeb 0%, #ffffff 100%); border: 1.5px solid #fde68a; border-left: 4px solid #d97706;">
              <div class="bento-header"><span class="bento-icon" style="background: #d97706; color: white; border: none;">📋</span><h4 class="bento-title" style="color: #b45309;">ĐIỀU KIỆN ĐỂ HỌC CÙNG LÚC 2 CHƯƠNG TRÌNH</h4></div>
              <ul class="bento-list">
                <li>a) Đăng ký học sớm nhất sau khi đã kết thúc học kỳ thứ nhất năm học đầu tiên;</li>
                <li>b) Điểm trung bình tích lũy xếp loại trung bình trở lên (<strong>≥ 2.00</strong>);</li>
                <li>c) Trong quá trình SV học cùng lúc hai chương trình, nếu điểm trung bình tích lũy của chương trình thứ nhất đạt dưới điểm trung bình hoặc thuộc diện cảnh báo kết quả học tập thì phải dừng học chương trình thứ hai ở học kỳ tiếp theo.</li>
              </ul>
            </div>

            <div class="info-bento-card" style="background: linear-gradient(180deg, #faf5ff 0%, #ffffff 100%); border: 1.5px solid #e9d5ff; border-left: 4px solid #7c3aed;">
              <div class="bento-header"><span class="bento-icon" style="background: #7c3aed; color: white; border: none;">⚖️</span><h4 class="bento-title" style="color: #6d28d9;">QUY ĐỊNH KHI HỌC CÙNG LÚC 2 CHƯƠNG TRÌNH</h4></div>
              <ul class="bento-list">
                <li>a) <strong>THỜI GIAN TỐI ĐA</strong> được phép học đối với SV học cùng lúc hai chương trình là thời gian tối đa quy định cho <strong>CHƯƠNG TRÌNH THỨ NHẤT</strong>;</li>
                <li>b) Khi học chương trình thứ hai, sinh viên được <strong>CÔNG NHẬN KẾT QUẢ</strong> của những học phần có nội dung và khối lượng kiến thức tương đương có trong chương trình thứ nhất;</li>
                <li>c) SV chỉ được xét tốt nghiệp chương trình thứ hai, hoặc xét cấp giấy chứng nhận hoàn thành chương trình song ngành nếu có đủ điều kiện tốt nghiệp ở chương trình thứ nhất.</li>
              </ul>
            </div>
          </div>

          <div class="info-alert-callout callout-blue" style="margin-top: 16px;">
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
          
          <div class="infographic-placeholder-card" style="background: linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%); border: 2px dashed #38bdf8;">
            <div class="placeholder-icon-wrap" style="background: #e0f2fe; border-color: #bae6fd;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 42px; height: 42px; color: #0284c7;">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <h4 class="placeholder-title" style="color: #0369a1;">XIV. HƯỚNG DẪN SỬ DỤNG CỔNG THÔNG TIN QUẢN LÝ ĐÀO TẠO VÀ DỊCH VỤ TRỰC TUYẾN</h4>
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
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
      title: "XV. CẨM NANG HỖ TRỢ HỌC VỤ",
      bgColor: "pastel-amber",
      accentColor: "#d97706",
      content: `
        <div class="topic-detail">
          
          <div class="info-alert-callout callout-blue" style="background: linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%); border: 1.5px solid #bae6fd; box-shadow: 0 4px 12px rgba(2,132,199,0.08);">
            <span class="callout-icon" style="font-size: 28px;">📖</span>
            <div class="callout-text" style="font-size: 14px; line-height: 1.6; color: #0f2b52;">
              <strong>Cẩm nang</strong> là nguồn thông tin hỗ trợ sinh viên tra cứu các quy định, hướng dẫn và nội dung học vụ cần thiết trong quá trình học tập.
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
          
          <!-- Header Banner -->
          <div style="text-align: center; margin-bottom: 24px;">
            <div style="display: inline-flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #0f2b52 0%, #1e3a8a 100%); color: white; padding: 12px 28px; border-radius: 100px; box-shadow: 0 4px 16px rgba(15,43,82,0.25); border: 2px solid #38bdf8;">
              <span style="font-size: 20px; margin-right: 8px;">💡</span>
              <h3 style="margin: 0; font-size: 16px; font-weight: 900; letter-spacing: 0.5px; text-transform: uppercase;">GIẢI PHÁP HỖ TRỢ SINH VIÊN HỌC TẬP</h3>
            </div>
          </div>

          <!-- Main Infographic Grid (2-Column Balanced Master Grid) -->
          <div style="display: flex; flex-direction: column; gap: 20px;">
            
            <!-- ROW 1: Card 1 & Card 2 -->
            <div class="grid-2col" style="gap: 20px; margin: 0;">
              
              <!-- 1. ĐỊNH VỊ BẢN THÂN VÀ XÁC ĐỊNH MỤC TIÊU (Vàng / Cam) -->
              <div style="background: linear-gradient(180deg, #fffbeb 0%, #ffffff 100%); border: 2px solid #f59e0b; border-radius: 18px; padding: 16px; box-shadow: 0 4px 16px rgba(245,158,11,0.1); display: flex; flex-direction: column;">
                <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1.5px solid #fde68a; padding-bottom: 10px; margin-bottom: 12px;">
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; border-radius: 50%; font-size: 16px; font-weight: 900; box-shadow: 0 2px 8px rgba(217,119,6,0.4);">1</span>
                    <h4 style="margin: 0; font-size: 13.5px; font-weight: 900; color: #b45309; text-transform: uppercase; line-height: 1.3;">ĐỊNH VỊ BẢN THÂN VÀ<br>XÁC ĐỊNH MỤC TIÊU</h4>
                  </div>
                  <span style="font-size: 28px;">🎯</span>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 10px; flex: 1;">
                  <!-- Tìm hiểu -->
                  <div style="background: #ffffff; border: 1.5px solid #fde68a; border-radius: 12px; padding: 10px; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
                    <div style="font-weight: 800; font-size: 12px; color: #b45309; margin-bottom: 6px; text-align: center; background: #fef3c7; padding: 3px 6px; border-radius: 6px;">Tìm hiểu</div>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 5px; font-size: 11.5px; color: #334155; text-align: justify;">
                      <li>• Bạn muốn đạt được điều gì trong việc học?</li>
                      <li>• Vì sao bạn muốn đạt được điều đó?</li>
                      <li>• Việc học sẽ giúp ích gì cho bạn?</li>
                    </ul>
                  </div>

                  <!-- Xác định -->
                  <div style="background: #ffffff; border: 1.5px solid #fde68a; border-radius: 12px; padding: 10px; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
                    <div style="font-weight: 800; font-size: 12px; color: #b45309; margin-bottom: 6px; text-align: center; background: #fef3c7; padding: 3px 6px; border-radius: 6px;">Xác định</div>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 5px; font-size: 11.5px; color: #334155; text-align: justify;">
                      <li>• Nhìn lại tình hình học tập hiện tại của bạn: kết quả học tập, môn nào đang học tốt và môn nào đang gặp khó khăn.</li>
                      <li>• Xác định điểm mạnh và điểm yếu của bản thân. Phát huy điểm mạnh, cải thiện điểm yếu.</li>
                    </ul>
                  </div>

                  <!-- Đặt mục tiêu và theo dõi -->
                  <div style="background: #ffffff; border: 1.5px solid #fde68a; border-radius: 12px; padding: 10px; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
                    <div style="font-weight: 800; font-size: 12px; color: #b45309; margin-bottom: 6px; text-align: center; background: #fef3c7; padding: 3px 6px; border-radius: 6px;">Đặt mục tiêu & theo dõi</div>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 5px; font-size: 11.5px; color: #334155; text-align: justify;">
                      <li>• Đặt mục tiêu ngắn hạn cho từng tuần hoặc từng tháng.</li>
                      <li>• Đặt mục tiêu dài hạn trong 3 - 5 năm.</li>
                      <li>• Thường xuyên kiểm tra lại mục tiêu và kết quả đã đạt được để biết mình đang tiến bộ đến đâu và cần thay đổi điều gì.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- 2. TỪNG BƯỚC XÂY DỰNG KỶ LUẬT VÀ Ý THỨC HỌC TẬP (Xanh Lá) -->
              <div style="background: linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%); border: 2px solid #16a34a; border-radius: 18px; padding: 16px; box-shadow: 0 4px 16px rgba(22,163,74,0.1); display: flex; flex-direction: column;">
                <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1.5px solid #bbf7d0; padding-bottom: 10px; margin-bottom: 12px;">
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; background: linear-gradient(135deg, #22c55e 0%, #15803d 100%); color: white; border-radius: 50%; font-size: 16px; font-weight: 900; box-shadow: 0 2px 8px rgba(21,128,61,0.4);">2</span>
                    <h4 style="margin: 0; font-size: 13.5px; font-weight: 900; color: #15803d; text-transform: uppercase; line-height: 1.3;">TỪNG BƯỚC XÂY DỰNG<br>KỶ LUẬT VÀ Ý THỨC HỌC TẬP</h4>
                  </div>
                  <span style="font-size: 28px;">📅⏰</span>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 8px; flex: 1;">
                  <!-- Xây dựng thói quen -->
                  <div style="background: #ffffff; border: 1.5px solid #bbf7d0; border-radius: 12px; padding: 9px; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
                    <div style="font-weight: 800; font-size: 11.5px; color: #15803d; margin-bottom: 5px; text-align: center; background: #dcfce7; padding: 2px 4px; border-radius: 6px;">Xây dựng thói quen</div>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 4px; font-size: 11px; color: #334155; text-align: justify;">
                      <li>- Đi học và thực hiện các công việc đúng giờ.</li>
                      <li>- Chuẩn bị bài và tài liệu trước khi đến lớp.</li>
                      <li>- Dành một khoảng thời gian để học mỗi ngày, thay vì chỉ học khi gần đến ngày thi.</li>
                    </ul>
                  </div>

                  <!-- Quản lý thời gian -->
                  <div style="background: #ffffff; border: 1.5px solid #bbf7d0; border-radius: 12px; padding: 9px; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
                    <div style="font-weight: 800; font-size: 11.5px; color: #15803d; margin-bottom: 5px; text-align: center; background: #dcfce7; padding: 2px 4px; border-radius: 6px;">Quản lý thời gian</div>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 4px; font-size: 11px; color: #334155; text-align: justify;">
                      <li>- Lập Thời gian biểu.</li>
                      <li>- Lập danh sách các việc cần làm.</li>
                      <li>- Sắp xếp thứ tự ưu tiên các công việc, đâu là việc cần tập trung làm ngay, sau đó mới đến công việc ít quan trọng hơn.</li>
                    </ul>
                  </div>

                  <!-- Loại bỏ trì hoãn -->
                  <div style="background: #ffffff; border: 1.5px solid #bbf7d0; border-radius: 12px; padding: 9px; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
                    <div style="font-weight: 800; font-size: 11.5px; color: #15803d; margin-bottom: 5px; text-align: center; background: #dcfce7; padding: 2px 4px; border-radius: 6px;">Loại bỏ trì hoãn</div>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 4px; font-size: 11px; color: #334155; text-align: justify;">
                      <li>- Nếu một công việc quá lớn, hãy chia thành nhiều việc nhỏ để dễ bắt đầu và dễ hoàn thành hơn.</li>
                      <li>- Sau khi hoàn thành một việc nhỏ, bạn có thể tự thưởng cho mình để tạo thêm động lực tiếp tục.</li>
                    </ul>
                  </div>

                  <!-- Môi trường học tập -->
                  <div style="background: #ffffff; border: 1.5px solid #bbf7d0; border-radius: 12px; padding: 9px; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
                    <div style="font-weight: 800; font-size: 11.5px; color: #15803d; margin-bottom: 5px; text-align: center; background: #dcfce7; padding: 2px 4px; border-radius: 6px;">Môi trường học tập</div>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 4px; font-size: 11px; color: #334155; text-align: justify;">
                      <li>- Chuẩn bị một góc học tập phù hợp để bạn có thể tập trung.</li>
                      <li>- Giảm những yếu tố dễ làm bạn mất tập trung khi học, ví dụ: tiếng ồn, điện thoại hoặc các hoạt động không liên quan như lướt mạng xã hội.</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            <!-- ROW 2: Card 3 & Card 4 -->
            <div class="grid-2col" style="gap: 20px; margin: 0;">
              
              <!-- 3. PHƯƠNG PHÁP HỌC TẬP (Hồng / Đỏ) -->
              <div style="background: linear-gradient(180deg, #fff1f2 0%, #ffffff 100%); border: 2px solid #f43f5e; border-radius: 18px; padding: 16px; box-shadow: 0 4px 16px rgba(244,63,94,0.1); display: flex; flex-direction: column;">
                <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1.5px solid #fecdd3; padding-bottom: 10px; margin-bottom: 12px;">
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; background: linear-gradient(135deg, #f43f5e 0%, #e11d48 100%); color: white; border-radius: 50%; font-size: 16px; font-weight: 900; box-shadow: 0 2px 8px rgba(225,29,72,0.4);">3</span>
                    <h4 style="margin: 0; font-size: 13.5px; font-weight: 900; color: #be123c; text-transform: uppercase;">PHƯƠNG PHÁP HỌC TẬP</h4>
                  </div>
                  <span style="font-size: 28px;">📚</span>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(135px, 1fr)); gap: 8px; flex: 1;">
                  <!-- Xây dựng nhóm học tập -->
                  <div style="background: #ffffff; border: 1.5px solid #fecdd3; border-radius: 12px; padding: 9px; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
                    <div style="font-weight: 800; font-size: 11.5px; color: #be123c; margin-bottom: 5px; text-align: center; background: #ffe4e6; padding: 2px 4px; border-radius: 6px;">Xây dựng nhóm học tập</div>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 4px; font-size: 11px; color: #334155; text-align: justify;">
                      <li>- Tìm một người bạn có cùng mục tiêu để cùng học, nhắc nhở và hỗ trợ nhau tiến bộ.</li>
                      <li>- Xây dựng các nhóm / cộng đồng cùng học tập.</li>
                      <li>- Tham gia các câu lạc bộ học thuật.</li>
                    </ul>
                  </div>

                  <!-- Quản lý học tập -->
                  <div style="background: #ffffff; border: 1.5px solid #fecdd3; border-radius: 12px; padding: 9px; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
                    <div style="font-weight: 800; font-size: 11.5px; color: #be123c; margin-bottom: 5px; text-align: center; background: #ffe4e6; padding: 2px 4px; border-radius: 6px;">Quản lý học tập</div>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 4px; font-size: 11px; color: #334155; text-align: justify;">
                      <li>- Lập kế hoạch học tập, theo dõi và đánh giá việc thực hiện.</li>
                      <li>- Biến một mục tiêu chung thành những việc cụ thể.</li>
                    </ul>
                  </div>

                  <!-- Hiểu sâu bài học -->
                  <div style="background: #ffffff; border: 1.5px solid #fecdd3; border-radius: 12px; padding: 9px; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
                    <div style="font-weight: 800; font-size: 11.5px; color: #be123c; margin-bottom: 5px; text-align: center; background: #ffe4e6; padding: 2px 4px; border-radius: 6px;">Hiểu sâu bài học</div>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 4px; font-size: 11px; color: #334155; text-align: justify;">
                      <li>- Giải thích / thuyết trình lại chủ đề vừa học với bạn bè.</li>
                      <li>- Suy nghĩ và nhìn vấn đề từ nhiều góc độ.</li>
                      <li>- Chủ động phát biểu và đặt câu hỏi với giảng viên.</li>
                    </ul>
                  </div>

                  <!-- Quote Callout -->
                  <div style="background: linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%); border: 1.5px dashed #f43f5e; border-radius: 12px; padding: 10px; display: flex; flex-direction: column; justify-content: center; text-align: center;">
                    <strong style="color: #be123c; font-size: 11.5px; line-height: 1.4; display: block; margin-bottom: 4px;">“Hành trình vạn dặm, bắt đầu từ MỘT BƯỚC CHÂN”</strong>
                    <span style="font-size: 10.5px; color: #881337; line-height: 1.3;">Hãy tập trung vào từng hành động nhỏ và cố gắng thực hiện.</span>
                  </div>
                </div>
              </div>

              <!-- 4. SỰ HỖ TRỢ LUÔN DÀNH CHO NHỮNG NGƯỜI BIẾT LÊN TIẾNG TÌM KIẾM NÓ (Tím / Chàm) -->
              <div style="background: linear-gradient(180deg, #faf5ff 0%, #ffffff 100%); border: 2px solid #8b5cf6; border-radius: 18px; padding: 16px; box-shadow: 0 4px 16px rgba(139,92,246,0.1); display: flex; flex-direction: column;">
                <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1.5px solid #e9d5ff; padding-bottom: 10px; margin-bottom: 12px;">
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%); color: white; border-radius: 50%; font-size: 16px; font-weight: 900; box-shadow: 0 2px 8px rgba(109,40,217,0.4);">4</span>
                    <h4 style="margin: 0; font-size: 13.5px; font-weight: 900; color: #6d28d9; line-height: 1.3;">“Sự hỗ trợ luôn dành cho những người biết lên tiếng tìm kiếm nó”</h4>
                  </div>
                  <span style="font-size: 28px;">🎧💬</span>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; flex: 1;">
                  <!-- Khi nào cần tìm hỗ trợ -->
                  <div style="background: #ffffff; border: 1.5px solid #e9d5ff; border-radius: 12px; padding: 12px; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
                    <div style="font-weight: 800; font-size: 12px; color: #6d28d9; margin-bottom: 6px; background: #f3e8ff; padding: 3px 6px; border-radius: 6px; text-align: center;">Khi nào cần tìm hỗ trợ?</div>
                    <div style="font-weight: 900; color: #b91c1c; font-size: 13px; margin-bottom: 4px; text-align: center;">- BẤT CỨ KHI NÀO!</div>
                    <p style="font-size: 11.5px; color: #334155; line-height: 1.45; margin: 0; text-align: justify;">
                      - Không có một quy tắc cố định, việc tìm kiếm sự hỗ trợ không đánh giá bạn, nó cho thấy bạn đang nỗ lực tìm cách giải quyết vấn đề của mình.
                    </p>
                  </div>

                  <!-- Nơi Hỗ trợ -->
                  <div style="background: #ffffff; border: 1.5px solid #e9d5ff; border-radius: 12px; padding: 12px; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
                    <div style="font-weight: 800; font-size: 12px; color: #6d28d9; margin-bottom: 6px; background: #f3e8ff; padding: 3px 6px; border-radius: 6px; text-align: center;">Nơi Hỗ trợ?</div>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 4px; font-size: 11.5px; color: #334155;">
                      <li>• <strong style="color: #0284c7;">Trung tâm Hỗ trợ học vụ.</strong></li>
                      <li>• Khoa, Giảng viên, Giáo viên chủ nhiệm.</li>
                      <li>• Phòng Ban-Đơn vị Nhà Trường.</li>
                      <li>• Gia đình, bạn bè.</li>
                      <li>• ...</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            <!-- ROW 3: Card 5 & Card 6 -->
            <div class="grid-2col" style="gap: 20px; margin: 0;">
              
              <!-- 5. CHĂM SÓC SỨC KHỎE TINH THẦN (Xanh Dương) -->
              <div style="background: linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%); border: 2px solid #0284c7; border-radius: 18px; padding: 16px; box-shadow: 0 4px 16px rgba(2,132,199,0.1); display: flex; flex-direction: column;">
                <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1.5px solid #bae6fd; padding-bottom: 10px; margin-bottom: 12px;">
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); color: white; border-radius: 50%; font-size: 16px; font-weight: 900; box-shadow: 0 2px 8px rgba(3,105,161,0.4);">5</span>
                    <h4 style="margin: 0; font-size: 13.5px; font-weight: 900; color: #0369a1; text-transform: uppercase;">CHĂM SÓC SỨC KHỎE TINH THẦN</h4>
                  </div>
                  <span style="font-size: 28px;">💓🍃</span>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; flex: 1;">
                  <!-- Thói quen tinh thần -->
                  <div style="background: #ffffff; border: 1.5px solid #bae6fd; border-radius: 12px; padding: 12px; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 6px; font-size: 12px; color: #334155;">
                      <li>• <strong>Quản lý stress:</strong> Nhận diện, thư giãn.</li>
                      <li>• <strong>Ngủ đủ giấc:</strong> <span style="background:#e0f2fe; color:#0369a1; padding:1px 6px; border-radius:4px; font-weight:700;">7 - 9 tiếng / ngày.</span></li>
                      <li>• <strong>Chăm Vận động:</strong> <span style="background:#e0f2fe; color:#0369a1; padding:1px 6px; border-radius:4px; font-weight:700;">30 phút / ngày.</span></li>
                      <li>• <strong>Đảm bảo Chế độ dinh dưỡng.</strong></li>
                    </ul>
                  </div>

                  <!-- Kênh hỗ trợ tâm lý -->
                  <div style="background: #ffffff; border: 1.5px solid #bae6fd; border-radius: 12px; padding: 12px; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 6px; font-size: 11.5px; color: #334155; text-align: justify;">
                      <li>• <strong>Tìm hiểu thêm về Sức khỏe tinh thần</strong> (UEF tổ chức rất nhiều hoạt động, sự kiện về chủ đề này).</li>
                      <li>• <strong>Liên hệ Trung tâm Tham vấn tâm lý và Hỗ trợ pháp luật</strong> nếu cần hỗ trợ về sức khỏe tinh thần.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- 6. THEO DÕI TIẾN ĐỘ HẰNG NGÀY (Xanh Ngọc / Teal) -->
              <div style="background: linear-gradient(180deg, #ecfeff 0%, #ffffff 100%); border: 2px solid #0891b2; border-radius: 18px; padding: 16px; box-shadow: 0 4px 16px rgba(8,145,178,0.1); display: flex; flex-direction: column;">
                <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1.5px solid #a5f3fc; padding-bottom: 10px; margin-bottom: 12px;">
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%); color: white; border-radius: 50%; font-size: 16px; font-weight: 900; box-shadow: 0 2px 8px rgba(14,116,144,0.4);">6</span>
                    <h4 style="margin: 0; font-size: 13.5px; font-weight: 900; color: #0e7490; text-transform: uppercase;">THEO DÕI TIẾN ĐỘ HẰNG NGÀY</h4>
                  </div>
                  <span style="font-size: 28px;">📈</span>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); gap: 8px; flex: 1;">
                  <!-- Ngày -->
                  <div style="background: #ffffff; border: 1.5px solid #a5f3fc; border-radius: 12px; padding: 9px; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
                    <div style="font-weight: 800; font-size: 11.5px; color: #0e7490; margin-bottom: 5px; text-align: center; background: #cffafe; padding: 2px 4px; border-radius: 6px;">🕒 Ngày</div>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 4px; font-size: 11px; color: #334155;">
                      <li>- Thức dậy sớm.</li>
                      <li>- Đi học đúng giờ.</li>
                      <li>- Ngủ đủ giấc.</li>
                      <li>- Học bài & làm bài.</li>
                      <li>- ...</li>
                    </ul>
                  </div>

                  <!-- Tuần -->
                  <div style="background: #ffffff; border: 1.5px solid #a5f3fc; border-radius: 12px; padding: 9px; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
                    <div style="font-weight: 800; font-size: 11.5px; color: #0e7490; margin-bottom: 5px; text-align: center; background: #cffafe; padding: 2px 4px; border-radius: 6px;">⏳ Tuần</div>
                    <p style="font-size: 10.5px; color: #334155; line-height: 1.4; margin: 0; text-align: justify;">
                      <strong>Hãy nhìn lại:</strong> Tiếp tục duy trì những điều đã làm tốt, tìm hiểu nguyên nhân và cải thiện những việc chưa làm tốt.
                    </p>
                  </div>

                  <!-- Mục tiêu -->
                  <div style="background: #ffffff; border: 1.5px solid #a5f3fc; border-radius: 12px; padding: 9px; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
                    <div style="font-weight: 800; font-size: 11.5px; color: #0e7490; margin-bottom: 5px; text-align: center; background: #cffafe; padding: 2px 4px; border-radius: 6px;">📝 Mục tiêu</div>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 4px; font-size: 10.5px; color: #334155; text-align: justify;">
                      <li>- Kiểm tra xem bạn đã tiến được bao nhiêu so với mục tiêu đã đặt ra.</li>
                      <li>- Tìm hiểu nguyên nhân và điều chỉnh phần kế hoạch chưa phù hợp (nếu có).</li>
                    </ul>
                  </div>

                  <!-- Phần thưởng -->
                  <div style="background: #ffffff; border: 1.5px solid #a5f3fc; border-radius: 12px; padding: 9px; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
                    <div style="font-weight: 800; font-size: 11.5px; color: #0e7490; margin-bottom: 5px; text-align: center; background: #cffafe; padding: 2px 4px; border-radius: 6px;">😊 Phần thưởng</div>
                    <p style="font-size: 10.5px; color: #334155; line-height: 1.35; margin: 0; text-align: justify;">
                      Chia mục tiêu lớn thành nhiều mục tiêu nhỏ. Khi hoàn thành một mục tiêu nhỏ, bạn có thể tự thưởng để duy trì động lực.<br>
                      <em>VD: 30 phút chơi game khi đã hoàn thành bài tập.</em>
                    </p>
                  </div>
                </div>
              </div>

            </div>

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
          
          <p style="font-size: 13.5px; color: #334155; margin-bottom: 14px;">
            Giáo viên chủ nhiệm thực hiện lấy ý kiến phản hồi, góp ý của sinh viên về:
          </p>

          <div class="grid-2x2">
            <div class="info-bento-card" style="background: linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%); border: 1.5px solid #bae6fd; border-left: 4px solid #0284c7;">
              <div class="bento-header"><span class="bento-icon" style="background: #0284c7; color: white; border: none;">🏢</span><h4 class="bento-title" style="color: #0369a1;">Cơ sở vật chất</h4></div>
              <p class="bento-desc">Ghi nhận các ý kiến phản ánh về cơ sở vật chất, trang thiết bị học tập.</p>
            </div>

            <div class="info-bento-card" style="background: linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%); border: 1.5px solid #bbf7d0; border-left: 4px solid #059669;">
              <div class="bento-header"><span class="bento-icon" style="background: #059669; color: white; border: none;">📚</span><h4 class="bento-title" style="color: #15803d;">Chương trình đào tạo</h4></div>
              <p class="bento-desc">Ghi nhận ý kiến đóng góp về chương trình và kế hoạch giảng dạy.</p>
            </div>

            <div class="info-bento-card" style="background: linear-gradient(180deg, #faf5ff 0%, #ffffff 100%); border: 1.5px solid #e9d5ff; border-left: 4px solid #7c3aed;">
              <div class="bento-header"><span class="bento-icon" style="background: #7c3aed; color: white; border: none;">❓</span><h4 class="bento-title" style="color: #6d28d9;">Các thắc mắc về học tập, học vụ</h4></div>
              <p class="bento-desc">Tiếp nhận và giải đáp các vướng mắc trong quá trình học vụ.</p>
            </div>

            <div class="info-bento-card" style="background: linear-gradient(180deg, #fff7ed 0%, #ffffff 100%); border: 1.5px solid #fed7aa; border-left: 4px solid #ea580c;">
              <div class="bento-header"><span class="bento-icon" style="background: #ea580c; color: white; border: none;">💬</span><h4 class="bento-title" style="color: #c2410c;">Tình hình học tập; Các nội dung khác nếu có</h4></div>
              <p class="bento-desc">Lắng nghe tâm tư, nguyện vọng và tình hình học tập thực tế của sinh viên.</p>
            </div>
          </div>

          <div class="info-alert-callout callout-green" style="margin-top: 16px;">
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
