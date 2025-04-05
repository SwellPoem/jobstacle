// load music.mp3 from /music/music.mp3
const audio = new Audio('/music/music.mp3');

// play the audio as soon as the page loads
audio.addEventListener('canplaythrough', () => {
    audio.play();
}, false);

const musicButton = document.querySelector('.music-button');

let timeout = 2000; // 1 second
musicButton.addEventListener('click', () => {
    audio.pause();
    timeout = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;
    console.log(timeout);
    setTimeout(() => {
        audio.play();
    }, timeout);
});


