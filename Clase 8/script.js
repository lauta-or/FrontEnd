let main = document.querySelector('main');

for (let item of listaNoticias) {
    if(item.tipoNacional){
    main.innerHTML += `<div class="nacional">
    <img src="${item.imgUrl}">
    <h2>${item.titulo}</h2>
    <p>
      ${item.descripcion}
    </p>
  </div>`
    }else{
        main.innerHTML += `<div class="internacional">
          <img src="${item.imgUrl}">
          <h2>${item.titulo}</h2>
          <p>
            ${item.descripcion}
          </p>
        </div>`
  
}}
