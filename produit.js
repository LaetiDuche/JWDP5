fetch('http://localhost:3000/api/teddies')
  .then((response) => response.json())
  .then(response => console.log(response))
  .catch(error => {
    console.log(error)
  });