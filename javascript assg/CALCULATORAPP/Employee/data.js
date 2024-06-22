let employees = [
     {'id':101,name:'rahul',sal:45000},
     {'id':102,name:'sonia',sal:55000},
     {'id':103,name:'priyanka',sal:65000},
     {'id':104,name:'muni',sal:75000},
     {'id':105,name:'siva',sal:85000}
       


]
function displayData(){
    // alert("GM")

    let rows = " "
    for(   employee  of employees  ){
        rows = rows + ` <tr>
                    <td>${employee.id}</td>
                    <td> ${employee.name}</td>
                    <td> ${user.email}</td>
                    <td> ${user.gender}</td>
                 

        
        </tr>`

    }
    
   document.getElementsByTagName('tbody')[0].innerHTML = rows
}

