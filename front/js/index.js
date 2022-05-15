// Page index où l'on récupère tous les produits de l'api venant du server, 
// et création des cartes pour intégrer les infos des produits générés par une boucle,
// et ajout du bouton 'voir le produit'.


//APPEL DES FONCTIONS
body();
function body() {
  getTeddies();
}


//----------------------CREATION DE LA CARTE POUR ACCUEILLIR TOUS LES TEDDIES

//STRUCTURE DE LA CARTE
function getTeddies() {

  //Appel get pour récupérer tous les produits du server
  fetch("http://localhost:3000/api/teddies")
    .then(function (res) {
      return res.json();
    })
    .catch((err) => {
    })
    .then(function (insertDataTeddies) {
      const cartes = insertDataTeddies;

      //Création des cartes automatiques
      for (let card in cartes) {

        //Selection de la div pour inserer les articles 
        let firstDiv = document.getElementById('card-teddy');

        //l'article
        let articleTeddy = document.createElement('article');
        firstDiv.appendChild(articleTeddy);
        articleTeddy.classList.add('col-12', 'col-md-6', 'col-xl-4', 'my-2', 'article');

        let figureTeddy = document.createElement('figure');
        articleTeddy.appendChild(figureTeddy);
        figureTeddy.classList.add('card', 'my-1', 'shadow', 'px-0');

        //Insertion de l'image
        let imageTeddy = document.createElement('img');
        figureTeddy.appendChild(imageTeddy);
        imageTeddy.src = insertDataTeddies[card].imageUrl;//Appel data
        imageTeddy.classList.add('card-img-top');

        let captionTeddy = document.createElement('figcaption');
        figureTeddy.appendChild(captionTeddy);
        captionTeddy.classList.add('card-body');

        let textTeddy = document.createElement('div');
        captionTeddy.appendChild(textTeddy);
        textTeddy.classList.add("title-price", "d-flex-row");

        //Insertion des éléments
        let divTitle = document.createElement('div');
        textTeddy.appendChild(divTitle);
        divTitle.classList.add('col-12', 'd-flex');

        //Insertion du nom des teddies
        let nomTeddy = document.createElement('h2');
        divTitle.appendChild(nomTeddy);
        nomTeddy.style.color = 'DarkOrange';
        nomTeddy.innerHTML = insertDataTeddies[card].name;//Appel data 

        //Insertion du prix en euro 
        let prixTeddy = document.createElement('p');
        divTitle.appendChild(prixTeddy);
        prixTeddy.classList.add("card-text", "my-auto");
        prixTeddy.innerHTML = insertDataTeddies[card].price / 100 + ' €'; //Prix en centimes traduit en euro avec la division + appel data

        //Insertion de la description des teddies
        let descriptionTeddy = document.createElement('p');
        textTeddy.appendChild(descriptionTeddy);
        descriptionTeddy.innerHTML = insertDataTeddies[card].description;//Appel data

        //Insertion du bouton voir le produit
        let divButton = document.createElement('div');
        textTeddy.appendChild(divButton);
        divButton.classList.add('col-12', 'text-center', 'mb-3', 'mt-4');

        let buttonTeddy = document.createElement('a');
        divButton.appendChild(buttonTeddy);
        buttonTeddy.classList.add('bouton', 'shadow');
        buttonTeddy.innerHTML = 'Voir le produit';
        buttonTeddy.href = `produit.html?id=${insertDataTeddies[card]._id}`; //Appel data
      }
    });
}