//Create the "Product" class
export class Product {
    constructor(name, price) {
        this.name = name;
        this.price = parseFloat(price).toFixed(2);
    }
}