let goToGoa = (success,failure)=>{
    let acc_bal = 50000
    acc_bal>10000? success("go and enjoy"):failure("go  to prostrack and practice")
}
goToGoa((msg)=>{console.log(msg);},(error)=>{console.log(error);})