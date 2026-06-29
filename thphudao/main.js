const GOOGLE_APPS_SCRIPT_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxo9zJkI3BwFt58rJktDrDbzvIx_arZubllovesOnXL1Hcr-zwtO-vY8oGmwiwZmOhe/exec';

// DOM Elements
const statTotalSubjects = document.getElementById('statTotalSubjects');
const statTotalCheckins = document.getElementById('statTotalCheckins');
const statUniqueStudents = document.getElementById('statUniqueStudents');
const subjectStatsBody = document.getElementById('subjectStatsBody');
const dailyStatsTimeline = document.getElementById('dailyStatsTimeline');
const refreshStatsBtn = document.getElementById('refreshStatsBtn');
const refreshIcon = document.getElementById('refreshIcon');
const toastContainer = document.getElementById('toastContainer');

async function callApi(payload) {
  try {
    const response = await fetch(GOOGLE_APPS_SCRIPT_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error('Không thể kết nối đến Web App Apps Script.');
    return await response.json();
  } catch (error) {
    console.error('API Error:', error.message);
    return { success: false, message: 'Lỗi kết nối máy chủ Google Sheets.' };
  }
}

function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

async function loadStatistics() {
  if (refreshStatsBtn) refreshStatsBtn.disabled = true;
  if (refreshIcon) refreshIcon.style.transform = 'rotate(360deg)';

  try {
    const res = await callApi({ action: 'getSummaryStats' });
    if (res.success) {
      // 1. Render Metrics
      statTotalSubjects.textContent = res.totalSubjects;
      statTotalCheckins.textContent = res.totalCheckins;
      statUniqueStudents.textContent = res.totalUniqueStudents;

      // 2. Render Subject Stats Body
      if (res.subjectStats && res.subjectStats.length > 0) {
        // Sort subjects by attendance count descending
        res.subjectStats.sort((a, b) => b.count - a.count);

        subjectStatsBody.innerHTML = res.subjectStats.map(item => {
          const percentage = res.totalCheckins > 0 
            ? ((item.count / res.totalCheckins) * 100).toFixed(1) 
            : 0;

          return `
            <tr>
              <td><strong>${escapeHtml(item.subject)}</strong></td>
              <td style="text-align: center;"><code style="font-family: monospace; font-size: 14px; font-weight: 700; background: var(--uef-blue-light); color: var(--uef-blue-dark); padding: 4px 8px; border-radius: 6px;">${item.count}</code></td>
              <td>
                <div class="progress-bar-container">
                  <div class="progress-track">
                    <div class="progress-fill" style="width: ${percentage}%"></div>
                  </div>
                  <span class="progress-percentage">${percentage}%</span>
                </div>
              </td>
            </tr>
          `;
        }).join('');
      } else {
        subjectStatsBody.innerHTML = `
          <tr>
            <td colspan="3" style="text-align: center; color: var(--text-muted); padding: 40px 0;">Không có dữ liệu môn học.</td>
          </tr>
        `;
      }

      // 3. Render Daily Trends Timeline
      if (res.dailyStats && res.dailyStats.length > 0) {
        // Reverse order to show newest date first in timeline
        const sortedDaily = [...res.dailyStats].reverse();

        dailyStatsTimeline.innerHTML = sortedDaily.map(item => {
          // Format date from YYYY-MM-DD to DD/MM/YYYY
          const parts = item.date.split('-');
          const formattedDate = parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : item.date;

          return `
            <div class="timeline-item">
              <span class="timeline-date">${formattedDate}</span>
              <span class="timeline-count">${item.count} lượt</span>
            </div>
          `;
        }).join('');
      } else {
        dailyStatsTimeline.innerHTML = `
          <div style="text-align: center; color: var(--text-muted); padding: 40px 0;">Chưa ghi nhận lượt điểm danh nào.</div>
        `;
      }
    } else {
      showToast(res.message || 'Lỗi tải thống kê.', 'error');
    }
  } catch (error) {
    console.error(error);
    showToast('Lỗi kết nối hoặc xử lý dữ liệu.', 'error');
  } finally {
    setTimeout(() => {
      if (refreshStatsBtn) refreshStatsBtn.disabled = false;
      if (refreshIcon) refreshIcon.style.transform = 'none';
    }, 500);
  }
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Initial Run
window.addEventListener('DOMContentLoaded', () => {
  loadStatistics();
});

if (refreshStatsBtn) {
  refreshStatsBtn.addEventListener('click', () => {
    loadStatistics();
    showToast('Đang làm mới dữ liệu thống kê...', 'info');
  });
}
