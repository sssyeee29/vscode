
//함수 표현식 - 화살표함수(람다함수)
const ramda = (num) => {
    return num*num;
};

result = ramda(9);
console.log(`합 결과  : ${result}`);
console.log("------------------------");

/*매개변수가 없거나 하나만 있으면 () 생략가능 */
const ramda2 = num => { 
    return num*num;
};

result = ramda(2);
console.log(`합 결과  : ${result}`);
console.log("------------------------");

//{} 안에 문장이 1개인 경우는 {} 생략 가능 
//단, {}안에 return 문장이 있으면 삭제 // return 쓰고 싶으면 {} 이거도 같이 써줘야함 
const ramda3 = num => num*num; //return이 없어도 이 줄에서 알아서 return을 해줌 
   
result = ramda(8);
console.log(`합 결과  : ${result}`);
console.log("------------------------");

