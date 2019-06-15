import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';
import './App.css';
export default class Calculate extends Component {

    render() {
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
            }
            ]
        }

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
            i++
            mortgageTable.push([i, interest, principal, balance])
            

        }

        // console.log(mortgageTable)
        return (

            <div>
                <div className="chart">
                    {/* CHART */}
                    < Bar data={chartData} />
                </div>
                <p>Monthly Payment: $ {parseFloat(payment).toFixed(2)} </p>
                <p>Total Paid $ {parseFloat(totalInterest + p).toFixed(2)}</p>
                <p>Principal Paid $ {parseFloat(p).toFixed(2)}</p>
                <p>Interest Paid: $ {parseFloat(totalInterest).toFixed(2)}</p>
            </div>
        )
    }
}
