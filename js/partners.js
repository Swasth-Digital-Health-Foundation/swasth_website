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

subtab = document.getElementsByClassName('subtab');
subtabcontent = document.getElementsByClassName('subtabcontent');
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