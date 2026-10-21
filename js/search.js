window.addEventListener('DOMContentLoaded', () => {
  const moduleSearch = document.getElementById('moduleSearch');
  
  if (moduleSearch) {
    moduleSearch.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const cards = document.querySelectorAll('.content-grid .card');

      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
});