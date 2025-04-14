/*
    async / await :
    프로미스르르 좀 더 쉽게 사용할 수 있도록 es8에서 도입된 문법 
    비동기 코드를 마치 동기 코드처럼 깔끔하게 작성할 수 있도록 한다. 

*/

function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms));//ms 자리에 1000이 들어감 
}

async function example(){
    console.log("시작!");
    await wait(1000); //async랑 await를 써야 1초후에 나옴 !!
    console.log("1초 후 실행됩니다."); 
}

example();