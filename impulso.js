document.getElementById("form-orcamento").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Dados enviados! Redirecionando para o Google Forms...");

    window.open("https://docs.google.com/forms/d/e/1FAIpQLScL_JWqLaP6sz2vJ4oIK0AjgaOWh4a2BA139AJp25JwgYVaDg/viewform?usp=header", "_blank");
});