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