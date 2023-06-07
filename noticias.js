function showPage(pageNumber) {
    const items = document.querySelectorAll('.noticias');
    const itemsPerPage = 2;
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    for (let i = 0; i < items.length; i++) {
      if (i >= startIndex && i < endIndex) {
        items[i].style.display = 'block';
      } else {
        items[i].style.display = 'none';
      }
    }
  }

  const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentPage = 1;
showPage(currentPage);

prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
});

nextButton.addEventListener('click', () => {
  const items = document.querySelectorAll('.noticias');
  const itemsPerPage = 2;
  if (currentPage < Math.ceil(items.length / itemsPerPage)) {
    currentPage++;
    showPage(currentPage);
  }
});