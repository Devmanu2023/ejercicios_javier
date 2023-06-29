// ALERTA DE BIENVENIDA
alert("BIENVENIDO AL BORRADOR DEL PROYECTO ConfiApp");





// *** DATOS DEL TUTOR *** //

alert("LOS SIGUIENTES DATOS SON DEL TUTOR");
console.log("REGISTRO DEL TUTOR");
console.log("---------- ********** ----------");

const Tutor = {
    TipoDocumento: prompt("DIGITA TU TIPO DE DOCUMENTO"),
    Identificación: prompt ("DIGITA TU DOCUMENTO"),
    NombreT: prompt ("DIGITA TU NOMBRE"),
    Apellido: prompt ("DIGITA TU APELLIDO"),
    Celular : prompt ("DIGITA TU CELULAR"),
    correo: prompt ("DIGITA TU CORREO"),
    dirección: prompt ("DIGITA TU DIRECCIÓN"),
}
console.log(Tutor);





// *** DATOS DEL MENOR *** //

alert("LOS SIGUIENTES DATOS SON DEL MENOR");
console.log("REGISTRO DEL MENOR");
console.log("---------- ********** ----------");

const Menor = {
    TipoDocumento: prompt("DIGITA TU TIPO DE DOCUMENTO"),
    Identificación: prompt ("DIGITA TU NÚMERO DE DOCUMENTO"),
    NombreM: prompt ("DIGITA TU NOMBRE"),
    Apellido: prompt ("DIGITA TU APELLIDO"),
    Colegio: prompt ("DIGITA TU COLEGIO DONDE ESTUDIAS"),
    Edad: prompt ("DIGITA TU EDAD"),
}
console.log(Menor);


// *** DATOS DE LA RUTA *** //

alert("LOS SIGUIENTES DATOS SON DE LA RUTA");
console.log("REGISTRO DE LA RUTA");
console.log("---------- ********** ----------");

const Ruta = {
    Fecha: prompt ("DIGITA LA FECHA"),
    Lugar_Origen: prompt ("DIGITA LUGAR DE TU ORIGEN"),
    Lugar_Destino: prompt ("DIGITA LUGAR DE TU DESTINO"),
    Transporte: prompt ("DIGITA TU TRANSPORTE"), 
}


let H_Inicio = Number.parseInt(prompt ("DIGITA LA HORA DE INICIO DE LA RUTA"));
let H_Fin = Number.parseInt(prompt ("DIGITA LA HORA DEL FINAL DE TU RUTA"));

let duracion2 = (H_Fin - H_Inicio );
Ruta.duracion = {duracion2};
console.log(Ruta);



const M_R = Object.assign(Menor,Ruta);
const T_M = Object.assign(Tutor,M_R);
console.log(T_M);
console.log(`La duracion del viaje ${Menor.NombreM} fue de ${duracion2} horas`)