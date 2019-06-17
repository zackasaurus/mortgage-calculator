import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';
import Chart from './components/Chart'
import "./index.css"

export default class Calculate extends Component {

    render() {
        // Chart Data
        let chartData = {
            labels: [],
            datasets: [{
                label: "Interest",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [],
            },
            {
                label: "Principal",
                backgroundColor: 'rgb(100, 99, 132)',
                borderColor: 'rgb(100, 99, 132)',
                data: [],
            },
            {
                label: "Taxes",
                backgroundColor: 'rgb(0, 99, 132)',
                borderColor: 'rgb(0, 99, 132)',
                data: [],
            }
            ]
        }
        // Home Value
        let hv = this.props.data[0].value

        // p - the amount borrowed, known as the loan's principal.
        let p = this.props.data[2].value
        // Payments per year
        let c = 12
        // r - the monthly interest rate, expressed as a decimal, not a percentage
        let r = this.props.data[3].value / 100 / c
        // n - the number of monthly payments, called the loan's term
        let n = this.props.data[4].value * c
        // Standardized Mortgage Formula
        let payment = p * ((r * (1 + r) ** n) / (((1 + r) ** n) - 1))

        // Monthly Tax Payments
        let tax = (this.props.data[6].value / 100 / c) * hv
        let assessmentDuration = 1
        let adjustor = 1
        let adjustedInflation = 1
        let adjustedTax = tax

        let balance = p
        let i = 0
        let mortgageTable = []
        let totalInterest = 0
        while (i < n) {
            let interest = balance * r

            totalInterest += interest
            let principal = payment - interest

            balance = balance - principal
            chartData.labels.push(i)
            chartData.datasets[0].data.push(interest)
            chartData.datasets[1].data.push(principal)
            if (i % c === 0) {

                adjustedInflation *= 1.03
                // adjustedTax *= 1.03
                if (i % (c * adjustor) === 0) {
                    // adjustedTax *= adjustedInflation
                    adjustedTax *= adjustedInflation
                    adjustedInflation = 1

                }

            }
            chartData.datasets[2].data.push(adjustedTax)
            i++
            mortgageTable.push([i, interest, principal, balance])


        }

        // console.log(mortgageTable)
        return (

            <div>
                {/* Chart */}

                <button>Interest + Principal</button>
                <button>Balance</button>
                <button>Donut Chart</button>
                {/* Output Numbers */}
                <div className="">
                    <div className="row">
                        <div className="col m9">
                            <Chart data={chartData} />
                        </div>

                        <div className="col m3">
                            <p>Monthly Base Payment: </p>
                            <p>$ {parseFloat(payment).toFixed(2)} </p>
                            <p>Monthly Property Tax Payment:</p>
                            <p>$ {parseFloat(tax).toFixed(2)} </p>
                            <p>Total Paid $ {parseFloat(totalInterest + p).toFixed(2)}</p>
                        </div>
                        <div className="col s12">
                            
                        </div>
                        <div className="col s12">
                            <p>Total Paid $ {parseFloat(totalInterest + p).toFixed(2)}</p>
                        </div>
                        <div className="col s12">
                            <p>Principal Paid $ {parseFloat(p).toFixed(2)}</p>
                        </div>
                        <div className="col s12">
                            <p>Interest Paid: $ {parseFloat(totalInterest).toFixed(2)}</p>
                        </div>
                    </div>
                </div>






                {/* <p>Interest Paid: $ {parseFloat(totalInterest).toFixed(2)}</p> */}
            </div>
        )
    }
}
