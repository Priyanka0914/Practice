const arr = [0,0,3,4,5];

const obja = [{name:"hari"},{name:"priyanka"}]
// const o = {name:"hari"}
const newarr = arr.findIndex((e)=>e%2==0);
const hasElem = obja.some((e)=>e.name==="hari");

// console.log(hasElem);

const numArr = new Array(20).fill(0);
console.log(numArr);