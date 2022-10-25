// console.log(module);

const Name = (myName) =>{
    console.log(myName);
}
const Sum = (num1 , num2) =>{
    return res = num1 + num2;
}

//Default Export 
// module.exports = Sum;


//Named Export
module.exports.Sum = Sum;
module.exports.Name = Name;

console.log(module)