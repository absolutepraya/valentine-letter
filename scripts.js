// ———————————————— CONVERSATION ————————————————

// define variables for elements
const heartIcon = document.querySelector('.header-image');
const heartIconHover = document.querySelector('.header-image-hover');
const heartIconBroken = document.querySelector('.header-image-broken');
const heartIconBrokenHover = document.querySelector('.header-image-broken-hover');
const imageLink = document.querySelector('.image-link');
const imageLinkBroken = document.querySelector('.image-link-broken');
const bodyText = document.querySelector('.body-text');
const noButton = document.querySelector('.no-button');
const yesButton = document.querySelector('.yes-button');
const container = document.querySelector('.container');
const container2 = document.querySelector('.container2');

// disable the broken heart icon
imageLinkBroken.style.display = 'none';
heartIconBroken.style.display = 'none';
heartIconBrokenHover.style.display = 'none'; // *you might be wondering why dont i use div for the hearts

// hide the second container for the date details
container2.style.display = 'none';

// define an array for the 'no' messages
const messagesNo = [
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

// define an array for 'yes' messages
const messagesYes = [
    "U SURE????? 😳 (no turning back)",
    "U SURE THAT WASN'T A MISCLICK????",
    "LETS FUCKING GOOOOOOOO 🥳🍾"
];

// function for "no" button
function clickNo() {
    let currentText = bodyText.textContent;
    let currentIndex = messagesNo.indexOf(currentText);
    currentIndex++;

    if (currentIndex === messagesNo.length - 1) {
        // hide the buttons
        noButton.disabled = true;
        yesButton.disabled = true;

        // change the heart icon to broken heart icon
        imageLink.style.display = 'none';
        heartIcon.style.display = 'none';
        heartIconHover.style.display = 'none';

        imageLinkBroken.style.display = 'block';
        heartIconBrokenHover.style.display = 'block';
        heartIconBroken.style.display = 'block';

        // change the background

    }

    bodyText.textContent = messagesNo[currentIndex];
}

// function for "yes" button
function clickYes() {
    noButton.disabled = true;

    let currentText = bodyText.textContent;
    let currentIndex = messagesYes.indexOf(currentText);
    currentIndex++;

    if (currentIndex === messagesYes.length - 1) {
        yesButton.textContent = "next";
    } else {
        yesButton.textContent = "yes!!!";
    }

    if (currentIndex === messagesYes.length) {
        // change the text of the button, and change the onclick function to go to second container
        yesButton.onClick = dateDetails();
    }

    bodyText.textContent = messagesYes[currentIndex];
}

// show the second container for the date details
function dateDetails() {
    container.style.display = 'none';
    container2.style.display = 'grid'; 
}

// ———————————————— DATE DETAILS ————————————————

// define variables for the date details
const dateBodyText = document.querySelector('.date-message-text');
const x1Image = document.querySelector('.x1-img');
const x2Image = document.querySelector('.x2-img');
const x3Image = document.querySelector('.x3-img');
const x4Image = document.querySelector('.x4-img');
const x1Text = document.querySelector('.x1-text');
const x2Text = document.querySelector('.x2-text');
const x3Text = document.querySelector('.x3-text');
const x4Text = document.querySelector('.x4-text');
const x1 = document.querySelector('.x1');
const x2 = document.querySelector('.x2');
const x3 = document.querySelector('.x3');
const x4 = document.querySelector('.x4');

// add event listeners to the choices
x1.addEventListener('click', x1Click);
x2.addEventListener('click', x2Click);
x3.addEventListener('click', x3Click);
x4.addEventListener('click', x4Click);

var choices = [];
var choicesIndex = 0;

function part2() {
    // change whole image and text
    dateBodyText.textContent = "how about the night?";
    x1Image.src = "assets/date/x1_part2.jpg";
    x2Image.src = "assets/date/x2_part2.jpg";
    x3Image.src = "assets/date/x3_part2.jpg";
    x4Image.src = "assets/date/x4_part2.jpg";
    x1Text.textContent = "fancy dinner";
    x2Text.textContent = "strolling around at night";
    x3Text.textContent = "gaming";
    x4Text.textContent = "building lego together";
}

function part3() {
    // change whole image and text
    dateBodyText.textContent = "which flower would you want me to bring for you?";
    x1Image.src = "assets/date/x1_part3.jpg";
    x2Image.src = "assets/date/x2_part3.jpg";
    x3Image.src = "assets/date/x3_part3.jpg";
    x4Image.src = "assets/date/x4_part3.jpg";
    x1Text.textContent = "lilies";
    x2Text.textContent = "peonies";
    x3Text.textContent = "orchids";
    x4Text.textContent = "hydrangeas";
}

function part4() {
    // change whole image and text
    dateBodyText.textContent = "which one should we get later ( ˘▽˘)っ🍰";
    x1Image.src = "assets/date/x1_part4.jpg";
    x2Image.src = "assets/date/x2_part4.jpg";
    x3Image.src = "assets/date/x3_part4.jpg";
    x4Image.src = "assets/date/x4_part4.jpg";
    x1Text.textContent = "cromboloni";
    x2Text.textContent = "pizza";
    x3Text.textContent = "hotpot";
    x4Text.textContent = "indonesian cuisine";
}

function part5_end() {
    // disable the event listener
    x1.removeEventListener('click', x1Click);
    x2.removeEventListener('click', x2Click);
    x3.removeEventListener('click', x3Click);
    x4.removeEventListener('click', x4Click);

    // // select the divs
    // const divs = [document.querySelectorAll('.x1, .x2, .x3, .x4')];

    // // loop through each div
    // divs.forEach(div => {
    //     // select the img and p elements within the current div
    //     const img = div.querySelector('img');
    //     const p = div.querySelector('p');

    //     // move the p element before the img element
    //     div.insertBefore(p, img);

    //     // change the margin
    //     img.style.marginBottom = '0';
    //     p.style.marginBottom = '-13px';
    // });

    // show the results
    dateBodyText.textContent = "GOT IT! screenshot this page and send it to me. SEE YOU SOON!!!";
    x1Image.src = `assets/date/x${choices[0]}_part1.jpg`;
    x2Image.src = `assets/date/x${choices[1]}_part2.jpg`;
    x3Image.src = `assets/date/x${choices[2]}_part3.jpg`;
    x4Image.src = `assets/date/x${choices[3]}_part4.jpg`;
    x1Text.textContent = "1️⃣ day activity"
    x2Text.textContent = "2️⃣ night activity"
    x3Text.textContent = "3️⃣ bouquet"
    x4Text.textContent = "4️⃣ food to munch"

    // change the background
}

function x1Click() {
    choices.push(1);
    console.log(choices);
    choicesIndex++;
    if (choicesIndex === 1) {
        part2();
    } else if (choicesIndex === 2) {
        part3();
    } else if (choicesIndex === 3) {
        part4();
    } else {
        part5_end();
    }
}

function x2Click() {
    choices.push(2);
    console.log(choices);
    choicesIndex++;
    if (choicesIndex === 1) {
        part2();
    } else if (choicesIndex === 2) {
        part3();
    } else if (choicesIndex === 3) {
        part4();
    } else {
        part5_end();
    }
}

function x3Click() {
    choices.push(3);
    console.log(choices);
    choicesIndex++;
    if (choicesIndex === 1) {
        part2();
    } else if (choicesIndex === 2) {
        part3();
    } else if (choicesIndex === 3) {
        part4();
    } else {
        part5_end();
    }
}

function x4Click() {
    choices.push(4);
    console.log(choices);
    choicesIndex++;
    if (choicesIndex === 1) {
        part2();
    } else if (choicesIndex === 2) {
        part3();
    } else if (choicesIndex === 3) {
        part4();
    } else {
        part5_end();
    }
}