fetch('http://localhost:3000/api/teddies')
  .then((response) => response.json())
  .then(response => console.log(response))
  .catch(error =>{
  console.log(error)
});

//Création de l'élément carte 
document.getElementById("card-teddy").innerHTML += "<article><a><div><img></img><div><div><h2></h2><p></p></div><p></p></div></div></a></article>";

var articleTeddy = document.querySelector("#card-teddy > article");
articleTeddy.setAttribute("class", "col-12 col-md-6 col-xl-4 my-3 ");
articleTeddy.className = "col-12 col-md-6 col-xl-4 my-3 ";

var lienTeddy = document.querySelector("#card-teddy > article > a");
lienTeddy.setAttribute("href", "");


var divTeddy = document.querySelector("#card-teddy > article > a > div");
divTeddy.setAttribute("class", "card rounded-3 my-1 shadow-sm ");
divTeddy.className = "card rounded-3 my-1 shadow-sm";

var imageTeddy = document.querySelector("#card-teddy > article > a > div > img");
imageTeddy.setAttribute("class", "card-img-top");
imageTeddy.className = "card-img-top";
imageTeddy.setAttribute("id", "_id");
imageTeddy.setAttribute("alt", "");

var textTeddy = document.querySelector("#card-teddy > article > a > div > div");
textTeddy.setAttribute("class", "card-body");
textTeddy.className = "card-body";

var textTeddy = document.querySelector("#card-teddy > article > a > div > div > div");
textTeddy.setAttribute("class", "title-price d-flex");
textTeddy.className = "title-price d-flex";

var nomTeddy = document.querySelector("#card-teddy > article > a > div > div > div > h2");
nomTeddy.setAttribute("name", "");

var prixTeddy = document.querySelector("#card-teddy > article > a > div > div > div > p");
prixTeddy.setAttribute("class", "card-text");
prixTeddy.className = "card-text";

var descriptionTeddy = document.querySelector("#card-teddy > article > a > div > div > p");
descriptionTeddy.setAttribute("class", "");
