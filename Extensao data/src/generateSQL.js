function generateSQL() {
    const tableData = {
        table_name: document.getElementById("table-name").value,
        columns: Array.from(document.querySelectorAll('.column-row')).map(row => ({
            name: row.querySelector('.column-name').value,
            type: row.querySelector('.column-type').value,
            is_primary: row.querySelector('.is-primary').checked,
            is_foreign_key: row.querySelector('.is-foreign-key').checked,
        }))
    };

    fetch('http://localhost:5000/generate-sql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(tableData),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('sql-output').textContent = data.sql;
    })
    .catch(error => console.error('Erro ao gerar SQL:', error));
}

document.getElementById('generate-sql').addEventListener('click', generateSQL);
