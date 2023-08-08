const categoryBtn = document.getElementById('categoryBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

function showDropdownMenu() {
  dropdownMenu.style.display = 'block';
}

function hideDropdownMenu() {
  dropdownMenu.style.display = 'none';
}

function keepDropdownMenu() {
  dropdownMenu.style.display = 'block';
}

categoryBtn.addEventListener('mouseenter', showDropdownMenu);
categoryBtn.addEventListener('mouseleave', hideDropdownMenu);

dropdownMenu.addEventListener('mouseenter', keepDropdownMenu);
dropdownMenu.addEventListener('mouseleave', hideDropdownMenu);
