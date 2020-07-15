import { readJsonSync, writeJsonSync } from "https://deno.land/std/fs/mod.ts";

export const Add_User = (user: any) => {
    let data: any = readJsonSync("./user/employee_list.json")
    let hourly_employee: any = data.employees.hourly
    let salaried_employee: any = data.employees.salaried
    let temp_array: string[] = []
    
    for (var name in hourly_employee) {
        temp_array.push(name)
    }

    for (var name in salaried_employee) {
        temp_array.push(name)
    }


    let username = temp_array.filter(elem =>  elem === user.fn+"_"+user.ln)
    if (username.length > 0) {
 
        console.log(`User "${username[0]}" already in db`)
 
    } else if(user.pay.rate === "weekly") {
        
        data.employees.hourly[user.fn+"_"+user.ln] = user
        writeJsonSync( "./user/employee_list.json", data , {spaces: 2})
        console.log(`Added "${user.fn +"_"+ user.ln}"`)

        
    } else if(user.pay.rate === "monthly") {
        
        data.employees.salaried[user.fn+"_"+user.ln] = user
        writeJsonSync( "./user/employee_list.json", data , {spaces: 2})
        console.log(`Added "${user.fn +"_"+ user.ln}"`)
        
    }

}