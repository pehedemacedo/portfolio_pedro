document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
        const observador = new IntersectionObserver(function (entradas) {
            entradas.forEach(function (entrada) {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("visivel");
                    observador.unobserve(entrada.target);
                }
            });
        }, { threshold: 0.12 });

        elementos.forEach(function (elemento) {
            observador.observe(elemento);
        });
    } else {
        elementos.forEach(function (elemento) {
            elemento.classList.add("visivel");
        });
    }

    const botaoTopo = document.getElementById("voltarTopo");

    if (botaoTopo) {
        window.addEventListener("scroll", function () {
            botaoTopo.classList.toggle("visivel", window.scrollY > 400);
        });

        botaoTopo.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});