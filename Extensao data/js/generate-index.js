document.addEventListener("DOMContentLoaded", () => {
    const generateIndexButton = document.getElementById("generate-index-button");
    const columnSelect = document.getElementById("column-select");
    const indexOutput = document.getElementById("index-output");
    const tableNameInput = document.getElementById("index-table-name");

    // Evento de clique no botão de geração de índice
    generateIndexButton.addEventListener("click", () => {
        const tableName = tableNameInput.value.trim();
        const column = columnSelect.value;

        if (!tableName || !column) {
            alert("Por favor, selecione uma tabela e uma coluna.");
            return;
        }

        // Gerar o código SQL para criar índice
        const indexSQL = generateIndexSQL(tableName, column);
        indexOutput.value = indexSQL;
    });

    // Função para gerar a consulta SQL para criação de índice
    function generateIndexSQL(tableName, column) {
        return `CREATE INDEX idx_${column} ON ${tableName} (${column});`;
    }
});
function generateIndex() {
    const indexData = {
        table_name: document.getElementById('index-table-name').value,
        column_name: document.getElementById('column-select').value,
    };

    fetch('http://localhost:5000/generate-index', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(indexData),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('index-output').textContent = data.index_sql;
    })
    .catch(error => console.error('Erro ao gerar índice:', error));
}

document.getElementById('generate-index-button').addEventListener('click', generateIndex);
