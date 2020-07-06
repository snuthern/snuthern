import { Cashier } from "./books/Employee.ts"

const People = JSON.parse(Deno.readTextFileSync("./dbs/employees.json"));

const John = People.hourlies["hr-001"]
const James = People.salaried["sal-001"]

const Employees = { John , James }