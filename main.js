let radio = parseInt(prompt("Ingresar el radio del cilindro:"));
let altu = parseInt(prompt("Ingresar la altura del cilindro:"));
const x = 3;

let volu = (Math.PI*radio**2)*altu;
let area = (2*(Math.PI*radio**2))+((2*Math.PI*radio)*altu);

let a = parseInt(prompt("Ingresar un valor para a:"));
let b = parseInt(prompt("Ingresar un valor para b:"));
let c = parseInt(prompt("Ingresar un valor para c:"));

document.getElementById('volu').innerHTML=volu;
document.getElementById('area').innerHTML=area;
let raiz = a*x**2+b*x+caches;

document.getElementById('raiz').innerHTML=raiz;