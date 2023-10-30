const elements = document.querySelectorAll('[data-list]');

elements.forEach((element) => {
  if (!element) {
    return;
  };

  element.addEventListener('click', () => {
    element.classList.toggle('list_opened');
  });
})

const resizeCallback = () => {
  elements.forEach((element) => {
    if (!element) {
      return;
    };
    if (window.innerWidth > 600) {
      element.classList.add('list_opened');
    } else {
      element.classList.remove('list_opened');
    }
  })
}

resizeCallback();

window.addEventListener('resize', resizeCallback);