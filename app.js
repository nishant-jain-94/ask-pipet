const petitionText = "Hey, Pipet, please answer the following question";
const randomMessages = [
	"Are you checking me out?",
	"Don't test me and yeah you aren't a valid user. So buzzz off.",
	"I think I don't like you. I just hate you.",
	"I just hate you to the core!!. So just buzz off.",
	"I'll give it a try, although I'd rather tell you if it's raining out.",
	"I am pretty loyal to Nishant. It's just how I'm made."
]

let answer = "";
let proxyModeSwitch = [false, false];
let freezeMode = false;

const getRandomArbitrary = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const reset = () => {
	document.getElementById('petition').innerText = "";
	document.getElementById('question').innterText = "";
	answer = "";
	freezeMode = false;
	proxyModeSwitch = [false, false];
};

const initializeKeyUpEvent = () => {
	reset();
	document.getElementById('petition').addEventListener('keydown', function(event) {
		if (event.keyCode === 27) {
			proxyModeSwitch[0] = true;
		}

		if (event.keyCode === 17) {
			proxyModeSwitch[1] = true;
		}

		if (event.keyCode === 18) {
			freezeMode = true;
		}

		if (!freezeMode && proxyModeSwitch.every(s => s === true)) {
			event.preventDefault();
			if ((event.keyCode > 96 && event.keyCode < 123) || (event.keyCode > 64 && event.keyCode < 91) || event.keyCode === 32) {
				answer += String.fromCharCode(event.keyCode).toLowerCase();
			}
			this.value += petitionText[this.value.length];
		}

		if (proxyModeSwitch.every(s => s === true) && freezeMode) {
			this.value += petitionText.substring(this.value.length, petitionText.length);
		}

		if (document.getElementById('petition').value.length > 49) {
			this.disable = true;
			document.getElementById("petitionmessage").innerText = "You have reached the limit of typing Petition.";
		}
	});

	document.getElementById("askPipet").addEventListener('click', () => {
		if (answer === "") {
			const randomNumber = getRandomArbitrary(0, randomMessages.length - 1)
			answer = randomMessages[randomNumber];
		}
		document.getElementById("answer").innerText = answer;
	});
}

window.onload = initializeKeyUpEvent;
