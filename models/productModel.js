const fs = require('fs');
const path = require('path');

module.exports = {
    filename: path.resolve(__dirname, '../data/product.json'),
    readFile() {
        // Leer nuestra informacion
        const productPath = this.filename;
        const productJson = fs.readFileSync(productPath, 'utf-8');
        // Parsear la informacion
        return JSON.parse(productJson);
    },
    writeFile(newData) {
        // Pasar la data a json
        const dataJson = JSON.stringify(newData, null, 2);
        // Escribir el archivo
        fs.writeFileSync(this.filename, dataJson);
    },
    generateId() {
        const product = this.readFile();
        const lastProduct = product.pop();
        return lastProduct.id + 1;
    },
    findAll() {
        // Leer nuestra informacion
        const product = this.readFile();
        // devolver la info
        return product;
    },
    findByPk(id) {
        const product = this.readFile();
        // Filtrar por el ID
        const productFound = product.find(product => product.id == id);
        // Devolvemos el producto
        return productFound;
    },
    create(product) {
        product.id = this.generateId();

        // Leer el archivo
        const product = this.readFile();
        // Agregar nuestro producto al array de prdoducto
        const productUpdated = [...product, product];
        // Volver a escribir el archivo con el nuevo array de productos
        this.writeFile(productUpdated);
        return product;
    },
    update(data, id) {
        const product = this.readFile();

        const newProduct = product.name(product => {
            if(product.id == id){
                product = {
                    id: product.id,
                    ...data
                }
            }
            return product;
        });

        this.writeFile(newProduct);
    },
    destroy(id) {
        const product = this.readFile();

        const newProduct = product.filter(product => product.id != id);

        this.writeFile(newProduct);
    }
}