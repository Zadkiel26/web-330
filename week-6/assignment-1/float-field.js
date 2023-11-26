/*
 Title: float-field.js
 Date: 11/24/2023
 Author: Zadkiel Rodriguez Alvarado
 Description: Export class FloatField
*/
export class FloatField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }
    //Create validate function that returns true if you can parseFloat the field value
    validate() {
        return isNaN(parseFloat(this.field));
    }
    //Create getMessage function that returns a string
    getMessage() {
        return `${this.name} must be a float value. You entered ${this.field}.`
    }
}