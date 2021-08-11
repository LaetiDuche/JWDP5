fetch('http://localhost:3000/api/teddies')
    .then((response) => response.json())
    .then(response => console.log(response))
    .catch(error => {
        console.log(error)
    });

//Création de la fiche produit d'un teddy

var cardTeddy = document.getElementById('card-teddy');
cardTeddy.innerHTML = "<div><article><figure><img></img><figcaption><div><h2></h2><p></p><p></p><label></label><select><option></option><option></option><option></option><option></option></select><div><button><i></i></button></div></div></figcaption></figure></article></div>";

var ficheTeddy = document.querySelector("#card-teddy > div >article");
ficheTeddy.setAttribute("class", "col-12 col-md-12 col-xl-8 page-product  mx-auto my-3");
ficheTeddy.setAttribute("id", "");

var figureTeddy = document.querySelector("#card-teddy > div >article > figure");
figureTeddy.setAttribute("class", "card rounded-3 flex-md-row col-md-12 my-1 shadow-sm");

var imageTeddy = document.querySelector("article > figure > img");
imageTeddy.setAttribute("class", "card-img-top ");
imageTeddy.setAttribute("alt", "");
/* imageTeddy.src = teddies[i].imageUrl; */

var captionTeddy = document.querySelector(" figure > figcaption");
captionTeddy.setAttribute("class", "card-body");

var textTeddy = document.querySelector("figcaption > div");
textTeddy.setAttribute("class", "row title-price2");

var nomTeddy = document.querySelector("figcaption > div > h2");
nomTeddy.setAttribute("class", "name");
/* nomTeddy.textContent = teddies[i].name; */

var prixTeddy = document.querySelector("figcaption > div > p:nth-of-type(1)");
prixTeddy.setAttribute("class", "card-text prix");
prixTeddy.innerHTML = "Prix:";

var descriptionTeddy = document.querySelector("figcaption > div > p:nth-of-type(2)");
descriptionTeddy.setAttribute("class", "description");
descriptionTeddy.innerHTML = "Description:" ;
/* descriptionTeddy.textContent = teddies[i].description; */

var labelTeddy = document.querySelector(" figcaption > div > label");
labelTeddy.setAttribute("for", "c");

var selectTeddy = document.querySelector(" figcaption > div > select");
selectTeddy.setAttribute("id", "colors");
selectTeddy.setAttribute("class", "form-select");
selectTeddy.setAttribute("name", "c");
selectTeddy.setAttribute("aria-label", "efault select example");

var optionTeddy1 = document.querySelector("select > option");
optionTeddy1.setAttribute("value" , "1");
optionTeddy1.innerHTML = "Choisir une couleur" ;

var divTeddy = document.querySelector("figcaption > div > div");
divTeddy.setAttribute("class", "col-12 text-center my-4");

var buttonTeddy = document.querySelector("div > button");
buttonTeddy.setAttribute("class", "btn btn-outline-light rounded-3 shadow");
buttonTeddy.setAttribute("type", "submit");
buttonTeddy.setAttribute("data-id", "");
buttonTeddy.setAttribute("data-name", "");
buttonTeddy.setAttribute("data-price", "");
buttonTeddy.setAttribute("data-url", "");
buttonTeddy.innerHTML = "Ajouter au panier" ;

var iconTeddy = document.querySelector("button > i");
iconTeddy.setAttribute("class", "fas fa-shopping-cart me-2");


const teddies = [
    "0",
    "1'",
    "2",
    "3"
    ]
    
    for (let i in teddies) {
       console.log(" " + teddies[i]);
    }