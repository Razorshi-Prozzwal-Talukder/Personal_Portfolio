$(document).ready(function(e){
	$win = $(window);
	$navbar = $('#header');
	$toggle = $('.toggle-button');
	var width = $navbar.width();
	toggle_onclick($win, $navbar, width);

	// Resize Event
	$win.resize(function(){
		toggle_onclick($win, $navbar, width);
	});

	$toggle.click(function(e){
		$navbar.toggleClass("toggle-left");
	});
});

function toggle_onclick($win, $navbar, width){
	if ($win.width() <= 768) {
		$navbar.css({left: `-${width}px`})
	}else{
		$navbar.css({left:'0px'});
	}
}

var typed = new Typed('#typed',{
	strings:[
		'Full Stack Developer',
		'Android Developer'
	],
	typeSpeed: 50,
	backSpeed: 50,
	loop: true
});


var typed_2 = new Typed('#typed_2',{
	strings:[
		'Full Stack Developer.',
		'Android Developer.'
	],
	typeSpeed: 50,
	backSpeed: 50,
	loop: true
});

// animation
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
	anchor.addEventListener('click', function(e){
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior:'smooth'
		});
	});
}); 