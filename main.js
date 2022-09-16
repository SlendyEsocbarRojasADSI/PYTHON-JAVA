let num1 = prompt("Ingresar el primer numero:");
let num2 = prompt("Ingresar el segundo numero:");

let sum = parseInt(num1) + parseInt(num2);
let res = parseInt(num1) - parseInt(num2);
let multi = parseInt(num1) * parseInt(num2);
let divi = parseInt(num1) / parseInt(num2);

document.getElementById('sum').innerHTML=sum
document.getElementById('res').innerHTML=res
document.getElementById('multi').innerHTML=multi
document.getElementById('divi').innerHTML=divi