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

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const form = e.target;
    const formData = new FormData(form);
    const action = form.action;

    fetch(action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('responseMessage').innerText = "Form submitted successfully!";
            form.reset();
        } else {
            response.json().then(data => {
                document.getElementById('responseMessage').innerText = data.message || "Form submission failed.";
            });
        }
    })
    .catch(error => {
        document.getElementById('responseMessage').innerText = "Something went wrong. Please try again.";
    });
});


