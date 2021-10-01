const pregunta = confirm("Desea aplicar el modo oscuro?");

if(pregunta){
    let body = document.querySelector('body');
    body.classList.toggle('dark')
}

function alternarTema() {
    let body = document.querySelector('body');
     body.classList.toggle('dark')
}

// CONSIGNA: obtener el contenedor principa e ir agregando dinamicamente las tarjetas de los felinos.

console.log(listadoFelinos);
let contenedor = document.querySelector('.contenedor');


for(let felino of listadoFelinos) {
  contenedor.innerHTML += 
  `<div class="item">
      <img src= " ${felino.imgUrl} " >
      <h2> ${felino.title} </h2>
      <p>
        ${felino.description}
      </p>
    </div>
` ;

  }





