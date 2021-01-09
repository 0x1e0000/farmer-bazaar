$(() => {
	// Enable Bootstrap tooltip
	$('[data-toggle="tooltip"]').tooltip();
	
	// Special Products Carousel
	$('.special-product__carousel').owlCarousel({
		margin: 22,
		items: 4,
		dots: false,
		autoWidth: true,
		navText: ['<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="#4AAE34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 13L7 7L1 1" stroke="#4AAE34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
		responsive: {
			0: {
				nav: false
			},
			992: {
				nav: true
			}
		}
	})

	// Deals that Delight Carousel
	$('.deals__carousel').owlCarousel({
		margin: 24,
		items: 1,
		dots: false,
		navText: ['<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="#4AAE34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 13L7 7L1 1" stroke="#4AAE34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
		responsive: {
			0: {
				nav: false,
				autoWidth: true,
				items: 2
			},
			992: {
				nav: true
			}
		}
	});

	// Team Section Carousel
	$('.team__carousel').owlCarousel({
		margin: 24,
		nav: true,
		items: 1,
		dots: false,
		navText: ['<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="#4AAE34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 13L7 7L1 1" stroke="#4AAE34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
		animateOut: 'fadeOut'
	});

	// Testimonials sSection Carousel
	$('.testimonials__carousel').owlCarousel({
		margin: 118,
		nav: true,
		items: 2,
		dots: false,
		navText: ['<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="#4AAE34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 13L7 7L1 1" stroke="#4AAE34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>']
	});
});
