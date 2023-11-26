/*
 Title: require-field.js
 Date: 11/24/2023
 Author: Zadkiel Rodriguez Alvarado
 Description: Export class RequireField
*/
export class RequireField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }
    //Create validate function that validates that the field is a string
    validate() {
        return typeof this.field === 'string';
    }
    //Create getMessage function that return a string
    getMessage() {
        return `${this.name} is a required field.`;
    }
}
