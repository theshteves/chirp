$(document).ready( function() {
    $("header").fadeOut(1);
    $("#wallpaper").toggle("slide", {direction: "right", distance: 1500}, 1);

    $("header").delay(250).fadeIn(2000);
    $("#wallpaper").delay(1250).effect("slide", {direction: "right", distance: 1500}, 750);

    var $chirp = $("<audio autoplay><source src='http://www.reelwavs.com/movies/finding_nemo/mine3.wav' type='audio/x-wav'></audio>");
    $chirp.appendTo("body");
});