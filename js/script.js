import ehUmCpf from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";

// seleciona todos os formularios so selecionando o campo required
const camposDoFormulario = document.querySelectorAll("[required]");

// passa por todos os campos e adiciona um listener e executa a função verificaCampos em cada um
camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampos(campo));
});

function verificaCampos(campo) {
    let mensagem = "";
    // se o campo tiver o nome "cpf" e o tamanho dele for maior ou igual a 11 executa a funçao ehUmCpf passando esse campo como parametro
    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCpf(campo);
    }

    // se o campo tiver o nome "aniversario" e o valor do campo ficar vazio, executa a funçao ehMaiorDeIdade passando esse campo como parametro
    if (campo.name == "aniversario" && campo.value != "") {
        ehMaiorDeIdade(campo);
    }

    // irá passar por cada erro, passando esse erro como parâmetro na arrow function
    tiposDeErro.forEach((erro) => {
        // se certo campo possuir aquele erro como verdadeiro(está acontecendo) irá:
        if (campo.validity[erro]) {
            // entra no objeto mensagens, entra na chave correspondente ao nome do campo, e em seguida na chave com o nome do erro e esse valor será armazenado na variavel mensagem
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem);
        }
    });
}

// obj com os nomes de erros
const tiposDeErro = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
    "customError",
];

// mensagens customizadas para o erro em cada campo
const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido.",
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido.",
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes.",
    },
    cpf: {
        valueMissing: "O campo de CPF não pode estar vazio.",
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes.",
    },
    aniversario: {
        valueMissing: "O campo de data de nascimento não pode estar vazio.",
        customError: "Você deve ser maior que 18 anos para se cadastrar.",
    },
    termos: {
        valueMissing: "Você deve aceitar nossos termos antes de continuar.",
    },
};
