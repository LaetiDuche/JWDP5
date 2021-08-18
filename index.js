console.log(window);
/* alert('test'); */

let container = document.getElementById('card-teddy');

let firstDiv = document.createElement('div');
container.appendChild(firstDiv);
document.querySelector("div").classList.add('row');

let articleTeddy = document.createElement('article');
firstDiv.appendChild(articleTeddy);
document.querySelector("article").classList.add('col-12', 'col-md-6', 'col-xl-4', 'my-3');

let lienTeddy = document.createElement('a');
articleTeddy.appendChild(lienTeddy);
document.querySelector("article > a").setAttribute('href', 'produit.html');

let figureTeddy = document.createElement('figure');
lienTeddy.appendChild(figureTeddy);
document.querySelector("figure").classList.add('card','rounded-3', 'my-1', 'shadow-sm');

let imageTeddy = document.createElement('img');
figureTeddy.appendChild(imageTeddy);
document.querySelector("figure >img").classList.add('card-img-top');
document.querySelector("figure > img").setAttribute("alt", "");

let captionTeddy = document.createElement('figcaption');
figureTeddy.appendChild(captionTeddy);
document.querySelector("figcaption").classList.add('card-body');

let textTeddy = document.createElement('div');
captionTeddy.appendChild(textTeddy);
document.querySelector("figcaption > div").classList.add("title-price" ,"d-flex");

let nomTeddy = document.createElement('h2');
textTeddy.appendChild(nomTeddy);
document.querySelector('h2').setAttribute('id', 'name');

let prixTeddy = document.createElement('p');
textTeddy.appendChild(prixTeddy);
document.querySelector('figcaption > div > p').classList.add("card-text", "my-auto");

let descriptionTeddy = document.createElement('p');
captionTeddy.append(descriptionTeddy);
document.querySelector('figure > figcaption > p').setAttribute("id", "description");































/* fetch('http://localhost:3000/api/teddies')
  .then((response) => response.json())
  .then(response => console.log(response))
  .catch(error => {
    console.log(error)
  }); */

/* var urlTeddy = 'http://localhost:3000/api/teddies';

fetch(urlTeddy)
  .then((response) =>
    response.json()
      .then((data) => {
        console.log(data);
        document.querySelector('#image').innerHTML = data.imageUrl;
        document.querySelector('#name').innerHTML = data.name;
        document.querySelector('#price').innerHTML = data.price + ' €';
        document.querySelector('#description').innerHTML = data.description;

      })
  )
  .catch((err) => console.log('erreur : ' + err)); */

/*   function getTeddy() {
    fetch("http://localhost:3000/api/teddies")
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(value) {
      document
          .getElementById("name")
          .innerText = value.name.Norbert;
    })
    .catch(function(err) {
      // Une erreur est survenue
    });
  } */
/* const params = new URLSearchParams(window.location.search);

const values = params.get('values'); // will return the value of the parameter page
console.log(values) */


/* var imageTeddy = window.location.search; */
/* var container = document.getElementById('image'); */
/* container.innerHTML = imageTeddy; */



//Création de l'article des teddies

/* var cardTeddy = document.getElementById('card-teddy');
cardTeddy.innerHTML = "<div><article><a><figure><img></img><figcaption><div><h2></h2><p></p></div><p></p></figcaption></figure></a></article></div>";

var rowTeddy = document.querySelector("#card-teddy > div");
rowTeddy.setAttribute("class", "row ");

var articleTeddy = document.querySelector("#card-teddy > div >article");
articleTeddy.setAttribute("class", "col-12 col-md-6 col-xl-4 my-3 ");
articleTeddy.setAttribute("id", "");

var lienTeddy = document.querySelector("#card-teddy > div >article > a");
lienTeddy.setAttribute("href", "produit.html");

var figureTeddy = document.querySelector("#card-teddy > div >article > a > figure");
figureTeddy.setAttribute("class", "card rounded-3 my-1 shadow-sm ");

var imageTeddy = document.querySelector("#card-teddy > div >article > a > figure > img");
imageTeddy.setAttribute("class", "card-img-top ");
imageTeddy.setAttribute("alt", "");
imageTeddy.setAttribute("id", "image");


var captionTeddy = document.querySelector("#card-teddy > div >article > a > figure > figcaption");
captionTeddy.setAttribute("class", "card-body");

var textTeddy = document.querySelector("#card-teddy > div >article > a > figure > figcaption > div");
textTeddy.setAttribute("class", "title-price d-flex");

var nomTeddy = document.querySelector("#card-teddy > div >article > a > figure > figcaption > div > h2");
nomTeddy.setAttribute("id", "name");

var prixTeddy = document.querySelector("#card-teddy > div >article > a > figure > figcaption > div > p");
prixTeddy.setAttribute("class", "card-text my-auto");
prixTeddy.setAttribute("id", "price");

var descriptionTeddy = document.querySelector("#card-teddy > div >article > a > figure > figcaption > p");
descriptionTeddy.setAttribute("id", "description");
 */

