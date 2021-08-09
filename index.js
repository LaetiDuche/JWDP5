fetch('http://localhost:3000/api/teddies')
  .then((response) => response.json())
  .then(response => console.log(response))
  .catch(error =>{
  console.log(error)
});

//Création de l'article
document.getElementById("card-teddy").innerHTML += "<article><a><figure><img></img><figcaption><div><h2></h2><p></p></div><p></p></figcaption></figure></a></article>";

const articleTeddy = document.querySelector("#card-teddy > article");
articleTeddy.setAttribute("class", "col-12 col-md-6 col-xl-4 my-3 ");
articleTeddy.setAttribute("id", "");

const lienTeddy = document.querySelector("#card-teddy > article > a");
lienTeddy.setAttribute("href", "");

const cardTeddy = document.querySelector("#card-teddy > article > a > figure");
cardTeddy.setAttribute("class", "card rounded-3 my-1 shadow-sm ");

const imageTeddy = document.querySelector("#card-teddy > article > a > figure > img");
imageTeddy.setAttribute("class", "card-img-top");
imageTeddy.setAttribute("imageUrl", "");
imageTeddy.setAttribute("alt", "");

const figureTeddy = document.querySelector("#card-teddy > article > a > figure > figcaption");
figureTeddy.setAttribute("class", "card-body");

const textTeddy = document.querySelector("#card-teddy > article > a > figure > figcaption > div");
textTeddy.setAttribute("class", "title-price d-flex");

const nomTeddy = document.querySelector("#card-teddy > article > a > figure > figcaption > div > h2");
nomTeddy.setAttribute("name", "");

const prixTeddy = document.querySelector("#card-teddy > article > a > figure > figcaption > div > p");
prixTeddy.setAttribute("class", "card-text");
prixTeddy.setAttribute("price", "");

const descriptionTeddy = document.querySelector("#card-teddy > article > a > figure > figcaption > p");
descriptionTeddy.setAttribute("description", "");


