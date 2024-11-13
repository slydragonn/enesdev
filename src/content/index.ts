import DATABASES from "./databases"
import DEVOPS from "./devops"
import GENERAL from "./general"
import OTHERS from "./others"
import TESTING from "./testing"
import VERSION_CONTROL from "./version-control"
import WEB_DEVELOPMENT from "./web-development"

const CONTENT = [
    {
        name: "Conceptos Generales",
        value: GENERAL,
        description: {
            en: "Web development is the process of creating websites and web applications that are accessible through the internet. It includes frontend, backend, and full-stack development.",
            es: "El desarrollo web es el proceso de crear sitios web y aplicaciones web accesibles a través de internet. Incluye el desarrollo frontend, backend y full-stack."
        }
    },
    {
        name: "Desarrollo Web",
        value: WEB_DEVELOPMENT,
        description: {
            en: "Web development is the process of creating websites and web applications that are accessible through the internet. It includes frontend, backend, and full-stack development.",
            es: "El desarrollo web es el proceso de crear sitios web y aplicaciones web accesibles a través de internet. Incluye el desarrollo frontend, backend y full-stack."
        }
    },
    {
        name: "Bases de datos",
        value: DATABASES,
        description: {
            en: "Databases are organized collections of data that allow for easy access, management, and updating. They are essential for storing and retrieving data in applications.",
            es: "Las bases de datos son colecciones organizadas de datos que permiten un fácil acceso, gestión y actualización. Son esenciales para almacenar y recuperar datos en aplicaciones."
        }
    },
    {
        name: "Control de Versiones",
        value: VERSION_CONTROL,
        description: {
            en: "Version control is a system that tracks and manages changes to code, allowing multiple developers to work on the same project collaboratively.",
            es: "El control de versiones es un sistema que rastrea y gestiona cambios en el código, permitiendo que múltiples desarrolladores trabajen en el mismo proyecto de forma colaborativa."
        }
    },
    {
        name: "Pruebas y QA",
        value: TESTING,
        description: {
            en: "Testing and QA (Quality Assurance) are processes used to verify that software functions correctly, meets requirements, and is free of bugs or issues.",
            es: "Las pruebas y aseguramiento de calidad (QA) son procesos que verifican que el software funcione correctamente, cumpla con los requisitos y esté libre de errores o problemas."
        }
    },
    {
        name: "Infraestructura y DevOps",
        value: DEVOPS,
        description: {
            en: "Infrastructure and DevOps involve the setup and management of server environments and the automation of deployment processes to ensure reliable and scalable applications.",
            es: "La infraestructura y DevOps implican la configuración y gestión de entornos de servidor y la automatización de procesos de despliegue para garantizar aplicaciones confiables y escalables."
        }
    },
    {
        name: "Otros Términos Técnicos",
        value: OTHERS,
        description: {
            en: "Infrastructure and DevOps involve the setup and management of server environments and the automation of deployment processes to ensure reliable and scalable applications.",
            es: "La infraestructura y DevOps implican la configuración y gestión de entornos de servidor y la automatización de procesos de despliegue para garantizar aplicaciones confiables y escalables."
        }
    }
]

export default CONTENT