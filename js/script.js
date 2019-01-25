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
                sprite.style.backgroundPositionY = -((bgSection.getBoundingClientRect().top / sprite.dataset.speed) - sprite.dataset.offsety) + (sprite.dataset.offsety.indexOf('px') > -1 || sprite.dataset.offsety.indexOf('%') > -1 ? '' : 'px');
            } else if(sprite.dataset.direction === 'up') {
                sprite.style.backgroundPositionY = (parseInt(sprite.dataset.offsety) + (parseInt(bgSection.getBoundingClientRect().top) * (sprite.dataset.speed / 2))) + (sprite.dataset.offsety.indexOf('px') > -1 || sprite.dataset.offsety.indexOf('%') > -1 ? '' : 'px');
            }

            if(sprite.dataset.scale) {
                sprite.style.backgroundSize = parseInt(sprite.dataset.scale) - parseInt(bgSection.getBoundingClientRect().top) + (sprite.dataset.offsety.indexOf('px') > -1 || sprite.dataset.offsety.indexOf('%') > -1 ? '' : 'px');
            }

            if(sprite.dataset.offsetx) {
                sprite.style.backgroundPositionX = sprite.dataset.offsetx;
            }

            if(sprite.dataset.rotate) {
                sprite.style.transform = 'rotate(' + bgSection.getBoundingClientRect().top + 'deg)';
            }
        });
    });
}