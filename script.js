let findInfoButton = document.getElementById("findInfo")

let county = document.getElementById("county")

findInfoButton.addEventListener('click', logData)

const apiUrl = 'https://nominatim.openstreetmap.org/search?format=json&county='

function logData(e){
    e.preventDefault(); 
    
    fetch(`${apiUrl}${county.value}`, {
        method: 'GET'
    })
    .then ((resp => resp.json()))
    .then(data => console.log(data))
}

// function renderData(data){
//     const dataToArray = Object.values(data);
//     const useableData = Object.values(dataToArray[3]);
//     const displayValues = Object.values(useableData[0])

//     let townName = displayValues[0];
//     let longitude = displayValues[1];
//     let state = displayValues[2];
//     let stateAb = displayValues[3];
//     let latitude = displayValues[4];

//     let infoTown = document.createElement('p')
//     let infoLong = document.createElement('p')
//     let infoState = document.createElement('p')
//     let infoStateAb = document.createElement('p')
//     let infoLat = document.createElement('p')

//     infoTown.classList.add('town')
//     infoLong.classList.add('longitude')
//     infoState.classList.add('state')
//     infoStateAb.classList.add('abbreviation')
//     infoLat.classList.add('latitude')

//     infoTown.innerText = `City: ${townName}`
//     infoState.innerText = `State: ${state}`
//     infoLat.innerText = `Latitude: ${latitude}`
//     infoLong.innerText = `Longitude: ${longitude}`
//     infoStateAb.innerText = `State Abbreviation: ${stateAb}`

//     document.body.appendChild(infoTown)
//     document.body.appendChild(infoState)
//     document.body.appendChild(infoLat)
//     document.body.appendChild(infoLong)
//     document.body.appendChild(infoStateAb)

// }

let likeButton = document.getElementById("liker")
let dislikeButton = document.getElementById("disliker")
let dislikerList = document.getElementById("disliker-list")
let likerList = document.getElementById("liker-list")

likeButton.addEventListener('click', addLike)
dislikeButton.addEventListener('click', addDislike)

function addLike(){

    let likeLi = document.createElement("li")
    likeLi.innerText = `${county.value}`
    likerList.appendChild(likeLi)
}
function addDislike(){

    let dislikeLi = document.createElement("li")
    dislikeLi.innerText = `${county.value}`
    dislikerList.appendChild(dislikeLi)
}


