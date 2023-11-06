//Importing the Product module
import { Product } from "./product.js";
//Creating the MainCourse class inherit from the Product class
export class MainCourse extends Product {
    constructor(name, price) {
         //Calling the constructor from the parent class (Product)
        super(name, price);
    }
}