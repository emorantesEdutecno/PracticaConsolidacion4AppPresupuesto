
function enviarPresupuesto(){
    let valorCajaPresupuesto = document.getElementById('txtPresupuesto').value;
    let elParrafoPresupuesto = document.getElementById('parrafoPresupuesto');
    elParrafoPresupuesto.innerText = valorCajaPresupuesto;
}

var arrNombresGastos =[];
var arrCantidadGastos=[];

function acumularGastos(){
    let acumuladoGastos=0;
    // recorre el arreglo de cantidad Gastos y suma su contenido
    for(let i=0; i<arrCantidadGastos.length;i++){
        acumuladoGastos = acumuladoGastos + arrCantidadGastos[i];
    }
    return acumuladoGastos;
}

function pintarGastos(){
    let elParrafoNombreGasto = document.getElementById('parrafoNombreGasto');
    let elParrafoValor = document.getElementById('parrafoValor');

    let unParrafoTextoNuevo = document.createElement('p');
    let unParrafoValorNuevo = document.createElement('p');


    for(let i=0; i<arrNombresGastos.length; i++){
        // recorremos el arreglo y extraemos nombre
        unParrafoTextoNuevo.innerText = arrNombresGastos[i];
        // recorremos el arreglo y extraemos valor
        unParrafoValorNuevo.innerText = arrCantidadGastos[i];

        // enviamos a los párrafos correspondientes con append
        elParrafoNombreGasto.appendChild(unParrafoTextoNuevo);
        elParrafoValor.appendChild(unParrafoValorNuevo);
    }

    // elParrafoValor.innerText = valorCantidadGasto;
}

function enviarGasto(){
    // variables para alojar los gastos
    let valorCajaGasto = document.getElementById('txtNombreGasto').value;
    let valorCantidadGasto = document.getElementById('txtCantidadGasto').value;
    // almacenamos en los arreglos los gastos añadidos
    arrNombresGastos.push(valorCajaGasto);
    arrCantidadGastos.push(parseFloat(valorCantidadGasto));

    console.log('arreglo gastos:');
    console.log(arrNombresGastos);
    console.log('cantidad gastos:');
    console.log(arrCantidadGastos);
 

    let elAcumuladoGastos =  acumularGastos(); 
    console.log(elAcumuladoGastos);
    
    let valorParrafoPresupuesto = document.getElementById('parrafoPresupuesto').innerText;
    let elParrafoGasto = document.getElementById('parrafoGasto');
    let elParrafoSaldo = document.getElementById('parrafoSaldo');


    // enviamos el acumlado del gasto al parrafo gasto
    elParrafoGasto.innerText = elAcumuladoGastos;

    let elSaldo = parseFloat(valorParrafoPresupuesto) - parseFloat(elAcumuladoGastos);
    elParrafoSaldo.innerText = elSaldo;

    pintarGastos();


}

function asignarEventos(){
    let elBotonCalcular = document.getElementById('btnCalcular');
    elBotonCalcular.addEventListener('click', enviarPresupuesto);

    let elBotonAnadir = document.getElementById('btnAnadirGasto');
    elBotonAnadir.addEventListener('click', enviarGasto);
}