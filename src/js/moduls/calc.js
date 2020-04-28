function culc() {
  const persons = document.querySelectorAll('.counter-block-input')[0];
  const restDays = document.querySelectorAll('.counter-block-input')[1];
  const place = document.getElementById('select');
  const totalValue = document.getElementById('total');
  const price = 1000;
  let personsSum = 0;
  let daysSum = 0;
  let total = 0;

  totalValue.innerHTML = 0;

  persons.addEventListener('change', function() {
    personsSum = +this.value;
    total = (daysSum + personsSum) * price;

    if (restDays.value === '' || persons.value === '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });

  restDays.addEventListener('change', function() {
    daysSum = +this.value;
    total = (daysSum + personsSum) * price;

    if (persons.value === '' || restDays.value === '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });

  place.addEventListener('change', function() {
    if (persons.value === '' || restDays.value === '') {
      totalValue.innerHTML = 0;
    } else {
      let tempTotal = total;
      totalValue.innerHTML = tempTotal * this.options[this.selectedIndex].value;
    }
  });
}

module.exports = culc;