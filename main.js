let radio = parseInt(prompt("Ingresar el radio del cilindro:"));
let altu = parseInt(prompt("Ingresar la altura del cilindro:"));

let volu = (Math.PI*radio**2)*altu;
let area = (2*(Math.PI*radio**2))+((2*Math.PI*radio)*altu);

document.getElementById('volu').innerHTML=volu;
document.getElementById('area').innerHTML=area;