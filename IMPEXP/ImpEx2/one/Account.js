class Account{
    acc_Name;
    acc_Id;
    acc_bal;
    min_bal;
    constructor(name,id,amount,Amount){
        this.acc_Name = name;
        this.acc_Id = id;
        this.min_bal = amount;
        this.acc_bal = Amount

    }

}

module.exports = Account;