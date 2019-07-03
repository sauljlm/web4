const mq = window.matchMedia('(max-width: 720px)');

const header = document.querySelector('.site-header');
const headerContent = document.querySelector('.site-header__content');
const lenguage = document.querySelector('.site-header__top-links');
const search = document.querySelector('.site-header__search');
const mainNav = document.querySelector('.site-header__main-nav');

function widthChange(mediaQuery) {
  if (mediaQuery.matches) {
    cleanContent();
    generateMenu();
    headerContent.appendChild(search);
    headerContent.appendChild(mainNav);
    headerContent.appendChild(lenguage);
    header.classList.toggle('mobile');
  } else {
    cleanContent();
    cleanMenu();
    headerContent.appendChild(lenguage);
    headerContent.appendChild(search);
    headerContent.appendChild(mainNav);
    header.classList.toggle('mobile');
  }
}

function generateMenu() {
  const btn = document.createElement('button');
  btn.setAttribute('class', 'hamburguer');

  btn.addEventListener('click', () => {
    headerContent.classList.toggle('menu-mobile-active');
  });

  header.insertBefore(btn, headerContent);
}

function cleanMenu() {
  const btnMenu = document.querySelector('.hamburguer');
  header.removeChild(btnMenu);
}

function cleanContent() {
  headerContent.innerHTML = '';
}

mq.addListener(widthChange);

widthChange(mq);
