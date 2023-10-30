const itemIds = [
  'possibilities',
  'adeskForBusiness',
  'resources',
  'information',
  'contacts',
  'offersAndCooperation'
];

itemIds.forEach((id) => {
  const element = document.getElementById(id);

  if (!element) {
    return;
  };

  element.addEventListener('click', () => {
    element.classList.toggle('list_opened');
  });
})

window.addEventListener('resize', () => {
  itemIds.forEach((id) => {
    const element = document.getElementById(id);

    if (!element) {
      return;
    };
    if (window.innerWidth > 600) {
      element.classList.add('list_opened');
    } else {
      element.classList.remove('list_opened');
    }
  })
});