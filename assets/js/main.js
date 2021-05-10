/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	
	// Breakpoints.
		breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight(),
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

	// Menu.
		var $menu = $('#menu');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();

				// Hide.
					$menu._hide();

			})
			.find('.inner')
				.on('click', '.close', function(event) {

					event.preventDefault();
					event.stopPropagation();
					event.stopImmediatePropagation();

					// Hide.
						$menu._hide();

				})
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$menu._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				});

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

})(jQuery);

//expand images when clicked
//var img = document.getElementsByClassName("circleImage");
//var clicked = 0;
function enlargeImage() {
	if(clicked == 0) {
		clicked = 1;
	}
	else {
		clicked = 0;
	}
	if(clicked===1) {
		// Set image size to 1.5 times original
		img.style.transform = "scale(1.5)";
		// Animation effect 
		img.style.transition = "transform 0.25s ease";
	}
	else {
		// Set image size to original
        img.style.transform = "scale(1)";
        img.style.transition = "transform 0.25s ease";
	}
	
}	

//$("img").click('enlargeImage()');

/*$(document).ready(function() {
    $('#onlineCustomers')
        .style.transform = "scale(1.0)";
        
    
});
*/

//var nightClub1 = document.getElementById("nc1");
//nightClub1.width = window.innerWidth;

var gallery1Images = ["../images/nightclubs.jpg", "../images/nightclub2.jpg", "../images/nightclub3.jpg", "../images/nightclubs4.jpg", "../images/nightclub5.jpg"];

var gallery2Images = ["../images/example site 1.jpg", "../images/examp site 2.jpg", "../images/professional.jpg", "resturant1.jpg", "professional1.jpg", "../images/resturant2.jpg"];

var i, j = 0;

function changeImage() {
	document.gallery1.src = gallery1Images[i];
	document.gallery2.src = gallery2Images[j];

	if(i < gallery1Images.length - 1) {
		i++;
	}
	else {
		i = 0;
	}

	if(j < gallery2Images.length - 1) {
		j++;
	}
	else {
		j = 0;
	}

	setTimeout("changeImage()", 4000);

}

window.onload = changeImage;