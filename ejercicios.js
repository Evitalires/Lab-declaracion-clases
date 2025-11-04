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
            `El salario de ${this.nombre}, es: $${this.salarioBase}`
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
            Un salario base de $ ${this.salarioBase}. 
            Una bonificación de $ ${this.bonificacion}
            El salario final del Gerente es: $ ${this.salarioBase + this.bonificacion}`
        );
    }
}
const testGerente = new Gerente("Javier", 35, 25000, 5000);
testGerente.calcularSalario()

class Desarrolador extends Empleado {
    constructor(nombre, edad, salarioBase, lenguaje) {
        super(nombre, edad, salarioBase);
        this.lenguaje = lenguaje;
    }
    mostrarLeguaje(){
        console.log(`El lenguaje del desarrollado es ${this.lenguaje}`);
    }
}
const testDesarrollador = new Desarrolador("Jair", 35, 19000, "JavaScript");
testDesarrollador.calcularSalario();
testDesarrollador.mostrarLeguaje();


//Ejercicio 3: Sistema de productos electrónicos
class Producto {
    constructor(nombre, precio, marca) {
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
        this.descripcion = `Producto ${this.nombre}
        Marca: ${this.marca}
        Precio: $${this.precio}`
    }
    darDescripcion(){
        console.log(this.descripcion);
    }
}
const testProducto = new Producto("Coca Cola 500ml", 3000, "Cocacola" );
testProducto.darDescripcion();   

class Telefono extends Producto {
    constructor(nombre, precio, marca, procesador, pulgadas) {
        super(nombre, precio, marca);
        this.procesador = procesador;
        this.pulgadas = pulgadas;
        this.descripcionExtendida = this.descripcion + ` 
        Procesador: ${this.procesador}
        pulgadas: ${this.pulgadas}
        ` 
    }
    darDescripcion() {
        console.log(this.descripcionExtendida);
    }

}

const testTelefono = new Telefono("Pocophone x6 pro", 600000, "Xiaomi", "500gb", "12GB" );
testTelefono.darDescripcion();   

class Laptop extends Producto {
    constructor(nombre, precio, marca, procesador, pulgadas) {
        super(nombre, precio, marca);
        this.procesador = procesador;
        this.pulgadas = pulgadas;
        this.descripcionExtendida = this.descripcion + ` 
        Almacenimiento: ${this.procesador}
        Pulgadas: ${this.pulgadas}
        ` 
    }
    darDescripcion() {
        console.log(this.descripcionExtendida);
    }

}

const testLaptop = new Laptop("Macbook Pro", 800000, "Apple", "Apple Core 5", "17" );
testLaptop.darDescripcion();   