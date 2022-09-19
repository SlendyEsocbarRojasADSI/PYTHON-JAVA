let grados = parseInt(prompt("Ingresar los grados en celcius:"));
let parcial1 = parseInt(prompt("Ingresar la nota del parcial 1:"));
let parcial2 = parseInt(prompt("Ingresar la nota del parcial 2:"));
let parcial3 = parseInt(prompt("Ingresar la nota del parcial 3:"));
let examenF = parseInt(prompt("Ingresar la nota del examen final:"));
let trabajoF = parseInt(prompt("Ingresar la nota del trabajo final:"));

let iva = parseInt(prompt("Ingresar el iva del producto sin %:"));
let produ = parseInt(prompt("Ingresar el precio del producto:"));

let nota = (((parcial1+parcial2+parcial3)/3)*0.55)+(examenF*0.3)+(trabajoF*0.15);
let ivaP = produ*(iva/100);
let total = produ+ivaP;

document.getElementById('nota').innerHTML=nota;
document.getElementById('pagar').innerHTML=total;
document.getElementById('iva').innerHTML=ivaP;