function tabs() {
  const tabs = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

  hideTabContent(1);

  function hideTabContent(index) {
    for (let i = index; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  function showTabContent(index) {
    if (tabContent[index].classList.contains('hide')) {
      tabContent[index].classList.remove('hide');
      tabContent[index].classList.add('show');
    }
  }

  info.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target.classList.contains('info-header-tab')) {
      tabs.forEach((item, index) => {
        if (target === item) {
          hideTabContent(0);
          showTabContent(index);
        }
      });
    }
  });
}

module.exports = tabs;