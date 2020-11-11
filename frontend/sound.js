// Plays sounds on hover
$("input, img, button").on("mouseenter", function(){
	$("#sound").attr({ 
        'src':'photos/click.mp3', 
		'autoplay':'autoplay'
	})
});