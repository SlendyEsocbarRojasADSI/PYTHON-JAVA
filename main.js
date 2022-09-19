let iva = parseInt(prompt("Ingresar el iva del producto sin %:"));
let produ = parseInt(prompt("Ingresar el precio del producto:"));
let nom = parseInt(prompt("Ingresar el nombre del empleado:"));
let horas = parseInt(prompt("Ingresar las horas trabajadas por el empleado:"));

let ivaP = produ*(iva/100);
let total = produ+ivaP;
let pagar = horas*15300;

document.getElementById('pagar').innerHTML=total;
document.getElementById('iva').innerHTML=ivaP;

document.getElementById('nom').innerHTML=nom;
document.getElementById('horas').innerHTML=horas;
document.getElementById('pagar').innerHTML=pagar;