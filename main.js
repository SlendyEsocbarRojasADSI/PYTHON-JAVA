let grados = parseInt(prompt("Ingresar los grados en celcius:"));

let descu = totalMed*0.10;
let precioFin = totalMed-descu;

console.log(descu)

document.getElementById('descu').innerHTML=descu;
document.getElementById('precio').innerHTML=precioFin;

let conversion = (grados*9/5)+32;

document.getElementById('conversion').innerHTML=conversion;