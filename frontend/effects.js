// Plays sounds on hover
$("input").on("mouseenter", function(){
	$("#sound").attr({ 
        'src':'media/point.mp3', 
		'autoplay':'autoplay'
	})
});

// Opens & closes menu on click
$("#openmenu, #closemenu").on("click",()=>{$("#navclosed").toggleClass("hide");$("#navopened").toggleClass("hide")})


// buttons before react
$("#login").on("click",()=>{$("#signin").toggleClass("hide");$("#landing").toggleClass("hide")})

$("#register1, #register2").on("click",()=>{$("#signup").toggleClass("hide");$("#signin").toggleClass("hide")})
