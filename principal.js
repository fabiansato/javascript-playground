
//
// Obtener datos de los minutos y transformarlos en segundos
//

// var tiempo = '05:39'; // para testear el tiempo
var tiempo = document.getElementsByClassName("mpc-controls__elapsed-time"); // guardamos la clase que tiene el tiempo en un objeto HTMLCollection


tiempo = tiempo[0].textContent; // pasamos el contenido del texto con el nombre en la misma variable de tiempo



const miArray = tiempo.split(":"); // separamos en un array el contenido de los minutos y segundos


var minutos = parseInt(miArray[0]);  // guardamos los minutos en variable en de miarray transformandolo primero en un entero

var segundos = parseInt(miArray[1]);  // guardamos los minutos en variable en de segundos transformandolo primero en un entero
var totalTiempoSegundos = (minutos * 60) + (segundos);

console.log(totalTiempoSegundos);