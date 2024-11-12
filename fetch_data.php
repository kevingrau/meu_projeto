<?php
$servername = "localhost";
$username = "root"; // ou seu usuário
$password = ""; // geralmente é vazio no XAMPP
$dbname = "dados_paises"; // nome do seu banco de dados

// Criando a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificando a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Pega o tipo da requisição (idh, desperdicio ou desmatamento)
$tipo = isset($_GET['tipo']) ? $_GET['tipo'] : 'idh';

// Define a consulta SQL com base no tipo
if ($tipo == 'idh') {
    $sqlMelhores = "SELECT country_name AS pais, hdi AS indice FROM country_data ORDER BY hdi DESC LIMIT 10";
    $sqlPiores = "SELECT country_name AS pais, hdi AS indice FROM country_data ORDER BY hdi ASC LIMIT 3";
} elseif ($tipo == 'desperdicio') {
    $sqlMelhores = "SELECT country_name AS pais, food_waste AS indice FROM country_data ORDER BY food_waste DESC LIMIT 10";
    $sqlPiores = "SELECT country_name AS pais, food_waste AS indice FROM country_data ORDER BY food_waste ASC LIMIT 3";
} elseif ($tipo == 'desmatamento') {
    $sqlMelhores = "SELECT country_name AS pais, deforestation_rate AS indice FROM country_data ORDER BY deforestation_rate DESC LIMIT 10";
    $sqlPiores = "SELECT country_name AS pais, deforestation_rate AS indice FROM country_data ORDER BY deforestation_rate ASC LIMIT 3";
} else {
    echo json_encode([]); // Retorna um array vazio se o tipo não for válido
    exit;
}

// Obter os melhores países
$resultMelhores = $conn->query($sqlMelhores);
$paisesMelhores = [];

if ($resultMelhores->num_rows > 0) {
    while ($row = $resultMelhores->fetch_assoc()) {
        $paisesMelhores[] = $row; // Armazena os melhores países em um array
    }
}

// Obter os piores países
$resultPiores = $conn->query($sqlPiores);
$paisesPiores = [];

if ($resultPiores->num_rows > 0) {
    while ($row = $resultPiores->fetch_assoc()) {
        $paisesPiores[] = $row; // Armazena os piores países em um array
    }
}

// Fecha a conexão
$conn->close();

// Retorna um JSON com os melhores e piores países
echo json_encode([
    'melhores' => $paisesMelhores,
    'piores' => $paisesPiores
]);
?>