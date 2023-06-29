let month = prompt('Digita un numero de 1 a 12')
if (month == 0 || 12) {
    console.log('El numero debe ser 1 a 12')
}

let estaciones =  { 
    invierno: "Enero, Febrero, Marzo",
    Primavera : "Abril, Mayo",
    Verano : "Junio, Julio, Agosto",
    Otoño: "Septiembre, Octubre,  Noviembre y Diciembre"

}



const date = ["Jan", "Feb", "Mar", "Apr", "May", "jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]



if (month == 1 ){
    console.log("el mes es ", date[0],", está en inviernoo y tiene 31 dias");
    console.log("Estos meses pertenecen a invierno",estaciones.invierno);
}
    else if (month == 2 ){  
    console.log("el mes es ", date[1],", está en inviernoo y tiene 28 dias");
    console.log("Estos meses pertenecen a invierno", estaciones.invierno);
    }
    else if (month == 3 ){  
        console.log("el mes es ", date[2],", está en inviernoo y tiene 31 dias");
        console.log("Estos meses pertenecen a invierno",estaciones.invierno);
        }
        else if (month == 4 ){  
            console.log("el mes es ", date[3],", está en primavera y tiene 30 dias");
            console.log("Estos meses pertenecen a primavera",estaciones.Primavera);
            }
            else if (month == 5 ){  
                console.log("el mes es ", date[4],", está en primavera y tiene 31 dias");
                console.log("Estos meses pertenecen a primavera",estaciones.Primavera);
                }
                else if (month == 6 ){  
                    console.log("el mes es ", date[5],", está en verano y tiene 30 dias");
                    console.log("Estos meses pertenecen a verano",estaciones.Verano);
                    }
                    else if (month == 7 ){  
                        console.log("el mes es ", date[6],", está en verano y tiene 31 dias");
                        console.log("Estos meses pertenecen a verano",estaciones.Verano);
                        }
                        else if (month == 8 ){  
                            console.log("el mes es ", date[7],", está en verano y tiene 31 dias");
                            console.log("Estos meses pertenecen a verano",estaciones.Verano);
                            }
                            else if (month == 9 ){  
                                console.log("el mes es ", date[8],", está en otoño y tiene 30 dias ");
                                console.log("Estos meses pertenecen a otoño",estaciones.Otoño);
                                }
                                else if (month == 10 ){  
                                    console.log("el mes es ", date[9],", está en otoño y tiene 31 dias ");
                                    console.log("Estos meses pertenecen a otoño",estaciones.Otoño);
                                    }
                                    else if (month == 11 ){  
                                        console.log("el mes es ", date[10],", está en otoño y tiene 30 dias");
                                        console.log("Estos meses pertenecen a otoño",estaciones.Otoño);
                                        }
                                        else if (month == 12 ){  
                                            console.log("el mes es ", date[11],", está en otoño tiene 31 dias y está en navidad");
                                            console.log("Estos meses pertenecen a otoño",estaciones.Otoño);
                                            }





//1:03:00