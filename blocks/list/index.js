const itemIds = [
  'possibilities',
  'adeskForBusiness',
  'resources',
  'information',
  'contacts',
  'offersAndCooperation'
];

const render = () => {
  console.log('a')
  itemIds.forEach((id) => {
    const element = document.getElementById(id);

    if (!element) {
      return;
    };

    if (window.innerWidth > 600) {
      element.classList.add('list_opened');
    } else {
      element.addEventListener('click', () => {
        console.log('b')
        element.classList.toggle('list_opened');
      });
    }
  })
};

render();

window.addEventListener('resize', render);