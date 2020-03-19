window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Tabs
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

  // Timer
  const deadline = '2020-05-01';

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)));

    return {
      total,
      hours,
      minutes,
      seconds
    };
  }

  setClock('timer', deadline);

  function setClock(id, endtime) {
    const timer = document.getElementById(id);
    const hours = timer.querySelector('.hours');
    const minutes = timer.querySelector('.minutes');
    const seconds = timer.querySelector('.seconds');
    const timeInterval = setInterval(updateClock, 1000);
    const addZero = (num) => {
      if (num <= 9) {
        return "0" + num;
      } else {
        return num;
      }
    };

    updateClock();

    function updateClock() {
      const time = getTimeRemaining(endtime);

      hours.textContent = addZero(time.hours);
      minutes.textContent = addZero(time.minutes);
      seconds.textContent = addZero(time.seconds);

      if (time.total <= 0) {
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';

        clearInterval(timeInterval);
      }
    }
  }

  // Model window
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

  // Send FormData
  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо, скоро мы с Вами свяжемся!',
    fail: 'Что-то пошло не так...'
  };

  const form = document.querySelector('.main-form');
  const inputs = form.getElementsByTagName('input');
  const statusMessage = document.createElement('div');

  statusMessage.classList.add('status');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.appendChild(statusMessage);

    const formData = new FormData(form);
    const data = {};

    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    const jsonData = JSON.stringify(data);

    const request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send(jsonData);

    request.addEventListener('readystatechange', () => {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4 && request.status === 200) {
        statusMessage.innerHTML = message.success;
      } else {
        statusMessage.innerHTML = message.fail;
      }
    });

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }

    setTimeout(() => {
      statusMessage.remove();
    }, 3000);
  });




});