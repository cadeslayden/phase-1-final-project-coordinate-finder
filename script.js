const findInfoButton = document.getElementById("findInfo");
const county = document.getElementById("county");
const apiUrl = "https://nominatim.openstreetmap.org/search?format=json&county=";
const whichCounty = document.getElementById("pick-your-county");  
const errorMessage = document.getElementById("error");

findInfoButton.addEventListener("click", logData);
findInfoButton.addEventListener("mouseover", colorChange);
findInfoButton.addEventListener("mouseout", normalizeColor);

function logData(e) {
  const countyList = document.getElementById("county-list")

  e.preventDefault();

  if (countyList) {
    countyList.remove();
  }

  if (errorMessage) {
    errorMessage.innerText = "";
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
  whichCounty.innerText = "SEARCHING...";

  setTimeout(function () {
    errorMessage.innerText= "NO COUNTIES FOUND"
  }, 3000);

  setTimeout(function () {
    whichCounty.innerText = "";
  }, 3000);
}

function renderData(data) {
  let i = 0

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
      listInfo.setAttribute(`id`, `county-${i++}`);
      node = document.createTextNode(info);
      listInfo.appendChild(node);
      countyList.appendChild(listInfo);
    }, 3000);

    setTimeout(function () {
      whichCounty.innerText = "";
    }, 3000);

  });
}

function colorChange() {
  findInfoButton.style.backgroundColor = "lightyellow";
}

function normalizeColor() {
  findInfoButton.style.backgroundColor = "white";
}
