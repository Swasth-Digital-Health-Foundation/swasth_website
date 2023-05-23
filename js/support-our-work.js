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
    Send Email
*/

var organisation, point, email,message;
function sendEmail(e) {
    e.preventDefault();
    organisation = document.getElementById('organisation').value;
    point = document.getElementById('point').value;
    email = document.getElementById('email').value;
    message = document.getElementById('motivation').value;
    console.log(organisation, point, email ,message);

    Email.send({
        Host: "smtp.elasticemail.com",
       Username: "hello@swasthalliance.org",
        Password: "C6205DA4683A53C185138813AEA94D75F4DB",
        To: 'shivangi@swasthalliance.org',
        From: "hello@swasthalliance.org",
        Subject: "Support our work Form Enquiry",
        Body: "Organisation: "+ organisation +"<br>Point: "+ point +"<br>Email: "+ email +"<br>Message: "+ message +"<br>",
         
    }).then(
        message => alert("Message Sent Succesfully")
    );
}