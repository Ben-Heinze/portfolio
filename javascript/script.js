document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (firstName && lastName && email && message) {
        alert('Form submitted successfully!');
        console.log(firstName + ' ' + lastName + ' ' + email+ ' ' + message);
        // Here you can add code to actually send the form data, e.g., using AJAX.
    } else {
        alert('Please fill in all fields.');
    }
});
