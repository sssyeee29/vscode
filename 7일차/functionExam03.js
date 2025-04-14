
function gugudan(num) {
    console.log("(기본)함수 : ")
    let sum=0;
    for(let i=1; i<=9; i++)
        sum += num*i;
    
    return sum;
};

let result = gugudan(2);
console.log(`합 결과  : ${result}`);
console.log("------------------------");


//함수 표현식 
const gugu = function gugudan2(num) {
    console.log("함수표현식 : ")
    let sum=0;
    for(let i=1; i<=9; i++)
        sum += num*i;
    
    return sum;
};

result = gugu(3);
console.log(`합 결과  : ${result}`);
console.log("------------------------");


//함수 표현식 - 익명함수2
const gugu2 = function (num) {
    console.log("익명함수 : ")
    let sum=0;
    for(let i=1; i<=9; i++)
        sum += num*i;
    
    return sum;
};

result = gugu2(4);
console.log(`합 결과  : ${result}`);
console.log("------------------------");


//함수 표현식 - 화살표함수(람다함수)
const gugu3 = (num) => {
    console.log("화살표함수 : ")
    let sum=0;
    for(let i=1; i<=9; i++)
        sum += num*i;
    
    return sum;
};

result = gugu3(5);
console.log(`합 결과  : ${result}`);
console.log("------------------------");