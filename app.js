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

function resultadoCotizacion(resultado, meses) {
    alert (`serán ${meses} cuotas de ${Math.round(resultado)} pesos cada una`);
}

let listaSimulaciones = [];
let simulacionesGrandes = [];

let errorIntroDatos = document.getElementById('error');
let formulario = document.getElementById('formularioSimulador');
let listaCreditos = document.getElementById('listaCreditosRealizados');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let datos = e.target.children;

    meses = datos[0].value;
    importe = datos[1].value;

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
} else {
    alert('ingresá algo');
};
});

// for (let credito of listaSimulaciones) {
//     let li = document.createElement('li');
//     li.innerText =`Importe $${credito.importe} - meses ${credito.meses} - cuotas fijas de $${Math.round(credito.resultado)}.`;
//     listaCreditos.appendChild(li);
// };

let parrafoCreditos = document.createElement("p");
parrafoCreditos.innerText = listaSimulaciones.map(({simulacion}) => simulacion).join(`\n`)
listaCreditos.appendChild(parrafoCreditos); 

// formularioSimulador.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let datos = e.target.children;}
// );

// if((datos[0].value !== '' && datos[0].value > 0) && (datos[1].value !== '' && datos[1].value > 0)) {
//     let existeDisfraz = disfracesEnVenta.some((disfraz) => disfraz.nombre === datos[0].value);
//     if(existeDisfraz) {
//       parrafoError.innerText = 'Este disfraz ya existe, imposible agregarlo de nuevo.'
//     } else {      
//       disfracesEnVenta.push(new Disfraz(incremento,datos[0].value, datos[1].value, datos[2].value));
//       incremento++;
//       listaDisfraces.innerHTML += `<li>Nombre: ${datos[0].value} - Precio: ${datos[1].value} - Stock: ${datos[2].value}</li>`
//       parrafoError.innerText = ''
//       localStorage.setItem('disfracezEnVenta', JSON.stringify(disfracesEnVenta));
//     }
//   } else {
//     parrafoError.innerText = 'Todos los campos son obligatorios';
// };

//         case 1:
//             alert(listaSimulaciones.map(({simulacion}) => simulacion).join(`\n`));
//             break;
//         case 2:
//             alert((simulacionesGrandes = listaSimulaciones.filter((creditoSimulado) => creditoSimulado.importe > 99999 )).map(({simulacion}) => simulacion).join(`\n`));
//             break;
//         case 3:
//             resultado = salir();
//             break;



// do {
// meses = parseFloat(prompt("Ingrese a cuantos meses desea devolver el crédito: 6, 12, 18 o 24. \nSi desea ver todas sus simulaciones recientes ingrese 1. \nSi desea ver sus simulaciones recientes iguales o mayores a 100000 ingrese 2. \nSi desea salir ingrese 3."))
//     if (meses == 6 || meses == 12 || meses == 18 || meses == 24) {
// importe = parseFloat(prompt("Ingrese el importe del crédito que desea solicitar."))
//     }
//     indicarMesOpcion(meses)
// } while (meses != 3);