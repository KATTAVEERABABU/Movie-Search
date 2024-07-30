let movieNameElement = document.getElementById("movieName");
let btnElement = document.getElementById("btn");
let boxElement = document.getElementById("cards-box");
let informElement = document.getElementById("inform");
let formElement = document.getElementById("form");
let notFound = document.getElementById("inform-error");
let loaderelement = document.getElementById("loader");

btnElement.addEventListener("click", function () {
  boxElement.innerHTML = "";
  informElement.style.display = "none";

  notFound.style.display = "none";
  let movieName = movieNameElement.value;
  loaderelement.style.display = "flex";
  console.log(movieName);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      loaderelement.style.display = "none";
      formElement.style.margin = "0px auto 30px";
      let result = JSON.parse(this.responseText);
      console.log(result);
      if (result.Response == "True") {
        result.Search.map((item, i) => {
          boxElement.innerHTML += `<div id="cards">
          <img
            src=${item.Poster}
            alt=""
          />
          <p><b>Title: </b> ${item.Title}</p>
          <p><b>Year: </b>${item.Year} </p>
          <p><b>Type: </b>${item.Type}</p>
        </div>`;
        });
      } else {
        notFound.style.display = "block";
      }
    }
  };
  xhttp.open(
    "GET",
    `https://www.omdbapi.com/?apikey=45f0782a&s=${movieName}`,
    true
  );
  xhttp.send();
});
