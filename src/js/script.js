require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const calc = require('./moduls/calc'),
    form = require('./moduls/form'),
    slider = require('./moduls/slider'),
    tabs = require('./moduls/tabs'),
    timer = require('./moduls/timer'),
    modal = require('./moduls/modal');

  calc();
  form();
  slider();
  tabs();
  timer();
  modal();
});