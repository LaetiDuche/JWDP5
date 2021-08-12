/* const { response } = require("express"); */

/* fetch('http://localhost:3000/api/teddies')
  .then((response) => response.json())
  .then(response => console.log(response))
  .catch(error => {
    console.log(error)
  }); */

var urlTeddy = 'http://localhost:3000/api/teddies';

fetch(urlTeddy)
  .then((response) =>
    response.json().then((data) => {
      console.log(data);
      document.querySelector('#image').innerHTML = data.imageUrl;
      document.querySelector('#name').innerHTML = data.name;
      document.querySelector('#price').innerHTML = data.price + ' €';
      document.querySelector('#description').innerHTML = data.description;
    })
  )
  .catch((err) => console.log('erreur : ' + err));


//Création de l'article des teddies

var cardTeddy = document.getElementById('card-teddy');
cardTeddy.innerHTML = "<div><article><a><figure><img></img><figcaption><div><h2></h2><p></p></div><p></p></figcaption></figure></a></article></div>";

var rowTeddy = document.querySelector("#card-teddy > div");
rowTeddy.setAttribute("class", "row ");

var articleTeddy = document.querySelector("#card-teddy > div >article");
articleTeddy.setAttribute("class", "col-12 col-md-6 col-xl-4 my-3 ");
articleTeddy.setAttribute("id", "");

var lienTeddy = document.querySelector("#card-teddy > div >article > a");
lienTeddy.setAttribute("href", "");

var figureTeddy = document.querySelector("#card-teddy > div >article > a > figure");
figureTeddy.setAttribute("class", "card rounded-3 my-1 shadow-sm ");

var imageTeddy = document.querySelector("#card-teddy > div >article > a > figure > img");
imageTeddy.setAttribute("class", "card-img-top ");
imageTeddy.setAttribute("alt", "");
imageTeddy.setAttribute("id", "image");

var captionTeddy = document.querySelector("#card-teddy > div >article > a > figure > figcaption");
captionTeddy.setAttribute("class", "card-body");

var textTeddy = document.querySelector("#card-teddy > div >article > a > figure > figcaption > div");
textTeddy.setAttribute("class", "title-price d-flex");

var nomTeddy = document.querySelector("#card-teddy > div >article > a > figure > figcaption > div > h2");
nomTeddy.setAttribute("id", "name");

var prixTeddy = document.querySelector("#card-teddy > div >article > a > figure > figcaption > div > p");
prixTeddy.setAttribute("class", "card-text my-auto");
prixTeddy.setAttribute("id", "price");

var descriptionTeddy = document.querySelector("#card-teddy > div >article > a > figure > figcaption > p");
descriptionTeddy.setAttribute("id", "description");


