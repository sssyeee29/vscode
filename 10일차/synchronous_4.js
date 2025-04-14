/*
    async / await :
    프로미스르르 좀 더 쉽게 사용할 수 있도록 es8에서 도입된 문법 
    비동기 코드를 마치 동기 코드처럼 깔끔하게 작성할 수 있도록 한다. 

*/
function getData(){
    return new Promise((resolve, reject)=> {  
        setTimeout(()=> {
            resolve('async/await로 처리한 데이터');
            
        }, 1000);  
    })
}


async function fetchData(){
    try{
        const result = await getData(); //7번에 getData를 읽어올동안 가만히 기다려줌 
        console.log(result)
    }catch(error){
        console.log(error)
    }
}

fetchData(); // 19번 -> 7번 -> 값을 처리할동안 19번은 가만히 10번값을 19번으로 전달, 20번으로 전달 후 출력됨 