const person = {
    name:{
        firstName:"Gildong",
        lastName:"Hong"
    },
    like:["apple", "samsung"],
    printHello:function(){
        return "hello";
    }
};

console.log(person.name.firstName);
console.log(person.name['lastName']);
console.log(person.like[0]);
console.log(person.like[1]);
console.log(person.printHello());
console.log(person["printHello"]());

person.age = 20; // 객체 속성 추가하기 
console.log(person["age"]);

delete person.age; // 객체 삭제하기 //delete person["age"];
console.log(person["age"]);


