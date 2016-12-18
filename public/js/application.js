// example taken from CodeAcademy exercise. Makes button fade in and out when selected
// by the cursor, may be fun to experiment with on site

$(document).ready(function() {
    $('a').mouseover(function() {
        $('a').fadeTo('fast', 0.6);
    });

    $('a').mouseleave(function() {
        $('a').fadeTo('fast', 1);
    });
});

// jquery effects: https://api.jquery.com/category/effects/

// jquery projects to try:
// birdman
