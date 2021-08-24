//Accéder à un url pour chaque id des teddies
let params = new URL(document.location).searchParams;
let id = params.get("id");

//Pour préciser dans le DOM où l'on veut inserer la fiche produit
body();

function body() {
  getTeddies();
  /* ajoutPanier(); */
}

//Fonction pour récupérer l'ID du teddy sélectionné venant de la page index et pour afficher sa fiche produit
function getTeddies() {
  fetch(`http://localhost:3000/api/teddies/${id}`)//Appel de l'ID d'un teddy venant de l'api
    .then(function (res) {
      return res.json();
    })
    .catch((err) => {
    })
    .then(function (insertDataTeddies) {  //Mise en liaison de l'ID venant de l'index
      card = insertDataTeddies;
      console.log(card);

      //Selection de l'élément pour insérer la fiche produit
      var cardTeddy = document.getElementById('card-teddy');

      //Création de la fiche produit 
      var ficheTeddy = document.createElement("article");
      cardTeddy.appendChild(ficheTeddy);
      ficheTeddy.classList.add("col-12", "col-md-12", "col-xl-8", "page-product", "mx-auto", "my-3");

      var figureTeddy = document.createElement("figure");
      ficheTeddy.appendChild(figureTeddy);
      figureTeddy.classList.add("card", "rounded-3", "col-md-12", "my-1", "shadow-sm");

      //Insertion de l'image
      var imageTeddy = document.createElement("img");
      figureTeddy.appendChild(imageTeddy);
      imageTeddy.classList.add("card-img-top", "h-100");
      imageTeddy.setAttribute("alt", "ours en peluche teddy");
      imageTeddy.src = card.imageUrl;     //Appel url de l'image

      var captionTeddy = document.createElement("figcaption");
      figureTeddy.appendChild(captionTeddy);
      captionTeddy.classList.add("card-body");

      var textTeddy = document.createElement("div");
      captionTeddy.appendChild(textTeddy);
      textTeddy.classList.add("row");

      //Insertion du nom d'un teddy
      var nomTeddy = document.createElement("h2");
      textTeddy.appendChild(nomTeddy);
      nomTeddy.innerHTML = card.name;    //Appel data
      nomTeddy.setAttribute("id", "nom")

      //Insertion du prix d'un teddy en euro
      var prixTeddy = document.createElement("p");
      textTeddy.appendChild(prixTeddy);
      prixTeddy.innerHTML = "Prix : " + card.price / 100 + ' €';  //Appel data
      prixTeddy.classList.add("card-text");
      prixTeddy.setAttribute("id", "prix");

      //Insertion de la description d'un teddy
      var descriptionTeddy = document.createElement("p");
      textTeddy.appendChild(descriptionTeddy);
      descriptionTeddy.innerHTML = "Description : " + card.description; //Appel data

      var choixTeddy = document.createElement("div");
      textTeddy.appendChild(choixTeddy);
      choixTeddy.classList.add("d-flex", "mt-2", "align-baseline");

      //Insertion des éléments du formulaire pour choisir une couleur
      var labelTeddy = document.createElement("label");
      choixTeddy.appendChild(labelTeddy);
      labelTeddy.setAttribute("for", "colorteddy");

      var selectTeddy = document.createElement("select");
      choixTeddy.appendChild(selectTeddy);
      selectTeddy.classList.add("form-select");
      selectTeddy.setAttribute("id","colorteddy");
      selectTeddy.setAttribute("name","color");

      var optionTeddy = document.createElement("option");
      selectTeddy.appendChild(optionTeddy);
      optionTeddy.innerHTML = "Choisir une couleur";

      var colorTeddy = document.getElementById("colorteddy");
      //Fonction boucle pour générer la liste des différentes couleurs
      for (let i = 0; i < card.colors.length; i++) {    
        var optionTeddy = document.createElement("option");
        colorTeddy.appendChild(optionTeddy);
        optionTeddy.innerHTML = card.colors[i];  //Appel data des couleurs
      }

      //Insertion des éléments pour selectionner une quantité de teddy
      var textTeddy2 = document.createElement("div");
      textTeddy.appendChild(textTeddy2);
      textTeddy2.classList.add("d-flex", "mt-4", "align-baseline");

      var labelTeddy = document.createElement("label");
      textTeddy2.appendChild(labelTeddy);
      labelTeddy.setAttribute("for", "quantite");

      var quantiteTeddy = document.createElement("p");
      textTeddy2.appendChild(quantiteTeddy);
      quantiteTeddy.innerHTML = "Quantité :";
      quantiteTeddy.classList.add("my-auto");

      var numberOfTeddy = document.createElement("input")
      textTeddy2.appendChild(numberOfTeddy);
      numberOfTeddy.classList.add("ms-1", "h-auto", "w-25");
      numberOfTeddy.setAttribute("type", "number");
      numberOfTeddy.setAttribute("name", "nombre");
      numberOfTeddy.setAttribute("id", "quantite");
      numberOfTeddy.setAttribute("value", "1");
      numberOfTeddy.setAttribute("min", "1");

      //Insertion du bouton pour ajouter au panier
      var divTeddy = document.createElement("div");
      textTeddy.appendChild(divTeddy);
      divTeddy.classList.add("col-12", "text-center", "mt-4");

      var buttonTeddy = document.createElement("button");
      divTeddy.appendChild(buttonTeddy);
      buttonTeddy.classList.add("btn", "btn-outline-light", "rounded-3", "shadow");
      buttonTeddy.setAttribute("id", "bouton");
      buttonTeddy.setAttribute("type", "submit");
      buttonTeddy.innerHTML = "<i class='fas fa-shopping-cart me-2'></i> Ajouter au panier";
      
      ajoutPanier();
      
    });
}



function ajoutPanier(){
  const localTeddy = JSON.parse(localStorage.getItem("produitTeddy"));

if (localTeddy != null){

  bouton.onclick = () => {
    const produitTeddy = {
        nom: nom.value,
        price: prix.value,
        quantity: quantite.value
    };
    localStorage.setItem("produitTeddy",JSON.stringify(produitTeddy))
    
}
}}
//Tableau objet
/* function ajoutPanier(){
  bouton.onclick = () => {
    var user = {
      name: nom.innerHTML,
      price: parseFloat(prix.innerHTML),
      quantity: parseFloat(document.querySelector("#quantite").value),
      _id: id,

    }
    localStorage.setItem("number",quantite.value);
    localStorage.setItem("color", colorteddy.value);
    

  if (localStorage.getItem("number") != null );
  (localStorage.getItem("color") != null); */
      /* h1.textContent = `${localStorage.getItem("quantite")}`; */

  
    
  /* }}; */








//Ca marche pour localstorage quantité
/* function ajoutPanier(){
  bouton.onclick = () => {
    localStorage.setItem("number",quantite.value);
    if (localStorage.getItem("number") != null );
  }}; */

  

    /* if (numberOfTeddy.value > 0 && numberOfTeddy.value < 50){
      var ajoutTeddy = {
        name: nomTeddy.innerHTML,
        price: parseFloat(prixTeddy.innerHTML),
        quantity: parseFloat(document.querySelector("#quantite").value),
        _id: id,
      }
  } */


/* function ajoutPanier(){
  const buttonTeddy = document.querySelector("#bouton");
  bouton.onclick = (bouton) => {
    if (numberOfTeddy.value > 0 && numberOfTeddy.value < 50){
      var ajoutTeddy = {
        name: nomTeddy.innerHTML,
        price: parseFloat(prixTeddy.innerHTML),
        quantity: parseFloat(document.querySelector("#quantite").value),
        _id: id,
      }
    }
  });
} */
