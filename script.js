function sendMail() {
    // Prevent the form from submitting via the browser
    event.preventDefault();

    // Collect form data
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
        // Send email using EmailJS
        emailjs.send('service_cd893gu','template_vr8cdl1', formData)
        .then(function(response) {
            console.log('Email sent!', response);
            alert('Your message has been sent successfully.');
            document.getElementById('contactForm').reset(); // Clear form fields
        })
        .catch(function(error) {
            console.error('Error sending email:', error);
            alert('There was an error sending your message. Please try again later.');
        });
}
type="text/javascript">
        (function(){
        emailjs.init({
        publicKey: "RBcd2ejmx76mxBox4",
        });
    })();
