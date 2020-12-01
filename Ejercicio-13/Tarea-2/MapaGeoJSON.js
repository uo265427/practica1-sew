


class Ejercicio12{
    constructor(){
        var contador = 1;

        if (window.File && window.FileReader && window.FileList && window.Blob) {  
            //El navegador soporta el API File
            document.write("<p>Este navegador soporta el API File </p>");
        }
        else document.write("<p>¡¡¡ Este navegador NO soporta el API File y este programa puede no funcionar correctamente !!!</p>");
    }





leerArchivoTexto(files){

    // var archivo = files[0]; // Solo para 1 archivo


    var archivos = files;
    var nArchivos = files.length;


    var ponerNumeroArchivos = document.getElementById("numeroArchivos");
    ponerNumeroArchivos.innerText = "Número de archivos: " + nArchivos;





    
    //for (var i = nArchivos - 1; i  == 0; i--){
        for (var i = 0; i < nArchivos; i++){
        var archivo = archivos[i];
        var nombre = document.getElementById("nombreArchivo");
        var tamaño = document.getElementById("tamañoArchivo");
        var tipo = document.getElementById("tipoArchivo");
        var ultima = document.getElementById("ultimaModificacion");
        var contenido = document.getElementById("contenidoArchivo");
        var areaVisualizacion = document.getElementById("areaTexto");
        var errorArchivo = document.getElementById("errorLectura");
        var numeroArchivo = nArchivos - i;

        nombre.outerHTML = nombre.outerHTML + "Nombre del archivo " + numeroArchivo + ": " + archivo.name + "<br>";
        tamaño.outerHTML = tamaño.outerHTML + "Tamaño del archivo " + numeroArchivo + ": " + archivo.size + " bytes" + "<br>"; 
        tipo.outerHTML = tipo.outerHTML + "Tipo del archivo " + numeroArchivo + ": " + archivo.type + "<br>";
        ultima.outerHTML = ultima.outerHTML + "Fecha de la última modificación " + numeroArchivo + ": " + archivo.lastModifiedDate + "<br>";
    
      //Solamente admite archivos de tipo texto
        //var tipoTexto = /text.*/;
        //if ((archivo.type.match(/application.*/)) || (archivo.type.match(/text.*/))) 
        if (archivo.type.match(/text.*/))
        {
            contenido.innerText="Contenido del archivo de texto:"
            var lector = new FileReader();
            lector.onload = function (evento) {
            //El evento "onload" se lleva a cabo cada vez que se completa con éxito una operación de lectura
            //La propiedad "result" es donde se almacena el contenido del archivo
            //Esta propiedad solamente es válida cuando se termina la operación de lectura
            areaVisualizacion.innerText = lector.result;
            }      
            lector.readAsText(archivo);
            }
        else {
            errorArchivo.innerText = "Error : ¡¡¡ Archivo de texto no válido !!!";
        }  
    }





    //contador = contador + 1;
}


limpiar(){
    var nombre = document.getElementById("nombreArchivo");

    nombre.empty();
}

}
var tarea = new Ejercicio12();