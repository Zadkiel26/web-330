//Importing the "FoodModel" class 
import { FoodModel } from "./food-model.js";

//Creating the "CalorieConverter" class with a static variable (data) and a static function (find) with a single parameter (foodName)
export class CalorieConverter {
    //Input the data given in the table as a new "FoodModel" object
    static data = [
        new FoodModel(1007, 'Egg', 78),
        new FoodModel(1008, 'Apple', 95),
        new FoodModel(1009, 'Hamburger', 354),
        new FoodModel(1010, 'Fries', 400),
        new FoodModel(1011, 'Banana', 105),
        new FoodModel(1012, 'Soda', 150)
    ];

    //Create the static function "find" with a single parameter (foodName)
    static find(foodName) {
        //Return a new array of data with the object matching the parameter string
        return CalorieConverter.data.filter(food => food.name.toLowerCase() === foodName.toLowerCase());
    } 
}