let urlImagenes = [];

let imagenes =  document.querySelectorAll('.imagen');

let rutas = document.querySelectorAll("a");

console.log(rutas);

for(let i=0; i<imagenes.length; i++){
    let url = prompt("Ingrese una url de imagen");
    urlImagenes.push(url);
}

for(let i=0; i<urlImagenes.length; i++){
    let nodo = document.querySelector(`#imagen-${i+1}`)
    console.log(nodo.hasAttribute('src'));
    nodo.setAttribute('src',urlImagenes[i]);
        
}

for (let i=0; i<rutas.length; i++){
    let nodo2 = document.querySelector(`#ruta${i+1}`)
    nodo2.setAttribute('href',urlImagenes[i]);
    nodo2.setAttribute('target',"_blank"[i]);
}




