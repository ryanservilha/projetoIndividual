var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json({
                            idUsuario: resultadoAutenticar[0].idUsuario,
                            email: resultadoAutenticar[0].email,
                            nome: resultadoAutenticar[0].nome,
                            senha: resultadoAutenticar[0].senha
                        })

                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var cpf = req.body.cpfServer;
    var telefone = req.body.telefoneServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (cpf == undefined) {
        res.status(400).send("Seu cpf está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, cpf, telefone, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function finalizarJogo(req, res) {
    var pontuacao = req.body.pontuacaoServer;
    var idUser = req.body.idUserServer;
    // Faça as validações dos valores
    if (pontuacao == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (idUser == undefined) {
        res.status(400).send("Seu id está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.finalizarJogo(pontuacao, idUser)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function enviar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idade = req.body.idadeServer;
    var cafeEssencial = req.body.essencialServer;
    var lugarConsumo = req.body.lugarServer;
    var qtdXicaras = req.body.quantXicarasServer;
    var tipoCafe = req.body.tipoServer;
    var temperaturaCafe = req.body.temperaturaServer;
    var gastoMensal = req.body.gastoServer;
    var motivoConsumo = req.body.motivoServer;
    var idUser = req.body.idUserServer;

    // Faça as validações dos valores
    if (idade == undefined) {
        res.status(400).send("Sua idade está undefined!");
    } else if (cafeEssencial == undefined) {
        res.status(400).send("Seu cafe Essencial está undefined!");
    } else if (lugarConsumo == undefined) {
        res.status(400).send("O lugar do consumo está undefined!");
    } else if (qtdXicaras == undefined) {
        res.status(400).send("Sua qtd xicaras está undefined!");
    } else if (tipoCafe == undefined) {
        res.status(400).send("Seu tipo de cafe está undefined!");
    } else if (temperaturaCafe == undefined) {
        res.status(400).send("Sua temperatura está undefined!");
    } else if (gastoMensal == undefined) {
        res.status(400).send("Seu gasto está undefined!");
    } else if (motivoConsumo == undefined) {
        res.status(400).send("Sua motivação está undefined!");
    } else if (idUser == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.enviar(idade, cafeEssencial, lugarConsumo, qtdXicaras, tipoCafe, temperaturaCafe, gastoMensal, motivoConsumo, idUser)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar,
    finalizarJogo,
    enviar
}
