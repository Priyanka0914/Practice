// callback func-> to make a asynch func into a synch func we use callback function
// it might take longer time for an api to run 

const fun1 = (name,callback)=>{
    callback();
    console.log(name);
}
const api = ()=>{console.log("hello");}
fun1("hi",api);

