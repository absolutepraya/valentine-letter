// define variables for icons
const heartIcon = document.querySelector('.header-image');
const heartIconHover = document.querySelector('.header-image-hover');
const heartIconBroken = document.querySelector('.header-image-broken');
const heartIconBrokenHover = document.querySelector('.header-image-broken-hover');
const imageLink = document.querySelector('.image-link');
const imageLinkBroken = document.querySelector('.image-link-broken');

// disable the broken heart icon
imageLinkBroken.style.display = 'none';
heartIconBroken.style.display = 'none';
heartIconBrokenHover.style.display = 'none';
// *you might be wondering why dont i use div for the hearts

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
    "i have your address: Jl. Mampang Prapatan IV No. 99 be mine now or your cat gets it 😸☠️",
    "i have your credit card number\n3738 5433 9101 1121\nbe mine or i'll spend all your money",
    "alright....okay... i'll stop now 😔",
    "have fun with your valentine T___T 💔"
];

// function for "no" button
function clickNo() {
    let currentText = bodyText.textContent;
    let currentIndex = messages.indexOf(currentText);
    currentIndex++;
    if (currentIndex === messages.length - 1) {
        // hide the buttons
        noButton.style.display = 'none';
        yesButton.style.display = 'none';

        // change the heart icon to broken heart icon
        imageLink.style.display = 'none';
        heartIcon.style.display = 'none';
        heartIconHover.style.display = 'none';

        imageLinkBroken.style.display = 'block';
        heartIconBrokenHover.style.display = 'block';
        heartIconBroken.style.display = 'block';
    }
    bodyText.textContent = messages[currentIndex];
}

// function for "yes" button
function clickYes() {
    noButton.style.display = 'none';
    yesButton.style.display = 'none';
    bodyText.textContent = "YEAY ◝(ᵔᵕᵔ)◜";
}