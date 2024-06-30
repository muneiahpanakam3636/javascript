let employees =[{id:101,name:"teja",salary:3000},
             {id:102,name:"pooja",salary:4000},
             {id:103,name:"saroja",salary:2000}
]

let createEmployee= (emp,callback)=>{
    setTimeout(()=>{
        employees.push(emp);
        callback();
    },5000)
}
let displayData = ()=>{
    setTimeout(()=>{
        let rows =" "
        for( emp  of employees){
            rows = rows+`<tr>
                 <td>${emp.id}</td>
                 <td>${emp.name}</td>
                 <td>${emp.salary}</td>
             </tr>`
        }
        document.getElementById('abc').innerHTML=rows
    },3000)
}

createEmployee({id:104,name:"sarja",salary:1000},displayData)
