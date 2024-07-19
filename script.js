const click = document.querySelector('.click');
const giftbox = document.querySelector('.gift-box');
const shadow = document.querySelector('.gift-box');
const giftContainer = document.querySelector('.gift-container');
const omedeto = document.querySelector('.omedeto');
const birthdayCard = document.querySelector('.birthday-card');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const cardContent = document.querySelector('.card-content');

const cardData = [
    {
        wish: "Hewoooo 😆, i want to say happy sweet seventeen to my sweetiest girl in the world💕, You are turning to 17 😲.I always wish you all the best💞. I hope , you will be more happier than ever , and loving each other more and more🥰. I really love you, i love you more than anything in this world 🌍💕.Once again, Happy birthday for you love >//<",
        image: "images/love.png"
    },
    {
        wish: "Do you know that, i feel so lucky to have you🥺, I love everything about you.You are so special for me, No one can replace you.You are the only one who i love ❤.Thank you for coming to my life and make me feel loved 😆. Happy birthday! ",
        image: "images/chick.png"
    }
];

let currentCardIndex = 0;

click.addEventListener('click', () => {
    if (click.className === "click") {
        click.classList.add('activate');
        giftbox.classList.add('activate');
        shadow.classList.add('activate');
        giftContainer.classList.add('activate');
        omedeto.classList.add('activate');
        omedeto.classList.remove('activate2');
    } else {
        click.classList.remove('activate');
        giftbox.classList.remove('activate');
        shadow.classList.remove('activate');
        giftContainer.classList.remove('activate');
        omedeto.classList.remove('activate');
        omedeto.classList.add('activate2');

        
        setTimeout(() => {
            giftContainer.style.transform = 'translateX(-120vw)';
        }, 0); 

    
        setTimeout(() => {
            updateCardContent();
            birthdayCard.classList.add('show');
        }, 1000); 
    }
});

prevButton.addEventListener('click', () => {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateCardContent();
    }
});

nextButton.addEventListener('click', () => {
    if (currentCardIndex < cardData.length - 1) {
        currentCardIndex++;
        updateCardContent();
    }
});

function updateCardContent() {
    const card = cardData[currentCardIndex];
    cardContent.innerHTML = `
        <p class="wish">${card.wish}</p>
        <img src="${card.image}" alt="Sticker" class="sticker">
    `;
}
function startAudioAt(seconds) {
    var audio = document.getElementById('myAudio');
    audio.muted = false;
    audio.currentTime = seconds;
    audio.play();
}

window.onload = function() {

    startAudioAt(10);
}
