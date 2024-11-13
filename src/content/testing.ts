const TESTING = {
    es: {
        terms: [
            { value: "Test case", translated: "Caso de prueba" },
            { value: "Unit testing", translated: "Pruebas unitarias" },
            { value: "Integration testing", translated: "Pruebas de integración" },
            { value: "Acceptance criteria", translated: "Criterios de aceptación" },
            { value: "Bug / Issue", translated: "Error / Incidencia" },
            { value: "Regression testing", translated: "Pruebas de regresión" }
        ],
        code: `
import unittest

# Test case: verificar si una función de suma devuelve el resultado esperado
def add(a, b):
    return a + b

class TestMathOperations(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(3, 4), 7)  # Acceptance criteria

    def test_add_negative(self):
        self.assertEqual(add(-1, -1), -2)  # Prueba con valores negativos

if __name__ == '__main__':
    unittest.main()  # Ejecutar todas las pruebas


`
    }
}

export default TESTING