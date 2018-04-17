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
	$('#inquiryModal').modal('show');
	return false;
});

// TRANSLATE

$(document).ready(function () {
	var t = {
		'navbar:whoarewe': {
			es: "Quienes Somos",
			en: "Who are we"
		},
		'navbar:services': {
			es: "Nuestros Servicios",
			en: "Our Services"
		},
		'navbar:booking': {
			es: "Reservas",
			en: "Booking"
		},
		'navbar:areas': {
			es: "Lugares Turísticos",
			en: "Touristic Areas"
		},
		'slogan': {
			es: "Si tienes preguntas, no dudes en llamarnos o escribirnos:",
			en: "If you have any questions,  call or write to us:"
		},
		'welcome': {
			es: "Bienvenidos",
			en: "Welcome"
		},
		// FEATURES
		'fatures:climate': {
			es: "Clima",
			en: "Climate"
		},
		'feature:climate:des': {
			es: "Sol radiante todo el año para poder disfrutar de la mejor manera las diversas excursiones y atractivos turisticos de la región.",
			en: "Radiant sun all year round to enjoy the excursions and touristic attractions in the region."
		},
		'features:location': {
			es: "Ubicación Ideal",
			en: "Ideal Location"
		},
		'feature:location:des': {
			es: "Inmejorable en la carretera Huaraz - Caraz, a tan solo 25 minutos de Huaraz. Nuestra ubicacion privilegiada nos ubica en el centro de los atractivos turisticos.",
			en: "The best in the Huaraz – Caraz motorway, only 25 minutes from Huaraz. Our privileged location puts us right in the middle of all the attractions."
		},
		'feature:location:btn': {
			es: "Ver Ubicación",
			en: "Go to Map"
		},
		'feature:nature': {
			es:'Encuentro Natural',
			en:'Encounter with Nature'
		},
		'feature:nature:des': {
			es: 'Un lugar para disfrutar con la familia y amigos rodeado de arboles frutales y plantas silvestres, con vista al majestuoso nevado Hualcan o a la Cordillera Negra rodeado de tranquilidad, naturaleza y aire puro.',
			en: 'An ideal place to enjoy with family and friends surrounded by nature and the imposing Hualcan snow covered peak or by the Black mountains with pure air'
		},
		//WHOAREWE
		'whoarewe:title': {
			es: 'Quienes Somos',
			en: 'Who are we'
		},
		'whoarewe:p1': {
			es: 'El Complejo Turístico Carhuaz S.A. es un Hotel 3 estrellas fruto de una iniciativa familiar, damos una calurosa bienvenida a los turistas nacionales y extranjeros que deciden visitar el Corazón del Callejón de Huaylas.Nuestra misión es servir amistosamente a quienes nos visitan, esmerándonos para que su estadía sea placentera y confortable, porque ponemos en cada nuevo huésped el mismo entusiasmo que tuvimos con el primero.',
			en: 'Complejo Turistico Carhuaz S.A. is a 3 star hotel family business.  We welcome national and foreign tourists who decide to visit the heart of the Callejón de Huaylas.  Our mission is to serve all our visitors, doing  our best to make sure your stay is pleasurable and comfortable, because we put the same effort and enthusiasm each time we serve each guest as we did with the first one'
		},
		'whoarewe:p2': {
			es: 'Las características físicas, naturales y de ubicación convierten al Hotel en un lugar ideal para viajeros que vienen a descansar, en busca de la naturaleza y una alternativa tranquila y placentera comparada al bullicio que se encuentra en hoteles en Huaraz.Por otro lado Carhuaz está ubicado a una altura de 450 metros menos sobre el nivel del mar comparado con Huaraz.',
			en: 'Our unique location make the hotel the ideal place for travellers who come for a rest in an encounter with nature and a peaceful alternative,  far from the hustle and bustle from the hotels in Huaraz.  Furthermore, Carhuaz is located at 450 meters above sea level lower than Huaraz,  making it a warmer alternative at night.'
		},
		// SERVICES
		'services:title': {
			es: 'Nuestros Servicios',
			en: 'Our Services'
		},
		'services:rooms': {
			es: 'Habitaciones',
			en: 'Rooms'
		},
		'services:communalareas': {
			es: 'Áreas Comunes',
			en: 'Communal Areas'
		},
		'services:conference': {
			es: 'Sala de Recepciones',
			en: 'Conference/Event/Meeting room'
		},
		'services:conference:des': {
			es: 'Ofrecemos ambientes y salones especialmente acondicionados para eventos: Matrimonios, conferencias, exposiciones, agasajos, etc.',
			en: 'We have designated areas suitable for your business meetings, conferences or wedding and any other kind of celebration.'
		},
		'services:reserve': {
			es: 'Reserva Ahora',
			en: 'Book Now'
		},
	};
	var _t = $('body').translate({ lang: "es", t: t });

	function op(lg) {
		if ( lg === 'en' ) {
			return 'es';
		} else {
			return 'en';
		}
	}

	$(".lang_selector").click(function (ev) {
		var lang = $(this).attr("data-value");
		_t.lang(lang);
		ev.preventDefault();
		$(this).attr('data-value', op(lang));
		$(this).children('img').attr('src', './images/' + op(lang) + '_flag.png');
		$('.lng_label').html( lang === 'en' ? 'Español' : 'English');
	});

});