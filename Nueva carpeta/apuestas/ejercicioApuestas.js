// let bank = 5000
// let number = prompt("Which number you want to bet?")



// var numeroAleatorio = Math.floor(Math.random() * 10) + 1;

// console.log(numeroAleatorio)

// let bet = prompt("Place your bet")
    
// if (bet > 5000 ) { 
//         console.log("You can't bet more than 5000")
//     }

//     else if (number === numeroAleatorio) {
//      number*= 3;
//      console.log("¡Has acertado! El número seleccionado se ha multiplicado por 3 tu apuesta. Resultado: " + numeroSeleccionado);
//     }
//     else {
//         var resta = bank - bet;
//         console.log("No has acertado. Se ha restado el monto apostado. Resultado: " + resta);
//     }

var saldo = 5000; // Saldo inicial

while (saldo > 0) {
  let apuesta = parseInt(prompt("Elige una cantidad para apostar (saldo actual: " + saldo + "):")); // Solicita al usuario que ingrese una cantidad para apostar
  if (apuesta > saldo) {
    console.log("No tienes saldo suficiente para hacer esa apuesta.");
    continue; // Salta a la siguiente iteración del bucle
  }
  
let numeroSeleccionado = parseInt(prompt("Elige un número del 1 al 10:")); // Solicita al usuario que ingrese un número y lo convierte en entero

 let numeroAleatorio = Math.floor(Math.random() * 10) + 1; // Genera un número aleatorio del 1 al 10

  console.log("Número aleatorio: " + numeroAleatorio);

  if (numeroSeleccionado === numeroAleatorio) {
    let ganancia = apuesta * 3; // Cálculo de la ganancia si el número seleccionado coincide con el número aleatorio
    saldo += ganancia; // Actualización del saldo con la ganancia
    alert("¡Has acertado! Ganaste " + ganancia + ". Saldo actual: " + saldo);
  } else {
    saldo -= apuesta; // Actualización del saldo al perder la apuesta
    alert("No has acertado. Perdiste " + apuesta + ". Saldo actual: " + saldo);
  }
}

console.log("Te has quedado sin saldo. El juego ha terminado.");












    
         


