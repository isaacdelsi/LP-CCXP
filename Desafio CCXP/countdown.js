//São constantes pois não será alterada pelo usuário.

const dias = document.getElementById('dias')
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const reencontro = "13 aug 2023"

function countDown(){

    const dataReencontro = new Date(reencontro)
    const hoje = new Date()

    const segTotal = (dataReencontro - hoje)/1000;

    const diasFinal = Math.floor(segTotal / 60 / 60 / 24);
    const horasFinal = Math.floor(segTotal / 60 / 60 ) % 24;
    const minutosFinal = Math.floor(segTotal / 60 ) % 60;
    const segundosFinal = Math.floor(segTotal) % 60;

    dias.innerHTML = `${diasFinal}D`
    horas.innerHTML = `${formatoTempo (horasFinal)}H`
    minutos.innerHTML = `${formatoTempo (minutosFinal)}M`
    segundos.innerHTML = `${formatoTempo (segundosFinal)}S`

}

function formatoTempo( tempo ){
    return tempo <10? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000);