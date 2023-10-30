const reserved = {
  burgerCN: 'header_burgered',
  burgerId: 'burger',
  headerId: 'header',
  closeBurgerId: 'close-burger',
  headerBg: 'header-bg',
};

const burgerBtn = document.getElementById(reserved.burgerId);
const header = document.getElementById(reserved.headerId);
const closeBurgerMenu = document.getElementById(reserved.closeBurgerId);
const headerBg = document.getElementById(reserved.headerBg);

[burgerBtn, headerBg].forEach((element) => {
  element.addEventListener('click', () => {
    header.classList.toggle(reserved.burgerCN);
  });
})

closeBurgerMenu.addEventListener('click', () => {
  header.classList.toggle(reserved.burgerCN);
});