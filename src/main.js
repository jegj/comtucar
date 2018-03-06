// Navigation Close on Click
//-------------------------------------------------------------------------------
$(document).ready(function () {
	$(".navbar-nav li a").on('click', function (event) {
		$('.navbar-toggle').click()
	});
});

// Scroll To Animation
//-------------------------------------------------------------------------------
$(document).ready(function () {
	// $('body').scrollspy({ target: '#navigation-top', offset: 100 });

	var scrollTo = $(".scroll-to");
	
	scrollTo.on('click', function (event) {
		//HIDE MODAL
		// $('.modal').modal('hide');
		var position = $(document).scrollTop();
		var scrollOffset = 99;
	
		var marker = $(this).attr('href');
		$('html, body').animate({ scrollTop: $(marker).offset().top - scrollOffset }, 'slow');
		return false;
	});
});


// Scroll Up Btn
//-------------------------------------------------------------------------------
$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$('.scroll-up-btn').removeClass("animated fadeOutRight");
		$('.scroll-up-btn').fadeIn().addClass("animated fadeInRight");
	} else {
		$('.scroll-up-btn').removeClass("animated fadeInRight");
		$('.scroll-up-btn').fadeOut().addClass("animated fadeOutRight");
	}
});
