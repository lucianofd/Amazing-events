
const datos = data.events;

const queryString = location.search;

const params = new URLSearchParams(queryString);

const id = params.get('id');

const unEvento = datos.find(e => e._id == id);
console.log(unEvento);
const div = document.querySelector('#det-card');
 div.innerHTML =`<div class=col-6>
    <img id="det-img" src="${unEvento.image}" class="card-img-top" alt="...">
    </div>
    
    <div id="det-card-tx" class="col-6">
    
    <h5 class="card-title">${unEvento.name}</h5>
    <p class="card-text">${unEvento.description}</p>
    <span>Price: $${unEvento.price}</span>
    <div>
    <p><i class="bi bi-calendar-check-fill"></i>
    Event date: ${unEvento.date}</p>
    <p><i class="fas fa-map-marker-alt"></i>
    Event Place: ${unEvento.place}</p>
    </div>
    <a href="javascript:history.back(-1)"; title="volver" class="btn btn-primary">Volver</a>
    </div>`
  


