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
            this.pantalla = document.getElementById('resultado').value;
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

var calculadoraBasica = new CalculadoraBasica();



class CalculadoraCientifica extends CalculadoraBasica{

    /**
     * Constructor sin parámetros de la clase CalculadoraCientífica, que añade el constructor de CalculadoraBasica
     */
    constructor(pantalla, memoria){
        super(pantalla, memoria);
    }


   
    // ----------------------------------------------------------NUEVAS OPERACIONES--------------------------------------------------------

    /**
     * Botón para el seno
     */
    sen(){
        document.getElementById('resultado').value = Math.sin(eval(this.pantalla));
    }


    /**
     * Botón para el coseno
     */
    cos(){
        document.getElementById('resultado').value = Math.cos(eval(this.pantalla));
    }


    /**
     * Botón para la tangente
     */
    tg(){
        document.getElementById('resultado').value = Math.tan(eval(this.pantalla));
    }


    /**
     * Botón para el pi
     */
    pi(){
        this.pantalla = this.pantalla + String(Math.PI); // Añadimos el símbolo
        this.dibujar();
    }


    /**
     * Botón para el cuadrado
     */
    cuadrado(){
        document.getElementById('resultado').value = Math.pow(eval(this.pantalla), 2);
    }


     /**
     * Botón para el cubo
     */
    cubo(){
        document.getElementById('resultado').value = Math.pow(eval(this.pantalla), 3);
    }


    /**
     * Botón para la raiz
     */
    raiz(){
        document.getElementById('resultado').value = Math.sqrt(eval(this.pantalla).value);
    }


    /**
     * Botón para el logaritmo
     */
    log(){
        document.getElementById('resultado').value = Math.log10(eval(this.pantalla));
    }


    /**
     * Botón para el mc
     * Me borra lo que hay en memoria
     */
    mc(){
        this.pantalla = "";
        this.memoria= " ";
    }


    /**
     * Botón para el abrir paréntesis (
     */
    abrePar(){
        this.pantalla = this.pantalla +"("; // Añadimos el símbolo
        this.dibujar();
    }

    /**
     * Botón para el cerrar paréntesis )
     */
    cierraPar(){
        this.pantalla = this.pantalla +")"; // Añadimos el símbolo
        this.dibujar();
    }


    /**
    * Botón para el exp
    */
   exp(){
        document.getElementById('resultado').value = Math.exp(eval(this.pantalla));
   }

    
}

var calculadoraCientifica = new CalculadoraCientifica();