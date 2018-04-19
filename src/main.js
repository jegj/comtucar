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
			en: "Who we are"
		},
		'navbar:services': {
			es: "Nuestros Servicios",
			en: "Our Services"
		},
		'navbar:booking': {
			es: "Reservas",
			en: "Bookings"
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
			en: 'Who we are'
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
		'services:conference:d1': {
			es: 'Servicios de mozos, vajilla, mantelería',
			en: 'Waiters and Tableware\'s service'
		},
		'services:conference:d2': {
			es: 'Servicio de amplificación, música ambiental',
			en: 'Amplification service, environmental music'
		},
		'services:conference:d3': {
			es: 'Opciones de comidas típicas o la alternativa que Ud. disponga, pues finalmente estamos para servirlo',
			en: 'Typical food options or the alternative that you have, because finally we are here to serve you'
		},
		'services:book:btn': {
			es: 'Reserva Ahora',
			en: 'Book Now'
		},
		'services:rooms:des': {
			es: 'Contamos con 38 habitaciones las cuales cuentan con la siguientes facilidades:',
			en: 'We have 38 rooms (single, doubles and triples) with the following features:'
		},
		'services:rooms:single': {
			es: 'Simples',
			en: 'Singles'
		},
		'services:rooms:double': {
			es: 'Dobles/Matrimoniales',
			en: 'Double/Matrimonial'
		},
		'services:rooms:triple': {
			es: 'Triple',
			en: 'Triple'
		},
		'services:rooms:jacuzzi': {
			es: 'Suite con jacuzzi',
			en: 'Jacuzzi Suite'
		},
		'services:rooms:privatebathroom': {
			es: 'Baño Privado',
			en: 'Private Bathroom'
		},
		'services:rooms:phone': {
			es: 'Teléfono',
			en: 'Phone'
		},
		'services:rooms:intercom': {
			es: 'Intercomunicador',
			en: 'Intercom'
		},
		'services:communalareas:des': {
			es: 'Pensando en su estadia y sus necesidades contamos con las siguentes instalaciones y servicios:',
			en: 'We have the following areas and services at your disposal:'
		},
		'services:communalareas:restaurant': {
			es: 'Restaurant,  bar y cafeteria',
			en: 'Restaurant/Coffee Bar'
		},
		'services:communalareas:living': {
			es: 'Sala de Estar',
			en: 'Living Room'
		},
		'services:communalareas:services:communalareas:laundry': {
			es: 'Lavanderia',
			en: 'Laundry Service'
		},
		'services:communalareas:aud': {
			es: 'Restaurant,  bar y cafeteria',
			en: 'Auditorium/Conference Room'
		},
		'services:communalareas:parking': {
			es: 'Estacionamiento Privado',
			en: 'Private Parking'
		},
		'services:communalareas:country': {
			es: 'Zona Campestre',
			en: 'Country Zone'
		},
		'services:communalareas:vigilence': {
			es: 'Guardiania Permanente',
			en: 'Continued vigilance'
		},
		'services:communalareas:fronton': {
			es: 'Cancha de frontón',
			en: 'Fronton court'
		},
		'services:communalareas:pool': {
			es: 'Piscina',
			en: 'Swimming Pool'
		},
		'services:communalareas:lookput': {
			es: 'Mirador con vistas para tomar fotografias a los nevados y al paisaje andino',
			en: 'Tourist lookout to take snapshots of the snow-capped mountains'
		},
		'touristic': {
			es: 'Lugares Turísticos',
			en: 'Touristic Places'
		},
		'touristic:des': {
			es: 'Carhuaz bajo el tutelar del Majestuoso Nevado Hualcán cuenta con un potencial turistico que sorprende a propios y extraños.',
			en: 'Carhuaz is located at the foot of  the Majestic Hualcan snow capped mountain and has a great deal of touristic spots nearby.'
		},
		'touristic:peak': {
			es: 'Punta Olímpica',
			en: 'Punta Olimpica (Olympic Peak)'
		},
		'touristic:peak:des': {
			es: 'A 4,890 m.s.n.m. ubicado en la carretera Carhuaz - Shilla-Chacas, donde se puede observar y palpar la nieve perpetua y las aguas cristalinas de vistosas lagunas, asi como practicar el "Siqui Esqui" o sea deslizarse sentado sobre la nieve. Es el lugar del tunel vehicular mas largo del Peru y el de mayor altitud en el mundo.',
			en: 'At 4,890 meters above sea level, located in the Carhuaz – Chacas road, you will be able to see and touch the snow as well as admire beautiful lakes.  If you dare you can practice the ‘siki ski’ or ‘butt slide’.  It is the largest vehicular tunnel in Perú  and the highest in the world.'
		},
		'touristic:chancos': {
			es: 'Baños Termales de Chancos',
			en: 'Chancos Thermal Spa'
		},
		'touristic:chancos:des': {
			es: 'Sea por turismo o por razones de salud, es el lugar ideal por las propiedades curativas de este lugar. Sus aguas varian de 68 a 72^C. Existen cuevas, donde se pueden ingresar hojas de eucalipto y por la accion del vapor emanan un aroma que penetra a los pulmones favoreciendo a quienes padecen de problemas musculares y respiratorios.',
			en: 'If you travel for pleasure or for medical reasons, this natural spa has healing properties.  The water and cave temperatures range from 68~ to 72~C.  You can bring your own eucalyptus leaves to the caves and the vapours  released help relieve muscle and respiratory problems.'
		},
		'touristic:honcopampa': {
			es: 'Centro Arqueologico Honcopampa',
			en: 'Honcopampa Archeologial Site'
		},
		'touristic:honcopampa:des': {
			es: 'Ha sido el escenario de los grupos etnicos 700 a 1000 D.C. Son doce hectareas divididos en dos sectores: Residencial y ceremonial de tumbas.  Las viviendas son rectangulares con patio central y las tumbas son necropolis de chullpas o mausoleos de dos pisos.',
			en: 'A civilization flourished on this site between 700 and 100 AC.   Part of the residences and ceremonial tombs can still be appreciated despite time passing.'
		},
		'touristic:huascaran': {
			es: 'Nevado Huascaran',
			en: 'Huascaran Mountain'
		},
		'touristic:huascaran:des': {
			es: 'Es el nevado mas alto del Perú a 6768 m.s.n.m. y el más popular.  Se ubica en Yungay, a 20 kms de Carhuaz.  Al pie se encuentran las lagunas de Llanganuco, de aguas turquezas y los bosques de quenuales.  Es una zona impresionante y su caracterisitca principal es la biodiversividad de flora y fauna.',
			en: 'It is the highest peak in Perú at 6768 metres above sea level and the most popular.  It is located in Yungay, 20 kms north of Carhuaz.  The famous Llanganuco lakes are located nearby with its turquoise waters that change colour throughout the day.  It is an ideal location to appreciate the biodiversity of the local flora and fauna.'
		},


		'booking:label': {
			es: 'Reservas',
			en: 'Bookings'
		},
		'booking:select': {
			es: 'Seleccione su Habitación',
			en: 'Select your room'
		},
		'booking:single':{
			es: 'Simple (S/.60)',
			en: 'Single (S/.60)'
		},
		'booking:single:easter':{
			es: 'Simple - Semana Santa o Fiestas Patrias(S/.100)',
			en: 'Single – Easter or last week of July S/.100'
		},
		'booking:double':{
			es: 'Doble/Matrimonial(S/.100)',
			en: 'Double/Matrimonial S/.100'
		},
		'booking:double:easter':{
			es: 'Doble/Matrimonial - Semana Santa o Fiestas Patrias(S/.160)',
			en: 'Double/Matrimonial – Easter of last week of July S/.160'
		},
		'booking:triple':{
			es: 'Triple(S/.140)',
			en: 'Triple(S/.140)'
		},
		'booking:triple:easter':{
			es: 'Triples - Semana Santa o Fiestas Patrias(S/.180)',
			en: 'Triple – Easter or last week of July S/.180'
		},
		'booking:matrimonial':{
			es: 'Suite Matriomonial(S/.160)',
			en: 'VIP Suite  S/.160'
		},
		'booking:matrimonial:easter':{
			es: 'Suite Matriomonial - Semana Santa o Fiestas Patrias(S/.230)',
			en: 'VIP Suite – Easter or last week of July S/.230'
		},
		'booking:passenger':{
			es: 'Total del Pasajeros',
			en: 'Total number of passengers'
		},
		'booking:beds':{
			es: 'Cama Adicionales',
			en: 'Additional beds required'
		},
		'booking:breakfast':{
			es: '(*)Los desayunos son incluidos en la tarifa de Temporada Alta',
			en: '(*) Breakfast is included in high season rates'
		},
		'booking:cbreakfast':{
			es: 'Desayuno Continental',
			en: 'Continental Breakfast'
		},
		'booking:abreakfast':{
			es: 'Desayuno Americano',
			en: 'American Breakfast'
		},
		'booking:arrival':{
			es: 'Fecha de Arrivo',
			en: 'Arrival Date'
		},
		'booking:harrival':{
			es: 'Hora',
			en: 'Estimated time of arrival'
		},
		'booking:harrival:label':{
			es: 'Seleccione la Hora',
			en: 'Select the Hour'
		},
		'booking:depature':{
			es: 'Fecha de Salida',
			en: 'Departure Date'
		},
		'booking:hdepature':{
			es: 'Hora',
			en: 'Estimated time of departure'
		},
		'booking:personallabel': {
			es: 'Información Personal',
			en: 'Personal Information'
		},
		'booking:name': {
			es: 'Nombre',
			en: 'Name'
		},
		'booking:surname': {
			es: 'Apellido',
			en: 'Surname'
		},
		'booking:address': {
			es: 'Dirección',
			en: 'Address'
		},
		'booking:city': {
			es: 'Ciudad',
			en: 'City'
		},
		'booking:phonenumber': {
			es: 'Teléfono',
			en: 'Telephone'
		},
		'booking:email': {
			es: 'Correo',
			en: 'Email Address'
		},
		'booking:addtional': {
			es: 'Información Adicional',
			en: 'Additional Information'
		},
		'booking:aware': {
			es: 'Tomar en cuenta que este formulario no reserva totalmente la habitacion. Solo solicita una reserva para dicha habitacion. Los precios estan sujetos cambios de acuerdo a la temporada, asi como cualquier otro detalle que especifique.',
			en: '!Please be aware that this form does not automatically reserve a room,  it is an enquiry to reserve.'
		},
		'booking:aware:black':{
			es: 'Nos pondremos en contacto brevemente via email o telefonica. Gracias!',
			en: 'We will get in touch by phone or email to confirm.  Thank you.'
		},
		'booking:button': {
			es: 'Verificar Disponibilidad',
			en: 'Check Availability'
		}
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