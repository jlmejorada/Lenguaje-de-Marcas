let clientes = []

let obj_serializado

let obj_deserializado

let cosa


$('input[name=hobbies]').on('change', function () { 
    if($('input:checkbox').filter(':checked').length >2){
        $('input:checkbox').not(':checked').prop('disabled', true);
    }else{
        $('input:checkbox').not(':checked').prop('disabled', false);
    }
});


function anadir(){
    
    var nombreObj=$("#nombre").val();
    var apellidosObj=$("#apellidos").val();
    var edadObj=$("#edad").val();
    var ciudadObj=$("#ciudad").val();
    var hobbieObj= $('input[name="hobbies"]')
                .filter(':checked')
                .map(function () {
                 return $(this).attr("id");
                 }).get()

    let obJson = {
        nombre:nombreObj,
        apellidos:apellidosObj,
        edad:edadObj,
        ciudad:ciudadObj,
        hobbie:hobbieObj        
    }
    if (sePuede(obJson)){
    obj_serializado = serializar(obJson);

    envio(obj_serializado)

    obj_deserializado = deserializar(obj_serializado);

    clientes.push(obj_deserializado);

    generarTabla();

    } else {
        alert("Alguno de los campos están vacios")
    }
}

function serializar(objeto){
    return JSON.stringify(objeto);
}

function deserializar(objeto){
    return JSON.parse(objeto);
}

function generarTabla() {
    let listaHobbies = "";
    

    $("#Tabla").html("")
    for (let i=0; i<clientes.length; i++){
        listaHobbies = "";
        for (let j=0;j<clientes[i].hobbie.length;j++){
            listaHobbies += clientes[i].hobbie[j] + " ";
        }
        $("#Tabla").append("<tr id='lui' onclick=\"borrar("+i+")\">" +  //aquí está el append
            "<td>" + i + "</td>" +
            "<td>" + clientes[i].nombre + "</td>" +
            "<td>" + clientes[i].apellidos + "</td>" +
            "<td>" + clientes[i].edad + "</td>" +
            "<td>" + clientes[i].ciudad + "</td>" +
            "<td>" + listaHobbies + "</td></tr>");
    }
    calcula()
};

function borrar(row){
    clientes.splice(row,1);
    generarTabla();

}

function sePuede(objeto){
    let completo = false

    if (objeto.nombre!=null && objeto.nombre!="" && objeto.apellidos!=null && objeto.apellidos!="" && objeto.edad!=null && objeto.edad!="" && objeto.ciudad!=null && objeto.ciudad!="" ){
        completo = true
    }

    return completo
}

function calcula(){
    let num=0;
    let suma=0;
    let media=0
    let max=0;
    let min=999;

    if (clientes.length>0){
        for (let i=0;i<clientes.length;i++){
            num = parseInt(clientes[i].edad);
    
            suma += num;
    
            if (max < num){
                max = num;
            }
    
            if (min > num){
                min = num;
            }
    
        }
        media = suma/(clientes.length);
    }

    $("#calculos").html( 
        "<p> Suma: " + suma + "</p>" +
        "<p> Media: " + media + "</p>" +
        "<p> Edad máxima: " + max + "</p>" +
        "<p> Edad mínima: " + min + "</p>" 
        )
}

function envio(objeto_js){
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://lm.iesnervion.es/eco.php");
 xhr.responseType = "json";


    xhr.onload = function() {
        if (xhr.readyState == 4 && xhr.status == 201) { // 200 || 201
            cosa=xhr.response
            console.log(1);
        } else {
            console.log("Error: ${xhr.status}");
        }
    };
    xhr.send(objeto_js);
}
