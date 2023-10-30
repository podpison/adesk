const elements = document.querySelectorAll('[data-list]');

elements.forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.toggle('list_opened');
  });
})

const resizeCallback = () => {
  elements.forEach((element) => {
    element.classList.toggle('list_opened', window.innerWidth > 600);
  })
}

resizeCallback();

window.addEventListener('resize', resizeCallback);