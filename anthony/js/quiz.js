const quizForm = document.getElementById('quiz-form');
const submitBtn = document.getElementById('submit-btn');
const scoreContainer = document.getElementById('score-container');
const scoreDisplay = document.getElementById('score');

const correctAnswers = ['a', 'a', 'b', 'au'];

function calculateScore() {
	let score = 0;
	const userAnswers = [
		quizForm.elements['question1'].value,
		quizForm.elements['question2'].value,
		quizForm.elements['question3'].value,
		quizForm.elements['question4'].value.toLowerCase()
	];

	userAnswers.forEach((answer, index) => {
		if (answer === correctAnswers[index]) {
			score += 25;
		}
	});

	return score;
}

submitBtn.addEventListener('click', event => {
	event.preventDefault();
	const score = calculateScore() + "/100";
	scoreDisplay.innerText = score;
	scoreContainer.classList.remove('hide');
});
