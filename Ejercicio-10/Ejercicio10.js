"use strict";
class Bolsa {
    constructor(){
        
        this.apikey = "43ef6e4bcbc9bcf14cf94c4205dc9a22";
    }
    cargarDatos(){
        this.url = "http://data.fixer.io/api/latest?access_key=43ef6e4bcbc9bcf14cf94c4205dc9a22";


        
            
            $.ajax({
            dataType: "jsonp",
            url: this.url,
            //method: 'GET',
            success: function(jsonp){
                


                alert(json.rates.GBP);
        
                // base currency is stored in json.base
                alert(json.base);
                
                // timestamp can be accessed in json.timestamp
                alert(json.timestamp);
            }
        });

    }

}
var bolsa = new Bolsa();