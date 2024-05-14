let obj_serializado
let cosa
let lista=[];

function anadir(){
    
    var desc=$("#desc").val();
    var proov=$("#proov").val();
    var prec=$("#prec").val();

    let obJson = {
        descripcion:desc,
        idProveedor:proov,
        precio:prec     
    }

    obj_serializado = serializar(obJson);

    envio(obj_serializado)

}


function serializar(objeto){
    return JSON.stringify(objeto);
}

function envio(objeto_js){
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://lm.iesnervion.es/reto4.php");
    xhr.responseType = "json";


    xhr.onload = function() {
        if (xhr.readyState == 4 && xhr.status == 200) { // 200 || 201
            cosa=xhr.response     
            if (cosa.deco==null){
                lista=cosa.lista; 
                generarTabla(lista);
                console.log(lista);
            } else {
               
             $("#error").html("<h2>"  + cosa.error +  "</h2>");
    
            }
            
        } else {
            console.log("Error: " + xhr.status);
        }
    };
    xhr.send(objeto_js);
}

function generarTabla(lista) {

    $("#Tabla").html("")
    for (let i=0; i<lista.length; i++){
        $("#Tabla").append("<tr>" +
            "<td>" + lista[i].id + "</td>" +
            "<td>" + lista[i].descripcion + "</td>" +
            "<td>" + lista[i].idProveedor + "</td>" +
            "<td>" + lista[i].precio + "</td>");
    }
};
