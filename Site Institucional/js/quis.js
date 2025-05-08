
var qtdClique = 0;
var pontos = 0;

function proximaPergunta() {
    qtdClique++;

    if (qtdClique == 1) {
        pergunta1.style.display = "none";
        pergunta2.style.display = "flex";
    }
    else if (qtdClique == 2) {
        pergunta2.style.display = "none";
        pergunta3.style.display = "flex";
    }
    else if (qtdClique == 3) {
        pergunta3.style.display = "none";
        pergunta4.style.display = "flex";
    }
    else if (qtdClique == 4) {
        pergunta4.style.display = "none";
        pergunta5.style.display = "flex";

        btnProximaPergunta.innerHTML = `<p>Gravar resultado</p>`
    }
    else if (qtdClique == 5) {
        btnProximaPergunta.style.display = "none";
        btnVerResultado.style.display = "flex";
    }

    gravarResultado();
}

function gravarResultado() {

    if (opcao2.checked == true) {
        pontos++;
    }
    else if (opcao7.checked == true) {
        pontos++
    }
    else if (opcao10.checked == true) {
        pontos++
    }
    else if (opcao16.checked == true) {
        pontos++
    }
    else if (opcao19.checked == true) {
        pontos++
    }
    else {
        pontos = pontos;
    }
}

function verResultado() {
    alert(`Você acertou ${pontos} perguntas!`);
}