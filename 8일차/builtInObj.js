const email = "test!naver.com";

console.log(email.indexOf("@"));

let today = new Date();
console.log(today);

let 월 = today.getMonth();
console.log(월+1);

let 일 = today.getDate();
console.log(일);

let 요일 = today.getDay();
console.log(요일);
console.log("--------------");

let old = new Date('2025-3-30');

let 월1 = old.getMonth();
console.log(월1+1);

let 일1= old.getDate();
console.log(일1);

let 요일1 = old.getDay();
console.log(요일1);