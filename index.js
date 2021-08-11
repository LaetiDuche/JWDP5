fetch('http://localhost:3000/api/teddies')
  .then((response) => response.json())
  .then(response => console.log(response))
  .catch(error => {
    console.log(error)
  });


//Création de l'article des teddies

var cardTeddy = document.getElementById('card-teddy');
cardTeddy.innerHTML = "<div><article><a><figure><img></img><figcaption><div><h2></h2><p></p></div><p></p></figcaption></figure></a></article></div>";

var articleTeddy = document.querySelector("#card-teddy > div >article");
articleTeddy.setAttribute("class", "col-12 col-md-6 col-xl-4 my-3 ");
articleTeddy.setAttribute("id", "");

var lienTeddy = document.querySelector("#card-teddy > div >article > a");
lienTeddy.setAttribute("href", "");

var cardTeddy = document.querySelector("#card-teddy > div >article > a > figure");
cardTeddy.setAttribute("class", "card rounded-3 my-1 shadow-sm ");

var imageTeddy = document.querySelector("#card-teddy > div >article > a > figure > img");
imageTeddy.setAttribute("class", "card-img-top ");
imageTeddy.setAttribute("alt", "");
imageTeddy.src = teddies[i].imageUrl;

var figureTeddy = document.querySelector("#card-teddy > div >article > a > figure > figcaption");
figureTeddy.setAttribute("class", "card-body");

var textTeddy = document.querySelector("#card-teddy > div >article > a > figure > figcaption > div");
textTeddy.setAttribute("class", "title-price d-flex");

var nomTeddy = document.querySelector("#card-teddy > div >article > a > figure > figcaption > div > h2");
nomTeddy.setAttribute("class", "name");
nomTeddy.textContent = teddies[i].name;

var prixTeddy = document.querySelector("#card-teddy > div >article > a > figure > figcaption > div > p");
prixTeddy.setAttribute("class", "card-text price");
prixTeddy.setAttribute("price", "");

var descriptionTeddy = document.querySelector("#card-teddy > div >article > a > figure > figcaption > p");
descriptionTeddy.setAttribute("class", "description"); 
descriptionTeddy.textContent = teddies[i].description;


