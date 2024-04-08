const form = document.getElementById('form-agenda');
const nomeContato = [];
const numeroContato = [];
const emailContato = [];
let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();
    adicionarLinha();
    atualizarTabela();
});

function adicionarLinha() {
    const inputNomeDoContato = document.getElementById('nome-contato').value;
    const inputNumeroDoContato = document.getElementById('numero-contato').value;
    const inputEmailDoContato = document.getElementById('email-contato').value;

    if (nomeContato.includes(inputNomeDoContato)) {
        alert(`O nome ${inputNomeDoContato} já foi adicionado, tente outro nome.`);
    } else if (numeroContato.includes(parseInt(inputNumeroDoContato))) {
        alert(`O número ${inputNumeroDoContato} já foi adicionado, tente outro número.`);
    } else if (emailContato.includes(inputEmailDoContato)) {
        alert(`O e-mail ${inputEmailDoContato} já foi adicionado, tente outro e-mail.`)
    } else {
        nomeContato.push(inputNomeDoContato);
        numeroContato.push(parseInt(inputNumeroDoContato));
        emailContato.push(inputEmailDoContato);

        let linha = '<tr>';
        linha += `<td>${inputNomeDoContato}</td>`;
        linha += `<td>${inputNumeroDoContato}</td>`;
        linha += `<td>${inputEmailDoContato}</td>`;
        linha += `</tr>`;
        
        linhas += linha;

        form.reset();
    };
};

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};


