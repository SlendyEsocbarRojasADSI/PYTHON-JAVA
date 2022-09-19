const precioMin = 355;

let velo = Number(prompt("Digite la velocidad del automovil en km/h:"));

let minu = Number(prompt("Ingresar la cantidad de minutos gastados en la llamada:"));
let resul = velo*(1000)*(1/3600);

let pagosIva = minu*precioMin;

let iva = (precioMin*0.20)
let pagoTo = pagosIva+iva;

document.getElementById('pagoTo').innerHTML=pagoTo;