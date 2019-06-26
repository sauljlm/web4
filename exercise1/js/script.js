(function () {
  const btnMenu = document.querySelector('.js-btn-menu');
  const menu = document.querySelector('.js-menu');

  function createMenu() {
    const ico = document.createElement('img');
    ico.setAttribute('src', 'img/menu.png');
    btnMenu.appendChild(ico);
  }

  function init() {
    createMenu();
    menu.classList.toggle('menu-hidden');
  }

  window.addEventListener("load", function(event) {
    init();
  });
  btnMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-hidden');
  });
}());