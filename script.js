let findInfoButton = document.getElementById("findInfo");

let county = document.getElementById("county");

findInfoButton.addEventListener("click", logData);

const apiUrl = "https://nominatim.openstreetmap.org/search?format=json&county=";

function logData(e) {
  e.preventDefault();

  if (document.getElementById("county-list")) {
    document.getElementById("county-list").remove();
  }

  fetch(`${apiUrl}${county.value}`, {
    method: "GET",
  })
    .then((resp) => resp.json())
    .then((data) => {
      if (data.length) {
        renderData(data);
      } else {
        error();
      }
    });
}

function error() {
  setTimeout(function () {
    let errorId = document.getElementById("error");
    let node = document.createTextNode("No counties found!");
    errorId.appendChild(node);
  }, 3000);
}

let i = 0;

function renderData(data) {

  let whichCounty = document.getElementById("pick-your-county");

  let createDiv = document.createElement("div");
  createDiv.setAttribute("id", "county-list");
  document.body.appendChild(createDiv);

  whichCounty.innerText = "SEARCHING...";

  data.forEach((element) => {
    let dataArray = Object.values(element);
    let latitude = dataArray[5];
    let longitude = dataArray[6];
    let selectCounty = dataArray[7];
    let info = `${selectCounty}. Latitude: ${latitude}, Longitude: ${longitude}`;

    let countyList = document.getElementById("county-list");

    setTimeout(function () {
      let listInfo = document.createElement("p");
      listInfo.setAttribute(`id`, `county-${i}`);
      node = document.createTextNode(info);
      listInfo.appendChild(node);
      countyList.appendChild(listInfo);
    }, 3000);

    setTimeout(function () {
      whichCounty.innerText = "";
    }, 3000);

    i++;
  });
}

findInfoButton.addEventListener("mouseover",colorChange)
findInfoButton.addEventListener("mouseout", normalizeColor)

function colorChange(){
    findInfoButton.style.backgroundColor = "lightblue"
}

function normalizeColor(){
    findInfoButton.style.backgroundColor = "white"
}
