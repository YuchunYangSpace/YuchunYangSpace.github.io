(function ($) {

	var $window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: [null, '736px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Scrolly.
	$('#nav a, .scrolly').scrolly({
		speed: 1000,
		offset: function () { return $nav.height(); }
	});

})(jQuery);



//slideshow
// Slideshow for the first set of images
let images1 = [
	"images/adesso/Hero-LoFi.jpg", "images/adesso/Hero-HiFi.jpg",
];
let currentIndex1 = 0;
let imageElement1 = document.getElementById("slideshow-image1");

function changeImage1() {
	currentIndex1 = (currentIndex1 + 1) % images1.length;
	imageElement1.src = images1[currentIndex1];
}

setInterval(changeImage1, 2000);

// Slideshow for the second set of images
let images2 = [
	"images/adesso/Programs-LoFi.jpg", "images/adesso/Programs-HiFi.jpg",
];
let currentIndex2 = 0;
let imageElement2 = document.getElementById("slideshow-image2");

function changeImage2() {
	currentIndex2 = (currentIndex2 + 1) % images2.length;
	imageElement2.src = images2[currentIndex2];
}

setInterval(changeImage2, 2000);

// Slideshow for the third set of images
let images3 = [
	"images/adesso/Testimonials-LoFi.jpg", "images/adesso/Testimonials-HiFi.jpg",
];
let currentIndex3 = 0;
let imageElement3 = document.getElementById("slideshow-image3");

function changeImage3() {
	currentIndex3 = (currentIndex3 + 1) % images3.length;
	imageElement3.src = images3[currentIndex3];
}

setInterval(changeImage3, 2000);

// Slideshow for the fourth set of images
let images4 = [
	"images/adesso/Testimonials-LoFi.jpg", "images/adesso/Testimonials-HiFi.jpg",
];
let currentIndex4 = 0;
let imageElement4 = document.getElementById("slideshow-image4");

function changeImage4() {
	currentIndex4 = (currentIndex4 + 1) % images4.length;
	imageElement4.src = images4[currentIndex4];
}

setInterval(changeImage4, 2000);

// Slideshow for the fifth set of images
let images5 = [
	"images/adesso/supportus-LoFi.jpg", "images/adesso/supportus-HiFi.jpg",
];
let currentIndex5 = 0;
let imageElement5 = document.getElementById("slideshow-image5");

function changeImage5() {
	currentIndex5 = (currentIndex5 + 1) % images5.length;
	imageElement5.src = images5[currentIndex5];
}

setInterval(changeImage5, 2000);
