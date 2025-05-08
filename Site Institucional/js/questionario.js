var qtdClique = 0;

function proximaPergunta() {
    var idadeUsuario = Number(inpt_idadeUsuario.value);
    var essencialCafe = essencial.cafe.value;
    var lugar = lugarQueTomo.lugar.value;
    var quantXicaras = Number(inpt_qtdCafesDia.value);
    var tipoDeCafe = tipoDoCafe.tipo.value;
    var temperaturaCafe = temperatura.gosto.value;
    var gastoMensal = Number(inpt_valorCafeMes.value);
    var motivoDeTomar = motivoQueTomo.motivo.value;

    if (qtdClique == 0) {
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
        if (temperaturaCafe != '') {
            qtdClique++;

            cafeGelado.style.display = 'none';
            gastoCafe.style.display = 'flex';
        }
        else {
            alert('Selecione alguma resposta!')
        }
    }
    else if (qtdClique == 5) {
        if (gastoMensal != '') {
            qtdClique++;

            gastoCafe.style.display = 'none';
            porqueTomo.style.display = 'flex';
        }
        else {
            alert('Digite algum valor!')
        }
    }
    else if (qtdClique == 6) {
        qtdClique++;

        gastoCafe.style.display = 'none';
        porqueTomo.style.display = 'flex';

        btnProximaPergunta.innerHTML = `<p>Gravar resultado</p>`
    }
    else if (qtdClique == 7) {
        if (motivoDeTomar != '') {  
            btnProximaPergunta.style.display = "none";
            btnEnviarQuest.style.display = "flex";
        }
        else [
            alert('Selecione alguma opção')
        ]
    }
}
