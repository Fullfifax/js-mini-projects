function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    // get key pressed
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // get div of key pressed
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if(!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

// get all keys
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);