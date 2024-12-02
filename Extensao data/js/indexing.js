document.addEventListener('DOMContentLoaded', function() {
    const indexForm = document.getElementById('index-form');
    const indexColumnSelect = document.getElementById('column-select');
    const indexOutput = document.getElementById('index-output');

    // Função para atualizar as colunas disponíveis para indexação
    function updateIndexColumns(columns) {
        indexColumnSelect.innerHTML = '<option value="">Selecione uma coluna</option>'; // Limpa o select e adiciona o primeiro item
        columns.forEach(column => {
            const option = document.createElement('option');
            option.value = column.name;
            option.textContent = column.name;
            indexColumnSelect.appendChild(option);
        });
    }

    // Função para gerar o SQL do índice
    indexForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Previne o envio do formulário

        const columnName = indexColumnSelect.value;
        const tableName = document.getElementById('index-table-name').value;

        if (columnName && tableName) {
            const sqlOutput = `CREATE INDEX idx_${columnName} ON ${tableName}(${columnName});`;
            indexOutput.textContent = sqlOutput; // Exibe o SQL gerado
        } else {
            alert('Por favor, selecione uma coluna e informe o nome da tabela.');
        }
    });

    // Exemplo de colunas disponíveis para indexação (você pode preencher essas colunas dinamicamente a partir da configuração da tabela)
    const columns = [
        { name: 'id' },
        { name: 'name' },
        { name: 'email' },
    ];

    // Atualiza o select de colunas com as opções disponíveis
    updateIndexColumns(columns);
});
