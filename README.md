# Generator-SQL-
SQL Generator, API and Validation

# 🚧 Em Fase de Desenvolvimento 🚧

<img src="https://github.com/Lucasbarbosa332/Generator-SQL-/blob/main/post/load-loading.gif?raw=true" alt="Desenvolvimento em progresso" width="100" />

Este projeto está atualmente em desenvolvimento. Fique atento para atualizações!



# 📊 SQL Table Generator 🚀

 SQL Table Generator é uma ferramenta interativa para criar e configurar tabelas SQL, inserir dados, gerar índices, validar dados e mais, com uma interface amigável e fácil de usar. O projeto permite aos desenvolvedores e administradores de banco de dados criar 
 rapidamente tabelas e gerar códigos SQL para diferentes bancos de dados (MySQL, PostgreSQL, SQLite).

## 💡 Objetivo do Projeto
   
   O projeto foi criado para simplificar o processo de criação de tabelas e manipulação de dados em bancos de dados SQL. Ele oferece uma interface visual que permite aos usuários:

 * Criar tabelas SQL com múltiplas colunas e tipos de dados.
 * Inserir dados de exemplo nas tabelas geradas.
 * Gerar índices para otimizar as consultas no banco de dados.
 * Validar dados, como aplicar restrições de NOT NULL, UNIQUE ou DEFAULT.
 * Importar dados de arquivos CSV ou JSON.
* Gerar código SQL e até mesmo modelos de API para integração com outros sistemas.

## 🧑‍💻 Tecnologias Utilizadas
 
 🌐 Frontend

 * HTML: Estruturação da página e dos formulários para interação do usuário.
 * CSS: Estilos para tornar a interface bonita e responsiva.
 * JavaScript: Lógica para interagir com o usuário e gerar código SQL, além de manipular os dados no frontend.
 * Eventos DOM para capturar ações do usuário (clique, envio de formulários, etc.).
 * Manipulação de DOM para criar novas colunas, remover colunas e exibir os resultados gerados.

 <div align="center">
  

  
</div>

🐍 Backend (Opcional)
 
 * Python (usando Flask): Um backend simples para processamento de dados mais complexos (como validação ou simulação de banco de dados) se necessário.
 * Flask: Framework web leve para construir APIs em Python, necessário para manipulação mais avançada de dados ou interação com banco de dados real.

📦 Dependências do Python

 * Flask: Para criar o servidor backend que pode interagir com o frontend via API.
   Para instalar o Flask, use o seguinte comando:

````
pip install Flask
````

📁 Estrutura de Pastas

````
sql-table-generator/
│
├── index.html            # Página principal (interface do usuário)
├── styles.css            # Estilos para a interface
├── script.js             # Lógica do front-end (interação com o usuário)
├── db-simulator.js       # Simulador de banco de dados (IndexedDB)
├── assets/               # Pasta para ícones, imagens, etc. (se necessário)
│
└── server/               # Pasta do backend Python
    ├── app.py            # Servidor Flask (backend em Python)
    └── requirements.txt  # Arquivo de configuração do Python (dependências)
````
## 📑 Funcionalidades

## 1. 🏗️ Configuração de Tabelas SQL
* Descrição: O usuário pode configurar tabelas SQL ao definir um nome para a tabela, o nome das colunas e o tipo de dados de cada coluna (INTEGER, TEXT, REAL, BOOLEAN). Também é possível definir chaves primárias e estrangeiras.
* Tecnologias: JavaScript (manipulação de DOM e lógica), HTML (formulários).

## 2. 💾 Inserção de Dados
* Descrição: Permite inserir dados de exemplo em tabelas criadas, ajudando a testar rapidamente a estrutura de dados.
* Tecnologias: JavaScript (interação com os campos de dados).

## 3. 🔎 Geração de Índices
* Descrição: O sistema pode gerar índices para otimizar as consultas nas tabelas criadas. O usuário escolhe a tabela e a coluna a ser indexada.
* Tecnologias: JavaScript (geração de código SQL).

## 4. ⚙️ Validação de Dados
* Descrição: Permite a aplicação de validações nas colunas da tabela, como NOT NULL, UNIQUE ou DEFAULT.
* Tecnologias: JavaScript (interação com o formulário).

## 5. 🗂️ Importação de Dados
* Descrição: O sistema pode importar dados de arquivos CSV ou JSON para as tabelas criadas, permitindo a migração fácil de dados para o banco de dados.
* Tecnologias: JavaScript (manipulação de arquivos e inserção de dados).

## 6. 📝 Geração de SQL
* Descrição: O sistema gera o código SQL completo para criar a tabela, incluindo tipos de dados, chaves primárias, estrangeiras, validações e índices.
* Tecnologias: JavaScript (geração e exibição de código SQL).

## 7. 🌐 API Generation (Opcional, usando Python)
* Descrição: Gera um modelo básico de API para interagir com os dados da tabela criada. A API pode ser configurada e consumida por outras aplicações.
* Tecnologias: Flask (backend Python para a geração da API).

## 8. 🧑‍💻 Depuração SQL
* Descrição: Permite que o usuário insira consultas SQL para depurar ou testar diretamente em um banco de dados simulado.
* Tecnologias: JavaScript (interação com consultas SQL).

📜 Passo a Passo para Instalar e Rodar o Projeto

 1. Clonar o Repositório: Clone este repositório em sua máquina local.

````
git clone https://github.com/seu-usuario/sql-table-generator.git
cd sql-table-generator
````

2. Instalar as Dependências (Backend):
 
 * Se você for usar o backend Python, instale as dependências com o pip:

````
cd server
pip install -r requirements.txt
````

3. Executar o Backend (se necessário):
 
 * Para rodar o backend com Flask, execute:

````
python app.py
````
 4. Abrir o Frontend:
  * Abra o arquivo index.html no seu navegador para começar a usar a ferramenta.

## 🔧 Funcionalidades Futuras

 * Exportar SQL: Opção de exportar os códigos SQL gerados para arquivos .sql.
 * Integração com Bancos Reais: Conectar a bancos de dados reais (MySQL, PostgreSQL) para gerar tabelas diretamente.

## 📄 Licença

 * Este projeto é licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.

## 📚 Agradecimentos

 * Obrigado por usar o SQL Table Generator! Se você tiver sugestões ou melhorias, sinta-se à vontade para contribuir no repositório.
