
function remote2(url) {
    window.opener.location = url
}


// remote submit button handler - extracting all the data from the remote controller

const playSubmit = document.querySelector('#submit')
function playBthHash(ev) {
    ev.preventDefault();

    // remote hash to be sent to server and then band clients page
        let musicData = {}

        musicData['volume'] = document.querySelector('.volume-slider').value
        musicData['bridge'] = document.querySelector('.bridge-slider').value
        musicData['style'] = document.querySelector('.styleInIt').value
        musicData['description'] = document.querySelector('.descriptionInit').value
        musicData['queue'] = document.querySelector('.queue').value
        musicData['note'] = document.querySelector('.note_display').innerHTML.trim()
        musicData['tempo'] = document.querySelector('#tempo').value

        console.log(musicData)

        
        axios.post('http://localhost:3000/', musicData)  
        // .then(function (response) {
        // console.log(response);
        // })
        // .catch(function (error) {
        // console.log("error");
        // })
    
        
}





playSubmit.addEventListener('click', playBthHash)