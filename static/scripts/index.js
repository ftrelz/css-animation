function setPlatformSelected(platform) {
    const platformElement = document.querySelector('.platform-' + platform)
    const classes = platformElement.getAttribute('class')
    platformElement.setAttribute('class', classes + ' platform-selected')
}

function setLogoBounce(platform) {
    const logo = document.querySelector('.platform-' + platform + ' > .logo')
    const classes = logo.getAttribute('class')
    logo.setAttribute('class', classes + ' logo-bounce')
}

window.onload = function() {
    const bounceDelay = 300

    const xboxOnClick = function() {
        setTimeout(function() {
            setLogoBounce('xbox')
        }, bounceDelay)
        setPlatformSelected('xbox')
    }
    document.querySelector('.platform-xbox').onclick = xboxOnClick
    document.querySelector('.platform-xbox > img').onclick = xboxOnClick

    const pcOnClick = function() {
        setTimeout(function() {
            setLogoBounce('pc')
        }, bounceDelay)
        setPlatformSelected('pc')
    }
    document.querySelector('.platform-pc').onclick = pcOnClick
    document.querySelector('.platform-pc > img').onclick = pcOnClick

    const playstationOnClick = function() {
        setTimeout(function() {
            setLogoBounce('playstation')
        }, bounceDelay)
        setPlatformSelected('playstation')
    }
    document.querySelector('.platform-playstation').onclick = playstationOnClick
    document.querySelector('.platform-playstation > img').onclick = playstationOnClick
}