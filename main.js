let radio = parseInt(prompt("Ingresar el radio de la esfera:"));

let a = parseInt(prompt("Ingresar el valor de A:"));
let b = parseInt(prompt("Ingresar el valor de B:"));
let c = parseInt(prompt("Ingresar el valor de C:"));

let volu = 4/3*Math.PI*radio**3;
let total = (a+7*c)/(b+2-a)+2*b;

document.getElementById('volu').innerHTML=volu;
document.getElementById('expre').innerHTML=total