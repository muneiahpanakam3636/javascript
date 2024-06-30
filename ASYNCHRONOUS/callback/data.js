let employees= [
    {id:101,name:"raju",salary:45000},
    {id:102,name:"rani",salary:55000},

]

let createEmployee=(emp,callback)=>{
    setTimeout(()=>{
        employees.push(emp);
        callback();

    },4000)
}

let displayData=()=>{
    setTimeout(()=>{
        let rows=" "
        for( emp of employees){
        rows= rows+`<tr>
                     <td>${emp.id}</td>
                      <td>${emp.name}</td>
                       <td>${emp.salary}</td>
                       </tr>`
        }

        document.getElementById('abc').innerHTML = rows

    },2000)

}
createEmployee({id:103,name:"manthri",salary:30000},displayData)

