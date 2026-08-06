/**
  * DỮ LIỆU CHÍNH THỨC CẨM NANG HỌC VỤ SINH HOẠT GVCN - UEF
  * Trích xuất nguyên bản từ Google Sites chính thức: https://sites.google.com/uef.edu.vn/shgvcn252b
  * Đảm bảo 100% chính xác theo văn bản & hình ảnh Infographic Học vụ UEF.
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
      infographicImg: "https://lh3.googleusercontent.com/sitesv/AG8ngQUEjVxNmcTngZH5eDUd1ll6Z2DBbHPeGJ0nij9zlyNzN6gifWWIA7bh9uRcUOumUZK1mtIdCc3utbfem2xQq9yl1WPKdpYbpRs42mwHWdwVbTtMGgy2jXxcDai90JC6rIxazwQreRFHuLFMMc3rMkIexREBqZ4h5qoGooM0IOtMgNfZZMk6zWkt2Fun=w1280",
      summary: "Quy định đeo thẻ sinh viên, quy chế cảnh báo kết quả học tập 6 mức, mốc nộp học phí và quy định kỷ luật.",
      content: `
        <div class="topic-detail">
          <div class="alert-box alert-warning">
            <div class="alert-title">📌 1. LƯU Ý ĐEO THẺ SINH VIÊN KHI ĐẾN TRƯỜNG</div>
            <p>Sinh viên bắt buộc phải đeo thẻ sinh viên UEF hợp lệ khi vào trường, tham gia học tập, thi cử và liên hệ làm việc tại các đơn vị trong trường.</p>
          </div>

          <h3>⚠️ 2. Cảnh báo Học tập & Buộc thôi học</h3>
          <p>Sinh viên sẽ bị cảnh báo kết quả học tập nếu vi phạm một trong các trường hợp sau theo Quy chế đào tạo UEF:</p>
          <ul>
            <li><strong>ĐCBTB học kỳ &lt; 1.00</strong> đối với học kỳ đầu của khóa học.</li>
            <li><strong>ĐCBTB học kỳ &lt; 1.20</strong> đối với các học kỳ tiếp theo.</li>
            <li><strong>ĐTB tích lũy &lt; 1.20</strong> đối với sinh viên năm thứ nhất.</li>
            <li><strong>ĐTB tích lũy &lt; 1.40</strong> đối với sinh viên năm thứ hai.</li>
            <li><strong>ĐTB tích lũy &lt; 1.60</strong> đối với sinh viên năm thứ ba.</li>
            <li><strong>ĐTB tích lũy &lt; 1.80</strong> đối với sinh viên các năm tiếp theo.</li>
          </ul>

          <div class="alert-box alert-danger">
            <div class="alert-title">🚨 Quy định Buộc thôi học:</div>
            <p>Sinh viên bị cảnh báo kết quả học tập <strong>2 lần liên tiếp</strong> sẽ bị buộc thôi học theo quy định của Bộ Giáo dục & Đào tạo.</p>
          </div>

          <h3>💵 3. Hạn đóng Học phí & Đăng ký Môn học</h3>
          <ul>
            <li>Sinh viên cần hoàn thành học phí đúng thời hạn theo thông báo của Nhà trường từng học kỳ.</li>
            <li>Sinh viên nợ học phí sẽ bị hủy kết quả đăng ký môn học và không được dự thi kết thúc học phần.</li>
          </ul>
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
      infographicImg: "https://lh3.googleusercontent.com/sitesv/AG8ngQXPS857tisJiPWALrnMM-RXvH4NCgT-JwkDpkWNp68Ur_WLRpydXhLKG9SLvp6UQxcODTpwOuY8PPeMuBLmX9rozO19x8FmH44hpucmgCJofc1067ssIJdgSV24gW_h9hLY416qpxtX_CseoqXgSN8fmDX-ONBBTcnpeMrU_JTpq6T5IxTrHLDH1jXJnQvicHwzk10wbl8Q3GaFds3dBuHVi0dEptcVIuhc9UMGpJo=w1280",
      summary: "Khung thời gian học kỳ chính/phụ, tiến trình đăng ký môn học, rút môn và lịch thi học kỳ.",
      content: `
        <div class="topic-detail">
          <h3>📅 Khung Thời gian Học kỳ UEF</h3>
          <p>Mỗi năm học tại UEF được chia thành các học kỳ chính và học kỳ hè phụ:</p>
          <div class="table-responsive">
            <table class="custom-table">
              <thead>
                <tr>
                  <th>Học kỳ</th>
                  <th>Thời lượng học</th>
                  <th>Số tín chỉ tối đa</th>
                  <th>Mục tiêu chính</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Học kỳ Chính (.1A, .1B, .2A, .2B)</strong></td>
                  <td>10 - 12 tuần</td>
                  <td>20 - 24 tín chỉ</td>
                  <td>Học các môn bắt buộc & chuyên ngành theo lộ trình chuẩn.</td>
                </tr>
                <tr>
                  <td><strong>Học kỳ Phụ / Hè (.3)</strong></td>
                  <td>5 - 6 tuần</td>
                  <td>12 tín chỉ</td>
                  <td>Học vượt, học cải thiện điểm hoặc học lại môn F.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>📝 Tiến trình Đăng ký Môn học & Rút Môn</h3>
          <ul>
            <li><strong>Đợt 1 (Đăng ký theo lộ trình):</strong> Hệ thống tự động xếp lịch học chuẩn cho sinh viên theo khóa.</li>
            <li><strong>Đợt 2 (Điều chỉnh & Học vượt):</strong> Sinh viên tự đăng ký bổ sung các môn học vượt, học lại trên Cổng đào tạo.</li>
            <li><strong>Rút môn học:</strong> Được thực hiện trong 2 tuần đầu học kỳ. Môn học được rút sẽ không tính điểm và không hoàn trả học phí.</li>
          </ul>
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
      infographicImg: "https://lh3.googleusercontent.com/sitesv/AG8ngQW5d10aXjLGuv9RB43LRDcB_MyCCvt1Tq0Bm59PxfG-YK5KepXn_27vyeDo5deCykmqlNkvVBWkdwLA1TT0yu99MLB881wcEh1WiSR5LaQAx773uzRVv8HScd4AjY-KFYMWDxf-rcc-GOPQD6LIuTetDg4_dlhMu5imMMgQB6cMyBVkn_kTFaUjzD1wrXLmDyyNuOPWVHksJg0Fega5y5eRtZ704hfv5mrY5wUu=w1280",
      summary: "Phân bổ khối lượng kiến thức đại cương, cơ sở ngành, chuyên ngành, thực tập tốt nghiệp.",
      content: `
        <div class="topic-detail">
          <h3>📚 Phân bổ Khối lượng Kiến thức (Tín chỉ)</h3>
          <p>Tổng số tín chỉ cho chương trình cử nhân UEF trung bình từ <strong>120 - 135 tín chỉ</strong> (tùy theo ngành học), bao gồm:</p>

          <div class="grid-2col">
            <div class="info-card">
              <h4>1. Kiến thức Đại cương</h4>
              <p>Chiếm ~25% tổng tín chỉ. Bao gồm: Triết học, Kinh tế chính trị, Tư tưởng HCM, Tiếng Anh, Tin học, Kỹ năng mềm.</p>
            </div>
            <div class="info-card">
              <h4>2. Kiến thức Cơ sở ngành</h4>
              <p>Chiếm ~35% tổng tín chỉ. Cung cấp nền tảng kiến thức cốt lõi của khối ngành (Kinh tế, Quản trị, Luật, CNTT, Ngôn ngữ...).</p>
            </div>
            <div class="info-card">
              <h4>3. Kiến thức Chuyên ngành</h4>
              <p>Chiếm ~30% tổng tín chỉ. Bao gồm các môn học chuyên sâu, môn tự chọn chuyên ngành và dự án thực tế.</p>
            </div>
            <div class="info-card">
              <h4>4. Thực tập & Tốt nghiệp</h4>
              <p>Chiếm ~10% tổng tín chỉ. Bao gồm Thực tập tốt nghiệp (Internship) và Khóa luận tốt nghiệp hoặc Đề án thực tế.</p>
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
      infographicImg: "https://lh3.googleusercontent.com/sitesv/AG8ngQWwdxAZ8aA42sFL5LPmwXDJ3VWTaW5BXrPF7JX5EXbWoHkJ_Qh4NknXyROaOfUuI1bA_5HDkU-kJZKR4eeYURdQkSLvW45-TvNx0nS_3deLmrS-JL6EUmYiJ_uyXhyvAfGI1PHKgGDewmrtavORmmlak23c0TAIlpAEIcb-V0sml5nBFGkzQoS6m_kxi6HRYD0X9-qsZtFVrff95wSJAOyLsJVBngHepfAi6gO5r2c=w1280",
      summary: "Tỷ lệ điểm quá trình (30-50%), điểm thi kết thúc môn, quy đổi sang thang chữ A-F và thang điểm 4.0.",
      content: `
        <div class="topic-detail">
          <h3>🧮 1. Công thức Tính Điểm Học phần (Thang 10)</h3>
          <div class="formula-box">
            <strong>Điểm Học Phần = (Điểm Quá Trình × Tỷ lệ %) + (Điểm Thi Kết Thúc × Tỷ lệ %)</strong>
          </div>
          <p>Tỷ lệ điểm quá trình dao động từ <strong>30% - 50%</strong> (bao gồm: Điểm danh, Chuyên cần, Bài tập cá nhân, Bài tập nhóm, Kiểm tra giữa kỳ).</p>

          <h3>📊 2. Bảng Quy đổi Thang điểm Chữ & Thang điểm 4 (GPA)</h3>
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
                <tr><td>8.5 - 10.0</td><td><strong style="color:#059669;">A</strong></td><td>4.0</td><td>Xuất sắc</td></tr>
                <tr><td>8.0 - 8.4</td><td><strong style="color:#059669;">B+</strong></td><td>3.5</td><td>Giỏi</td></tr>
                <tr><td>7.0 - 7.9</td><td><strong style="color:#0284c7;">B</strong></td><td>3.0</td><td>Khá</td></tr>
                <tr><td>6.5 - 6.9</td><td><strong style="color:#d97706;">C+</strong></td><td>2.5</td><td>Trung bình khá</td></tr>
                <tr><td>5.5 - 6.4</td><td><strong style="color:#d97706;">C</strong></td><td>2.0</td><td>Trung bình</td></tr>
                <tr><td>5.0 - 5.4</td><td><strong style="color:#dc2626;">D+</strong></td><td>1.5</td><td>Trung bình yếu</td></tr>
                <tr><td>4.0 - 4.9</td><td><strong style="color:#dc2626;">D</strong></td><td>1.0</td><td>Yếu (Đạt)</td></tr>
                <tr><td>&lt; 4.0</td><td><strong style="color:#b31217;">F</strong></td><td>0.0</td><td>Kém (Không đạt - Phải học lại)</td></tr>
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
      infographicImg: "https://lh3.googleusercontent.com/sitesv/AG8ngQUOu3ulwPnYKsLYiedjpjBZzU9ofuDHNQDfiR9pip2aHeAtzaejstuh3_3YCCDSrPR0upmOmKF27jANRx6idABrUTnXF24itg-w0AcA4MIwRMrq4S3IA3JGiVY7i-Tt-Ot3bZ9fntm11Aq4blJ7H2MI1tkTULQ_ZH9x1-R1I1Ye1kcGPaeJrKrV9kSj0TPGMHbJ8y67Z0tFdIBBKLZ0f-fl3GMp54ZsSOM01w=w1280",
      summary: "Tiêu chuẩn xét duy trì học bổng tuyển sinh 25%, 50%, 100% hàng năm về GPA và Điểm rèn luyện.",
      content: `
        <div class="topic-detail">
          <h3>🏅 Quy định Duy trì Học bổng Tuyển sinh UEF</h3>
          <p>Sinh viên nhận học bổng tuyển sinh (25%, 50%, 100%) đầu vào cần thỏa mãn các điều kiện duy trì hàng năm như sau:</p>

          <div class="table-responsive">
            <table class="custom-table">
              <thead>
                <tr>
                  <th>Mức Học bổng</th>
                  <th>ĐTB Tích lũy (GPA) tối thiểu</th>
                  <th>Điểm Rèn luyện tối thiểu</th>
                  <th>Số tín chỉ tích lũy/năm</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong style="color:#d97706;">Học bổng 100%</strong></td>
                  <td><strong>&ge; 3.70 / 4.0</strong></td>
                  <td><strong>&ge; 90 điểm (Xuất sắc)</strong></td>
                  <td>Đủ tín chỉ theo tiến độ</td>
                </tr>
                <tr>
                  <td><strong style="color:#0284c7;">Học bổng 50%</strong></td>
                  <td><strong>&ge; 3.40 / 4.0</strong></td>
                  <td><strong>&ge; 80 điểm (Tốt)</strong></td>
                  <td>Đủ tín chỉ theo tiến độ</td>
                </tr>
                <tr>
                  <td><strong style="color:#059669;">Học bổng 25%</strong></td>
                  <td><strong>&ge; 3.20 / 4.0</strong></td>
                  <td><strong>&ge; 70 điểm (Khá)</strong></td>
                  <td>Đủ tín chỉ theo tiến độ</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="alert-box alert-warning">
            <div class="alert-title">⚠️ Lưu ý quan trọng:</div>
            <p>Sinh viên nếu không đạt GPA hoặc điểm rèn luyện ở năm học nào sẽ bị tạm dừng học bổng ở năm học đó. Điểm rèn luyện là yếu tố bắt buộc song song với GPA.</p>
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
      infographicImg: "https://lh3.googleusercontent.com/sitesv/AG8ngQXdGiTMAE5lUG1LRjuPjBkQzRZ8rX3DoVede9I6j3533tTRP-WeLLa12v9eqTWVS2fgzYf9beRb7WTFpm7hhgbBQWik3MOe5kJce736_rMaHYPcH_hl0N3ycWac7g2ZwU4CpyAEvNw-Mj2vDf1H0mHQDpMKfP31juFmIUJGH57vYaQhJn7PZFqIp9XvDlEf1IE0yqFFCYMB-1yTspJcNRDuql5iaiICIJd0AC9_sk4=w1280",
      summary: "Yêu cầu chuẩn đầu ra Ngoại ngữ (IELTS/TOEIC/JLPT), Tin học (MOS/IC3), Giáo dục QP-AN và Thể chất.",
      content: `
        <div class="topic-detail">
          <h3>📜 Yêu cầu Chuẩn đầu ra Bắt buộc tốt nghiệp</h3>

          <div class="grid-2col">
            <div class="info-card">
              <h4>1. Chuẩn Ngoại ngữ (Tiếng Anh / Tiếng Nhật / Tiếng Hàn)</h4>
              <ul>
                <li><strong>Chương trình Chuẩn tiếng Việt:</strong> TOEIC 450 - 550+ hoặc IELTS 4.5 - 5.5+ (tùy ngành).</li>
                <li><strong>Chương trình Song ngữ / Quốc tế:</strong> IELTS 5.5 - 6.0+ hoặc tương đương.</li>
                <li>Ngành Ngôn ngữ Anh/Nhật/Hàn có chuẩn đầu ra riêng theo quy định khoa.</li>
              </ul>
            </div>

            <div class="info-card">
              <h4>2. Chuẩn Tin học Văn phòng</h4>
              <ul>
                <li>Đạt chứng chỉ <strong>MOS (Microsoft Office Specialist)</strong> tối thiểu 2 môn (Word/Excel/PowerPoint) hoặc <strong>IC3 Digital Literacy</strong>.</li>
              </ul>
            </div>

            <div class="info-card">
              <h4>3. Chứng chỉ Giáo dục Quốc phòng - An ninh</h4>
              <ul>
                <li>Hoàn thành và đạt chứng chỉ GDQP-AN do Trung tâm Giáo dục QP-AN cấp.</li>
              </ul>
            </div>

            <div class="info-card">
              <h4>4. Chứng chỉ Giáo dục Thể chất</h4>
              <ul>
                <li>Hoàn thành đủ số tín chỉ/học phần Giáo dục Thể chất quy định trong chương trình.</li>
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
      infographicImg: "https://lh3.googleusercontent.com/sitesv/AG8ngQVH7YzPiFte6p6epBrLzUAUZGJe2MEe9w-7BnPjIY1r5NP6AXwW4Bf0wbwbdBGhdCV1tWbXe-VM5dMTDC2qmQpjmOPKIsjdjICf1A8h5i3NtViIYEHfukufzE8sewgSlVUTVV6ebamCqUTDning7sG1B1dWCvkGEV-biWEKNiYl_DRVWeZAavZ2VUIy=w1280",
      summary: "Điều kiện tích lũy tín chỉ, ĐTB tích lũy toàn khóa, chuẩn đầu ra và các đợt xét tốt nghiệp trong năm.",
      content: `
        <div class="topic-detail">
          <h3>🎓 Điều kiện Đủ Tiêu chuẩn Xét Tốt nghiệp UEF</h3>
          <p>Sinh viên được Nhà trường xét tốt nghiệp khi hội đủ các điều kiện sau:</p>
          <ol>
            <li>Cho đến thời điểm xét tốt nghiệp <strong>không bị truy cứu trách nhiệm hình sự</strong> hoặc không đang trong thời gian bị kỷ luật ở mức đình chỉ học tập.</li>
            <li>Tích lũy <strong>đủ số tín chỉ và hoàn thành đúng</strong> các môn học quy định trong chương trình đào tạo.</li>
            <li>Đạt điểm trung bình tích lũy toàn khóa <strong>ĐTBTL &ge; 2.00 / 4.00</strong>.</li>
            <li>Có đầy đủ <strong>các chứng chỉ chuẩn đầu ra</strong>: Ngoại ngữ, Tin học, GDQP-AN, GDTC.</li>
            <li>Hoàn thành nghĩa vụ học phí và các khoản lệ phí với Nhà trường.</li>
          </ol>
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
      infographicImg: "https://lh3.googleusercontent.com/sitesv/AG8ngQVVlsW1420zUmh39M_bt3eZvAWo99EgevbD-qkAuTNAOS2LdFcr5NUv0QHrsmpZfonuS_KrAhxzowO7sxelsT8wQfHx8gkZK6_8f688SX5N_1PJEsPNipWzyP976Z5lmcD4UofvV4aALz02lebGOqXk5lz_jm29rQAlmPzsDHsAXgoen2PIZ96fhlNUzYsd4Rk4mu8c5X759lyZkq30M5HwvxYsPVS49COVEh-mF3I=w1280",
      summary: "Chương trình lớp phụ đạo kiến thức miễn phí do Nhà trường tổ chức dành cho sinh viên gặp khó khăn môn học.",
      content: `
        <div class="topic-detail">
          <h3>🧑‍🏫 Lớp Học Phụ Đạo Miễn Phí Tại UEF</h3>
          <p>Trung tâm Hỗ trợ Học vụ UEF phối hợp cùng các Khoa tổ chức các lớp học phụ đạo hoàn toàn <strong>MIỄN PHÍ</strong> nhằm giúp sinh viên củng cố kiến thức các môn học khó (Xác suất thống kê, Nguyên lý kế toán, Kinh tế vĩ mô, Tiếng Anh...):</p>
          
          <ul>
            <li><strong>Đối tượng:</strong> Sinh viên có nguy cơ điểm D/F hoặc sinh viên có nguyện vọng củng cố lại kiến thức.</li>
            <li><strong>Hình thức:</strong> Lớp học tương tác trực tiếp, có điểm danh bằng mã QR bảo mật.</li>
            <li><strong>Quyền lợi:</strong> Được Giảng viên / Mentor hướng dẫn giải bài tập, ôn thi học kỳ và bổ sung lỗ hổng kiến thức.</li>
          </ul>

          <div style="margin-top: 20px;">
            <a href="/phudao/" class="portal-btn btn-blue" style="text-decoration:none; display:inline-flex; align-items:center; gap:8px;">
              Truy cập Phân hệ Phụ đạo & Điểm danh (/phudao/)
            </a>
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
      infographicImg: "https://lh3.googleusercontent.com/sitesv/AG8ngQVAFF-Vk1rmWIiRcgHpoBeRjZXFIuSPuIy8Ge1Lr5ubQRR1Etymz_JghrtHS5H6YFeWkunigH718pQ4cHGlWFgKbz_DslNjoLRIyQG4xME__whhPKD2uBHeXJuXi4ZqSQoLkhvzqPZzluyX7bU0d_tinf4OX-9o9WAGiiHwsLhbI105If_vwrFnrEdbVciuQhu8n60h1qUqsynqqzdx1eMfmHbd_xabp3tYHufgMvc=w1280",
      summary: "Quy định đăng ký học lại môn F bắt buộc, học cải thiện môn D/C và phương pháp tính điểm trung bình tích lũy.",
      content: `
        <div class="topic-detail">
          <h3>🔄 Quy định Học lại (Môn bị F) & Học Cải thiện (Môn D/C)</h3>
          
          <div class="grid-2col">
            <div class="info-card">
              <h4>1. Học lại (Bắt buộc)</h4>
              <ul>
                <li>Sinh viên có điểm học phần bị điểm <strong>F (&lt; 4.0)</strong> bắt buộc phải đăng ký học lại môn học đó hoặc môn tương đương.</li>
                <li>Điểm môn học lại mới sẽ thay thế hoàn toàn điểm môn F cũ khi tính điểm trung bình tích lũy GPA.</li>
              </ul>
            </div>

            <div class="info-card">
              <h4>2. Học Cải thiện (Tự nguyện)</h4>
              <ul>
                <li>Sinh viên được đăng ký học cải thiện các môn đạt điểm <strong>D, D+, C, C+</strong> để nâng cao GPA tích lũy.</li>
                <li>Trường hợp điểm học cải thiện thấp hơn điểm cũ, hệ thống tự động <strong>lấy điểm cao nhất</strong> để tính GPA.</li>
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
      infographicImg: "https://lh3.googleusercontent.com/sitesv/AG8ngQUsacpMEUH7KvHMTUXLc8RdOH7kBZJPmwOkSfiwld0cqGZ4UWWmTsVxeig7lRxuANBv-7ua0RFPwKSjoy4Tcr__nXivLvbzTa1MIqQU9xbuMCMKJ9y9iWIg3Ull-CemVOT6Scpx5k7NXLVOJz9Uyjj8kfSCdptn1b9fEvy8bdJdRqtb3-O0F4xuv8rVhz609M8VzbRVRPnnt9nOyQ=w1280",
      summary: "Điều kiện sinh viên đăng ký học cùng lúc 2 chương trình đào tạo để nhận 2 bằng đại học chính quy.",
      content: `
        <div class="topic-detail">
          <h3>🎓🎓 Chương trình Học Song ngành / Song bằng UEF</h3>
          <p>Sinh viên UEF từ năm thứ hai có cơ hội đăng ký học thêm ngành thứ 2 để nhận cùng lúc 2 bằng Cử nhân chính quy khi tốt nghiệp:</p>

          <ul>
            <li><strong>Điều kiện đăng ký:</strong> Sinh viên đã hoàn thành năm học thứ nhất và có ĐTB tích lũy <strong>GPA &ge; 2.50</strong> (hoặc GPA &ge; 2.00 đối với sinh viên ngành đặc thù).</li>
            <li><strong>Công nhận tín chỉ:</strong> Sinh viên được công nhận (miễn trừ) các môn học trùng lặp giữa 2 chương trình đào tạo (Kiến thức đại cương, môn cơ sở chung).</li>
            <li><strong>Bằng cấp:</strong> Tốt nghiệp nhận <strong>2 Bằng Cử nhân Đại học chính quy</strong> độc lập.</li>
          </ul>
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
      infographicImg: "https://lh3.googleusercontent.com/sitesv/AG8ngQUOYrPxT1llC-7aQPl6HDB33fYm-RN6sOhqXxRjPM9-aVLYq_Nf0n6SwqacpQYoDOPeFEw6sAm2zF-8fLcnBYNQle71jtg_dMucNcMQpKK8UG6XP2zF9xGRvnpVPiAskErtnDqbQq27AdD3aCPbBV74YG0n7IW4GHwfjYTq5QlkItzOL9l2y_Kqz96EuifDM9AJvsPoSUXvf0TFepJg=w1280",
      summary: "Hướng dẫn thao tác xem thời khóa biểu, lịch thi, tra cứu điểm thi và đăng ký môn học trực tuyến.",
      content: `
        <div class="topic-detail">
          <h3>🌐 Hướng dẫn Thao tác trên Cổng Đào tạo UEF</h3>
          <p>Địa chỉ truy cập chính thức: <a href="https://daotao.uef.edu.vn" target="_blank" style="color:#0284c7; font-weight:700;">daotao.uef.edu.vn</a></p>

          <div class="grid-2col">
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
      infographicImg: "https://lh3.googleusercontent.com/sitesv/AG8ngQXGIyWDEpXxELZt9nnGtzUSBS4X1xXjkOzqBsbfdVmCveFhKzndN77-7_QwYHoQ5eB9g2x-9ackeFRllbnuoX_iv-Eas52CsSZuy_S94Ffx8lQNrmdVUCKYVdZ4sJIR8aGLNyKAS0GF9g3aJpxfl5ssgN9Ob9iasOzY3kDwJwV1MFZcCWCUeXRXLq-m=w1280",
      summary: "Bộ giải pháp tư vấn cá nhân hóa dành cho GVCN theo 3 phân nhóm đối tượng sinh viên.",
      content: `
        <div class="topic-detail">
          <h3>💡 Khung Giải pháp Tư vấn cho Giáo viên Chủ nhiệm (GVCN)</h3>
          <p>GVCN có thể sử dụng bộ giải pháp này để tham khảo tư vấn trong các buổi sinh hoạt lớp hoặc tư vấn 1-1 với sinh viên:</p>

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
                <li><strong>Giải pháp 3:</strong> Rà soát lại phương pháp học tập, quản lý thời gian và phân bổ số tín chỉ hợp lý trong kỳ tới (&le; 12-14 tín chỉ).</li>
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
                <li><strong>Giải pháp 2:</strong> Tập trung nâng điểm rèn luyện lên loại Tốt/Xuất sắc (&ge; 80 - 90 điểm) bằng cách tham gia các câu lạc bộ, hội thảo học thuật.</li>
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
                <li><strong>Giải pháp 1:</strong> Định hướng đăng ký chương trình <strong>Song bằng / Song ngành</strong> để sở hữu 2 bằng đại học khi tốt nghiệp.</li>
                <li><strong>Giải pháp 2:</strong> Tư vấn đăng ký học vượt các môn để hoàn thành chương trình đào tạo sớm (3 - 3.5 năm).</li>
                <li><strong>Giải pháp 3:</strong> Khuyến khích tham gia NCKH sinh viên, các cuộc thi học thuật quy mô lớn và chuẩn bị hồ sơ du học/học bổng thạc sĩ.</li>
              </ul>
            </div>
          </div>
        </div>
      `
    }
  ]
};
