/*
 Title: shopping-cart.js
 Date: 11/19/2023
 Author: Zadkiel Rodriguez Alvarado
 Description: Export class shopping-cart
*/

//Creating the export class ShoppingCart
export class ShoppingCart {
    constructor() {
        this.products = [];
    }

    //Creating a count function that return the length of the products array
    count() {
        return this.products.length;
    }

    //Creating an add function that adds a product to the products array
    add(product) {
        this.products.push(product);
    }

    //Using JS Iterators
    *[Symbol.iterator]() {
        for(let product of this.products) {
            yield product;
        }
    }
}