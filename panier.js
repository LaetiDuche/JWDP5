//Pour préciser dans le DOM où l'on veut inserer Mon panier et le formulaire de commande
body();
function body() {
  monPanier();
  totalPrice();
  formCommand()
  /* validation() */
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
  titrePanier.style.color ='DarkOrange';
  titrePanier.style.fontStyle ='italic';
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
  thArticle.textContent = "Articles";

  //Colonne quantité
  var thQuantite = document.createElement('th');
  trPanier.appendChild(thQuantite);
  thQuantite.textContent = "Quantité";

  //Colonne prix
  var thPrix = document.createElement('th');
  trPanier.appendChild(thPrix);
  thPrix.classList.add('pe-4');
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

    //Calcul du prix, multiplication du prix d'un produit avec sa quantité
    var tdPrix = document.createElement('td');
    trProduit.appendChild(tdPrix);
    tdPrix.setAttribute("id", "prix");
    tdPrix.innerHTML = parseFloat(getLocalPanier[produitTeddy].price) * getLocalPanier[produitTeddy].quantity + ' €';
  }

  //Eléments pour insérer le prix total du panier
  var titrePanier = document.createElement('p');
  divPanier.appendChild(titrePanier);
  titrePanier.style.fontWeight = "bold";
  titrePanier.textContent = "Total : ";

  var totalPanier = document.createElement('span');
  titrePanier.appendChild(totalPanier);
  totalPanier.setAttribute('id', 'subtotal');

  totalPrice();
};

//Fonction pour calculer le prix total du panier

function totalPrice() {
  var total = [];
  //Récupération de tous les prix de la colonne prix
  var productsPriceList = document.querySelectorAll('#prix');
  productsPriceList.forEach(function (productsPrice) {
    total.push(parseFloat(productsPrice.textContent));
  })
  console.log(total);
  //Addition de tous les prix
  var totalMoney = total.reduce(function (total, productsPrice) {
    total += productsPrice;
    return total;
  }, 0)
  console.log(totalMoney);
  //Sélection de l'endroit où l'on veut inscrire le prix total
  document.getElementById('subtotal').textContent = totalMoney + ' €';
}



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
  var titreForm = document.createElement('h2');
  titreDiv.appendChild(titreForm);
  titreForm.style.color ='DarkOrange';
  titreForm.style.fontStyle ='italic';
  titreForm.classList.add( 'text-start');
  titreForm.textContent = "Confirmer ma commande";

  //Sous-titre du formulaire
  var subTitleForm = document.createElement('p');
  titreDiv.appendChild(subTitleForm);
  subTitleForm.textContent = "Remplissez le formulaire pour confirmer votre commande";

  //Le formulaire
  var formElement = document.createElement('form');
  divForm.appendChild(formElement);
  formElement.classList.add('row', 'g-3', 'needs-validation');
  /* formElement.setAttribute('method', "post"); */
  formElement.setAttribute('id', 'formulaire');
  formElement.setAttribute('action', 'commande.html');

  //Eléments pour le Nom
  var divNom = document.createElement('div');
  formElement.appendChild(divNom);
  divNom.classList.add('col-md-4');

  var labelNom = document.createElement('label');
  divNom.appendChild(labelNom);
  labelNom.classList.add('form-label');
  labelNom.setAttribute('for', 'firstName');

  var inputNom = document.createElement('input');
  divNom.appendChild(inputNom);
  inputNom.classList.add('form-control');
  inputNom.setAttribute('name', 'firstName');
  inputNom.setAttribute('id','Nom');
  inputNom.setAttribute('type', 'text');
  inputNom.setAttribute('placeholder', 'Nom');
  inputNom.setAttribute('required','required');
  inputNom.setAttribute('pattern','[A-Za-z-\s]+');

  //Eléments pour le Prénom
  var divPrenom = document.createElement('div');
  formElement.appendChild(divPrenom);
  divPrenom.classList.add('col-md-4');

  var labelPrenom = document.createElement('label');
  divPrenom.appendChild(labelPrenom);
  labelPrenom.classList.add('form-label');
  labelPrenom.setAttribute('for', 'lastName');

  var inputPrenom = document.createElement('input');
  divPrenom.appendChild(inputPrenom);
  inputPrenom.classList.add('form-control');
  inputPrenom.setAttribute('name', 'lastName');
  inputPrenom.setAttribute('id', 'Prenom');
  inputPrenom.setAttribute('type', 'text');
  inputPrenom.setAttribute('placeholder', 'Prénom');
  inputPrenom.setAttribute('required', 'required');
  inputPrenom.setAttribute('pattern','[A-Za-z-]+');

  //Eléments pour l'email
  var divMail = document.createElement('div');
  formElement.appendChild(divMail);
  divMail.classList.add('col-md-4');

  var labelMail = document.createElement('label');
  divMail.appendChild(labelMail);
  labelMail.classList.add('form-label');
  labelMail.setAttribute('for', 'email');

  var inputMail = document.createElement('input');
  divMail.appendChild(inputMail);
  inputMail.classList.add('form-control');
  inputMail.setAttribute('name', 'email');
  inputMail.setAttribute('id', 'Mail');
  inputMail.setAttribute('type', 'email');
  inputMail.setAttribute('placeholder', 'Email');
  inputMail.setAttribute('required', 'required');

  //Eléments pour l'adresse
  var divAdresse = document.createElement('div');
  formElement.appendChild(divAdresse);
  divAdresse.classList.add('col-md-6');

  var labelAdresse = document.createElement('label');
  divAdresse.appendChild(labelAdresse);
  labelAdresse.classList.add('form-label');
  labelAdresse.setAttribute('for', 'address');

  var inputAdresse = document.createElement('input');
  divAdresse.appendChild(inputAdresse);
  inputAdresse.classList.add('form-control');
  inputAdresse.setAttribute('name', 'address');
  inputAdresse.setAttribute('id', 'Adresse');
  inputAdresse.setAttribute('type', 'text');
  inputAdresse.setAttribute('placeholder', 'Adresse postale');
  inputAdresse.setAttribute('required', 'required');

  //Eléments pour la ville
  var divVille = document.createElement('div');
  formElement.appendChild(divVille);
  divVille.classList.add('col-md-4');

  var labelVille = document.createElement('label');
  divVille.appendChild(labelVille);
  labelVille.classList.add('form-label');
  labelVille.setAttribute('for', 'city');

  var inputVille = document.createElement('input');
  divVille.appendChild(inputVille);
  inputVille.classList.add('form-control');
  inputVille.setAttribute('name', 'city');
  inputVille.setAttribute('id', 'Ville');
  inputVille.setAttribute('type', 'text');
  inputVille.setAttribute('placeholder', 'Ville');
  inputVille.setAttribute('required', 'required');
  inputVille.setAttribute('pattern','[A-Za-z- ]+');

  //Eléments pour le bouton commander
  var divBouton = document.createElement('div');
  formElement.appendChild(divBouton);
  divBouton.classList.add('col-12', 'text-center');

  var boutonCommand = document.createElement('button');
  divBouton.appendChild(boutonCommand);
  boutonCommand.classList.add('btn', 'btn-outline-light', 'rounded-3', 'shadow');
  boutonCommand.setAttribute('type', 'submit');
  boutonCommand.setAttribute('id', 'bouton');
  boutonCommand.setAttribute('value', 'Commander');
  boutonCommand.setAttribute('required','required');
  boutonCommand.textContent = "Commander";

  /* validation(); */
}








//Fonction de validation du formulaire
/* var getLocalPanier = JSON.parse(localStorage.getItem("product"));

function validation() { */
  /* var boutonCommand = document.getElementById('#bouton'); */
 /*  var inputNom = document.getElementById('#Nom');
  var inputPrenom = document.getElementById('#Prenom');
  
  document.getElementById("formulaire").addEventListener('submit', function (e) {
    var erreur;
    var regex = /^[(a-z)(A-Z)-\s]+$/;
    if (regex) {
      
      e.preventDefault();
      document.getElementById("erreur").innerHTML = erreur;
      return false;
    }else{
      (regex.test(inputNom.value+ inputPrenom.value ) = true)
      var listPanier = [];
      listPanier.push(getLocalPanier); */

      /* var order = {
        userContact: {
          firstName: Nom.value,
          lastName: Prenom.value,
          email: Mail.value,
          address: Adresse.value,
          city: Ville.value
        },
        product: listPanier,
      } */
     /*  var postUserData = {
        method: "POST",
        body: JSON.stringify(order),
        headers: { "Content-Type": "application/json"},
      }; */

   /*  }
  })

} */