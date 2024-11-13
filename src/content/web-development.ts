const WEB_DEVELOPMENT = {
    es: {
        terms: [
            { value: "API (Application Programming Interface)", translated: "Interfaz de programación de aplicaciones" },
            { value: "Framework", translated: "Marco de trabajo" },
            { value: "Responsive design", translated: "Diseño responsivo" },
            { value: "Authentication / Authorization", translated: "Autenticación / Autorización" },
            { value: "Client-side / Server-side", translated: "Lado del cliente / Lado del servidor" },
            { value: "AJAX (Asynchronous JavaScript and XML)", translated: "AJAX" },
            { value: "HTTP (HyperText Transfer Protocol)", translated: "Protocolo de transferencia de hipertexto" }
        ],
        code: `
// Frontend: una función en JavaScript que envía datos a una API
async function sendDataToAPI(data) {
    try {
        const response = await fetch('/api/data', {  // Llamada API
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        console.log('Server response:', result);
    } catch (error) {
        console.error('Error:', error);  // Error handling
    }
}

// Backend (Node.js con Express): configuración de la API
const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/data', (req, res) => {
    console.log('Data received:', req.body);  // Server-side processing
    res.json({ message: "Data processed successfully" });
});

app.listen(3000, () => console.log("API running on port 3000"));

    `
    }
}

export default WEB_DEVELOPMENT