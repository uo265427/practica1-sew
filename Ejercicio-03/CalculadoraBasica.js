"use strict"

class CalculadoraBasica{

    /**
     * Constructor para la clase calculadora
     */
    constructor(){
        this.pantalla = ""; // Inicialmente no hay nada en pantalla
        this.memoria = ""; // En memoria no hay nada 
    }


    // ------------------------------------------------ BOTONES NÚMEROS --------------------------------------------------------------

    /**
     * Botón para los dígitos. 
     * Se le pasa por parámetro el número que se ha pulsado
     */
    digitos(numero){
        this.pantalla = this.pantalla + "" + numero;
        this.dibujar();
    }

    punto(){
        this.pantalla = this.pantalla + "."; // Ponemos el punto
        this.dibujar(); // Actualizamos el resultado
    }


    // --------------------------------------------------- MÉTODOS ADICIONALES ----------------------------------------------------------


    /**
     * Método que me pinta en la pantalla el valor actual del string resultado
     */
    dibujar(){
        document.getElementById('resultado').value = this.pantalla;
    }


    /**
     * Método para limpiar el panel del resultado
     */
    borrar(){
        this.pantalla = "";
        this.dibujar();
    }

    /**
     * Método para calcular las operaciones
     */
    calcular (){
        try { 
			document.getElementById('resultado').value = eval(this.resultado);
			this.ans = document.getElementById('resultado').value;
			this.resultado = document.getElementById('resultado').value;
        }
        catch(err) {
            document.getElementById('resultado').value = "Syntax Error";
			this.consola="";
        }
    }
    // --------------------------------------------------- OPERACIONES ------------------------------------------------------------------
    
    /**
     * Botón para la suma
     */
    suma(){
        this.pantalla = this.pantalla + "+"; // Añadimos el símbolo
        this.dibujar();
    }


    /**
     * Botón para la resta
     */
    resta(){
        this.pantalla = this.pantalla + "-"; // Añadimos el símbolo
        this.dibujar();
    }


    /**
     * Botón para la multiplicación
     */
    multiplicacion(){
        this.pantalla = this.pantalla + "*"; // Añadimos el símbolo
        this.dibujar();
    }


    /**
     * Botón para la división
     */
    division(){
        this.pantalla = this.pantalla + "/";
        this.dibujar();
    }


    /**
     * Trae a la pantalla el número que estaba almacenado en memoria
     */
    mrc(){
		try { 
			document.getElementById('resultado').value = eval(this.memoria);
			this.ans=document.getElementById('resultado').value;
        }
        catch(err) {
            document.getElementById('resultado').value = "Syntax Error";
			this.memoria="";
        }  
    }

    /**
     * Guarda en memoria el número que había mas el número que hay en pantalla
     * 
     */
    mMas(){
        this.memoria= this.memoria + "+" + document.getElementById('resultado').value;
		this.borrar();
    }


    /**
     * Guarda en memoria el número que había restándole el que hay en pantalla
     */
    mMenos(){
        this.memoria= this.memoria + "-" + document.getElementById('resultado').value;
		this.borrar();
    }



    /**
     * Método para el igual, que me calcula la operación que hay en pantalla
     */
    igual(){
        try { 
			document.getElementById('resultado').value = eval(this.pantalla);
			this.ans = document.getElementById('resultado').value;
			this.pantalla = document.getElementById('resultado').value;
        }
        catch(err) {
            document.getElementById('resultado').value = "Syntax Error";
			this.consola="";
        }
    }
}

var calculadora = new CalculadoraBasica();