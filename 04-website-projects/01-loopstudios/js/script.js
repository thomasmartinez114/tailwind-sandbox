const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', navToggle);

function navToggle() {
  btn.classList.toggle('open');
  menu.classList.toggle('flex'); // first toggle will add this
  menu.classList.toggle('hidden'); // first toggle will take this off
}
