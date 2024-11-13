const DEVOPS = {
    es: {
        terms: [
            { value: "Deployment", translated: "Despliegue" },
            { value: "Server", translated: "Servidor" },
            { value: "Environment (e.g., Development, Staging, Production)", translated: "Entorno" },
            { value: "Containerization", translated: "Contenerización" },
            { value: "Continuous integration / Continuous deployment (CI/CD)", translated: "Integración continua / Despliegue continuo" },
            { value: "Load balancing", translated: "Balanceo de carga" },
            { value: "Monitoring", translated: "Monitoreo" },
            { value: "Latency", translated: "Latencia" },
            { value: "Throughput", translated: "Rendimiento" },
            { value: "Scalability", translated: "Escalabilidad" }
        ],
        code: `
name: CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v1
        with:
          node-version: '14'

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test

      - name: Deploy
        run: echo "Deployment step"


`
    }
}

export default DEVOPS