document.getElementById('budget-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const receita = parseFloat(document.getElementById('receita').value);
    const despesas = parseFloat(document.getElementById('despesas').value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(receita) || isNaN(despesas)) {
        resultadoDiv.textContent = 'Por favor, preencha os valores corretamente.';
        resultadoDiv.style.color = 'red';
        return;
    }

    const saldo = receita - despesas;
    const percentualDespesas = (despesas / receita) * 100;

    let mensagem = '';

    if (saldo > 0) {
        mensagem = `Parabéns! Seu saldo mensal é positivo: R$ ${saldo.toFixed(2)}. Você está economizando ${(saldo / receita * 100).toFixed(2)}% da sua receita.`;
        resultadoDiv.style.color = 'green';
    } else if (saldo === 0) {
        mensagem = 'Seu orçamento está equilibrado, mas cuidado para não ultrapassar suas receitas.';
        resultadoDiv.style.color = 'orange';
    } else {
        mensagem = `Atenção! Seu saldo mensal está negativo: R$ ${saldo.toFixed(2)}. Você está gastando ${(percentualDespesas).toFixed(2)}% da sua receita.`;
        resultadoDiv.style.color = 'red';
    }

    resultadoDiv.textContent = mensagem;
});
