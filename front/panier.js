//---------------------APPEL DES FONCTIONS

body();
function body() {
  monPanier();
  totalPrice();
  formCommand();
  validCommand()
};

//APPEL DES OBJETS DU LOCALSTORAGE
let localPanier = JSON.parse(localStorage.getItem("productsTeddy", "contact", "Total", "orderId"));


//--------------------------------SI LE PANIER EST VIDE

let selectPanier = document.querySelector('#mon-panier');
if (localPanier === null) {
  let panierVide = `<div class='col-12 bg-white rounded-3 text-center'><p class='m-auto'>Panier vide</p></div>`;
  selectPanier.innerHTML = panierVide
  console.log('Panier vide')
} else {
  console.log('Panier plein')
}


//-------------------------------- CREATION DU PANIER,  SI LE PANIER EST PLEIN

//STRUCTURE DU PANIER

function monPanier() {
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
  let divTableau = document.createElement('div');
  divPanier2.appendChild(divTableau);
  divTableau.setAttribute('id', 'mon-panier');
  divTableau.classList.add('col-12');

  let tableauPanier = document.createElement('table');
  divTableau.appendChild(tableauPanier);
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

  //-------Générer les produits du localstorage dans le panier
  let localPanier = JSON.parse(localStorage.getItem("productsTeddy"));
  for (let produitTeddy in localPanier) {
    let tableList = document.getElementById('tableau');

    let trProduit = document.createElement('tr');
    tbodyProduits.appendChild(trProduit);
    trProduit.setAttribute("id", "tableau");

    let tdNom = document.createElement('td');
    trProduit.appendChild(tdNom);
    tdNom.setAttribute("id", "nom");
    tdNom.innerHTML = localPanier[produitTeddy].name;

    let tdColor = document.createElement('td');
    trProduit.appendChild(tdColor);
    tdColor.setAttribute('id', 'couleur');
    tdColor.innerHTML = localPanier[produitTeddy].color;

    let tdNombre = document.createElement('td');
    trProduit.appendChild(tdNombre);
    tdNombre.setAttribute("id", "nombre");
    tdNombre.innerHTML = localPanier[produitTeddy].quantity;

    //Calcul du prix, multiplication du prix d'un produit avec sa quantité
    let tdPrix = document.createElement('td');
    trProduit.appendChild(tdPrix);
    tdPrix.setAttribute("id", "prix");
    tdPrix.innerHTML = parseFloat(localPanier[produitTeddy].price) * localPanier[produitTeddy].quantity + '€';

    //Eléments bouton pour supprimer un article
    let tdDelete = document.createElement('button');
    trProduit.appendChild(tdDelete);
    tdDelete.setAttribute("id", "supprimer");
    tdDelete.classList.add('btnDelete');
    tdDelete.style = 'none';
    tdDelete.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

  }
  //-------Eléments pour insérer le prix total du panier
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

  console.log(localPanier);

  //------Supprimer un produit du panier
  let deleteItem = document.getElementsByClassName('btnDelete');
  for (let i = 0; i < deleteItem.length; i++) {
    let button = deleteItem[i]
    button.addEventListener('click', function (event) {
      let buttonClicked = event.target
      buttonClicked.parentElement.parentElement.remove()
      let productDelete = localPanier[i]._id;
      localPanier = localPanier.filter((el) => el._id !== productDelete);
      localStorage.setItem("productsTeddy", JSON.stringify(localPanier)
      );
      alert("Cet article a été supprimé de votre panier !");
      document.location.reload();

    })
  }
  //------Bouton vider le panier
  let divBoutonPanier = document.createElement('div');
  divTableau.append(divBoutonPanier);
  divBoutonPanier.classList.add('col-12', 'text-center', 'justify-content-around', 'd-flex');

  let tdDelete = document.createElement('button');
  divBoutonPanier.appendChild(tdDelete);
  tdDelete.classList.add('btn', 'btn-outline-light', 'rounded-3', 'shadow', 'btn-sm');
  tdDelete.setAttribute("id", "supprimer");
  tdDelete.innerHTML = 'Vider le panier';

  tdDelete.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.clear();
    alert('Mon panier a été vidé !');
    document.location.reload();
  });

  //-----Bouton continuer mes achats
  let tdContinue = document.createElement('a');
  divBoutonPanier.appendChild(tdContinue);
  tdContinue.classList.add('btn', 'btn-outline-light', 'rounded-3', 'shadow', 'btn-sm');
  tdContinue.innerHTML = 'Continuer mes achats';
  tdContinue.href = "index.html";
}


//----------------------------CALCUL DU PRIX TOTAL DU PANIER

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
  document.getElementById('subtotal').textContent = totalMoney + ' €';
  localStorage.setItem("Total", JSON.stringify(totalMoney + '€'));
}




//-----------------------------------CREATION DU FORMULAIRE DE COMMANDE----------------------------------

//-----STRUCTURE DU FORMULAIRE
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
  formElement.classList.add('row', 'g-3');
  formElement.setAttribute('id', 'formulaire');

  //Eléments pour le Nom
  let divNom = document.createElement('div');
  formElement.appendChild(divNom);
  divNom.classList.add('col-md-4');

  let labelNom = document.createElement('label');
  divNom.appendChild(labelNom);
  labelNom.classList.add('form-label', 'mb-0');
  labelNom.setAttribute('for', 'firstName');
  labelNom.textContent = 'Nom';

  let inputNom = document.createElement('input');
  divNom.appendChild(inputNom);
  inputNom.classList.add('form-control');
  inputNom.setAttribute('name', 'firstName');
  inputNom.setAttribute('id', 'Nom');
  inputNom.setAttribute('type', 'text');
  inputNom.setAttribute('required', 'required');

  let spanNom = document.createElement('span');
  divNom.appendChild(spanNom);
  spanNom.classList.add('d-block');
  spanNom.style.fontSize = 'small';

  //Eléments pour le Prénom
  let divPrenom = document.createElement('div');
  formElement.appendChild(divPrenom);
  divPrenom.classList.add('col-md-4');

  let labelPrenom = document.createElement('label');
  divPrenom.appendChild(labelPrenom);
  labelPrenom.classList.add('form-label', 'mb-0');
  labelPrenom.setAttribute('for', 'lastName');
  labelPrenom.textContent = 'Prénom';

  let inputPrenom = document.createElement('input');
  divPrenom.appendChild(inputPrenom);
  inputPrenom.classList.add('form-control');
  inputPrenom.setAttribute('name', 'lastName');
  inputPrenom.setAttribute('id', 'Prenom');
  inputPrenom.setAttribute('type', 'text');
  inputPrenom.setAttribute('required', 'required');

  let spanPrenom = document.createElement('span');
  divPrenom.appendChild(spanPrenom);
  spanPrenom.classList.add('d-block');
  spanPrenom.style.fontSize = 'small';

  //Eléments pour l'email
  let divMail = document.createElement('div');
  formElement.appendChild(divMail);
  divMail.classList.add('col-md-4');

  let labelMail = document.createElement('label');
  divMail.appendChild(labelMail);
  labelMail.classList.add('form-label', 'mb-0');
  labelMail.setAttribute('for', 'email');
  labelMail.textContent = 'Email';

  let inputMail = document.createElement('input');
  divMail.appendChild(inputMail);
  inputMail.classList.add('form-control');
  inputMail.setAttribute('name', 'email');
  inputMail.setAttribute('id', 'Mail');
  inputMail.setAttribute('type', 'email');
  inputMail.setAttribute('required', 'required');

  let spanMail = document.createElement('span');
  divMail.appendChild(spanMail);
  spanMail.classList.add('d-block');
  spanMail.style.fontSize = 'small';

  //Eléments pour l'adresse
  let divAdresse = document.createElement('div');
  formElement.appendChild(divAdresse);
  divAdresse.classList.add('col-md-6');

  let labelAdresse = document.createElement('label');
  divAdresse.appendChild(labelAdresse);
  labelAdresse.classList.add('form-label', 'mb-0');
  labelAdresse.setAttribute('for', 'address');
  labelAdresse.textContent = 'Adresse';

  let inputAdresse = document.createElement('input');
  divAdresse.appendChild(inputAdresse);
  inputAdresse.classList.add('form-control');
  inputAdresse.setAttribute('name', 'address');
  inputAdresse.setAttribute('id', 'Adresse');
  inputAdresse.setAttribute('type', 'text');
  inputAdresse.setAttribute('required', 'required');

  let spanAdresse = document.createElement('span');
  divAdresse.appendChild(spanAdresse);
  spanAdresse.classList.add('d-block');
  spanAdresse.style.fontSize = 'small';

  //Eléments pour la ville
  let divVille = document.createElement('div');
  formElement.appendChild(divVille);
  divVille.classList.add('col-md-4');

  let labelVille = document.createElement('label');
  divVille.appendChild(labelVille);
  labelVille.classList.add('form-label', 'mb-0');
  labelVille.setAttribute('for', 'city');
  labelVille.textContent = 'Ville';

  let inputVille = document.createElement('input');
  divVille.appendChild(inputVille);
  inputVille.classList.add('form-control');
  inputVille.setAttribute('name', 'city');
  inputVille.setAttribute('id', 'Ville');
  inputVille.setAttribute('type', 'text');
  inputVille.setAttribute('required', 'required');

  let spanVille = document.createElement('span');
  divVille.appendChild(spanVille);
  spanVille.classList.add('d-block');
  spanVille.style.fontSize = 'small';

  //Eléments pour message erreur
  let divErreur = document.createElement('div');
  formElement.appendChild(divErreur);
  divVille.classList.add('col-md-4');

  let spanErreur = document.createElement('span');
  divErreur.appendChild(spanErreur);
  spanErreur.classList.add('d-block');
  spanErreur.style.fontSize = 'small';

  //Eléments pour le bouton commander
  let divBouton = document.createElement('div');
  formElement.appendChild(divBouton);
  divBouton.classList.add('col-12', 'text-center');

  let boutonCommand = document.createElement('button');
  divBouton.appendChild(boutonCommand);
  boutonCommand.classList.add('btn', 'btn-outline-light', 'rounded-3', 'shadow', 'btn-sm');
  boutonCommand.setAttribute('type', 'submit');
  boutonCommand.setAttribute('id', 'btn-command');
  boutonCommand.setAttribute('value', 'Commander');
  boutonCommand.textContent = "Commander";
}

//---------------------------- VALIDATION DES CHAMPS AVEC REGEX ET ENVOIE VERS LE SERVER

function validCommand() {

  //-----------VALIDATION DES CHAMPS AVEC REGEX

  let form = document.querySelector('#formulaire');
  let span = document.getElementsByTagName('span');

  //VALIDATION NOM
  form.firstName.addEventListener('change', function () {
    validNom(this);
  });
  let validNom = function (inputNom) {
    let regex = /^[A-Za-z]{2,20}$/;

    if (regex.test(inputNom.value)) {
      span[0].innerText = 'Validé !';
      span[0].style.color = 'MediumSeaGreen';
      return true
    } else {
      span[0].innerText = 'Nom incorrecte !';
      span[0].style.color = 'red';
      return false
    }
  }

  //VALIDATION PRENOM
  form.lastName.addEventListener('change', function () {
    validPrenom(this);
  });
  let validPrenom = function (inputPrenom) {
    let regex = /^[A-Za-z]{2,20}$/;

    if (regex.test(inputPrenom.value)) {
      span[1].innerText = 'Validé !';
      span[1].style.color = 'MediumSeaGreen';
      return true
    } else {
      span[1].innerText = 'Prénom incorrecte !';
      span[1].style.color = 'red';
      return false
    }
  }

  //VALIDATION EMAIL
  form.email.addEventListener('change', function () {
    validEmail(this);
  });
  let validEmail = function (inputMail) {
    let regex = /\S+@\S+\.\S+/;

    if (regex.test(inputMail.value)) {
      span[2].innerText = 'Validé !';
      span[2].style.color = 'MediumSeaGreen';
      return true
    } else {
      span[2].innerText = 'Email incorrecte !';
      span[2].style.color = 'red';
      return false
    }
  }

  //VALIDATION ADRESSE
  form.address.addEventListener('change', function () {
    validAdresse(this);
  });
  let validAdresse = function (inputAdresse) {
    let regex = /^[A-Za-z0-9\s]{5,20}$/;

    if (regex.test(inputAdresse.value)) {
      span[3].innerText = 'Validé !';
      span[3].style.color = 'MediumSeaGreen';
      return true
    } else {
      span[3].innerText = 'Adresse incorrecte !';
      span[3].style.color = 'red';
      return false
    }
  }

  //VALIDATION VILLE
  form.city.addEventListener('change', function () {
    validVille(this);
  });
  let validVille = function (inputVille) {
    let regex = /^[A-Za-z]{2,20}$/;

    if (regex.test(inputVille.value)) {
      span[4].innerText = 'Validé !';
      span[4].style.color = 'MediumSeaGreen';
      return true
    } else {
      span[4].innerText = 'Ville incorrecte !';
      span[4].style.color = 'red';
      return false
    }
  }

  //----------ENVOIE DES DONNÉES AU SERVER

  //Au click du bouton commander
  let bouton = document.querySelector('#btn-command');
  bouton.addEventListener('click', function (e) {
    e.preventDefault();

    //Si le formulaire est validé
    if (validNom(form.firstName) && validPrenom(form.lastName) && validEmail(form.email)
      && validAdresse(form.address) && validVille(form.city)) {

      console.log('validé');

      // => Création de l'objet contact
      class formulaire {
        constructor() {
          this.firstName = document.querySelector("#Nom").value;
          this.lastName = document.querySelector("#Prenom").value;
          this.email = document.querySelector("#Mail").value;
          this.address = document.querySelector("#Adresse").value;
          this.city = document.querySelector("#Ville").value;
        }
      }
      let contact = new formulaire();
      console.log('contact crée');

      // =>  Envoie de l'objet contact dans le localstorage
      localStorage.setItem("contact", JSON.stringify(contact));

      // =>  Récupération des id des produits du panier
      let products = [];
      for (j = 0; j < localPanier.length; j++) {
        let productsId = localPanier[j]._id;
        products.push(productsId);
      }
      console.log("products");
      console.log(products);

      // =>  Création de l'objet (contact + products) à envoyer au server
      const sendData = {
        contact,
        products,
      };
      console.log(sendData);
      console.log('sendData');

      // =>  Envoie de l'objet "sendData" vers le serveur
      fetch("http://localhost:3000/api/teddies/order", {
        method: 'POST',
        body: JSON.stringify(sendData),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {

          // =>  Récupération de l'orderId du server et l'envoyer dans le localstorage
          localStorage.setItem("orderId", JSON.stringify(data.orderId));
          console.log(data);

          // =>  Redirection vers la page commande
          document.location.href = "commande.html";
        })
        .catch((err) => {
          alert("Il y a eu une erreur : " + err);
        });

      // Si le formulaire n'est pas rempli
    } else {
      span[5].innerText = 'Veuillez remplir tous les champs !';
      span[5].style.color = 'red';
      console.log('formulaire non validé');
    }
  })
}