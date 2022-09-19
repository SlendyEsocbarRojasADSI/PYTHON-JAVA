let base = parseInt(prompt("Ingresar la base del rectangulo:"));
let altu = parseInt(prompt("Ingresar la altura del triangulo:"));

alert('Programa para calcular la longitud y el area de una circuferencia');

let area = (base*altu)/2
let radio = parseInt(prompt("Ingresar el radio de la circuferencia:"));

let longi = 2*Math.PI*radio;
let are = Math.PI*Math.pow(radio,2);

document.getElementById('longi').innerHTML=longi;
document.getElementById('area').innerHTML=area;
document.getElementById('are').innerHTML=are