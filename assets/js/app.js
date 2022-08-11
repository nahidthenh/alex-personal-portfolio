// Brand Slider 
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
// Testimonial Slider 
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

// Slider Next Prev Image

$(document).ready(function () {

    $(".owl-prev").html('<i class="ri-arrow-left-line"></i>');
    $(".owl-next").html('<i class="ri-arrow-right-line"></i>');
}); 