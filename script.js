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

let i = 0

function renderData(data){
    
    whichCounty.innerText = "Which of these counties is yours?";
    
    data.forEach(element => {
    
    dataArray = Object.values(element);
    
    let selectCounty = dataArray[7]
    let countylist = document.getElementById("county-list")
    
    let newP = document.createElement('button')
    let node = document.createTextNode(selectCounty)
    newP.setAttribute(`id`, `county-selector-${i}`)
    newP.appendChild(node)
    countylist.appendChild(newP)

    i++

    });

    countyNumber = document.getElementById("county-list")
    length = countyNumber.children.length

    document.getElementById('county-selector-0').addEventListener('click')
    
    // function findElements(){
        
    //     for (let i = 0; i < length; i++){
    //         let countySelector = document.getElementById(`county-selector-${i}`)
    //         countySelector.addEventListener('click',makeEventListeners)
    //     }
        
    //     function makeEventListeners(){

    //     }
    // }

    // findElements()
    
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


