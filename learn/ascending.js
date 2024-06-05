const input =require ('prompt-sync')();



let num1 = (input("enter the number"))
let num2 = (input("enter the number"))
let num3 = (input("enter the number"))
if(num1<num2 && num2<num3){
    console.log("it is in ascending order")
}
else{
console.log("not in ascending order")
}