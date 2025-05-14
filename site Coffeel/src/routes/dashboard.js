var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/idadeMedia", function (req, res) {
    dashboardController.idadeMedia(req, res);
});

router.get("/cafeMaisConsumido", function (req, res) {
    dashboardController.cafeMaisConsumido(req, res);
});

router.get("/qtdEnvios", function (req, res) {
    dashboardController.qtdEnvios(req, res);
});

router.get("/mediaAcertos", function (req, res) {
    dashboardController.mediaAcertos(req, res);
});

router.get("/graficoSemana", function (req, res) {
    dashboardController.graficoSemana(req, res);
});

router.get("/graficoAmbiente", function (req, res) {
    dashboardController.graficoAmbiente(req, res);
});

router.get("/graficoEssencial", function (req, res) {
    dashboardController.graficoEssencial(req, res);
});


module.exports = router;