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
            document.querySelector('#price').innerHTML = "Prix : " + data.price + ' €';
            document.querySelector('#description').innerHTML = "Description : " + data.description;
            document.querySelector('#colors').innerHTML = data.colors;
        })
    )
    .catch((err) => console.log('erreur : ' + err));



//Création de la fiche produit des teddies

var cardTeddy = document.getElementById('card-teddy');
cardTeddy.innerHTML = "<div><article><figure><img></img><figcaption><div><h2></h2><p></p><p></p><label></label><select><option></option><option></option><option></option><option></option></select><div><button><i></i></button></div></div></figcaption></figure></article></div>";

var rowTeddy = document.querySelector("#card-teddy > div");
rowTeddy.setAttribute("class", "row ");

var ficheTeddy = document.querySelector("#card-teddy > div >article");
ficheTeddy.setAttribute("class", "col-12 col-md-12 col-xl-8 page-product  mx-auto my-3");
ficheTeddy.setAttribute("id", "");

var figureTeddy = document.querySelector("#card-teddy > div >article > figure");
figureTeddy.setAttribute("class", "card rounded-3 flex-md-row col-md-12 my-1 shadow-sm");

var imageTeddy = document.querySelector("article > figure > img");
imageTeddy.setAttribute("class", "card-img-top ");
imageTeddy.setAttribute("id", "image");
imageTeddy.setAttribute("alt", "");

var captionTeddy = document.querySelector(" figure > figcaption");
captionTeddy.setAttribute("class", "card-body");

var textTeddy = document.querySelector("figcaption > div");
textTeddy.setAttribute("class", "row title-price");

var nomTeddy = document.querySelector("figcaption > div > h2");
nomTeddy.setAttribute("id", "name");

var prixTeddy = document.querySelector("figcaption > div > p:nth-of-type(1)");
prixTeddy.setAttribute("class", "card-text");
prixTeddy.setAttribute("id", "price");

var descriptionTeddy = document.querySelector("figcaption > div > p:nth-of-type(2)");
descriptionTeddy.setAttribute("id", "description");

var labelTeddy = document.querySelector(" figcaption > div > label");
labelTeddy.setAttribute("for", "c");

var selectTeddy = document.querySelector(" figcaption > div > select");
selectTeddy.setAttribute("class", "form-select");
selectTeddy.setAttribute("name", "c");
selectTeddy.setAttribute("aria-label", "default select example");

var optionTeddy = document.querySelector("select > option");
optionTeddy.setAttribute("selected","");
optionTeddy.innerHTML = "Choisir une couleur";

var optionTeddy1 = document.querySelector("select > option:nth-of-type(2)");
optionTeddy1.setAttribute("value", "1");
optionTeddy1.setAttribute("id", "colors")

var optionTeddy2 = document.querySelector("select > option:nth-of-type(3)");
optionTeddy2.setAttribute("value", "2");
optionTeddy2.setAttribute("id", "colors")

var divTeddy = document.querySelector("figcaption > div > div");
divTeddy.setAttribute("class", "col-12 text-center mt-4");

var buttonTeddy = document.querySelector("div > button");
buttonTeddy.setAttribute("class", "btn btn-outline-light rounded-3 shadow");
buttonTeddy.setAttribute("type", "submit")
buttonTeddy.setAttribute("id", "btn");;
buttonTeddy.setAttribute("data-id", "");
buttonTeddy.setAttribute("data-name", "");
buttonTeddy.setAttribute("data-price", "");
buttonTeddy.setAttribute("data-url", "");
document.querySelector("#btn").innerHTML = "<i class='fas fa-shopping-cart me-2'></i> Ajouter au panier";


