const cardsContainer = document.getElementById('containerDetails')


let eventos = data.events

createCards(eventos)

 cards = ''

 function createCards(n1){

    for (const event of n1) {
     
      cards += `<div class="card ">
      <img src="${event}" alt="..." ">
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
     return(cards)
 }
  

//     cardsContainer.innerHTML = cards
