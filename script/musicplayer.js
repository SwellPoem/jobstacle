// load music.mp3 from /music/music.mp3
const audio = new Audio('/music/music.mp3');
audio.loop = true;

const musicButton = document.querySelector('.music-button');

// Aggiungi un evento per avviare l'audio al primo clic sulla pagina
document.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    }
}, { once: true }); // L'evento viene eseguito solo una volta

let timeout = 2000; // 1 second
musicButton.addEventListener('click', () => {
    if (!audio.paused) {
        audio.pause();
        musicButton.style.backgroundColor = 'rgba(255,69,0,0.35)';
        musicButton.textContent = '🔇  Paused';
        timeout = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;
        console.log(timeout);
        setTimeout(() => {
            audio.play();
            musicButton.removeAttribute('style');
            musicButton.textContent = '🔊  Pause';
        }, timeout);
    }
});