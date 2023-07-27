import ehUmCpf from "./valida-cpf.js";

const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampos(campo));
});

function verificaCampos(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCpf(campo);
    }
}
