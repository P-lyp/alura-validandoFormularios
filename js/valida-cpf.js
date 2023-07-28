// export default para ser importada no script.js
// função que tem como objetivo verificar se o cpf existe ou não
export default function ehUmCpf(campo) {
    // substitui o campo do cpf com o pattern regex
    const cpf = campo.value.replace(/\.|-/g, "");

    // se essa função retornar verdade e
    if (
        validaNumerosRepetidos(cpf) ||
        validaPrimeiroDigito(cpf) ||
        validaSegundoDigito(cpf)
    ) {
        campo.setCustomValidity("Esse CPF não é válido!");
    }
}

// função que tem como objetivo retornar se o cpf é repetido
function validaNumerosRepetidos(cpf) {
    // valores de numeros repetidos de um cpf
    const numeroRepetidos = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
    ];

    // retorna se o cpf digitado no campo é encontrado no array que contem números repetidos
    return numeroRepetidos.includes(cpf);
}

// função de cálculo de validação de primeiro dígito de um cpf
function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for (let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != cpf[9];
}

// função de cálculo de validação de segundo dígito de um cpf
function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for (let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != cpf[10];
}
