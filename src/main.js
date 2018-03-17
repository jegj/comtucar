import './assets/css/styles.css';
import './assets/css/font1.css';
import './assets/css/font2.css';

// Room Tabs
//-------------------------------------------------------------------------------

// Thumbnails
$('.room-tabs-gallery').on('click', '.room-tabs-gallery-thumb', function () {
	var tabId = $(this).attr('href');
	var newImgSrc = $(this).find('img').attr('src');
	var imgTitle = $(this).find('img').attr('title');

	$(tabId + " .room-tabs-gallery-preview").fadeOut(100, function () {
		$(tabId + " .room-tabs-gallery-preview").attr("src", newImgSrc);
		$(tabId + " .room-tabs-gallery-preview").attr("title", imgTitle);
	}).fadeIn(100);

	return false;
});

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


$.fn.datepicker.dates['es'] = {
	days: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
	daysShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
	daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
	months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
	monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
	today: "Hoy",
	clear: "Limpiar",
	format: "mm/dd/yyyy",
	titleFormat: "MM yyyy", /* Leverages same syntax as 'format' */
	weekStart: 0
};

//DATEPICKER
$('.datepicker').datepicker({
	todayHighlight: true,
	startDate: new Date(),
	language: 'es'
}).on('changeDate', function () {
	$(this).datepicker('hide');
});


// PHONE ACTION

$('#callbtn').click(function(e){
	window.location.href = 'tel:+51982880414';
});

//MODAL

$('.show-inquiry-modal').on('click', function () {
	// var object = $(this).data('object');
	// if (object) {
	// 	$("#inquiry-object").val(object);
	// }
	$('#inquiryModal').modal('show');
	return false;
});

