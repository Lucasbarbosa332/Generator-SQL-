// Função para validar dados com a API em Python
function validateData(data) {
    fetch('http://localhost:5000/validate-data', {  // URL do backend Flask
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),  // Envia os dados para validação
    })
    .then(response => response.json())
    .then(data => {
        console.log('Resposta da validação:', data.message);
        alert(data.message); // Exibe o resultado da validação
    })
    .catch(error => console.error('Erro ao validar dados:', error));
}

// Função para gerar relatório
function generateReport() {
    fetch('http://localhost:5000/generate-report', {  // URL do backend Flask
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        console.log('Relatório gerado:', data);
        alert('Relatório gerado: ' + data.summary); // Exibe o relatório
    })
    .catch(error => console.error('Erro ao gerar relatório:', error));
}

// Exemplo de uso das funções de validação e relatório
document.getElementById('generate-sql').addEventListener('click', function() {
    const exampleData = [
        { column1: 'valor1', column2: 'valor2' },
        { column1: 'valor3', column2: null },  // Exemplo de dado inválido
    ];

    // Chama a validação de dados
    validateData(exampleData);  // Passa os dados do formulário

    // Chama a função de gerar relatório (você pode ligar essa chamada a um outro evento)
    generateReport();
});
function createTable() {
    const tableData = {
        table_name: document.getElementById("table-name").value,
        columns: [...document.querySelectorAll(".column-row")].map(row => ({
            name: row.querySelector(".column-name").value,
            type: row.querySelector(".column-type").value,
        }))
    };

    fetch('http://localhost:5000/create-table', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tableData),
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => console.error('Erro:', error));
}
