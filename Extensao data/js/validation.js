document.addEventListener('DOMContentLoaded', function() {
    const validationForm = document.getElementById('validation-form');
    const validationColumnSelect = document.getElementById('validation-column');
    const validationTypeSelect = document.getElementById('validation-type');
    const indexOutput = document.getElementById('index-output'); // Pode ser usado para exibir o SQL gerado

    // Função para atualizar as colunas no campo de seleção
    function updateValidationColumns(columns) {
        validationColumnSelect.innerHTML = ''; // Limpa o select
        columns.forEach(column => {
            const option = document.createElement('option');
            option.value = column.name;
            option.textContent = column.name;
            validationColumnSelect.appendChild(option);
        });
    }

    // Função para aplicar a validação na coluna selecionada
    validationForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Previne o envio do formulário

        const columnName = validationColumnSelect.value;
        const validationType = validationTypeSelect.value;

        if (columnName && validationType) {
            const sqlOutput = `ALTER TABLE nome_da_tabela ADD CONSTRAINT ${columnName}_${validationType} ${validationType}(${columnName});`;
            indexOutput.textContent = sqlOutput; // Exibe o SQL gerado
        } else {
            alert('Por favor, selecione uma coluna e o tipo de validação.');
        }
    });

    // Exemplo de colunas que você pode preencher dinamicamente
    const columns = [
        { name: 'id' },
        { name: 'name' },
        { name: 'email' },
    ];

    // Atualiza as opções de validação com as colunas disponíveis
    updateValidationColumns(columns);
});
