$(document).ready(function() {
    var $loader = $(".loader");

    // Remove our loader from page.
    // Force it to appear at least 5 seconds.
    setTimeout(function() {
        $loader.fadeOut(300);
    }, 5000);
});