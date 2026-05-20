const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('[data-page]');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const announcementCards = document.querySelectorAll('.announcement-card');

function showPage(pageId) {
  pages.forEach((page) => page.classList.remove('active'));

  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.remove('active');
    if (link.dataset.page === pageId) {
      link.classList.add('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navLinks.forEach((button) => {
  button.addEventListener('click', () => {
    showPage(button.dataset.page);
  });
});

function filterAnnouncements() {
  const keyword = searchInput.value.toLowerCase().trim();
  const selectedCategory = categoryFilter.value;

  announcementCards.forEach((card) => {
    const text = card.innerText.toLowerCase();
    const category = card.dataset.category;

    const matchKeyword = text.includes(keyword);
    const matchCategory = selectedCategory === 'all' || selectedCategory === category;

    card.classList.toggle('hidden', !(matchKeyword && matchCategory));
  });
}

if (searchInput && categoryFilter) {
  searchInput.addEventListener('input', filterAnnouncements);
  categoryFilter.addEventListener('change', filterAnnouncements);
}
