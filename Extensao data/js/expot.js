document.addEventListener('DOMContentLoaded', function() {
    const dbSelect = document.getElementById('db-select');
    const generateSQLButton = document.getElementById('generate-sql');
    const sqlOutput = document.getElementById('sql-output'); // Onde o SQL gerado será exibido
    const tableNameInput = document.getElementById('table-name'); // Exemplo de tabela
    const columnsInput = document.getElementById('columns'); // Exemplo de colunas

    // Função para gerar SQL para MySQL
    function generateMySQLSQL() {
        const tableName = tableNameInput.value;
        const columns = Array.from(columnsInput.getElementsByClassName('column-row'));
        let columnDefinitions = columns.map(col => {
            const columnName = col.querySelector('.column-name').value;
            const columnType = col.querySelector('.column-type').value;
            let constraints = '';
            if (col.querySelector('.is-primary').checked) {
                constraints += ' PRIMARY KEY';
            }
            if (col.querySelector('.is-foreign-key').checked) {
                const foreignKeyTable = col.querySelector('.foreign-key-table').value; // Adicionar input para o nome da tabela
                const foreignKeyColumn = col.querySelector('.foreign-key-column').value; // Adicionar input para o nome da coluna
                constraints += `, FOREIGN KEY (${columnName}) REFERENCES ${foreignKeyTable}(${foreignKeyColumn})`;
            }
            return `${columnName} ${columnType}${constraints}`;
        }).join(', ');

        return `CREATE TABLE ${tableName} (${columnDefinitions});`;
    }

    // Função para gerar SQL para PostgreSQL
    function generatePostgreSQLSQL() {
        const tableName = tableNameInput.value;
        const columns = Array.from(columnsInput.getElementsByClassName('column-row'));
        let columnDefinitions = columns.map(col => {
            const columnName = col.querySelector('.column-name').value;
            const columnType = col.querySelector('.column-type').value;
            let constraints = '';
            if (col.querySelector('.is-primary').checked) {
                constraints += ' PRIMARY KEY';
            }
            if (col.querySelector('.is-foreign-key').checked) {
                const foreignKeyTable = col.querySelector('.foreign-key-table').value; 
                const foreignKeyColumn = col.querySelector('.foreign-key-column').value; 
                constraints += `, FOREIGN KEY (${columnName}) REFERENCES ${foreignKeyTable}(${foreignKeyColumn})`;
            }
            return `${columnName} ${columnType}${constraints}`;
        }).join(', ');

        return `CREATE TABLE ${tableName} (${columnDefinitions});`;
    }

    // Função para gerar SQL para SQLite
    function generateSQLiteSQL() {
        const tableName = tableNameInput.value;
        const columns = Array.from(columnsInput.getElementsByClassName('column-row'));
        let columnDefinitions = columns.map(col => {
            const columnName = col.querySelector('.column-name').value;
            const columnType = col.querySelector('.column-type').value;
            let constraints = '';
            if (col.querySelector('.is-primary').checked) {
                constraints += ' PRIMARY KEY';
            }
            if (col.querySelector('.is-foreign-key').checked) {
                const foreignKeyTable = col.querySelector('.foreign-key-table').value; 
                const foreignKeyColumn = col.querySelector('.foreign-key-column').value; 
                constraints += `, FOREIGN KEY (${columnName}) REFERENCES ${foreignKeyTable}(${foreignKeyColumn})`;
            }
            return `${columnName} ${columnType}${constraints}`;
        }).join(', ');

        return `CREATE TABLE ${tableName} (${columnDefinitions});`;
    }

    // Lógica para gerar o SQL conforme o banco de dados selecionado
    generateSQLButton.addEventListener('click', function() {
        const selectedDB = dbSelect.value;
        let sql = '';

        switch (selectedDB) {
            case 'mysql':
                sql = generateMySQLSQL();
                break;
            case 'postgresql':
                sql = generatePostgreSQLSQL();
                break;
            case 'sqlite':
                sql = generateSQLiteSQL();
                break;
            default:
                sql = 'Por favor, selecione um banco de dados.';
        }

        sqlOutput.textContent = sql;
    });
});
