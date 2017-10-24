	$('.slider').slick({
		autoplay: false,
		dots: true,
		arrows: false,
		draggable: true,
		pauseOnDotsHover: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 769,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 413,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 361,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 321,
			settings: "unslick" // destroys slick
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
	});

		$('.slider2').slick({
		autoplay: true,
		dots: false,
		arrows: true,
				responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		}
	]

	});

	$(document).ready(function(){
		$('.sidebar-btn').click(function(){
			$('.sidebar').toggleClass('active');
			$('.sidebar-btn').toggleClass('toggle');
		})
	})

	
