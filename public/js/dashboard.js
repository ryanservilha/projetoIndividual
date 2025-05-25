


function obterDados() {
    var vt_idade = [];

    fetch(`/dashboard/idadeMedia`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);


                vt_idade = resposta;
                idadeMedia.innerHTML = `${vt_idade[0].IdadeMedia}`;
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });

    fetch(`/dashboard/cafeMaisConsumido`, { cache: 'no-store' }).then(function (response) {
        var vt_cafeConsumido = [];

        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);


                vt_cafeConsumido = resposta;
                cafeMaisConsumido.innerHTML = `${vt_cafeConsumido[0].CafeMaisConsumido}`;
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });

    fetch(`/dashboard/qtdEnvios`, { cache: 'no-store' }).then(function (response) {
        var vt_qtdEnvios = [];

        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);


                vt_qtdEnvios = resposta;
                qtdEnvios.innerHTML = `${vt_qtdEnvios[0].Motivo}`;
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });

    fetch(`/dashboard/mediaAcertos`, { cache: 'no-store' }).then(function (response) {
        var vt_media = [];

        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);


                vt_media = resposta;
                mediaAcertos.innerHTML += `${vt_media[0].Gasto}`;
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });

    fetch(`/dashboard/graficoSemana`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                graficoSemana(resposta);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });

    fetch(`/dashboard/graficoAmbiente`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                graficoAmbiente(resposta);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });

    fetch(`/dashboard/graficoEssencial`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                graficoEssencial(resposta);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });

    fetch(`/dashboard/graficoTemperaturaCafe`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                graficoTemperaturaCafe(resposta);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });

}
function graficoSemana(resposta) {

    console.log('iniciando plotagem do gráfico...');

    // Criando estrutura para plotar gráfico - labels
    let labels = [];

    // Criando estrutura para plotar gráfico - dados
    let dados = {
        labels: labels,
        datasets: [{
            label: 'Acessos',
            data: [],
            fill: false,
            backgroundColor: '#6a3604',
            borderColor: '#6a3604',
            tension: 0.1
        }]
    };

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        labels.push(registro.Dia);
        dados.datasets[0].data.push(registro.Acessos);
    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')
    // Criando estrutura para plotar gráfico - config
    const config = {
        type: 'line',
        data: dados,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    };

    // Adicionando gráfico criado em div na tela
    let myChart = new Chart(
        document.getElementById(`myChartCanvas`),
        config
    );

}

function graficoAmbiente(resposta) {

    console.log('iniciando plotagem do gráfico...');

    // Criando estrutura para plotar gráfico - labels
    let labels = [];

    // Criando estrutura para plotar gráfico - dados
    let dados = {
        labels: labels,
        datasets: [{
            label: 'Respostas',
            data: [],
            fill: false,
            backgroundColor: '#6a3604',
            borderColor: '#6a3604',
            tension: 0.1
        }]
    };

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        labels.push(registro.Ambiente);
        dados.datasets[0].data.push(registro.QtdAmbiente);
    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')
    // Criando estrutura para plotar gráfico - config
    const config = {
        type: 'bar',
        data: dados,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        display: false
                    }
                },
                y: {
                    title: {
                        display: true,
                    },
                    beginAtZero: true,
                    grid: {
                        display: false
                    }
                },
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    };

    // Adicionando gráfico criado em div na tela
    let myChart = new Chart(
        document.getElementById(`graficoCafeConsumido`),
        config
    );
}

function graficoEssencial(resposta) {

    console.log('iniciando plotagem do gráfico...');

    // Criando estrutura para plotar gráfico - labels
    let labels = [];

    // Criando estrutura para plotar gráfico - dados
    let dados = {
        labels: labels,
        datasets: [{
            label: 'Respostas',
            data: [],
            fill: false,
            backgroundColor: ['rgb(155, 105, 40)', 'rgb(49, 28, 0)'],
            tension: 0.1
        }]
    };

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        labels.push(registro.Descricao);
        dados.datasets[0].data.push(registro.Quantidade);
    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')
    // Criando estrutura para plotar gráfico - config
    const config = {
        type: 'pie',
        data: dados,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {  
                legend: {
                    display: true,
                    labels: {
                        font: {
                            size: 9
                        }
                    }
                }
            }
        }
    };

    // Adicionando gráfico criado em div na tela
    let myChart = new Chart(
        document.getElementById(`graficoCafeEssencial`),
        config
    );
}

function graficoTemperaturaCafe(resposta) {

    console.log('iniciando plotagem do gráfico...');

    // Criando estrutura para plotar gráfico - labels
    let labels = [];

    // Criando estrutura para plotar gráfico - dados
    let dados = {
        labels: labels,
        datasets: [{
            label: 'Respostas',
            data: [],
            fill: false,
            backgroundColor: ['rgb(155, 105, 40)', 'rgb(49, 28, 0)'],
            tension: 0.1
        }]
    };

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        labels.push(registro.Descricao);
        dados.datasets[0].data.push(registro.Quantidade);
    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')
    // Criando estrutura para plotar gráfico - config
    const config = {
        type: 'pie',
        data: dados,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: {
                            size: 9
                        }
                    }
                }
            }
        }
    };

    // Adicionando gráfico criado em div na tela
    let myChart = new Chart(
        document.getElementById(`graficoTemperaturaCafe`),
        config
    );
}
