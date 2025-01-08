document.addEventListener("DOMContentLoaded", () => {
    console.log('am here');
    
    emailjs.init({
        publicKey: 'gyiLjgAa0N5nw2hN_',
    }); // Replace with your EmailJS User ID

    const form = document.getElementById("emailForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default form submission

        const formData = {
            email: form?.email?.value ?? 'No email.',
            
        };

        emailjs
            .send("service_k0m1mmi", 'template_zmhmhna', formData)
            .then(
                (response) => {
                    alert("Email sent successfully!");
                    console.log("SUCCESS!", response.status, response.text);
                    form.reset(); // Clear the form
                },
                (error) => {
                    alert("Failed to send email. Please try again later.");
                    console.error("FAILED...", error);
                }
            );
    });
});
