$(function() {

  function createTweetElement(data) {
    const tweet = {};
    tweet.usr = data.user;
    tweet.tweetBody = data.content.text;
    const relativeMiliseconds = Date.now() - data.created_at;
    tweet.created = moment(data.created_at).fromNow();;

    //set to handlebars template
    const source = $('#tweet-template').html();
    var template = Handlebars.compile(source);
    var html = template(tweet);

    return html;
  }


  //function to retrieve all tweets
  function loadTweets() {
    $.ajax({
      url: '/tweets',
      method: 'GET'
    }).done(function(tweets){
      var $tweets = $('#tweets').empty();
      for(let tweet in tweets) {
        tweet = tweets[tweet];
        var $tweet = createTweetElement(tweet);
        $tweets.prepend($tweet);
      }
    })
  }

  //when the page loads
  loadTweets();

  //asynch ajax new tweet submissions and fetch tweets
  //prevent default tweet box submission
  const $tweetForm = $('[method="post"][action="/tweets"]');
  $tweetForm.on('submit', function(event) {
    event.preventDefault();
    const formElement = this;
    const formData = $(this).serialize();

    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: formData
    }).done(function(){
      formElement.reset()
      loadTweets();
    });

  });




});











