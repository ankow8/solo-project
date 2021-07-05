function toggleMenu(visible) {
  document.querySelector('.sidebar').classList.toggle('show-sidebar', visible);
  document.querySelector('.container-site').classList.toggle('show-container', visible);
}

document.querySelector('.menu-hamburger').addEventListener('click', function(event) {
  event.preventDefault();
  toggleMenu();
});
