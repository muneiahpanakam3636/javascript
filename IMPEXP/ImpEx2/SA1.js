let Account1=require("./Account1")

class SA1 extends Account1{
    acc_Id;
    acc_Bal=0;
    min_bal=500;
    constructor(id,name,email,amount,addr){
        super(name,email,addr)
        this.acc_Id=id;
        this.acc_Bal=amount;
    }
    get_bal(){
        return this.acc_Bal-this.min_bal
    }
}
let sa2=new SA1(102,"sonia","sonia@gamil",6000,"banglore")
console.log(sa2);