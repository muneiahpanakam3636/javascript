let Account = require("./Account")

class CA extends Account{
    acc_Id;
    acc_Name;
    acc_bal;
    min_bal=500;
    constructor(id,name,amount,email){
        super(email)
        this.acc_Id= id
        this.acc_Name=name
        this.acc_bal=amount
    }

    get_bal(){
        return this.acc_bal-this.min_bal
    }
}
let ca1 = new CA (111,"ramesh",5000,'ramesh@gmail')
console.log(ca1);