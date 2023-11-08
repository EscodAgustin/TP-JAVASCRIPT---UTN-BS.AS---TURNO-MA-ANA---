// EJERCICIOS NIVEL INTERMEDIO

// 1) VERIFICAR SI ES NUMERO PRIMO

let numeroPrimo = 7;
let esNumeroPrimo = true;

for(let i = 2; i < numeroPrimo/2; i++){

    if(numeroPrimo % i === 0){
        esNumeroPrimo = false;
    }
}

if(esNumeroPrimo){
    console.log("Es numero primo")
}else{
    console.log("No es numero primo")
}

// 2) OPERACIONES DE MATRIZ

function suma(a, b){
    return a + b;
}

const resultado = suma(25, 37);
    console.log(resultado); 


// 3) SUMA DE NUNMEROS EN UN RANGO

function sumaEnRango(){
    let rango = 0;
    for (let i = 1; i <= 50; i++){
        rango += i;
    }
    return rango;
}

console.log(sumaEnRango());

// 4) CONTAR VOCALES

function contarVocales(cadena){
    cadena = cadena.toLowerCase();

    let contador = 0

    for (let i = 0; i < cadena.length; i++){
        const caracter = cadena[i];

        if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u'){
            contador++;
          }
    }
    return contador;
}

console.log(contarVocales("Agustin intenta aprender y practicar JavaScript"));


// 5) DEVUELVE UNA MATRIZ CON ELEMENTOS UNICOS

function obtenerElementosUnicos(matriz) {
    let elementosUnicos = [];

    matriz.forEach(function(elemento) {
        
      if (!elementosUnicos.includes(elemento)) {
        elementosUnicos.push(elemento);
      }
    });
    return elementosUnicos;
  }

  const matrizOriginal = ["Sofia", "Maria", "Pedro", "Sofia"];

  const matrizUnica = obtenerElementosUnicos(matrizOriginal);
  console.log(matrizUnica);

// 6) CADENA DE TEXTO SIN USAR REVERSE() 

    function invertirCadena(cadena) {
        let resultado = '';
        for (const caracter of cadena) {
        resultado = caracter + resultado;
        }
        return resultado;
  }

  console.log(invertirCadena("Agustin intenta aprender y practicar JavaScript"));


// INTERACCIONES CON EL DOM 

// 1) CARROUSELL


const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const carrousel = document.querySelector('.carrousel');
const imagenes = document.querySelectorAll('.carrousel img');

let currentIndex = 0;

function showImagen(index) {
  imagenes.forEach((imagen, i) => {
    if (i === index) {
      imagen.style.display = 'block';
    } else {
      imagen.style.display = 'none';
    }
  });
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
  showImagen(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % imagenes.length;
  showImagen(currentIndex);
});

showImagen(currentIndex);
  
// 2) TEXTO MAS GRANDE 

const textoElement = document.getElementById('texto');
const aumentarButton = document.getElementById('aumentar');
const disminuirButton = document.getElementById('disminuir');

function cambiarTamañoTexto(incremento) {
  const tamañoActual = window.getComputedStyle(textoElement, null).getPropertyValue('font-size');
  const tamañoNuevo = (parseFloat(tamañoActual) + incremento) + 'px';
  textoElement.style.fontSize = tamañoNuevo;
}

aumentarButton.addEventListener('click', () => {
  cambiarTamañoTexto(7); 
});

disminuirButton.addEventListener('click', () => {
  cambiarTamañoTexto(-7); 
});

// 3) Tarjetas clickeables

const tarjetas = document.querySelectorAll('.tarjeta');

tarjetas.forEach((tarjeta) => {
  const botonExpandir = tarjeta.querySelector('.expandir');
  const detalles = tarjeta.querySelector('.detalles');

  botonExpandir.addEventListener('click', () => {
    if (detalles.style.display === 'none' || detalles.style.display === '') {
      detalles.style.display = 'block';
      botonExpandir.textContent = 'Contraer';
    } else {
      detalles.style.display = 'none';
      botonExpandir.textContent = 'Expandir';
    }
  });
});
