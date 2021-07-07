/* Hamburger */

function toggleMenu(visible) {
  document.querySelector('.sidebar').classList.toggle('show-sidebar', visible);
  document.querySelector('.container-site').classList.toggle('show-container', visible);
}

document.querySelector('.menu-hamburger').addEventListener('click', function(event) {
  event.preventDefault();
  toggleMenu();
});

/* Modal */

function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(event) {
    event.preventDefault();
    closeModal();
  });
});

document.querySelector('#overlay').addEventListener('click', function(event) {
  if(event.target === this) {
    closeModal();
  }
});

document.addEventListener('keyup', function(event) {
  if(event.keyCode === 27) {
    closeModal();
  }
});

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

openModal('#myModal');

/* Click modals */

document.querySelector('.logo').addEventListener('click', function(event){
  event.preventDefault();
  openModal('#myModal');
});
