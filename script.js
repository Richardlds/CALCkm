function selecionarTipoKm(element) {
    // Remove a classe 'selected' de todos os spans de tipo-km
    const spans = document.querySelectorAll('.tipo-km');
    spans.forEach(span => {
        span.classList.remove('selected');
    });

    // Adiciona a classe 'selected' ao span clicado
    element.classList.add('selected');

    // Chama a função para calcular sempre que o tipo de KM for alterado
    calcular();
}

function calcular() {
    const km = parseFloat(document.getElementById('km').value) || 0;
    const kmTotal = (km + 5) * 2; // Cálculo do KM TOTAL
    document.getElementById('kmTotal').value = kmTotal;

    const tipoKm = document.querySelector('.tipo-km.selected').getAttribute('data-value');

    let saidaValor;
    let valorPorKm;

    if (tipoKm === 'leve') {
        saidaValor = 164.71;
        valorPorKm = 2.52;
    } else if (tipoKm === 'utilitario') {
        saidaValor = 263.86;
        valorPorKm = 2.65;
    }

    const taxa = 47;
    const kmsExcedente = kmTotal > 40 ? kmTotal - 40 : 0;
    const valorKmExcedente = kmsExcedente * valorPorKm;
    const valorTotal = saidaValor + valorKmExcedente + taxa;
    const taxaVolare = valorTotal * 0.22; // Cálculo da TAXA VOLARE (22% do valor total)
    const valorNegociar = valorTotal - taxaVolare - (valorTotal * 0,5); // Cálculo do VALOR A NEGOCIAR

    document.getElementById('saida').value = `R$ ${saidaValor.toFixed(2)}`;
    document.getElementById('kmsExcedente').value = `${kmsExcedente} KM`;
    document.getElementById('taxa').value = `R$ ${taxa.toFixed(2)}`;
    document.getElementById('valorTotal').value = `R$ ${valorTotal.toFixed(2)}`;
    document.getElementById('taxaVolare').value = `R$ ${taxaVolare.toFixed(2)}`;
    document.getElementById('valorNegociar').value = `R$ ${valorNegociar.toFixed(2)}`;
}

// Chamar calcular inicialmente para exibir os valores padrão
calcular();
