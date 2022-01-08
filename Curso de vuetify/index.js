/*var app= new vue({
    el:"#app",
    data:{
        nombre:"venta de carros",
        precioCarro: 3500,
        vendido: false,
        colores:['rojo', 'amarillo', 'Azul', 'Negro'],
        carro:{'marca': 'mazda', 'Modelo': 2020}
    }
});*/


var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!',
        nombre:"venta de carros",
        precioCarro: 3500,
        vendido: false,
        colores:['rojo', 'amarillo', 'Azul', 'Negro'],
        carro:{'marca': 'mazda', 'Modelo': 2020},
        nombre1: "carolina",
        apellido: "Agudelo"

    },
    
    computed:{
        nombreCompleto: function(){
            return this.nombre + " " + this.apellido;
        }
    },


    methods:{
        sumar: function(){
            return 1+3;
        },
        sumarCarro(){
            return this.precioCarro + 500;
        }
    
    
    }
});
