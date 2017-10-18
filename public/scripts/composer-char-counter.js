$(function() {

  console.log('start');

  const counter = $('.counter');

  $('#tweet-input').on('keyup', function() {
    let charCount = $(this).val().length;
    let count = 140 - charCount;
    counter.text(count);
    let color = count < 0 ? 'red' : 'black';
    counter.css({ color });
  })

 });