const container = document.getElementById("hearts-container");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    heart.style.fontSize = (18 + Math.random() * 25) + "px";

    container.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 300);
// ==========================
// TYPEWRITER EFFECT
// ==========================

const message =
"I made something special only for you... ❤️";

const typing = document.getElementById("typing");

let index = 0;

function typeWriter(){

    if(index < message.length){

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter,50);

    }

}

typeWriter();
// ==========================
// BUTTON CLICK TEST
// ==========================

const startBtn = document.getElementById("startBtn");
const mainCard = document.getElementById("mainCard");

startBtn.addEventListener("click", function () {

    mainCard.style.transition = "0.8s";

    mainCard.style.opacity = "0";
    
    setTimeout(function () {
    mainCard.style.display = "none";
    document.getElementById("envelopeScene").style.display = "flex";
}, 800);

});
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");

envelope.addEventListener("click", function () {

    // Envelope shrink animation
    envelope.style.animation = "openEnvelope .5s forwards";

    // Letter show after animation
    setTimeout(function () {

        envelope.style.display = "none";
        letter.style.display = "block";

    }, 500);

});
// ==========================
// NO BUTTON RUN AWAY
// ==========================
// ==========================
// TOP CLASS RUN AWAY BUTTON
// ==========================

const noBtn = document.getElementById("noBtn");

const funnyTexts = [

"NO 🙈",
"Really? 🥺",
"Think Again 😜",
"Impossible 😂",
"Wrong Choice 😏",
"Only YES ❤️",
"Try Again 🤭",
"You Can't 😝",
"Pleaseee 🥹",
"Click YES 💖"

];

let count = 0;

noBtn.addEventListener("mouseover", () => {

    const maxX = window.innerWidth - noBtn.offsetWidth - 40;
    const maxY = window.innerHeight - noBtn.offsetHeight - 40;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    noBtn.innerHTML = funnyTexts[count % funnyTexts.length];

    count++;

    if(count > 10){

        noBtn.innerHTML = "YES 💖";

        noBtn.id = "yesBtn";

    }

});
// ==========================
// FINAL SCREEN
// ==========================

const yesBtn = document.getElementById("yesBtn");
const finalScreen = document.getElementById("finalScreen");

yesBtn.addEventListener("click", function () {

    // Hide letter
    document.getElementById("letter").style.display = "none";

    heartExplosion();
    confettiExplosion();

    // Show final screen
    finalScreen.style.display = "flex";
    startSlideshow();

});
// ==========================
// HEART EXPLOSION
// ==========================

function heartExplosion(){

    for(let i=0;i<120;i++){

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";

        heart.style.left=Math.random()*window.innerWidth+"px";

        heart.style.top=Math.random()*window.innerHeight+"px";

        heart.style.fontSize=(20+Math.random()*35)+"px";

        heart.style.pointerEvents="none";

        heart.style.zIndex="99999";

        heart.style.transition="1.8s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.transform=
            `translate(
            ${(Math.random()-0.5)*500}px,
            ${(Math.random()-0.5)*500}px
            ) scale(0) rotate(${Math.random()*720}deg)`;

            heart.style.opacity="0";

        },30);

        setTimeout(()=>{

            heart.remove();

        },2000);

    }

}
// ==========================
// PROFESSIONAL CONFETTI
// ==========================

function confettiExplosion(){

    confetti({

        particleCount: 250,

        spread: 120,

        startVelocity: 45,

        origin:{
            y:0.6
        }

    });

}
// ==========================
// PHOTO SLIDESHOW
// ==========================

const photos = document.querySelectorAll(".memory");

let currentPhoto = 0;

function startSlideshow(){

    if(photos.length === 0) return;

    photos[0].classList.add("active");

    setInterval(()=>{

        photos[currentPhoto].classList.remove("active");

        currentPhoto++;

        if(currentPhoto >= photos.length){
            currentPhoto = 0;
        }

        photos[currentPhoto].classList.add("active");

    },2500);

}
// ==========================
// LOVE COUNTER
// ==========================

// Relationship Start Date ❤️
const loveDate = new Date("2023-07-10T00:00:00");

function updateCounter() {

    const now = new Date();

    let diff = now - loveDate;

    const seconds = Math.floor(diff / 1000);

    const minutes = Math.floor(seconds / 60);

    const hours = Math.floor(minutes / 60);

    const days = Math.floor(hours / 24);

    const years = Math.floor(days / 365);

    const months = Math.floor((days % 365) / 30);

    const remainingDays = (days % 365) % 30;

    const remainingHours = hours % 24;

    const remainingMinutes = minutes % 60;

    const remainingSeconds = seconds % 60;

    document.getElementById("counter").innerHTML = `
        ❤️ Since 10 July 2023 ❤️ <br><br>

        <strong>${years}</strong> Year(s) 💖<br>
        <strong>${months}</strong> Month(s) 💖<br>
        <strong>${remainingDays}</strong> Day(s) 💖<br><br>

        ⏳ ${remainingHours}h ${remainingMinutes}m ${remainingSeconds}s
    `;
}

updateCounter();

// Update every second
setInterval(updateCounter, 1000);