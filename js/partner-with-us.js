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

var tab, tabcontent, i;
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

/*
    Send Email
*/

var organisation, point, email;
function sendEmail(e) {
    e.preventDefault();
    organisation = document.getElementById('organisation').value;
    point = document.getElementById('point').value;
    email = document.getElementById('email').value;
    console.log(organisation, point, email);

    Email.send({
        Host: "smtp.elasticemail.com",
       Username: "contact@swasthalliance.org",
        Password: "6D72B625C67FE0960798E7866A88C1353313",
        To: 'contact@swasthalliance.org',
        From: "contact@swasthalliance.org",
        Subject: "Partner With Us Form Enquiry",
        Body: "Organisation: "+ organisation +"<br>Point: "+ point +"<br>Email: "+ email +"<br>",
         
    }).then(
        message => alert("Message Sent Succesfully")
    );
}


