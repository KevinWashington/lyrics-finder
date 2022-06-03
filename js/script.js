function findLyrics(artist, music){
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${music}`)
}

const form = document.querySelector('#lyrics-form')

form.addEventListener("submit", el => {
    el.preventDefault()
    doSubmit()
})

async function doSubmit(){
    const lyrics_el = document.getElementById("lyrics")
    const artist = document.querySelector("#artist").value
    const music = document.querySelector("#music").value
    lyrics_el.innerHTML = "Searching..."
    /*
    findLyrics(artist, music)
        .then(response => response.json())
        .then((data) => {
            if(data.lyrics){
                lyrics_el.innerHTML = `<pre>${data.lyrics}<pre>`
            }else{
                lyrics_el.innerHTML = data.error
            }
            
        })
        .catch(err =>{
            lyrics_el.innerHTML = `Oops! ${err}`
        })
    */

    //ASYNC AWAIT
    try{
        const lyricsResponse = await findLyrics(artist, music)
        const data = await lyricsResponse.json()
        if(data.lyrics){
            lyrics_el.innerHTML = `<pre>${data.lyrics}<pre>`
        }else{
            lyrics_el.innerHTML = data.error
        }
    } catch(err){
        console.log(err)
    }
}