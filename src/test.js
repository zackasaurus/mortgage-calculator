// let inputList = {
//     home_price: { name: 'Home Price:', value: 300000 },
//     down_payment: { name: 'Down Payment:', value: 60000 },
//     loan_amount: { name: 'Loan Amount:' },
//     interest_rate: { name: 'Interest Rate:', value: 4.25, suffix: '%' },
//     loan_term: { name: 'Loan Term:', value: 30 },
//     start_date: { name: 'Start Date:' },
//     property_tax: { name: 'Property Tax:' }
// }
let inputList = [
    { id: 1, name: 'Home Price:', value: 300000 },
    { id : 2, name: 'Down Payment:', value: 60000 },
    { id : 3, name: 'Loan Amount:' },
    { id : 4, name: 'Interest Rate:', value: 4.25, suffix: '%' },
    { id : 5, name: 'Loan Term:', value: 30 },
    { id : 6, name: 'Start Date:' },
    { id : 7, name: 'Property Tax:' }
]


// console.log(inputList[3 - 1].suffix === undefined)

inputList[2].value = inputList[0].value - inputList[1].value;

console.log(inputList)



