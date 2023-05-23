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
    Tabs
*/

var tab, tabcontent, i, subtab, subtabcontent;
tab = document.getElementsByClassName('tab');
tabcontent = document.getElementsByClassName('tabcontent');
tab[0].click();
function openTab(e, id){
    for(i = 0; i < tab.length; i++){
        tab[i].className = tab[i].className.replace(' active', '');
    }
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = 'none';
    }
    e.className += ' active';
    document.getElementById(id).style.display = 'block';
}

subtab = document.querySelectorAll('#press-mentions .subtab');
subtabcontent = document.querySelectorAll('#press-mentions .subtabcontent');
subtab[0].click();
function openSubtab(e, id){
    for(i = 0; i < subtab.length; i++){
        subtab[i].className = subtab[i].className.replace(' active', '');
    }
    for(i = 0; i < subtabcontent.length; i++){
        subtabcontent[i].style.display = 'none';
    }
    e.className += ' active';
    document.getElementById(id).style.display = 'block';
}

var mobilesubtab;
mobilesubtab = document.querySelectorAll('.tabs .subtab');
subtabcontent = document.querySelectorAll('#press-mentions .subtabcontent');
mobilesubtab[0].click();
function openMobileSubtab(e, id){
    for(i = 0; i < mobilesubtab.length; i++){
        mobilesubtab[i].className = mobilesubtab[i].className.replace(' active', '');
    }
    for(i = 0; i < subtabcontent.length; i++){
        subtabcontent[i].style.display = 'none';
    }
    e.className += ' active';
    document.getElementById(id).style.display = 'block';
}


var subtab2, subtabcontent2;
subtab2 = document.querySelectorAll('#tech-updates .subtab');
subtabcontent2 = document.querySelectorAll('#tech-updates .subtabcontent');
subtab2[0].click();
function openSubtab2(e, id){
    for(i = 0; i < subtab2.length; i++){
        subtab2[i].className = subtab2[i].className.replace(' active', '');
    }
    for(i = 0; i < subtabcontent2.length; i++){
        subtabcontent2[i].style.display = 'none';
    }
    e.className += ' active';
    document.getElementById(id).style.display = 'block';
}