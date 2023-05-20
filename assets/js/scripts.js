
function enviarPresupuesto(){
    let valorCajaPresupuesto = document.getElementById('txtPresupuesto').value;
    let elParrafoPresupuesto = document.getElementById('parrafoPresupuesto');
    elParrafoPresupuesto.innerText = valorCajaPresupuesto;
}

function enviarGasto(){
    let valorCajaGasto = document.getElementById('txtNombreGasto').value;
    let valorCantidadGasto = document.getElementById('txtCantidadGasto').value;
    let valorParrafoPresupuesto = document.getElementById('parrafoPresupuesto').innerText;
    let elParrafoGasto = document.getElementById('parrafoGasto');
    let elParrafoSaldo = document.getElementById('parrafoSaldo');
    let elParrafoNombreGasto = document.getElementById('parrafoNombreGasto');
    let elParrafoValor = document.getElementById('parrafoValor');

    elParrafoNombreGasto.innerText = valorCajaGasto;
    elParrafoValor.innerText = valorCantidadGasto;
    elParrafoGasto.innerText = valorCantidadGasto;

    let elSaldo = parseFloat(valorParrafoPresupuesto) - parseFloat(valorCantidadGasto);
    elParrafoSaldo.innerText = elSaldo;


}

function asignarEventos(){
    let elBotonCalcular = document.getElementById('btnCalcular');
    elBotonCalcular.addEventListener('click', enviarPresupuesto);

    let elBotonAnadir = document.getElementById('btnAnadirGasto');
    elBotonAnadir.addEventListener('click', enviarGasto);
}