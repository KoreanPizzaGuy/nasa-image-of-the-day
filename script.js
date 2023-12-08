
document.querySelector('button').addEventListener('click', spacePhoto)

function spacePhoto(){
    const userDate = document.querySelector('input').value
    const api = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=" + userDate
    
    fetch(api)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let spaceName = data.title
            let spaceImg = data.hdurl
            let spaceDescript = data.explanation

            document.querySelector('h2').innerText = spaceName
            document.querySelector('img').src = spaceImg
            document.querySelector('h3').innerText = spaceDescript
        })
        .catch(err => {
            console.log(`error ${err}`)
            document.querySelector('h2').innerText = data.msg
        })

  
}

