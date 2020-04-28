function form() {
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

    statusMessage.innerHTML = message.loading;

    fetch('server.php', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=utf-8'
      },
      body: jsonData
    })
      .then(response => response.json())
      .then(() => statusMessage.innerHTML = message.success)
      .catch(() => statusMessage.innerHTML = message.fail);

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }

    setTimeout(() => {
      statusMessage.remove();
    }, 3000);
  });
}

module.exports = form;