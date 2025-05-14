var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, nome, email, cpf, telCelular FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, cpf, telefone, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, cpf, telefone, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, cpf, telCelular, senha) VALUES ('${nome}', '${email}', '${cpf}', '${telefone}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function finalizarJogo(pontuacao, idUser) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", pontuacao, idUser);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        UPDATE usuario SET pontuacaoQuiz = ${pontuacao}
        WHERE idUsuario = ${idUser};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function enviar(idade, cafeEssencial, lugarConsumo, qtdXicaras, tipoCafe, temperaturaCafe, gastoMensal, motivoConsumo, idUser) {

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idade, cafeEssencial, lugarConsumo, qtdXicaras, tipoCafe, temperaturaCafe, gastoMensal, motivoConsumo, idUser);

    var instrucaoSql = `
        INSERT INTO resposta (fkUsuario, fkPergunta, descricao) VALUES
        ('${idUser}', 1, '${idade}'),
        ('${idUser}', 2, '${cafeEssencial}'),
        ('${idUser}', 3, '${lugarConsumo}'),
        ('${idUser}', 4, '${qtdXicaras}'),
        ('${idUser}', 5, '${tipoCafe}'),
        ('${idUser}', 6, '${temperaturaCafe}'),
        ('${idUser}', 7, '${gastoMensal}'),
        ('${idUser}', 8, '${motivoConsumo}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function idadeMedia() {
    var instrucaoSql = `
    SELECT ROUND(avg(descricao),0) AS IdadeMedia FROM resposta WHERE fkPergunta = 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cafeMaisConsumido() {
    var instrucaoSql = `
    SELECT descricao AS CafeMaisConsumido FROM resposta
    WHERE fkPergunta = 5 
    GROUP BY descricao
    ORDER BY COUNT(descricao) DESC LIMIT 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function qtdEnvios() {
    var instrucaoSql = `SELECT COUNT(DISTINCT fkUsuario) AS QtdEnvios from resposta;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mediaAcertos() {
    var instrucaoSql = `SELECT ROUND(AVG(pontuacaoQuiz),2) AS MediaPontos FROM usuario;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoSemana() {
    var instrucaoSql = `SELECT ROUND(AVG(pontuacaoQuiz),2) AS MediaPontos FROM usuario;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    finalizarJogo,
    enviar,
    idadeMedia,
    cafeMaisConsumido,
    qtdEnvios,
    mediaAcertos,
    graficoSemana
};