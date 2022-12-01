// remover duplicados y quitarlos permanentemente
const d = [];
const arr = [1,3,2,4,1,3,2]
arr.forEach((e) => { 
  if (arr.filter(x => x == e).length === 1) {    
    d.push(e);    
  }   
}) 

console.log(d);



// remover duplicados y dejar solo una vesion
const colores = [
    'rojo',
    'azul',
    'verde',
    'morado',
    'rojo'
]

const anios = [
    2021,
    2022,
    1984,
    1987,
    1999,
    2022
]

// creamos un operador Spread y un nuevo Set
const coloresUnicos = [...new Set(colores)];
const aniosUnicos = [...new Set(anios)];

console.log(coloresUnicos);
console.log(aniosUnicos);