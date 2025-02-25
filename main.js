document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const campoA = document.getElementById("campoA").value;
    const campoB = document.getElementById("campoB").value;
    const mensagem = document.getElementById("mensagem");

    if (campoB > campoA) {
        mensagem.textContent = "Campo B e Maior que Campo A.";
        mensagem.className = "success";
    } else {
        mensagem.textContent = "Erro: Campo B deve ser maior que Campo A.";
        mensagem.className = "error";
    }
});
    
