//Creating the Bill class
export class Bill {
    constructor() {
        //Creating the properties and assigning them to empty arrays
        this._beverages = [];
        this._appetizers = [];
        this._mainCourses = [];
        this._desserts = [];
    }

    //Creating the addBeverage function with one parameter (beverage)
    addBeverage(beverage) {
        //Pushing the beverage passed in to the _beverages array
        this._beverages.push(beverage);
    }
    //Creating the addAppetizer function with one parameter (appetizer)
    addAppetizer(appetizer) {
        //Pushing the appetizer passed in to the _appetizers array
        this._appetizers.push(appetizer);
    }
    //Creating the addMainCourse function with one parameter (mainCourse)
    addMainCourse(mainCourse) {
        //Pushing the mainCourse passed in to the _mainCourses array
        this._mainCourses.push(mainCourse);
    }
    //Creating the addDessert function with one parameter (dessert)
    addDessert(dessert) {
        //Pushing the dessert passed in to the _desserts array
        this._desserts.push(dessert);
    }

    //Creating the getTotal function
    getTotal() {
        //Creating a variable named total and assigning it to 0
        let total = 0;
        //Iterate over an array of category arrays: [_beverages, _appetizers, _mainCourses, _desserts]
        [this._beverages, this._appetizers, this._mainCourses, this._desserts].forEach(category => {
             //For each category array, iterate over its items
            category.forEach(item => {
                //Access the 'price' property of each item and add it to the 'total'
                total += parseFloat(item.price);
            });
        });

        //Return the total fixed to two decimal spaces
        return total.toFixed(2);
    }
}