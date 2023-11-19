/*
 Title: cart-component.js
 Date: 11/19/2023
 Author: Zadkiel Rodriguez Alvarado
 Description: Export class cart-component
*/

//Creating the export class CartComponent that extends from JS HTMLElement
export class CartComponent extends HTMLElement {
    constructor() {
        //Calling the parent constructor (HTMLElement)
        super();
    }

    //Function connectedCallback that passes in a string value cart-component
    connectedCallback() {
        this.innerHTML = `<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`
    }
}

//Calling the customElements.define() function and pass-in the string value
customElements.define('cart-component', CartComponent);