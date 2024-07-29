let Account = require("./Account")

class CA extends Account{

    acc_Id;
    acc_bal=0;
    acc_Name;
    min_bal = 500
    constructor(id,name,email,amount,Amount){
        super(email)
        this.acc_Id = id;
        this.acc_Name = name;
        this.min_bal=amount;
        this.acc_bal = Amount;
    }

        get_bal(){
            return this.acc_bal-this.min_bal
        }

    
}
let ca1 = new CA(101,5000,"raju",'raju@gmail')
console.log(ca1);