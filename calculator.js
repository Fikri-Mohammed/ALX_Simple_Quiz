function checkAnswer() {
    const correctAnswer = "4";
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    if (userAnswer) {
        const userAnswerValue = userAnswer.value;

        if (userAnswerValue === correctAnswer) {
            document.getElementById('feedback').textContent = "Correct! Well done.";
            document.getElementById('feedback').classList.add('correct');
            document.getElementById('feedback').classList.remove('incorrect');
        } else {
            document.getElementById('feedback').textContent = "That's incorrect. The correct answer is " + correctAnswer + ".";
            document.getElementById('feedback').classList.add('incorrect');
            document.getElementById('feedback').classList.remove('correct');
        }
    } else {
        document.getElementById('feedback').textContent = "Please select an answer.";
        document.getElementById('feedback').classList.remove('correct', 'incorrect');
    }
}

const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);

document.querySelectorAll('input[name="quiz"]').forEach((input) => {
    input.addEventListener('change', () => {
        document.getElementById('feedback').textContent = "";
        document.getElementById('feedback').classList.remove('correct', 'incorrect');
    });
});
