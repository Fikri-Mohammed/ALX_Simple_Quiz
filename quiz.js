// Step 1: Define the checkAnswer function
function checkAnswer() {
    // Step 2: Declare the correct answer
    var correctAnswer = "4";

    // Step 3: Retrieve the user's answer
    var userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an answer was selected
    if (userAnswer) {
        userAnswer = userAnswer.value;

        // Step 4: Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no answer is selected
        document.getElementById("feedback").textContent = "Please select an answer!";
    }
}

// Step 5: Add an event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
