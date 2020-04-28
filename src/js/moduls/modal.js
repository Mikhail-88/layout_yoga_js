function model() {
  const moreBtn = document.querySelector('.more');
  const overlay = document.querySelector('.overlay');
  const close = document.querySelector('.popup-close');
  const tabsBtn = document.querySelectorAll('.description-btn');

  moreBtn.addEventListener('click', onShowModel);
  tabsBtn.forEach(btn => btn.addEventListener('click', onShowModel));
  close.addEventListener('click', onHideModel);

  function onShowModel() {
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function onHideModel() {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }
}

module.exports = model;