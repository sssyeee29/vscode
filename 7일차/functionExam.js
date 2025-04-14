
function gugudan() {
    console.log("(기본)함수 : ")
    for(let i=1; i<=9; i++){
        console.log(`3*${i} = ${3*i}`);
    }
}

gugudan();
console.log("------------------------");

//함수 표현식 
const gugu = function gugudan2() {
    console.log("함수표현식 : ")
    for(let i=1; i<=9; i++){
        console.log(`3*${i} = ${3*i}`);
    }
};

gugu();
console.log("------------------------");

//함수 표현식 - 익명함수2
const gugu2 = function () {
    console.log("익명함수 : ")
    for(let i=1; i<=9; i++){
        console.log(`3*${i} = ${3*i}`);
    }
};

gugu2();
console.log("------------------------");

//함수 표현식 - 화살표함수(람다함수)
const gugu3 = () => {
    console.log("화살표함수 : ")
    for(let i=1; i<=9; i++){
        console.log(`3*${i} = ${3*i}`);
    }
};

gugu3();
console.log("------------------------");