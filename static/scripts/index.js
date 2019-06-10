window.onload = function() {
    const bounceDelay = 300
    document.getElementsByClassName('platform-xbox').item(0).onclick = function(event) {
        setTimeout(function() {
            const logo = document.querySelector('.platform-xbox > .logo')
            const classes = logo.getAttribute('class')
            logo.setAttribute('class', classes + ' logo-bounce')
        }, bounceDelay)
        const classes = event.target.getAttribute('class')
        event.target.setAttribute('class', classes + ' platform-selected')
    }

    document.getElementsByClassName('platform-pc').item(0).onclick = function(event) {
        setTimeout(function() {
            const logo = document.querySelector('.platform-pc > .logo')
            const classes = logo.getAttribute('class')
            logo.setAttribute('class', classes + ' logo-bounce')
        }, bounceDelay)
        const classes = event.target.getAttribute('class')
        event.target.setAttribute('class', classes + ' platform-selected')
    }

    document.getElementsByClassName('platform-playstation').item(0).onclick = function(event) {
        setTimeout(function() {
            const logo = document.querySelector('.platform-playstation > .logo')
            const classes = logo.getAttribute('class')
            logo.setAttribute('class', classes + ' logo-bounce')
        }, bounceDelay)
        const classes = event.target.getAttribute('class')
        event.target.setAttribute('class', classes + ' platform-selected')
    }
}