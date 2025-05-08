
function cadastrarUsuario() {
    var nomeCadastro = inpt_nomeCadastro.value;
    var emailCadastro = inpt_emailCadastro.value;
    var cpfCadastro = inpt_cpf.value;
    var telefoneCadastro = inpt_telefone.value;
    var senhaCadastro = inpt_senhaCadastro.value;
    var confirmarSenha = inpt_confirmeSenha.value;
    var acharArroba = 0;
    var acharPonto = 0;

    if (nomeCadastro == '' && emailCadastro == '' && cpfCadastro == '' && telefoneCadastro == '' && senhaCadastro == '' && confirmarSenha == '') {
        alert('Insira algum valor em todos os campos!')
    }
    else if (cpfCadastro.length != 11) {
        alert('CPF Inválido!')
    }
    else if (telefoneCadastro.length != 11) {
        alert('Telefone Inválido')
    }
    else if (confirmarSenha != senhaCadastro) {
        alert('As senhas não são similares!')
    }
    else if (emailCadastro.length < 14) {
        alert('Email muito simples!')
    }
    else {
        for (var i = 0; i <= emailCadastro.length; i++) {
            if (emailCadastro[i] == '@') {
                acharArroba++;
            }
            if (emailCadastro[i] == '.') {
                acharPonto++;
            }
        }

        if(acharArroba > 0 && acharPonto > 0) {
            alert('Cadastro Realizado!')
        }
        else {
            alert('E-mail inválido')
        }
    }
}

function acessarQuestionario() {

}