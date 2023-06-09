fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        const cardDeck = document.getElementById('card-deck');
        const cardsHTML = data.map(item => `
      <div class="col-md-4 mt-3 p-2">
        <div class="card p-3">
          <img src="${item.image}" class="card-img-top" alt="Card Image">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.price}</p>
          </div>
        </div>
      </div>
    `).join('');

        cardDeck.innerHTML = cardsHTML;
    })
    .catch(error => {
        console.log('Error:', error);
    });