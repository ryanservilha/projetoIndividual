var dashboardModel = require("../models/dashboardModel");

function idadeMedia(req, res) {
    dashboardModel.idadeMedia().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function cafeMaisConsumido(req, res) {
    dashboardModel.cafeMaisConsumido().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function qtdEnvios(req, res) {
    dashboardModel.qtdEnvios().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro
) {
        res.status(500).json(erro.sqlMessage);
    })}

function mediaAcertos(req, res) {
    dashboardModel.mediaAcertos().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function graficoSemana(req, res) {
    dashboardModel.graficoSemana().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function graficoAmbiente(req, res) {
    dashboardModel.graficoAmbiente().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function graficoEssencial(req, res) {
    dashboardModel.graficoEssencial().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    idadeMedia,
    cafeMaisConsumido,
    qtdEnvios,
    mediaAcertos,
    graficoSemana,
    graficoAmbiente,
    graficoEssencial
}