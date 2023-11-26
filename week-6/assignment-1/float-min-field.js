/*
 Title: float-min-field.js
 Date: 11/24/2023
 Author: Zadkiel Rodriguez Alvarado
 Description: Export class FloatMinField
*/
export class FloatMinField {
    constructor(name, field, min) {
        this.name = name;
        this.field = field;
        this.min = min;
    }
    //Create validate function and return true if the field value is greater than min value
    validate() {
        return parseFloat(this.field > this.min);
    }
    //Create getMessage function and return a string
    getMessage() {
        return `${this.name} must be more than ${this.min}. You entered ${this.field}.`;
    }
}