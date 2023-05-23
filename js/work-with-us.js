/*
    Send Email
*/

var fullname, email, motivation;
function sendEmail(e) {
    e.preventDefault();
    fullname = document.getElementById('name').value;
    email = document.getElementById('email').value;
    motivation = document.getElementById('motivation').value;
   

    console.log(fullname, email, motivation);

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "hello@swasthalliance.org",
        Password: "C6205DA4683A53C185138813AEA94D75F4DB",
        To: 'shivangi@swasthalliance.org',
        From: "hello@swasthalliance.org",
        Subject: "Work With Us Form Enquiry",
        Body: "Name: "+ fullname +"<br>Email: "+ email +"<br>Motivation: "+ motivation +"<br>",
         
    }).then(
        message => alert("Message Sent Succesfully")
    );
}


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