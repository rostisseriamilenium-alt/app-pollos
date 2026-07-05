let stock = 0;

function iniciarStock() {
    stock = parseFloat(document.getElementById("stockInicial").value) || 0;
    actualizar();
}

function actualizar() {
    document.getElementById("quedan").innerText = stock;
}
