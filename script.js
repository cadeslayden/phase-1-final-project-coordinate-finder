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
    
    whichCounty.innerText = "SEARCHING...";
    
    data.forEach(element => {
    
    let dataArray = Object.values(element);
    let latitude = dataArray[5]
    let longitude = dataArray[6]
    let coordinates = (`${latitude},${longitude}`)
    let selectCounty = dataArray[7]
    let info = (`${selectCounty}. Latitude: ${latitude}, Longitude: ${longitude}`)

    let countyList = document.getElementById("county-list")
    
    setTimeout(function(){
        let listInfo = document.createElement('p')
        listInfo.setAttribute(`id`, `county-${i}`)
        node = document.createTextNode(info)
        listInfo.appendChild(node)
        countyList.appendChild(listInfo)
    }, 3000)


    i++

    });
    
}



