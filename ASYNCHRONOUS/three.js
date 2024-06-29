let cal = ( a,b, OP )=>{

    if(OP==='sum'){
        return a+b
    }
if(OP==='multi'){
    return a*b
}
    


}
let r1 = cal(10,20,"sum")
console.log(r1);
let r2 = cal(10,20,"multi")
console.log(r2);