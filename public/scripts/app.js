$(function() {


  function createTweetElement(data) {
    const usr = data.user;
    const tweetContent = data.content.text;

    let age = Date.now() - data.created_at;
    age *= ( (1/1000) * (1/60) * (1/60) * (1/24) );
    age = (function(age) {
      if( age <= 30 ) {
        age = Math.round(age);
        return age === 1 ? age + ' day old' : age + ' days old';
      }
      if( age > 30 ) {
        age /= 30;
        if( age > 12 ) {
          age /= 12;
          age = Math.round(age);
          return age === 1 ? age + ' year old' : age + ' years old';
        }
        age = Math.round(age);
        return age === 1 ? age + ' month old' : age + ' months old';
      };
    })(age)


    const tweet =
    `<section class="tweet">
      <header class="tweet__header">
        <img src="${usr.avatars.regular}" />
        <span class="tweet__user-name">${usr.name}</span>
        <span class="tweet__user-account">${usr.handle}</span>
      </header>
      <article class="tweet__body">
        <div>${tweetContent}</div>
      </article>
      <footer class="tweet__footer">
        <div class="tweet__age">${age}</div>
        <div class="tweet__actions">
          <img src="/images/repost.png" alt="actions repost">
          <img src="/images/flag.png" alt="actions flag">
          <img src="/images/heart.png" alt="actions heart">
        </div>
      </footer>
    </section>`

    return tweet;
  }

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
    "created_at": 1461116232227
  }

  var $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
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