/* global Vue */
/* global myapp:true */

    // setup our draggable windows  
    $( function() {
      $('#topmenu').draggable({
        snapMode: "outer",
        snap: true,
        snapTolerance: 10,
        disabled: true
      });
      
      $('#dock').draggable({
        snapMode: "outer",
        snap: true,
        snapTolerance: 10,
        disabled: true
      });
      
      $( ".window" ).draggable({
        snapMode: "both",
        snap: true,
        snapTolerance: 10
      });
    });


    // position dock at bottom of browser screen, depending on user's browser height
    $(window).resize(function() {
        $('#dock').css('top', $(window).height() - 409 ); // position dock at bottom of browser window 
        $('#screen').css('height', $(window).height() );  // change height of 'screen' to be equal to browser window height, then hide the overflow
        $('#main').css('top', ($(window).height() - 354 - 50 )/2);  // position quote window on center of screen. 
        $('#main').css('left', ($(window).width() - 585) / 2 );     // position quote window on center
    });

    $(window).trigger('resize');


    // setup VueJS for random quotes
    myapp = new Vue({
      el: '#screen',
      
      data: {
        name: 'Owel',
        ndx: 0,
        quotes: [ 
          {person: 'Steve Jobs', message: "Being the richest man in the cemetery doesn't matter to me. Going to bed at night saying we've done something wonderful, that's what matters to me."  },
          {person: 'Steve Jobs', message: "Innovation distinguishes between a leader and a follower."},
          {person: 'Steve Jobs', message: "Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations."},
          {person: 'Steve Jobs', message: "Be a yardstick of quality. Some people aren't used to an environment where excellence is expected."},
          {person: 'Steve Jobs', message: "It's really hard to design products by focus groups. A lot of times, people don't know what they want until you show it to them."},
          {person: 'Steve Jobs', message: "Design is not just what it looks like and feels like. Design is how it works."},
          {person: 'Steve Jobs', message: "I want to put a ding in the universe."},
          {person: 'Steve Jobs', message: "My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time."},
          {person: 'Steve Jobs', message: "Sometimes life is going to hit you in the head with a brick. Don\'t lose faith."},
          {person: 'Steve Jobs', message: "I'm convinced that about half of what separates the successful entrepreneurs from the non-successful ones is pure perseverance."},
          {person: 'Steve Jobs', message: "Great things in business are never done by one person. They're done by a team of people."},
          {person: 'Steve Jobs', message: "Be a yardstick of quality. Some people aren't used to an environment where excellence is expected."}
        ]
      },
      
      methods: {
        generateNewQuote: function(){
          $('#quote').hide();
          setTimeout(function(){
            $('#quote').fadeIn("400");            
          } ,150);
          this.ndx = parseInt(Math.random() * this.quotes.length); 
        }
      }
    });
  
  