alert('Programa para calcular la longitud y el area de una circuferencia');

let espa = parseInt(prompt("Ingresar el espacio del proyectil:"));
let tiempo = parseInt(prompt("Ingresar el tie,po del proyectil:"));

let radio = parseInt(prompt("Ingresar el radio de la circuferencia:"));
let velo = (espa*1000)/(tiempo*60);

let longi = 2*Math.PI*radio;
let area = Math.PI*Math.pow(radio,2);

document.getElementById('longi').innerHTML=longi;
document.getElementById('area').innerHTML=area;

document.getElementById('velo').innerHTML=velo;