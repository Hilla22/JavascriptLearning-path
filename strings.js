//string single declaration
let myname ='Hillary Mugasia';
console.log(myname);

//string interpolation
let str='my bank account was opened';
let newStr='kcb {str}';
console.log(newStr);

//multiline
let multi=`
hillary
mugasia
ederia
are 
students`;
console.log(multi)

//length string
let length=`hillary mugasia is my sirname`;
let len=length.length
console.log("String Length:"+len )

//string concatenation
let string1=`Good`;
let string2=`morning`;
let result=string1+string2
console.log("concatenated string:" +result)

//string escape
const escape1="\`btb\` is a learning platform";
const escape2="\"btb\"is a learning platform";
const escape3="\\btb\\ is a learning platform";
console.log(escape1)
console.log(escape2)
console.log(escape3)

//substring
let sub=`gigs for gigs`;
let subsub=sub.substring(0,12)
console.log(subsub)

//string uppercase and lowercase
let st=`Javascript`;
let uppercase=st.toUpperCase();
let lowercase=st.toLowerCase();
console.log(uppercase)
console.log(lowercase)

//string comparison
let sc1=`Hillary`
let sc2=newsc=`Hillary`
console.log(sc1==sc2);
console.log(sc1.localeCompare(sc2));



