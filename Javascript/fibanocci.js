// const newarr = new Array(5).fill(0);
// console.log(newarr);

// // 0 1 1 2 3
// let frst = 0,second = 1;
// console.log(frst);
// console.log(second);

// newarr.reduce((acc)=>{
//     acc = frst+acc;
//     frst = acc;
//     console.log(acc);

//     return acc;
// },second)

//   conodensole.log(arr1);

//   const fibanocci=()=>{
//     for (i=0;i<=;i++);

// }

// let a = 0;
// let b = 1;
// let c;

// console.log(a);
// console.log(b);

// for (i=0;i<3;i++){
//   c = a+b;
//   console.log(c)
//   a=b;
//   b=c;
// }

// let a = 0;
// let b = 1;
// let c;

// console.log(a);
// console.log(b);

//  newarr.reduce((c)=>{
//     for(i=0;i<3;i++)
//         return c=a+b;
//     console.log(c);
//     a=b;
//     b=c;

//  ),0};

//  let arr = [0,0,0,0,0];
//  const b = arr.reduce=(()=>{
//     if (index === 0)
//         console.log(0);
//     else if (index === 1)
//         console.log(1);
//     else nextFib = acc[index-1]+ acc[index-2];
//         console.log(nextFib);

//         return arr;
//  },0);

//  console.log(b);

//  fibanocci series using reduce method

let a = 0;
let b = 1;
let acc;

console.log(a);
console.log(b);

let arr = new Array(3).fill(0);
const result = arr.reduce((acc) => {
  console.log(acc);
  a = b;
  b = acc;
  return a + b;
}, a + b);

//  10 staircases with combination of 1 and
