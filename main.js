let a = parseInt(prompt("Ingresar un valor para a:"));
let b = parseInt(prompt("Ingresar un valor para b:"));
let c = parseInt(prompt("Ingresar un valor para c:"));
const precioMin = 355;

let raiz = parseInt(prompt("Ingresar la cantidad de minutos hablados:"));
let volu = (4/3)*Math.PI*a*b*c;

document.getElementById('volu').innerHTML=volu;

let pagar = minuto*precioMin+((minuto*precioMin)*0.2);

document.getElementById('pagar').innerHTML=pagar;