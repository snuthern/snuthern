// Convert Decimal to Binary 

const Decimal_To_Binary = (Decimal_Number: number) => {
    return Decimal_Number.toString(2)
}

// Convert Binary to Decimal

const Binary_To_Decimal = (Binary_Number: number) => {
    return parseInt(Binary_Number.toString(), 2)
}

console.log(Decimal_To_Binary(104))

console.log(Binary_To_Decimal(1101000))