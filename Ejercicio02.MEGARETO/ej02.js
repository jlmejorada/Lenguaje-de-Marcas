let clientes = []

let obj_serializado

let obj_deserializado

let suma=0;

let media=0;

let max=0;

let min=999;

function anadir(){
    
    var nombreObj=$("#nombre").val();
    var apellidosObj=$("#apellidos").val();
    var edadObj=$("#edad").val();
    var ciudadObj=$("#ciudad").val();

    let obJson = {
        nombre:nombreObj,
        apellidos:apellidosObj,
        edad:edadObj,
        ciudad:ciudadObj
    }
    if (sePuede(obJson)){
    obj_serializado = serializar(obJson);

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
    $("#Tabla").html("")
    for (let i=0; i<clientes.length; i++){
        $("#Tabla").append("<tr onclick=\"borrar("+i+")\">" +  //aquí está el append
            "<td>" + i + "</td>" +
            "<td>" + clientes[i].nombre + "</td>" +
            "<td>" + clientes[i].apellidos + "</td>" +
            "<td>" + clientes[i].edad + "</td>" +
            "<td>" + clientes[i].ciudad + "</td>" +
            "</tr>")
            calcula(i)
    }
};

function borrar(row){
    clientes.splice(row,1);
    generarTabla();
    suma-=clientes[row].edad
}

function sePuede(objeto){
    let completo = false

    if (objeto.nombre!=null && objeto.nombre!="" && objeto.apellidos!=null && objeto.apellidos!="" && objeto.edad!=null && objeto.edad!="" && objeto.ciudad!=null && objeto.ciudad!="" ){
        completo = true
    }

    return completo
}

function calcula(i){
    let num=clientes[i].edad

    suma += parseInt(num);
    
    media = suma/(i+1);

    if (max < num){
        max = num;
    }

    if (min > num){
        min = num;
    }


    $("#calculos").html(  //aquí está el append
        "<p> Suma: " + suma + "</p>" +
        "<p> Media: " + media + "</p>" +
        "<p> Edad máxima: " + max + "</p>" +
        "<p> Edad mínima: " + min + "</p>" 
        )
}
