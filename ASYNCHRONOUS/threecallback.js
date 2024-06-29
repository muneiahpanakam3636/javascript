// call back :  while involking function passing function as a argument

let sum = (a,b)=>{
    return a+b
}
let multi = (a,b)=>{
    return a*b
}
let cal = (a,b,callback)=>{
    return callback(a,b)

}

let r1 = cal (10,20,sum)
console.log(r1);

let r2 = cal(10,20,multi)
console.log(r2);