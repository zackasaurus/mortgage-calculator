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
                    
                    height={null} width={null}
                    data={this.props.data}
                    
                    options={{
                        responsive: true,
                        
                        maintainAspectRatio: true,
                        aspectRatio: 1,
                        scales: {
                            xAxes: [{
                                barPercentage:  1,
                                stacked: true
                            }],
                            yAxes: [{
                                stacked: true
                            }]
                        },

                        title: {
                            display: true,
                            text: 'Mortgage Breakdown',


                        },
                        legend: {
                            labels: {
                                defaultFontFamily: 'Roboto'

                            },

                            display: true,
                            position: 'top'
                        },
                        plugins: {
                            zoom: {
                                pan: {
                                    enabled: true,
                                    mode: 'xy' // is panning about the y axis neccessary for bar charts?
                                },
                                zoom: {
                                    enabled: true,
                                    mode: 'x',
                                    sensitivity: 3
                                }
                            }
                        }
                    }}
                />
            </div>
        )
    }
}
