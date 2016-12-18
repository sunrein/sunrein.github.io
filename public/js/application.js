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
        $('#content').hide();
      });
    });

    function callPage(page){
      $.ajax({
        url: page,
        type: "GET",
        dataType: "text",

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
