body();
function body(){
  getTeddies();
}

function getTeddies() {
  fetch("http://localhost:3000/api/teddies")
    .then(function (res) {
      return res.json();
    })
    .catch((error) => {
      console.log(error)
    })

    .then(function (insertDataTeddies) {
      const cartes = insertDataTeddies;
      console.log(cartes);
      for (let card in cartes) {

        let firstDiv = document.getElementById('card-teddy');

        let articleTeddy = document.createElement('article');
        firstDiv.appendChild(articleTeddy);
        articleTeddy.classList.add('col-12', 'col-md-6', 'col-xl-4', 'my-3');

        let lienTeddy = document.createElement('a');
        articleTeddy.appendChild(lienTeddy);
        lienTeddy.href ='produit.html?id=${insertDataTeddies[card]._id}';
        
        let figureTeddy = document.createElement('figure');
        lienTeddy.appendChild(figureTeddy);
        figureTeddy.classList.add('card', 'rounded-3', 'my-1', 'shadow');

        let imageTeddy = document.createElement('img');
        figureTeddy.appendChild(imageTeddy);
        imageTeddy.src = insertDataTeddies[card].imageUrl;
        imageTeddy.classList.add('card-img-top');
        document.querySelector("figure > img").setAttribute("alt", "");

        let captionTeddy = document.createElement('figcaption');
        figureTeddy.appendChild(captionTeddy);
        captionTeddy.classList.add('card-body');

        let textTeddy = document.createElement('div');
        captionTeddy.appendChild(textTeddy);
        textTeddy.classList.add("title-price", "d-flex");

        let nomTeddy = document.createElement('h2');
        textTeddy.appendChild(nomTeddy);
        nomTeddy.innerHTML = insertDataTeddies[card].name;

        let prixTeddy = document.createElement('p');
        textTeddy.appendChild(prixTeddy);
        prixTeddy.innerHTML = insertDataTeddies[card].price + ' €';
        prixTeddy.classList.add("card-text", "my-auto");

        let descriptionTeddy = document.createElement('p');
        captionTeddy.append(descriptionTeddy);
        descriptionTeddy.innerHTML = insertDataTeddies[card].description;
        document.querySelector('figure > figcaption > p').setAttribute("id", "description");

      }
    });
  }
