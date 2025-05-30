$(document).ready(function(){
    $('h1').css('display', 'none').slideDown('slow');
    $('hr').css('max-width', 0).animate({maxWidth: 680}, 'slow');
});

/*
    Send Email
*/

document.getElementById('form3').addEventListener('submit', function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const action = form.action;
formData.append("form_name", "Volunteer With Us");
    
    fetch(action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert("Form submitted successfully!");
            form.reset();
        } else {
            response.json().then(data => {
                alert(data.message || "Form submission failed.");
            });
        }
    })
    .catch(error => {
        alert("Something went wrong. Please try again.");
    });
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
