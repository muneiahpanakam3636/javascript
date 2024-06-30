
let employees=[
    {'id':101,name:"Rahul Gandhi",sal:45000},
    {'id':102,name:"Sonia Gandhi",sal:55000},
]

let createEmployee =(emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let flag = true;
            flag?resolve("data installed"):reject("failed")
            employees.push(emp)

        },3000)
    })
}
let displayData = ()=>{
    setTimeout(()=>{
        let rows=""
    for(emp of employees){
        rows = rows+`<tr>
                        <td>${emp.id}</td>
                        <td>${emp.name}</td>
                        <td>${emp.sal}</td>
                 
                        </tr>`
    }

    document.getElementById('abc').innerHTML=rows
    },1000)

}
createEmployee({id:103,name:"priya",sal:75000})
.then((msg)=>{console.log(msg),displayData()})
.catch((error)=>{console.log(error)})

