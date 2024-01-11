function relogioHour() {
    function getTime() {
        const hour = new Date();
        return hour.toLocaleTimeString('pt-BR', {
            hour12: false
        });
    }

    const timer = setInterval(() => {
        const display = document.querySelector('.display-hour');
        display.innerHTML = getTime();
    }, 1000);
}

relogioHour();

function formatarData(data) {
    const diasSemana = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    const mes = ('0' + (data.getMonth() + 1)).slice(-2);
    const dia = ('0' + data.getDate()).slice(-2);
    const diaSemana = diasSemana[data.getDay()];
  
    return `${diaSemana} ${mes}-${dia}`;
}

const dataAtual = new Date();
const dataFormatada = formatarData(dataAtual);
const display = document.querySelector('.display-date');
display.innerHTML = dataFormatada;