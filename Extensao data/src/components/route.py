@app.route('/create-table', methods=['POST'])
def create_table():
    data = request.get_json()
    table_name = data.get('table_name')
    columns = data.get('columns')

    # Conecte-se ao banco de dados e execute o SQL gerado
    # Exemplo com SQLite
    conn = sqlite3.connect('mydatabase.db')
    cursor = conn.cursor()
    cursor.execute(f"CREATE TABLE {table_name} (...)")  # Complete com as colunas
    conn.commit()
    conn.close()

    return jsonify({"status": "success", "message": "Tabela criada com sucesso!"})
