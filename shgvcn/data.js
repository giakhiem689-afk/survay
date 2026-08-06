/**
  * DỮ LIỆU CẨM NANG HỌC VỤ & TRUYỀN THÔNG SINH HOẠT GVCN - UEF
  * Biên soạn trực quan 100% bằng HTML/CSS (Mindmap, Flowchart, Visual Progress Bars, Tables)
  * Loại bỏ hoàn toàn ảnh thô bên ngoài, đảm bảo dữ liệu chuẩn xác và thu hút sinh viên.
  */

const SHGVCN_DATA = {
  topics: [
    {
      id: "luu-y-quan-trong",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 1 1.71 3h16.94a2 2 0 0 1 1.71-3L13.71 3.86a2 2 0 0 1-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
      title: "1. Một số Lưu ý Quan trọng",
      badge: "Bắt buộc tuân thủ",
      badgeClass: "badge-danger",
      bgColor: "pastel-red",
      accentColor: "#dc2626",
      summary: "Quy định đeo thẻ sinh viên, quy chế cảnh báo học tập 6 mức độ nguy cơ, mốc đóng học phí và quy định kỷ luật.",
      content: `
        <div class="topic-detail">
          
          <!-- Notice Banner -->
          <div class="visual-card card-red-accent">
            <div class="card-title-row">
              <span class="icon-bubble red-bubble">🪪</span>
              <h4>1. Quy định Đeo Thẻ Sinh viên UEF khi Đến trường</h4>
            </div>
            <p>Sinh viên bắt buộc phải đeo thẻ sinh viên UEF hợp lệ khi vào cổng trường, tham gia học tập trên lớp, làm bài thi học kỳ và liên hệ giải quyết thủ tục tại các Phòng/Ban/Trung tâm trong trường.</p>
          </div>

          <!-- Mindmap Flowchart Cảnh báo học tập -->
          <div class="visual-section">
            <h3 class="section-title">🚨 2. Sơ đồ 6 Mức độ Cảnh báo Học tập & Mối nguy Buộc thôi học</h3>
            <p class="section-desc">Sinh viên sẽ bị hệ thống tự động đưa vào danh sách cảnh báo học tập nếu Điểm TB tích lũy (GPA) dưới ngưỡng tối thiểu tương ứng với từng năm học:</p>

            <div class="mindmap-ladder">
              <div class="ladder-step step-year1">
                <div class="step-badge">NĂM THỨ NHẤT</div>
                <div class="step-content">
                  <div class="step-metric">GPA &lt; 1.20</div>
                  <p>Cảnh báo học tập mức 1 - Cần đăng ký học lại ngay các môn bị điểm F.</p>
                </div>
              </div>

              <div class="ladder-step step-year2">
                <div class="step-badge">NĂM THỨ HAI</div>
                <div class="step-content">
                  <div class="step-metric">GPA &lt; 1.40</div>
                  <p>Cảnh báo học tập mức 2 - Giới hạn đăng ký tối đa 14 tín chỉ/kỳ.</p>
                </div>
              </div>

              <div class="ladder-step step-year3">
                <div class="step-badge">NĂM THỨ BA</div>
                <div class="step-content">
                  <div class="step-metric">GPA &lt; 1.60</div>
                  <p>Cảnh báo học tập mức 3 - Bắt buộc tư vấn 1-1 với GVCN & Học phụ đạo.</p>
                </div>
              </div>

              <div class="ladder-step step-year4">
                <div class="step-badge">NĂM TỪ THỨ TƯ</div>
                <div class="step-content">
                  <div class="step-metric">GPA &lt; 1.80</div>
                  <p>Nguy cơ không đủ điều kiện xét tốt nghiệp (yêu cầu GPA &ge; 2.00).</p>
                </div>
              </div>

              <div class="ladder-step step-danger">
                <div class="step-badge danger-badge">MỨC NGUY HIỂM CAO NHẤT</div>
                <div class="step-content">
                  <div class="step-metric danger-metric">CẢNH BÁO 2 LẦN LIÊN TIẾP</div>
                  <p><strong>🚨 BUỘC THÔI HỌC:</strong> Theo Quy chế Đào tạo của Bộ GD&ĐT và UEF, sinh viên bị cảnh báo kết quả học tập 2 lần liên tiếp sẽ bị xem xét Buộc thôi học.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Notice Học phí -->
          <div class="visual-card card-amber-accent">
            <div class="card-title-row">
              <span class="icon-bubble amber-bubble">💵</span>
              <h4>3. Quy định Hạn đóng Học phí & Dự thi Học kỳ</h4>
            </div>
            <ul>
              <li>Sinh viên cần hoàn thành học phí đúng thời hạn theo thông báo chính thức từng học kỳ của Nhà trường.</li>
              <li>Sinh viên nợ học phí quá hạn sẽ bị <strong>hủy kết quả đăng ký môn học</strong> và <strong>không được dự thi kết thúc học phần</strong>.</li>
            </ul>
          </div>

        </div>
      `
    },
    {
      id: "ke-hoach-hoc-tap",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
      title: "2. Kế hoạch Học tập Học kỳ",
      badge: "Lịch trình đào tạo",
      badgeClass: "badge-primary",
      bgColor: "pastel-blue",
      accentColor: "#0284c7",
      summary: "Khung thời gian học kỳ chính/phụ, tiến trình đăng ký môn học, rút môn và lịch thi học kỳ.",
      content: `
        <div class="topic-detail">
          
          <h3 class="section-title">📅 Sơ đồ Tiến trình Học kỳ & Đăng ký Môn học</h3>
          <p class="section-desc">Mỗi năm học tại UEF được chia thành các học kỳ đợt A, đợt B và học kỳ hè phụ:</p>

          <!-- Process Timeline Flowchart -->
          <div class="timeline-roadmap">
            <div class="roadmap-node node-blue">
              <div class="node-icon">1</div>
              <div class="node-body">
                <h4>Đợt 1: Đăng ký Theo Lộ trình Chuẩn</h4>
                <p>Hệ thống tự động xếp thời khóa biểu môn học chuẩn cho sinh viên theo khóa.</p>
              </div>
            </div>

            <div class="roadmap-node node-cyan">
              <div class="node-icon">2</div>
              <div class="node-body">
                <h4>Đợt 2: Điều chỉnh & Đăng ký Học vượt</h4>
                <p>Sinh viên tự đăng ký bổ sung các môn học vượt, học cải thiện hoặc đăng ký lại môn F trên <code>daotao.uef.edu.vn</code>.</p>
              </div>
            </div>

            <div class="roadmap-node node-orange">
              <div class="node-icon">3</div>
              <div class="node-body">
                <h4>Rút Môn học (2 Tuần đầu Học kỳ)</h4>
                <p>Sinh viên được rút bớt môn học trong 2 tuần đầu. Môn rút không tính điểm nhưng không được hoàn lại học phí.</p>
              </div>
            </div>

            <div class="roadmap-node node-green">
              <div class="node-icon">4</div>
              <div class="node-body">
                <h4>Thi Kết thúc Học phần & Công bố Điểm</h4>
                <p>Tham gia dự thi thi kết thúc môn và kiểm tra kết quả học tập trên cổng đào tạo cá nhân.</p>
              </div>
            </div>
          </div>

          <!-- Comparison Table -->
          <div class="table-responsive" style="margin-top: 24px;">
            <table class="custom-table">
              <thead>
                <tr>
                  <th>Loại Học kỳ</th>
                  <th>Thời lượng học</th>
                  <th>Số tín chỉ tối đa</th>
                  <th>Mục tiêu chính</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong style="color:#0284c7;">Học kỳ Chính (.1A, .1B, .2A, .2B)</strong></td>
                  <td>10 - 12 tuần</td>
                  <td>20 - 24 tín chỉ</td>
                  <td>Học môn bắt buộc & chuyên ngành theo tiến độ.</td>
                </tr>
                <tr>
                  <td><strong style="color:#ea580c;">Học kỳ Phụ / Hè (.3)</strong></td>
                  <td>5 - 6 tuần</td>
                  <td>12 tín chỉ</td>
                  <td>Học vượt tiến độ, học cải thiện điểm hoặc học lại môn F.</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      `
    },
    {
      id: "chuong-trinh-dao-tao",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
      title: "3. Chương trình Đào tạo",
      badge: "Cấu trúc tín chỉ",
      badgeClass: "badge-info",
      bgColor: "pastel-purple",
      accentColor: "#7c3aed",
      summary: "Phân bổ khối lượng kiến thức đại cương, cơ sở ngành, chuyên ngành, thực tập tốt nghiệp.",
      content: `
        <div class="topic-detail">
          
          <h3 class="section-title">📊 Sơ đồ Phân bổ Khối lượng Kiến thức Chương trình Đào tạo</h3>
          <p class="section-desc">Tổng khối lượng kiến thức chương trình Cử nhân UEF trung bình từ <strong>120 - 135 tín chỉ</strong>:</p>

          <!-- Visual Progress Breakdown Cards -->
          <div class="progress-breakdown-grid">
            
            <div class="breakdown-card card-purple">
              <div class="breakdown-header">
                <span class="breakdown-title">1. Kiến thức Đại cương</span>
                <span class="breakdown-percent">~25% Khối lượng</span>
              </div>
              <div class="progress-bar-track">
                <div class="progress-bar-fill fill-purple" style="width: 25%;"></div>
              </div>
              <p class="breakdown-desc">Bao gồm: Triết học Mác-Lênin, Tư tưởng HCM, Tiếng Anh, Tin học văn phòng, Kỹ năng mềm...</p>
            </div>

            <div class="breakdown-card card-blue">
              <div class="breakdown-header">
                <span class="breakdown-title">2. Kiến thức Cơ sở Ngành</span>
                <span class="breakdown-percent">~35% Khối lượng</span>
              </div>
              <div class="progress-bar-track">
                <div class="progress-bar-fill fill-blue" style="width: 35%;"></div>
              </div>
              <p class="breakdown-desc">Bao gồm các môn kiến thức nền tảng của khối ngành (Kinh tế, Quản trị, Luật, CNTT, Ngôn ngữ...).</p>
            </div>

            <div class="breakdown-card card-green">
              <div class="breakdown-header">
                <span class="breakdown-title">3. Kiến thức Chuyên ngành</span>
                <span class="breakdown-percent">~30% Khối lượng</span>
              </div>
              <div class="progress-bar-track">
                <div class="progress-bar-fill fill-green" style="width: 30%;"></div>
              </div>
              <p class="breakdown-desc">Bao gồm môn chuyên sâu theo từng chuyên ngành hẹp, môn tự chọn và đồ án ứng dụng thực tế.</p>
            </div>

            <div class="breakdown-card card-orange">
              <div class="breakdown-header">
                <span class="breakdown-title">4. Thực tập & Tốt nghiệp</span>
                <span class="breakdown-percent">~10% Khối lượng</span>
              </div>
              <div class="progress-bar-track">
                <div class="progress-bar-fill fill-orange" style="width: 10%;"></div>
              </div>
              <p class="breakdown-desc">Bao gồm Thực tập tốt nghiệp (Internship tại doanh nghiệp) và Khóa luận tốt nghiệp/Đề án thực tế.</p>
            </div>

          </div>

        </div>
      `
    },
    {
      id: "cach-tinh-diem",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="18"></line><path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M8 18h.01M12 18h.01"></path></svg>`,
      title: "4. Cách tính Điểm & Quy đổi GPA",
      badge: "Công thức & Thang điểm",
      badgeClass: "badge-success",
      bgColor: "pastel-green",
      accentColor: "#059669",
      summary: "Tỷ lệ điểm quá trình (30-50%), điểm thi kết thúc môn, quy đổi sang thang chữ A-F và thang điểm 4.0.",
      content: `
        <div class="topic-detail">
          
          <!-- Formula Display Card -->
          <div class="visual-card card-green-accent">
            <div class="card-title-row">
              <span class="icon-bubble green-bubble">🧮</span>
              <h4>Công thức Tính Điểm Học phần (Thang điểm 10)</h4>
            </div>
            <div class="formula-banner">
              Điểm Học Phần = (Điểm Quá Trình × Tỷ lệ %) + (Điểm Thi Kết Thúc × Tỷ lệ %)
            </div>
            <p>Tỷ lệ điểm quá trình dao động từ <strong>30% - 50%</strong> (bao gồm: Điểm danh, Chuyên cần, Bài tập cá nhân, Bài tập nhóm, Kiểm tra giữa kỳ).</p>
          </div>

          <!-- Interactive GPA Calculator Widget Anchor -->
          <div class="interactive-widget-callout">
            <div class="callout-left">
              <h4>💡 Bạn muốn tính thử GPA môn học?</h4>
              <p>Sử dụng ngay <strong>Công cụ Tính điểm & Quy đổi GPA Tương tác</strong> ở phía dưới trang web!</p>
            </div>
            <a href="#gpaCalculatorWidget" class="portal-btn btn-green" style="text-decoration:none;">Dùng Công cụ Tính GPA</a>
          </div>

          <!-- Grade Conversion Table -->
          <h3 class="section-title" style="margin-top: 24px;">📊 Bảng Quy đổi Thang điểm Chữ & Thang điểm 4.0 (GPA)</h3>
          <div class="table-responsive">
            <table class="custom-table">
              <thead>
                <tr>
                  <th>Thang điểm 10</th>
                  <th>Điểm chữ</th>
                  <th>Thang điểm 4 (GPA)</th>
                  <th>Xếp loại kết quả</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>8.5 - 10.0</td><td><strong class="grade-tag grade-a">A</strong></td><td><strong>4.0</strong></td><td><span class="status-badge badge-green">Xuất sắc</span></td></tr>
                <tr><td>8.0 - 8.4</td><td><strong class="grade-tag grade-bplus">B+</strong></td><td><strong>3.5</strong></td><td><span class="status-badge badge-green">Giỏi</span></td></tr>
                <tr><td>7.0 - 7.9</td><td><strong class="grade-tag grade-b">B</strong></td><td><strong>3.0</strong></td><td><span class="status-badge badge-blue">Khá</span></td></tr>
                <tr><td>6.5 - 6.9</td><td><strong class="grade-tag grade-cplus">C+</strong></td><td><strong>2.5</strong></td><td><span class="status-badge badge-orange">Trung bình khá</span></td></tr>
                <tr><td>5.5 - 6.4</td><td><strong class="grade-tag grade-c">C</strong></td><td><strong>2.0</strong></td><td><span class="status-badge badge-orange">Trung bình</span></td></tr>
                <tr><td>5.0 - 5.4</td><td><strong class="grade-tag grade-dplus">D+</strong></td><td><strong>1.5</strong></td><td><span class="status-badge badge-red">Trung bình yếu</span></td></tr>
                <tr><td>4.0 - 4.9</td><td><strong class="grade-tag grade-d">D</strong></td><td><strong>1.0</strong></td><td><span class="status-badge badge-red">Yếu (Đạt)</span></td></tr>
                <tr><td>&lt; 4.0</td><td><strong class="grade-tag grade-f">F</strong></td><td><strong>0.0</strong></td><td><span class="status-badge badge-danger-bold">Kém (Không đạt - Phải học lại)</span></td></tr>
              </tbody>
            </table>
          </div>

        </div>
      `
    },
    {
      id: "duy-tri-hoc-bong",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
      title: "5. Duy trì Học bổng Tuyển sinh",
      badge: "Điều kiện Học bổng",
      badgeClass: "badge-warning",
      bgColor: "pastel-amber",
      accentColor: "#d97706",
      summary: "Tiêu chuẩn xét duy trì học bổng tuyển sinh 25%, 50%, 100% hàng năm về GPA và Điểm rèn luyện.",
      content: `
        <div class="topic-detail">
          
          <h3 class="section-title">🏅 Tiêu chuẩn Xét Duy trì Học bổng Tuyển sinh UEF Hàng năm</h3>
          <p class="section-desc">Sinh viên nhận học bổng tuyển sinh (25%, 50%, 100%) đầu vào cần thỏa mãn đồng thời cả 2 điều kiện về <strong>GPA Tích lũy</strong> và <strong>Điểm Rèn luyện</strong>:</p>

          <!-- Visual Scholarship Cards -->
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
                  <strong>Tích lũy đủ tiến độ</strong>
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
                  <strong>Tích lũy đủ tiến độ</strong>
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
                  <strong>Tích lũy đủ tiến độ</strong>
                </div>
              </div>
            </div>

          </div>

          <div class="alert-box alert-warning" style="margin-top: 20px;">
            <div class="alert-title">⚠️ Lưu ý Quan trọng từ Phòng Hỗ trợ Học vụ:</div>
            <p>Sinh viên nếu không đạt GPA hoặc Điểm rèn luyện ở năm học nào sẽ bị <strong>tạm dừng nhận học bổng</strong> ở năm học đó. Điểm rèn luyện là yếu tố bắt buộc xét duyệt song song với GPA.</p>
          </div>

        </div>
      `
    },
    {
      id: "chuong-chi-chuan-dau-ra",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
      title: "6. Chứng chỉ Chuẩn đầu ra",
      badge: "Ngoại ngữ & Tin học",
      badgeClass: "badge-primary",
      bgColor: "pastel-cyan",
      accentColor: "#0891b2",
      summary: "Yêu cầu chuẩn đầu ra Ngoại ngữ (IELTS/TOEIC/JLPT), Tin học (MOS/IC3), Giáo dục QP-AN và Thể chất.",
      content: `
        <div class="topic-detail">
          
          <h3 class="section-title">📜 4 Chứng chỉ Chuẩn đầu ra Bắt buộc để Xét Tốt nghiệp</h3>

          <div class="grid-2col">
            <div class="info-card border-blue">
              <div class="info-card-header">
                <span class="icon-bubble blue-bubble">🌐</span>
                <h4>1. Chuẩn đầu ra Ngoại ngữ</h4>
              </div>
              <ul>
                <li><strong>Chương trình Chuẩn tiếng Việt:</strong> TOEIC 450 - 550+ hoặc IELTS 4.5 - 5.5+ (tùy ngành).</li>
                <li><strong>Chương trình Song ngữ / Quốc tế:</strong> IELTS 5.5 - 6.0+ hoặc tương đương.</li>
                <li>Sinh viên chuyên ngành Ngôn ngữ Anh/Nhật/Hàn thực hiện theo quy định riêng của Khoa.</li>
              </ul>
            </div>

            <div class="info-card border-cyan">
              <div class="info-card-header">
                <span class="icon-bubble cyan-bubble">💻</span>
                <h4>2. Chuẩn Tin học Văn phòng</h4>
              </div>
              <ul>
                <li>Đạt chứng chỉ <strong>MOS (Microsoft Office Specialist)</strong> tối thiểu 2 môn (Word/Excel/PowerPoint) hoặc <strong>IC3 Digital Literacy</strong>.</li>
              </ul>
            </div>

            <div class="info-card border-purple">
              <div class="info-card-header">
                <span class="icon-bubble purple-bubble">🛡️</span>
                <h4>3. Chứng chỉ Giáo dục Quốc phòng - An ninh</h4>
              </div>
              <ul>
                <li>Hoàn thành và được cấp Chứng chỉ Giáo dục Quốc phòng - An ninh do Trung tâm Quốc phòng cấp.</li>
              </ul>
            </div>

            <div class="info-card border-green">
              <div class="info-card-header">
                <span class="icon-bubble green-bubble">⚽</span>
                <h4>4. Chứng chỉ Giáo dục Thể chất</h4>
              </div>
              <ul>
                <li>Hoàn thành đủ số học phần/tín chỉ Giáo dục Thể chất theo chương trình đào tạo tích lũy.</li>
              </ul>
            </div>
          </div>

        </div>
      `
    },
    {
      id: "xet-tot-nghiep",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`,
      title: "7. Điều kiện Xét Tốt nghiệp",
      badge: "Hoàn thành Khóa học",
      badgeClass: "badge-info",
      bgColor: "pastel-indigo",
      accentColor: "#4f46e5",
      summary: "Điều kiện tích lũy tín chỉ, ĐTB tích lũy toàn khóa, chuẩn đầu ra và các đợt xét tốt nghiệp trong năm.",
      content: `
        <div class="topic-detail">
          
          <h3 class="section-title">🎓 Sơ đồ Checklist Điều kiện Xét Tốt nghiệp UEF</h3>

          <div class="checklist-card">
            <div class="check-item">
              <span class="check-icon">✓</span>
              <div>
                <strong>1. Tích lũy Đủ Số Tín chỉ Chương trình</strong>
                <p>Hoàn thành tất cả môn học bắt buộc và tự chọn trong khung chương trình cử nhân.</p>
              </div>
            </div>

            <div class="check-item">
              <span class="check-icon">✓</span>
              <div>
                <strong>2. Điểm TB Tích lũy Toàn khóa (GPA) &ge; 2.00 / 4.00</strong>
                <p>ĐTB tích lũy toàn khóa đạt từ điểm C trở lên (không còn nợ môn F chưa học lại).</p>
              </div>
            </div>

            <div class="check-item">
              <span class="check-icon">✓</span>
              <div>
                <strong>3. Nộp Đủ 4 Chứng chỉ Chuẩn đầu ra</strong>
                <p>Ngoại ngữ (TOEIC/IELTS), Tin học (MOS/IC3), GDQP-AN và GDTC.</p>
              </div>
            </div>

            <div class="check-item">
              <span class="check-icon">✓</span>
              <div>
                <strong>4. Không bị Kỷ luật & Hoàn thành Học phí</strong>
                <p>Không trong thời gian bị đình chỉ học tập hoặc truy cứu trách nhiệm hình sự; hoàn thành các khoản nghĩa vụ lệ phí.</p>
              </div>
            </div>
          </div>

        </div>
      `
    },
    {
      id: "dang-ky-hoc-phu-dao",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
      title: "8. Đăng ký Học phụ đạo (Miễn phí)",
      badge: "Hỗ trợ Học tập UEF",
      badgeClass: "badge-success",
      bgColor: "pastel-teal",
      accentColor: "#0d9488",
      summary: "Chương trình lớp phụ đạo kiến thức miễn phí do Nhà trường tổ chức dành cho sinh viên gặp khó khăn môn học.",
      content: `
        <div class="topic-detail">
          
          <div class="visual-card card-teal-accent">
            <div class="card-title-row">
              <span class="icon-bubble teal-bubble">🧑‍🏫</span>
              <h4>Chương trình Lớp Học Phụ Đạo Miễn Phí Tại UEF</h4>
            </div>
            <p>Trung tâm Hỗ trợ Học vụ UEF tổ chức các lớp phụ đạo hoàn toàn <strong>MIỄN PHÍ 100%</strong> nhằm giúp sinh viên bổ sung kiến thức các môn học khó (Xác suất thống kê, Nguyên lý kế toán, Kinh tế vĩ mô, Tiếng Anh...):</p>
            
            <div class="feature-bullets">
              <div class="bullet-item">
                <strong>🎯 Đối tượng:</strong> Sinh viên có nguy cơ điểm D/F hoặc sinh viên muốn củng cố kiến thức trước kỳ thi.
              </div>
              <div class="bullet-item">
                <strong>📲 Điểm danh:</strong> Tự động quét mã QR trực tiếp trên màn hình máy chiếu phân hệ <code>/phudao/</code>.
              </div>
              <div class="bullet-item">
                <strong>💡 Quyền lợi:</strong> Được Mentor / Giảng viên hướng dẫn giải bài tập ôn tập trực tiếp.
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
      id: "hoc-lai-va-hoc-cai-thien",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>`,
      title: "9. Học lại & Học cải thiện Điểm",
      badge: "Quy chế Học lại",
      badgeClass: "badge-warning",
      bgColor: "pastel-orange",
      accentColor: "#ea580c",
      summary: "Quy định đăng ký học lại môn F bắt buộc, học cải thiện môn D/C và phương pháp tính điểm trung bình tích lũy.",
      content: `
        <div class="topic-detail">
          
          <h3 class="section-title">🔄 So sánh Quy định Học lại vs Học Cải thiện Điểm</h3>

          <div class="grid-2col">
            <div class="info-card border-red">
              <div class="info-card-header">
                <span class="icon-bubble red-bubble">❌</span>
                <h4 style="color:#dc2626;">1. Học lại (Bắt buộc với Môn F)</h4>
              </div>
              <ul>
                <li>Sinh viên có điểm môn bị <strong>F (&lt; 4.0)</strong> bắt buộc phải đăng ký học lại môn đó.</li>
                <li>Điểm môn học lại mới sẽ <strong>thay thế hoàn toàn điểm F cũ</strong> trong điểm tích lũy GPA.</li>
              </ul>
            </div>

            <div class="info-card border-orange">
              <div class="info-card-header">
                <span class="icon-bubble orange-bubble">📈</span>
                <h4 style="color:#ea580c;">2. Học Cải thiện (Tự nguyện môn D/C)</h4>
              </div>
              <ul>
                <li>Sinh viên được đăng ký học cải thiện các môn đạt điểm <strong>D, D+, C, C+</strong> để bứt phá GPA.</li>
                <li>Trường hợp điểm học cải thiện thấp hơn điểm cũ, hệ thống tự động <strong>lấy điểm cao nhất</strong>.</li>
              </ul>
            </div>
          </div>

        </div>
      `
    },
    {
      id: "song-bang-song-nganh",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
      title: "10. Chương trình Song bằng / Song ngành",
      badge: "Cơ hội Phát triển",
      badgeClass: "badge-primary",
      bgColor: "pastel-blue",
      accentColor: "#2563eb",
      summary: "Điều kiện sinh viên đăng ký học cùng lúc 2 chương trình đào tạo để nhận 2 bằng đại học chính quy.",
      content: `
        <div class="topic-detail">
          
          <h3 class="section-title">🎓🎓 Lộ trình Học Song ngành / Song bằng UEF</h3>

          <div class="dual-degree-roadmap">
            <div class="dual-step">
              <div class="step-num">NĂM 1</div>
              <p>Hoàn thành năm học thứ nhất & ĐTBTL tích lũy đạt <strong>GPA &ge; 2.50</strong>.</p>
            </div>
            <div class="dual-arrow">➔</div>
            <div class="dual-step">
              <div class="step-num">NĂM 2</div>
              <p>Đăng ký ngành học thứ 2 & Miễn trừ các môn học đại cương trùng lặp.</p>
            </div>
            <div class="dual-arrow">➔</div>
            <div class="dual-step step-highlight">
              <div class="step-num">TỐT NGHIỆP</div>
              <p>Nhận <strong>2 Bằng Cử nhân Đại học Chính quy</strong> độc lập cùng lúc!</p>
            </div>
          </div>

        </div>
      `
    },
    {
      id: "cong-thong-tin-dao-tao",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
      title: "11. Cổng Thông tin Đào tạo (daotao.uef.edu.vn)",
      badge: "Hệ thống Quản lý",
      badgeClass: "badge-info",
      bgColor: "pastel-sky",
      accentColor: "#0284c7",
      summary: "Hướng dẫn thao tác xem thời khóa biểu, lịch thi, tra cứu điểm thi và đăng ký môn học trực tuyến.",
      content: `
        <div class="topic-detail">
          
          <div class="visual-card card-blue-accent">
            <div class="card-title-row">
              <span class="icon-bubble blue-bubble">🌐</span>
              <h4>Hướng dẫn Thao tác Cổng Đào tạo daotao.uef.edu.vn</h4>
            </div>
            <p>Địa chỉ truy cập chính thức: <a href="https://daotao.uef.edu.vn" target="_blank" style="color:#0284c7; font-weight:800;">daotao.uef.edu.vn</a></p>

            <div class="grid-2col" style="margin-top: 16px;">
              <div class="info-card">
                <h4>1. Xem Thời khóa biểu & Điểm thi</h4>
                <p>Sinh viên dùng mã SV và mật khẩu cá nhân đăng nhập -> Chọn menu <strong>Thời khóa biểu</strong> hoặc <strong>Kết quả học tập</strong>.</p>
              </div>
              <div class="info-card">
                <h4>2. Đăng ký Môn học Trực tuyến</h4>
                <p>Truy cập menu <strong>Đăng ký môn học</strong> trong các đợt mở cổng -> Chọn lớp học phần phù hợp -> Nhấn Lưu đăng ký.</p>
              </div>
            </div>
          </div>

        </div>
      `
    },
    {
      id: "giai-phap-ho-tro-sinh-vien",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`,
      title: "12. Giải pháp Hỗ trợ Sinh viên theo Nhu cầu",
      badge: "Tư vấn GVCN",
      badgeClass: "badge-success",
      bgColor: "pastel-green",
      accentColor: "#16a34a",
      summary: "Bộ giải pháp tư vấn cá nhân hóa dành cho GVCN theo 3 phân nhóm đối tượng sinh viên.",
      content: `
        <div class="topic-detail">
          
          <h3 class="section-title">💡 Khung Giải pháp Tư vấn cho Giáo viên Chủ nhiệm (GVCN)</h3>

          <div class="solutions-grid">
            <div class="solution-card scenario-danger">
              <div class="scenario-header">
                <span class="scenario-badge badge-red">Phân nhóm 1</span>
                <h4>🚨 Sinh viên đang gặp Khó khăn Học tập</h4>
              </div>
              <p class="scenario-subtitle">Sinh viên có GPA &lt; 2.0, bị cảnh báo học tập hoặc có môn bị điểm F</p>
              <ul>
                <li><strong>Giải pháp 1:</strong> Tư vấn đăng ký học phụ đạo miễn phí ngay tại phân hệ <code>/phudao/</code>.</li>
                <li><strong>Giải pháp 2:</strong> Hướng dẫn sinh viên chủ động đăng ký học lại môn F để xóa điểm kém trong GPA.</li>
                <li><strong>Giải pháp 3:</strong> Giới hạn số tín chỉ học trong kỳ tới (&le; 12-14 tín chỉ) để giảm tải áp lực.</li>
              </ul>
            </div>

            <div class="solution-card scenario-warning">
              <div class="scenario-header">
                <span class="scenario-badge badge-orange">Phân nhóm 2</span>
                <h4>🚀 Sinh viên Mong muốn Bứt phá</h4>
              </div>
              <p class="scenario-subtitle">Sinh viên có GPA trung bình (2.0 - 2.8) muốn học bổng hoặc nâng loại tốt nghiệp</p>
              <ul>
                <li><strong>Giải pháp 1:</strong> Lập kế hoạch đăng ký học cải thiện các môn điểm D, C để bứt phá GPA.</li>
                <li><strong>Giải pháp 2:</strong> Tập trung nâng điểm rèn luyện lên loại Tốt/Xuất sắc (&ge; 80 - 90 điểm).</li>
                <li><strong>Giải pháp 3:</strong> Xây dựng lộ trình hoàn thành chứng chỉ Tiếng Anh/Tin học sớm từ năm 2, năm 3.</li>
              </ul>
            </div>

            <div class="solution-card scenario-success">
              <div class="scenario-header">
                <span class="scenario-badge badge-green">Phân nhóm 3</span>
                <h4>🌟 Sinh viên Mong muốn Phát triển - Mở rộng</h4>
              </div>
              <p class="scenario-subtitle">Sinh viên Khá/Giỏi (GPA &ge; 3.2) muốn học vượt hoặc học bằng thứ 2</p>
              <ul>
                <li><strong>Giải pháp 1:</strong> Định hướng đăng ký chương trình <strong>Song bằng / Song ngành</strong>.</li>
                <li><strong>Giải pháp 2:</strong> Tư vấn đăng ký học vượt các môn để hoàn thành chương trình đào tạo sớm (3 - 3.5 năm).</li>
                <li><strong>Giải pháp 3:</strong> Khuyến khích tham gia NCKH sinh viên và các cuộc thi học thuật lớn.</li>
              </ul>
            </div>
          </div>

        </div>
      `
    }
  ]
};
