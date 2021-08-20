let params = new URL(document.location).searchParams;
let id = params.get("id");

body();

function body() {
  getTeddies();
}

function getTeddies() {
  fetch(`http://localhost:3000/api/teddies/${id}`)
    .then(function (res) {
      return res.json();
    })
    .catch((err) => {
    })
    .then(function (insertDataTeddies) {
      card = insertDataTeddies;
      console.log(card);

      var cardTeddy = document.getElementById('card-teddy');

      var ficheTeddy = document.createElement("article");
      cardTeddy.appendChild(ficheTeddy);
      ficheTeddy.classList.add("col-12", "col-md-12", "col-xl-8", "page-product", "mx-auto", "my-3");

      var figureTeddy = document.createElement("figure");
      ficheTeddy.appendChild(figureTeddy);
      figureTeddy.classList.add("card", "rounded-3", "col-md-12", "my-1", "shadow-sm");

      var imageTeddy = document.createElement("img");
      figureTeddy.appendChild(imageTeddy);
      imageTeddy.classList.add("card-img-top", "h-100");
      imageTeddy.setAttribute("alt", "ours en peluche teddy");
      imageTeddy.src = card.imageUrl;

      var captionTeddy = document.createElement("figcaption");
      figureTeddy.appendChild(captionTeddy);
      captionTeddy.classList.add("card-body");

      var textTeddy = document.createElement("div");
      captionTeddy.appendChild(textTeddy);
      textTeddy.classList.add("row");

      var nomTeddy = document.createElement("h2");
      textTeddy.appendChild(nomTeddy);
      nomTeddy.innerHTML = card.name;
      nomTeddy.setAttribute("id", "name");

      var prixTeddy = document.createElement("p");
      textTeddy.appendChild(prixTeddy);
      prixTeddy.innerHTML = "Prix : " + card.price / 100 + ' €';
      prixTeddy.classList.add("card-text");
      prixTeddy.setAttribute("id", "price");

      var descriptionTeddy = document.createElement("p");
      textTeddy.appendChild(descriptionTeddy);
      descriptionTeddy.innerHTML = "Description : " + card.description;
      descriptionTeddy.setAttribute("id", "description");

      var choixTeddy = document.createElement("div");
      textTeddy.appendChild(choixTeddy);
      choixTeddy.classList.add("d-flex", "mt-2", "align-baseline");

      var labelTeddy = document.createElement("label");
      choixTeddy.appendChild(labelTeddy);
      labelTeddy.setAttribute("for", "c");

      var selectTeddy = document.createElement("select");
      choixTeddy.appendChild(selectTeddy);
      selectTeddy.classList.add("form-select");
      selectTeddy.setAttribute("aria-label", "default select example");

      var optionTeddy = document.createElement("option");
      selectTeddy.appendChild(optionTeddy);
      optionTeddy.innerHTML = "Choisir une couleur";

      var colorTeddy = document.getElementById("colors");
      for (let i = 0; i < card.colors.length; i++) {
        var optionTeddy = document.createElement("option");
        selectTeddy.appendChild(optionTeddy);
        optionTeddy.innerHTML = card.colors[i];
      }

      var textTeddy2 = document.createElement("div");
      textTeddy.appendChild(textTeddy2);
      textTeddy2.classList.add("d-flex", "mt-4", "align-baseline");

      var labelTeddy = document.createElement("label");
      textTeddy2.appendChild(labelTeddy);
      labelTeddy.setAttribute("for", "nombre");

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

      var divTeddy = document.createElement("div");
      textTeddy.appendChild(divTeddy);
      divTeddy.classList.add("col-12", "text-center", "mt-4");

      var buttonTeddy = document.createElement("button");
      divTeddy.appendChild(buttonTeddy);
      buttonTeddy.classList.add("btn", "btn-outline-light", "rounded-3", "shadow");
      buttonTeddy.setAttribute("type", "submit")
      buttonTeddy.setAttribute("id", "btn");;
      buttonTeddy.setAttribute("data-id", "");
      buttonTeddy.setAttribute("data-name", "");
      buttonTeddy.setAttribute("data-price", "");
      buttonTeddy.setAttribute("data-url", "");
      buttonTeddy.innerHTML = "<i class='fas fa-shopping-cart me-2'></i> Ajouter au panier";

    });
}