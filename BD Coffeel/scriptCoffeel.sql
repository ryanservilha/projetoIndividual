CREATE DATABASE coffeel;

USE coffeel;
 
CREATE TABLE quiz (
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    dtCriacao DATE,
    tema VARCHAR(45)
);

INSERT INTO quiz VALUES 
(1, 'Quiz Coffeel', '2025-09-05', 'Café');

CREATE TABLE questionario (
	idQuestionario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    dtCriacao DATE
);

INSERT INTO questionario VALUES
(default, 'COFFEEL', '2025-05-13');

CREATE TABLE pergunta (
	idPergunta INT PRIMARY KEY AUTO_INCREMENT, 
    fkQuestionario INT,
    descricao VARCHAR(45)
);

INSERT INTO pergunta VALUES
(1, 1, 'Qual a sua idade?'),
(2, 1, 'O café é essencial na sua vida?'),
(3, 1, 'Onde você costuma tomar o café??'),
(4, 1, 'Quantas xícaras de café você toma por dia?'),
(5, 1, 'Que tipo de café você mais toma?'),
(6, 1, 'Você gosta mais do café:'),
(7, 1, 'Quanto você gasta com café por mês?'),
(8, 1, 'Por que você consome café?');

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    fkQuestionario INT,
    fkQuiz INT,
    nome VARCHAR(45),
    email VARCHAR(45),
    cpf CHAR(11),
    telCelular CHAR(11),
    senha VARCHAR(45),
    pontuacaoQuiz INT,
    dtCadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chkFkUsuarioQuestionario
    FOREIGN KEY (fkQuestionario)
    REFERENCES questionario(idQuestionario),
    CONSTRAINT chkFkUsuarioQuiz
    FOREIGN KEY (fkQuiz)
    REFERENCES quiz(idQuiz)
);

INSERT INTO usuario VALUES
(default, 1, 1, 'Ryan','ryanpinaap@gmail.com', '55754852365', '11910770845', 'senha123', null, '2025-05-13 08:43:58');

CREATE TABLE resposta (
    fkUsuario INT,
    fkPergunta INT,
    descricao VARCHAR(45),
    dtResposta DATETIME,
    CONSTRAINT pkCompostaResposta
    PRIMARY KEY (fkUsuario, fkPergunta),
    CONSTRAINT chkFkRespostaUsuario
    FOREIGN KEY (fkUsuario)
    REFERENCES usuario(idUsuario),
    CONSTRAINT chkFkRespostaPergunta
    FOREIGN KEY (fkPergunta)
    REFERENCES pergunta(idPergunta)
);
