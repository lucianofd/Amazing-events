

/** RECORRE ARRAY E IMPRIME TODOS LOS ELEMENTOS UNO A ALA VEZ  --homee-- */

/*
for ( let i =0 ; i <= data.events.length;  i++ ){
  console.log(data.events[i]);
}

*/

/*dsitribuye EVENTOS ENTRE PROXIMO Y PASADO*/
/*

for (let i = 0; i < data.events.length; i++){  
     
  let base = data.currentDate;
  let eventDate = data.events[i].date;
if (base < eventDate) {
    console.log(`${base} el evento con fecha: ${eventDate} es proximo`);
}
else if (base > eventDate) {
    console.log(`${base} el evento con fecha: ${eventDate} es pasado`);
}
else {
    console.log(`${base} el evento con fecha: ${eventDate} es hoy`);
}

}


/*

function pastEvents(data){
  for (let i = 0; i <= datos.length; i++){
    if (base > data.events.date) {
      console.log(`${base} el evento con fecha: ${eventDate} es pasado`);
  }
  

  }

}
*/

//Acceso info eventos
const datos = data.events;


// Obtener contenedor de las cards

/*
// Cargar cards dinámicamente
datos.forEach((item) => {
  
  //Captura el elemento card
  const card = document.getElementById('card-ev');

  // imagen de la card
  const img = document.getElementById("img");
  img.src = item.image;
  img.alt = "Card image cap";
  
  // cuerpo de la card
  const cardBody = document.getElementById("card-body");
 
  //  título de la card
  const title = document.getElementById("title");
  title.textContent = item.name;
 

  //  texto de la card
  const text = document.getElementById("desc");
  text.textContent = item.description;

  //  precio de la card
  const price = document.getElementById("price");
  price.textContent = "Price: $" + item.price;
  
  //  botón de la card
  const button = document.getElementsByClassName("btn btn-primary");
  button.href = "Details.html";
  button.textContent = "Saber Más!";

});

*/

const fragment = document.createDocumentFragment();
// Crear las cards dinámicamente-----CREA PERO NO MODIFICA LAS EXISTENTES----
datos.forEach((item) => {
  // Crear card
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.width = "18rem";

  // Agregar imagen de la card
  const img = document.createElement("img");
  img.src = item.image;
  img.classList.add("card-img-top");
  img.alt = "Card image cap";
  card.appendChild(img);

  // Crear cuerpo de la card
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // Crear título de la card
  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = item.name;
  cardBody.appendChild(title);

  // Crear  texto de la card
  const text = document.createElement("p");
  text.classList.add("card-text");
  text.textContent = item.description;
  cardBody.appendChild(text);

  // Crear precio de la card
  const price = document.createElement("span");
  price.textContent = "Price: $" + item.price;
  cardBody.appendChild(price);

  // Crear botón de la card
  const button = document.createElement("a");
  button.href = "Details.html";
  button.classList.add("btn", "btn-primary");
  button.textContent = "Saber Más!";
  cardBody.appendChild(button);

  // Añadir  body al elemento card
  card.appendChild(cardBody);

  // Añadir la card al contenedor
  fragment.appendChild(card);
});
const cardsContainer = document.getElementById("main-h");
cardsContainer.appendChild(fragment)