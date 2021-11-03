//-----------------MESSAGE DE VALIDATION DE COMMANDE

body();
function body() {
  messageValidation()

}


let localPanier = JSON.parse(localStorage.getItem("Total", "orderId"));

function messageValidation() {
  /* let params = new URL(document.location).searchParams;
  let orderid = params.get("orderId");
  let total = params.get("total"); */
  let localPanier = JSON.parse(localStorage.getItem("Total", "orderId"));
  const total = insertTotal;

  let message = document.getElementById('confirm-message');
 
  let confirmId = document.createElement('p');
  message.appendChild(confirmId);
  confirmId.classList.add('col-12', 'bg-white', 'p-2', 'rounded-3', 'my-2', 'text-center');
  confirmId.innerHTML = `Votre commande n° ${orderid} , </br> au prix de ${total} € , a été envoyée avec succés! </br></br> Merci pour votre commande !`;

}

