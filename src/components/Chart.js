import React, { Component } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2';


export default class Chart extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         chartData: props
    //     }
    // }
    render() {
        return (
            // console.log(this.state)
            <div className="chart">
                {/* CHART COMPONENT */}
                <Bar
                    data={this.props.data}
                    options={{

                        title: {
                            display: true,
                            text: 'Mortgage Breakdown',


                        },
                        legend: {
                            labels: {
                                defaultFontFamily: 'Roboto'
                            },
                            
                            display:true,
                            position: 'top'
                        }
                    }}
                />
            </div>
        )
    }
}
