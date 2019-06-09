window.onload = function() {
    document.getElementsByClassName('platform-xbox').item(0).onclick = function(event) {
        event.target.setAttribute('class', 'platform-xbox platform-xbox-selected')
    }

    document.getElementsByClassName('platform-pc').item(0).onclick = function(event) {
        event.target.setAttribute('class', 'platform-pc platform-pc-selected')
    }

    document.getElementsByClassName('platform-playstation').item(0).onclick = function(event) {
        event.target.setAttribute('class', 'platform-playstation platform-playstation-selected')
    }
}