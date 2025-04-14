//즉시 실행 함수 
(
    function init(){
        console.log("initialized!");
    }
)();

(
    function (){
        console.log("initialized!");
    }
)();
// 처음껀 init이라는 이름을 썼고, 밑에껀 init이라는 이름을 생략함(익명함수)
// 둘 다 가능 


//즉시 실행함수의 변형 version
const func = (function(){
    function a(){
        console.log("aaaaaa");
    }
    function b(){
        console.log("bbbbbb");
    }
    return{ /*실행할때는 return을 넣어주면 됨*/
        funcA: a, /*a는 함수이름 */
        funcB: b,
    }
})();

func.funcA();
func.funcB();


const result = (function(a,b){
    function init(){
        return doSum(a, b);
    }
    function doSum(a, b){
        return a + b;
    }
    return init();
})(10, 20);

console.log(result);
