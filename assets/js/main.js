/*
	Astral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/



(function($) {

	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$main = $('#main'),
		$panels = $main.children('.panel'),
		$nav = $('#nav'), $nav_links = $nav.children('a');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '361px',   '736px'  ],
			xsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		$nav_links
			.on('click', function(event) {

				var href = $(this).attr('href');

				// Not a panel link? Bail.
					if (href.charAt(0) != '#'
					||	$panels.filter(href).length == 0)
						return;

				// Prevent default.
					event.preventDefault();
					event.stopPropagation();

				// Change panels.
					if (window.location.hash != href)
						window.location.hash = href;

			});

	// Panels.

		// Initialize.
			(function() {

				var $panel, $link;

				// Get panel, link.
					if (window.location.hash) {

				 		$panel = $panels.filter(window.location.hash);
						$link = $nav_links.filter('[href="' + window.location.hash + '"]');

					}

				// No panel/link? Default to first.
					if (!$panel
					||	$panel.length == 0) {

						$panel = $panels.first();
						$link = $nav_links.first();

					}

				// Deactivate all panels except this one.
					$panels.not($panel)
						.addClass('inactive')
						.hide();

				// Activate link.
					$link
						.addClass('active');

				// Reset scroll.
					$window.scrollTop(0);

			})();

		// Hashchange event.
			$window.on('hashchange', function(event) {

				var $panel, $link;

				// Get panel, link.
					if (window.location.hash) {

				 		$panel = $panels.filter(window.location.hash);
						$link = $nav_links.filter('[href="' + window.location.hash + '"]');

						// No target panel? Bail.
							if ($panel.length == 0)
								return;

					}

				// No panel/link? Default to first.
					else {

						$panel = $panels.first();
						$link = $nav_links.first();

					}

				// Deactivate all panels.
					$panels.addClass('inactive');

				// Deactivate all links.
					$nav_links.removeClass('active');

				// Activate target link.
					$link.addClass('active');

				// Set max/min height.
					$main
						.css('max-height', $main.height() + 'px')
						.css('min-height', $main.height() + 'px');

				// Delay.
					setTimeout(function() {

						// Hide all panels.
							$panels.hide();

						// Show target panel.
							$panel.show();

						// Set new max/min height.
							$main
								.css('max-height', $panel.outerHeight() + 'px')
								.css('min-height', $panel.outerHeight() + 'px');

						// Reset scroll.
							$window.scrollTop(0);

						// Delay.
							window.setTimeout(function() {

								// Activate target panel.
									$panel.removeClass('inactive');

								// Clear max/min height.
									$main
										.css('max-height', '')
										.css('min-height', '');

								// IE: Refresh.
									$window.triggerHandler('--refresh');

								// Unlock.
									locked = false;

							}, (breakpoints.active('small') ? 0 : 500));

					}, 250);

			});

	// IE: Fixes.
		if (browser.name == 'ie') {

			// Fix min-height/flexbox.
				$window.on('--refresh', function() {

					$wrapper.css('height', 'auto');

					window.setTimeout(function() {

						var h = $wrapper.height(),
							wh = $window.height();

						if (h < wh)
							$wrapper.css('height', '100vh');

					}, 0);

				});

				$window.on('resize load', function() {
					$window.triggerHandler('--refresh');
				});

			// Fix intro pic.
				$('.panel.intro').each(function() {

					var $pic = $(this).children('.pic'),
						$img = $pic.children('img');

					$pic
						.css('background-image', 'url(' + $img.attr('src') + ')')
						.css('background-size', 'cover')
						.css('background-position', 'center');

					$img
						.css('visibility', 'hidden');

				});

		}

		

})(jQuery);

function toggleImage1(){
	imgsrc = document.getElementById("img1").src;
	if (imgsrc.indexOf("images/mickeyCastle.jpg")!= -1){
		document.getElementById("img1").src = "images/minnieCastle.jpg";
	}
	else{
		document.getElementById("img1").src = "images/mickeyCastle.jpg";
	}
}

function toggleImage2(){
	imgsrc = document.getElementById("img2").src;
	if (imgsrc.indexOf("images/moana.jpg")!= -1){
		document.getElementById("img2").src = "images/maui.jpg";
	}
	else{
		document.getElementById("img2").src = "images/moana.jpg";
	}
}

function toggleImage3(){
	imgsrc = document.getElementById("img3").src;
	if (imgsrc.indexOf("images/pascal.jpg")!= -1){
		document.getElementById("img3").src = "images/rapunzal.jpg";
	}
	else{
		document.getElementById("img3").src = "images/pascal.jpg";
	}
}

function toggleImage4(){
	imgsrc = document.getElementById("img4").src;
	if (imgsrc.indexOf("images/tiana.jpg")!= -1){
		document.getElementById("img4").src = "images/mickey.jpg";
	}
	else{
		document.getElementById("img4").src = "images/tiana.jpg";
	}
}

function toggleImage5(){
	imgsrc = document.getElementById("img5").src;
	if (imgsrc.indexOf("images/minnieChristmas.jpg")!= -1){
		document.getElementById("img5").src = "images/mickeyChristmas.jpg";
	}
	else{
		document.getElementById("img5").src = "images/minnieChristmas.jpg";
	}
}

function toggleImage6(){
	imgsrc = document.getElementById("img6").src;
	if (imgsrc.indexOf("images/salah.jpg")!= -1){
		document.getElementById("img6").src = "images/panda.jpg";
	}
	else{
		document.getElementById("img6").src = "images/salah.jpg";
	}
}

/*function toggleImage7(){
	imgsrc = document.getElementById("img7").src;
	if (imgsrc.indexOf("images/tumbler1.jpg")!= -1){
		document.getElementById("img7").src = "images/tumbler2.jpg";
	}
	else{
		document.getElementById("img7").src = "images/tumbler1.jpg";
	}
}

function toggleImage8(){
	imgsrc = document.getElementById("img8").src;
	if (imgsrc.indexOf("images/tumbler1.jpg")!= -1){
		document.getElementById("img8").src = "images/tumbler2.jpg";
	}
	else{
		document.getElementById("img8").src = "images/tumbler1.jpg";
	}
}

function toggleImage9(){
	imgsrc = document.getElementById("img9").src;
	if (imgsrc.indexOf("images/tumbler1.jpg")!= -1){
		document.getElementById("img9").src = "images/tumbler2.jpg";
	}
	else{
		document.getElementById("img9").src = "images/tumbler1.jpg";
	}
}

function toggleImage10(){
	imgsrc = document.getElementById("img10").src;
	if (imgsrc.indexOf("images/tumbler1.jpg")!= -1){
		document.getElementById("img10").src = "images/tumbler2.jpg";
	}
	else{
		document.getElementById("img10").src = "images/tumbler1.jpg";
	}
}

function toggleImage11(){
	imgsrc = document.getElementById("img11").src;
	if (imgsrc.indexOf("images/tumbler1.jpg")!= -1){
		document.getElementById("img11").src = "images/tumbler2.jpg";
	}
	else{
		document.getElementById("img11").src = "images/tumbler1.jpg";
	}
}

function toggleImage12(){
	imgsrc = document.getElementById("img12").src;
	if (imgsrc.indexOf("images/tumbler1.jpg")!= -1){
		document.getElementById("img12").src = "images/tumbler2.jpg";
	}
	else{
		document.getElementById("img12").src = "images/tumbler1.jpg";
	}
}*/

