function generateDocumentation() {
    fetch('http://localhost:5000/generate-doc')
        .then(response => response.json())
        .then(data => {
            document.getElementById('documentation-output').textContent = data.documentation;
        })
        .catch(error => console.error('Erro ao gerar documentação:', error));
}

document.getElementById('generate-doc').addEventListener('click', generateDocumentation);
