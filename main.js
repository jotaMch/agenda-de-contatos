const form = document.getElementById('form-atividade');
const imgConcluido = '<img src="./imagem/verdadeiro.jpg" alt="logo verdadeiro" />';
const imgErro = '<img src="./imagem/erro.jpg" alt="logo erro" />';
const contatos = []
const numero = []
const spanConcluido = '<span class="resultado concluido">Concluído</span>';
const spanErro = '<span class="resultado erro">Erro</span>';

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaContato();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (contatos.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi inserido`);
    } else {
        contatos.push(inputNomeContato.value);
        numero.push(parseInt(inputNumeroContato.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value >= 999999999 ? imgConcluido : imgErro}</td>`;
    linha += `</tr>`;

    linhas += linha;
}
    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}


function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaContatoFinal() {
    const contatoFinal = calculaContato();

    document.getElementById('contato-final-table').innerHTML = contatoFinal;
    document.getElementById('contato-final-resultado').innerHTML = contatoFinal >= 999999999 ? spanConcluido : spanErro;
}

function calculaContato() {
    return numero.length;
}