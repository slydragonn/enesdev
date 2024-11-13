const VERSION_CONTROL = {
    es: {
        terms: [
            { value: "Version control", translated: "Control de versiones" },
            { value: "Commit", translated: "Confirmación" },
            { value: "Repository (Repo)", translated: "Repositorio" },
            { value: "Branch", translated: "Rama" },
            { value: "Merge", translated: "Fusionar" },
            { value: "Pull / Push", translated: "Extraer / Enviar" },
            { value: "Conflict", translated: "Conflicto" },
            { value: "Pull request", translated: "Solicitud de extracción" }
        ],
        code: `
# Inicializar un repositorio de Git y realizar un commit
git init
git add .
git commit -m "Initial commit"

# Crear una nueva rama para una nueva funcionalidad
git checkout -b feature/add-new-feature

# Trabajar en la nueva funcionalidad y realizar un commit
git add .
git commit -m "Add new feature"

# Push de la nueva rama y abrir un Pull Request para revisión
git push origin feature/add-new-feature
# Luego crear la Pull Request en la plataforma de colaboración

`
    }
}

export default VERSION_CONTROL