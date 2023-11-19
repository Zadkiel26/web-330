/*
 Title: product.js
 Date: 11/19/2023
 Author: Zadkiel Rodriguez Alvarado
 Description: Export class product
*/

//Creating the export class Product with two parameters (name, price)
export class Product {
    constructor(name, price) {
        this.id = Math.random().toString(16).slice(2);
        this.name = name;
        this.price = parseFloat(price);
    }
}