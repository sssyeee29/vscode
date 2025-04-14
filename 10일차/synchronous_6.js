/*
    async / await :
    프로미스르르 좀 더 쉽게 사용할 수 있도록 es8에서 도입된 문법 
    비동기 코드를 마치 동기 코드처럼 깔끔하게 작성할 수 있도록 한다. 

*/

function getData(){
    return new Promise(resolve => {
        setTimeout(()=>{resolve({id:1, name:'홍길동'}), 1000});
    });
        
}

async function loadUser(){
    console.log("시작!");
    const user = await getData(); // 10번에 있는 id랑 name이 user에 전달됨 
    console.log("사용자 정보: " , user); 
}

loadUser();