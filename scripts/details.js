let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"
let datosObt = [];
const datos = async ()=>{
   try{
     const response = await fetch(urlApi)
     const info = await response.json()
     datosObt = info.events;
   }
   catch(error){
     console.log(error);
   }
 }
const queryString = location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
const eventShow = (unEvento)=>{

 const div = document.querySelector('#det-card');
  if(unEvento){
   const eventDetails = `<div class=col-6>
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
    </div>` ;

    div.innerHTML = eventDetails;
  } else {
   div.innerHTML = `<p> Evento no encontrado</p>`
   }
} 

// llamada datos asinc(aseguro q se cargue datosObt)
datos().then(() => {
  const unEvento = datosObt.find(e => e._id == id);
  eventShow(unEvento);
});

