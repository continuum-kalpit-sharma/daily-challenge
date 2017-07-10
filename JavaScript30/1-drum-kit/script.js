(function() {
    document.addEventListener('keydown', function(e) {
        let keyPushed = e.keyCode;
        const audio = document.querySelector(`audio[data-key='${keyPushed}']`);
        const key = document.querySelector(`div[data-key='${keyPushed}']`);
        key.classList.add('playing');
        audio.currentTime = 0;
        if (!audio) {
            return;
        }
        audio.play();
        document.addEventListener('keyup', function() {
            key.classList.remove('playing');
        });
    });
})();
