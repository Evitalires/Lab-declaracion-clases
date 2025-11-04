//Ejercicio 1: Sistema básico de vehículos
class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    obtenerDetalles() {
        let detalles = `
        Los detalles del vehiculo son: 
        Marca: ${this.marca}
        Modelo: ${this.modelo}
        Año: ${this.año}`
        console.log(detalles);
    }
}
const testVehiculo = new Vehiculo("Renaul", "Classic", "2025");
testVehiculo.obtenerDetalles()

class Coche extends Vehiculo {
    constructor(marca, modelo, año, numeroPuertas) {
        super(marca, modelo, año);
        this.numeroPuertas = numeroPuertas 
    }
    mostrarNumeroPuertas(){
        console.log(
            `En el coche hay ${this.numeroPuertas} puertas.`
        );
    }
}
const testCoche = new Coche("Renaul", "Classic", "2026", "4");
testCoche.obtenerDetalles();
testCoche.mostrarNumeroPuertas();

class Moto extends Vehiculo {
    constructor(marca, modelo, año, cilindraje) {
        super(marca, modelo, año);
        this.cilindraje = cilindraje 
    }
    mostrarcilindraje(){
        console.log(
            `La moto tiene un cilindraje de ${this.cilindraje} centimetro cubicos.`
        );
    }
}
const testMoto = new Moto("Kawasaki", "Sport", "2024", "4100");
testMoto.obtenerDetalles();
testMoto.mostrarcilindraje();

// Ejercicio 2: Sistema de empleados

class Empleado {
    constructor(nombre, edad, salarioBase) {
        this.nombre = nombre;
        this.edad = edad;
        this.salarioBase = salarioBase;
    }
    calcularSalario(){
        console.log(
            `El salario base de ${this.nombre}, es: $${this.salarioBase}`
        );
    }
}
const testEmpleado = new Empleado("Javier", 15, 15000);
testEmpleado.calcularSalario()

class Gerente extends Empleado {
    constructor(nombre, edad, salarioBase, bonificacion) {
        super(nombre, edad, salarioBase);
        this.bonificacion = bonificacion;
    }
    calcularSalario(){
        console.log(
            `El Gerente ${this.nombre}. tiene:
            Un salario base de $${this.salarioBase}. 
            Una bonificación de $${this.bonificacion}
            El salario final del Gerente es: $ ${this.salarioBase + this.bonificacion}`
        );
    }
}
const testGerente = new Gerente("Javier", 35, 25000, 5000);
testGerente.calcularSalario()
