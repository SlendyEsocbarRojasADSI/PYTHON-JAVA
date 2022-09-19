let nom = parseInt(prompt("Ingresar el nombre del empleado:"));
let horas = parseInt(prompt("Ingresar las horas trabajadas por el empleado:"));
let notaF = 0;

for (let i=1; i<=4; i++){
    let nota = parseInt(prompt("Digitar las notas:"));
    nota = nota+notaF;
}

let prome = notaF/4;
let pagar = horas*15300;

document.getElementById('nom').innerHTML=nom;
document.getElementById('horas').innerHTML=horas;
document.getElementById('pagar').innerHTML=pagar;

document.getElementById('prome').innerHTML=prome;