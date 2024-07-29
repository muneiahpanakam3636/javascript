class Account {
    acc_Id;
    acc_bal;
    min_bal;
    acc_Name;

    constructor(id,name,amount){
        this.acc_Id=id;
        this.acc_bal = amount;
        this.acc_Name = name;

    }
}
module.exports = Account;