let numbers = [1,2,3,4,5,6,7,8,9,10]


let odd_numbers = numbers.flatMap((num)=>{
    return num%2 ==!0})

    console.log(odd_numbers);