document.addEventListener('DOMContentLoaded', function() {
    const shareButton = document.getElementById('share-project');
    const sharedLinkOutput = document.getElementById('shared-link-output');
    const sharedLink = document.getElementById('shared-link');

    // Função para gerar e salvar o projeto no localStorage
    function saveProjectToStorage(projectData) {
        const projectId = 'project_' + new Date().getTime();
        localStorage.setItem(projectId, JSON.stringify(projectData));
        return projectId;
    }

    // Função para gerar o link de compartilhamento
    function generateShareableLink(projectId) {
        const baseUrl = window.location.origin;
        return `${baseUrl}/project/${projectId}`;  // A URL será personalizada com base no ID do projeto
    }

    // Função para gerar um projeto fictício
    function generateProjectData() {
        // Aqui você pode pegar os dados da tabela ou do estado da página
        // Vamos criar um exemplo simples de projeto
        const exampleProject = {
            tables: [
                {
                    name: 'users',
                    columns: [
                        { name: 'id', type: 'INTEGER', isPrimary: true },
                        { name: 'name', type: 'TEXT' },
                        { name: 'email', type: 'TEXT', isUnique: true }
                    ]
                }
            ]
        };
        return exampleProject;
    }

    // Função de compartilhamento
    shareButton.addEventListener('click', function() {
        const projectData = generateProjectData();
        const projectId = saveProjectToStorage(projectData);
        const link = generateShareableLink(projectId);
        
        // Exibir o link gerado
        sharedLink.href = link;
        sharedLink.textContent = link;
        sharedLinkOutput.style.display = 'block';
    });
});
