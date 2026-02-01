document.addEventListener("DOMContentLoaded", function () {

    emailjs.init("5FFnsHM5QfuxhrS5Y");

    const form = document.getElementById("requestForm");
    const thankYou = document.getElementById("thankYouMessage");
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Disable submit button after first click
        submitBtn.disabled = true;
        submitBtn.innerText = "Submitting...";

        // Send notification email
        emailjs.sendForm("service_0fzjdwc", "template_dg4bih9", form)
        .then(function () {

            // Send auto-reply to client
            emailjs.sendForm("service_0fzjdwc", "template_0yz1n56", form)
            .then(function () {

                // Show Thank You + WhatsApp
                thankYou.style.display = "block";
                submitBtn.innerText = "Submitted!";
                
                // Optional: reset button after page reload for another submission
                form.reset();

            });

        }, function (error) {
            alert("Something went wrong. Please try again.");
            console.log(error);
            submitBtn.disabled = false;
            submitBtn.innerText = "Submit Request";
        });

    });

});
