// Function to classify and redirect based on HbA1c input
if (document.getElementById("hba1cInput")) {
    function classifyAndRedirect() {
        const hba1c = parseFloat(document.getElementById("hba1cInput").value);
        const resultSection = document.getElementById("result");

        // Reset the message and buttons every time the classification is made
        resultSection.innerHTML = '';

        if (isNaN(hba1c) || hba1c < 0) {
            alert("يرجى إدخال مستوى سكر تراكمي صالح.");
            return;
        }

        if (hba1c < 5.7) {
            alert("!أنت لا تعاني من مرض السكري، استمر في الحفاظ على نمط حياة صحي.");
        } else if (hba1c >= 5.7 && hba1c < 6.5) {
            // For pre-diabetic page
            resultSection.innerHTML = `
                <p>أنت مهدد بالاصابة بالسكري:</p>
                <button onclick="window.location.href='pre-diabetic.html'"> اضغط هنا لمعرفة المزيد</button>
            `;
        } else {
            // For diabetic patients, show options for Type 1 and Type 2 diabetes
            resultSection.innerHTML = `
                <p> أنت مصاب بالسكري. من فضلك اختر نوع السكري لمعرفة المزيد</p>
                <button onclick="window.location.href='type1.html'">السكري من النوع الأول</button>
                <button onclick="window.location.href='type2.html'">السكري من النوع الثاني</button>
            `;
        }
    }
}

// Generate simple CAPTCHA
let captchaNum1, captchaNum2;

if (document.getElementById("captchaQuestion")) {
    function generateCaptcha() {
        captchaNum1 = Math.floor(Math.random() * 10);
        captchaNum2 = Math.floor(Math.random() * 10);
        document.getElementById("captchaQuestion").textContent = `${captchaNum1} + ${captchaNum2} = ?`;
    }
}

// Validate form submission and CAPTCHA
if (document.getElementById("contactForm")) {
    function validateForm(event) {
        event.preventDefault();

        // Get form values and trim them
        const name = document.getElementById("fname")?.value.trim() || "";
        const email = document.getElementById("email")?.value.trim() || "";
        const phone = document.getElementById("phone")?.value.trim() || "";
        const message = document.getElementById("message")?.value.trim() || "";
        const captchaAnswer = parseInt(document.getElementById("captchaAnswer")?.value.trim());

        let errorMessage = "";

        // Validation for empty fields
        if (!name || !email || !phone || !message) {
            errorMessage = "All fields are required.";
        } else if (isNaN(captchaAnswer) || captchaAnswer !== captchaNum1 + captchaNum2) {
            errorMessage = "Incorrect captcha answer.";
        }

        // Display error or success message
        const errorElement = document.getElementById("error");
        if (errorMessage) {
            if (errorElement) {
                errorElement.textContent = errorMessage;
                errorElement.style.display = "block";
            }
        } else {
            if (errorElement) {
                errorElement.style.display = "none";
            }
            alert("Form submitted successfully!");
            document.getElementById("contactForm").reset(); // clear all fields
            generateCaptcha(); // refresh captcha
        }
    }

    // Initialize captcha when the page loads
    window.onload = generateCaptcha;

    // Add event listener to the form
    document.getElementById("contactForm").addEventListener("submit", validateForm);
}

// Function to check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Allow the section to be visible even when partially in the viewport
    return rect.top <= windowHeight * 0.8 && rect.bottom >= 0; // Trigger when 80% of the element is visible
}

// Add the animation class to elements in view
function handleScrollAnimation() {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        if (isElementInViewport(section)) {
            section.classList.add("animate");
        }
    });
}

// Listen for scroll events
window.addEventListener("scroll", handleScrollAnimation);

// Trigger the animation when the page loads, in case some sections are already in view
window.addEventListener("load", handleScrollAnimation);
