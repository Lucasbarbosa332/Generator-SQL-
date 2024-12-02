document.addEventListener('DOMContentLoaded', function() {
    const generateApiButton = document.getElementById('generate-api');
    const apiOutput = document.getElementById('api-output'); // Área para exibir o modelo da API

    // Função para gerar o modelo de API
    function generateApi() {
        const tableName = document.getElementById('table-name').value; // Nome da tabela
        const columns = Array.from(document.querySelectorAll('.column-row'));
        
        const fields = columns.map(col => {
            const columnName = col.querySelector('.column-name').value;
            return columnName;
        });

        const apiCode = `
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// CRUD Operations for ${tableName}

// Create a new record
app.post('/${tableName}', (req, res) => {
    const newRecord = req.body;
    // Add logic to insert new record into ${tableName} table
    res.status(201).json(newRecord);
});

// Read all records
app.get('/${tableName}', (req, res) => {
    // Add logic to fetch all records from ${tableName} table
    res.status(200).json([]);
});

// Read a specific record
app.get('/${tableName}/:id', (req, res) => {
    const id = req.params.id;
    // Add logic to fetch the record with id from ${tableName} table
    res.status(200).json({ id });
});

// Update a record
app.put('/${tableName}/:id', (req, res) => {
    const id = req.params.id;
    const updatedRecord = req.body;
    // Add logic to update record in ${tableName} table
    res.status(200).json(updatedRecord);
});

// Delete a record
app.delete('/${tableName}/:id', (req, res) => {
    const id = req.params.id;
    // Add logic to delete record from ${tableName} table
    res.status(200).json({ message: 'Deleted' });
});

app.listen(port, () => {
    console.log('API running at http://localhost:' + port);
});
`;

        // Exibir o código gerado no HTML
        apiOutput.textContent = apiCode;
    }

    // Adicionar o evento ao botão de gerar API
    generateApiButton.addEventListener('click', generateApi);
});
