let ss = document.querySelectorAll('.scrollspy article');
let aa = document.querySelectorAll('.scrollspy a');

window.onscroll = () =>{
    ss.forEach(s =>{
        let top = window.scrollY;
        let offset = s.offsetTop - 60;
        let height = s.offsetHeight;
        let id = s.getAttribute('id');
        console.log(id);

        if(top >= offset && top < offset + height){
            aa.forEach(a =>{
                a.classList.remove('active');
                document.querySelector('a[href$='+ id + ']').classList.add('active');
            });
        }
    });
};

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