//Create the "FoodModel" class with 3 parameters (id, name, calories) and export the class
export class FoodModel {
    constructor(id, name, calories) {
        this.id = parseInt(id);
        this.name = name;
        this.calories = parseInt(calories);
    }
}