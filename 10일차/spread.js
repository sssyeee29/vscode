/*
스프레드 연산자
*/

let arrA = [1,2,3];
let arrB = [...arrA, 4, 5, 6];

console.log(arrB);

let objA = {
    a:1,
    b:2,
};

let objB = {
    ...objA,
    c:3,
}
console.log(objB);

// function test(a,b,c){
    // console.log(a,b,c);
// }
let func = (a,b,c)=> console.log(a,b,c); //21~23까지 같은 문장 

let arr = [10,20,30];

func(...arr);   //func(10,20,30) -> 흩뿌려져서 값을 하나하나 전달한다.. 그래서 스프레드


/* 
rest 매개변수 : 스프레드 연산자랑 반대개념 
*/

console.log("------------------------------")
let func2 = (...rest) => console.log(rest);

func2(1,2,3);
func2(1,2,3,4);
func2(1,2,3,4,5);

/*
let func2 = (...rest) => {
    let sum=0;
    rest.forEach(i => sum += i);
    console.log(sum);
}

func2(1,2,3)
*/


let func3 = (param, ...rest) => { //param은 js에서 쓰이는 변수 이름일뿐,, 
    console.log(param);
    console.log(rest);
}
func3(1,2,3);
func3(1,2,3,4,);
func3(1,2,3,4,5,6);