//Import the product module
import { Product } from "./product.js";
//Creating the Beverage class inherit from the Product class
export class Beverage extends Product {
    constructor(name, price) {
        //Calling the constructor from the parent class (Product)
        super(name, price);
    }
}