// export default para ser importada no script.js
// função que tem como objetivo verificar a partir da data de nascimento, se a pessoa é maior de idade
export default function ehMaiorDeIdade(campo) {
    // atribui o valor colocado no campo de data, no molde de uma data através do Date()
    const dataNascimento = new Date(campo.value);
    //chama a função passando a data de nascimento inserida para ser validada
    if (!validaIdade(dataNascimento)) {
        campo.setCustomValidity("O usuário não é maior de idade!");
    }
}

// função que irá validar a data de nascimento
function validaIdade(data) {
    // declarando a data do dia atual
    const dataAtual = new Date();
    // pega a data de nascimento inserida e adiciona +18 anos
    const dataMais18 = new Date(
        data.getUTCFullYear() + 18,
        data.getUTCMonth(),
        data.getUTCDate()
    );

    // retorna se a data atual é maior do que a data de nascimento somada com +18 anos
    // se a data atual for maior, quer dizer que a pessoa possuí mais de 18 anos
    return dataAtual >= dataMais18;
}
