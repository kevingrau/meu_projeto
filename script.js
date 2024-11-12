document.addEventListener('DOMContentLoaded', function() {
    // Inicializar o mapa
    var map = L.map('map', {
        center: [20, 0],
        zoom: 2,
        maxBounds: [[-90, -180], [90, 180]],
        maxBoundsViscosity: 1.0
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 2
    }).addTo(map);

    // Função para pegar as coordenadas de um país (substitua com dados reais ou uma API)
    function getCoordinates(country) {
        const coordinates = {
            "Afeganistão": { lat: 33.93911, lng: 67.709953 },
            "África do Sul": { lat: -30.559482, lng: 22.937506 },
            "Albânia": { lat: 41.153332, lng: 20.168331 },
            "Alemanha": { lat: 51.165691, lng: 10.451526 },
            "Andorra": { lat: 42.506317, lng: 1.52109 },
            "Angola": { lat: -11.202692, lng: 17.873887 },
            "Antígua e Barbuda": { lat: 17.060816, lng: -61.796428 },
            "Arábia Saudita": { lat: 23.885942, lng: 45.079162 },
            "Argélia": { lat: 28.033886, lng: 1.659626 },
            "Argentina": { lat: -38.4161, lng: -63.6167 },
            "Armenia": { lat: 40.069099, lng: 45.038189 },
            "Austrália": { lat: -25.274398, lng: 133.775136 },
            "Áustria": { lat: 47.368649, lng: 13.736275 },
            "Azerbaijão": { lat: 40.143105, lng: 47.576927 },
            "Bahamas": { lat: 25.03428, lng: -77.39628 },
            "Bahrein": { lat: 25.930414, lng: 50.637772 },
            "Bangladesh": { lat: 23.685, lng: 90.3563 },
            "Barbados": { lat: 13.193887, lng: -59.543198 },
            "Bélgica": { lat: 50.850346, lng: 4.351721 },
            "Bielorrússia": { lat: 53.90454, lng: 27.5591 },
            "Benin": { lat: 9.30785, lng: 2.315834 },
            "Bermudas": { lat: 32.321384, lng: -64.75737 },
            "Bolívia": { lat: -16.5000, lng: -68.1193 },
            "Bósnia e Herzegovina": { lat: 43.915886, lng: 17.679576 },
            "Botsuana": { lat: -22.328474, lng: 24.684866 },
            "Brasil": { lat: -14.2350, lng: -51.9253 },
            "Brunei": { lat: 4.535277, lng: 114.727669 },
            "Bulgária": { lat: 42.733883, lng: 25.48583 },
            "Burkina Faso": { lat: 12.238333, lng: -1.561593 },
            "Burundi": { lat: -3.373056, lng: 29.918886 },
            "Cabo Verde": { lat: 16.002082, lng: -24.013197 },
            "Camarões": { lat: 7.369722, lng: 12.354722 },
            "Camboja": { lat: 12.565679, lng: 104.991 },
            "Canadá": { lat: 56.130366, lng: -106.346771 },
            "Catar": { lat: 25.354826, lng: 51.183884 },
            "Cazaquistão": { lat: 48.019573, lng: 66.923684 },
            "Chade": { lat: 15.454166, lng: 18.732207 },
            "Chile": { lat: -35.675147, lng: -71.542969 },
            "China": { lat: 35.86166, lng: 104.195397 },
            "Chipre": { lat: 35.126413, lng: 33.429859 },
            "Colômbia": { lat: 4.570868, lng: -74.297333 },
            "Comores": { lat: -11.6966, lng: 43.2551 },
            "Congo": { lat: -0.228021, lng: 15.827659 },
            "Congo, República Democrática do": { lat: -4.038333, lng: 21.758664 },
            "Coreia do Norte": { lat: 40.339852, lng: 127.510093 },
            "Coreia do Sul": { lat: 35.907757, lng: 127.766922 },
            "Costa do Marfim": { lat: 7.539989, lng: -5.54708 },
            "Costa Rica": { lat: 9.748917, lng: -83.753428 },
            "Croácia": { lat: 45.1, lng: 15.2 },
            "Cuba": { lat: 21.521757, lng: -77.781167 },
            "Dinamarca": { lat: 56.26392, lng: 9.501785 },
            "Egito": { lat: 26.820553, lng: 30.802498 },
            "El Salvador": { lat: 13.794185, lng: -88.89653 },
            "Emirados Árabes Unidos": { lat: 23.424076, lng: 53.847818 },
            "Equador": { lat: -1.831239, lng: -78.183406 },
            "Espanha": { lat: 40.463667, lng: -3.74922 },
            "Eswatini": { lat: -26.522503, lng: 31.465866 },
            "Estônia": { lat: 58.595272, lng: 25.013607 },
            "Etiópia": { lat: 9.145, lng: 40.489673 },
            "Fiji": { lat: -17.713371, lng: 178.065033 },
            "Filipinas": { lat: 12.879721, lng: 121.774017 },
            "Finlândia": { lat: 61.92411, lng: 25.748151 },
            "França": { lat: 46.603354, lng: 1.888334 },
            "Gâmbia": { lat: 13.4529, lng: -15.3025 },
            "Gana": { lat: 7.473, lng: -0.5205 },
            "Geórgia": { lat: 42.315407, lng: 43.356892 },
            "Gibraltar": { lat: 36.140751, lng: -5.345 } ,
            "Grécia": { lat: 39.074208, lng: 21.824312 },
            "Guatemala": { lat: 15.783471, lng: -90.230759 },
            "Guiné": { lat: 9.945587, lng: -9.696645 },
            "Guiné-Bissau": { lat: 11.803749, lng: -15.5855 },
            "Guiné Equatorial": { lat: 1.617439, lng: 9.437303 },
            "Honduras": { lat: 15.199999, lng: -86.241905 },
            "Hong Kong": { lat: 22.396428, lng: 114.109497 },
            "Hungria": { lat: 47.1625, lng: 19.5033 },
            "Islândia": { lat: 64.963051, lng: -19.020835 },
            "Índia": { lat: 20.593684, lng: 78.96288 },
            "Indonésia": { lat: -0.7893, lng: 113.9213 },
            "Irã": { lat: 32.427908, lng: 53.688046 },
            "Iraque": { lat: 33.223191, lng: 43.679291 },
            "Irlanda": { lat: 53.41291, lng: -8.24389 },
            "Islândia": { lat: 64.963051, lng: -19.020835 },
            "Itália": { lat: 41.87194, lng: 12.56738 },
            "Jamaica": { lat: 18.109581, lng: -77.297508 },
            "Japão": { lat: 36.204824, lng: 138.252924 },
            "Jordânia": { lat: 30.585164, lng: 36.238414 },
            "Kazakhstan": { lat: 48.019573, lng: 66.923684 },
            "Quênia": { lat: -1.286389, lng: 36.817223 },
            "Kiribati": { lat: -3.370417, lng: -168.734042 },
            "Kuwait": { lat: 29.3759, lng: 47.9774 },
            "Laos": { lat: 19.8563, lng: 102.4955 },
            "Lesoto": { lat: -29.6090, lng: 28.2336 },
            "Letônia": { lat: 56.8796, lng: 24.6032 },
            "Libéria": { lat: 6.4281, lng: -9.4295 },
            "Líbano": { lat: 33.8547, lng: 35.8623 },
            "Líbia": { lat: 26.3351, lng: 17.2283 },
            "Liechtenstein": { lat: 47.1660, lng: 9.5554 },
            "Lituânia": { lat: 55.1694, lng: 23.8813 },
            "Luxemburgo": { lat: 49.6118, lng: 6.1319 },
            "Madagáscar": { lat: -18.7669, lng: 46.8691 },
            "Malásia": { lat: 4.2105, lng: 101.9758 },
            "Malawi": { lat: -13.2543, lng: 34.3015 },
            "Maldivas": { lat: 3.2028, lng: 73.2207 },
            "Mali": { lat: 17.5707, lng: -3.9962 },
            "Malta": { lat: 35.9375, lng: 14.3754 },
            "Marrocos": { lat: 31.7917, lng: -7.0926 },
            "Maurício": { lat: -20.348404, lng: 57.552152 },
            "Mauritânia": { lat: 20.2540, lng: -10.9402 },
            "México": { lat: 23.6345, lng: -102.5528 },
            "Moçambique": { lat: -18.665695, lng: 35.529562 },
            "Moldávia": { lat: 47.4116, lng: 28.3699 },
            "Mongólia": { lat: 46.8625, lng: 103.8467 },
            "Montenegro": { lat: 42.7087, lng: 19.3744 },
            "Namíbia": { lat: -22.9576, lng: 18.4904 },
            "Nauru": { lat: -0.5228, lng: 166.9315 },
            "Nepal": { lat: 28.3949, lng: 84.1240 },
            "Nicarágua": { lat: 12.8654, lng: -85.2072 },
            "Nigéria": { lat: 9.082, lng: 8.6753 },
            "Noruega": { lat: 60.4720, lng: 8.4689 },
            "Nova Zelândia": { lat: -40.9006, lng: 174.886 },
            "Omã": { lat: 21.5129, lng: 55.9233 },
            "Países Baixos": { lat: 52.1326, lng: 5.2913 },
            "Paquistão": { lat: 30.3753, lng: 69.3451 },
            "Panamá": { lat: 8.9824, lng: -79.5199 },
            "Papua-Nova Guiné": { lat: -6.3150, lng: 143.9555 },
            "Peru": { lat: -9.1900, lng: -75.0152 },
            "Polônia": { lat: 51.9194, lng: 19.1451 },
            "Portugal": { lat: 39.3999, lng: -8.2245 },
            "Quênia": { lat: -1.286389, lng: 36.817223 },
            "Reino Unido": { lat: 55.3781, lng: -3.4360},
            "República Centro-Africana": { lat: 4.3967, lng: 18.5582 },
            "República Checa": { lat: 49.8175, lng: 15.4730 },
            "República do Congo": { lat: -4.4482, lng: 15.8273 },        
            "República Democrática do Congo": { lat: -0.228021, lng: 15.827659 },
            "Romênia": { lat: 45.9432, lng: 24.9668 },
            "Ruanda": { lat: -1.9403, lng: 29.8739 },
            "Rússia": { lat: 61.5240, lng: 105.3188 },
            "São Cristóvão e Nevis": { lat: 17.357822, lng: -62.782998 },
            "São Marino": { lat: 43.9333, lng: 12.4467 },
            "São Tomé e Príncipe": { lat: 0.18636, lng: 6.61308 },
            "Senegal": { lat: 14.4974, lng: -14.4524 },
            "Serra Leoa": { lat: 8.4606, lng: -11.7799 },
            "Sérvia": { lat: 44.0165, lng: 21.0059 },
            "Seychelles": { lat: -4.6796, lng: 55.4920 },
            "Singapura": { lat: 1.3521, lng: 103.8198 },
            "Síria": { lat: 34.8021, lng: 38.9968 },
            "Somália": { lat: 5.1521, lng: 46.1996 },
            "Sri Lanka": { lat: 7.8731, lng: 80.7718 },
            "Sudão do Sul": { lat: 7.7489, lng: 29.4509 },
            "Suécia": { lat: 60.1282, lng: 18.6435 },
            "Suíça": { lat: 46.8182, lng: 8.2275 },
            "Suriname": { lat: 3.9193, lng: -56.0274 },
            "Tailândia": { lat: 15.8700, lng: 100.9925 },
            "Taiwan": { lat: 23.6978, lng: 120.9605 },
            "Tajiquistão": { lat: 38.8610, lng: 71.2761 },
            "Tanzânia": { lat: -6.3690, lng: 34.8888 },
            "Trinidad e Tobago": { lat: 10.6918, lng: -61.2225 },
            "Tunísia": { lat: 33.8869, lng: 9.5375 },
            "Turquia": { lat: 38.9637, lng: 35.2433 },
            "Turcomenistão": { lat: 40.3573, lng: 59.5566 },
            "Uganda": { lat: 1.3733, lng: 32.2903 },
            "Ucrânia": { lat: 48.3794, lng: 31.1656 },
            "Vanuatu": { lat: -15.3767, lng: 166.9592 },
            "Vaticano": { lat: 41.9028, lng: 12.4534 },
            "Venezuela": { lat: 6.4238, lng: -66.5897 },
            "Vietnam": { lat: 14.0583, lng: 108.2772 },
            "Zâmbia": { lat: -13.1339, lng: 27.8493 },
            "Zimbábue": { lat: -19.0154, lng: 29.1549 }
        };

        return coordinates[country];
    }

    // Função para destacar dados e atualizar mapa e gráfico
    function highlightData(topic) {
        fetch('fetch_data.php?tipo=' + topic)
            .then(response => response.json())
            .then(data => {
                // Atualizar gráfico
                chart.data.labels = data.melhores.map(item => item.pais);
                chart.data.datasets[0].data = data.melhores.map(item => item.indice);
                chart.update();

                // Atualizar lista dos 3 piores países
                let worstCountries = data.piores;
                let worstList = document.getElementById('pior-lista');
                worstList.innerHTML = ""; // Limpar lista anterior
                worstCountries.forEach(item => {
                    let li = document.createElement('li');
                    li.textContent = `${item.pais}: ${item.indice}`;
                    worstList.appendChild(li);
                });

                // Limpar camadas anteriores no mapa
                map.eachLayer(function(layer) {
                    if (layer instanceof L.CircleMarker) {
                        map.removeLayer(layer);
                    }
                });

                // Adicionar marcadores para os 10 melhores países
                data.melhores.forEach(item => {
                    var coords = getCoordinates(item.pais);
                    if (coords) {
                        L.circleMarker([coords.lat, coords.lng], {
                            radius: 8,
                            color: 'green',
                            fillColor: '#30FF30',
                            fillOpacity: 0.5
                        }).addTo(map).bindPopup(`${item.pais}: ${item.indice}`);
                    }
                });

                // Exibir solução correspondente
                displaySolution(topic);
            })
            .catch(error => console.error('Erro ao buscar dados:', error));
    }

    // Função para exibir soluções
    function displaySolution(topic) {
        const solutionText = document.getElementById("solution-text");
        let solution = "";

        if (topic === 'idh') {
            solution = "Para melhorar o IDH, é importante investir em educação, saúde e infraestrutura básica, além de promover políticas de inclusão social e econômica.";
        } else if (topic === 'desperdicio') {
            solution = "Para reduzir o desperdício de alimentos, é fundamental promover o consumo consciente, melhorar a logística e armazenamento, e conscientizar sobre o valor dos alimentos.";
        } else if (topic === 'desmatamento') {
            solution = "Para combater o desmatamento, é necessário reforçar políticas de preservação, investir em tecnologias de monitoramento e promover a sustentabilidade na exploração de recursos naturais.";
        } else {
            solution = "Selecione um tema para ver a solução correspondente.";
        }

        solutionText.textContent = solution;
    }

    // Configuração do gráfico
    var ctx = document.getElementById('comparison-chart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Índice',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Gráfico Comparativo'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Adicionando eventos aos botões
    document.getElementById("idhBtn").onclick = function() {
        highlightData('idh');
    };

    document.getElementById("desperdicioBtn").onclick = function() {
        highlightData('desperdicio');
    };

    document.getElementById("desmatamentoBtn").onclick = function() {
        highlightData('desmatamento');
    };
});