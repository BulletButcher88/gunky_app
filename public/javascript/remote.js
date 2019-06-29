
function remote2(url) {
    window.opener.location = url

}

// remote submit button handler - extracting all the data from the remote controller

const playSubmit = document.querySelector('#submit')
function playBthHash(ev) {
    ev.preventDefault();

    // remote hash to be sent to server and then band clients page
        const musicData = {}

        musicData['volume'] = document.querySelector('.volume-slider').value
        musicData['bridge'] = document.querySelector('.bridge-slider').value
        musicData['style'] = document.querySelector('.styleInIt').value
        musicData['description'] = document.querySelector('.descriptionInit').value
        musicData['queue'] = document.querySelector('.queue').value
        musicData['note'] = document.querySelector('.note_disply').innerHTML.trim()
        musicData['tempo'] = document.querySelector('.stopwatch').innerHTML
}

playSubmit.addEventListener('click', playBthHash)