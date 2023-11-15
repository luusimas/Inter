// INDEX

document.addEventListener("DOMContentLoaded", function () {
    var carrossel = document.querySelector(".carrossel");
    var imagens = document.querySelectorAll(".imagem");
    var index = 0;

    function avancarImagem() {
        index = (index + 1) % imagens.length;
        mostrarImagem();
    }

    function mostrarImagem() {
        carrossel.style.transform = "translateX(" + -index * 100 + "%)";
    }

    setInterval(avancarImagem, 3000); // Muda a cada 3 segundos (3000 milissegundos)
});

// CULTURA

// CIDADANIA

// CELEBRAÇÕES

// INFLUÊNCIAS