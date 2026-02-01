document.addEventListener("DOMContentLoaded", function () {

    // ------------------------------
    // INITIALIZE EMAILJS
    // ------------------------------
    emailjs.init("5FFnsHM5QfuxhrS5Y"); // Public API Key

    // ------------------------------
    // SELECT ELEMENTS
    // ------------------------------
    const form = document.getElementById("requestForm");
    const thankYou = document.getElementById("thankYouMessage");
    const serviceSelect = document.getElementById("service");
    const websiteFields = document.getElementById("websiteDetails");

    // ------------------------------
    // SHOW WEBSITE FIELDS IF WEBSITE DEVELOPMENT SELECTED
    // ------------------------------
    if(serviceSelect) {
        serviceSelect.addEventListener("change", function () {
            if(this.value === "website-development") {
                websiteFields.style.display = "block";
            } else {
                websiteFields.style.display = "none";
            }
        });
    }

    // ------------------------------
    // HANDLE FORM SUBMISSION
    // ------------------------------
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // prevent default submission

        // 1️⃣ Send notification to YOU
        emailjs.sendForm("service_0fzjdwc", "template_dg4bih9", form)
        .then(function () {

            // 2️⃣ Send auto-reply to CLIENT
            emailjs.sendForm("service_0fzjdwc", "template_0yz1n56", form)
            .then(function () {

                // 3️⃣ Show Thank You + WhatsApp button
                thankYou.style.display = "block";

                // Reset form fields
                form.reset();

                // Hide website fields after reset
                if(websiteFields) websiteFields.style.display = "none";

            })
            .catch(function(error){
                console.error("Error sending auto-reply:", error);
            });

        })
        .catch(function (error) {
            alert("Something went wrong. Please try again.");
            console.log("Error sending notification:", error);
        });

    });

    // ------------------------------
    // OPTIONAL: Mobile Menu Toggle
    // ------------------------------
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if(menuToggle) {
        menuToggle.addEventListener("click", function () {
            if(navMenu.style.display === "flex") {
                navMenu.style.display = "none";
            } else {
                navMenu.style.display = "flex";
                navMenu.style.flexDirection = "column";
            }
        });
    }

});
