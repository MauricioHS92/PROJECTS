function relogioHour() { // Função que inicia o relógio
    function getTime() { // Função que pega a hora
        const hour = new Date(); // Pega a hora atual
        return hour.toLocaleTimeString('pt-BR', { // Formata a hora para o padrão brasileiro
            hour12: false // Formata a hora para o padrão de 24 horas
        });
    }

    const timer = setInterval(() => { // Atualiza o relógio a cada 1 segundo
        const display = document.querySelector('.display-hour'); // Seleciona o elemento que vai receber a hora
        display.innerHTML = getTime(); // Adiciona a hora no elemento selecionado
    }, 1000); // Atualiza o relógio a cada 1 segundo
}

relogioHour(); // Inicia o relógio

function formatarData(data) { // Formata a data para o padrão americano
    const diasSemana = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']; // Dias da semana em inglês
    const mes = ('0' + (data.getMonth() + 1)).slice(-2); // Adiciona o 0 na frente do mês
    const dia = ('0' + data.getDate()).slice(-2); // Adiciona o 0 na frente do dia
    const diaSemana = diasSemana[data.getDay()]; // Pega o dia da semana
  
    return `${diaSemana} ${mes}-${dia}`; // Retorna a data formatada
}

const dataAtual = new Date(); // Pega a data atual
const dataFormatada = formatarData(dataAtual); // Formata a data atual
const display = document.querySelector('.display-date'); // Seleciona o elemento que vai receber a data
display.innerHTML = dataFormatada; // Adiciona a data formatada no elemento selecionado