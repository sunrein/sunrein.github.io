// example taken from CodeAcademy exercise. Makes button fade in and out when selected
// by the cursor, may be fun to experiment with on site

$(document).ready(function() {
    $('#contact-info').hide();

    $('button').mouseover(function() {
        $('button').fadeTo('fast', 0.6);
    });

    $('button').mouseleave(function() {
        $('button').fadeTo('fast', 1);
    });

    $('#contact').click(function() {
        $('#index').hide();
        $('#about').hide();
        $('#contact-info').show();
    });

});

// jquery effects: https://api.jquery.com/category/effects/

// jquery projects to try:
// birdman
