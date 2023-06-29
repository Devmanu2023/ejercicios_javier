// BIENVENIDA CON ALERT
alert("BIENVENIDO A TU BOLETÍN ADSO 2556678 - CALIFICACIÓN DE 1 A 5");
console.log(`---------- ////////// ----------`);


// ESTUDIANTE 1 & NOTAS
let est1 = prompt("DIGITA TU NOMBRE");
let not1 = Number.parseFloat(prompt("NOTA 1"));
let not2 = Number.parseFloat(prompt("NOTA 2"));
let not3 = Number.parseFloat(prompt("NOTA 3"));


// ESTUDIANTE 2 & NOTAS
let est2 =  prompt("DIGITA TU NOMBRE");
let nota1 = Number.parseFloat(prompt("NOTA 1"));
let nota2 = Number.parseFloat(prompt("NOTA 2"));
let nota3 = Number.parseFloat(prompt("NOTA 3"));


// ESTUDIANTE 3 & NOTAS
let est3 = prompt("DIGITA TU NOMBRE");
let notta1 = Number.parseFloat(prompt("NOTA 1"));
let notta2 = Number.parseFloat(prompt("NOTA 2"));
let notta3 = Number.parseFloat(prompt("NOTA 3"));





// NOTAS DEL ESTUDIANTE 1
console.log(`ESTE ES EL BOLETÍN DEL ESTUDIANTE ${est1}`);
console.log(`La 1er nota del estudiante ${est1} es  ${not1}`);
console.log(`La 2da nota del estudiante ${est1} es  ${not2}`);
console.log(`La 3er nota del estudiante ${est1} es  ${not3}`);


// NOTA FINAL ESTUDIANTE 1
let notap1 = not1 * 0.2;
let notap2 = not2 * 0.2;
let notap3 = not3 * 0.6;
let notaf1 = notap1 + notap2 + notap3;
console.log(`La nota final del estudiante ${est1} es ${notaf1}`);
console.log(`---------- ////////// ----------`);





// NOTAS DEL ESTUDIANTE 2
console.log(`ESTE ES EL BOLETÍN DEL ESTUDIANTE ${est2}`);
console.log(`La 1er nota del estudiante ${est2} es  ${nota1}`);
console.log(`La 2da nota del estudiante ${est2} es  ${nota2}`);
console.log(`La 3er nota del estudiante ${est2} es  ${nota3}`);


// NOTA FINAL ESTUDIANTE 2
let notapp1 = nota1 * 0.2;
let notapp2 = nota2 * 0.2;
let notapp3 = nota3 * 0.6;
let notaf2 = notapp1 + notapp2 + notapp3;
console.log(`La nota final del estudiante ${est2} es ${notaf2}`);
console.log(typeof(notaf2));
console.log(`---------- ////////// ----------`);





// NOTAS DEL ESTUDIANTE 3
console.log(`ESTE ES EL BOLETÍN DEL ESTUDIANTE ${est3}`);
console.log(`La 1er nota del estudiante ${est3} es  ${notta1}`);
console.log(`La 2da nota del estudiante ${est3} es  ${notta2}`);
console.log(`La 3er nota del estudiante ${est3} es  ${notta3}`);


// NOTA FINAL ESTUDIANTE 3
let notappp1 = notta1 * 0.2;
let notappp2 = notta2 * 0.2;
let notappp3 = notta3 * 0.6;
let notaf3 = notappp1 + notappp2 + notappp3;
console.log(`La nota final del estudiante ${est3} es ${notaf3}`);





