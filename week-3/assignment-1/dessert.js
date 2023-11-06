//Importing the Product module
import { Product } from "./product.js";
//Creating the dessert class inherit from the Product class
export class Dessert extends Product {
    constructor(name, price){
         //Calling the constructor from the parent class (Product)
        super(name, price);
    }
}