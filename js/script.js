function go() {
    positionShit();
    document.addEventListener('scroll', ev => {
        positionShit()
    });
}

function positionShit() {
    document.querySelectorAll('.parallax-bg').forEach(bgSection => {
        bgSection.style.backgroundPositionY = -(bgSection.getBoundingClientRect().top / 2) + 'px';

        // Add watchers for sprites
        bgSection.querySelectorAll('.sprite').forEach(sprite => {
            if (sprite.dataset.direction === 'down') {
                sprite.style.backgroundPositionY = -((bgSection.getBoundingClientRect().top / sprite.dataset.speed) - sprite.dataset.offsety) + 'px';
            } else if(sprite.dataset.direction === 'up') {
                sprite.style.backgroundPositionY = (parseInt(sprite.dataset.offsety) + (parseInt(bgSection.getBoundingClientRect().top) * sprite.dataset.speed)) + 'px';
            }
        });
    });
}