$(document).ready(function(){
	
	$(".mobile-menu-icon").click(function(){
		$(".menu").slideToggle();
	});
		
});

$(window).load(function(){
	
	if($('.menu-items li a').hasClass('active')){
		$('html,body').animate({scrollTop: $('.menu').offset().top}, 800);
	}
			
});