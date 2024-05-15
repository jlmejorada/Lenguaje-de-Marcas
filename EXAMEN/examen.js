//Variable donde guardaremos el objeto serializado
let obj_serializado

//Función principal de nuestra clase
function jugar(){
    //Inicializamos el error vacio
    $("#error").html("");
    //Variable que almacena nuestro nombre
    var name=$("#nam").val();
    //Variable que almacena nuestro apellido
    var surname=$("#ape").val();
    //Variable que almacena nuestra apuesta
    var apu=$("#num").val();
    //Variable que almacena la apuesta
    var cont=$("#con").val();
    //Crea un objeto
    let obJson = {
        nombre:name,
        apellidos:surname,
        password:cont,
        apuesta:apu
    }
    //Si se puede crear el objeto
    //if (sePuede(obJson)){
        //Lo serializamos y recogemos
        obj_serializado = serializar(obJson);
        
        //Lo enviamos
        envio(obj_serializado)

        //Si no, pasamos un mensaje
    //} else {
    //alert("Alguno de los campos están vacios")
    //}

}

//Funcion que serializa un objeto
function serializar(objeto){
    return JSON.stringify(objeto);
}

//Primer envio
function envio(objeto_js){
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://lm.iesnervion.es/dados.php");
    xhr.responseType = "json";


    xhr.onload = function() {
        if (xhr.readyState == 4 && xhr.status == 200) { // 200 || 201
            cosa=xhr.response     
            if (cosa.usuario!=null && cosa.usuario!=""){
                lista=cosa.lista; 
                muestraDado1(cosa.dado1);
                muestraDado2(cosa.dado2);
                muestraResultado(cosa.mensajes);
                generaTabla(lista);
            } else {
               
             $("#error").html("<h2>"  + cosa.mensajes +  "</h2>");
    
            }
            
        } else {
            console.log("Error: " + xhr.status);
        }
    };
    xhr.send(objeto_js);
}

//Funcion que comprueba que los campos están rellenos y permite o no continuar
function sePuede(objeto){
    let completo = false

    if (objeto.nombre!=null && objeto.nombre!="" && objeto.apellidos!=null && objeto.apellidos!="" && objeto.contraseña!=null && objeto.contraseña!="" && objeto.apuesta!=null && objeto.apuesta!="" ){
        completo = true
    }

    return completo
}

//Funcion que genera el interior de la tabla
function generaTabla(lista) {
    $("#borde").html("<table><thead><tr><th>Nombre</th><th>Apellidos</th><th>numPartidas</th><th>Aciertos</th><th>Porcentaje</th></tr></thead><tbody id=\"Tabla\"></tbody></table>")
        
    $("#Tabla").html("")
    for (let i=0; i<lista.length; i++){
        $("#Tabla").append("<tr>" +
            "<td>" + lista[i].nombre + "</td>" +
            "<td>" + lista[i].apellidos + "</td>" +
            "<td>" + lista[i].numPartidas + "</td>" +
            "<td>" + lista[i].aciertos + "</td>" + 
            "<td>" + lista[i].porcentaje + "</td>");
    }
};

//Funcion que muestra los dados
function muestraDado1(dado) {
    $("#dado1").html("<h1 text-align:center>" + dado + "<h1><p> + </p>");

};
function muestraDado2(dado) {
    $("#dado2").html("<h1 text-align: center>" + dado + "<h1>");

};

function muestraResultado(res) {
    $("#res").html("<h2>" + res + "<h2>");

};