import React, { Component } from 'react'
import Calculate from './Calculate'
import "./index.css"
import Chart from './components/Chart'
let inputList = [
    { id: 0, name: 'Home Price:', value: 300000, prefix: '$' },
    { id: 1, name: 'Down Payment:', value: 60000, prefix: '$' },
    { id: 2, name: 'Loan Amount:', prefix: '$' },
    { id: 3, name: 'Interest Rate:', value: 4.25, suffix: '%', range: true },
    { id: 4, name: 'Loan Term:', value: 30, suffix: 'years' },
    { id: 5, name: 'Start Date:' },
    { id: 6, name: 'Property Tax:', value: 1, suffix: '%' },
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
                <div className="col l2 s3" key={input.id}>
                    <label htmlFor="">{input.name}</label>
                    <input onChange={this.handleInputChange} value={input.value} id={input.id}></input>
                    {/* {input.suffix === undefined ? null : input.suffix} */}
                    {/* {input.range === undefined ? console.log(true) : <input id={input.id} onChange={this.handleInputChange} type="range" min="-10" max="20" value={input.value}></input>} */}
                    {/* {input.suffix} */}
                </div>
            )
        })
        // const inputs
        // for ()


        return (
            <div>
                <div className="container output__list z-depth-1">
                    <h5>Outputs:</h5>
                    <div>
                        <Calculate data={inputList} />
                        {/* {this.state.item} */}
                    </div>
                </div>
                <div className="container input__list z-depth-1">
                    {/* INPUTS */}
                    <div className=" ">
                        <div className="row">
                            <h5>Inputs:</h5>
                            {inputs}
                        </div>
                    </div>

                    <button onClick={this.handleClick}>Submit</button>
                    <button onClick={this.handleClick}>Save</button>
                    <button onClick={this.handleClick}>Compare</button>
                </div>
            </div>
        )
    }
}
