/**
 * =========================================================================
 * CẨM NANG HỌC VỤ SINH HOẠT GIÁO VIÊN CHỦ NHIỆM (SHGVCN)
 * Trường Đại học Kinh tế - Tài chính TP.HCM (UEF) - Trung tâm Hỗ trợ học vụ
 * Phiên bản: Học kỳ 1A / Năm học 2026-2027
 * =========================================================================
 */

const SHGVCN_DATA = {
  meta: {
    title: "Thông tin Học vụ Sinh hoạt Giáo viên Chủ nhiệm",
    institution: "TRƯỜNG ĐẠI HỌC KINH TẾ - TÀI CHÍNH TP.HCM (UEF)",
    center: "TRUNG TÂM HỖ TRỢ HỌC VỤ",
    semester: "Học kỳ 1A / Năm học 2026-2027",
    version: "2026.1A",
    lastUpdated: "19/08/2026"
  },

  topics: [
    // -------------------------------------------------------------------------
    // MỤC I: TRUNG TÂM HỖ TRỢ HỌC VỤ
    // -------------------------------------------------------------------------
    {
      id: "trung-tam-ho-tro-hoc-vu",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
      title: "I. Trung tâm hỗ trợ học vụ",
      bgColor: "pastel-blue",
      accentColor: "#0284c7",
      content: `
        <div class="topic-detail">
          
          <div class="grid-2col">
            <!-- Khối 1: Chức năng -->
            <div class="info-bento-card bento-blue">
              <div class="bento-header">
                <span class="bento-icon">🎯</span>
                <h4 class="bento-title">1. Chức năng chính</h4>
              </div>
              <ul class="bento-list">
                <li>Tham mưu, tư vấn cho Ban Giám hiệu về chính sách, chiến lược nâng cao chất lượng hỗ trợ sinh viên trong suốt quá trình học tập tại Trường.</li>
                <li>Là <strong>đầu mối tiếp nhận, điều phối và xử lý</strong> các vấn đề liên quan đến học vụ; cung cấp dịch vụ hành chính học vụ theo cơ chế <strong>"Một cửa"</strong> nhanh chóng, minh bạch và thuận tiện cho người học.</li>
                <li>Tổ chức các hoạt động tư vấn, đồng hành học tập, hỗ trợ nâng cao kết quả học tập và rèn luyện kỹ năng cho sinh viên.</li>
              </ul>
            </div>

            <!-- Khối 2: Nhiệm vụ -->
            <div class="info-bento-card bento-indigo">
              <div class="bento-header">
                <span class="bento-icon">📋</span>
                <h4 class="bento-title">2. Nhiệm vụ trọng tâm</h4>
              </div>
              <ul class="bento-list">
                <li><strong>Cung cấp dịch vụ hành chính học vụ một cửa:</strong> Cấp giấy xác nhận sinh viên, bảng điểm, đơn từ học vụ, chứng nhận hoàn thành khóa học...</li>
                <li><strong>Tư vấn & Hướng dẫn học tập:</strong> Quy chế đào tạo tín chỉ, đăng ký học phần, chuyển ngành/chuyển trường, xét công nhận kết quả học tập.</li>
                <li><strong>Triển khai chương trình hỗ trợ học tập:</strong> Lớp phụ đạo học phần miễn phí, kèm cặp học tập (Peer Tutoring), hội thảo phương pháp học đại học hiệu quả.</li>
                <li><strong>Khảo sát & Lắng nghe ý kiến:</strong> Tiếp nhận phản ánh, đánh giá của sinh viên về công tác giảng dạy, dịch vụ hỗ trợ nhằm cải tiến chất lượng đào tạo liên tục.</li>
              </ul>
            </div>
          </div>

          <!-- Khối 3: Thông tin liên hệ -->
          <div class="callout-box" style="margin-top: 14px;">
            <div class="callout-header">
              <span class="callout-icon">📍</span>
              <span class="callout-title">Thông tin liên hệ Trung tâm Hỗ trợ học vụ:</span>
            </div>
            <div class="callout-body">
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px; font-size: 13px;">
                <div>🏢 <strong>Địa điểm:</strong> Tầng 2, Trụ sở 141 - 145 Điện Biên Phủ, P. Gia Định, TP.HCM</div>
                <div>⏰ <strong>Thời gian:</strong> Thứ 2 - Thứ 6 (07h30 - 16h30); Thứ 7 (07h30 - 11h30)</div>
                <div>📧 <strong>Email:</strong> <a href="mailto:hotrohocvu@uef.edu.vn" style="color: #0284c7; font-weight: 700;">hotrohocvu@uef.edu.vn</a></div>
                <div>📞 <strong>Hotline:</strong> <a href="tel:02822361111" style="color: #b31217; font-weight: 800;">028 2236 1111</a> | <a href="tel:02822351111" style="color: #b31217; font-weight: 800;">028 2235 1111</a></div>
              </div>
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC II: LƯU Ý QUAN TRỌNG
    // -------------------------------------------------------------------------
    {
      id: "thong-tin-luu-y-quan-trong",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 1 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
      title: "II. Lưu ý quan trọng",
      bgColor: "pastel-red",
      accentColor: "#dc2626",
      content: `
        <div class="topic-detail">
          
          <div class="grid-2col">
            <div class="info-bento-card bento-red">
              <div class="bento-header">
                <span class="bento-icon">🪪</span>
                <h4 class="bento-title" style="color: #b91c1c;">1. Đeo thẻ sinh viên khi đến trường</h4>
              </div>
              <ul class="bento-list">
                <li>Sinh viên tham gia thi <strong style="color: #dc2626;">phải xuất trình Thẻ Sinh viên</strong>.</li>
                <li><strong style="color: #b91c1c;">Hội đồng thi sẽ không giải quyết</strong> trường hợp sinh viên không có Thẻ Sinh viên khi tham gia thi.</li>
                <li>Khi sinh viên liên hệ với các Phòng/Viện/Trung tâm của Nhà trường để được hỗ trợ, tư vấn hoặc xử lý các vấn đề học vụ, sinh viên cần xuất trình Thẻ Sinh viên để các đơn vị chức năng xác nhận thông tin.</li>
                <li>Trường hợp quên hoặc mất thẻ, sinh viên liên hệ <strong style="background: #fee2e2; color: #b91c1c; padding: 2px 6px; border-radius: 4px;">Phòng Công tác sinh viên - tầng 6, trụ sở 141 Điện Biên Phủ</strong> để thực hiện cấp Thẻ Sinh viên.</li>
              </ul>
            </div>

            <div class="info-bento-card bento-blue">
              <div class="bento-header">
                <span class="bento-icon">📧</span>
                <h4 class="bento-title" style="color: #0369a1;">2. Thường xuyên kiểm tra email, tin nhắn từ Nhà trường</h4>
              </div>
              <ul class="bento-list">
                <li>Sinh viên cần đăng nhập và sử dụng <strong style="color: #0284c7;">Email UEF</strong>, thường xuyên kiểm tra email và tin nhắn để tiếp nhận các thông tin, thông báo quan trọng về học tập từ: <strong>Trung tâm Hỗ trợ học vụ; Khoa; Các Phòng/Ban chức năng của Nhà trường</strong>.</li>
                <li>Trường hợp cần hỗ trợ về tài khoản Email UEF, sinh viên liên hệ <strong>Phòng Công nghệ thông tin và Chuyển đổi số</strong>:
                  <br>+ Trực tiếp: <span style="background: #e0f2fe; color: #0369a1; padding: 2px 6px; border-radius: 4px; font-weight: 700;">Tầng 4, Trụ sở 141-145 Điện Biên Phủ, TP.HCM</span>
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
    // MỤC III: KẾ HOẠCH HỌC TẬP
    // -------------------------------------------------------------------------
    {
      id: "ke-hoach-hoc-tap",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
      title: "III. Kế hoạch học tập",
      bgColor: "pastel-amber",
      accentColor: "#d97706",
      content: `
        <div class="topic-detail">
          
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
            <span style="display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px; background: #0284c7; color: white; border-radius: 8px; font-weight: 900; font-size: 13px;">1</span>
            <h4 style="font-size: 16px; font-weight: 900; color: #0f2b52; margin: 0;">Năm học 2026-2027</h4>
          </div>

          <div class="info-table-wrap">
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
                  <td style="font-weight: 800; color: #15803d; border-right: 1px solid #bbf7d0;">Khóa 2023 (nhóm 1):</td>
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
              </tbody>
            </table>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC IV: ĐIỀU KIỆN XÉT TỐT NGHIỆP
    // -------------------------------------------------------------------------
    {
      id: "checklist-cac-dieu-kien-xet-tot-nghiep",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
      title: "IV. Điều kiện xét tốt nghiệp",
      bgColor: "pastel-emerald",
      accentColor: "#059669",
      content: `
        <div class="topic-detail">
          
          <div class="info-bento-card bento-green">
            <div class="bento-header">
              <span class="bento-icon">🎓</span>
              <h4 class="bento-title" style="color: #047857;">Danh mục 06 tiêu chuẩn xét công nhận tốt nghiệp đại học chính quy</h4>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px; margin-top: 8px;">
              <div style="background: white; border: 1px solid #a7f3d0; border-radius: 10px; padding: 12px;">
                <div style="font-weight: 800; color: #047857; margin-bottom: 4px;">✅ 1. Tích lũy đủ học phần</div>
                <div style="font-size: 12.5px; color: #475569;">Tích lũy đủ số học phần và số tín chỉ quy định trong Chương trình đào tạo của ngành theo học.</div>
              </div>

              <div style="background: white; border: 1px solid #a7f3d0; border-radius: 10px; padding: 12px;">
                <div style="font-weight: 800; color: #047857; margin-bottom: 4px;">✅ 2. Điểm TBTL đạt chuẩn</div>
                <div style="font-size: 12.5px; color: #475569;">Điểm trung bình tích lũy (ĐTBTL) của toàn khóa học đạt từ <strong>2.00 trở lên</strong> (thang điểm 4).</div>
              </div>

              <div style="background: white; border: 1px solid #a7f3d0; border-radius: 10px; padding: 12px;">
                <div style="font-weight: 800; color: #047857; margin-bottom: 4px;">✅ 3. Chuẩn GDTC & GDQP-AN</div>
                <div style="font-size: 12.5px; color: #475569;">Đạt các học phần Giáo dục thể chất và được cấp Chứng chỉ Giáo dục Quốc phòng - An ninh.</div>
              </div>

              <div style="background: white; border: 1px solid #a7f3d0; border-radius: 10px; padding: 12px;">
                <div style="font-weight: 800; color: #047857; margin-bottom: 4px;">✅ 4. Chuẩn đầu ra Ngoại ngữ & Tin học</div>
                <div style="font-size: 12.5px; color: #475569;">Đạt chứng chỉ chuẩn đầu ra Tiếng Anh và Tin học theo đúng quy định của từng khóa tuyển sinh.</div>
              </div>

              <div style="background: white; border: 1px solid #a7f3d0; border-radius: 10px; padding: 12px;">
                <div style="font-weight: 800; color: #047857; margin-bottom: 4px;">✅ 5. Kỷ luật & Trách nhiệm</div>
                <div style="font-size: 12.5px; color: #475569;">Không đang trong thời gian bị truy cứu trách nhiệm hình sự hoặc bị kỷ luật ở mức đình chỉ học tập.</div>
              </div>

              <div style="background: white; border: 1px solid #a7f3d0; border-radius: 10px; padding: 12px;">
                <div style="font-weight: 800; color: #047857; margin-bottom: 4px;">✅ 6. Hoàn thành nghĩa vụ học phí</div>
                <div style="font-size: 12.5px; color: #475569;">Đã nộp đơn đề nghị xét tốt nghiệp và hoàn thành đầy đủ nghĩa vụ học phí, tài chính với Nhà trường.</div>
              </div>
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC V: CHUẨN ĐẦU RA TIẾNG ANH VÀ TIN HỌC (3 ACCORDION CARDS + MODAL/DOWNLOAD)
    // -------------------------------------------------------------------------
    {
      id: "dieu-kien-chung-chi-tieng-anh-tin-hoc-chuan-dau-ra",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
      title: "V. Chuẩn đầu ra tiếng Anh, tin học",
      bgColor: "pastel-sky",
      accentColor: "#0284c7",
      content: `
        <div class="topic-detail">
          
          <div class="callout-box" style="margin-bottom: 16px;">
            <div class="callout-header">
              <span class="callout-icon">💡</span>
              <span class="callout-title">Hướng dẫn tra cứu:</span>
            </div>
            <div class="callout-body">
              Sinh viên nhấp chọn vào Khóa tuyển sinh tương ứng bên dưới để xem chi tiết bảng chuẩn đầu ra Tiếng Anh và Tin học. Nhấp vào ảnh để <strong>phóng to xem chi tiết</strong> hoặc <strong>tải ảnh về máy</strong>.
            </div>
          </div>

          <!-- Accordion 3 Khóa -->
          <div class="accordion-group">
            
            <!-- Khóa 2023 -->
            <div class="accordion-item active">
              <button type="button" class="accordion-header" onclick="toggleAccordion(this)">
                <div class="acc-title-wrap">
                  <span class="acc-badge" style="background: #0284c7;">K2023</span>
                  <span class="acc-title">Chuẩn đầu ra Tiếng Anh & Tin học - Khóa 2023</span>
                </div>
                <span class="acc-chevron">▼</span>
              </button>
              <div class="accordion-content" style="display: block;">
                <div class="image-preview-container">
                  <img src="../Hinhanh/ChuanDaura/Chuandaura_K2023_19.08.png" alt="Chuẩn đầu ra Khóa 2023" class="zoomable-image" onclick="openImageModal(this.src, 'Chuẩn đầu ra Tiếng Anh & Tin học - Khóa 2023')" />
                  <div class="image-action-bar">
                    <button type="button" class="btn-action-view" onclick="openImageModal('../Hinhanh/ChuanDaura/Chuandaura_K2023_19.08.png', 'Chuẩn đầu ra Tiếng Anh & Tin học - Khóa 2023')">🔍 Phóng to xem</button>
                    <a href="../Hinhanh/ChuanDaura/Chuandaura_K2023_19.08.png" download="Chuandaura_K2023.png" class="btn-action-download">⬇️ Tải ảnh về</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Khóa 2024 -->
            <div class="accordion-item">
              <button type="button" class="accordion-header" onclick="toggleAccordion(this)">
                <div class="acc-title-wrap">
                  <span class="acc-badge" style="background: #10b981;">K2024</span>
                  <span class="acc-title">Chuẩn đầu ra Tiếng Anh & Tin học - Khóa 2024</span>
                </div>
                <span class="acc-chevron">▼</span>
              </button>
              <div class="accordion-content">
                <div class="image-preview-container">
                  <img src="../Hinhanh/ChuanDaura/Chuandaura_K2024_19.08.png" alt="Chuẩn đầu ra Khóa 2024" class="zoomable-image" onclick="openImageModal(this.src, 'Chuẩn đầu ra Tiếng Anh & Tin học - Khóa 2024')" />
                  <div class="image-action-bar">
                    <button type="button" class="btn-action-view" onclick="openImageModal('../Hinhanh/ChuanDaura/Chuandaura_K2024_19.08.png', 'Chuẩn đầu ra Tiếng Anh & Tin học - Khóa 2024')">🔍 Phóng to xem</button>
                    <a href="../Hinhanh/ChuanDaura/Chuandaura_K2024_19.08.png" download="Chuandaura_K2024.png" class="btn-action-download">⬇️ Tải ảnh về</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Khóa 2025 -->
            <div class="accordion-item">
              <button type="button" class="accordion-header" onclick="toggleAccordion(this)">
                <div class="acc-title-wrap">
                  <span class="acc-badge" style="background: #8b5cf6;">K2025</span>
                  <span class="acc-title">Chuẩn đầu ra Tiếng Anh & Tin học - Khóa 2025</span>
                </div>
                <span class="acc-chevron">▼</span>
              </button>
              <div class="accordion-content">
                <div class="image-preview-container">
                  <img src="../Hinhanh/ChuanDaura/Chuandaura_K2025_19.08.png" alt="Chuẩn đầu ra Khóa 2025" class="zoomable-image" onclick="openImageModal(this.src, 'Chuẩn đầu ra Tiếng Anh & Tin học - Khóa 2025')" />
                  <div class="image-action-bar">
                    <button type="button" class="btn-action-view" onclick="openImageModal('../Hinhanh/ChuanDaura/Chuandaura_K2025_19.08.png', 'Chuẩn đầu ra Tiếng Anh & Tin học - Khóa 2025')">🔍 Phóng to xem</button>
                    <a href="../Hinhanh/ChuanDaura/Chuandaura_K2025_19.08.png" download="Chuandaura_K2025.png" class="btn-action-download">⬇️ Tải ảnh về</a>
                  </div>
                </div>
              </div>
            </div>

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
      title: "VI. Tiến độ đào tạo",
      bgColor: "pastel-violet",
      accentColor: "#7c3aed",
      content: `
        <div class="topic-detail">
          
          <div class="info-bento-card bento-purple">
            <div class="bento-header">
              <span class="bento-icon">📊</span>
              <h4 class="bento-title" style="color: #6d28d9;">Quy định về Giới hạn Tín chỉ và Xử lý Học vụ theo Học kỳ</h4>
            </div>
            
            <div class="grid-2col" style="margin-top: 10px;">
              <div style="background: white; border: 1.5px solid #ddd6fe; border-radius: 10px; padding: 12px;">
                <div style="font-weight: 800; color: #6d28d9; margin-bottom: 6px;">📌 Số tín chỉ đăng ký tối thiểu & tối đa:</div>
                <ul class="bento-list">
                  <li><strong>Học kỳ chính:</strong> Tối thiểu <strong>14 tín chỉ</strong> (trừ học kỳ cuối khóa), tối đa <strong>24 tín chỉ</strong>.</li>
                  <li><strong>Sinh viên xếp loại học lực yếu:</strong> Tối thiểu <strong>10 tín chỉ</strong>, tối đa <strong>14 tín chỉ</strong>.</li>
                  <li><strong>Học kỳ phụ (hè):</strong> Tối đa <strong>10 tín chỉ</strong>.</li>
                </ul>
              </div>

              <div style="background: white; border: 1.5px solid #ddd6fe; border-radius: 10px; padding: 12px;">
                <div style="font-weight: 800; color: #b91c1c; margin-bottom: 6px;">⚠️ Cảnh báo kết quả học tập (Cảnh báo học vụ):</div>
                <ul class="bento-list">
                  <li>ĐTBHK đạt dưới <strong>0.80</strong> đối với học kỳ đầu tiên của khóa học.</li>
                  <li>ĐTBHK đạt dưới <strong>1.00</strong> đối với các học kỳ tiếp theo.</li>
                  <li>ĐTBTL đạt dưới <strong>1.20</strong> đối với sinh viên năm thứ nhất; dưới <strong>1.40</strong> đối với năm thứ 2; dưới <strong>1.60</strong> đối với năm thứ 3; dưới <strong>1.80</strong> đối với các năm tiếp theo.</li>
                </ul>
              </div>
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
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>`,
      title: "VII. Xếp loại học lực",
      bgColor: "pastel-amber",
      accentColor: "#d97706",
      content: `
        <div class="topic-detail">
          
          <div class="info-table-wrap">
            <table class="info-table" style="font-size: 13px;">
              <thead>
                <tr style="background: linear-gradient(135deg, #0f2b52 0%, #1e3a8a 100%); color: #ffffff;">
                  <th style="padding: 10px 14px; text-align: left;">Xếp loại học lực</th>
                  <th style="padding: 10px 14px; text-align: center;">Thang điểm 4 (ĐTBTL)</th>
                  <th style="padding: 10px 14px; text-align: center;">Thang điểm 10 tương đương</th>
                </tr>
              </thead>
              <tbody>
                <tr style="background: #fefce8; font-weight: 700; color: #854d0e;">
                  <td style="padding: 10px 14px;">🏆 Xuất sắc</td>
                  <td style="padding: 10px 14px; text-align: center;">Từ <strong>3.60 đến 4.00</strong></td>
                  <td style="padding: 10px 14px; text-align: center;">Từ 9.0 đến 10</td>
                </tr>
                <tr style="background: #f0fdf4; font-weight: 700; color: #166534;">
                  <td style="padding: 10px 14px;">🥇 Giỏi</td>
                  <td style="padding: 10px 14px; text-align: center;">Từ <strong>3.20 đến 3.59</strong></td>
                  <td style="padding: 10px 14px; text-align: center;">Từ 8.0 đến 8.9</td>
                </tr>
                <tr style="background: #f0f9ff; font-weight: 700; color: #075985;">
                  <td style="padding: 10px 14px;">🥈 Khá</td>
                  <td style="padding: 10px 14px; text-align: center;">Từ <strong>2.50 đến 3.19</strong></td>
                  <td style="padding: 10px 14px; text-align: center;">Từ 6.5 đến 7.9</td>
                </tr>
                <tr style="background: #ffffff; color: #334155;">
                  <td style="padding: 10px 14px;">🥉 Trung bình</td>
                  <td style="padding: 10px 14px; text-align: center;">Từ <strong>2.00 đến 2.49</strong></td>
                  <td style="padding: 10px 14px; text-align: center;">Từ 5.0 đến 6.4</td>
                </tr>
                <tr style="background: #fff1f2; font-weight: 600; color: #991b1b;">
                  <td style="padding: 10px 14px;">⚠️ Yếu / Kém</td>
                  <td style="padding: 10px 14px; text-align: center;">Dưới <strong>2.00</strong></td>
                  <td style="padding: 10px 14px; text-align: center;">Dưới 5.0</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC VIII: HỌC BỔNG TUYỂN SINH (4 EXPANDABLE CARDS + FAQ)
    // -------------------------------------------------------------------------
    {
      id: "dieu-kien-duy-tri-hoc-bong-tuyen-sinh",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
      title: "VIII. Điều kiện duy trì học bổng tuyển sinh",
      bgColor: "pastel-rose",
      accentColor: "#e11d48",
      content: `
        <div class="topic-detail">
          
          <div class="callout-box" style="margin-bottom: 16px;">
            <div class="callout-header">
              <span class="callout-icon">🎁</span>
              <span class="callout-title">Chính sách duy trì học bổng tuyển sinh UEF:</span>
            </div>
            <div class="callout-body">
              Sinh viên chọn Khóa tuyển sinh của mình bên dưới để xem điều kiện duy trì mức học bổng (Điểm học tập ĐTBNH, Điểm rèn luyện ĐRL, Chứng chỉ Tiếng Anh/Tin học). Nhấp vào ảnh để <strong>phóng to xem chi tiết</strong> hoặc <strong>tải về</strong>.
            </div>
          </div>

          <!-- Accordion 4 Thẻ -->
          <div class="accordion-group">
            
            <!-- Khóa 2024 -->
            <div class="accordion-item active">
              <button type="button" class="accordion-header" onclick="toggleAccordion(this)">
                <div class="acc-title-wrap">
                  <span class="acc-badge" style="background: #0284c7;">K2024</span>
                  <span class="acc-title">Điều kiện duy trì Học bổng tuyển sinh - Khóa 2024</span>
                </div>
                <span class="acc-chevron">▼</span>
              </button>
              <div class="accordion-content" style="display: block;">
                <div class="image-preview-container">
                  <img src="../Hinhanh/HBTS/DK_HBTS_2024.png" alt="HBTS Khóa 2024" class="zoomable-image" onclick="openImageModal(this.src, 'Điều kiện duy trì Học bổng tuyển sinh - Khóa 2024')" />
                  <div class="image-action-bar">
                    <button type="button" class="btn-action-view" onclick="openImageModal('../Hinhanh/HBTS/DK_HBTS_2024.png', 'Điều kiện duy trì Học bổng tuyển sinh - Khóa 2024')">🔍 Phóng to xem</button>
                    <a href="../Hinhanh/HBTS/DK_HBTS_2024.png" download="HBTS_K2024.png" class="btn-action-download">⬇️ Tải ảnh về</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Khóa 2025 -->
            <div class="accordion-item">
              <button type="button" class="accordion-header" onclick="toggleAccordion(this)">
                <div class="acc-title-wrap">
                  <span class="acc-badge" style="background: #10b981;">K2025</span>
                  <span class="acc-title">Điều kiện duy trì Học bổng tuyển sinh - Khóa 2025</span>
                </div>
                <span class="acc-chevron">▼</span>
              </button>
              <div class="accordion-content">
                <div class="image-preview-container">
                  <img src="../Hinhanh/HBTS/DK_HBTS_2025.png" alt="HBTS Khóa 2025" class="zoomable-image" onclick="openImageModal(this.src, 'Điều kiện duy trì Học bổng tuyển sinh - Khóa 2025')" />
                  <div class="image-action-bar">
                    <button type="button" class="btn-action-view" onclick="openImageModal('../Hinhanh/HBTS/DK_HBTS_2025.png', 'Điều kiện duy trì Học bổng tuyển sinh - Khóa 2025')">🔍 Phóng to xem</button>
                    <a href="../Hinhanh/HBTS/DK_HBTS_2025.png" download="HBTS_K2025.png" class="btn-action-download">⬇️ Tải ảnh về</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Khóa 2026 -->
            <div class="accordion-item">
              <button type="button" class="accordion-header" onclick="toggleAccordion(this)">
                <div class="acc-title-wrap">
                  <span class="acc-badge" style="background: #8b5cf6;">K2026</span>
                  <span class="acc-title">Điều kiện duy trì Học bổng tuyển sinh - Khóa 2026</span>
                </div>
                <span class="acc-chevron">▼</span>
              </button>
              <div class="accordion-content">
                <div class="image-preview-container">
                  <img src="../Hinhanh/HBTS/DK_HBTS_2026.png" alt="HBTS Khóa 2026" class="zoomable-image" onclick="openImageModal(this.src, 'Điều kiện duy trì Học bổng tuyển sinh - Khóa 2026')" />
                  <div class="image-action-bar">
                    <button type="button" class="btn-action-view" onclick="openImageModal('../Hinhanh/HBTS/DK_HBTS_2026.png', 'Điều kiện duy trì Học bổng tuyển sinh - Khóa 2026')">🔍 Phóng to xem</button>
                    <a href="../Hinhanh/HBTS/DK_HBTS_2026.png" download="HBTS_K2026.png" class="btn-action-download">⬇️ Tải ảnh về</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Câu hỏi thường gặp FAQ -->
            <div class="accordion-item">
              <button type="button" class="accordion-header" onclick="toggleAccordion(this)">
                <div class="acc-title-wrap">
                  <span class="acc-badge" style="background: #f59e0b;">FAQ</span>
                  <span class="acc-title">Các câu hỏi thường gặp về Học bổng tuyển sinh</span>
                </div>
                <span class="acc-chevron">▼</span>
              </button>
              <div class="accordion-content">
                <div class="image-preview-container">
                  <img src="../Hinhanh/HBTS/Hoi_HBTS.png" alt="FAQ Học bổng tuyển sinh" class="zoomable-image" onclick="openImageModal(this.src, 'Các câu hỏi thường gặp về Học bổng tuyển sinh')" />
                  <div class="image-action-bar">
                    <button type="button" class="btn-action-view" onclick="openImageModal('../Hinhanh/HBTS/Hoi_HBTS.png', 'Các câu hỏi thường gặp về Học bổng tuyển sinh')">🔍 Phóng to xem</button>
                    <a href="../Hinhanh/HBTS/Hoi_HBTS.png" download="FAQ_HBTS.png" class="btn-action-download">⬇️ Tải ảnh về</a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC IX: ĐĂNG KÝ HỌC PHỤ ĐẠO (MIỄN PHÍ)
    // -------------------------------------------------------------------------
    {
      id: "dang-ky-hoc-phu-dao-mien-phi",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
      title: "IX. Đăng ký học phụ đạo (miễn phí)",
      bgColor: "pastel-teal",
      accentColor: "#0d9488",
      content: `
        <div class="topic-detail">
          
          <div class="info-bento-card bento-green" style="margin-bottom: 16px;">
            <div class="bento-header">
              <span class="bento-icon">📚</span>
              <h4 class="bento-title" style="color: #0f766e;">Chương trình Hỗ trợ ôn tập và Phụ đạo học phần miễn phí</h4>
            </div>
            <p style="font-size: 13.5px; color: #334155; line-height: 1.6; margin: 6px 0 0 0;">
              Trung tâm Hỗ trợ học vụ phối hợp cùng các Khoa/Viện tổ chức các lớp phụ đạo kiến thức hoàn toàn <strong>miễn phí 100%</strong> dành cho sinh viên cần củng cố kiến thức trước các kỳ thi kết thúc học phần.
            </p>
          </div>

          <!-- Infographic Phụ đạo -->
          <div class="image-preview-container" style="border: 1.5px solid #99f6e4; border-radius: 12px; overflow: hidden; background: #ffffff;">
            <img src="../Hinhanh/Phudao1/Phudao.png" alt="Hướng dẫn đăng ký phụ đạo" class="zoomable-image" onclick="openImageModal(this.src, 'Hướng dẫn Đăng ký Học phụ đạo miễn phí')" />
            <div class="image-action-bar">
              <button type="button" class="btn-action-view" onclick="openImageModal('../Hinhanh/Phudao1/Phudao.png', 'Hướng dẫn Đăng ký Học phụ đạo miễn phí')">🔍 Phóng to xem chi tiết</button>
              <a href="../Hinhanh/Phudao1/Phudao.png" download="Huong_dan_Phu_dao.png" class="btn-action-download">⬇️ Tải ảnh về máy</a>
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC X: ĐÁNH GIÁ KẾT QUẢ HỌC TẬP
    // -------------------------------------------------------------------------
    {
      id: "danh-gia-ket-qua-hoc-tap-hoc-phan",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
      title: "X. Đánh giá kết quả học tập",
      bgColor: "pastel-blue",
      accentColor: "#0284c7",
      content: `
        <div class="topic-detail">
          
          <div class="grid-2col">
            <div class="info-bento-card bento-blue">
              <div class="bento-header">
                <span class="bento-icon">📝</span>
                <h4 class="bento-title">Đánh giá theo Học phần</h4>
              </div>
              <ul class="bento-list">
                <li>Kết quả học tập học phần được đánh giá dựa trên tổng hợp các điểm thành phần: <strong>Quá trình, Giữa kỳ, Cuối kỳ</strong> theo đúng đề cương chi tiết học phần.</li>
                <li>Thang điểm đánh giá là <strong>Thang điểm 10</strong>, làm tròn đến 01 chữ số thập phân, sau đó quy đổi sang <strong>Điểm chữ</strong> và <strong>Thang điểm 4</strong>.</li>
              </ul>
            </div>

            <div class="info-bento-card bento-indigo">
              <div class="bento-header">
                <span class="bento-icon">📊</span>
                <h4 class="bento-title">Đánh giá theo Học kỳ & Toàn khóa</h4>
              </div>
              <ul class="bento-list">
                <li><strong>Điểm trung bình học kỳ (ĐTBHK):</strong> Đánh giá kết quả học tập của sinh viên trong một học kỳ.</li>
                <li><strong>Điểm trung bình năm học (ĐTBNH):</strong> Đánh giá kết quả trong một năm học, làm căn cứ xét học bổng.</li>
                <li><strong>Điểm trung bình tích lũy (ĐTBTL):</strong> Đánh giá kết quả toàn bộ quá trình học tập tích lũy, làm căn cứ xét tốt nghiệp.</li>
              </ul>
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC XI: HƯỚNG DẪN CÁCH TÍNH ĐIỂM (4 PHẦN VẼ BẰNG CODE + INTERACTIVE CALCULATORS)
    // -------------------------------------------------------------------------
    {
      id: "huong-dan-tinh-diem-trung-binh-tich-luy",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="18"></line><path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M8 18h.01M12 18h.01"></path></svg>`,
      title: "XI. Hướng dẫn cách tính điểm",
      bgColor: "pastel-amber",
      accentColor: "#d97706",
      content: `
        <div class="topic-detail">
          
          <div class="tab-subnav-container">
            <div class="tab-subnav">
              <button type="button" class="subnav-btn active" onclick="switchCalcTab('tab-tkhp', this)">1. Điểm Tổng kết Học phần</button>
              <button type="button" class="subnav-btn" onclick="switchCalcTab('tab-tbhk', this)">2. Điểm TB Học kỳ (TBHK)</button>
              <button type="button" class="subnav-btn" onclick="switchCalcTab('tab-tbnh', this)">3. Điểm TB Năm học (TBNH)</button>
              <button type="button" class="subnav-btn" onclick="switchCalcTab('tab-tbtl', this)">4. Điểm TB Tích lũy (TBTL)</button>
            </div>
          </div>

          <!-- TAB 1: ĐIỂM TỔNG KẾT HỌC PHẦN -->
          <div id="tab-tkhp" class="calc-tab-content active">
            
            <div class="calc-section-card">
              <div class="calc-card-header">
                <span class="calc-badge">Phần 1</span>
                <h3>CÁCH TÍNH ĐIỂM TỔNG KẾT HỌC PHẦN</h3>
              </div>

              <!-- Trọng số 3 thành phần -->
              <div class="tkhp-weight-grid">
                <div class="weight-box box-orange">
                  <div class="weight-percent">30%</div>
                  <div class="weight-label">Điểm Quá trình</div>
                  <div class="weight-sub">
                    • Điểm chuyên cần: <strong>10%</strong><br>
                    • Điểm tham gia hoạt động lớp: <strong>20%</strong>
                  </div>
                </div>

                <div class="weight-box box-purple">
                  <div class="weight-percent">20%</div>
                  <div class="weight-label">Điểm Giữa kỳ</div>
                  <div class="weight-sub">Trọng số kiểm tra giữa kỳ theo đề cương</div>
                </div>

                <div class="weight-box box-amber">
                  <div class="weight-percent">50%</div>
                  <div class="weight-label">Điểm Cuối kỳ</div>
                  <div class="weight-sub">Điểm thi kết thúc học phần (Vắng thi không phép nhận điểm F)</div>
                </div>
              </div>

              <!-- Bảng minh họa quy đổi thang điểm -->
              <div style="margin: 18px 0 12px 0;">
                <h4 style="font-size: 14px; font-weight: 800; color: #0f2b52; margin-bottom: 8px;">📊 Bảng quy đổi Thang điểm 10 sang Thang điểm chữ và Thang điểm 4:</h4>
                <div class="info-table-wrap">
                  <table class="info-table" style="font-size: 12.5px; text-align: center;">
                    <thead>
                      <tr style="background: #0f2b52; color: white;">
                        <th style="padding: 8px;">Xếp loại</th>
                        <th style="padding: 8px;">Thang điểm 10</th>
                        <th style="padding: 8px;">Điểm chữ</th>
                        <th style="padding: 8px;">Thang điểm 4 (Điểm số)</th>
                        <th style="padding: 8px;">Học phần GDTC & GDQP-AN</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style="background: #f0fdf4; font-weight: 700;">
                        <td rowspan="4" style="background: #dcfce7; color: #15803d; vertical-align: middle;">ĐẠT</td>
                        <td>Từ 8.5 đến 10.0</td>
                        <td><span class="grade-pill grade-a">A</span></td>
                        <td><strong>4.0</strong></td>
                        <td rowspan="5" style="vertical-align: middle; background: #fefce8; color: #854d0e; font-size: 11.5px; text-align: left; padding: 10px;">
                          <strong>Chỉ yêu cầu ĐẠT (P):</strong><br>
                          Không tính vào điểm TB học tập.<br>
                          • Từ 5.0 trở lên: <strong>ĐẠT (P)</strong><br>
                          • Dưới 5.0: <strong>KHÔNG ĐẠT (F)</strong>
                        </td>
                      </tr>
                      <tr style="background: #f0f9ff; font-weight: 700;">
                        <td>Từ 7.0 đến 8.4</td>
                        <td><span class="grade-pill grade-b">B</span></td>
                        <td><strong>3.0</strong></td>
                      </tr>
                      <tr style="background: #fffbeb; font-weight: 700;">
                        <td>Từ 5.5 đến 6.9</td>
                        <td><span class="grade-pill grade-c">C</span></td>
                        <td><strong>2.0</strong></td>
                      </tr>
                      <tr style="background: #fdf2f8; font-weight: 700;">
                        <td>Từ 4.0 đến 5.4</td>
                        <td><span class="grade-pill grade-d">D</span></td>
                        <td><strong>1.0</strong></td>
                      </tr>
                      <tr style="background: #fef2f2; font-weight: 700; color: #b91c1c;">
                        <td style="background: #fee2e2;">KHÔNG ĐẠT</td>
                        <td>Từ 0 đến 3.9</td>
                        <td><span class="grade-pill grade-f">F</span></td>
                        <td><strong>0.0</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Ví dụ tính điểm & Làm tròn -->
              <div class="calc-example-box">
                <div class="example-title">💡 Ví dụ thực tế & Quy tắc làm tròn:</div>
                <div style="font-size: 13px; color: #334155; line-height: 1.6;">
                  Sinh viên có điểm môn <strong>Tiếng Anh 1</strong>: Quá trình = <strong>9.4</strong>, Giữa kỳ = <strong>6.3</strong>, Cuối kỳ = <strong>8.7</strong>.<br>
                  Công thức: <code class="math-code">9.4 × 30% + 6.3 × 20% + 8.7 × 50% = 8.43</code><br>
                  • <strong>Quy tắc làm tròn 01 chữ số thập phân:</strong> Kết quả là <strong>8.4x</strong>. Nếu x $\ge$ 5 thì làm tròn lên 8.5; nếu x &lt; 5 thì làm tròn thành <strong>8.4</strong>.<br>
                  ➔ Điểm tổng kết: <strong>8.4</strong> ➔ Quy đổi: <strong>Điểm B (Hệ 4: 3.0 điểm)</strong>.
                </div>
              </div>

              <!-- ỨNG DỤNG TÍNH ĐIỂM THỬ THỰC TẾ -->
              <div class="interactive-calc-wrapper">
                <div class="calc-tool-header">
                  <span class="calc-tool-icon">🧮</span>
                  <div>
                    <h4 style="margin: 0; font-size: 14px; font-weight: 900; color: #0f2b52;">Ứng dụng tự tính thử Điểm Tổng kết Học phần:</h4>
                    <p style="margin: 2px 0 0 0; font-size: 11.5px; color: #64748b;">Nhập điểm thành phần của bạn để hệ thống tự động tính điểm hệ 10, điểm chữ và điểm hệ 4:</p>
                  </div>
                </div>

                <div class="calc-inputs-grid">
                  <div class="input-group">
                    <label>Chuyên cần (10%):</label>
                    <input type="number" id="inp-cc" min="0" max="10" step="0.1" value="10" oninput="calculateTKHP()" />
                  </div>
                  <div class="input-group">
                    <label>Hoạt động lớp (20%):</label>
                    <input type="number" id="inp-hd" min="0" max="10" step="0.1" value="9.0" oninput="calculateTKHP()" />
                  </div>
                  <div class="input-group">
                    <label>Điểm Giữa kỳ (20%):</label>
                    <input type="number" id="inp-gk" min="0" max="10" step="0.1" value="7.5" oninput="calculateTKHP()" />
                  </div>
                  <div class="input-group">
                    <label>Điểm Cuối kỳ (50%):</label>
                    <input type="number" id="inp-ck" min="0" max="10" step="0.1" value="8.0" oninput="calculateTKHP()" />
                  </div>
                </div>

                <div class="calc-result-display" id="res-tkhp-box">
                  <div class="result-item">
                    <div class="res-label">Điểm Thang 10:</div>
                    <div class="res-val" id="res-tkhp-10">8.3</div>
                  </div>
                  <div class="result-item">
                    <div class="res-label">Điểm Chữ:</div>
                    <div class="res-val" id="res-tkhp-char" style="color: #0284c7;">B</div>
                  </div>
                  <div class="result-item">
                    <div class="res-label">Điểm Thang 4:</div>
                    <div class="res-val" id="res-tkhp-4" style="color: #15803d;">3.0</div>
                  </div>
                  <div class="result-item">
                    <div class="res-label">Kết quả:</div>
                    <div class="res-val" id="res-tkhp-status" style="color: #15803d; font-size: 16px;">ĐẠT ✅</div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          <!-- TAB 2: ĐIỂM TRUNG BÌNH HỌC KỲ (TBHK) -->
          <div id="tab-tbhk" class="calc-tab-content">
            <div class="calc-section-card">
              <div class="calc-card-header">
                <span class="calc-badge">Phần 2</span>
                <h3>CÁCH TÍNH ĐIỂM TRUNG BÌNH HỌC KỲ (ĐTBHK)</h3>
              </div>

              <div class="callout-box" style="margin-bottom: 14px;">
                <div class="callout-header">
                  <span class="callout-icon">🎯</span>
                  <span class="callout-title">Vai trò của Điểm Trung bình Học kỳ:</span>
                </div>
                <div class="callout-body">
                  Đánh giá kết quả học tập trong <strong>01 học kỳ</strong> của sinh viên; làm căn cứ xét cảnh báo học vụ, khen thưởng học kỳ hoặc điều chỉnh số tín chỉ được đăng ký ở học kỳ tiếp theo.
                </div>
              </div>

              <!-- Minh họa Bảng điểm Portal vẽ bằng code -->
              <div class="portal-grade-mockup">
                <div class="portal-mockup-header">
                  <span>🏠 Trang chủ &gt; Thông tin &gt; Kết quả học tập Học kỳ 2</span>
                </div>
                <table class="portal-mockup-table">
                  <thead>
                    <tr>
                      <th>Stt</th>
                      <th>Mã MH</th>
                      <th>Nhóm</th>
                      <th style="text-align: left;">Tên môn học</th>
                      <th>Số tín chỉ</th>
                      <th>Điểm TK (4)</th>
                      <th>Điểm TK (C)</th>
                      <th>Kết quả</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>ACC1101</td>
                      <td>B05</td>
                      <td style="text-align: left;">Nguyên lý kế toán</td>
                      <td><strong style="color: #0284c7;">3</strong></td>
                      <td><strong style="color: #b91c1c;">3.0</strong></td>
                      <td>B</td>
                      <td>✔️</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>ENG2103</td>
                      <td>A007</td>
                      <td style="text-align: left;">Tiếng Anh 3</td>
                      <td><strong style="color: #0284c7;">4</strong></td>
                      <td><strong style="color: #b91c1c;">3.0</strong></td>
                      <td>B</td>
                      <td>✔️</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>ENG2104</td>
                      <td>B006</td>
                      <td style="text-align: left;">Tiếng Anh 4</td>
                      <td><strong style="color: #0284c7;">4</strong></td>
                      <td><strong style="color: #b91c1c;">4.0</strong></td>
                      <td>A</td>
                      <td>✔️</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>ITE1201</td>
                      <td>A03</td>
                      <td style="text-align: left;">Tin học đại cương</td>
                      <td><strong style="color: #0284c7;">3</strong></td>
                      <td><strong style="color: #b91c1c;">3.0</strong></td>
                      <td>B</td>
                      <td>✔️</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Công thức tính -->
              <div class="calc-formula-display">
                <div class="formula-title">ĐIỂM TRUNG BÌNH HỌC KỲ</div>
                <div class="formula-math">
                  <div class="formula-fraction">
                    <div class="fraction-top">3.0×3 + 3.0×4 + 4.0×4 + 3.0×3</div>
                    <div class="fraction-bottom">3 + 4 + 4 + 3 (tổng số tín chỉ học kỳ)</div>
                  </div>
                  <div class="formula-equal">=</div>
                  <div class="formula-result">3.29</div>
                </div>
              </div>

              <div class="calc-notes-list">
                <strong>📌 Lưu ý:</strong>
                <ol>
                  <li>Làm tròn đến <strong>02 chữ số thập phân</strong>.</li>
                  <li>Chỉ tính các học phần trong chương trình đào tạo.</li>
                  <li><strong>Không tính</strong> điểm môn Giáo dục thể chất và Giáo dục quốc phòng - an ninh vào ĐTBHK.</li>
                  <li>Trường hợp học phần học lại nhiều lần, phép tính sẽ áp dụng <strong>điểm tổng kết cao nhất</strong> giữa các lần học.</li>
                </ol>
              </div>

              <!-- ỨNG DỤNG TÍNH THỬ TBHK -->
              <div class="interactive-calc-wrapper" style="margin-top: 18px;">
                <div class="calc-tool-header">
                  <span class="calc-tool-icon">🧮</span>
                  <div>
                    <h4 style="margin: 0; font-size: 14px; font-weight: 900; color: #0f2b52;">Ứng dụng tính thử Điểm TB Học kỳ (TBHK):</h4>
                    <p style="margin: 2px 0 0 0; font-size: 11.5px; color: #64748b;">Nhập danh sách môn học kỳ này của bạn để tự động tính điểm:</p>
                  </div>
                </div>

                <div class="dynamic-course-list" id="tbhk-courses-list">
                  <!-- Row 1 -->
                  <div class="course-calc-row">
                    <input type="text" class="c-name" placeholder="Tên môn học 1" value="Môn học 1" />
                    <input type="number" class="c-credits" placeholder="Số TC" value="3" min="1" max="10" oninput="calculateTBHK()" />
                    <select class="c-grade" onchange="calculateTBHK()">
                      <option value="4.0">Điểm A (4.0)</option>
                      <option value="3.0" selected>Điểm B (3.0)</option>
                      <option value="2.0">Điểm C (2.0)</option>
                      <option value="1.0">Điểm D (1.0)</option>
                      <option value="0.0">Điểm F (0.0)</option>
                    </select>
                  </div>
                  <!-- Row 2 -->
                  <div class="course-calc-row">
                    <input type="text" class="c-name" placeholder="Tên môn học 2" value="Môn học 2" />
                    <input type="number" class="c-credits" placeholder="Số TC" value="4" min="1" max="10" oninput="calculateTBHK()" />
                    <select class="c-grade" onchange="calculateTBHK()">
                      <option value="4.0">Điểm A (4.0)</option>
                      <option value="3.0" selected>Điểm B (3.0)</option>
                      <option value="2.0">Điểm C (2.0)</option>
                      <option value="1.0">Điểm D (1.0)</option>
                      <option value="0.0">Điểm F (0.0)</option>
                    </select>
                  </div>
                  <!-- Row 3 -->
                  <div class="course-calc-row">
                    <input type="text" class="c-name" placeholder="Tên môn học 3" value="Môn học 3" />
                    <input type="number" class="c-credits" placeholder="Số TC" value="4" min="1" max="10" oninput="calculateTBHK()" />
                    <select class="c-grade" onchange="calculateTBHK()">
                      <option value="4.0" selected>Điểm A (4.0)</option>
                      <option value="3.0">Điểm B (3.0)</option>
                      <option value="2.0">Điểm C (2.0)</option>
                      <option value="1.0">Điểm D (1.0)</option>
                      <option value="0.0">Điểm F (0.0)</option>
                    </select>
                  </div>
                </div>

                <div style="margin-top: 10px; display: flex; gap: 8px;">
                  <button type="button" class="btn-add-row" onclick="addCourseRow('tbhk-courses-list', calculateTBHK)">➕ Thêm môn học</button>
                  <button type="button" class="btn-clear-row" onclick="removeCourseRow('tbhk-courses-list', calculateTBHK)">➖ Bớt môn học</button>
                </div>

                <div class="calc-result-display" style="margin-top: 12px;">
                  <div class="result-item">
                    <div class="res-label">Tổng số tín chỉ HK:</div>
                    <div class="res-val" id="res-tbhk-credits">11</div>
                  </div>
                  <div class="result-item">
                    <div class="res-label">ĐIỂM TRUNG BÌNH HỌC KỲ:</div>
                    <div class="res-val" id="res-tbhk-gpa" style="color: #b31217; font-size: 24px;">3.36</div>
                  </div>
                  <div class="result-item">
                    <div class="res-label">Xếp loại học kỳ:</div>
                    <div class="res-val" id="res-tbhk-rank" style="color: #15803d;">GIỎI</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          <!-- TAB 3: ĐIỂM TRUNG BÌNH NĂM HỌC (TBNH) -->
          <div id="tab-tbnh" class="calc-tab-content">
            <div class="calc-section-card">
              <div class="calc-card-header">
                <span class="calc-badge">Phần 3</span>
                <h3>CÁCH TÍNH ĐIỂM TRUNG BÌNH NĂM HỌC (ĐTBNH)</h3>
              </div>

              <div class="callout-box" style="margin-bottom: 14px;">
                <div class="callout-header">
                  <span class="callout-icon">🎯</span>
                  <span class="callout-title">Điểm Trung bình Năm học có vai trò:</span>
                </div>
                <div class="callout-body">
                  • <strong>Đánh giá kết quả học tập một NĂM HỌC</strong>.<br>
                  • <strong>Xét điều kiện duy trì Học bổng tuyển sinh</strong> (nếu có).<br>
                  • <strong>Xét Học bổng tài năng hàng năm</strong>.
                </div>
              </div>

              <!-- Công thức tính TBNH -->
              <div class="calc-formula-display">
                <div class="formula-title">ĐIỂM TRUNG BÌNH NĂM HỌC</div>
                <div class="formula-math">
                  <div class="formula-fraction">
                    <div class="fraction-top">[Tổng (Điểm HP × Số TC) HK1] + [Tổng (Điểm HP × Số TC) HK2]</div>
                    <div class="fraction-bottom">Tổng số tín chỉ học trong cả năm học</div>
                  </div>
                  <div class="formula-equal">=</div>
                  <div class="formula-result">3.45</div>
                </div>
              </div>

              <!-- Ứng dụng tính TBNH -->
              <div class="interactive-calc-wrapper" style="margin-top: 18px;">
                <div class="calc-tool-header">
                  <span class="calc-tool-icon">🧮</span>
                  <div>
                    <h4 style="margin: 0; font-size: 14px; font-weight: 900; color: #0f2b52;">Ứng dụng tính nhanh Điểm Trung bình Năm học (TBNH):</h4>
                    <p style="margin: 2px 0 0 0; font-size: 11.5px; color: #64748b;">Nhập số tín chỉ và điểm TB của từng học kỳ trong năm:</p>
                  </div>
                </div>

                <div class="calc-inputs-grid">
                  <div class="input-group">
                    <label>Số TC Học kỳ 1:</label>
                    <input type="number" id="tbnh-tc1" min="1" max="30" value="18" oninput="calculateTBNH()" />
                  </div>
                  <div class="input-group">
                    <label>ĐTB Học kỳ 1 (hệ 4):</label>
                    <input type="number" id="tbnh-gpa1" min="0" max="4" step="0.01" value="3.50" oninput="calculateTBNH()" />
                  </div>
                  <div class="input-group">
                    <label>Số TC Học kỳ 2:</label>
                    <input type="number" id="tbnh-tc2" min="1" max="30" value="14" oninput="calculateTBNH()" />
                  </div>
                  <div class="input-group">
                    <label>ĐTB Học kỳ 2 (hệ 4):</label>
                    <input type="number" id="tbnh-gpa2" min="0" max="4" step="0.01" value="3.29" oninput="calculateTBNH()" />
                  </div>
                </div>

                <div class="calc-result-display" style="margin-top: 12px;">
                  <div class="result-item">
                    <div class="res-label">Tổng tín chỉ cả năm:</div>
                    <div class="res-val" id="res-tbnh-tc">32</div>
                  </div>
                  <div class="result-item">
                    <div class="res-label">ĐIỂM TRUNG BÌNH NĂM HỌC:</div>
                    <div class="res-val" id="res-tbnh-gpa" style="color: #b31217; font-size: 24px;">3.41</div>
                  </div>
                  <div class="result-item">
                    <div class="res-label">Xếp loại năm học:</div>
                    <div class="res-val" id="res-tbnh-rank" style="color: #15803d;">GIỎI</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- TAB 4: ĐIỂM TRUNG BÌNH TÍCH LŨY (TBTL) -->
          <div id="tab-tbtl" class="calc-tab-content">
            <div class="calc-section-card">
              <div class="calc-card-header">
                <span class="calc-badge">Phần 4</span>
                <h3>CÁCH TÍNH ĐIỂM TRUNG BÌNH TÍCH LŨY (ĐTBTL)</h3>
              </div>

              <div class="callout-box" style="margin-bottom: 14px;">
                <div class="callout-header">
                  <span class="callout-icon">🎯</span>
                  <span class="callout-title">Điểm Trung bình Tích lũy có vai trò:</span>
                </div>
                <div class="callout-body">
                  • <strong>Đánh giá kết quả học tập và xếp hạng học lực toàn khóa học</strong> (tính từ học phần đầu tiên đến học phần cuối cùng, tính đến thời điểm xét).<br>
                  • <strong>Xét điều kiện tốt nghiệp</strong> (Yêu cầu ĐTBTL $\ge 2.00$).<br>
                  • <strong>Xếp hạng tốt nghiệp</strong> (Xuất sắc, Giỏi, Khá, Trung bình).
                </div>
              </div>

              <!-- Công thức tính TBTL -->
              <div class="calc-formula-display">
                <div class="formula-title">ĐIỂM TRUNG BÌNH TÍCH LŨY TOÀN KHÓA</div>
                <div class="formula-math">
                  <div class="formula-fraction">
                    <div class="fraction-top">Tổng [Điểm từng HP hệ 4 × Số TC tương ứng] toàn khóa</div>
                    <div class="fraction-bottom">Tổng số tín chỉ tích lũy toàn khóa học</div>
                  </div>
                  <div class="formula-equal">=</div>
                  <div class="formula-result">3.46</div>
                </div>
              </div>

              <div class="calc-notes-list">
                <strong>📌 Nguyên tắc quan trọng:</strong>
                <ol>
                  <li>Làm tròn đến <strong>02 chữ số thập phân</strong>.</li>
                  <li><strong>Không tính điểm GDTC và GDQP-AN</strong> vào điểm tích lũy.</li>
                  <li>Nếu một học phần học nhiều lần (học lại để cải thiện điểm hoặc học lại do rớt), hệ thống sẽ <strong>tự động lấy điểm cao nhất</strong> giữa các lần học để tính vào ĐTBTL.</li>
                </ol>
              </div>

              <!-- Ứng dụng tính TBTL -->
              <div class="interactive-calc-wrapper" style="margin-top: 18px;">
                <div class="calc-tool-header">
                  <span class="calc-tool-icon">🧮</span>
                  <div>
                    <h4 style="margin: 0; font-size: 14px; font-weight: 900; color: #0f2b52;">Ứng dụng tính Điểm Trung bình Tích lũy (TBTL) dự kiến:</h4>
                    <p style="margin: 2px 0 0 0; font-size: 11.5px; color: #64748b;">Nhập dữ liệu tích lũy hiện tại và kỳ sắp tới của bạn:</p>
                  </div>
                </div>

                <div class="calc-inputs-grid">
                  <div class="input-group">
                    <label>Số TC đã tích lũy hiện tại:</label>
                    <input type="number" id="tbtl-tc-old" min="0" max="200" value="65" oninput="calculateTBTL()" />
                  </div>
                  <div class="input-group">
                    <label>ĐTBTL hiện tại (hệ 4):</label>
                    <input type="number" id="tbtl-gpa-old" min="0" max="4" step="0.01" value="3.20" oninput="calculateTBTL()" />
                  </div>
                  <div class="input-group">
                    <label>Số TC học kỳ mới:</label>
                    <input type="number" id="tbtl-tc-new" min="1" max="30" value="15" oninput="calculateTBTL()" />
                  </div>
                  <div class="input-group">
                    <label>ĐTB mục tiêu học kỳ mới:</label>
                    <input type="number" id="tbtl-gpa-new" min="0" max="4" step="0.01" value="3.60" oninput="calculateTBTL()" />
                  </div>
                </div>

                <div class="calc-result-display" style="margin-top: 12px;">
                  <div class="result-item">
                    <div class="res-label">Tổng tín chỉ sau kỳ mới:</div>
                    <div class="res-val" id="res-tbtl-tc">80</div>
                  </div>
                  <div class="result-item">
                    <div class="res-label">ĐTB TÍCH LŨY MỚI DỰ KIẾN:</div>
                    <div class="res-val" id="res-tbtl-gpa" style="color: #15803d; font-size: 24px;">3.28</div>
                  </div>
                  <div class="result-item">
                    <div class="res-label">Xếp hạng tích lũy:</div>
                    <div class="res-val" id="res-tbtl-rank" style="color: #0284c7;">GIỎI</div>
                  </div>
                </div>
              </div>

            </div>
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
      title: "XII. Học lại và học cải thiện",
      bgColor: "pastel-sky",
      accentColor: "#0284c7",
      content: `
        <div class="topic-detail">
          
          <div class="grid-2col">
            <div class="info-bento-card bento-red">
              <div class="bento-header">
                <span class="bento-icon">🔄</span>
                <h4 class="bento-title" style="color: #b91c1c;">1. Học lại (Bắt buộc khi bị điểm F)</h4>
              </div>
              <ul class="bento-list">
                <li>Sinh viên có học phần bắt buộc bị điểm F <strong>phải đăng ký học lại</strong> học phần đó ở các học kỳ tiếp theo cho đến khi đạt điểm D trở lên.</li>
                <li>Đối với học phần tự chọn bị điểm F, sinh viên có thể chọn học lại chính học phần đó hoặc chọn học phần tự chọn khác tương đương trong cùng khối kiến thức.</li>
              </ul>
            </div>

            <div class="info-bento-card bento-blue">
              <div class="bento-header">
                <span class="bento-icon">📈</span>
                <h4 class="bento-title" style="color: #0369a1;">2. Học cải thiện điểm</h4>
              </div>
              <ul class="bento-list">
                <li>Sinh viên đã có điểm đạt (D, C, B) nhưng muốn nâng cao ĐTBTL có thể đăng ký học cải thiện điểm.</li>
                <li>Khi tính điểm tích lũy, hệ thống sẽ tự động ghi nhận <strong>kết quả cao nhất</strong> giữa các lần học.</li>
              </ul>
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC XIII: HỌC SONG BẰNG / SONG NGÀNH
    // -------------------------------------------------------------------------
    {
      id: "dang-ky-chuong-trinh-hoc-song-bang-song-nganh",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
      title: "XIII. Học song bằng/song ngành",
      bgColor: "pastel-indigo",
      accentColor: "#4f46e5",
      content: `
        <div class="topic-detail">
          
          <div class="info-table-wrap">
            <table class="info-table" style="font-size: 13px;">
              <thead>
                <tr style="background: linear-gradient(135deg, #0f2b52 0%, #1e3a8a 100%); color: #ffffff;">
                  <th style="padding: 10px 14px; text-align: left; width: 220px;">Chương trình ĐT</th>
                  <th style="padding: 10px 14px; text-align: left;">Quy định cấp bằng & Giấy chứng nhận tốt nghiệp</th>
                </tr>
              </thead>
              <tbody>
                <tr style="background: #f0fdf4;">
                  <td style="padding: 12px 14px; font-weight: 800; color: #15803d;">🎓 Song bằng</td>
                  <td style="padding: 12px 14px; color: #334155; line-height: 1.5;">
                    Sau khi hoàn thành Chương trình đào tạo và đạt các điều kiện tốt nghiệp của từng ngành thì được Nhà trường <strong>cấp hai bằng tốt nghiệp</strong>.
                  </td>
                </tr>
                <tr style="background: #f0f9ff;">
                  <td style="padding: 12px 14px; font-weight: 800; color: #0369a1;">📜 Song ngành</td>
                  <td style="padding: 12px 14px; color: #334155; line-height: 1.5;">
                    Sau khi hoàn thành chương trình đào tạo và đạt các điều kiện tốt nghiệp của ngành chính thứ nhất thì được Nhà trường <strong>cấp Bằng tốt nghiệp đối với ngành chính thứ nhất</strong>; sau khi hoàn thành các học phần theo quy định của ngành thứ hai thì được Nhà trường <strong>cấp thêm Giấy chứng nhận hoàn thành chương trình đào tạo Song ngành</strong>.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC XIV: HƯỚNG DẪN CỔNG THÔNG TIN ĐÀO TẠO (INTERACTIVE 9 TABS DEMO)
    // -------------------------------------------------------------------------
    {
      id: "huong-dan-su-dung-cong-thong-tin-dao-tao",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
      title: "XIV. Hướng dẫn cổng thông tin đào tạo",
      bgColor: "pastel-sky",
      accentColor: "#0284c7",
      content: `
        <div class="topic-detail">
          
          <div class="callout-box" style="margin-bottom: 16px;">
            <div class="callout-header">
              <span class="callout-icon">🌐</span>
              <span class="callout-title">Cổng thông tin đào tạo UEF: <a href="https://daotao.uef.edu.vn" target="_blank" style="color: #0284c7; text-decoration: underline;">daotao.uef.edu.vn</a></span>
            </div>
            <div class="callout-body">
              Hệ thống quản lý đào tạo trực tuyến dành cho Sinh viên và Phụ huynh. Chọn từng chuyên mục bên dưới để xem chi tiết hướng dẫn và ảnh minh họa thao tác.
            </div>
          </div>

          <!-- Tabs 9 chuyên mục Cổng đào tạo -->
          <div class="tab-subnav-container">
            <div class="tab-subnav">
              <button type="button" class="subnav-btn active" onclick="switchCalcTab('dt-tab1', this)">1. Đăng nhập SV</button>
              <button type="button" class="subnav-btn" onclick="switchCalcTab('dt-tab2', this)">2. Đăng nhập PH</button>
              <button type="button" class="subnav-btn" onclick="switchCalcTab('dt-tab3', this)">3. Đăng ký học phần</button>
              <button type="button" class="subnav-btn" onclick="switchCalcTab('dt-tab4', this)">4. Xem Điểm</button>
              <button type="button" class="subnav-btn" onclick="switchCalcTab('dt-tab5', this)">5. Xem TKB</button>
              <button type="button" class="subnav-btn" onclick="switchCalcTab('dt-tab6', this)">6. Xem Lịch thi</button>
              <button type="button" class="subnav-btn" onclick="switchCalcTab('dt-tab7', this)">7. Xem Điểm danh</button>
              <button type="button" class="subnav-btn" onclick="switchCalcTab('dt-tab8', this)">8. Xem Học phí</button>
              <button type="button" class="subnav-btn" onclick="switchCalcTab('dt-tab9', this)">9. DV Trực tuyến</button>
            </div>
          </div>

          <!-- 1. Đăng nhập SV -->
          <div id="dt-tab1" class="calc-tab-content active">
            <div class="guide-card-wrap">
              <h4 class="guide-title">1. Hướng dẫn Đăng nhập dành cho Sinh viên</h4>
              <p class="guide-desc">Truy cập <strong>daotao.uef.edu.vn</strong> ➔ Chọn Đăng nhập Sinh viên ➔ Sử dụng tài khoản UEF ID.</p>
              <div class="image-preview-container">
                <img src="../Hinhanh/HD_Daotao_2026/HD_Dangnhap_SV.png" alt="Hướng dẫn Đăng nhập SV" class="zoomable-image" onclick="openImageModal(this.src, 'Hướng dẫn Đăng nhập SV - Cổng Đào tạo')" />
                <div class="image-action-bar">
                  <button type="button" class="btn-action-view" onclick="openImageModal('../Hinhanh/HD_Daotao_2026/HD_Dangnhap_SV.png', 'Hướng dẫn Đăng nhập SV - Cổng Đào tạo')">🔍 Phóng to xem</button>
                  <a href="../Hinhanh/HD_Daotao_2026/HD_Dangnhap_SV.png" download="HD_Dangnhap_SV.png" class="btn-action-download">⬇️ Tải ảnh về</a>
                </div>
              </div>
            </div>
          </div>

          <!-- 2. Đăng nhập PH -->
          <div id="dt-tab2" class="calc-tab-content">
            <div class="guide-card-wrap">
              <h4 class="guide-title">2. Hướng dẫn Đăng nhập dành cho Phụ huynh</h4>
              <p class="guide-desc">Phụ huynh truy cập theo dõi tiến độ học tập, điểm danh và học phí của sinh viên.</p>
              <div class="image-preview-container">
                <img src="../Hinhanh/HD_Daotao_2026/HD_Dangnhap_PH.png" alt="Hướng dẫn Đăng nhập PH" class="zoomable-image" onclick="openImageModal(this.src, 'Hướng dẫn Đăng nhập PH - Cổng Đào tạo')" />
                <div class="image-action-bar">
                  <button type="button" class="btn-action-view" onclick="openImageModal('../Hinhanh/HD_Daotao_2026/HD_Dangnhap_PH.png', 'Hướng dẫn Đăng nhập PH - Cổng Đào tạo')">🔍 Phóng to xem</button>
                  <a href="../Hinhanh/HD_Daotao_2026/HD_Dangnhap_PH.png" download="HD_Dangnhap_PH.png" class="btn-action-download">⬇️ Tải ảnh về</a>
                </div>
              </div>
            </div>
          </div>

          <!-- 3. ĐKHP -->
          <div id="dt-tab3" class="calc-tab-content">
            <div class="guide-card-wrap">
              <h4 class="guide-title">3. Hướng dẫn Đăng ký Học phần (ĐKHP)</h4>
              <p class="guide-desc">Chọn học phần theo chương trình đào tạo, đăng ký nhóm lớp, kiểm tra trùng lịch và xác nhận lưu phiếu đăng ký.</p>
              <div class="image-preview-container">
                <img src="../Hinhanh/HD_Daotao_2026/HD_DKHP.png" alt="Hướng dẫn ĐKHP" class="zoomable-image" onclick="openImageModal(this.src, 'Hướng dẫn Đăng ký học phần')" />
                <div class="image-action-bar">
                  <button type="button" class="btn-action-view" onclick="openImageModal('../Hinhanh/HD_Daotao_2026/HD_DKHP.png', 'Hướng dẫn Đăng ký học phần')">🔍 Phóng to xem</button>
                  <a href="../Hinhanh/HD_Daotao_2026/HD_DKHP.png" download="HD_DKHP.png" class="btn-action-download">⬇️ Tải ảnh về</a>
                </div>
              </div>
            </div>
          </div>

          <!-- 4. Xem Điểm -->
          <div id="dt-tab4" class="calc-tab-content">
            <div class="guide-card-wrap">
              <h4 class="guide-title">4. Hướng dẫn Tra cứu Bảng điểm & Kết quả học tập</h4>
              <p class="guide-desc">Xem điểm quá trình, điểm thi kết thúc học phần, điểm trung bình học kỳ và bảng điểm tích lũy toàn khóa.</p>
              <div class="image-preview-container">
                <img src="../Hinhanh/HD_Daotao_2026/HD_XemDiem.png" alt="Hướng dẫn Xem Điểm" class="zoomable-image" onclick="openImageModal(this.src, 'Hướng dẫn Tra cứu Bảng điểm')" />
                <div class="image-action-bar">
                  <button type="button" class="btn-action-view" onclick="openImageModal('../Hinhanh/HD_Daotao_2026/HD_XemDiem.png', 'Hướng dẫn Tra cứu Bảng điểm')">🔍 Phóng to xem</button>
                  <a href="../Hinhanh/HD_Daotao_2026/HD_XemDiem.png" download="HD_XemDiem.png" class="btn-action-download">⬇️ Tải ảnh về</a>
                </div>
              </div>
            </div>
          </div>

          <!-- 5. Xem TKB -->
          <div id="dt-tab5" class="calc-tab-content">
            <div class="guide-card-wrap">
              <h4 class="guide-title">5. Hướng dẫn Xem Thời khóa biểu (TKB)</h4>
              <p class="guide-desc">Tra cứu lịch học theo tuần, phòng học, giảng viên phụ trách và hình thức học tập trực tiếp/trực tuyến.</p>
              <div class="image-preview-container">
                <img src="../Hinhanh/HD_Daotao_2026/HD_XemTKB.png" alt="Hướng dẫn Xem TKB" class="zoomable-image" onclick="openImageModal(this.src, 'Hướng dẫn Xem Thời khóa biểu')" />
                <div class="image-action-bar">
                  <button type="button" class="btn-action-view" onclick="openImageModal('../Hinhanh/HD_Daotao_2026/HD_XemTKB.png', 'Hướng dẫn Xem Thời khóa biểu')">🔍 Phóng to xem</button>
                  <a href="../Hinhanh/HD_Daotao_2026/HD_XemTKB.png" download="HD_XemTKB.png" class="btn-action-download">⬇️ Tải ảnh về</a>
                </div>
              </div>
            </div>
          </div>

          <!-- 6. Xem Lịch thi -->
          <div id="dt-tab6" class="calc-tab-content">
            <div class="guide-card-wrap">
              <h4 class="guide-title">6. Hướng dẫn Tra cứu Lịch thi kết thúc học phần</h4>
              <p class="guide-desc">Xem ngày thi, ca thi, phòng thi và số báo danh dự thi.</p>
              <div class="image-preview-container">
                <img src="../Hinhanh/HD_Daotao_2026/HD_XemLichthi.png" alt="Hướng dẫn Xem Lịch thi" class="zoomable-image" onclick="openImageModal(this.src, 'Hướng dẫn Xem Lịch thi')" />
                <div class="image-action-bar">
                  <button type="button" class="btn-action-view" onclick="openImageModal('../Hinhanh/HD_Daotao_2026/HD_XemLichthi.png', 'Hướng dẫn Xem Lịch thi')">🔍 Phóng to xem</button>
                  <a href="../Hinhanh/HD_Daotao_2026/HD_XemLichthi.png" download="HD_XemLichthi.png" class="btn-action-download">⬇️ Tải ảnh về</a>
                </div>
              </div>
            </div>
          </div>

          <!-- 7. Xem Điểm danh -->
          <div id="dt-tab7" class="calc-tab-content">
            <div class="guide-card-wrap">
              <h4 class="guide-title">7. Hướng dẫn Xem Kết quả Điểm danh & Chuyên cần</h4>
              <p class="guide-desc">Theo dõi số buổi có mặt, vắng có phép, vắng không phép theo từng học phần.</p>
              <div class="image-preview-container">
                <img src="../Hinhanh/HD_Daotao_2026/HD_XemKetquadiemdanh.png" alt="Hướng dẫn Xem Điểm danh" class="zoomable-image" onclick="openImageModal(this.src, 'Hướng dẫn Xem Kết quả điểm danh')" />
                <div class="image-action-bar">
                  <button type="button" class="btn-action-view" onclick="openImageModal('../Hinhanh/HD_Daotao_2026/HD_XemKetquadiemdanh.png', 'Hướng dẫn Xem Kết quả điểm danh')">🔍 Phóng to xem</button>
                  <a href="../Hinhanh/HD_Daotao_2026/HD_XemKetquadiemdanh.png" download="HD_XemKetquadiemdanh.png" class="btn-action-download">⬇️ Tải ảnh về</a>
                </div>
              </div>
            </div>
          </div>

          <!-- 8. Xem Học phí -->
          <div id="dt-tab8" class="calc-tab-content">
            <div class="guide-card-wrap">
              <h4 class="guide-title">8. Hướng dẫn Tra cứu Học phí & Công nợ</h4>
              <p class="guide-desc">Kiểm tra biểu phí học phần đăng ký, số tiền đã đóng và thời hạn nộp học phí.</p>
              <div class="image-preview-container">
                <img src="../Hinhanh/HD_Daotao_2026/HD_Xem_hocphi.png" alt="Hướng dẫn Xem Học phí" class="zoomable-image" onclick="openImageModal(this.src, 'Hướng dẫn Tra cứu Học phí')" />
                <div class="image-action-bar">
                  <button type="button" class="btn-action-view" onclick="openImageModal('../Hinhanh/HD_Daotao_2026/HD_Xem_hocphi.png', 'Hướng dẫn Tra cứu Học phí')">🔍 Phóng to xem</button>
                  <a href="../Hinhanh/HD_Daotao_2026/HD_Xem_hocphi.png" download="HD_Xem_hocphi.png" class="btn-action-download">⬇️ Tải ảnh về</a>
                </div>
              </div>
            </div>
          </div>

          <!-- 9. DV Trực tuyến -->
          <div id="dt-tab9" class="calc-tab-content">
            <div class="guide-card-wrap">
              <h4 class="guide-title">9. Hướng dẫn Đăng ký Dịch vụ trực tuyến</h4>
              <p class="guide-desc">Đăng ký cấp giấy chứng nhận sinh viên, bảng điểm, đơn phúc khảo bài thi trực tuyến.</p>
              <div class="image-preview-container">
                <img src="../Hinhanh/HD_Daotao_2026/HD_DKDichvutructuyen.png" alt="Hướng dẫn DV Trực tuyến" class="zoomable-image" onclick="openImageModal(this.src, 'Hướng dẫn Đăng ký Dịch vụ trực tuyến')" />
                <div class="image-action-bar">
                  <button type="button" class="btn-action-view" onclick="openImageModal('../Hinhanh/HD_Daotao_2026/HD_DKDichvutructuyen.png', 'Hướng dẫn Đăng ký Dịch vụ trực tuyến')">🔍 Phóng to xem</button>
                  <a href="../Hinhanh/HD_Daotao_2026/HD_DKDichvutructuyen.png" download="HD_DKDichvutructuyen.png" class="btn-action-download">⬇️ Tải ảnh về</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC XV: HƯỚNG DẪN ĐĂNG NHẬP UEF ID
    // -------------------------------------------------------------------------
    {
      id: "huong-dan-dang-nhap-uef-id",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
      title: "XV. Hướng dẫn Đăng nhập UEF ID",
      bgColor: "pastel-emerald",
      accentColor: "#059669",
      content: `
        <div class="topic-detail">
          
          <div class="callout-box" style="margin-bottom: 16px;">
            <div class="callout-header">
              <span class="callout-icon">🔑</span>
              <span class="callout-title">UEF ID - Tài khoản đăng nhập một lần (Single Sign-On):</span>
            </div>
            <div class="callout-body">
              Chỉ cần 01 tài khoản UEF ID duy nhất để truy cập toàn bộ hệ sinh thái học tập số của Nhà trường: <strong>Cổng đào tạo, Student Portal, Hệ thống LMS, Thư viện số lib.uef.edu.vn, Office 365, Teams, OneDrive, Google Drive</strong>.
            </div>
          </div>

          <div class="image-preview-container" style="border: 1.5px solid #a7f3d0; border-radius: 12px; overflow: hidden; background: #ffffff;">
            <img src="../Hinhanh/UEF ID/UEF_ID_06.08.2026.png" alt="Hướng dẫn Đăng nhập UEF ID" class="zoomable-image" onclick="openImageModal(this.src, 'Hướng dẫn Đăng nhập Tài khoản UEF ID')" />
            <div class="image-action-bar">
              <button type="button" class="btn-action-view" onclick="openImageModal('../Hinhanh/UEF ID/UEF_ID_06.08.2026.png', 'Hướng dẫn Đăng nhập Tài khoản UEF ID')">🔍 Phóng to xem chi tiết</button>
              <a href="../Hinhanh/UEF ID/UEF_ID_06.08.2026.png" download="Huong_dan_UEF_ID.png" class="btn-action-download">⬇️ Tải ảnh về máy</a>
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC XVI: HƯỚNG DẪN EMAIL SINH VIÊN (KÈM VIDEO CHẤT LƯỢNG CAO)
    // -------------------------------------------------------------------------
    {
      id: "huong-dan-email-sinh-vien",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
      title: "XVI. Hướng dẫn Email",
      bgColor: "pastel-sky",
      accentColor: "#0284c7",
      content: `
        <div class="topic-detail">
          
          <div class="grid-2col" style="margin-bottom: 16px;">
            <div class="info-bento-card bento-blue">
              <div class="bento-header">
                <span class="bento-icon">📧</span>
                <h4 class="bento-title">Quy trình đăng nhập Email sinh viên</h4>
              </div>
              <ul class="bento-list">
                <li><strong>Bước 1:</strong> Truy cập địa chỉ <a href="https://mail.google.com" target="_blank" style="color: #0284c7; font-weight: 700;">mail.google.com</a>.</li>
                <li><strong>Bước 2:</strong> Chọn <strong>Đăng nhập</strong>.</li>
                <li><strong>Bước 3:</strong> Nhập <strong>Tài khoản Email</strong> và <strong>Mật khẩu</strong> được cấp theo thông tin tại Biên nhận hồ sơ.</li>
                <li><strong>Lưu ý:</strong> Đổi mật khẩu ngay lần đầu đăng nhập và thường xuyên kiểm tra hòm thư để không bỏ lỡ thông báo học vụ.</li>
              </ul>
            </div>

            <!-- Infographic Email -->
            <div class="image-preview-container" style="border: 1.5px solid #bae6fd; border-radius: 12px; overflow: hidden; background: #ffffff;">
              <img src="../Hinhanh/Email/Dangnhap_Email_SV.png" alt="Hướng dẫn Email SV" class="zoomable-image" onclick="openImageModal(this.src, 'Hướng dẫn Đăng nhập Email Sinh viên UEF')" />
              <div class="image-action-bar">
                <button type="button" class="btn-action-view" onclick="openImageModal('../Hinhanh/Email/Dangnhap_Email_SV.png', 'Hướng dẫn Đăng nhập Email Sinh viên UEF')">🔍 Phóng to</button>
                <a href="../Hinhanh/Email/Dangnhap_Email_SV.png" download="Dangnhap_Email_SV.png" class="btn-action-download">⬇️ Tải ảnh</a>
              </div>
            </div>
          </div>

          <!-- Video Hướng dẫn 2K -->
          <div class="video-guide-card">
            <div class="video-card-header">
              <span class="video-play-icon">🎬</span>
              <div>
                <h4 style="margin: 0; font-size: 15px; font-weight: 800; color: #0f2b52;">Video Hướng dẫn Đăng nhập Email Sinh viên (Độ nét 2K):</h4>
                <p style="margin: 2px 0 0 0; font-size: 12px; color: #64748b;">Xem video clip hướng dẫn thao tác trực quan từng bước:</p>
              </div>
            </div>
            <div class="video-player-wrapper">
              <video controls preload="metadata" playsinline class="custom-video-player">
                <source src="../Hinhanh/Email/01-email-login-2k-v2.mp4" type="video/mp4">
                Trình duyệt của bạn không hỗ trợ phát video HTML5.
              </video>
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC XVII: HƯỚNG DẪN LMS-UEF (KÈM VIDEO)
    // -------------------------------------------------------------------------
    {
      id: "huong-dan-lms-uef",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
      title: "XVII. Hướng dẫn LMS-UEF",
      bgColor: "pastel-violet",
      accentColor: "#7c3aed",
      content: `
        <div class="topic-detail">
          
          <div class="grid-2col" style="margin-bottom: 16px;">
            <div class="info-bento-card bento-purple">
              <div class="bento-header">
                <span class="bento-icon">💻</span>
                <h4 class="bento-title" style="color: #6d28d9;">Hệ thống học tập trực tuyến LMS UEF</h4>
              </div>
              <ul class="bento-list">
                <li><strong>Bước 1:</strong> Truy cập liên kết: <a href="https://lms.uef.edu.vn" target="_blank" style="color: #6d28d9; font-weight: 700;">lms.uef.edu.vn</a>.</li>
                <li><strong>Bước 2:</strong> Chọn <strong>Đăng nhập</strong> ➔ Chọn <strong>Đăng nhập với UEF ID</strong>.</li>
                <li><strong>Bước 3:</strong> Vào mục <strong>My courses</strong> ở thanh menu bên trái để truy cập vào tất cả các lớp học phần được thêm trong kỳ.</li>
                <li><strong>Bước 4:</strong> Tải tài liệu bài giảng, xem video học tập và nộp bài tập theo yêu cầu của giảng viên.</li>
              </ul>
            </div>

            <!-- Infographic LMS -->
            <div class="image-preview-container" style="border: 1.5px solid #ddd6fe; border-radius: 12px; overflow: hidden; background: #ffffff;">
              <img src="../Hinhanh/LMS-UEF/Dangnhap_LMS_SV.png" alt="Hướng dẫn LMS UEF" class="zoomable-image" onclick="openImageModal(this.src, 'Hướng dẫn Đăng nhập Hệ thống LMS-UEF')" />
              <div class="image-action-bar">
                <button type="button" class="btn-action-view" onclick="openImageModal('../Hinhanh/LMS-UEF/Dangnhap_LMS_SV.png', 'Hướng dẫn Đăng nhập Hệ thống LMS-UEF')">🔍 Phóng to</button>
                <a href="../Hinhanh/LMS-UEF/Dangnhap_LMS_SV.png" download="Dangnhap_LMS_SV.png" class="btn-action-download">⬇️ Tải ảnh</a>
              </div>
            </div>
          </div>

          <!-- Video Hướng dẫn LMS -->
          <div class="video-guide-card">
            <div class="video-card-header">
              <span class="video-play-icon">🎬</span>
              <div>
                <h4 style="margin: 0; font-size: 15px; font-weight: 800; color: #0f2b52;">Video Hướng dẫn Sử dụng Hệ thống LMS-UEF (Độ nét 2K):</h4>
                <p style="margin: 2px 0 0 0; font-size: 12px; color: #64748b;">Xem video clip hướng dẫn truy cập khóa học và học tập trực tuyến:</p>
              </div>
            </div>
            <div class="video-player-wrapper">
              <video controls preload="metadata" playsinline class="custom-video-player">
                <source src="../Hinhanh/LMS-UEF/03-lms-portal-2k-v2.mp4" type="video/mp4">
                Trình duyệt của bạn không hỗ trợ phát video HTML5.
              </video>
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC XVIII: HƯỚNG DẪN PORTAL STUDENT (KÈM VIDEO)
    // -------------------------------------------------------------------------
    {
      id: "huong-dan-portal-student",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
      title: "XVIII. Hướng dẫn Portal Student",
      bgColor: "pastel-rose",
      accentColor: "#e11d48",
      content: `
        <div class="topic-detail">
          
          <div class="grid-2col" style="margin-bottom: 16px;">
            <div class="info-bento-card bento-red">
              <div class="bento-header">
                <span class="bento-icon">👤</span>
                <h4 class="bento-title" style="color: #b91c1c;">Cổng thông tin sinh viên Portal Student</h4>
              </div>
              <ul class="bento-list">
                <li><strong>Bước 1:</strong> Truy cập địa chỉ: <a href="https://student.uef.edu.vn" target="_blank" style="color: #b91c1c; font-weight: 700;">student.uef.edu.vn</a>.</li>
                <li><strong>Bước 2:</strong> Chọn <strong>Đăng nhập bằng UEF ID</strong>.</li>
                <li><strong>Bước 3:</strong> Tra cứu Điểm rèn luyện, đăng ký hoạt động ngoại khóa, đăng ký học bổng và các dịch vụ sinh viên nhanh chóng.</li>
              </ul>
            </div>

            <!-- Infographic Portal Student -->
            <div class="image-preview-container" style="border: 1.5px solid #fecdd3; border-radius: 12px; overflow: hidden; background: #ffffff;">
              <img src="../Hinhanh/Portal Student/Dangnhap_PortalStudent_SV.png" alt="Hướng dẫn Portal Student" class="zoomable-image" onclick="openImageModal(this.src, 'Hướng dẫn Đăng nhập Cổng thông tin Sinh viên Portal Student')" />
              <div class="image-action-bar">
                <button type="button" class="btn-action-view" onclick="openImageModal('../Hinhanh/Portal Student/Dangnhap_PortalStudent_SV.png', 'Hướng dẫn Đăng nhập Cổng thông tin Sinh viên Portal Student')">🔍 Phóng to</button>
                <a href="../Hinhanh/Portal Student/Dangnhap_PortalStudent_SV.png" download="Dangnhap_PortalStudent.png" class="btn-action-download">⬇️ Tải ảnh</a>
              </div>
            </div>
          </div>

          <!-- Video Hướng dẫn Portal Student -->
          <div class="video-guide-card">
            <div class="video-card-header">
              <span class="video-play-icon">🎬</span>
              <div>
                <h4 style="margin: 0; font-size: 15px; font-weight: 800; color: #0f2b52;">Video Hướng dẫn Sử dụng Cổng Thông tin Sinh viên Portal Student (Độ nét 2K):</h4>
                <p style="margin: 2px 0 0 0; font-size: 12px; color: #64748b;">Xem video clip hướng dẫn tra cứu dịch vụ sinh viên trực quan:</p>
              </div>
            </div>
            <div class="video-player-wrapper">
              <video controls preload="metadata" playsinline class="custom-video-player">
                <source src="../Hinhanh/Portal Student/04-portal-student-2k-v2.mp4" type="video/mp4">
                Trình duyệt của bạn không hỗ trợ phát video HTML5.
              </video>
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC XIX: CẨM NANG HỖ TRỢ HỌC VỤ (FLIPBOOK / INTERACTIVE PDF VIEWER)
    // -------------------------------------------------------------------------
    {
      id: "cam-nang-ho-tro-hoc-vu",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
      title: "XIX. Cẩm nang hỗ trợ học vụ",
      bgColor: "pastel-teal",
      accentColor: "#0d9488",
      content: `
        <div class="topic-detail">
          
          <div class="callout-box" style="margin-bottom: 16px;">
            <div class="callout-header">
              <span class="callout-icon">📖</span>
              <span class="callout-title">Ấn phẩm Infographic Cẩm nang Hỗ trợ học vụ:</span>
            </div>
            <div class="callout-body">
              Ấn phẩm tổng hợp toàn bộ quy định học vụ, quy trình xử lý đơn từ, liên hệ các phòng ban dành cho sinh viên UEF. Bạn có thể xem trực tiếp ấn phẩm tương tác bên dưới hoặc tải tệp PDF chất lượng cao về máy.
            </div>
          </div>

          <!-- Flipbook / PDF Interactive Container -->
          <div class="flipbook-wrapper-box">
            <div class="flipbook-top-bar">
              <div style="font-weight: 800; font-size: 13.5px; color: #0f2b52; display: flex; align-items: center; gap: 6px;">
                <span>📘</span> Infographic_CamnangHTHV_05.08.2026.pdf
              </div>
              <div class="flipbook-actions">
                <a href="../Hinhanh/Camnang/Infographic_CamnangHTHV_05.08.2026.pdf" target="_blank" class="btn-pdf-fullscreen">⛶ Mở toàn màn hình</a>
                <a href="../Hinhanh/Camnang/Infographic_CamnangHTHV_05.08.2026.pdf" download="Infographic_CamnangHTHV_UEF.pdf" class="btn-pdf-download">⬇️ Tải file PDF gốc (25MB)</a>
              </div>
            </div>

            <!-- PDF Viewer Iframe with fallback -->
            <div class="pdf-iframe-container">
              <iframe src="../Hinhanh/Camnang/Infographic_CamnangHTHV_05.08.2026.pdf#toolbar=1&navpanes=0&scrollbar=1" width="100%" height="700px" style="border: none; border-radius: 0 0 12px 12px;">
                <p>Trình duyệt của bạn không hỗ trợ xem trực tiếp file PDF. Bạn có thể <a href="../Hinhanh/Camnang/Infographic_CamnangHTHV_05.08.2026.pdf" target="_blank">bấm vào đây để tải và mở file PDF</a>.</p>
              </iframe>
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC XX: PHƯƠNG PHÁP HỌC TẬP HIỆU QUẢ (KÈM BẢNG THÔNG TIN MINH HỌA)
    // -------------------------------------------------------------------------
    {
      id: "mot-so-giai-phap-ho-tro-sinh-vien-hoc-tap-hieu-qua",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`,
      title: "XX. Phương pháp học tập hiệu quả",
      bgColor: "pastel-amber",
      accentColor: "#d97706",
      content: `
        <div class="topic-detail">
          
          <div class="grid-2col" style="margin-bottom: 16px;">
            <div class="info-bento-card bento-blue">
              <div class="bento-header">
                <span class="bento-icon">🧠</span>
                <h4 class="bento-title">1. Phương pháp học tập Đại học tích cực</h4>
              </div>
              <ul class="bento-list">
                <li><strong>Lập kế hoạch tuần:</strong> Xác định rõ mục tiêu điểm số và thời gian tự học cho từng môn học.</li>
                <li><strong>Đọc trước tài liệu:</strong> Nghiên cứu trước slide và đề cương bài giảng trên LMS trước khi đến lớp.</li>
                <li><strong>Ghi chép chủ động:</strong> Sử dụng phương pháp Cornell hoặc sơ đồ tư duy (Mindmap) để ghi nhớ bản chất.</li>
              </ul>
            </div>

            <div class="info-bento-card bento-green">
              <div class="bento-header">
                <span class="bento-icon">🤝</span>
                <h4 class="bento-title" style="color: #047857;">2. Học nhóm & Tham gia Phụ đạo</h4>
              </div>
              <ul class="bento-list">
                <li><strong>Học theo nhóm (Peer Learning):</strong> Trao đổi, thảo luận giải bài tập lớn cùng bạn bè để tăng cường tư duy phản biện.</li>
                <li><strong>Tham gia lớp Phụ đạo miễn phí:</strong> Đăng ký tham gia ngay khi gặp khó khăn về môn học với Trung tâm Hỗ trợ học vụ.</li>
                <li><strong>Chủ động tương tác:</strong> Đặt câu hỏi với Giảng viên và Thầy/Cô Cố vấn học tập (GVCN).</li>
              </ul>
            </div>
          </div>

          <!-- Bảng thông tin Infographic Phương pháp học tập -->
          <div class="image-preview-container" style="border: 1.5px solid #fed7aa; border-radius: 12px; overflow: hidden; background: #ffffff;">
            <img src="../Hinhanh/PP_Hoctap/PP_Bangthongtin_07.07.png" alt="Bảng thông tin Phương pháp học tập" class="zoomable-image" onclick="openImageModal(this.src, 'Bảng thông tin Phương pháp học tập hiệu quả')" />
            <div class="image-action-bar">
              <button type="button" class="btn-action-view" onclick="openImageModal('../Hinhanh/PP_Hoctap/PP_Bangthongtin_07.07.png', 'Bảng thông tin Phương pháp học tập hiệu quả')">🔍 Phóng to xem chi tiết</button>
              <a href="../Hinhanh/PP_Hoctap/PP_Bangthongtin_07.07.png" download="Bang_thong_tin_PP_Hoctap.png" class="btn-action-download">⬇️ Tải ảnh về máy</a>
            </div>
          </div>

        </div>
      `
    },

    // -------------------------------------------------------------------------
    // MỤC XXI: GHI NHẬN PHẢN HỒI, GÓP Ý TỪ SINH VIÊN
    // -------------------------------------------------------------------------
    {
      id: "ghi-nhan-y-kien-phan-hoi-dong-gop-tu-sinh-vien",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
      title: "XXI. Ghi nhận phản hồi, góp ý từ sinh viên",
      bgColor: "pastel-rose",
      accentColor: "#e11d48",
      content: `
        <div class="topic-detail">
          
          <div class="info-bento-card bento-red" style="margin-bottom: 16px;">
            <div class="bento-header">
              <span class="bento-icon">💌</span>
              <h4 class="bento-title" style="color: #b91c1c;">Hòm thư tiếp nhận Ý kiến & Đóng góp của Sinh viên</h4>
            </div>
            <p style="font-size: 13.5px; color: #334155; line-height: 1.6; margin: 6px 0 12px 0;">
              Trung tâm Hỗ trợ học vụ luôn luôn lắng nghe mọi phản ánh, đề xuất và ý kiến đóng góp từ các bạn sinh viên để không ngừng nâng cao chất lượng phục vụ và giảng dạy tại UEF.
            </p>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              <a href="/khaosat/" class="btn-action-view" style="background: #b31217; color: white; border: none; padding: 8px 16px; border-radius: 8px; font-weight: 700; text-decoration: none;">📝 Gửi Khảo sát ý kiến trực tuyến</a>
              <a href="mailto:hotrohocvu@uef.edu.vn" class="btn-action-view" style="background: #0284c7; color: white; border: none; padding: 8px 16px; border-radius: 8px; font-weight: 700; text-decoration: none;">📧 Gửi Email trực tiếp: hotrohocvu@uef.edu.vn</a>
            </div>
          </div>

        </div>
      `
    }
  ]
};

// Export for module or global use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SHGVCN_DATA;
}
