
var maior = 0;
var menor = 0;
var listaPontosRodadas = [];
const listaDeQuestoes = [
    {
        pergunta: "Qual é o café expresso?",
        alternativaA: "<img src=\"./assets/imgs/coado.jpg\">",
        alternativaB: "<img src=\"./assets/imgs/espresso.jpg\">",
        alternativaC: "<img src=\"./assets/imgs/coldBrew.jpg\">",
        alternativaD: "<img src=\"./assets/imgs/cafeCmLeite.jpg\">",
        alternativaCorreta: "alternativaB"
    },
    {
        pergunta: "Qual é o café coado?",
        alternativaA: "<img src=\"./assets/imgs/opFrape.jpg\">",
        alternativaB: "<img src=\"./assets/imgs/opExpresso.jpg\">",
        alternativaC: "<img src=\"./assets/imgs/coado.jpg\">",
        alternativaD: "<img src=\"./assets/imgs/opMatcha.jpg\">",
        alternativaCorreta: "alternativaC"
    },
    {
        pergunta: "Qual é o Cold Brew?",
        alternativaA: "<img src=\"./assets/imgs/cafeCmLeite.jpg\">",
        alternativaB: "<img src=\"./assets/imgs/coldBrew.jpg\">",
        alternativaC: "<img src=\"./assets/imgs/cappucino.JPG\">",
        alternativaD: "<img src=\"./assets/imgs/afogato.jpg\">",
        alternativaCorreta: "alternativaB"
    },
    {
        pergunta: "Qual o ingrediente chave do Affogato?",
        alternativaA: "<img src=\"./assets/imgs/opCreme.jpg\">",
        alternativaB: "<img src=\"./assets/imgs/opPacoca.jpg\">",
        alternativaC: "<img src=\"./assets/imgs/opNutella.jpg\">",
        alternativaD: "<img src=\"./assets/imgs/opSorvete.JPG\">",
        alternativaCorreta: "alternativaD"
    },
    {
        pergunta: "Qual é o Frappucino?",
        alternativaA: "<img src=\"./assets/imgs/opMatcha.jpg\">",
        alternativaB: "<img src=\"./assets/imgs/espresso.jpg\">",
        alternativaC: "<img src=\"./assets/imgs/frappucino.jpg\">",
        alternativaD: "<img src=\"./assets/imgs/opNutella.jpg\">",
        alternativaCorreta: "alternativaC"
    }
]

// variáveis globais    
let numeroDaQuestaoAtual = 0
let pontuacaoFinal = 0
let tentativaIncorreta = 0
let certas = 0
let erradas = 0
let quantidadeDeQuestoes = listaDeQuestoes.length
// let isUltima = numeroDaQuestaoAtual == quantidadeDeQuestoes-1 ? true : false

function onloadEsconder() {
    document.getElementById('pontuacao').style.display = "none"
    document.getElementById('jogo').style.display = "none"
}

function iniciarQuiz() {
    pontuacaoFinal = 0;
    certas = 0;
    erradas = 0;

    titulo.style.display = "flex";
    pontuacaoEJogo.style.display = "flex"
    document.getElementById('jogo').style.display = "flex"
    document.getElementById('btnIniciarQuest').style.display = "none"

    document.getElementById('btnIniciarQuiz').style.display = "none"

    document.getElementById('qtdQuestoes').innerHTML = quantidadeDeQuestoes

    preencherHTMLcomQuestaoAtual(0)

    btnSubmeter.disabled = false
    btnProx.disabled = true
    // btnConcluir.disabled = true
    btnTentarNovamente.disabled = true
}

function preencherHTMLcomQuestaoAtual(index) {
    habilitarAlternativas(true)
    const questaoAtual = listaDeQuestoes[index]
    numeroDaQuestaoAtual = index
    console.log("questaoAtual")
    console.log(questaoAtual)
    document.getElementById("spanNumeroDaQuestaoAtual").innerHTML = Number(index) + 1 // ajustando porque o index começa em 0
    document.getElementById("spanQuestaoExibida").innerHTML = questaoAtual.pergunta;
    document.getElementById("labelOpcaoUm").innerHTML = questaoAtual.alternativaA;
    document.getElementById("labelOpcaoDois").innerHTML = questaoAtual.alternativaB;
    document.getElementById("labelOpcaoTres").innerHTML = questaoAtual.alternativaC;
    document.getElementById("labelOpcaoQuatro").innerHTML = questaoAtual.alternativaD;
}

function fecharDetalhe() {
    document.getElementById('pontuacao').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function submeter() {
    const options = document.getElementsByName("option"); // recupera alternativas no html

    let hasChecked = false
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            hasChecked = true
            break
        }
    }

    if (!hasChecked) {
        alert("Não há alternativas escolhidas. Escolha uma opção.")
    } else {
        btnSubmeter.disabled = true
        btnProx.disabled = false

        habilitarAlternativas(false)

        checarResposta()
    }
}

function iniciarQuest() {
    window.location = "questionario.html"
}

function habilitarAlternativas(trueOrFalse) {
    let opcaoEscolhida = trueOrFalse ? false : true

    primeiraOpcao.disabled = opcaoEscolhida
    segundaOpcao.disabled = opcaoEscolhida
    terceiraOpcao.disabled = opcaoEscolhida
    quartaOpcao.disabled = opcaoEscolhida

}

function avancar() {
    btnProx.disabled = true
    btnSubmeter.disabled = false

    desmarcarRadioButtons()

    if (numeroDaQuestaoAtual < quantidadeDeQuestoes - 1) {
        preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual)
    } else if (numeroDaQuestaoAtual == quantidadeDeQuestoes - 1) {
        alert("Atenção... a próxima é a ultima questão!")
        preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual)
    } else {
        finalizarJogo()
    }
    limparCoresBackgroundOpcoes()
}

function checarResposta() {
    const questaoAtual = listaDeQuestoes[numeroDaQuestaoAtual] // questão atual 
    const respostaQuestaoAtual = questaoAtual.alternativaCorreta // qual é a resposta correta da questão atual

    const options = document.getElementsByName("option"); // recupera alternativas no html

    let alternativaCorreta = null // variável para armazenar a alternativa correta

    options.forEach((option) => {
        if (option.value === respostaQuestaoAtual) {
            console.log("alternativaCorreta está no componente: " + alternativaCorreta)
            alternativaCorreta = option.labels[0].id
        }
    })

    // verifica se resposta assinalada é correta
    options.forEach((option) => {
        if (option.checked === true && option.value === respostaQuestaoAtual) {
            document.getElementById(alternativaCorreta).classList.add("text-success-with-bg")
            pontuacaoFinal++
            certas++
            document.getElementById("spanCertas").innerHTML = certas
            numeroDaQuestaoAtual++
        } else if (option.checked && option.value !== respostaQuestaoAtual) {
            const wrongLabelId = option.labels[0].id

            document.getElementById(wrongLabelId).classList.add("text-danger-with-bg")
            document.getElementById(alternativaCorreta).classList.add("text-success-with-bg")
            tentativaIncorreta++
            erradas++
            document.getElementById("spanErradas").innerHTML = erradas
            numeroDaQuestaoAtual++
        }
    })
}

function tentarNovamente() {
    iniciarQuiz();
}


function limparCoresBackgroundOpcoes() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).classList.remove("text-danger-with-bg")
        document.getElementById(option.labels[0].id).classList.remove("text-success-with-bg")
    })
}

function desmarcarRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

function finalizarJogo() {
    var idUser = sessionStorage.ID_USUARIO;
    listaPontosRodadas.push(pontuacaoFinal);

    document.getElementById('overlay').style.display = 'block';
    document.getElementById('pontuacao').style.display = "flex";
    let textoParaMensagemFinal = null
    let classComCoresParaMensagemFinal = null

    porcentagemFinalDeAcertos = pontuacaoFinal / quantidadeDeQuestoes

    if (porcentagemFinalDeAcertos <= 0.3) {
        textoParaMensagemFinal = "Parece que você não estudou..."
        classComCoresParaMensagemFinal = "text-danger-with-bg"
    }
    else if (porcentagemFinalDeAcertos > 0.3 && porcentagemFinalDeAcertos < 0.9) {
        textoParaMensagemFinal = "Pode melhorar na próxima, hein!"
        classComCoresParaMensagemFinal = "text-warning-with-bg"
    }
    else if (porcentagemFinalDeAcertos >= 0.9) {
        textoParaMensagemFinal = "Uau, parabéns!"
        classComCoresParaMensagemFinal = "text-success-with-bg"
    }


    textoParaMensagemFinal += "<br>Você acertou " + Math.round((porcentagemFinalDeAcertos) * 100) + "% das questões."

    if (listaPontosRodadas.length > 1) {
        for (var i = 0; i <= listaPontosRodadas.length; i++) {
            if (listaPontosRodadas[i]) {
                if (listaPontosRodadas[i] > maior) {
                    maior = listaPontosRodadas[i];
                }

                if (menor == 0) {
                    menor = listaPontosRodadas[i];
                }
                else if (listaPontosRodadas[i] < menor) {
                    menor = listaPontosRodadas[i];
                }
            }
        }
        textoParaMensagemFinal += `<br>Maior Resultado: ${maior} & Menor Resultado: ${menor}`;
    }

    document.getElementById('msgFinal').innerHTML = textoParaMensagemFinal
    document.getElementById('msgFinal').classList.add(classComCoresParaMensagemFinal)
    document.getElementById('spanPontuacaoFinal').innerHTML = pontuacaoFinal

    document.getElementById('jogo').classList.add("text-new-gray")

    btnProx.disabled = true
    btnSubmeter.disabled = true
    // btnConcluir.disabled = true
    btnTentarNovamente.disabled = false

    fetch("/usuarios/finalizarJogo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            pontuacaoServer: pontuacaoFinal,
            idUserServer: idUser
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;

}