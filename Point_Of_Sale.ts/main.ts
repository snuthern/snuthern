import { Hourly_Employee , Salaried_Employee } from "./user/Employee.ts"
import { Add_User } from "./user/User_Actions.ts"
import { readJsonSync } from "https://deno.land/std/fs/mod.ts";



// ============================
// Create a new Hourly Employee
// ============================

const john_smith = new Hourly_Employee(
    
    // Full Name
    "John", 
    "Smith",
    
    // Date of birth
    { month: 1 , day: 12 , year: 1998 } , 
    
    // Hourly Wage
    { wage: 22 , rate: "weekly" } 

)

const jay_smith = new Hourly_Employee(
    
    // Full Name
    "Jay", 
    "Smith",
    
    // Date of birth
    { month: 1 , day: 12 , year: 1998 } , 
    
    // Hourly Wage
    { wage: 22 , rate: "weekly" } 

)

const gary_smith = new Salaried_Employee(
    
    // Full Name
    "Gary", 
    "Smith",
    
    // Date of birth
    { month: 4 , day: 1 , year: 1998 } , 
    
    // Salary Wage
    { wage: 2200 , rate: "monthly" } 

)

const Santa = new Salaried_Employee(
    
    // Full Name
    "Santa", 
    "Smith",
    
    // Date of birth
    { month: 4 , day: 1 , year: 1998 } , 
    
    // Salary Wage
    { wage: 2200 , rate: "monthly" } 

)

Add_User(john_smith)

Add_User(gary_smith)

Add_User(jay_smith)

Add_User(Santa)