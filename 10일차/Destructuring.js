/*
구조분해 할당 : 배열이나 객체에서 값을 꺼내는 과정을 더 쉽고 직관적으로 하기 위해 
*/

let arr = [1,2,3];

let one = arr[0]
let two = arr[1]
let three = arr[2]
console.log(one, two, three);

arr = [10,20,30];

[one, two, three] = arr; // one에 10 two에 20 three에 30 하나씩 할당됨 
console.log(one, two, three);

//객체를 넘겨줄 땐 18번에 {} 이걸로 한 번 더 묶어서 써줘야함 
const func = ({name, age, location})=>{
    console.log(name, age, location);
}
// const func = ({name:n, age:a, location:l})=>{
    // console.log(n, a, l);
// }


let person = {
    name : "홍길동",
    age : 20,
    location : "천호"
};

// func(person.name, person.age, person.location);
func(person); // 객체 전달할 때 이렇게 한번에 호출하면 알아서 구조분해 할당을 해서 값을 각각 출력함
                // 안에 어떤 값이 들었는지 모르는데 값을 찍어내야할때 주로 사용 