$(document).ready(function() {
    $('#home').click(function() {
      $('#content').hide();
      $('#intro').show();
    });

    $('.navigation').on('click', function(e){
      e.preventDefault();
      $('#content').show();
      $('#intro').hide();
      var page = $(this).attr('href');

      callPage(page);

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
