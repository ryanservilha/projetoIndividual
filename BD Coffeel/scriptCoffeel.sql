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

INSERT INTO usuario VALUES
(default, 1, 1, 'Ryan','ryanpinaap@gmail.com', 'senha123', null, '2025-05-13 08:43:58');

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


-- ---------------------- SELECTS -----------------------------------------

-- Média da Idade dos consumidores
SELECT ROUND(avg(descricao),0) AS IdadeMedia FROM resposta WHERE fkPergunta = 1;

-- Tipo de café mais consumido
SELECT descricao AS CafeMaisConsumido FROM resposta
WHERE fkPergunta = 5 
GROUP BY descricao
ORDER BY COUNT(descricao) DESC LIMIT 1;    

-- Maior motivador de consumo
SELECT descricao AS Motivo FROM resposta
WHERE fkPergunta = 8
GROUP BY descricao
ORDER BY COUNT(descricao) DESC LIMIT 1;

-- Média de gasto por mês
SELECT ROUND(AVG(descricao),2) AS Gasto FROM resposta
WHERE fkPergunta = 7;

-- Gráfico Acesso na semana
select DATE_FORMAT(dtResposta, '%d/%m') AS Dia, COUNT(DISTINCT fkUsuario) AS Acessos from resposta
GROUP BY DATE_FORMAT(dtResposta, '%d/%m')
ORDER BY DATE_FORMAT(dtResposta, '%d/%m') DESC LIMIT 7;

-- Ambiente onde é mais consumido café
SELECT descricao AS Ambiente, COUNT(descricao) AS QtdAmbiente FROM resposta 
WHERE fkPergunta = 3
GROUP BY descricao;

-- Gráfico café é essencial?
SELECT descricao AS Descricao, count(descricao) AS Quantidade FROM resposta
WHERE fkPergunta = 2
GROUP BY descricao;
    
-- Gráfico Temperatura Café
SELECT descricao AS Descricao, count(descricao) AS Quantidade FROM resposta
WHERE fkPergunta = 6
GROUP BY descricao;
