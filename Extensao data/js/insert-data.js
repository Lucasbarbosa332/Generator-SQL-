document.addEventListener("DOMContentLoaded", () => {
    const addDataButton = document.getElementById("add-data");
    const dataForm = document.getElementById("data-form");
    const dataFieldsContainer = document.getElementById("data-fields");
    const tableHeader = document.getElementById("table-header");
    const tableBody = document.getElementById("table-body");

    // Adicionar campos de dados
    addDataButton.addEventListener("click", () => {
        const columnNames = Array.from(document.querySelectorAll(".column-name")).map(input => input.value);
        
        if (columnNames.length > 0) {
            // Criar um novo conjunto de campos para inserir dados
            const row = document.createElement("div");
            row.classList.add("data-row");

            columnNames.forEach((colName) => {
                const inputField = document.createElement("input");
                inputField.type = "text";
                inputField.placeholder = `Digite ${colName}`;
                row.appendChild(inputField);
            });

            dataFieldsContainer.appendChild(row);
        }
    });

    // Processar o envio do formulário
    dataForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputRows = document.querySelectorAll(".data-row");
        const data = [];

        inputRows.forEach((row) => {
            const rowData = [];
            row.querySelectorAll("input").forEach((input) => {
                rowData.push(input.value);
            });
            data.push(rowData);
        });

        // Atualizar a visualização da tabela
        updateTable(columnNames, data);
    });

    // Atualizar a tabela de dados
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
