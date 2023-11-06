//Importing the Product module
import { Product } from "./product.js";
//Creating the class Appetizer inherit from the Product class
export class Appetizer extends Product {
    constructor(name, price) {
         //Calling the constructor from the parent class (Product)
        super(name, price);
    }
}