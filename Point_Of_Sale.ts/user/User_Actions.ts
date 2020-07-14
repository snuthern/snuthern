import { readJsonSync, writeJsonSync } from "https://deno.land/std/fs/mod.ts";

export const Add_User_To_db = (user: any) => {
    let data: any = readJsonSync("./user/employee_list.json")

    if(user.pay.rate === "weekly") {
        data.employees.hourly[user.fn+"_"+user.ln] = user
        writeJsonSync( "./user/employee_list.json", data )
    } else if(user.pay.rate === "monthly") {
        data.employees.salaried[user.fn+"_"+user.ln] = user
        writeJsonSync( "./user/employee_list.json", data )
    }
    
    console.log(`${JSON.stringify(user.fn +" "+ user.ln + " added to db")}`)

}