'use strict';

(function() {
var pricesSwiper;

    // function initSwiper() {
    //     console.log('12414125412512512');
    //     if(document.body.clientWidth <= 1240) {
            pricesSwiper = new Swiper('.prices__swiper', {
                // slidesPerView: 5,
                // spaceBetween: 9,
                // centeredSlides: true,
                  navigation: {
                    nextEl: '.prices__next-button',
                    prevEl: '.prices__prev-button',
                  },
                breakpoints: {
                    2000: {
                        slidesPerView: 5,
                        spaceBetween: 9
                    },
                    1920: {
                        slidesPerView: 5,
                        spaceBetween: 9
                    },
                    1100: {
                        slidesPerView: 4,
                        spaceBetween: 9
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 9
                    },
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 9
                    }
                },
            });

//             return pricesSwiper;
//         } else {

//             pricesSwiper = undefined;
//             return pricesSwiper;
//         }

//     }
    
//     initSwiper();

//     window.addEventListener('resize', function() {
//         setTimeout(initSwiper, 500)
//     })
    
})();