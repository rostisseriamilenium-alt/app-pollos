// =========================
// CONTROL DE PRODUCTO v1
// =========================

let stock = 0;
let vendidosSin = 0;
let vendidosCon = 0;

let historial = [];

const productos = {
    pan: 0,
    canelones: 0,
    caliu: 0,
    bravas: 0,
    fritas: 0
};

function iniciarStock(){

    stock = parseFloat(document.getElementById("stockInicial").value);

    if(isNaN(stock)){
        alert("Introduce un stock inicial");
        return;
    }

    actualizar();

}

function actualizar(){

    document.getElementById("quedan").innerHTML = stock;

    document.getElementById("sinEncargo").innerHTML = vendidosSin;

    document.getElementById("conEncargo").innerHTML = vendidosCon;

}

function vender(conEncargo){

    let cantidad = parseFloat(document.getElementById("cantidadVenta").value);

    if(isNaN(cantidad) || cantidad<=0){

        cantidad = 1;

    }

    let tipo = parseFloat(document.querySelector('input[name="tipo"]:checked').value);

    let total = cantidad * tipo;

    if(stock-total<0){

        alert("No quedan suficientes pollos");

        return;

    }

    historial.push({

        stock,
        vendidosSin,
        vendidosCon

    });

    stock -= total;

    if(conEncargo){

        vendidosCon += total;

    }else{

        vendidosSin += total;

    }

    actualizar();

}

function deshacer(){

    if(historial.length===0){

        return;

    }

    let ultimo = historial.pop();

    stock = ultimo.stock;

    vendidosSin = ultimo.vendidosSin;

    vendidosCon = ultimo.vendidosCon;

    actualizar();

}

function reiniciar(){

    if(confirm("¿Seguro que quieres reiniciar el día?")){

        stock = 0;

        vendidosSin = 0;

        vendidosCon = 0;

        historial = [];

        document.getElementById("stockInicial").value="";

        actualizar();

    }

}

actualizar();
