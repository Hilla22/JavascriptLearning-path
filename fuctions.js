//basic return//
function myFunction(g1, g2) {
    return g1 / g2;
}
const value = myFunction(8, 2); // Calling the function
console.log(value);
//function declaration//
function calcAddition(number1,number2){
    return number1+number2;
}
console.log(calcAddition(7,6));
//function expression//
const square=function(number){
    return number*number
}
const x=(square (7))
console.log(x)
//arrow function//
const a=['Hydrogen','Barium','lithium','Carbon']
const a2=a.map (function(s) {
    return s.function; 

})
console.log("Normal way ", a2); // [8, 6, 7, 9]
const a3 = a.map((s) => s.length);
console.log("Using Arrow Function ", a3); // [8, 6, 7, 9]
//calling functions//
function welcomeMsg(name) {
    return ("Hello " + name + " welcome to GeeksforGeeks");

}
let nameVal = "Hillary Mugasia";
console.log(welcomeMsg(nameVal));
