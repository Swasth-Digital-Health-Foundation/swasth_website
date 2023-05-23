/*
    Swiper
*/

// const swiperA = new Swiper('#swiper-a', {
//     // Optional parameters
//     direction: 'horizontal',

//     // Navigation arrows
//     navigation: {
//         nextEl: '#slider-a .bx-chevron-right',
//         prevEl: '#slider-a .bx-chevron-left',
//     },

//     breakpoints: {
//         640: {
//             slidesPerView: 2,
//             spaceBetween: 100,
//         },
//     },
// });

const swiperB = new Swiper('#swiper-b', {
    // Optional parameters
    direction: 'horizontal',
    grabCursor: true,

    mousewheel: {
        releaseOnEdges: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '#slider-b .bx-chevron-right',
        prevEl: '#slider-b .bx-chevron-left',
    },

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },

    breakpoints: {
        640: {
            slidesPerView: 4,
            spaceBetween: '1%',
        },
    },
});

const swiperC = new Swiper('#swiper-c', {
    // Optional parameters
    direction: 'horizontal',
    grabCursor: true,
    // centeredSlides: true,
    loop: true,

    // autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false,
    // },

    // mousewheel: {
    //     releaseOnEdges: true,
    // },

    navigation: {
        nextEl: '#slider-c .bx-chevron-right',
        prevEl: '#slider-c .bx-chevron-left'
    },

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },

    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },
});

/*
    Animation
*/

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElement = document.querySelectorAll('h2, hr');
hiddenElement.forEach((el) => observer.observe(el));