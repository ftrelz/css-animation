window.onload = function() {
    const bounceDelay = 300

    const xboxOnClick = function(event) {
        setTimeout(function() {
            const logo = document.querySelector('.platform-xbox > .logo')
            const classes = logo.getAttribute('class')
            logo.setAttribute('class', classes + ' logo-bounce')
        }, bounceDelay)
        const platform = document.querySelector('.platform-xbox')
        const classes = platform.getAttribute('class')
        platform.setAttribute('class', classes + ' platform-selected')
    }
    document.querySelector('.platform-xbox').onclick = xboxOnClick
    document.querySelector('.platform-xbox > img').onclick = xboxOnClick

    const pcOnClick = function(event) {
        setTimeout(function() {
            const logo = document.querySelector('.platform-pc > .logo')
            const classes = logo.getAttribute('class')
            logo.setAttribute('class', classes + ' logo-bounce')
        }, bounceDelay)
        const platform = document.querySelector('.platform-pc')
        const classes = platform.getAttribute('class')
        platform.setAttribute('class', classes + ' platform-selected')
    }
    document.querySelector('.platform-pc').onclick = pcOnClick
    document.querySelector('.platform-pc > img').onclick = pcOnClick

    const playstationOnClick = function(event) {
        setTimeout(function() {
            const logo = document.querySelector('.platform-playstation > .logo')
            const classes = logo.getAttribute('class')
            logo.setAttribute('class', classes + ' logo-bounce')
        }, bounceDelay)
        const platform = document.querySelector('.platform-playstation')
        const classes = platform.getAttribute('class')
        platform.setAttribute('class', classes + ' platform-selected')
    }
    document.querySelector('.platform-playstation').onclick = playstationOnClick
    document.querySelector('.platform-playstation > img').onclick = playstationOnClick
}