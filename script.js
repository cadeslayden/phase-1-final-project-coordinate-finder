let findInfoButton = document.getElementById("findInfo")
console.log(findInfoButton)

let country = document.getElementById("country")
let zipcode = document.getElementById("songName")


findInfoButton.addEventListener('click', logData)

function logData(e){
    e.preventDefault();

    console.log(country.value)
    console.log(zipcode.value)
}
 
const apiUrl = 'api.zippopotam.us'

// function fetchZipcodeData(){
//     fetch(apiUrl)
//     .then ((response => response.json()))
//     .then((data) => console.log(data))
// }

// fetchZipcodeData()
