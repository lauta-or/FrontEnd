let confirmaCambios = confirm('Desea elegir un tema oscuro');
if (confirmaCambios){
    let body = document.querySelector('body');
    body.classList.add('dark');
}
