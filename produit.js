//Pour accéder à  l'url de chaque id des teddies
let params = new URL(document.location).searchParams;
let id = params.get("id");

//Pour préciser dans le DOM où l'on veut inserer la fiche produit
body();

function body() {
  getTeddies();
  /* ajoutPanier(); */
}

//Fonction pour récupérer l'ID du teddy sélectionné venant de la page index et pour afficher sa fiche produit dans la page produit
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
      imageTeddy.setAttribute("id", "image");
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
      nomTeddy.setAttribute("id", "nom");

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
      selectTeddy.setAttribute("id", "colorteddy");
      selectTeddy.setAttribute("name", "color");

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
      numberOfTeddy.setAttribute("name", "quantite");
      numberOfTeddy.setAttribute("id", "quantite");
      numberOfTeddy.setAttribute("value", "0");
      numberOfTeddy.setAttribute("min", "0");

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

      ajoutPanier();  //Mis en relation avec la fonction ajoutPanier
       
})
}

//Fonction pour ajouter au panier un teddy avec la quantité et la couleur dans le localstorage
function ajoutPanier(){
  const local = JSON.parse(localStorage.getItem('card'));
  //Pour ajouter un produit en cliquant sur le bouton et enregistrer les options du teddy
  bouton.onclick = () => {
    let product = {
      nom: card.name,
      prix: card.price / 100 + ' €',
      couleur: colorteddy.value,
      quantité: quantite.value
    }
    //Pour créer la liste du produit sélectionné lisible au format json
    localStorage.setItem("product", JSON.stringify(product)); 
    console.log(product);

    for (let i=0; i<product.length; i++){
      console.log(product);

    //Pour confirmer via un message qu'un produit a été ajouté
    if (local == null );
    alert('Ajouté au panier'); 
    }
  }};

/* let product = document.querySelectorAll('#bouton');
for (let i=0; i< product.length; i++){
  product [i].addEventListener('click', () => {
    console.log("Ajouté au panier");
  })
} */

/* function colorteddy(){
}
function ajoutPanier(){
  
  if (colorteddy()) {
    if (localStorage.getItem('card')) {
      products = JSON.parse(localStorage.getItem('card'));
    }
    bouton.onclick = () => {
      let products = {
      nom : card.name, 
      color : colorteddy.value, 
      price: card.price / 100 + ' €', 
      quantity: quantite.value
    }
    localStorage.setItem('card', JSON.stringify(products));
    alert('Ajouté au panier');
    window.location.reload();
    
  }
};
} */


//fonction 4
/* let numberOfTeddy = document.querySelector('#bouton');

for (let i=0; i < numberOfTeddy; i++){
  numberOfTeddy[i].addEventListener('click', () => {
    cartNumber();
  })
}
function cartNumber(){
  let productNumber = localStorage.getItem('#quantite');
  console.log(productNumber);
  localStorage.setItem('quantite', 1);
} */


//fonction 3
//Ca marche 

/* bouton();
for (let i=0; i < bouton.length; i++) {
  bouton[i].addEventListener('click', () => {
    ajoutPanier();
  })
} */



//fonction 5
/* const local = JSON.parse(localStorage.getItem('card'));
function ajoutPanier(){
  bouton.onclick = () => {
    localStorage.setItem("quantity",quantite.value);
    localStorage.setItem("color",colorteddy.value);
    localStorage.setItem("id", JSON.stringify(card));
    console.log(card);
    if (local != null );
    (localStorage.getItem("color") != null );
    (localStorage.getItem("id") != null );
  }}; */


//Fonction 1
/* const numberOfTeddy = document.querySelector("#quantite");

function ajoutPanier() {
  const boutonPanier = document.querySelector("#bouton");

  boutonPanier.addEventListener('click', () => {
    if (quantite.value > 0 && quantite.value < 50) {
      var ajoutTeddy = {
        name: nom.innerHTML,
        price: parseFloat(prix.innerHTML),
        quantity: parseFloat(document.querySelector("#quantite").value),
        _id: id,
      };
    }
  });
} */






//fonction 2
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







