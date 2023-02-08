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
    .then(data => renderData(data))
}

let whichCounty = document.getElementById("pick-your-county")

function renderData(data){
    whichCounty.innerText = "Which of these county's is yours?";

    data.forEach(iterateData)
}

function iterateData(data){
    dataArray = Object.values(data);
    console.log(dataArray)
}

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


