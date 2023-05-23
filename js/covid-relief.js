function enlargeWave1(e) {
    e.style.flexBasis = '70%';
    document.querySelector('.wave-2').style.flexBasis = '30%';
}

function enlargeWave2(e) {
    e.style.flexBasis = '70%';
    document.querySelector('.wave-1').style.flexBasis = '30%';
}

/*
    Swiper
*/

const swiperA = new Swiper('#swiper-a', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '#slider-a .bx-chevron-right',
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

const swiperB = new Swiper('#swiper-b', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '#slider-b .bx-chevron-right',
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

const swiperC = new Swiper('#swiper-c', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '#slider-c .bx-chevron-right',
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

const swiperD = new Swiper('#swiper-d', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '#slider-d .bx-chevron-right',
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

/*
    Animation
*/

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElement = document.querySelectorAll('h2, hr');
hiddenElement.forEach((el) => observer.observe(el));


/*
    Toggle Logos
*/

function toggleLogos(a){
    $(a).parent().next().toggle();
    // $(a).toggle();
    if( $(a).hasClass('bx-plus') ) {
        $(a).removeClass('bx-plus').addClass('bx-minus');
    }else{
        $(a).removeClass('bx-minus').addClass('bx-plus');
    }
}