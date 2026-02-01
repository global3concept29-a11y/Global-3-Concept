document.addEventListener("DOMContentLoaded", function () {

    emailjs.init("5FFnsHM5QfuxhrS5Y");

    const form = document.getElementById("requestForm");
    const thankYou = document.getElementById("thankYouMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // 1️⃣ Send to YOU (notification)
        emailjs.sendForm("service_0fzjdwc", "template_dg4bih9", form)
        .then(function () {

            // 2️⃣ Send auto-reply to CLIENT
            emailjs.sendForm("service_0fzjdwc", "template_0yz1n56", form)
            .then(function () {

                // 3️⃣ Show Thank You + WhatsApp
                thankYou.style.display = "block";
                form.reset();

            });

        }, function (error) {
            alert("Something went wrong. Please try again.");
            console.log(error);
        });

    });

});
