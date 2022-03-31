var edad = prompt("bienvenido al ranas! ¿cuantos años tienes?");
    var ine = prompt ("! ¿Traes tu Ine?");
   
    if (edad >= 18) {
        document.write(" Bienvenido.");
        
    } else{
        document.write(" No hay servicio ya .");
    }
switch (ine) {
    case "si":
        document.write("> son 50 de cover!")
        break;
    case "no":
        document.write(">No hay servicio");
        break;
    default:
        document.write(">opcion no valida");
        break;
};
