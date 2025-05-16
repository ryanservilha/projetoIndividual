var qtdClique = 0;
var idadeUsuario = 0;
var essencialCafe = "";
var lugar = "";
var quantXicaras = 0;
var tipoDeCafe = ""
var temperaturaCafe = "";
var gastoMensal = 0;
var motivoDeTomar = "";

var lista = [];

function proximaPergunta() {

    if (qtdClique == 0) {
        idadeUsuario = Number(inpt_idadeUsuario.value);

        if (idadeUsuario > 0 && idadeUsuario != '') {
            qtdClique++;

            idade.style.display = 'none';
            cafeEssencial.style.display = 'flex';
        }
        else {
            alert('Idade Inválida!')
        }
    }
    else if (qtdClique == 1) {
        essencialCafe = essencial.cafe.value;

        if (essencialCafe != '') {
            qtdClique++;

            cafeEssencial.style.display = 'none';
            ondeTomoCafe.style.display = 'flex';
        }
        else {
            alert('Selecione alguma resposta!')
        }
    }
    else if (qtdClique == 2) {
        lugar = lugarQueTomo.lugar.value;
        if (lugar != '') {
            qtdClique++;

            ondeTomoCafe.style.display = 'none';
            qtdXicaras.style.display = 'flex';
        }
        else {
            alert('Selecione alguma resposta!')
        }
    }
    else if (qtdClique == 3) {
        quantXicaras = Number(inpt_qtdCafesDia.value);
        if (quantXicaras != '') {
            qtdClique++;

            qtdXicaras.style.display = 'none';
            cafeMaisTomo.style.display = 'flex';
        }
        else {
            alert('Digite algum número')
        }
    }
    else if (qtdClique == 4) {
        tipoDeCafe = tipoDoCafe.tipo.value;
        if (tipoDeCafe != '') {
            qtdClique++;

            cafeMaisTomo.style.display = 'none';
            cafeGelado.style.display = 'flex';
        }
        else {
            alert('Selecione alguma resposta!')
        }
    }
    else if (qtdClique == 5) {
        temperaturaCafe = temperatura.gosto.value;
        if (temperaturaCafe != '') {
            qtdClique++;

            cafeGelado.style.display = 'none';
            gastoCafe.style.display = 'flex';
        }
        else {
            alert('Selecione alguma resposta!')
        }
    }
    else if (qtdClique == 6) {
        gastoMensal = Number(inpt_valorCafeMes.value);
        if (gastoMensal != '') {
            qtdClique++;

            gastoCafe.style.display = 'none';
            porqueTomo.style.display = 'flex';
        }
        else {
            alert('Digite algum valor!')
        }
    }
    else if (qtdClique == 7) {
        motivoDeTomar = motivoQueTomo.motivo.value;

        if (motivoDeTomar != '') {
            btnProximaPergunta.style.display = "none";
            btnEnviarQuest.style.display = "flex";
        }
        else[
            alert('Selecione alguma opção')
        ]
    }
}

var vtresposta = [];

function enviar() {
    var idUser = sessionStorage.ID_USUARIO;

    fetch("/usuarios/enviar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            idadeServer: idadeUsuario,
            essencialServer: essencialCafe,
            lugarServer: lugar,
            quantXicarasServer: quantXicaras,
            tipoServer: tipoDeCafe,
            temperaturaServer: temperaturaCafe,
            gastoServer: gastoMensal,
            motivoServer: motivoDeTomar,
            idUserServer: idUser
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

        vtresposta.push(idadeUsuario, essencialCafe, lugar, quantXicaras, tipoDeCafe, temperaturaCafe, gastoMensal, motivoDeTomar, idUser);
    alert('Questionário enviado!')

    return false;
}