let lado1 = parseInt(prompt("Ingresar el primer lado:"));
let lado2 = parseInt(prompt("Ingresar el segundo lado:"));

alert('Programa para calcular media');
let medi = 0
for(let i=0; i<4; i++){
    let num = parseInt(prompt("Ingresar un numero:"));
    medi = num + medi
}


let area = lado1*lado2;

document.getElementById('medi').innerHTML=medi/4
document.getElementById('area').innerHTML=area