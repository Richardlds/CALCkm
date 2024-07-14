function selecionarTipoKm(element) {
    const spans = document.querySelectorAll('.tipo-km');
    spans.forEach(span => {
        span.classList.remove('selected');
    });
    element.classList.add('selected');
    calcular();
}

function selecionarPatins(element) {
    const spans = document.querySelectorAll('.patins');
    spans.forEach(span => {
        span.classList.remove('selected');
    });
    element.classList.add('selected');
    calcular();
}

function calcular() {
    const km = parseFloat(document.getElementById('km').value) || 0;
    const kmTotal = (km + 5) * 2;
    document.getElementById('kmTotal').value = kmTotal.toFixed(2);
    
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

    const patinsSelecionado = document.querySelector('.patins.selected').getAttribute('data-value') === 'sim';
    const valorPatins = 320;

    let valorTotal = saidaValor;
    if (patinsSelecionado) {
        valorTotal += valorPatins;
    }

    const taxa = 47;
    const kmsExcedente = kmTotal > 40 ? kmTotal - 40 : 0;
    const valorKmExcedente = kmsExcedente * valorPorKm;
    valorTotal += valorKmExcedente + taxa;

    const taxaVolare = valorTotal * 0.22;
    const valorNegociar = valorTotal - taxaVolare;
    const levaTraz = (valorTotal + patinsSelecionado) * 1.5 + (patinsSelecionado + saidaValor) - taxaVolare;

    document.getElementById('saida').value = `R$ ${saidaValor.toFixed(2)}`;
    document.getElementById('kmsExcedente').value = `${kmsExcedente} KM`;
    document.getElementById('taxa').value = `R$ ${taxa.toFixed(2)}`;
    document.getElementById('valorTotal').value = `R$ ${valorTotal.toFixed(2)}`;
    document.getElementById('taxaVolare').value = `R$ ${taxaVolare.toFixed(2)}`;
    document.getElementById('valorNegociar').value = `R$ ${valorNegociar.toFixed(2)}`;
    document.getElementById('levaTraz').value = `R$ ${levaTraz.toFixed(2)}`;
}

// Chamar calcular inicialmente para exibir os valores padrão
calcular();