"use strict";

$('#drop-button').on('click', () => {
  $('.hidden-form').toggleClass('hide');
  $('.arr').toggleClass('arr-down arr-right');
});

$('.limit-check').click((e) => {
  let input = e.target.dataset.input;
  $('#' + input).prop('disabled', (i, old) => {
    return !old;
  });
});
