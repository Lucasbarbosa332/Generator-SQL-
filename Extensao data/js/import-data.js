document.addEventListener("DOMContentLoaded", () => {
    const importButton = document.getElementById("import-button");
    const fileInput = document.getElementById("file-upload");
    const tableHeader = document.getElementById("table-header");
    const tableBody = document.getElementById("table-body");

    // Evento de clique no botão de importação
    importButton.addEventListener("click", () => {
        const file = fileInput.files[0];

        if (!file) {
            alert("Por favor, selecione um arquivo para importar.");
            return;
        }

        const reader = new FileReader();

        // Lendo o arquivo como texto
        reader.onload = function(event) {
            const content = event.target.result;

            // Detectando o tipo de arquivo (CSV ou JSON)
            if (file.name.endsWith(".csv")) {
                importCSV(content);
            } else if (file.name.endsWith(".json")) {
                importJSON(content);
            } else {
                alert("Formato de arquivo não suportado. Por favor, envie um arquivo CSV ou JSON.");
            }
        };

        reader.readAsText(file);
    });

    // Função para importar dados de um arquivo CSV
    function importCSV(content) {
        const rows = content.split("\n").map(row => row.split(","));
        const columns = rows[0]; // A primeira linha contém os nomes das colunas

        // Atualizando o cabeçalho da tabela
        updateTable(columns, rows.slice(1)); // Passa os dados após o cabeçalho
    }

    // Função para importar dados de um arquivo JSON
    function importJSON(content) {
        const data = JSON.parse(content);

        if (data.length === 0) {
            alert("O arquivo JSON está vazio.");
            return;
        }

        const columns = Object.keys(data[0]); // As chaves do primeiro objeto são as colunas
        const rows = data.map(item => Object.values(item)); // Extrai os valores de cada objeto

        // Atualizando a tabela
        updateTable(columns, rows);
    }

    // Função para atualizar a tabela com os dados importados
    function updateTable(columns, data) {
        // Limpar a tabela antes de adicionar novos dados
        tableHeader.innerHTML = "";
        tableBody.innerHTML = "";

        // Adicionar cabeçalhos da tabela
        columns.forEach((colName) => {
            const th = document.createElement("th");
            th.textContent = colName;
            tableHeader.appendChild(th);
        });

        // Adicionar os dados inseridos na tabela
        data.forEach((rowData) => {
            const tr = document.createElement("tr");
            rowData.forEach((cellData) => {
                const td = document.createElement("td");
                td.textContent = cellData;
                tr.appendChild(td);
            });
            tableBody.appendChild(tr);
        });
    }
});
function importData() {
    const formData = new FormData();
    formData.append('file', document.getElementById('file-upload').files[0]);

    fetch('http://localhost:5000/import-data', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => console.error('Erro ao importar dados:', error));
}

document.getElementById('import-button').addEventListener('click', importData);
