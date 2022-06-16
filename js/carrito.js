function agregarCelular() {
    let id = crearID();
    let marca = seleccionarMarca().toUpperCase();
    let modelo = prompt("Ingresá el modelo del celular").toUpperCase();
    let precio = parseFloat(prompt("Ingresá el precio del celular:"));

    celulares.push(new Celular(id, marca, modelo, precio));
}

function seleccionarMarca() {
    let marca;
    do {
        marca = prompt("Seleccioná el número correspondiente a la marca del celular: \n1) Iphone \n2) Samsung \n3) Motorola");
        switch(marca) {
            case "1":
                marca = "Iphone";
                break;
            case "2":
                marca = "Samsung";
                break;
            case "3":
                marca = "Motorola"
                break;
            default:
                alert("No existe la selección.");
                marca = "-1";
                break;
        }
    } while(marca == -1)
    return marca;
}

function crearID() {
    id++;
    return id;
}

function mostrarCelular() {
    celulares.forEach((celular)=> console.table(celular));
}

function buscarCelular() {
    let buscar = prompt("¿Qué celular buscás?").toUpperCase();
    let resultado = celulares.find((celular)=> celular.nombre().includes(buscar));
    if(resultado !== undefined) {
        console.clear();
        console.table(resultado)
    }
}

function filtrarCelular() {
    let filtrar = prompt("¿Qué celular buscás?").toUpperCase();
    let resultado = celulares.filter((celular)=> celular.nombre().includes(filtrar));
    if(resultado !== undefined) {
        console.clear();
        console.table(resultado);
    }
}

function calcularCarrito() {
    console.clear();
    let total = carrito.reduce((suma,celular)=> suma + celular.precio, 0);
    console.log("Total de compra: ", total);
}