// Plays sounds on hover
$("input").on("mouseenter", function(){
	$("#sound").attr({ 
        'src':'media/point.mp3', 
		'autoplay':'autoplay'
	})
});

// Opens & closes menu on click


$("#openmenu, #closemenu").on("click",()=>{$("#navclosed").toggleClass("hide");$("#navopened").toggleClass("hide")})