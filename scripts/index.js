/** RECORRE ARRAY E IMPRIME TODOS LOS ELEMENTOS  --homee-- */

//Acceso info evento
let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"
  

 const datos = async ()=>{
   
  try{
    const response = await fetch(urlApi)
    const info = await response.json()
    datosO = info.events;
    console.log(datosO)
    crearCard(datosO);
    filterData(datosO)
    
  }
  catch(error){
    console.log(error);
  }

}



const crearCard=(eventData)=>{
  const fragment = document.createDocumentFragment();

  eventData.forEach((item) => {
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
  button.href = `details.html?id=${item._id}`;
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

 }

/*-------------------------------------------------------------------------------------*/


/////------------------PROBANDO-----------------------
const filterData =(eventData)=> {
  const cardsContainer = document.getElementById("main-h");
  const checkBoxes = document.querySelectorAll('input[type="checkBox"]') ;
  const searchTerm = document.querySelector('form[role="search"]');
  

 
  checkBoxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      filterEvent();
    });
  });
  //obtener los valores seleccionados en los checkboxes
  function getSelectedValues() {
    return Array.from(checkBoxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value.toLowerCase());
  }

  function filterEvent() {
    const selectValue = getSelectedValues();
    const searchInp = searchTerm.querySelector('input[type="search"]').value.toLowerCase();

    let filteredData = eventData.filter(item => {
      const categoryMatch = selectValue.length === 0 || selectValue.some(val => item.category.toLowerCase().includes(val));
      const searchMatch = !searchInp || item.name.toLowerCase().includes(searchInp) || item.description.toLowerCase().includes(searchInp);
      return categoryMatch && searchMatch;
    });

    if (filteredData.length > 0) {
      while (cardsContainer.firstChild) {
        cardsContainer.removeChild(cardsContainer.firstChild);
      }
      crearCard(filteredData);
    } else {
      window.alert("No hay elementos que coincidan. Intente otra búsqueda.");
    }
  }
  // Asignar evento "submit" al formulario de búsqueda
  searchTerm.addEventListener('submit', event => {
    event.preventDefault();
    filterEvent();
  });
  
}

datos();
//filterData();

/*
//barra busqueda v2
const d = document;
function searchFilter(input, selector ){
  d.addEventListener("keyup",(e)=>{
    if(e.target.matches(input)){
      console.log(e.key);
      console.log(e.target.value);
    }
  })
};

searchFilter("d-flex", ".card");
*/
/*
- detalles
-limpiar selectores al volver de detail/o volver a la seleccion
-recargar ruta/filtro al limpiar barra search(el search recarda todo sobre la ruta en que este)
-quitar srcoll lateral en vistas con card
-ver footer de detail
-reubicar btn volver en detail

*/