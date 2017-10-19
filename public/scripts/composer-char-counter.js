$(function() {

  const counter = $('.counter');
        submit = $('#tweet-submit');

  $('#tweet-input').on('keyup', function() {
    let charCount = $(this).val().length;
    let count = 140 - charCount;
    counter.text(count);
    let color = count < 0 ? 'red' : 'black';
    counter.css({ color });

    const $tweetWarning = $(".tweet-box-warning");
    submit.prop('disabled', true)
    if (charCount === 0) {
      $tweetWarning.text('Tweet is Empty');
    } else if (charCount > 140) {
      $tweetWarning.text('Tweet can\'t be over 140 chars')
    } else {
      $tweetWarning.empty();
      submit.prop('disabled', false)
    }
  })

 });