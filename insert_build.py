import sqlite3

conn = sqlite3.connect('data/app.db')  # assume SQLite DB path
conn.execute("""
    CREATE TABLE IF NOT EXISTS builds (
        id INTEGER PRIMARY KEY,
        service_name TEXT,
        status TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
""")
conn.execute("INSERT INTO builds (service_name, status) VALUES (?, ?)", ("freelance-contractor", "deployed"))
conn.commit()
conn.close()
print("Build record inserted")
