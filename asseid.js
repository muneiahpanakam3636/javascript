let eids = [101,102,103,104]


let new_eids = []
for(  eid  of eids){

    new_eids.push(eid+1)

}
console.log(new_eids);



// let eids = [101,102,103,104]


// let new_eids = []
// for(  var i=0;i<=eids.length-1;i++)
//     console.log(eids[i]+1);


// console.log(new_eids);





// let eids = [101,102,103,104]
// let new_eids=[]

// var i=0;
// while(i<=eids.length-1){
//     new_eids.push[i];
//     i++;
// }
// console.log(new_eids);






// let eids = [101,102,103,104]

// let new_eids= eids.map((eids)=>{
//     return  eids
// })
// console.log(new_eids);




//spread operator:   extract array elements & copy into new array.

// let eids = [101,102,103]

// let new_eids= [...eids]

// console.log(new_eids);




// 1. create new object
// 2. merge objects
// 3.extending  object properties

// let a = [10,20,30,40]   
// let b=[30,40,50,60]

// let   c = [...a,...b]
// console.log(c);

// let user ={
//     id:101,
//     Name:"rahul",
//     email:"rahul@gmauil"
// }

// let emp = {
//     email:"rahul@gmail",
//     sal:44000
// }
// let user_emp = {...user,...emp}

// console.log(user_emp);


// to extend obj properties;


// let emp ={
//     id:101,
//     Name:"rahul"

// }

// let new_emp= {...emp,sal:45000,loc:"bang"}
// console.log(new_emp);


// rest operator;

// function add(a,...b){
//     console.log(a,  b);

// }
// add(10,20)
// add(10,20,30)
// add(10,20,30,40)
// add(10,20,30,40,50)

// add(10,20,30,40,50,60)



