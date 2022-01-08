var app= new Vue({
    el:"#app",
    data:{
        nombre:"carolina",
        apellido:"Agudelo"
    },

    computed:{
        nombreCompleto: function(){
            return this.nombre + " " + this.apellido;
        }
    }


});