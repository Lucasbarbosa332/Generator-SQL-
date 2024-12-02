from flask import Flask, request, jsonify
import csv
import json

app = Flask(__name__)

# Função para gerar SQL para criação de tabela
@app.route('/generate-sql', methods=['POST'])
def generate_sql():
    data = request.get_json()
    table_name = data.get('table_name')
    columns = data.get('columns')
    
    sql_query = f"CREATE TABLE {table_name} (\n"
    for column in columns:
        column_name = column.get('name')
        column_type = column.get('type')
        is_primary = column.get('is_primary', False)
        is_foreign_key = column.get('is_foreign_key', False)

        sql_query += f"  {column_name} {column_type}"

        if is_primary:
            sql_query += " PRIMARY KEY"
        if is_foreign_key:
            sql_query += " REFERENCES another_table(another_column)"
        
        sql_query += ",\n"
    
    sql_query = sql_query.rstrip(",\n") + "\n);"
    
    return jsonify({"sql": sql_query})

# Função para validação de dados
@app.route('/validate-data', methods=['POST'])
def validate_data():
    data = request.get_json()
    errors = []
    
    for record in data:
        if not record.get('column1'):
            errors.append("Coluna 1 não pode ser vazia")
        if record.get('column2') is None:
            errors.append("Coluna 2 não pode ser nula")
    
    if errors:
        return jsonify({"status": "error", "errors": errors}), 400
    return jsonify({"status": "success", "message": "Dados válidos"})

# Função para gerar índice
@app.route('/generate-index', methods=['POST'])
def generate_index():
    data = request.get_json()
    table_name = data.get('table_name')
    column_name = data.get('column_name')

    index_sql = f"CREATE INDEX idx_{table_name}_{column_name} ON {table_name} ({column_name});"
    
    return jsonify({"index_sql": index_sql})

# Função para importar dados (CSV ou JSON)
@app.route('/import-data', methods=['POST'])
def import_data():
    file = request.files['file']
    file_extension = file.filename.split('.')[-1]

    if file_extension == 'csv':
        data = csv.reader(file)
        # Processar CSV e inserir dados no banco (exemplo)
        for row in data:
            pass  # Inserir dados no banco de dados
    elif file_extension == 'json':
        data = json.load(file)
        # Processar JSON e inserir dados no banco (exemplo)
        for record in data:
            pass  # Inserir dados no banco de dados

    return jsonify({"status": "success", "message": "Dados importados com sucesso!"})

# Função para gerar documentação
@app.route('/generate-doc', methods=['GET'])
def generate_doc():
    doc = """
    # API Documentation
    ## Endpoints
    - /generate-sql: Gera SQL para criação de tabelas.
    - /import-data: Importa dados para o banco de dados.
    """

    return jsonify({"documentation": doc})

if __name__ == '__main__':
    app.run(debug=True)
