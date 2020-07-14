interface date_of_birth {
    month: number
    day: number
    year: number
}

interface Pay {
 
    wage: number
    rate: string

}

export class Hourly_Employee {
    
    fn: string
    ln: string
    dob: date_of_birth
    pay: Pay

    constructor(fn: string, ln: string, dob: date_of_birth, pay: Pay) {
        this.fn = fn
        this.ln = ln
        this.dob = dob
        this.pay = pay
    }

}

export class Salaried_Employee {
    
    fn: string
    ln: string
    dob: date_of_birth
    pay: Pay

    constructor(fn: string, ln: string, dob: date_of_birth, pay: Pay) {
    
        this.fn = fn
        this.ln = ln
        this.dob = dob
        this.pay = pay
    
    }

}