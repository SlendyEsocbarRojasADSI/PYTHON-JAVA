alert('Programa para calcular media');

let medi=0
for (let i=0;i<4;i++){
    let num = parseInt(prompt("Ingresar la base del triangulo:"));
    medi = num+ medi;
}

let base = parseInt(prompt("Ingrese la base del triangulo:"));
let altu = parseInt(prompt("Ingresar la altura del triangulo:"));

document.getElementById('medi').innerHTML=medi/4

let area = (base*altu)/2;

document.getElementById('area').innerHTML=area;