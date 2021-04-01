const turnOn = document.getElementById ( 'ligada' );
const turnOff = document.getElementById ( 'desligada' );
const lamp = document.getElementById ( 'lamp' );

function lampEstaQuebrada () {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampLigada () {
    if ( !lampEstaQuebrada () ) {
        lamp.src = './img/ligada.jpg';
    }
}

function lampDesligada () {
    if ( !lampEstaQuebrada () ) {
        lamp.src = './img/desligada.jpg';
    }
}

function lampQuebrada () {
    lamp.src = './img/quebrada.jpg';
}

turnOn.addEventListener('click', lampLigada);
turnOff.addEventListener('click', lampDesligada);
lamp.addEventListener('mouseover', lampLigada);
lamp.addEventListener('mouseleave', lampDesligada);
lamp.addEventListener('dblclick', lampQuebrada);