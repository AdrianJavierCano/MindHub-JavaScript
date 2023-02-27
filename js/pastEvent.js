const cardsContainer = document.getElementById('contenedorTarjetas')

const currentDate = data.currentDate

let cards = []

   for (const event of data.events) {
    
    if (currentDate > event.date){
     cards += `<div class="card ">
     <img src="${event.image}" alt="..." ">
     <div class="card-body">
      <h5 class="card-title">${event.name}</h5>
      <p class="card-text">${event.description}</p>
      </div>
      <div class="card-footer">
      <small class="text-muted">Price: $${event.price}</small>
      <a href="#" class="btn">Buy</a>
      </div>
      </div>`
      }
   

    }
    
    cardsContainer.innerHTML = cards