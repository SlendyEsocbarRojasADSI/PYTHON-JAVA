let espa = parseInt(prompt("Ingresar el espacio del proyectil:"));
let tiempo = parseInt(prompt("Ingresar el tiempo del proyectil:"));
let radio = parseInt(prompt("Ingresar el radio de la esfera:"));

let velo = (espa*1000)/(tiempo*60);
let volu = 4/3*Math.PI*radio**3;

document.getElementById('velo').innerHTML=velo;

document.getElementById('volu').innerHTML=volu;