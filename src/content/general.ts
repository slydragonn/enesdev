const GENERAL = {
    es: {
        terms: [
            {
                value: "Algorithm",
                translated: "Algoritmo"
            },
            {
                value: "Data structure",
                translated: "Estructura de datos"
            },
            {
                value: "Variable",
                translated: "Variable"
            },
            {
                value: "Loop",
                translated: "Bucle"
            },
            {
                value: "Condition",
                translated: "Condición"
            },
            {
                value: "Syntax",
                translated: "Sintaxis"
            },
            {
                value: "Debugging",
                translated: "Depuración"
            },
            {
                value: "Runtime",
                translated: "Tiempo de ejecución"
            },
            {
                value: "Error handling",
                translated: "Manejo de errores"
            }
        ],
        code: `
# Algorithm: función que encuentra el número más grande en una lista
def find_max(numbers):
    max_num = numbers[0]  # Variable inicial
    for num in numbers:  # Loop
        if num > max_num:  # Condition
            max_num = num
    return max_num

# Syntax y Debugging: corregir un error de sintaxis en un bucle
try:
    print(find_max([3, 5, 1, 9, 7]))  # Expected output: 9
except Exception as e:
    print("Error:", e)  # Error handling

# Runtime: calcular el tiempo de ejecución
import time
start_time = time.time()
find_max(list(range(100000)))
print("Tiempo de ejecución:", time.time() - start_time, "segundos")
    `
    }
}

export default GENERAL