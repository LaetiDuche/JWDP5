//Pour préciser dans le DOM où l'on veut inserer Mon panier et le formulaire de commande
body();
function body() {
  monPanier();
  totalPrice();
  formCommand();
  objetContact()

};

let localPanier = JSON.parse(localStorage.getItem("products", "contact"));


//-----------------------------------CREATION DE MON PANIER---------------------------------------

function monPanier(produitTeddy) {
  //Selection de l'élément pour afficher mon panier
  let monPanier = document.getElementById('panier-teddy');

  //Eléments responsives
  let divPanier = document.createElement('div');
  monPanier.appendChild(divPanier);
  divPanier.classList.add('col-12', 'bg-white', 'p-4', 'rounded-3', 'my-2');

  let divPanier2 = document.createElement('div');
  divPanier.appendChild(divPanier2);
  divPanier2.classList.add('col-12');

  //Titre Mon panier
  let titrePanier = document.createElement('h2');
  divPanier2.appendChild(titrePanier);
  titrePanier.style.color = 'DarkOrange';
  titrePanier.style.fontStyle = 'italic';
  titrePanier.textContent = "Mon panier";

  //Tableau pour insérer mes produits
  let tableauPanier = document.createElement('table');
  divPanier2.appendChild(tableauPanier);
  tableauPanier.classList.add('table', 'table-sm');

  let theadPanier = document.createElement('thead');
  tableauPanier.appendChild(theadPanier);

  let trPanier = document.createElement('tr');
  theadPanier.appendChild(trPanier);

  //Colonne article
  let thArticle = document.createElement('th');
  trPanier.appendChild(thArticle);
  thArticle.textContent = "Articles";

  //Colonne couleur
  let thColor = document.createElement('th');
  trPanier.appendChild(thColor);
  thColor.textContent = "Couleur";

  //Colonne quantité
  let thQuantite = document.createElement('th');
  trPanier.appendChild(thQuantite);
  thQuantite.textContent = "Quantité";

  //Colonne prix
  let thPrix = document.createElement('th');
  trPanier.appendChild(thPrix);
  thPrix.textContent = "Prix";

  //Eléments pour insérer les produits dans le tableau
  let tbodyProduits = document.createElement('tbody');
  tableauPanier.appendChild(tbodyProduits);
  tbodyProduits.setAttribute("id", "products-list");

  //Boucle pour générer les produits du localstorage dans le tableau du panier
  let getLocalPanier = JSON.parse(localStorage.getItem("products"));

  for (let produitTeddy in getLocalPanier) {
    let tableList = document.getElementById('tableau');

    let trProduit = document.createElement('tr');
    tbodyProduits.appendChild(trProduit);
    trProduit.setAttribute("id", "tableau");


    let tdNom = document.createElement('td');
    trProduit.appendChild(tdNom);
    tdNom.setAttribute("id", "nom");
    tdNom.innerHTML = getLocalPanier[produitTeddy].name;

    let tdColor = document.createElement('td');
    trProduit.appendChild(tdColor);
    tdColor.setAttribute('id', 'couleur');
    tdColor.innerHTML = getLocalPanier[produitTeddy].color;

    let tdNombre = document.createElement('td');
    trProduit.appendChild(tdNombre);

    let inputNombre = document.createElement('input');
    tdNombre.appendChild(inputNombre);
    inputNombre.classList.add("ms-1", "h-auto", "w-25");
    inputNombre.setAttribute("id", "nombre");
    inputNombre.setAttribute("min", "0");
    inputNombre.setAttribute("type", "number");
    inputNombre.setAttribute("name", "quantite");
    inputNombre.innerHTML = getLocalPanier[produitTeddy].quantity;

    //Calcul du prix, multiplication du prix d'un produit avec sa quantité
    let tdPrix = document.createElement('td');
    trProduit.appendChild(tdPrix);
    tdPrix.setAttribute("id", "prix");
    tdPrix.innerHTML = parseFloat(getLocalPanier[produitTeddy].price) * getLocalPanier[produitTeddy].quantity + '€';

    //Eléments bouton supprimer un article
    let tdDelete = document.createElement('button');
    trProduit.appendChild(tdDelete);
    tdDelete.setAttribute("id", "supprimer");
    tdDelete.classList.add('btnDelete');
    tdDelete.style = 'none';
    tdDelete.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';


  }

  //Supprimer un article 
  let deleteItem = document.getElementsByClassName('btnDelete');
    for(let i = 0; i < deleteItem.length; i++){
      let button = deleteItem[i]
      button.addEventListener('click', function (event){
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        let idProductDelete = getLocalPanier[i]._id;
        getLocalPanier = getLocalPanier.filter((el) => el._id !== idProductDelete);
        localStorage.setItem(
          "products",JSON.stringify(getLocalPanier)
        );
        alert("Cet article a été supprimé de votre panier !");
        window.location.href ='panier.html';

      })
    }

  //Eléments pour insérer le prix total du panier

  let tfTotal = document.createElement('tfoot');
  tableauPanier.appendChild(tfTotal);
  tfTotal.style.borderBottomColor = 'transparent';

  let trTotal = document.createElement('tr');
  tfTotal.appendChild(trTotal);

  let thTotal = document.createElement('th');
  trTotal.appendChild(thTotal);
  thTotal.textContent = "Total : ";
  thTotal.setAttribute('colspan', '3');

  let tdTotal = document.createElement('td');
  trTotal.appendChild(tdTotal);
  tdTotal.setAttribute('id', 'subtotal');
  tdTotal.setAttribute('colspan', '3');

  console.log(getLocalPanier);
  totalPrice();


  //Bouton vider le panier
 /*  let tdDelete = document.createElement('button');
  divPanier2.appendChild(tdDelete);
  tdDelete.classList.add('btn', 'btn-outline-light', 'rounded-3', 'shadow');
  tdDelete.setAttribute("id", "supprimer");
  tdDelete.style = 'none';
  tdDelete.innerHTML = 'Vider le panier';
  let buttonDelete = document.querySelector('#supprimer');
  buttonDelete.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.clear();
    document.location.reload();

  }); */
};


//CALCUL DU PRIX TOTAL DU PANIER

function totalPrice() {
  let total = [];
  //Récupération de tous les prix de la colonne prix
  let productsPriceList = document.querySelectorAll('#prix');
  productsPriceList.forEach(function (productsPrice) {
    total.push(parseFloat(productsPrice.textContent));
  })
  console.log(total);
  //Addition de tous les prix
  let totalMoney = total.reduce(function (total, productsPrice) {
    total += productsPrice;
    return total;
  }, 0)
  console.log(totalMoney);
  //Sélection de l'endroit où l'on veut inscrire le prix total
  document.getElementById('subtotal').textContent = totalMoney + '€';
  localStorage.setItem("Total", JSON.stringify(totalMoney + '€'));
}




//-----------------------------------CREATION DU FORMULAIRE DE COMMANDE----------------------------------

function formCommand() {
  //Selection de l'élément pour afficher le formulaire 
  let confirmCommand = document.getElementById('panier-teddy');

  //Eléments responsives
  let divForm = document.createElement('div');
  confirmCommand.appendChild(divForm);
  divForm.classList.add('col-12', 'bg-white', 'p-4', 'rounded-3', 'my-2');

  let titreDiv = document.createElement('div');
  divForm.appendChild(titreDiv);

  //Titre du formulaire
  let titreForm = document.createElement('h2');
  titreDiv.appendChild(titreForm);
  titreForm.style.color = 'DarkOrange';
  titreForm.style.fontStyle = 'italic';
  titreForm.classList.add('text-start');
  titreForm.textContent = "Confirmer ma commande";

  //Sous-titre du formulaire
  let subTitleForm = document.createElement('p');
  titreDiv.appendChild(subTitleForm);
  subTitleForm.textContent = "Remplissez le formulaire pour confirmer votre commande";

  //Le formulaire
  let formElement = document.createElement('form');
  divForm.appendChild(formElement);
  formElement.classList.add('row', 'g-3', 'needs-validation');
  formElement.setAttribute('method', 'post');
  /* formElement.setAttribute('action', "http://localhost:3000/api/teddies/order"); */
  formElement.setAttribute('id', 'formulaire');
  /* formElement.setAttribute('action', 'commande.html') */;

  //Eléments pour le Nom
  let divNom = document.createElement('div');
  formElement.appendChild(divNom);
  divNom.classList.add('col-md-4');

  let labelNom = document.createElement('label');
  divNom.appendChild(labelNom);
  labelNom.classList.add('form-label');
  labelNom.setAttribute('for', 'firstName');

  let inputNom = document.createElement('input');
  divNom.appendChild(inputNom);
  inputNom.classList.add('form-control');
  inputNom.setAttribute('name', 'firstName');
  inputNom.setAttribute('id', 'Nom');
  inputNom.setAttribute('type', 'text');
  inputNom.setAttribute('placeholder', 'Nom');
  inputNom.setAttribute('required', 'required');
  /* inputNom.setAttribute('pattern', '[A-Za-z-\s]+'); */

  //Eléments pour le Prénom
  let divPrenom = document.createElement('div');
  formElement.appendChild(divPrenom);
  divPrenom.classList.add('col-md-4');

  let labelPrenom = document.createElement('label');
  divPrenom.appendChild(labelPrenom);
  labelPrenom.classList.add('form-label');
  labelPrenom.setAttribute('for', 'lastName');

  let inputPrenom = document.createElement('input');
  divPrenom.appendChild(inputPrenom);
  inputPrenom.classList.add('form-control');
  inputPrenom.setAttribute('name', 'lastName');
  inputPrenom.setAttribute('id', 'Prenom');
  inputPrenom.setAttribute('type', 'text');
  inputPrenom.setAttribute('placeholder', 'Prénom');
  inputPrenom.setAttribute('required', 'required');
  /* inputPrenom.setAttribute('pattern', '[A-Za-z-]+'); */

  //Eléments pour l'email
  let divMail = document.createElement('div');
  formElement.appendChild(divMail);
  divMail.classList.add('col-md-4');

  let labelMail = document.createElement('label');
  divMail.appendChild(labelMail);
  labelMail.classList.add('form-label');
  labelMail.setAttribute('for', 'email');

  let inputMail = document.createElement('input');
  divMail.appendChild(inputMail);
  inputMail.classList.add('form-control');
  inputMail.setAttribute('name', 'email');
  inputMail.setAttribute('id', 'Mail');
  inputMail.setAttribute('type', 'email');
  inputMail.setAttribute('placeholder', 'Email');
  inputMail.setAttribute('required', 'required');
  /* inputMail.setAttribute('pattern', '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'); */

  //Eléments pour l'adresse
  let divAdresse = document.createElement('div');
  formElement.appendChild(divAdresse);
  divAdresse.classList.add('col-md-6');

  let labelAdresse = document.createElement('label');
  divAdresse.appendChild(labelAdresse);
  labelAdresse.classList.add('form-label');
  labelAdresse.setAttribute('for', 'address');

  let inputAdresse = document.createElement('input');
  divAdresse.appendChild(inputAdresse);
  inputAdresse.classList.add('form-control');
  inputAdresse.setAttribute('name', 'address');
  inputAdresse.setAttribute('id', 'Adresse');
  inputAdresse.setAttribute('type', 'text');
  inputAdresse.setAttribute('placeholder', 'Adresse postale');
  inputAdresse.setAttribute('required', 'required');

  //Eléments pour la ville
  let divVille = document.createElement('div');
  formElement.appendChild(divVille);
  divVille.classList.add('col-md-4');

  let labelVille = document.createElement('label');
  divVille.appendChild(labelVille);
  labelVille.classList.add('form-label');
  labelVille.setAttribute('for', 'city');

  let inputVille = document.createElement('input');
  divVille.appendChild(inputVille);
  inputVille.classList.add('form-control');
  inputVille.setAttribute('name', 'city');
  inputVille.setAttribute('id', 'Ville');
  inputVille.setAttribute('type', 'text');
  inputVille.setAttribute('placeholder', 'Ville');
  inputVille.setAttribute('required', 'required');
  /* inputVille.setAttribute('pattern', '[A-Za-z- ]+'); */

  //Eléments pour le bouton commander
  let divBouton = document.createElement('div');
  formElement.appendChild(divBouton);
  divBouton.classList.add('col-12', 'text-center');

  let boutonCommand = document.createElement('button');
  divBouton.appendChild(boutonCommand);
  boutonCommand.classList.add('btn', 'btn-outline-light', 'rounded-3', 'shadow');
  boutonCommand.setAttribute('type', 'submit');
  boutonCommand.setAttribute('id', 'bouton');
  boutonCommand.setAttribute('value', 'Commander');
  boutonCommand.setAttribute('required', 'required');
  boutonCommand.textContent = "Commander";

  objetContact();
}

function objetContact() {
  let inputNom = document.getElementById('Nom');
  let inputPrenom = document.getElementById('Prenom');
  let inputAdresse = document.getElementById('Adresse');
  let inputVille = document.getElementById('Ville');
  let inputMail = document.getElementById('Mail');

  const bouton = document.querySelector('#bouton');
  bouton.addEventListener('click', () => {
    if (inputNom.value || inputPrenom.value || inputMail.value || inputAdresse.value || inputVille.value) {
      let product = [];
      let localpanier = [];
      product.push(localpanier);
      let userData = {
        contact: {
          firstName: inputNom.value,
          lastName: inputPrenom.value,
          email: inputMail.value,
          address: inputAdresse.value,
          city: inputVille.value,
        },
        products: product,
      };
      console.log(userData);
      let localUserData = [];
      if (localStorage.getItem("contact") !== null) {
        localUserData = JSON.parse(localStorage.getItem("contact"));
      }
      localUserData.push(userData);
      localStorage.setItem("contact", JSON.stringify(localUserData));
    }
  });
}


//FONCTION CREATION DE L'OBJET CONTACT ET ENVOIE 
/* function objetContact() { */
  //Récupération des données du formulaire 
/*  let inputNom = document.getElementById('Nom');
 let inputPrenom = document.getElementById('Prenom');
 let inputAdresse = document.getElementById('Adresse');
 let inputVille = document.getElementById('Ville');
 let inputMail = document.getElementById('Mail'); */

  //Evènement sur le bouton commander
/*  const bouton = document.querySelector('#bouton');
 bouton.addEventListener('click', (e) => {
   e.preventDefault(); */

    //Union de l'objet contact avec le tableau products
/* if (inputNom.value || inputPrenom.value || inputMail.value || inputAdresse.value || inputVille.value) {


} else {

  var productPanier = [];
  productPanier.push(localPanier); */
/* var userData = [];
userData.push(localPanier); */

      //Objet contact
/* var userData = {
  contact: {
    firstName: inputNom.value,
    lastName: inputPrenom.value,
    email: inputMail.value,
    address: inputAdresse.value,
    city: inputVille.value,
  }, */
        //Tableau products
/*  products: productPanier,
};
console.log(userData); */

      //Envoie de l'objet contact au localstorage (localPanier)
/* var localPanier = []; */
/* if (localStorage.getItem("contact") !==null){
  localPanier = JSON.parse(localStorage.getItem("contact"));
}

localUserData.push(userData);
localStorage.setItem("contactData", JSON.stringify(localUserData));
console.log(localUserData);

const localPanier = {
  method: "POST",
  body: JSON.stringify(userData),
  headers: {
    "Content-type": "application/json",
  },
};
console.log(localPanier);
}
let priceConfirm = document.querySelector("#Total");

fetch("http://localhost:3000/api/teddies/order",)
.then((response) => response.json())
.then((data) => {
  localStorage.clear();
   console.log(localPanier)
  localStorage.setItem("orderId", data.orderId);
  localStorage.setItem("Total", priceConfirm);
  document.location.href = "commande.html";
})
.catch((err) => {
  alert("Il y a eu une erreur : " + err);
});
*/
/*  }
})
} */


/* function getOrderId(idResponse) {
  var orderId = idResponse.orderId;
  console.log(orderId);
  localStorage.setItem("orderIdConfirm", orderId);
}

async function postData(userData) {
  try {
    var response = await fetch("http://localhost:3000/api/teddies/order", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (response.ok) {
      var idResponse = await response.json();
      getOrderId(idResponse);
      window.location.href = "commande.html";
    } else {
      console.error('Réponse du server: ', response.status);
    }
  } catch (e) {
    console.log(e);
  }
} */








/* const localUserData=localStorage.getItem('localPanier');
const parselocalUserData = JSON.parse(localUserData);
console.log("localUserData");
console.log(localUserData); */

//POURGARDE LES DONN2EES INPUT DANS LES CHAMPS DU FORMULAIRE
/* function garderDonneesInput(input){
  document.querySelector(`#${input}`).value = localUserData[input];
};
garderDonneesInput("#Nom"); */

/* function envoieFormulaire(){} */
/* var objectUserData = localStorage.getItem('localPanier'); */

/* var contact = [];
var products = []; */

/* function sendObjectUserData(contact, products) {
  fetch("http://localhost:3000/api/teddies/order", {
    method: "POST",
    body: contact, products,
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(json => console.log(json));


} */



/* function envoieFormulaire(contact, products) {
  fetch("http://localhost:3000/api/teddies/order",{
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    method: "POST",
    body: JSON.stringify({ contact, products }),
  })
  .then((response) => response.json())
  .then((data) =>{
    localStorage.setItem("order", JSON.stringify(data));
    window.location.href = "commande.html";
  })
  .catch(function (err) {
    displayErrorMessage(err);
    console.log("Erreur Catch: " + err);
  });
} */










/* var localUserData = {};
fetch("http://localhost:3000/api/teddies/order",{
  method: 'post',
  body: JSON.stringify(localUserData)
})
.then(function(response){
  return response.json()
})
.then (function(data){
  console.log(data)
}) */





//Envoie au serveur
/* function envoieFormulaire(){

  var localUserData = [];
  var promise =   fetch('http://localhost:3000/api/teddies/order' ,{
    method: 'POST',
    body: localUserData,
    headers: {
        'Content-Type': 'application/json'
    }

  });
  promise.then(async(response) => {
    try{
      console.log(response);
      const localPanier = await response.json();
      console.log(localPanier);
    }catch (e){
      console.log(e);
    }

  });
} */







//Envoie au back end le tableau products et l'objet contact
/* function getBackEnd(retourId) {
  let orderId = retourId.orderId;
  console.log(orderId);
  localStorage.setItem("orderConfirmationId", orderId);
} */

/* async function envoieFormulaire(localUserData) {
  try {
      let response = await fetch("http://localhost:3000/api/teddies/order", {
          method: 'POST',
          body: localUserData,
          headers: {
              'content-type': 'application/json',
          },

      });
      if (response.ok) {
          let retourId = await response.json();
          getBackEnd(retourId);
          window.location.href = "commande.html";
          console.log(retourId);
      } else {
          console.error('Retour du serveur : ', response.status);
      }
  } catch (e) {
      console.log(e);
  }
} */




//FONCTION 1
//Fonction validation du formulaire

/* function validForm() {
  const bouton = document.querySelector("#bouton");
  var inputNom = document.querySelector('#Nom');
  var inputPrenom = document.querySelector('#Prenom');
  var inputMail = document.querySelector('#Mail');
  var inputAdresse = document.querySelector('#Adresse');
  var inputVille = document.querySelector('#Ville');

  bouton.addEventListener("click", (e) => {
    if (inputNom.value || inputPrenom.value || inputMail.value || inputAdresse.value || inputVille.value) {

    }
    else {
      var productsTeddies = [];
      productsTeddies.push(localPanier);

      const userData = {
        contact: {
          firstName: inputNom.value,
          lastName: inputPrenom.value,
          email: inputMail.value,
          address: inputAdresse.value,
          city: inputVille.value
        },
        products: productsTeddies,
      };
      const sentForm = {
        method: 'POST',
        body: JSON.stringify(sentForm),
        headers: { "Content-Type": "application/json" },
      };
      var sentTotalPrice = document.querySelector('#subtotal').innerText;
      sentTotalPrice = sentTotalPrice.split(" :");

      fetch("http://localhost:3000/api/teddies/order", sentForm)
        .then((response) => response.json())
        .then((data) => {
          localStorage.clear();
          console.log(data)
          localStorage.setItem("orderId", data.orderId);
          localStorage.setItem("subtotal", sentTotalPrice[1]);
          document.location.href = "commande.html";
        })
        .catch((err) => {
          alert("Il y a une erreur : " + err);
        });
    }
  });
} */