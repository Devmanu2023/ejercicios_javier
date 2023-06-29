alert ("BIENVENIDO A LA TIENDA - M & D - A D S O ");

 let NombreApellido = prompt("DIGITA TU NOMBRE Y APELLIDO");



// PRODUCTOS

let prod1= prompt ("DIGITA NOMBRE DEL 1ER PRODUCTO");

let val1 = prompt ("Valor");

let prod2= prompt ("DIGITA NOMBRE DEL 2DO PRODUCTO");

let val2 = prompt ("Valor");

let prod3= prompt ("DIGITA NOMBRE DEL 3ER PRODUCTO");

let val3 = prompt ("Valor");

let prod4= prompt ("DIGITA NOMBRE DEL 4TO PRODUCTO");

let val4 = prompt ("Valor");

// NOMBRE DE LOS PRODUCTOS EN LA FACTURA

console.log(prod1 , "y su precio es ", Number.parseInt (val1));

console.log(prod2 , "y su precio es ", Number.parseInt (val2));

console.log(prod3 , "y su precio es ", Number.parseInt (val3));

console.log(prod4 , "y su precio es ", Number.parseInt (val4));



// SACAR EN CONSOLA O ALERT

let subtotal = Number.parseInt(val1) + Number.parseInt(val2) + Number.parseInt(val3) + Number.parseInt(val4);
console.log(`El subtotal de la factura es ${subtotal}`);

let iva = subtotal * 0.19;
console.log(`El iva de la facura es ${iva}`);

let descuento = subtotal * 0.10;
console.log(`El descuento de la factura es ${descuento}`);






let total = subtotal + iva - descuento;

console.log(`El total de la factura de ${NombreApellido} es de ${total}`);


