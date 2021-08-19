//Pour préciser dans le DOM où l'on veut inserer l'élément pour les articles
body();
function body(){
  getTeddies();
}

//Création de la carte pour accueillir tous les teddies

//Fonction d'appel fetch API pour récupérer les datas des teddies
function getTeddies() {
  fetch("http://localhost:3000/api/teddies")
    .then(function (res) {
      return res.json();
    })
    .catch((error) => {
      console.log(error)
    })

    //Fonction boucle pour créer chaque article automatiquement
    .then(function (insertDataTeddies) {
      const cartes = insertDataTeddies;
      console.log(cartes);
      for (let card in cartes) {

        //Selection de la div pour inserer les articles 
        let firstDiv = document.getElementById('card-teddy');

        //l'article
        let articleTeddy = document.createElement('article');
        firstDiv.appendChild(articleTeddy);
        articleTeddy.classList.add('col-12', 'col-md-6', 'col-xl-4', 'my-3');

        //Chaque carte est cliquable et mène à la page produit grâce à l'ID de chaque teddie
        let lienTeddy = document.createElement('a');
        articleTeddy.appendChild(lienTeddy);
        lienTeddy.href ='produit.html?id=${insertDataTeddies[card]._id}'; //Appel data 
        
        let figureTeddy = document.createElement('figure');
        lienTeddy.appendChild(figureTeddy);
        figureTeddy.classList.add('card', 'rounded-3', 'my-1', 'shadow');

        //Insertion de l'image
        let imageTeddy = document.createElement('img');
        figureTeddy.appendChild(imageTeddy);
        imageTeddy.src = insertDataTeddies[card].imageUrl;//Appel data
        imageTeddy.classList.add('card-img-top');
        document.querySelector("figure > img").setAttribute("alt", "ours en peluche orinours");

        let captionTeddy = document.createElement('figcaption');
        figureTeddy.appendChild(captionTeddy);
        captionTeddy.classList.add('card-body');

        let textTeddy = document.createElement('div');
        captionTeddy.appendChild(textTeddy);
        textTeddy.classList.add("title-price", "d-flex");

        //Insertion pour le nom des teddies
        let nomTeddy = document.createElement('h2');
        textTeddy.appendChild(nomTeddy);
        nomTeddy.innerHTML = insertDataTeddies[card].name;//Appel data 

        //Insertion du prix en euro 
        let prixTeddy = document.createElement('p');
        textTeddy.appendChild(prixTeddy);
        prixTeddy.innerHTML = insertDataTeddies[card].price/100 + ' €'; //Prix en centimes traduit en euro avec la division + appel data
        prixTeddy.classList.add("card-text", "my-auto");

        //Insertion de la description des teddies
        let descriptionTeddy = document.createElement('p');
        captionTeddy.append(descriptionTeddy);
        descriptionTeddy.innerHTML = insertDataTeddies[card].description;//Appel data

      }
    });
  }
