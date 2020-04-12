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

$('.invest-form').submit((e) => {
  e.preventDefault();
  let data = $('.invest-form').serialize();
  $.post({
    url: '',
    data: data,
    success: () => {
      alert('отправка прошла успешно!')
    },
  })
});
