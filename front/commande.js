//-----------------MESSAGE DE VALIDATION DE COMMANDE

//Insertion dans le DOM
body();
function body() {
  messageValidation()
}

function messageValidation() {

  //Récupération du Total et de l'orderId dans le localstorage
  let orderId = localStorage.getItem("orderId");
  let Total = localStorage.getItem("Total");

  //Insertion du Total et de l'orderId dans le message
  let message = document.getElementById('confirm-message');

  let confirmId = document.createElement('p');
  message.appendChild(confirmId);
  confirmId.classList.add('col-12', 'bg-white', 'p-2', 'rounded-3', 'my-2', 'text-center');
  confirmId.innerHTML = `<strong>Merci pour votre commande !</strong></br></br>Votre commande n° <strong>${orderId}</strong> , </br> d'un montant total de <strong>${Total} </strong>, a été envoyée avec succés! </br></br> A bientôt sur Orinours !`;
}