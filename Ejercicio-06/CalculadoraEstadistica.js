"use strict"

class CalculadoraRPN{

    /**
     * Constructor para la clase calculadora
     */
    constructor(){
        this.pantalla = ""; // Inicialmente no hay nada en pantalla
        this.pantallaPila = ""; // Inicialmente no hay nada en la pantalla de la pila
        this.pila = []; // Inicialmente la pila está vacía
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
     * Método que me pinta en la pantalla de la pila el último valor en string
     */
    dibujarPila(numero){
        document.getElementById('pantallaPila').value = numero;
    }


    /**
     * Método para limpiar el panel del resultado
     */
    borrar(){
        this.pantalla = "";
        this.dibujar();

        this.pila = []; // Borramos todo el contenido de la pila

        this.pantallaPila = "";
        document.getElementById('pantallaPila').value = this.pantallaPila;
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
        if (this.pila.length >= 2){ // Que tenga al menos 2 operandos para operar
            var ultimo = parseFloat(this.pila.pop()); // Sacamos el último número
            var penultimo = parseFloat(this.pila.pop()); // Sacamos el penúltimo número
            var suma = ultimo + penultimo; // Los sumamos

		    this.pila.push(suma);
            this.dibujarPila(suma);
        }
    }


    /**
     * Botón para la resta
     */
    resta(){
        if (this.pila.length >= 2){
            var ultimo = parseFloat(this.pila.pop()); // Sacamos el último número
            var penultimo = parseFloat(this.pila.pop()); // Sacamos el penúltimo número
            var resta = penultimo - ultimo; // Los restamos

            this.pila.push(resta);
            this.dibujarPila(resta);
        }
    }

    /**
     * Botón para la moda
     */
    moda(){       
        var frecuencias=new Array(this.pila.length);
        for (var pos in this.pila){
            var numero=parseFloat(this.pila[pos]);
            frecuencias[pos]= this.calcularFrecuencia(numero, this.pila)
        }
        var posModa= this.obtenerPosMayor(frecuencias);
        this.dibujarPila(this.pila[posModa]);   
    }

    calcularFrecuencia(numero, vector){
        var num_veces=0;
        for (var pos in vector) {
            if (vector[pos]==numero) {
                num_veces++;
            }
        }
        return num_veces;
    }

    obtenerPosMayor(vector_valores){
        var posMayor=0;
        var numMayor=vector_valores[0];
        for (var pos in vector_valores){
            if (vector_valores[pos]>numMayor) {
                numMayor=parseFloat(vector_valores[pos]);
                posMayor=pos;
            }
        }
        return posMayor
    }


    media(){
        if(this.pila.length > 0){
            var contador = 0;
            var sumatorio = 0;
            for (var i in this.pila){
                sumatorio = sumatorio + parseFloat(this.pila[i]);
                contador = contador + 1;
            }
            this.pila = [];
            var laMedia = sumatorio / contador;
            this.pila.push(laMedia);
            this.dibujarPila(laMedia);
        }
    }



    /**
     * Botón para la mediana
     */
    mediana(){
        if (this.pila.length > 0){
            this.pila.sort();
            var contador = 0;
            for (var i in this.pila){
                contador = contador + 1;
            }

            if (contador%2 == 0){ // Si es par
                var posicion = contador/2;
                var mitad = parseFloat(this.pila[contador/2]);
                var otraMitad = parseFloat(this.pila[posicion-1]);
                var media = (mitad + otraMitad)/2;
                this.pila = [];
                this.pila.push(media);
                this.dibujarPila(media);
            }
            else if (contador%2 != 0){ // Si es impar
                var mitad = (contador/2) - 0.5;
                var laMediana = this.pila[mitad];
                this.pila = [];
                this.pila.push(laMediana);
                this.dibujarPila(laMediana);                
            }
        }
    }



    /**
     * Botón para la multiplicación
     */
    multiplicacion(){
        if (this.pila.length >= 2){
            var ultimo = parseFloat(this.pila.pop()); // Sacamos el último número
            var penultimo = parseFloat(this.pila.pop()); // Sacamos el penúltimo número
            var mult = ultimo * penultimo; // Los multiplicamos

            this.pila.push(mult);
            this.dibujarPila(mult);
        }
    }


    /**
     * Botón para la división
     */
    division(){
        if (this.pila.length >= 2){
            var ultimo = parseFloat(this.pila.pop()); // Sacamos el último número
            var penultimo = parseFloat(this.pila.pop()); // Sacamos el penúltimo número
            var div = penultimo / ultimo; // Los dividimos

            this.pila.push(div);
            this.dibujarPila(div);
        }
    }



    /**
     * Método para el enter, que me almacena en la pila el número
     */
    enter(){
        this.pushElemento(document.getElementById('resultado').value); // Almacenamos el valor que hay en la pantalla
        this.dibujarPila(document.getElementById('resultado').value); // Pintamos ese valor en la pantalla de la pila
        
        // Limpiamos la pantalla
        this.pantalla = "";
        this.dibujar();
    }


    /**
     * Método para el seno
     */
    sen(){
        if (this.pila.length >= 1){ // Solo se puede hacer si hay algo en la pila
            var ultimo = parseFloat(this.pila.pop()); // Sacamos el último número
            var seno = Math.sin(ultimo); // Calculamos el seno

            this.pila.push(seno);
            this.dibujarPila(seno);
        }
    }


    /**
     * Método para el coseno
     */
    cos(){
        if (this.pila.length >= 1){ // Solo se puede hacer si hay algo en la pila
            var ultimo = parseFloat(this.pila.pop()); // Sacamos el último número
            var coseno = Math.cos(ultimo); // Calculamos el coseno

            this.pila.push(coseno);
            this.dibujarPila(coseno);
        }
    }



    /**
     * Método para la tg
     */
    tg(){
        if (this.pila.length >= 1){ // Solo se puede hacer si hay algo en la pila
            var ultimo = parseFloat(this.pila.pop()); // Sacamos el último número
            var tangente = Math.tan(ultimo); // Calculamos la tangente

            this.pila.push(tangente);
            this.dibujarPila(tangente);
        }
    }



    // ----------------------------------------------------- OPERACIONES CON LA PILA -----------------------------------------------------
    
    /**
     * Método que me añade un número a la pila
     * @param  numero 
     */
    pushElemento(numero){
        if (Number.isNaN(numero) == false){ // Solo lo añade si es un número, sino no lo añade a la pila 
            this.pila.push(numero); // Metemos el número en la pila
        }
        else{ // Si era un símbolo, no un número
            alert('Solo se pueden introducir números'); // Le avisa
        }
    }
}

var calculadora = new CalculadoraRPN();