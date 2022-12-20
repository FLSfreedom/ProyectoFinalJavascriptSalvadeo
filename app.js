class creditoSimulado {
    constructor(importe, meses, resultado) {
        this.importe = importe;
        this.meses = meses;
        this.resultado = Math.round(resultado);
        this.simulacion = ` Importe $${importe} - meses ${meses} - cuotas fijas de $${Math.round(resultado)}. `;
    }
}

let listaSimulaciones = [];
let simulacionesGrandes = [];

let MensajeErrorIntroDatos = document.getElementById('error');
let formulario = document.getElementById('formularioSimulador');
let listaCreditos = document.getElementById('listaCreditosRealizados');
let listaFiltrada = document.getElementById('listaConFiltro');

let listaSimulacionesLocalS = localStorage.getItem('listaSimulaciones');

if(listaSimulacionesLocalS) {
    listaSimulaciones = JSON.parse(listaSimulacionesLocalS);
    listaCreditos.innerText = listaSimulaciones.map(({simulacion}) => simulacion).join(`\n`);
}

function frase () {fetch('https://api.breakingbadquotes.xyz/v1/quotes')
        .then(response => response.json())
        .then(function(data) {
            let fraseMostrar = JSON.stringify(data[0].quote)
            let autorMostrar = JSON.stringify(data[0].author)
            Toastify({
                text: fraseMostrar + " - " + autorMostrar,
                duration: 15000,
                close: true,
                gravity: "top",
                position: "center",
                stopOnFocus: true,
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
              }).showToast();
        });
};

function calculoCredito (importe, meses, porcentajeCalculo) {
    return (importe + ((importe / 100) *porcentajeCalculo)) / meses;
};

function agregarSimulacionLista (importe, meses, resultado) {
    swal({
        title: `Importe $${importe} - meses ${meses} - cuotas fijas de $${Math.round(resultado)}.`,
      })
      .then(() => {
        swal({
            title: "¿Agregar esta simulación a la lista?",
            text: "En caso de aceptar, la simulación será agregada a la lista de tus simulaciones recientes \n(podés guardar hasta 5). \n \nTambién recibirás una frase de una conocida serie \n¡En su idioma original!",
            buttons: ["No agregar :(", "¡Agregar!"],
          })
          .then((agregarrr) => {
            if (agregarrr) {
              swal("¡La simulación fue agregada!", {
                icon: "success",
              });
              return [listaSimulaciones.push(new creditoSimulado(importe, meses, resultado)), 
                listaCreditos.innerText = listaSimulaciones.map(({simulacion}) => simulacion).join(`\n`), 
                localStorage.setItem('listaSimulaciones', JSON.stringify(listaSimulaciones)), 
                frase()];
            } else {
              swal("No agregaste la simulación y no habrá frase :(");
            }
          });
      })
};

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let datos = e.target.children;

    let meses = 0;
    let importe = 0;

    meses = parseInt(datos[0].value);
    importe = parseInt(datos[1].value);

    let porcentajeCalculo = 0;

    if (meses !== '' && importe !== '' && meses > 0 && importe > 0) {
        switch (meses) {
            case 6:
                porcentajeCalculo = 10;
                resultado = calculoCredito (importe, meses, porcentajeCalculo);
                agregarSimulacionLista (importe, meses, resultado) ;
                break;
            case 12:
                porcentajeCalculo = 20;
                resultado = calculoCredito (importe, meses, porcentajeCalculo);
                agregarSimulacionLista (importe, meses, resultado) ;
                break;
            case 18:
                porcentajeCalculo = 30;
                resultado = calculoCredito (importe, meses, porcentajeCalculo);
                agregarSimulacionLista (importe, meses, resultado) ;
                break;
            case 24:
                porcentajeCalculo = 40;
                resultado = calculoCredito (importe, meses, porcentajeCalculo);
                agregarSimulacionLista (importe, meses, resultado) ;
                break;
            default:
                porcentajeCalculo = 70;
                resultado = calculoCredito (importe, meses, porcentajeCalculo);
                agregarSimulacionLista (importe, meses, resultado) ;
                break;
                }
    MensajeErrorIntroDatos.innerText = '';

    } else {
        MensajeErrorIntroDatos.innerText = 'Debés completar todos los campos ¡Por favor!';
    };
    datos[0].value = '';
    datos[1].value = '';

    listaCreditos.innerText = listaSimulaciones.map(({simulacion}) => simulacion).join(`\n`);

    if (listaSimulaciones.length > 4) {
        listaSimulaciones.splice(0, 1);
    };

});

function ingresarFiltro(value) {
    listaFiltrada.innerText = listaSimulaciones.filter((creditoSimulado) => creditoSimulado.importe > value ).map(({simulacion}) => simulacion).join(`\n`);
};
