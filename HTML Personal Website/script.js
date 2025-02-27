// script.js

// Homepage javascript:


// Function to display a dynamic greeting message on the homepage based on the time of day
function displayGreeting() {
    const greetingElement = document.getElementById('greeting-message');
    const currentHour = new Date().getHours(); // Get the current hour (0-23)
    let greetingMessage = "";

    // Determine greeting based on the current hour
    if (currentHour < 12) {
        greetingMessage = "Good morning! Start your day with a coffee then explore my website!";
    } else if (currentHour < 18) {
        greetingMessage = "Good afternoon! Get a cold juice then explore my website!";
    } else {
        greetingMessage = "Good evening! Drink some hot chocolate then explore my website!";
    }

    greetingElement.textContent = greetingMessage; // Set the greeting message
}

// Call the greeting function directly to display it on the homepage
if (document.title === "Home Page") {
    displayGreeting(); // Directly call the greeting function if on the homepage
}

/* The displayGreeting() function now checks the current hour using new Date().getHours(), which returns the hour (0–23).
Depending on the hour, it sets a different greeting message:
Morning: 12 AM to 11:59 AM
Afternoon: 12 PM to 5:59 PM
Evening: 6 PM to 11:59 PM  */


// gallery page javascript

// Full-Size Image Modal Functionality
document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".gallery img"); // select all images in gallery
    const modal = document.createElement("div"); // create modal div
    const modalImage = document.createElement("img"); // image for the modal
    const closeModal = document.createElement("span"); // close button

    // Style the modal
    modal.style.display = "none";
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "1000";
    modal.appendChild(modalImage);
    document.body.appendChild(modal);

    // Style the close button
    closeModal.innerHTML = "&times;";
    closeModal.style.position = "absolute";
    closeModal.style.top = "20px";
    closeModal.style.right = "30px";
    closeModal.style.color = "#ffffff";
    closeModal.style.fontSize = "40px";
    closeModal.style.cursor = "pointer";
    modal.appendChild(closeModal);

    // Open modal when image is clicked
    galleryImages.forEach((img) => {
        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImage.src = img.src; // Set the modal image to the clicked image
            modalImage.alt = img.alt; // Set alt attribute for accessibility
        });
    });

    // Close modal when close button is clicked
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the image
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});


//contactme page javascript

// Function to validate the contact form
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const captcha = document.getElementById('captcha').value;

    // Simple validation
    if (name === "" || email === "" || message === "" || captcha === "") {
        alert("Please fill out all fields.");
        return false; // Prevent form submission
    }

    // Check captcha answer (3 + 5 = 8)
    if (captcha !== "8") {
        alert("Captcha answer is incorrect.");
        return false; // Prevent form submission
    }

    alert("Thank you for your message, " + name + "!"); // Thank you message
    return true; // Allow form submission
}

// Load the greeting message when the homepage is ready
if (document.title === "Home Page") {
    window.onload = displayGreeting; // Call the greeting function on page load
}


// quiz page java script
let currentQuestionIndex = 0;
let score = 0;
let isQuizActive = true;

// Array to hold quiz questions
const questions = [];

// Generate a set of 10 random math questions
for (let i = 0; i < 10; i++) {
    const num1 = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    const num2 = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    questions.push({
        question: `What is ${num1} + ${num2}?`, // Create a question using random numbers
        answer: num1 + num2
    });
}

// Function to load the current question
function loadQuestion() {
    const quizContainer = document.getElementById("quiz-container");
    const questionObj = questions[currentQuestionIndex];

    // Clear previous content
    quizContainer.innerHTML = "";

    // Create question text
    const questionText = document.createElement("p");
    questionText.textContent = questionObj.question;
    quizContainer.appendChild(questionText);

    // Create input for answer
    const answerInput = document.createElement("input");
    answerInput.type = "number";
    answerInput.id = "answer";
    quizContainer.appendChild(answerInput);

    // Show the next button
    document.getElementById("next-button").style.display = "inline-block";
}

// Function to check the answer
function checkAnswer(userAnswer) {
    const questionObj = questions[currentQuestionIndex];
    let correctAnswer;

    // Using switch statement to determine correct answer
    switch (questionObj.question) {
        case `What is ${questionObj.answer - 1} + 1?`:
            correctAnswer = questionObj.answer;
            break;
        case `What is ${questionObj.answer - 2} + 2?`:
            correctAnswer = questionObj.answer;
            break;
        case `What is ${questionObj.answer - 3} + 3?`:
            correctAnswer = questionObj.answer;
            break;
        case `What is ${questionObj.answer - 4} + 4?`:
            correctAnswer = questionObj.answer;
            break;
        case `What is ${questionObj.answer - 5} + 5?`:
            correctAnswer = questionObj.answer;
            break;
        case `What is ${questionObj.answer - 6} + 6?`:
            correctAnswer = questionObj.answer;
            break;
        case `What is ${questionObj.answer - 7} + 7?`:
            correctAnswer = questionObj.answer;
            break;
        case `What is ${questionObj.answer - 8} + 8?`:
            correctAnswer = questionObj.answer;
            break;
        case `What is ${questionObj.answer - 9} + 9?`:
            correctAnswer = questionObj.answer;
            break;
        case `What is ${questionObj.answer - 10} + 10?`:
            correctAnswer = questionObj.answer;
            break;
        default:
            correctAnswer = null; // Should not happen
    }

    // Check the user's answer
    if (userAnswer === correctAnswer) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong! The correct answer was " + correctAnswer);
    }
}

// Function to handle the next question
function nextQuestion() {
    const userAnswer = parseInt(document.getElementById("answer").value);
    
    // Check the answer
    checkAnswer(userAnswer);
    currentQuestionIndex++;

    // Load the next question or display score
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        displayScore();
    }
}

// Function to display the score and ask to retry
function displayScore() {
    const scoreContainer = document.getElementById("score-container");
    scoreContainer.innerHTML = `<h2>Your Score: ${score} out of ${questions.length}</h2>`;
    scoreContainer.style.display = "block";
    document.getElementById("next-button").style.display = "none"; // Hide next button

    // Use a while loop to ask if the user wants to retry
    let retry = true;
    while (retry) {
        const userWantsToRetry = confirm("Do you want to try the quiz again?");
        if (userWantsToRetry) {
            retryQuiz();
            retry = false; // Exit the while loop
        } else {
            alert("Thank you for playing!");
            retry = false; // Exit the while loop
        }
    }
}

// Function to retry the quiz
function retryQuiz() {
    currentQuestionIndex = 0; // Reset question index
    score = 0; // Reset score
    loadQuestion(); // Load the first question again
}

// Load the first question on page load
window.onload = loadQuestion;