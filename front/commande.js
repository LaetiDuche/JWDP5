//Fonction pour le message de validation de commande

body();
function body() {
  messageValidation();
  
}


function messageValidation(){
  let message = document.getElementById('confirm-message');

  let confirmId = document.createElement('p');
  message.appendChild(confirmId);
  confirmId.classList.add('col-12', 'bg-white', 'p-2', 'rounded-3', 'my-2', 'text-center');
  confirmId.innerHTML = "Votre commande n° ";

  let getId = document.createElement('span');
  confirmId.appendChild(getId);
  getId.setAttribute('id', 'orderId');
  
  let confirmPrice = document.createElement('p');
  confirmId.appendChild(confirmPrice);
  confirmPrice.innerHTML = "au prix de "  ;
  
  let getTotal = document.createElement('span');
  confirmId.appendChild(getTotal);
  getTotal.setAttribute('id', 'subtotal');
  document.getElementById('subtotal').textContent = + ' €';

  let succes = document.createElement('p');
  confirmId.appendChild(succes);
  succes.innerHTML = "a été envoyé avec succés! <br> Merci pour votre commande !";
  
 
}

