let cantiMed = parseInt(prompt("Ingresar la cantidad de medicamentos:"));
let totalMed=0;

for (let i=0; i<cantiMed; i++){
    let precioMed = parseInt(prompt("Ingresar el precio del producto ${i+1}"));
    totalMed = precioMed+totalMed;
}

let minu = parseInt(prompt("Ingresar la cantidad de minutos hablados:"));
let pagar = minu*precioMed+((minu*precioMed)*0.2);

document.getElementById('pagar').innerHTML=pagar;

let descu = totalMed*0.10;
let precioFin = totalMed-descu;
console.log(descu)

document.getElementById('precio').innerHTML=precioFin;
document.getElementById('descu').innerHTML=descu;