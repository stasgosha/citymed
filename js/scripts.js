document.addEventListener('DOMContentLoaded', function(){

	// Sliders
	function equalSlideHeight(slider){
		$(slider).on('setPosition', function () {
			$(this).find('.slick-slide').height('auto');
			var slickTrack = $(this).find('.slick-track');
			var slickTrackHeight = $(slickTrack).height();
			$(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
		});
	}

	let arrowsButtons = {
		prevArrow: '<button type="button" class="slick-arrow slick-prev" aria-label="Предыдущие"><svg viewBox="0 0 290 492" xmlns="http://www.w3.org/2000/svg"><path d="M97 246L281 62a27 27 0 000-38L265 8a27 27 0 00-38 0L8 227a27 27 0 000 38l219 219a27 27 0 0038 0l16-16c10-10 10-28 0-38L97 246z"/></svg></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next" aria-label="Следующие"><svg viewBox="0 0 290 492" xmlns="http://www.w3.org/2000/svg"><path d="M192 246L8 62a27 27 0 010-38L24 8a27 27 0 0138 0l219 219a27 27 0 010 38L62 484a27 27 0 01-38 0L8 468a27 27 0 010-38l184-184z"/></svg></button>'
	}

	$('.first-screen-slider-wrapper').each(function(i, el){
		$(el).find('.first-screen-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			...arrowsButtons,
			appendArrows: $(el).find('.nav-arrows'),
			dots: true,
			infinite: true,
			speed: 600
		});

		equalSlideHeight($(el).find('.first-screen-slider'));
	});

	$('.photos-slider-wrapper').each(function(i, el){
		$(el).find('.photos-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			...arrowsButtons,
			dots: true,
			appendArrows: $(el).find('.nav-arrows'),
			infinite: true,
			speed: 600,
			vertical: true,
			responsive: [
				{
					breakpoint: 576,
					settings: {
						vertical: false,
						arrows: false
					}
				}
			]
		});
	});

	$('.equipment-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite: true,
		speed: 600,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					dots: true,
					slidesToShow: 2
				}
			}
		]
	});

	$('.team-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		...arrowsButtons,
		dots: false,
		infinite: true,
		speed: 600,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 2,
					// arrows: false
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true
				}
			}
		]
	});

	equalSlideHeight('.team-slider');

	$('.reviews-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		...arrowsButtons,
		dots: true,
		infinite: true,
		speed: 600,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					arrows: false
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
			}
		]
	});

	equalSlideHeight('.reviews-slider');

	$('.licenses-slider:not(.small)').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		arrows: true,
		...arrowsButtons,
		dots: true,
		infinite: true,
		speed: 600,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					arrows: false
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 3,
					arrows: false
				}
			},
			{
				breakpoint: 420,
				settings: {
					slidesToShow: 2,
					arrows: false
				}
			}
		]
	});

	$('.licenses-slider.small').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		...arrowsButtons,
		dots: false,
		infinite: true,
		speed: 600,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					dots: true
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 3,
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 420,
				settings: {
					slidesToShow: 2,
					arrows: false,
					dots: true
				}
			}
		]
	});

	equalSlideHeight('.licenses-slider');

	if ($(window).width() < 992) {
		$('.partners-slider').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
			infinite: true,
			speed: 600,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 420,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});

		equalSlideHeight('.partners-slider');
	}

	$('.clients-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		...arrowsButtons,
		dots: true,
		infinite: true,
		speed: 600,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					arrows: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					arrows: false
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					arrows: false
				}
			},
			{
				breakpoint: 420,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
			}
		]
	});

	equalSlideHeight('.clients-slider');

	if ($(window).width() < 768) {
		$('.advantages-slider, .directions-slider').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
			infinite: true,
			speed: 600,
			responsive: [
				{
					breakpoint: 520,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});

		equalSlideHeight('.advantages-slider, .directions-slider');
	}

	if ($(window).width() < 576) {
		$('.services-slider').slick({
			slidesToShow: 2,
			rows: 2,
			slidesToScroll: 2,
			arrows: false,
			dots: true,
			infinite: true,
			speed: 600
		});

		equalSlideHeight('.services-slider');
	}

	$('.select').on('change', function(e){
		$(this).find('[selected][disabled]').remove();
		$(this).addClass('changed');
		$(this).off('change');
	});

	$('.checkbox a').click(function(e){
		e.stopPropagation();
	});

	// Branches nav
	$('.branches-nav-component .cmp-opener').click(function(e){
		e.preventDefault();
		$(this).blur();

		$(this).closest('.branches-nav-component').toggleClass('opened');
	});

	$('.branches-nav-component .cmp-close').click(function(e){
		e.preventDefault();
		$(this).blur();

		$(this).closest('.branches-nav-component').removeClass('opened');
	});

	// History
	$('.history-gallery').each(function(i, el){
		$(el).find('.timeline-slider').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			arrows: true,
			...arrowsButtons,
			dots: false,
			infinite: true,
			speed: 600,
			centerMode: true,
			centerPadding: '3%',
			focusOnSelect: true,
			initialSlide: 3,
			asNavFor: $(el).find('.content-slider'),
			responsive: [
				{
					breakpoint: 440,
					settings: {
						slidesToShow: 3,
						initialSlide: 3
					}
				}
			]
		});

		$(el).find('.content-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: false,
			infinite: true,
			speed: 600,
			initialSlide: 3,
			asNavFor: $(el).find('.timeline-slider'),
			adaptiveHeight: true
		});
	});

	// Scroll to anchor
	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();

		let offset = 0;

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - offset
		}, 500);
		$(this).blur();
	});

	// Menu opener
	$('.menu-opener').click(function(e){
		e.preventDefault();

		$(this).toggleClass('active');
		$('.panel').toggleClass('opened');
		$('body').toggleClass('menu-opened');
		$(this).blur();
	});

	$('.panel-close').click(function(e){
		e.preventDefault();

		$('.menu-opener').removeClass('active');
		$('.panel').removeClass('opened');
		$('body').removeClass('menu-opened');
		$(this).blur();
	});

	// 
	if ($(window).width() < 768) {
		$('[data-mob-placeholder]').each(function(i, el){
			let placeholder = $(el).data('mob-placeholder');

			$(el).attr('placeholder', placeholder);
		});
	}

	// Mobile nav
	// $('.mobile-top-nav a').click(function(){
	// 	$('.menu-opener').click();
	// });

	// $('.mobile-nav .current-menu-parent').addClass('opened').find('.sub-menu').stop().slideToggle(300);

	// $('.mobile-nav .menu-item-has-children > a').click(function(e){
	// 	e.preventDefault();
	// });

	// $('.mobile-nav .menu-item-has-children li a').click(function(e){
	// 	e.stopPropagation();
	// });

	// $('.mobile-nav .menu-item-has-children').click(function(){
	// 	$(this).toggleClass('opened').find('.sub-menu').stop().slideToggle(300);
	// });

	// Sticky Header
	window.addEventListener('scroll', function(){
		let header = document.querySelector('.header');

		if (!!header) {
			window.scrollY > 0
				? header.classList.add('sticky')
				: header.classList.remove('sticky');
		};
	});

	// Select Field
	jcf.setOptions('Select', {
		wrapNative: false,
		wrapNativeOnMobile: true,
		fakeDropInBody: false
	});

	jcf.replace( $('.form-field select') );

	// Modals
	$('.modal').css('display','block');

	function getScrollWidth(){
		// create element with scroll
		let div = document.createElement('div');

		div.style.overflowY = 'scroll';
		div.style.width = '50px';
		div.style.height = '50px';

		document.body.append(div);
		let scrollWidth = div.offsetWidth - div.clientWidth;

		div.remove();

		return scrollWidth;
	}

	$('.modal-dialog').click(e => e.stopPropagation());
	$('.modal').click(function(e){
		hideModal( $(this) );
		$('.video-modal .modal-video').html('<div id="modal-video-iframe"></div>');
	});

	$('.modal-close').click(function(e){
		e.preventDefault();

		hideModal( $(this).closest('.modal') );
		$('.video-modal .modal-video').html('<div id="modal-video-iframe"></div>');
	});

	$('[data-modal]').click(function(e){
		e.preventDefault();
		e.stopPropagation();

		hideModal('.modal');

		showModal( $(this).data('modal') );
	});

	$('[data-video-modal]').click(function(e){
		e.preventDefault();
		e.stopPropagation();

		let videoId = $(this).data('video-modal');
		let videoType = $(this).data('video-type');

		if (videoType == 'youtube') {
			$('#modal-video-iframe').append('<div class="video-iframe" id="'+videoId+'"></div>');
			createVideo(videoId, videoId);
		} else if(videoType == 'vimeo'){
			$('#modal-video-iframe').html('<iframe class="video-iframe" src="https://player.vimeo.com/video/'+videoId+'?playsinline=0&autoplay=1&transparent=0&app_id=122963">');
		}

		hideModal('.modal');

		showModal( "#video-modal" );
	});

	window.showModal = showModal;


	// Video
	$('.video-block:not([data-video-modal])').on('click', function () {
		$(this).addClass('playing');

		var $videoId = $(this).data('video-id');
		$(this).append('<div class="video-iframe" id="'+$videoId+'"></div>');
		createVideo($videoId, $videoId);
	});

	var player;
	function createVideo(videoBlockId, videoId) {
		player = new YT.Player(videoBlockId, {
			videoId: videoId,
			playerVars: {
				'autohide': 1,
				'showinfo' : 0,
				'rel': 0,
				'loop': 1
			},
			events: {
				'onReady': function (e) {
					// e.target.mute();
					e.target.playVideo();
				}
			}
		});
	}

	$('.modal-btn').click(function(e){
		e.preventDefault();

		hideModal( $(this).closest('.modal') );

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 800);
	});

	let bodyScrolled = 0;
	function showModal(modal, ){
		$(modal).addClass('visible');
		bodyScrolled = $(window).scrollTop();
		$('body').addClass('modal-visible')
				 .scrollTop(bodyScrolled)
				 .css('padding-right', getScrollWidth());

		$('[data-src]').each( (i, el) => {
			$(el).attr('src', $(el).data('src'));
			el.removeAttribute('data-scr');
		} );
	}

	function hideModal(modal){
		$(modal).removeClass('visible');
		bodyScrolled = $(window).scrollTop();
		$('body').removeClass('modal-visible')
				 .scrollTop(bodyScrolled)
				 .css('padding-right', 0);

		$('#modal-video .video-iframe').hide();
	}

	function goToTab(tabId, handler){
		if (handler == undefined) {
			handler = false;
		}

		let dest = $( tabId );
		dest.stop().fadeIn(300).siblings().hide(0);

		if (handler != false) {
			$(handler).addClass('current').parent().siblings().find("[data-tab]").removeClass('current');
		}
	}

	// Tabs
	$("[data-tab]").click(function(e){
		e.preventDefault();
		let dest = $( $(this).data('tab') );

		goToTab(dest, $(this));

		dest.find('.slick-slider').slick('setPosition');
		$(this).blur();
	});

	$('.locations-list li:first-child [data-tab]').click();
	$('[data-tab].preselected').click();

	$('body').on('change', '.tabs-select', function(e){
		let dest = $(this).find('option:selected').attr('value');

		goToTab(dest);
	});

	$('.tabs-select').trigger('change');

	$('.tabs-nav').each(function(i, el){
		$(el).find("[data-tab]").eq(0).trigger('click')
	});
	$("[data-tab].preselected").trigger('click');


	// Fancybox
	$(".fancybox").fancybox();

	function isElementInViewport (el) {

		// Special bonus for those using jQuery
		if (typeof jQuery === "function" && el instanceof jQuery) {
			el = el[0];
		}

		var rect = el.getBoundingClientRect();

		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
			rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
		);
	}

	// Accordions
	$('.accordion .ac-header, .accordion .opener').click(function(e){
		e.preventDefault();
		e.stopPropagation();

		$(this).closest('.accordion').toggleClass('opened')
				.find('.ac-content').stop().slideToggle(300);
	});

	// $('.accordion.opened').find('.ac-content').stop().slideToggle(300);

	// Switch
	$('.switch').each(function(i, el){
		$(el).find('.option-left').click(function(){
			$(el).find('input').prop('checked', false);
		});

		$(el).find('.option-right').click(function(){
			$(el).find('input').prop('checked', true);
		});
	});


	// Odometer
	window.odometerOptions = {
		auto: false,
		selector: '.odometer',
		format: '( ddd),dd',
		duration: 1500,
		theme: 'minimal',
		animation: 'count'
	};

	let elem = $('.odometer');

	elem.each(function(i, el){
		if (isElementInViewport(el)) {
			$(el).html($(el).data('val'));
		}
	});

	$(window).scroll(function(){
		elem.each(function(i, el){
			if (isElementInViewport(el)) {
				$(el).html($(el).data('val'));
			}
		});
	});
});

// Object Fit Polyfill
/*! npm.im/object-fit-images 3.2.4 */
// var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="bfred-it:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

// objectFitImages('.object-fit-cover');
// objectFitImages('.object-fit-contain');

// SVG use polyfill
!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):"object"==typeof module&&module.exports?module.exports=b():a.svg4everybody=b()}(this,function(){function a(a,b,c){if(c){var d=document.createDocumentFragment(),e=!b.hasAttribute("viewBox")&&c.getAttribute("viewBox");e&&b.setAttribute("viewBox",e);for(var f=c.cloneNode(!0);f.childNodes.length;)d.appendChild(f.firstChild);a.appendChild(d)}}function b(b){b.onreadystatechange=function(){if(4===b.readyState){var c=b._cachedDocument;c||(c=b._cachedDocument=document.implementation.createHTMLDocument(""),c.body.innerHTML=b.responseText,b._cachedTarget={}),b._embeds.splice(0).map(function(d){var e=b._cachedTarget[d.id];e||(e=b._cachedTarget[d.id]=c.getElementById(d.id)),a(d.parent,d.svg,e)})}},b.onreadystatechange()}function c(c){function e(){for(var c=0;c<o.length;){var h=o[c],i=h.parentNode,j=d(i),k=h.getAttribute("xlink:href")||h.getAttribute("href");if(!k&&g.attributeName&&(k=h.getAttribute(g.attributeName)),j&&k){if(f)if(!g.validate||g.validate(k,j,h)){i.removeChild(h);var l=k.split("#"),q=l.shift(),r=l.join("#");if(q.length){var s=m[q];s||(s=m[q]=new XMLHttpRequest,s.open("GET",q),s.send(),s._embeds=[]),s._embeds.push({parent:i,svg:j,id:r}),b(s)}else a(i,j,document.getElementById(r))}else++c,++p}else++c}(!o.length||o.length-p>0)&&n(e,67)}var f,g=Object(c),h=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,i=/\bAppleWebKit\/(\d+)\b/,j=/\bEdge\/12\.(\d+)\b/,k=/\bEdge\/.(\d+)\b/,l=window.top!==window.self;f="polyfill"in g?g.polyfill:h.test(navigator.userAgent)||(navigator.userAgent.match(j)||[])[1]<10547||(navigator.userAgent.match(i)||[])[1]<537||k.test(navigator.userAgent)&&l;var m={},n=window.requestAnimationFrame||setTimeout,o=document.getElementsByTagName("use"),p=0;f&&e()}function d(a){for(var b=a;"svg"!==b.nodeName.toLowerCase()&&(b=b.parentNode););return b}return c});


svg4everybody();


// TODO: ↓↓↓ remove this script ↓↓↓
// Current menu item highlithing
$(function () {
	var location = window.location.href;
	var cur_url = location.split('/').pop();

	$('.top-nav li, .small-top-nav li, .mobile-nav li, .footer-nav li').each(function () {
		var link = $(this).find('a').attr('href');

		// console.log(link);

		if (cur_url == '') {
			cur_url = 'index.html';
		}

		if (cur_url == link)
		{
			$(this).addClass('current-menu-item');
			$(this).parents('li').addClass('current-menu-parent');
		}
	});
});