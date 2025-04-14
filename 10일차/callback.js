/*
콜백함수 -> 매개변수에 인자값으로 함수 자체를 전달하는것 
*/

//함수, 익명함수, 람다함수, 즉시실행함수, 콜백함수
(function(){
    console.log("----------------");
})();

function parentFunc(callback){ //callback자리에 어떤 함수든 넣을 수 있음-> 코드유연 
    console.log("parent");
    callback(); //함수호출 .. 인자값으로 함수를 전달하는것 
}

function childFunc(){
    console.log("child");
}

parentFunc(childFunc);

console.log("--------------------")

// 왜  콜백을 사용하는가 ? 반복 줄이고, 동작 순서 조절하고, 코드 구조 깔끔하게 하고, 비동기 로직을 다룰수 있고 

function repeat(count){
    for(let i=0; i<count; i++)
        console.log(i+1);
}

repeat(5);


function repeatDouble(count){ //2배
    for(let i=0; i<count; i++)
        console.log((i+1)*2);
}

repeatDouble(5);

function repeatThree(count){ //3배 
    for(let i=0; i<count; i++)
        console.log((i+1)*3);
}

repeatThree(5);

console.log("-----------------------------");

function repeatAll(count, callback){
    for(let i=0; i<count; i++)
        callback(i+1);
}

function origin(count){
    console.log(count)
}
// repeatAll(5, origin); //origin 5회 반복한다. 
repeatAll(5, count=>console.log(count)) //람다함수를 이용해서 출력하기 54~56번을 이 한줄로 바꿈꿈 

function double(count){
    console.log(count*2)
}
// repeatAll(5, double);
repeatAll(5, count => console.log(count*2));

function three(count){
    console.log(count*3)
}
// repeatAll(5, three);
repeatAll(5, count => console.log(count*3)); // 앞에는 값을, 뒤에는 함수 

repeatAll(5, function three(count){//이렇게 함수를 다 넣을수도 있음 
    console.log(count*5)
});