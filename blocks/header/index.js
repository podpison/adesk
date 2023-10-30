const reserved = {
  burgerCN: 'header_burgered',
  burgerId: 'burger',
  headerId: 'header',
  closeBurgerId: 'close-burger',
};

const burgerBtn = document.getElementById(reserved.burgerId);
const header = document.getElementById(reserved.headerId);
const closeBurgerMenu = document.getElementById(reserved.closeBurgerId);

burgerBtn.addEventListener('click', () => {
  header.classList.toggle(reserved.burgerCN);
});

closeBurgerMenu.addEventListener('click', () => {
  header.classList.toggle(reserved.burgerCN);
});