// =====================================================
// ONG ESPERANÇA - SCRIPT PRINCIPAL
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("JavaScript carregado com sucesso!");

    // =================================================
    // MENU MOBILE
    // =================================================

    const menuToggle = document.querySelector(".menu-toggle");
    const menuLinks = document.querySelector(".menu-links");

    if (menuToggle && menuLinks) {
        menuToggle.addEventListener("click", function () {
            menuLinks.classList.toggle("active");
        });
    }

    // =================================================
    // FORMULÁRIO DE CADASTRO
    // =================================================

    const formulario = document.querySelector("#cadastroForm");

    if (formulario) {

        formulario.addEventListener("submit", function (event) {

            event.preventDefault();

            const dados = new FormData(formulario);

            const cadastro = Object.fromEntries(dados.entries());

            // Salvar os dados no navegador
            localStorage.setItem(
                "cadastroONG",
                JSON.stringify(cadastro)
            );

            alert("Cadastro realizado com sucesso!");

            formulario.reset();
        });
    }

    // =================================================
    // RECUPERAR CADASTRO SALVO
    // =================================================

    const cadastroSalvo = localStorage.getItem("cadastroONG");

    if (cadastroSalvo) {
        console.log(
            "Cadastro encontrado:",
            JSON.parse(cadastroSalvo)
        );
    }

});
