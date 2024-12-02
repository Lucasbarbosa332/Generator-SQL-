document.addEventListener('DOMContentLoaded', function() {
    const sqlForm = document.getElementById('sql-form');
    const sqlQueryInput = document.getElementById('sql-query');
    const sqlOutput = document.getElementById('sql-output');
    
    // Exemplo simples de "banco de dados" em memória
    const mockDatabase = [
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Charlie', age: 35 }
    ];

    // Função para simular a execução de consultas SQL
    function executeSql(query) {
        try {
            // Simula execução de consultas SELECT simples
            if (query.toLowerCase().startsWith('select')) {
                // Simples simulação de consulta de banco
                const results = mockDatabase;
                sqlOutput.innerHTML = `
                    <pre>${JSON.stringify(results, null, 2)}</pre>
                `;
            } else if (query.toLowerCase().startsWith('insert')) {
                const newRecord = { id: mockDatabase.length + 1, name: 'New User', age: 28 };
                mockDatabase.push(newRecord);
                sqlOutput.innerHTML = `
                    <pre>INSERT sucesso: ${JSON.stringify(newRecord, null, 2)}</pre>
                `;
            } else if (query.toLowerCase().startsWith('update')) {
                const updatedRecord = { id: 1, name: 'Alice Updated', age: 26 };
                const index = mockDatabase.findIndex(record => record.id === updatedRecord.id);
                if (index !== -1) {
                    mockDatabase[index] = updatedRecord;
                    sqlOutput.innerHTML = `
                        <pre>UPDATE sucesso: ${JSON.stringify(updatedRecord, null, 2)}</pre>
                    `;
                } else {
                    sqlOutput.innerHTML = '<pre>Erro: Registro não encontrado para atualização.</pre>';
                }
            } else if (query.toLowerCase().startsWith('delete')) {
                const idToDelete = 2;  // Simulação de exclusão
                const index = mockDatabase.findIndex(record => record.id === idToDelete);
                if (index !== -1) {
                    mockDatabase.splice(index, 1);
                    sqlOutput.innerHTML = `
                        <pre>DELETE sucesso: ID ${idToDelete} removido.</pre>
                    `;
                } else {
                    sqlOutput.innerHTML = '<pre>Erro: Registro não encontrado para exclusão.</pre>';
                }
            } else {
                sqlOutput.innerHTML = '<pre>Erro: Consulta SQL não reconhecida.</pre>';
            }
        } catch (error) {
            sqlOutput.innerHTML = `<pre>Erro na execução da consulta: ${error.message}</pre>`;
        }
    }

    // Submeter o formulário e executar a consulta SQL
    sqlForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const query = sqlQueryInput.value.trim();
        if (query) {
            executeSql(query);
        }
    });
});
