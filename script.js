
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
    }).then(response => {
    if (response.ok) {
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    } else {
        alert('Oops! There was a problem submitting your form.');
    }
    }).catch(() => {
    alert('Oops! There was a problem submitting your form.');
    });
});
