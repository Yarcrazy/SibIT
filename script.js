"use strict";

$('#drop-button').on('click', (e) => {
  $('.hidden-form').toggleClass('hide');
  $('.arr').toggleClass('arr-down arr-right');
});
