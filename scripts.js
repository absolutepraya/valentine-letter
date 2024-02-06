// define variables for elements
const bodyText = document.querySelector('.body-text');
const noButton = document.querySelector('.no-button');
const yesButton = document.querySelector('.yes-button');

// define an array for the messages
const messages = [
    "you must've misclicked right XD now choose yes",
    "wait that wasn't a misclick?? 😧",
    "so that's got to be an error yes? i think so",
    "oh...i know...you're just playing hard to get 😆",
    "no?? you're not just teasing me???",
    "nah man, you just wanna make me work hard for that 'yes' huh? okay bet. 😈",
    "nope i wont back down",
    "still here, not gonna give up that easy 😤",
    "you're gonna have to say yes eventually (before i run out of patience)",
    "please? 🥺",
    "i'll give you a cookie if you say yes 🍪",
    "i'll give you two cookies if you say yes 🍪🍪",
    "i'll give you ten cookies if you say yes 🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪",
    "i will spend my lifetime making cookies for you if you say yes",
    "PLEAAASEE 😭",
    "i'm begging you now 😭😭",
    "i'm not above begging, i'll be on my knees if you say yes 🛐",
    "BE. MY. VALENTINE. 😡",
    "AAARGH I'LL USE THE HARD WAY >:(",
    "i have your IP address\n206.144.218.122\nnow be mine",
    "i have your address\nJl. Mampang Prapatan IV No. 99\nbe mine now or your cat gets it",
    "i have your credit card number\n3738 5433 9101 1121\nbe mine or i'll spend all your money",
    "okay, i'll stop now 😔",
    "have fun with your valentine T___T 💔"
];

// function for "no" button
function clickNo() {
    if (bodyText) {
        // get the current text content
        let currentText = bodyText.textContent;
        // find the index of the current text in the messages array
        let currentIndex = messages.indexOf(currentText);
        // if current text is not found or at the end of the array, change the visibility of the buttons
        currentIndex++;
        if (currentIndex === messages.length - 1) {
            noButton.style.visibility = 'hidden';
            yesButton.style.visibility = 'hidden';
        }
        // update the text content with the next message
        bodyText.textContent = messages[currentIndex];
    }
}

// function for "yes" button
function yesButtonClick() {
    if (bodyText && noButton && yesButton) {
        bodyText.textContent = "YEAY";
        noButton.style.visibility = 'hidden';
        yesButton.style.visibility = 'hidden';
    }
}

// event listener for the "no" button
if (noButton) {
    noButton.addEventListener('click', clickNo);
}

// event listener for the "yes" button
if (yesButton) {
    yesButton.addEventListener('click', yesButtonClick);
}