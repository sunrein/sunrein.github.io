// example taken from CodeAcademy exercise. Makes button fade in and out when selected
// by the cursor, may be fun to experiment with on site

$(document).ready(function() {
    $('a').mouseover(function() {
        $('a').fadeTo('fast', 0.6);
    });

    $('a').mouseleave(function() {
        $('a').fadeTo('fast', 1);
    });

    $('a').on('click', function(e){
      e.preventDefault();
      var page = $(this).attr('href');

      callPage(page);

      $('#home').click(function() {
        ('#content').hide();
      });
    });

    function callPage(page){
      var request = $.ajax({
        url: page,
        method: "GET",


        success: function(response) {
          console.log('The page loaded successfully!', response);
          $('#content').html(response);
        },

        error: function(error) {
          console.log('The page could not be loaded successfully', error);
        },

      });
    }

});

// jquery effects: https://api.jquery.com/category/effects/

// jquery projects to try:
// birdman
