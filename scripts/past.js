//Acceso info eventos
const datos = data.events;
let base = data.currentDate;
const pastEvent = datos.filter(event => event.date < base);

const fragment = document.createDocumentFragment();

pastEvent.forEach((item) => {
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

//evitar reflow-- guardo la iteracion en fragment,(una vez finaliza iteracion)agrego al DOM.
const cardsContainer = document.getElementById("main-h");
cardsContainer.appendChild(fragment)



/*
const pastEvent =Array[0];

function pastEvents(){
  for (let i = 0; i <= datos.length; i++){
    if (base > events.date) {
      console.log(`${base} el evento con fecha: ${eventDate} es pasado`);
  }
  

  }

}
*/
