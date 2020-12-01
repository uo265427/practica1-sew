"use strict";

var tarea = new Object();

tarea.apikey = "47b790fd0fc41878c80c57c9846132cb";
tarea.unidades = "&units=metric";
tarea.idioma = "&lang=es";
tarea.error = "<h3>¡problemas! No puedo obtener información de <a href='http://openweathermap.org'>OpenWeatherMap</a></h3>";
tarea.datos = "";

tarea.cargarDatos = 
function(pueblo, ver){

    tarea.ciudad = pueblo;
    tarea.url = "http://api.openweathermap.org/data/2.5/weather?q=" + tarea.ciudad + tarea.unidades + tarea.idioma + "&APPID=" + tarea.apikey;

    $.ajax({
        dataType: "json",
        url: tarea.url,
        method: 'GET',
        success: function(data){
            tarea.datos = data; 
            if(ver){
                tarea.verDatos('.resultado');
            }
            else if (ver == false){
                tarea.verJSON('.resultado');
            }
                   
        },
        error:function(){
            document.write(tarea.error);    
        }
    });

    
}



tarea.verJSON = function(element){
    // Borramos el párrafo por si habia algo
    $(element).text(" ");

    $(element).append("<h3>JSON:</h3>");
    $(element).append("Datos en JSON desde <a href='http://openweathermap.org'>OpenWeatherMap</a>");
    $(element).empty();
    $(element).append("JSON");
    var str = JSON.stringify(tarea.datos, null, 2);
    $(element).append(str);
    //$('#cargarJSON').attr("disabled", true);
}



tarea.verDatos = function(element){
    //cargarDatos(element);
    // Borramos el párrafo por si habia algo
    $(element).text(" ");

   // $('.resultado').append("<h3>Datos:</h3>");
    $(element).append('<img src="http://openweathermap.org/img/w/'+tarea.datos.weather[0].icon+'.png" height="64px" width="64px">');
    $(element).append("<p>Ciudad: " + tarea.datos.name + "</p>");
    $(element).append("<p>País: " + tarea.datos.sys.country + "</p>");
    $(element).append("<p>Latitud: " + tarea.datos.coord.lat + " grados</p>");
    $(element).append("<p>Longitud: " + tarea.datos.coord.lon + " grados</p>");
    $(element).append("<p>Temperatura: " + tarea.datos.main.temp + " grados Celsius</p>");
    $(element).append("<p>Temperatura máxima: " + tarea.datos.main.temp_max + " grados Celsius</p>");
    $(element).append("<p>Temperatura mínima: " + tarea.datos.main.temp_min + " grados Celsius</p>");
    $(element).append("<p>Presión: " + tarea.datos.main.pressure + " milímetros</p>");
    $(element).append("<p>Humedad: " + tarea.datos.main.humidity + "%</p>"); 
    $(element).append("<p>Amanece a las: " + new Date(tarea.datos.sys.sunrise *1000).toLocaleTimeString() + "</p>"); 
    $(element).append("<p>Oscurece a las: " + new Date(tarea.datos.sys.sunset *1000).toLocaleTimeString() + "</p>"); 
    $(element).append("<p>Dirección del viento: " + tarea.datos.wind.deg + "  grados</p>");
    $(element).append("<p>Velocidad del viento: " + tarea.datos.wind.speed + " metros/segundo</p>");
    $(element).append("<p>Hora de la medida: " + new Date(tarea.datos.dt *1000).toLocaleTimeString() + "</p>");
    $(element).append("<p>Fecha de la medida: " + new Date(tarea.datos.dt *1000).toLocaleDateString() + "</p>");
    $(element).append("<p>Descripción: " + tarea.datos.weather[0].description + "</p>");
    $(element).append("<p>Visibilidad: " + tarea.datos.visibility + " metros</p>");
    $(element).append("<p>Nubosidad: " + tarea.datos.clouds.all + " %</p>");
};

