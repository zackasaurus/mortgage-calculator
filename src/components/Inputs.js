import React, { Component } from 'react'
import Calculate from './Calculate'
// import "../index.css"
// import Chart from './Chart'
let inputList = [
    { id: 0, name: 'Home Sale Price', value: 300000, step: 10000, prefix: '$', readOnly: false },
    { id: 1, name: 'Down Payment', type: 'number', value: 3.5, step: 1, suffix: '%' },
    { id: 2, name: 'Loan Amount', prefix: '$', readOnly: true},
    { id: 3, name: 'Interest Rate', value: 4.25, step: 0.25, suffix: '% APR', range: true },
    { id: 4, name: 'Loan Term', value: 30, step: 1, suffix: 'years' },
    { id: 5, name: 'Start Date' },
    { id: 6, name: 'Property Tax', value: 0.7, step: .1, suffix: '% per year' },
    { id: 7, name: 'Home Insurance', value: 1500, step: 100, prefix: '$', suffix: 'per year' },
    { id: 8, name: 'HOA', value: 200, step: 50, prefix: '$', suffix: 'per month' },
    { id: 9, name: 'PMI', value: 0.8, step: .1, suffix: '%' },
    { id: 10, name: 'Inflation Adjustor', value: 3, suffix: '% per year' }
]
inputList[2].value = inputList[0].value -
    (inputList[0].value * inputList[1].value / 100);
// const output = 1000



export default class Inputs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs: inputList,
            item: null
        }
    }

    handleClick = (e) => {


        this.setState({
            item: <h1>{inputList[0].name}</h1>
        })
    }
    handleInputChange = (e) => {

        inputList[e.target.id].value = e.target.value
        // inputList[2].value = inputList[0].value - inputList[1].value;
        inputList[2].value = inputList[0].value -
            (inputList[0].value * inputList[1].value / 100);

        // inputList[1].value < 20 ? input
        this.setState({
            inputs: inputList
        })
    }
    render() {
        let inputs = this.state.inputs.map(input => {
            // Read Only
            let inputGroup = "input-group"
            if(input.readOnly){
                inputGroup = "input-group readOnly"
            }
            return (
                
                <div className="col s12 m6 l4 xl3 input-container" key={input.id}>
                    <label htmlFor="">{input.name}</label>
                    <div className={inputGroup}>
                    
                        {input.prefix === undefined ? null : <p className="prefix" htmlFor="">{input.prefix}</p>}
                        {input.suffix === undefined ? null : <p className="suffix" htmlFor="">{input.suffix}</p>}

                        <input  onChange={this.handleInputChange} value={input.value} id={input.id} type="number" step={input.step}></input>

                    </div>
                    <div className="input-animation"></div>

                </div>
            )
        })
        // const inputs
        // for ()


        return (
            <div>
                <div className="container-outputs z-depth-1">
                    <div className="__outputs">
                        {/* <h5>Outputs:</h5> */}
                        <div>
                            <Calculate data={inputList} />
                        </div>
                    </div>
                </div>
                <div className="container-inputs input__list z-depth-1">
                    {/* INPUTS */}

                    <div className="section-b">
                        <div className="inputs">
                            {inputs}
                        </div>
                        <div className="btn-group">
                            <button onClick={this.handleClick}>Submit</button>
                            <button onClick={this.handleClick}>Save</button>
                            <button onClick={this.handleClick}>Compare</button>
                        </div>

                    </div>




                </div>
            </div>
        )
    }
}
