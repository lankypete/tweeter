$(function() {
  // Test / driver code (temporary). Eventually will get this from the server.
  var tweetData = {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1508362385000
  }

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
    console.log(html);

    return html;
  }

  var $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  //console.log($tweet); // to see what it looks like
  $('#tweets').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});


// <section class="tweet">
//   <header class="tweet__header">
//     <img src="http://lorempixel.com/300/200" />
//     <span class="tweet__user-name">G Jones</span>
//     <span class="tweet__user-account">@GJones</span>
//   </header>
//   <article class="tweet__body">
//     <div>let me get 140 characters around approximately on the money.  why do you say it's on the money.. like it's so right that it's worth somehtin</div>
//   </article>
//   <footer class="tweet__footer">
//     <div class="tweet__age">10 days ago</div>
//     <div class="tweet__actions">
//       <img src="/images/repost.png" alt="actions repost">
//       <img src="/images/flag.png" alt="actions flag">
//       <img src="/images/heart.png" alt="actions heart">
//     </div>
//   </footer>
// </section>