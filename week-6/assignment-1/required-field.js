/*
 Title: require-field.js
 Date: 11/24/2023
 Author: Zadkiel Rodriguez Alvarado
 Description: Export class RequireField
*/
export class RequiredField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }
    //Create validate function that validates if the field is a string and not a number
    validate() {
        if(parseFloat(this.field)) {
          return false;
        }
        return true;
      }
    //Create getMessage function that return a string
    getMessage() {
        return `${this.name} is a required field.`;
    }
}
