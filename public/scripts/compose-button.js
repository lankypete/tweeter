$(function(){

  const $btn = $('#nav-bar .compose-btn');
  const $tweetBox = $('#tweet-box');

  $btn.on('click', () => {
    $tweetBox.fadeToggle();
    $tweetBox.find('textarea').focus();
  })

})