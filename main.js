let lado1 = Number(prompt("Digite el primer laado del rectangulo::"));
let lado2 = Number(prompt("Digite el segundo lado del rectangulo:"));

let num1 = parseInt(prompt("Ingrese el primer numero:"));
let num2 = parseInt(prompt("Ingrese el segundo numero:"));
let num3 = parseInt(prompt("Ingrese el tercer numero:"));
let num4 = parseInt(prompt("Ingrese el cuarto numero:"));

let area = lado1*lado2;
let media = (num1+num2+num3+num4)/4;

document.getElementById('area').innerHTML=area
document.getElementById('media').innerHTML=media