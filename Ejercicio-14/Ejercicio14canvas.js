

class Tarea14{

    /**
     * Constructor para la tarea14. De momento no tenemos nada
     */
    constructor(){
    }

    loader(){
        var canvas = document.getElementById('canvas');
        var canvas1 = canvas.getContext('2d');



        // Dibujando un corazón con curvas de Bezier
        canvas1.fillStyle = "rgba(200, 0, 0, 0.5)";
        canvas1.beginPath();
        canvas1.moveTo(75, 250);
        canvas1.bezierCurveTo(75, 247, 70, 235, 50, 235);
        canvas1.bezierCurveTo(20, 235, 20, 272.5, 20, 272);
        canvas1.bezierCurveTo(20, 290, 40, 312, 75, 330);
        canvas1.bezierCurveTo(110, 312, 130, 290, 130, 272);
        canvas1.bezierCurveTo(130, 272.5, 130, 235, 100, 235);
        canvas1.bezierCurveTo(85, 235, 75, 247, 75, 250);
        canvas1.closePath();
        canvas1.fill();



        canvas1.closePath();
        canvas1.stroke();
    }
}
var tarea = new Tarea14(); // Creamos el objeto de la clase
