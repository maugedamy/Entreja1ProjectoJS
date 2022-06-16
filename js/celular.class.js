class Celular {
    constructor(id, marca, modelo, precio) {
        this.id = id
        this.marca = marca
        this.modelo = modelo
        this.precio = precio
    }
    nombre(){
    return this.marca + " " + this.modelo;
    }
}

