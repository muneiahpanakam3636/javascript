let Account1=require("./Account1")

class CA1 extends Account1{
    acc_Id;
    acc_Bal=0;
    min_bal=500;
    constructor(id,name,email,amount,addr){
        super(name,email,addr)
        this.acc_Id=id;
        this.acc_Bal= amount

    }
    get_bal(){
        return this.acc_Bal-this.min_bal
    }
}
let ca2 = new CA1(101,"rahul","rahul@gmail.com",5000,"delhi")
console.log(ca2);