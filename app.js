const randomMessages = [
    "Are you mocking at me?",
    "Don't test me and yeah you aren't a valid user. So buzzz off.",
    "I think I don't like you. I just hate you.",
    "I just hate you to the core.",
]

let registeredAnswer = "";

let proxyModeSwitch = [false, false];

document.getElementById('#petition').addEventListener('keyup', (event) => {
    if (event.keyCode ===  27) {
        proxyModeSwitch[0] = true;
    }
    if (event.keyCode === 17) {
        proxyModeSwitch[1] = true;
    }
    if (proxyModeSwitch.every(s => s === true))
    if (document.getElementById('#petition').innerText.length > 49) {
        document.getElementById("#petitionmessage").innerText = "You have reached the limit of typing question.";
    }
});