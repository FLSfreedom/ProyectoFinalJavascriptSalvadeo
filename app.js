class creditoSimulado {
    constructor(importe, meses, resultado) {
        this.importe = importe;
        this.meses = meses;
        this.resultado = Math.round(resultado);
        this.simulacion = ` Importe $${importe} - meses ${meses} - cuotas fijas de $${Math.round(resultado)}. `;
    }
}

function seisMeses(importe, meses) {
    return (importe + ((importe / 100) *10)) / meses;
}

function doceMeses(importe, meses) {
    return (importe + ((importe / 100) *20)) / meses;
}

function dieciochoMeses(importe, meses) {
    return (importe + ((importe / 100) *30)) / meses;
}

function veinticuatroMeses(importe, meses) {
    return (importe + ((importe / 100) *40)) / meses;
}

function equisMeses(importe, meses) {
    return (importe + (importe*.70)) / meses;
}

let listaSimulaciones = [];
let simulacionesGrandes = [];

let nuevaSimulacionC = document.getElementById('nuevaSimulacion');
let errorIntroDatos = document.getElementById('error');
let formulario = document.getElementById('formularioSimulador');
let listaCreditos = document.getElementById('listaCreditosRealizados');
let listaFiltrada = document.getElementById('listaConFiltro');

let listaSimulacionesLocalS = localStorage.getItem('listaSimulaciones');

if(listaSimulacionesLocalS) {
    listaSimulaciones = JSON.parse(listaSimulacionesLocalS);
}


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let datos = e.target.children;

    let meses = 0;
    let importe = 0;

    meses = parseInt(datos[0].value);
    importe = parseInt(datos[1].value);

if (meses !== '' && importe !== '' && meses > 0 && importe > 0) {
    switch (meses) {
        case 6:
            resultado = seisMeses(importe, meses);
            listaSimulaciones.push(new creditoSimulado(importe, meses, resultado));
            break;
        case 12:
            resultado = doceMeses(importe, meses);
            listaSimulaciones.push(new creditoSimulado(importe, meses, resultado));
            break;
        case 18:
            resultado = dieciochoMeses(importe, meses);
            listaSimulaciones.push(new creditoSimulado(importe, meses, resultado));
            break;
        case 24:
            resultado = veinticuatroMeses(importe, meses);
            listaSimulaciones.push(new creditoSimulado(importe, meses, resultado));
            break;
        default:
            resultado = equisMeses(importe, meses);
            listaSimulaciones.push(new creditoSimulado(importe, meses, resultado));
            break;
            }
    errorIntroDatos.innerText = '';
    nuevaSimulacionC.innerText = `Importe $${importe} - meses ${meses} - cuotas fijas de $${Math.round(resultado)}.`;

} else {
    errorIntroDatos.innerText = 'Debés completar todos los campos ¡Por favor!';
};
datos[0].value = '';
datos[1].value = '';

listaCreditos.innerText = listaSimulaciones.map(({simulacion}) => simulacion).join(`\n`);

if (listaSimulaciones.length > 4) {
    listaSimulaciones.splice(0, 1);
};

localStorage.setItem('listaSimulaciones', JSON.stringify(listaSimulaciones));

});

function ingresarFiltro(value) {
    listaFiltrada.innerText = listaSimulaciones.filter((creditoSimulado) => creditoSimulado.importe > value ).map(({simulacion}) => simulacion).join(`\n`);
};
