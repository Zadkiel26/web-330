/*
 Title: finance-calculator.js
 Date: 11/24/2023
 Author: Zadkiel Rodriguez Alvarado
 Description: Export class FinanceCalculator
*/
export class FinanceCalculator {
    //Create static property
    static MONTHS_IN_YEAR = 12;

    //Create calculateFutureValue function that returns the calculation of the futureValue fixed to two decimal places
    calculateFutureValue(monthlyPayment, rate, years) {
        const months = years * this.MONTHS_IN_YEAR;
        const interestRate = 1 + rate / 100;
        const presentValue = monthlyPayment * months;
        const futureValue = presentValue * Math.pow(interestRate, months);

        return futureValue.toFixed(2);
    }
    //Create convertToCurrency function that returns the currency formatted in USD
    convertToCurrency(field) {
        let currencyFormatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        });

        return currencyFormatter.format(field);
    }
}