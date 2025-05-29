var database = require("../database/config")

function idadeMedia() {
    var instrucaoSql = `
    SELECT ROUND(avg(idade),0) AS IdadeMedia FROM pesquisaCoffeel;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cafeMaisConsumido() {
    var instrucaoSql = `
    SELECT tipo AS CafeMaisConsumido FROM pesquisaCoffeel
    GROUP BY tipo
    ORDER BY COUNT(tipo) DESC LIMIT 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function qtdEnvios() {
    var instrucaoSql = `SELECT motivo AS Motivo FROM pesquisaCoffeel
    GROUP BY motivo
    ORDER BY COUNT(motivo) DESC LIMIT 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mediaAcertos() {
    var instrucaoSql = `SELECT ROUND(AVG(gasto),2) AS Gasto FROM pesquisaCoffeel;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoSemana() {
    var instrucaoSql = `SELECT DATE_FORMAT(data, '%d/%m') AS Dia, COUNT(*) AS Acessos from pesquisaCoffeel
    GROUP BY DATE_FORMAT(data, '%d/%m')
    ORDER BY DATE_FORMAT(data, '%d/%m') DESC LIMIT 7;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoAmbiente() {
    var instrucaoSql = `SELECT local AS Ambiente, COUNT(local) AS QtdAmbiente FROM pesquisaCoffeel 
    GROUP BY local;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function graficoEssencial() {
    var instrucaoSql = `SELECT essencial AS Descricao, count(essencial) AS Quantidade FROM pesquisaCoffeel
    GROUP BY essencial;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoTemperaturaCafe() {
    var instrucaoSql = `SELECT temperatura AS Descricao, count(temperatura) AS Quantidade FROM pesquisaCoffeel
    GROUP BY temperatura;`;

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
    graficoEssencial,
    graficoTemperaturaCafe
};