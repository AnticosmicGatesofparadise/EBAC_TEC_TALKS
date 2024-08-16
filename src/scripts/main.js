AOS.init();

const dataDoEvento = new Date("Aug 26, 2024 11:00:00");
const timeStamp = dataDoEvento.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaEvento = timeStamp - timeStampAtual;

    const diasateEvento = Math.floor(distanciaEvento / (1000 * 60 * 60 * 24));
    const horasateEvento = Math.floor(distanciaEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
    const minateEvento = Math.floor(distanciaEvento % (1000 * 60 * 60)) / (1000 * 60);
    const segateEvento = Math.floor(distanciaEvento % (1000 * 60) / 1000);

    document.getElementById('contador').innerHTML = `${diasateEvento}d ${horasateEvento}h ${minateEvento}m ${segateEvento}s`
    
    if (distanciaEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = `Evento Expirado`
    }
}, 1000);