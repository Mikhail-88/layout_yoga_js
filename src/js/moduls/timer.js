function timer() {
  const deadline = '2020-07-01';

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
}

module.exports = timer;