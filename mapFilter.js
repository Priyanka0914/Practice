// map example (same ex can be used for filter)

const abc = [1,2,3,4,5];
const newArr = abc.map((e)=>{
    if(e>1) return e;
})


// array functions are map and filter 
// return type of map filter : array 
// map filter does not change orginal array does not Mutate , one paramater
// map return same length filter dont return same length 

// reduce return type depends on user..can return anything
// 
 const sum = abc.reduce((acc,num)=>{
    return acc+num;
 },0);

 console.log(sum);
// call back 
// when in a function a function is given as a paramater -> call back 
// 2 usecases of call back 1 reduce map filter 
//  asynch
// shorthand 



// task-> 3rd parameter in map and filter (e,i,arr ) array
//        using reduce->multiplication starting from 9, initial value 9 (multiply an array)
//        array->multiple by 3 to store in new array using both filter and map


// find index, find,includes, some , .fill