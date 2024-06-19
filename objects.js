//javascript objects//
//example//
let school={
    name:`HILL SCHOOL`,
    location:`Eldoret Town`,
    established: '1971',
    displayInfo: function () {
        console.log(`${school.name} was established 
              in ${school.established} at ${school.location}`);
    }
}
school.displayInfo();   
//inherited properties
// hasOwnProperty code in js
const object1 = new Object();
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1')); // true
//accessing object members
let schoo0l = { 
    name : "Vivekanada", 
    location : "Delhi", 
    established : 1971,
    20 : 1000, 
    displayinfo : function() { 
        console.log(`${school.name} was established 
        in ${school.established} at ${school.location}`); 
    } 

} 
console.log(school.name); 


