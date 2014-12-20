$(document).ready( function() {
    
    // Hide elements for presentation 
    $("header").fadeOut(1);
    $("#wallpaper").toggle("slide", {direction: "right", distance: 1500}, 1);

    // Display elements
    $("header").delay(250).fadeIn(2000);
    $("#wallpaper").delay(1250).effect("slide", {direction: "right", distance: 1500}, 750);
    var $introSound = $("<audio autoplay><source src='http://www.reelwavs.com/movies/finding_nemo/mine3.wav' type='audio/x-wav'></audio>");
    $introSound.appendTo("body");

	function newChirp (chirpNum, rate, volume, delay) {
		var elementCode = "<audio id='" + chirpNum + "'><source src='http://www.reelwavs.com/movies/finding_nemo/mine2.wav' type='audio/x-wav'></audio>";
		var $newElement = $(elementCode);
    	$newElement.appendTo("body");
    	
    	var thatChirp = document.getElementById(chirpNum);
		thatChirp.playbackRate = rate;
		thatChirp.volume = volume;
		
		setTimeout(function () {
			thatChirp.play();
		}, delay);
	}

	//Unleash the seagulls
    for (var time = 4; time <= 30; time += .25) {

    	/*  --- BROKEN ---
    	// Signature Dissonance Algorithm
    	var density = 2 + Math.sin(time) - Math.cos(time / 4);
    	var rate = .75 + (time / 50) * (2 - Math.cos(time / 3) + 1.5 * Math.sin(2 * time));
    	var volume = .75 * rate;
		*/

		var density = Math.floor((Math.random()*3) + 1);
		var rate = Math.floor((Math.random() * 9) + 2) / 3;
		// var rate = 2 + Math.sin(time)/2 + Math.sin(4 * time)/3 + (2/3) * Math.cos(time/2) - Math.sin(time/3)/2;
		var volume = 1 - (rate/4);
		var seconds = time * 1000;

    	for (var num = 0; num <= density; num++) {
    		newChirp(time + (num/2), rate, volume, (time + (num/2)) * 1000);
    	}
    }
});