const form = document.getElementById('form');
const contato = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();



});

function adicionaLinha() {

    const inputContato = document.getElementById('nome-contato');
    const inputNumero = document.getElementById('telefone-contato');

    if (contato.includes(inputContato.value) || telefone.includes(inputNumero.value)) {
        alert(`Um contato com o nome ${inputContato.value} ou número ${inputNumero.value} já foi salvo, por favor utilize outro nome ou número.`);
    }else {
        contato.push(inputContato.value);
        telefone.push(inputNumero.value);

        let linha = '<tr>';
        linha += `<td>${inputContato.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputContato.value = '';
    inputNumero.value = '';
}

function atualizaTabela() {

    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}