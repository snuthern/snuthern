export class SimpleMathClass {

    pi : string = "3.14159265359"
    e: string = "2.7182818284590452353602875"
    newE: string = ""
    newPi: string = ""
    emptyArray: number[] = []
    

    // Pi to the nth Number
    piToN(a: number){
        a = a + 2
        for(let i = 0; i < a; i++){
            this.newPi += this.pi[i]
        } 
        
        return `Pi = ${this.newPi}`
    }
     
    // E to the nth number
    eToN(a: number) {
        a = a + 2
        for(let i = 0; i < a; i++){
            this.newE += this.e[i]
        }

        return `E = ${this.newE}`
    }

    
    fib(n: number): number {

        if (n <= 1) {
            return 1
        }
        
        return this.fib(n - 1) + this.fib(n - 2)

    }
    
    costToCover(Length: number, Width: number) {
        
        // Tile price is $1.22

        let tilePrice: number = 1.22
        let area: number = Length * Width
        let totalCost: number = area * tilePrice

        return `Tile cost: $${tilePrice}\n$${totalCost} to cover floor\n${Length}:L x ${Width}:W`

    }
}