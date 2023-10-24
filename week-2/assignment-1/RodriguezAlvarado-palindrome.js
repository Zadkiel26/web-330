//Function to return current date
function getTodaysDate() {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' }; //Define date formatting options to get year, month, and day (MM/DD/YYYY)
    const today = new Date().toLocaleDateString('en-US', options); //Create a new date with the specified options and the "en-US" locale
    return today; //Return the formatted date as a string
}

//Function to return the length of the string
function getLength(string) {
    return string.length; //Return string length
}

//Function to reverse a string
function reverse(string) {
    const charArray = string.split(''); //Split the string into a char array
    charArray.reverse(); //Reverse the letters with built in JavaScript reverse function
    const reversedString = charArray.join(''); //Create a new string from the char array
    return reversedString; //Return reversed string
}

//Function to check if a string is a palindrome
function isPalindrome(string){
    const reversedString = reverse(string); //Create the reversed string with the help of the reverse function
    return string === reversedString; //Return true if the original string is equal to the reversed version. If not return false
}

//Add event listener for "click" to the button "Check Phrase"
document.getElementById('btnCheckPhrase').addEventListener('click', () => {
    const txtPhrase = document.getElementById('txtPhrase').value; //Capturing the inputted phrase and assigning it to the variable "txtPhrase"
    const assignResult = document.getElementById('assign-results'); //Assigning "assignResult" to the div "assign-results"

    const today = getTodaysDate(); //Getting today's date and assigning it to the variable "today"
    const len = getLength(txtPhrase); //Getting the length of the "txtPrase" and assigning it to the variable "len"
    const reversedPhrase = reverse(txtPhrase); //Reversing the "txtPhrase" and assigning it to the variable "reversedPhrase"

    const header = `Date: ${today}<br>Original Phrase: ${txtPhrase}<br>Reversed Phrase: ${reversedPhrase}<br>Phrase Length: ${len}`; //Creating the string for the "header"

    const assignResultsHeader = document.getElementById('assign-results-header'); //Assigning "assignResultsHeader" to the div "assign-results-header"
    assignResultsHeader.innerHTML = header; //Set the innerHTML of the "assignResultsHeader"to the value of the "header" variable

    //Check if the "txtPhrase" is a palindrome
    if(isPalindrome(txtPhrase.toLowerCase())) {
        assignResult.innerHTML = `${txtPhrase} <u><strong>is</strong></u> a palindrome!`; // If true, set the innerHTML of "assignResult" with a message indicating it's a palindrome
    }
    else {
        assignResult.innerHTML = `${txtPhrase} <u><strong>is not</strong></u> a palindrome!`; // If false, set the innerHTML of "assignResult" with a message indicating it's not a palindrome
    }
})

