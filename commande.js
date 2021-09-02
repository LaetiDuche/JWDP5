//Fonction pour le message de validation de commande

body();
function body() {
  messageValidation();
}

function messageValidation(){
  var message = document.getElementById('confirm-message');

  var confirm = document.createElement('h2');
  message.appendChild(confirm);
  confirm.classList.add('col-12', 'bg-white', 'p-4', 'rounded-3', 'my-2', 'text-center');
  confirm.innerHTML = "Votre commande a été envoyé avec succés ! <br> <br> Merci pour votre commande !";
  




}