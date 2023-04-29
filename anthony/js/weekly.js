const tableRows = document.querySelectorAll('tbody tr');

tableRows.forEach(row => {
  const cells = row.querySelectorAll('td');
  
  cells.forEach(cell => {
    if (cell.textContent === '') {
      cell.classList.add('empty');
    }
  });
});
