const cardsContainer = document.getElementById('contenedorTarjetas')

let cards = ''

   for (const event of data.events) {
     
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
 
    
  

    cardsContainer.innerHTML = cards

    //No pude hacerlo dentro de una funcion nunca me funciono, no me lo tomaba como un objeto
    