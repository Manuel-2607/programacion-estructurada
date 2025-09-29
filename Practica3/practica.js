//Ejemplo 1

def lanzar_dados():
    dado1 = random.randint(1, 6)  # valor entre 1 y 6
    dado2 = random.randint(1, 6)
    total = dado1 + dado2
    print(f"Dado 1: {dado1}")
    print(f"Dado 2: {dado2}")
    print(f"Total: {total}")

//Ejemplo de uso
lanzar_dados()

def operaciones(num1, num2):
    print(f"Números: {num1}, {num2}")
    print(f"Suma: {num1 + num2}")
    print(f"Resta: {num1 - num2}")
    print(f"Multiplicación: {num1 * num2}")
    
    if num2 != 0:  # evitar división por cero
        print(f"División: {num1 / num2}")
    else:
        print("División: No se puede dividir entre cero")

# Ejemplo de uso
operaciones(10, 5)
