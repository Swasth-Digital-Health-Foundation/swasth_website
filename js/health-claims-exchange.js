/*
    Swiper
*/

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    // grabCursor: true,
    // mousewheel: {
    //     releaseOnEdges: true,
    // },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // loop: true,
    // centeredSlides: true,
    // autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false,
    // },
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

const hiddenElement = document.querySelectorAll('h1, hr');
hiddenElement.forEach((el) => observer.observe(el));


/*
Tab
*/

function openTab(name, elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(name).style.display = "block";
    elmnt.className += " active";

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();