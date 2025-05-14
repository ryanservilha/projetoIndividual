var database = require("../database/config")

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
    var instrucaoSql = `select DATE_FORMAT(dtResposta, '%d/%m') AS Dia, COUNT(DISTINCT fkUsuario) AS Acessos from resposta
    GROUP BY DATE_FORMAT(dtResposta, '%d/%m')
    ORDER BY DATE_FORMAT(dtResposta, '%d/%m') DESC LIMIT 7;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoAmbiente() {
    var instrucaoSql = `SELECT descricao AS Ambiente, COUNT(descricao) AS QtdAmbiente FROM resposta 
    WHERE fkPergunta = 3
    GROUP BY descricao;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoAmbiente() {
    var instrucaoSql = `SELECT descricao AS Ambiente, COUNT(descricao) AS QtdAmbiente FROM resposta 
    WHERE fkPergunta = 3
    GROUP BY descricao;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoEssencial() {
    var instrucaoSql = `SELECT descricao AS Descricao, count(descricao) AS Quantidade FROM resposta
    WHERE fkPergunta = 2
    GROUP BY descricao;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    idadeMedia,
    cafeMaisConsumido,
    qtdEnvios,
    mediaAcertos,
    graficoSemana,
    graficoAmbiente,
    graficoEssencial
};