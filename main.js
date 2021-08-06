const http = require("http");

const server = http.createServer(function(req, res) {

  // A l'arrivée d'une requête
  res.write("Hello World!");
  res.end();
})

// Lancer le serveur
server.listen(3000)

fetch('http://localhost:3000/api/teddies');


//Validation formulaire 
(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

