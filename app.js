// let importe = 0;
// let meses = 0;

// function seisMeses(importe, meses) {
//     return (importe + ((importe / 100) *10)) / meses;
// }

// function doceMeses(importe, meses) {
//     return (importe + ((importe / 100) *20)) / meses;
// }

// function dieciochoMeses(importe, meses) {
//     return (importe + ((importe / 100) *30)) / meses;
// }

// function veinticuatroMeses(importe, meses) {
//     return (importe + ((importe / 100) *40)) / meses;
// }

// function salir() {
//     alert (`Ingresó salir`);
// }

// function resultadoCotizacion(resultado, meses) {
//     alert (`serán ${meses} cuotas de ${Math.round(resultado)} pesos cada una`);
// }

// class creditoSimulado {
//     constructor(importe, meses, resultado) {
//         this.importe = importe;
//         this.meses = meses;
//         this.resultado = Math.round(resultado);
//         this.simulacion = ` Importe $${importe} - meses ${meses} - cuotas fijas de $${Math.round(resultado)}. `;
//     }
// }

// const listaSimulaciones = [];

// let simulacionesGrandes = [];


// function indicarMesOpcion(meses) {
//     switch (meses) {
//         case 6:
//             resultado = seisMeses(importe, meses);
//             listaSimulaciones.push(new creditoSimulado(importe, meses, resultado));
//             resultadoCotizacion(resultado, meses)
//             break;
//         case 12:
//             resultado = doceMeses(importe, meses);
//             listaSimulaciones.push(new creditoSimulado(importe, meses, resultado));
//             resultadoCotizacion(resultado, meses)
//             break;
//         case 18:
//             resultado = dieciochoMeses(importe, meses);
//             listaSimulaciones.push(new creditoSimulado(importe, meses, resultado));
//             resultadoCotizacion(resultado, meses)
//             break;
//         case 24:
//             resultado = veinticuatroMeses(importe, meses);
//             listaSimulaciones.push(new creditoSimulado(importe, meses, resultado));
//             resultadoCotizacion(resultado, meses)
//             break;
//         case 1:
//             alert(listaSimulaciones.map(({simulacion}) => simulacion).join(`\n`));
//             break;
//         case 2:
//             alert((simulacionesGrandes = listaSimulaciones.filter((creditoSimulado) => creditoSimulado.importe > 99999 )).map(({simulacion}) => simulacion).join(`\n`));
//             break;
//         case 3:
//             resultado = salir();
//             break;
//         default:
//             alert(`No ingresaste una cantidad de meses u opción válida`)
//             break;
//     }
// }


// do {
// meses = parseFloat(prompt("Ingrese a cuantos meses desea devolver el crédito: 6, 12, 18 o 24. \nSi desea ver todas sus simulaciones recientes ingrese 1. \nSi desea ver sus simulaciones recientes iguales o mayores a 100000 ingrese 2. \nSi desea salir ingrese 3."))
//     if (meses == 6 || meses == 12 || meses == 18 || meses == 24) {
// importe = parseFloat(prompt("Ingrese el importe del crédito que desea solicitar."))
//     }
//     indicarMesOpcion(meses)
// } while (meses != 3);