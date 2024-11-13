const OTHERS = {
    es: {
        terms: [
            { value: "Concurrency / Parallelism", translated: "Concurrencia / Paralelismo" },
            { value: "Encryption", translated: "Cifrado" },
            { value: "Compression", translated: "Compresión" },
            { value: "Open source", translated: "Código abierto" }
        ],
        code: `
import threading
import time

# Concurrency: ejecutar dos funciones simultáneamente
def print_numbers():
    for i in range(1, 6):
        print(i)
        time.sleep(1)

def print_letters():
    for letter in 'ABCDE':
        print(letter)
        time.sleep(1)

# Crear y ejecutar hilos
thread1 = threading.Thread(target=print_numbers)
thread2 = threading.Thread(target=print_letters)

thread1.start()
thread2.start()

thread1.join()
thread2.join()

`
    }
}

export default OTHERS