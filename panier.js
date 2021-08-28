//Pour préciser dans le DOM où l'on veut inserer Mon panier et le formulaire de commande
body();
function body() {
  monPanier();
  formCommand();
}

//Création de Mon panier

function monPanier() {
  //Selection de l'élément pour afficher mon panier
  var monPanier = document.getElementById('panier-teddy');

  //Eléments responsives
  var divPanier = document.createElement('div');
  monPanier.appendChild(divPanier);
  divPanier.classList.add('col-12', 'bg-white', 'p-4', 'rounded-3', 'my-2');

  var divPanier2 = document.createElement('div');
  divPanier.appendChild(divPanier2);
  divPanier2.classList.add('col-12');

  //Titre Mon panier
  var titrePanier = document.createElement('h2');
  divPanier2.appendChild(titrePanier);
  titrePanier.textContent = "Mon panier";

  //Tableau pour insérer mes produits
  var tableauPanier = document.createElement('table');
  divPanier2.appendChild(tableauPanier);
  tableauPanier.classList.add('table');

  var theadPanier = document.createElement('thead');
  tableauPanier.appendChild(theadPanier);

  var trPanier = document.createElement('tr');
  theadPanier.appendChild(trPanier);

  //Colonne article
  var thArticle = document.createElement('th');
  trPanier.appendChild(thArticle);
  thArticle.textContent = "Article";

  //Colonne quantité
  var thQuantite = document.createElement('th');
  trPanier.appendChild(thQuantite);
  thQuantite.textContent = "Quantité";

  //Colonne prix
  var thPrix = document.createElement('th');
  trPanier.appendChild(thPrix);
  thPrix.textContent = "Prix";

  //Eléments pour insérer les produits dans le tableau
  var tbodyProduits = document.createElement('tbody');
  tableauPanier.appendChild(tbodyProduits);
  tbodyProduits.setAttribute("id", "products-list");

  //Fonction boucle pour générer les produits du localstorage dans le tableau du panier
  var getLocalPanier = JSON.parse(localStorage.getItem("product"));

  for (var produitTeddy in getLocalPanier) {
    var trProduit = document.getElementById('tableau');

    var trProduit = document.createElement('tr');
    tbodyProduits.appendChild(trProduit);
    trProduit.setAttribute("id", "tableau");

    var tdNom = document.createElement('td');
    trProduit.appendChild(tdNom);
    tdNom.setAttribute("id", "nom");
    tdNom.innerHTML = getLocalPanier[produitTeddy].name;

    var tdNombre = document.createElement('td');
    trProduit.appendChild(tdNombre);
    tdNombre.setAttribute("id", "nombre");
    tdNombre.innerHTML = getLocalPanier[produitTeddy].quantity;

    var tdPrix = document.createElement('td');
    trProduit.appendChild(tdPrix);
    tdPrix.setAttribute("id", "prix");
    tdPrix.innerHTML = parseFloat(getLocalPanier[produitTeddy].price) * getLocalPanier[produitTeddy].quantity + '€';
  }

  //Prix total
  var totalPanier = document.createElement('p');
  divPanier.appendChild(totalPanier);
  totalPanier.textContent = "Total :";

  //Ajout et calcul du prix total
  var spanPanier = document.createElement('span');
  totalPanier.appendChild(spanPanier);
  spanPanier.classList.add('subtotal');


}

//Récupérer les produits dans le localstorage










//Création du formulaire de commande

function formCommand() {
  //Selection de l'élément pour afficher le formulaire 
  var confirmCommand = document.getElementById('panier-teddy');

  //Eléments responsives
  var divForm = document.createElement('div');
  confirmCommand.appendChild(divForm);
  divForm.classList.add('col-12', 'bg-white', 'p-4', 'rounded-3', 'my-2');

  var titreDiv = document.createElement('div');
  divForm.appendChild(titreDiv);

  //Titre du formulaire
  var titreForm = document.createElement('h3');
  titreDiv.appendChild(titreForm);
  titreForm.textContent = "Confirmer ma commande";
  titreForm.classList.add('titre-command', 'text-start');

  //Sous-titre du formulaire
  var subTitleForm = document.createElement('p');
  titreDiv.appendChild(subTitleForm);
  subTitleForm.textContent = "Remplissez le formulaire pour confirmer votre commande";

  //Le formulaire
  var formElement = document.createElement('form');
  divForm.appendChild(formElement);
  formElement.classList.add('row', 'g-3', 'needs-validation');
  formElement.setAttribute('tag', "novalidate");

  //Eléments pour le Nom
  var divNom = document.createElement('div');
  formElement.appendChild(divNom);
  divNom.classList.add('col-md-4');

  var labelNom = document.createElement('label');
  divNom.appendChild(labelNom);
  labelNom.setAttribute('for', 'validationCustom01');
  labelNom.classList.add('form-label');
  labelNom.textContent = 'Nom';

  var inputNom = document.createElement('input');
  divNom.appendChild(inputNom);
  inputNom.setAttribute('id', 'validationCustom01');
  inputNom.setAttribute('type', 'text');
  inputNom.setAttribute('tag', 'required');
  inputNom.classList.add('form-control');

  var validNom = document.createElement('div');
  divNom.appendChild(validNom);
  validNom.textContent = "Veuillez entrer votre nom.";

  //Eléments pour le Prénom
  var divPrenom = document.createElement('div');
  formElement.appendChild(divPrenom);
  divPrenom.classList.add('col-md-4');

  var labelPrenom = document.createElement('label');
  divPrenom.appendChild(labelPrenom);
  labelPrenom.setAttribute('for', 'validationCustom02');
  labelPrenom.classList.add('form-label');
  labelPrenom.textContent = 'Prénom';

  var inputPrenom = document.createElement('input');
  divPrenom.appendChild(inputPrenom);
  inputPrenom.setAttribute('id', 'validationCustom02');
  inputPrenom.setAttribute('type', 'text');
  inputPrenom.setAttribute('tag', 'required');
  inputPrenom.classList.add('form-control');

  var validPrenom = document.createElement('div');
  divPrenom.appendChild(validPrenom);
  validPrenom.textContent = "Veuillez entrer votre prénom.";

  //Eléments pour l'email
  var divMail = document.createElement('div');
  formElement.appendChild(divMail);
  divMail.classList.add('col-md-4');

  var labelMail = document.createElement('label');
  divMail.appendChild(labelMail);
  labelMail.setAttribute('for', 'validationCustomUsername');
  labelMail.classList.add('form-label');
  labelMail.textContent = 'Email';

  var divMail2 = document.createElement('div');
  divMail.appendChild(divMail2);
  divMail2.classList.add('input-group', 'has-validation');

  var spanMail = document.createElement('span');
  divMail2.appendChild(spanMail);
  spanMail.setAttribute('id', 'inputGroupPrepend');
  spanMail.classList.add('input-group-text');
  spanMail.textContent = "@";

  var inputMail = document.createElement('input');
  divMail2.appendChild(inputMail);
  inputMail.setAttribute('id', 'validationCustomUsername');
  inputMail.setAttribute('type', 'text');
  inputMail.setAttribute('tag', 'required');
  inputMail.setAttribute('aria-describedby', 'inputGroupPrepend');
  inputMail.classList.add('form-control');

  var validMail = document.createElement('div');
  divMail2.appendChild(validMail);
  validMail.classList.add('invalid-feedback');
  validMail.textContent = "Veuillez choisir une adresse e-mail valide.";

  //Eléments pour l'adresse
  var divAdresse = document.createElement('div');
  formElement.appendChild(divAdresse);
  divAdresse.classList.add('col-md-6');

  var labelAdresse = document.createElement('label');
  divAdresse.appendChild(labelAdresse);
  labelAdresse.setAttribute('for', 'validationCustom03');
  labelAdresse.classList.add('form-label');
  labelAdresse.textContent = "Adresse postale";

  var inputAdresse = document.createElement('input');
  divAdresse.appendChild(inputAdresse);
  inputAdresse.setAttribute('id', 'validationCustom03');
  inputAdresse.setAttribute('type', 'text');
  inputAdresse.setAttribute('tag', 'required');
  inputAdresse.classList.add('form-control');

  var validAdresse = document.createElement('div');
  divAdresse.appendChild(validAdresse);
  validAdresse.classList.add('invalid-feedback');
  validAdresse.textContent = "Veuillez fournir une adresse valide.";

  //Eléments pour la ville
  var divVille = document.createElement('div');
  formElement.appendChild(divVille);
  divVille.classList.add('col-md-4');

  var labelVille = document.createElement('label');
  divVille.appendChild(labelVille);
  labelVille.setAttribute('for', 'validationCustom04');
  labelVille.classList.add('form-label');
  labelVille.textContent = "Ville";

  var inputVille = document.createElement('input');
  divVille.appendChild(inputVille);
  inputVille.setAttribute('id', 'validationCustom04');
  inputVille.setAttribute('type', 'text');
  inputVille.setAttribute('tag', 'required');
  inputVille.classList.add('form-control');

  var validVille = document.createElement('div');
  divVille.appendChild(validVille);
  validVille.classList.add('invalid-feedback');
  validVille.textContent = "Veuillez fournir une ville valide.";

  //Eléments pour les conditions
  var divCondition = document.createElement('div');
  formElement.appendChild(divCondition);
  divCondition.classList.add('col-12');

  var divCheck = document.createElement('div');
  divCondition.appendChild(divCheck);
  divCheck.classList.add('form-check');

  var inputCheck = document.createElement('input');
  divCheck.appendChild(inputCheck);
  inputCheck.setAttribute('id', 'invalidCheck');
  inputCheck.setAttribute('tag', 'required');
  inputCheck.setAttribute('type', 'checkbox');
  inputCheck.classList.add('form-check-input');

  var labelCheck = document.createElement('label');
  divCheck.appendChild(labelCheck);
  labelCheck.setAttribute('for', 'invalidCheck');
  labelCheck.classList.add('form-check-label');
  labelCheck.textContent = " Accepter les termes et conditions";

  var validCondition = document.createElement('div');
  divCheck.appendChild(validCondition);
  validCondition.classList.add('invalid-feedback');
  validCondition.textContent = "Vous devez accepter avant de soumettre.";

  //Eléments pour le bouton commander
  var divBouton = document.createElement('div');
  formElement.appendChild(divBouton);
  divBouton.classList.add('col-12', 'text-center');

  var boutonCommand = document.createElement('button');
  divBouton.appendChild(boutonCommand);
  boutonCommand.setAttribute('type', 'submit');
  boutonCommand.classList.add('btn', 'btn-outline-light', 'rounded-3', 'shadow');
  boutonCommand.textContent = "Commander";

  //Validation formulaire Bootstrap

  (function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
  })()
}











