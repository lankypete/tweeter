$(function() {

  const counter = $('.counter');
        submit = $('#tweet-submit');

  $('#tweet-input').on('keyup', function() {
    let charCount = $(this).val().length;
    let count = 140 - charCount;
    counter.text(count);
    let color = count < 0 ? 'red' : 'black';
    counter.css({ color });

    //disable or en
    let disabled = count < 0 || count >= 140 ? true : false;
    submit.prop({ disabled });
  })

 });