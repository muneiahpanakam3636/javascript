let sum = (a,b)=>{
    return a+b
}
let multi = (a,b)=>{
    return a*b
}
let calc = (a,b,callback)=>{
    return callback(a,b)
}

let r1 = calc(20,40,sum)
console.log(r1);
let r2 = calc(30,60,multi)
console.log(r2);