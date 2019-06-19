import React, { Component } from 'react'
import Chart from './Chart'
import "../index.css"

export default class Calculate extends Component {
    render() {
        const colors = {
            turquoise: 'rgba(26, 188, 156,1.0)',
            emerald: 'rgba(46, 204, 113,1.0)',
            river: 'rgba(52, 152, 219,1.0)',
            amethyst: 'rgba(155, 89, 182,1.0)',
            asphalt: 'rgba(52, 73, 94,1.0)',
            sunflower: 'rgba(241, 196, 15,1.0)',
            alizarin: 'rgba(231, 76, 60,1.0)'
        }
        // Chart Data
        let chartData = {
            labels: [],
            datasets: [{
                label: "Interest",
                backgroundColor: colors.turquoise,
                borderColor: colors.turquoise,
                data: [],
            },
            {
                label: "Principal",
                backgroundColor: colors.river,
                borderColor: colors.river,
                data: [],
            },
            {
                label: "Property Taxes",
                backgroundColor: colors.alizarin,
                borderColor: colors.alizarin,
                data: [],
            },
            {
                label: "Home Insurance",
                backgroundColor: colors.sunflower,
                borderColor: colors.sunflower,
                data: [],
            },
            {
                label: "HOA",
                backgroundColor: colors.emerald,
                borderColor: colors.emerald,
                data: [],
            },
            {
                label: "PMI",
                backgroundColor: 'rgb(0, 99, 132)',
                borderColor: 'rgb(0, 99, 132)',
                data: [],
            },

            ]

        }
        // Home Value
        let hv = this.props.data[0].value
        // dp - down payment
        let dp = this.props.data[1].value
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
        // Fix 0 -> undefined
        if(r === 0){
            payment = p / n
        }
        // Monthly Tax Payments
        let tax = (this.props.data[6].value / 100 / c) * hv
        let assessmentDuration = 1
        let adjustor = 1
        let adjustedInflation = 1
        let adjustedTax = tax
        // Monthly Homeowners Insurance
        let homeInsurance = this.props.data[7].value / c

        // PMI
        let pmi = p * (this.props.data[9].value / 100 / c)
        // HOA
        let hoa = this.props.data[8].value
        // Maintanence

        // PMI Threshold - 20%
        if(dp >= 20){
            pmi  = 0
        }

        let total = payment + tax + homeInsurance + pmi + hoa
        let balance = p
        let i = 0
        let mortgageTable = []
        let totalInterest = 0
        let totalPMI = 0
        while (i < n) {
            let interest = balance * r

            totalInterest += interest
            let principal = payment - interest

            balance = balance - principal

            if (i % c === 0) {

                adjustedInflation *= 1.03
                // adjustedTax *= 1.03
                if (i % (c * adjustor) === 0) {
                    // adjustedTax *= adjustedInflation
                    adjustedTax *= adjustedInflation
                    adjustedInflation = 1

                }

            }
            i++
            // PUSH DATA TO CHART VARIABLE
            chartData.labels.push(i)
            chartData.datasets[0].data.push(interest)
            chartData.datasets[1].data.push(principal)
            chartData.datasets[2].data.push(adjustedTax)
            chartData.datasets[3].data.push(homeInsurance)
            chartData.datasets[4].data.push(hoa)
            if (balance / hv > 0.8) {
                chartData.datasets[5].data.push(pmi)
                totalPMI += pmi
            }

            // MORTGAGE TABLE
            mortgageTable.push([i, interest, principal, balance])
        }

        // console.log(mortgageTable)
        return (

            <div>

                <div className="">
                    <div className="row">
                        <div className="hide-on-med-and-down col xl6 l8">
                            <Chart data={chartData} />
                        </div>
                        <div className="col xl6 l4 m12 s12">
                            <div className=" col s12 input-container">
                                <label>Total Monthly Payment: </label>
                                <div className="input-group">
                                    <p>$</p>
                                    <input type="number" value={parseFloat(total).toFixed(2)} readOnly></input>
                                </div>
                            </div>
                            <div className="col xl6 l12 m12 s12 input-container">
                                <label>Mortgage Payment: </label>
                                <div className="input-group">
                                    <p>$</p>
                                    <input type="number" value={parseFloat(payment).toFixed(2)} readOnly></input>
                                </div>
                            </div>

                            <div className="col xl6 l12 m12 s12 input-container">
                                <label>Tax Payment: </label>
                                <div className="input-group">
                                    <p>$</p>
                                    <input type="number" value={parseFloat(tax).toFixed(2)} readOnly></input>
                                </div>
                            </div>
                            <div className="col xl6 l12 m12 s12  input-container">
                                <label>Home Insurance Payment: </label>
                                <div className="input-group">
                                    <p>$</p>
                                    <input type="number" value={parseFloat(homeInsurance).toFixed(2)} readOnly></input>
                                </div>
                            </div>
                            <div className="col xl6 l12 m12 s12 input-container">
                                <label>Total PMI Paid: </label>
                                <div className="input-group">
                                    <p>$</p>
                                    <input type="number" value={parseFloat(totalPMI).toFixed(2)} readOnly></input>
                                </div>
                            </div>
                            <div className="col xl6 l12 m12 s12 input-container">
                                <label>Total Interest Paid: </label>
                                <div className="input-group">
                                    <p>$</p>
                                    <input type="number" value={parseFloat(totalInterest).toFixed(2)} readOnly></input>
                                </div>
                            </div>

                            {/* <p>Monthly Property Tax Payment:</p>
                            <p>$ {parseFloat(tax).toFixed(2)} </p>
                            <p>Total Paid $ {parseFloat(totalInterest + p).toFixed(2)}</p>
                            <p>Interest Paid: $ {parseFloat(totalInterest).toFixed(2)}</p>
                            <p>Principal Paid $ {parseFloat(p).toFixed(2)}</p> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
