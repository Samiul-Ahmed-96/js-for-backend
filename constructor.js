function Person(fName,lName,age){
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.fullName = function(){
        return firstName + " " + lastName
    }

}

const anik  = new Person('Samiul' , "Ahmed" , "23");
const saffat  = new Person('Saffat' , "Ahmed" , "25");


console.log(saffat);