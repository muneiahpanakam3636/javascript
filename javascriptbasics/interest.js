function cal_interest(p,r){

    let totalamount = p + p/100 *r;
    

    return totalamount;
}

let totalamount = cal_interest(20000,4)
console.log(totalamount)
