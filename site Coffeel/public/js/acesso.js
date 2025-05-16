function entrar() {
    aguardar();

    var emailVar = inpt_emailLogin.value;
    var senhaVar = inpt_senhaLogin.value;

    if (emailVar == "" || senhaVar == "") {
        cardErro.style.display = "block"
        mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";
        finalizarAguardar();
        return false;
    }
    else {
        setInterval(sumirMensagem, 5000)
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.idUsuario;

                setTimeout(function () {
                    window.location = "quiz.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;

}

function sumirMensagem() {
    cardErro.style.display = "none"
}



function cadastrar() {
    var nomeVar = inpt_nomeCadastro.value;
    var emailVar = inpt_emailCadastro.value;
    var senhaVar = inpt_senhaCadastro.value;
    var confirmarSenha = inpt_confirmeSenha.value;
    var acharArroba = 0;
    var acharPonto = 0;

    if (nomeVar == '' && emailVar == '' && senhaVar == '' && confirmarSenha == '') {
        alert('Insira algum valor em todos os campos!')
    }
    else if (confirmarSenha != senhaVar) {
        alert('As senhas não são similares!')
    }
    else if (emailVar.length < 15) {
        alert('Email muito simples!')
    }
    else {
        for (var i = 0; i <= emailVar.length; i++) {
            if (emailVar[i] == '@') {
                acharArroba++;
            }
            if (emailVar[i] == '.') {
                acharPonto++;
            }
        }

        if (acharArroba > 0 && acharPonto > 0) {
            setInterval(sumirMensagem, 5000);
        }
        else {
            cardErro.style.display = "block";
            mensagem_erro.innerHTML =
                "(Mensagem de erro para todos os campos em branco)";

            finalizarAguardar();
            return false;
        }


        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                nomeServer: nomeVar,
                emailServer: emailVar,
                senhaServer: senhaVar,
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {
                    cardErro.style.display = "block";

                    mensagem_erro.innerHTML =
                        "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

                    setTimeout(() => {
                        window.location = "login.html";
                    }, "2000");

                    limparFormulario();
                    finalizarAguardar();
                } else {
                    throw "Houve um erro ao tentar realizar o cadastro!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
                finalizarAguardar();
            });

        return false;
    }

}
