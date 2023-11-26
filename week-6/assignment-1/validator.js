/*
 Title: validator.js
 Date: 11/24/2023
 Author: Zadkiel Rodriguez Alvarado
 Description: Export class Validator
*/
import { RequiredField } from './required-field.js';
import { FloatField } from './float-field.js';
import { FloatMinField } from './float-min-field.js';
import { FloatMaxField } from './float-max-field.js';

export class Validator {
    //Create validators and messages properties and assign them to empty arrays
    validators = [];
    messages = [];

    constructor(name, field) {
        this.name = name;
        this.field = field;
    }
    //Create addRequireField function and push a new RequireField instance to the validators array
    addRequiredField() {
        this.validators.push(new RequiredField(this.name, this.field));
    }
    //Create addRequiredFloatField function and push a new FloatField instance to the validators array
    addRequiredFloatField() {
        this.validators.push(new FloatField(this.name, this.field));
    }
    //Create addFloatMinField function and push a new FloatMinField instance to the validators array
    addFloatMinField(min) {
        this.validators.push(new FloatMinField(this.name, this.field, min));
    }
    //Create addFloatMaxField function and push a new FloatMaxField instance to the validators array
    addFloatMaxField(max){
        this.validators.push(new FloatMaxField(this.name, this.field, max));
    }
    //Create validate function and iterate through the validators array and if it returns false then push the message to the messages array
    validate() {
        for(const validator of this.validators) {
            if(!validator.validate()) {
                this.messages.push(validator.getMessage());
                return false;
            }
        }
        return true;
    }
}