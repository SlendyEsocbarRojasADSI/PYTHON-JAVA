let notaF = 0;

for (let i=1; i<=4; i++){
    let nota = parseInt(prompt("Digitar las notas:"));
    nota = nota+notaF;
}

let prome = notaF/4;
let sueldo = parseInt(prompt("Ingresar el sueldo del empleado:"));
let venta1 = parseInt(prompt("Ingresar el precio de la venta 1:"));
let venta2 = parseInt(prompt("Ingresar el precio de la venta 2:"));
let venta3 = parseInt(prompt("Ingresar el precio de la venta 3:"));

document.getElementById('prome').innerHTML=prome;

let comi1 = venta1*0.10;
let comi2 = venta2*0.10;
let comi3 = venta3*0.10;

let sueldoTotal = sueldo+comi1+comi2+comi3;

document.getElementById('comi1').innerHTML=comi1;
document.getElementById('comi2').innerHTML=comi2;
document.getElementById('comi3').innerHTML=comi3;

document.getElementById('sueldo').innerHTML=sueldoTotal;