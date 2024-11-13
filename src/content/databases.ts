const DATABASES = {
    es: {
        terms: [
            { value: "Query", translated: "Consulta" },
            { value: "CRUD (Create, Read, Update, Delete)", translated: "Crear, Leer, Actualizar, Eliminar" },
            { value: "Schema", translated: "Esquema" },
            { value: "Primary key / Foreign key", translated: "Clave primaria / Clave foránea" },
            { value: "Normalization", translated: "Normalización" },
            { value: "Transaction", translated: "Transacción" },
            { value: "Index", translated: "Índice" }
        ],
        code: `
-- Crear una tabla (Schema) para almacenar usuarios
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE
);

-- CRUD: operaciones en la tabla 'users'
-- Create
INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');

-- Read
SELECT * FROM users WHERE name = 'Alice';

-- Update
UPDATE users SET email = 'alice.smith@example.com' WHERE name = 'Alice';

-- Delete
DELETE FROM users WHERE name = 'Alice';

-- Normalization: dividir datos en tablas para reducir redundancia
-- Tabla users y una tabla adicional user_profiles

`
    }
}

export default DATABASES