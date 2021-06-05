
function removeTransition(e){
    if (e.propertyName !== 'transform') return; // skip it if it's not a transform
    e.target.classList.remove('playing');
    // this.classList.remove('playing');
};

function playAudio(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return;
    audio.currentTime = 0; // Reset audio to start for multiple presses
    audio.play();

    key.classList.toggle('playing');
}

// const keys = document.querySelectorAll('.key');
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(
    key => key.addEventListener('transitionend', removeTransition)
);

window.addEventListener("keydown", playAudio);
// window.addEventListener('keyup', function(e){
//   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//   key.classList.remove('playing')
// })