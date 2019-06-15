import React, { Component } from 'react'
import Calculate from './Calculate'
import './App.css';
let inputList = [
    { id: 0, name: 'Home Price:', value: 300000, prefix: '$' },
    { id: 1, name: 'Down Payment:', value: 60000, prefix: '$' },
    { id: 2, name: 'Loan Amount:', prefix: '$' },
    { id: 3, name: 'Interest Rate:', value: 4.25, suffix: '%' },
    { id: 4, name: 'Loan Term:', value: 30, suffix: 'years' },
    { id: 5, name: 'Start Date:' },
    { id: 6, name: 'Property Tax:', value: 1, suffix: '%'},
    { id: 7, name: 'Inflation Adjustor', value: 2, suffix: '%' }
]
inputList[2].value = inputList[0].value - inputList[1].value;
const output = 1000



export default class Inputs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs: inputList,
            item: null
        }
    }



    handleClick = (e) => {
        console.log('f')

        this.setState({
            item: <h1>{inputList[0].name}</h1>
        })
    }
    handleInputChange = (e) => {

        inputList[e.target.id].value = e.target.value
        inputList[2].value = inputList[0].value - inputList[1].value;
        this.setState({
            inputs: inputList
        })
    }
    render() {
        // console.log(this.state)
        let inputs = this.state.inputs.map(input => {
            return (
                <div key={input.id}>
                    <label htmlFor="">{input.name}</label>
                    <input onChange={this.handleInputChange} value={input.value} id={input.id}></input>
                    {input.suffix === undefined ? console.log(true) : <input value={input.suffix}></input>}
                    {/* {input.suffix} */}
                </div>
            )
        })
        // const inputs
        // for ()


        return (
            <div className="input__list">
                <h3>Outputs:</h3>
                <div>
                    <Calculate data={inputList} />
                    {/* {this.state.item} */}
                </div>
                <h3>Inputs:</h3>
                {inputs}
                <button onClick={this.handleClick}>Submit</button>
                <button onClick={this.handleClick}>Save</button>
                <button onClick={this.handleClick}>Compare</button>
            </div>
        )
    }
}
