let grados = parseInt(prompt("Ingresar los grados en celcius:"));
let parcial1 = parseInt(prompt("Ingresar la nota del parcial 1:"));
let parcial2 = parseInt(prompt("Ingresar la nota del parcial 2:"));
let parcial3 = parseInt(prompt("Ingresar la nota del parcial 3:"));
let examenF = parseInt(prompt("Ingresar la nota del examen final:"));
let trabajoF = parseInt(prompt("Ingresar la nota del trabajo final:"));

let conversion = (grados*9/5)+32;
let nota = (((parcial1+parcial2+parcial3)/3)*0.55)+(examenF*0.3)+(trabajoF*0.15);

document.getElementById('conversion').innerHTML=conversion;
document.getElementById('nota').innerHTML=nota;