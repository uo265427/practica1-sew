"use restrictive"

class Tarea7{

    /**
     * Constructor para la tarea7. De momento no tenemos nada
     */
    constructor(){
        this.contador = 0; // Un contador
    }

    /**
     * Método que me muestra el elemento que le pase por parámetro
     */
    mostrar(elemento){
        $(elemento).show();
    }


    /**
     * Método que me oculta el elemento que le pase por parámetro
     */
    ocultar(elemento){
        $(elemento).hide();
    }


    /**
     * Método que me traduce el párrafo a inglés
     */
    traducir(elemento){
        $(elemento).text("Star Trek: The Motion Picture (in Spain, Star Trek: the movie) is an American science fiction film that is part of the Star Trek universe, created by Gene Roddenberry. It was the first film in the franchise based on the 1960s series (Star Trek: The Original Series), and was released on December 7, 1979. Its director was Academy Award winner Robert Wise; it was his third science fiction film. Star Trek: The Motion Picture reinvigorated the franchise, which would continue the story with nine sequels and two prequels.");
    }


    /**
     * Método que me añade el equipo (una lista) para poder visualizarlo
     * @param elemento 
     */
    verEquipo(elemento){
        if (this.contador < 1){ // Solo podremos añadirlo una vez, como es lógico
            var texto = "<h4>Equipo</h4><ul><li>Dirección: Robert Wise</li><li>Producción: Gene Roddenberry</li><li>Guión: Alan Dean Foster y Harold Livingston</li><li>Música: Jerry Goldsmith</li><li>Fotografía: Richard H. Kline</li></ul>"; // Crea texto con HTML
            $(elemento).append(texto);
            this.contador = this.contador + 1;
        }
    }


    /**
     * Método que me borra el elemento que se le pasa por parámetro
     * @param  elemento 
     */
    borrar(elemento){
        $(elemento).remove();
    }


    /**
     * Método que me muestra el recorrido de los elementos del html y  me lo pone en el elemento que se le pasa como parámetro
     * @param {*} elemento 
     */
    mostrarRecorrido(elemento){
        $("*", document.body).each(     
            function() {
            var elementoPadre = $("*", document.body).parent().get(0).tagName;
           
           $(elemento).append(document.createTextNode(" Elemento: <" + $(this).get(0).tagName +"> Elemento padre: <" +elementoPadre + "> ]  "))
          }
        );
    }


    /**
     * Método que me suma todas las filas y columnas de una tabla que contiene int
     * @param  elemento 
     */
    sumarTabla(elemento){
        let resultado = 0;
        const valores = $('th'); // Coge todos los elementos de la tabla que queremos sumar

        for(let i = 0; i < valores.length; i++){
            resultado = resultado + parseFloat(valores[i].innerHTML);
        }
        const texto = "Suma de los elementos de la tabla: " + resultado;
        $(elemento).append(texto);
    }

}


var tarea = new Tarea7(); // Creamos el objeto de la clase
