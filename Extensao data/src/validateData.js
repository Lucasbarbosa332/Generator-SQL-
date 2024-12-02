function validateData() {
    const data = [
        {
            column1: document.getElementById('column1').value,
            column2: document.getElementById('column2').value,
        }
    ];

    fetch('http://localhost:5000/validate-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'error') {
            alert('Erros: ' + data.errors.join(', '));
        } else {
            alert(data.message);
        }
    })
    .catch(error => console.error('Erro na validação:', error));
}

document.getElementById('validate-data').addEventListener('click', validateData);
