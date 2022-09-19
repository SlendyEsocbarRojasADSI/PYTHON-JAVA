const x = 3;

let a = parseInt(prompt("Ingresar un valor para a:"));
let b = parseInt(prompt("Ingresar un valor para b:"));
let c = parseInt(prompt("Ingresar un valor para c:"));

let raiz = a*x**2+b*x+caches;
let volu = (4/3)*Math.PI*a*b*c;

document.getElementById('volu').innerHTML=volu;
document.getElementById('raiz').innerHTML=raiz;