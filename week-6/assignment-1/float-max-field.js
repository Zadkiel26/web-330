/*
 Title: float-max-field.js
 Date: 11/24/2023
 Author: Zadkiel Rodriguez Alvarado
 Description: Export class FloatMaxField
*/
export class FloatMaxField {
    constructor(name, field, max) {
        this.name = name;
        this.field = field;
        this.max = max;
    }
    //Create validate function and return true if the field value is less than the max value
    validate() {
        return parseFloat(this.field < this.max);
    }
    //Create getMessage function and return a string
    getMessage() {
        return `${this.name} must be less than ${this.max}. You entered ${this.field}.`;
    }
}