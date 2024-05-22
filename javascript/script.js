document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (firstName && lastName && email && message) {
        console.log(firstName + ' ' + lastName + ' ' + email + ' ' + message);

        // Initialize emailJS with the public key
        emailjs.init('vgmAdf6X-pKROAEsk');

        // Send the form using emailJS
        emailjs.sendForm('service_ph5mhet', 'template_50urqwe', this)
            .then(response => {
                console.log('SUCCESS!', response.status, response.text);

                // Reset the form fields
                document.getElementById('contactForm').reset();
                alert('Form submitted successfully!');
            }, error => {
                console.log('FAILED...', error);
            });

    } else {
        alert('Please fill in all fields.');
    }
});
