const btnEnviar = document.querySelector('.btnEnviar');
console.log (btnEnviar);

const enc = document.querySelector ('.enc');
console.log (enc);

const parrfo = document.querySelector('.parrfo');
console.log(parrfo);

const btnAbajo = document.querySelector('.btnAbajo');
console.log(btnAbajo);

const segundoTitulo = document.querySelector('.segundoTitulo');
console.log(segundoTitulo);

const parrfo2 = document.querySelector('.parrfo2');
console.log(parrfo2);

const botoncito = document.querySelector('.botoncito');
console.log (botoncito);

const tituloprimero = document.querySelector('#tituloprimero');
console.log (tituloprimero);

const parrafo_abajo = document.querySelector('#parrafo_abajo');
console.log (parrafo_abajo);

btnEnviar.onclick = function() {
    enc.textContent = 'IngCivil';
    parrfo.textContent = 'LoL';
}

btnAbajo.onclick = function()  {
    segundoTitulo.style.backgroundColor = '#fff';
    parrfo2.style.backgroundColor = '#fff';
}

botoncito.onclick = () =>{
    parrafo_abajo.innerHTML = '<p class="alert alert-danger"><strong>ALERTA</strong>-esto es una alerta</p>'
}