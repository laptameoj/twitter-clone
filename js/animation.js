$(document).ready(function() {
  console.log('ready');



$('#tweet-submit').hide();
$('#char-count').hide();
$('.tweet-actions').hide();

  var textMax = 140;
  $('#char-count').html(textMax);


  console.log(textMax);

  $('#dashboard').on('mouseenter', function() {
    $('#char-count').slideDown('slow');
    $('#tweet-submit').slideDown('slow');
    $('#composer').animate({
      height: "5em"
    }, 400);
    //.slideDown();

    $('#composer').keyup(function() {
      var text_length = $('#composer').val().length;
      var text_remaining = textMax - text_length;
      $('#char-count').html(text_remaining);
      console.log(text_length);

      if (text_remaining < 11){
        $('#char-count').css({color: "red"});
      } else {
        $('#char-count').css({color: "#999"});
      }

      if (text_length > 140){
        console.log('text',text_length);
        $('#tweet-submit').attr('disabled', true);

      } else {
        $('#tweet-submit').removeAttr('disabled');
      }
    });
  });


  $('#dashboard').on('mouseleave', function() {
    if ($('#composer').val().length <= 0) {
      $('#char-count').slideUp();
      //$('#tweet-submit').fadeOut('slow', 'linear');
      $('#tweet-submit').slideUp('slow');
      $('#composer').animate({'height': "2.5em"}, 400);
    }
    });

    $('#tweet-submit').on('click', function(){
      var tweetContent = $('#composer').val();
      $('#stream').prepend(
        "<div class='tweet'>" +
     "<div class='content'>" +
       "<img class='avatar' src='img/alagoon.jpg' />" +
       "<strong class='fullname'>Joseph Palacio</strong>" +
       "<span class='username'>@rthames62</span>" +
       "<p class='tweet-text'>" + tweetContent + "</p>" +
       "<div class='tweet-actions'>" +
         "<ul>" +
           "<li><span class='icon action-reply'></span> Reply</li>" +
           "<li><span class='icon action-retweet'></span> Retweet</li>" +
           "<li><span class='icon action-favorite'></span> Favorite</li>" +
           "<li><span class='icon action-more'></span> More</li>" +
         "</ul>" +
       "</div>" +
       "<div class='stats'>" +
         "<div class='retweets'>" +
           "<p class='num-retweets'>0</p>" +
           "<p>RETWEETS</p>" +
         "</div>" +
         "<div class='favorites'>" +
           "<p class='num-favorites'>0</p>" +
           "<p>FAVORITES</p>" +
         "</div>" +
         "<div class='users-interact'>" +
           "<div>" +
           "</div>" +
         "</div>" +
         "<div class='time'>" +
           "4:51 PM - 19 Sep 13" +
         "</div>" +
       "</div>" +
       "<div class='reply'>" +
         "<img class='avatar' src='img/alagoon.jpg' />" +
         "<textarea class='tweet-compose' placeholder='Reply to @rthames62'/></textarea>" +
       "</div>" +
     "</div>" +
   "</div>"
      )
    });

    $('.tweet').on('mouseenter', function() {
      console.log('this is entering');
      $(this).find('.tweet-actions').slideDown('slow');
    });

    $('.tweet').on('mouseleave', function() {
      console.log('this is leaving');
      $(this).find('.tweet-actions').slideUp('slow');

    });

});
