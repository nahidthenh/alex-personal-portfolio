
$('.brand-carousel').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 4
        },
        1000: {
            items: 5
        }
    }
})
$('.testimonial-slider').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1
        }
    }
})