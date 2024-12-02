document.addEventListener("DOMContentLoaded", () => {
    const columnsContainer = document.getElementById("columns");

    // Função para lidar com a definição de chaves estrangeiras
    columnsContainer.addEventListener("change", (e) => {
        if (e.target.classList.contains("is-foreign-key")) {
            const columnRow = e.target.closest(".column-row");
            const columnName = columnRow.querySelector(".column-name").value;

            // Exibe um menu para o usuário escolher a tabela e a coluna referenciada
            if (e.target.checked) {
                const foreignKeySelect = document.createElement("select");
                foreignKeySelect.classList.add("foreign-key-select");
                foreignKeySelect.innerHTML = `
                    <option value="">Escolher Tabela Referenciada</option>
                    <option value="other_table">Outra Tabela</option>
                `;
                columnRow.appendChild(foreignKeySelect);
            } else {
                const foreignKeySelect = columnRow.querySelector(".foreign-key-select");
                if (foreignKeySelect) {
                    foreignKeySelect.remove();
                }
            }
        }
    });
});
