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

CREATE TABLE resposta (
    fkUsuario INT,
    fkPergunta INT,
    descricao VARCHAR(45),
    dtResposta DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pkCompostaResposta
    PRIMARY KEY (fkUsuario, fkPergunta),
    CONSTRAINT chkFkRespostaUsuario
    FOREIGN KEY (fkUsuario)
    REFERENCES usuario(idUsuario),
    CONSTRAINT chkFkRespostaPergunta
    FOREIGN KEY (fkPergunta)
    REFERENCES pergunta(idPergunta)
);

CREATE TABLE pesquisaCoffeel (
	idPesquisa INT PRIMARY KEY AUTO_INCREMENT,
	data DATETIME DEFAULT CURRENT_TIMESTAMP,
    nome VARCHAR(45),
    idade INT,
    essencial VARCHAR(45),
    local VARCHAR(45),
    xicaras INT,
    tipo VARCHAR(45),
    temperatura VARCHAR(45),
    gasto INT,
    motivo VARCHAR(45),
    fkUsuario INT,
    CONSTRAINT chkFkUsuario
    FOREIGN KEY (fkUsuario)
    REFERENCES usuario(idUsuario)
);

-- ---------------------- SELECTS -----------------------------------------
-- Média da Idade dos consumidores
SELECT ROUND(avg(idade),0) AS IdadeMedia FROM pesquisaCoffeel;

-- Tipo de café mais consumido
SELECT tipo AS CafeMaisConsumido FROM pesquisaCoffeel
GROUP BY tipo
ORDER BY COUNT(tipo) DESC LIMIT 1;    

-- Maior motivador de consumo
SELECT motivo AS Motivo FROM pesquisaCoffeel
GROUP BY motivo
ORDER BY COUNT(motivo) DESC LIMIT 1;

-- Média de gasto por mês
SELECT ROUND(AVG(gasto),2) AS Gasto FROM pesquisaCoffeel;

-- Gráfico Acesso na semana
SELECT DATE_FORMAT(data, '%d/%m') AS Dia, COUNT(DISTINCT nome) AS Acessos from pesquisaCoffeel
GROUP BY DATE_FORMAT(data, '%d/%m')
ORDER BY DATE_FORMAT(data, '%d/%m') DESC LIMIT 7;

-- Ambiente onde é mais consumido café
SELECT local AS Ambiente, COUNT(local) AS QtdAmbiente FROM pesquisaCoffeel 
GROUP BY local;

-- Gráfico café é essencial?
SELECT essencial AS Descricao, count(essencial) AS Quantidade FROM pesquisaCoffeel
GROUP BY essencial;
    
-- Gráfico Temperatura Café
SELECT temperatura AS Descricao, count(temperatura) AS Quantidade FROM pesquisaCoffeel
GROUP BY temperatura;


SELECT * FROM pesquisaCoffeel;

INSERT INTO pesquisaCoffeel (nome, idade, essencial) values
('Ryan', '18', 'Sim');

select * from pesquisaCoffeel;

