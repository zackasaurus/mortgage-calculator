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
                <Line
                    height={null} width={null}
                    data={this.props.data}
                    options={{
                        responsive: true,
                        maintainAspectRatio: true,
                        aspectRatio: 1,
                        elements: {
                            point: {
                                radius: 0
                            }
                        },
                        animation: {
                            duration: 400,
                            easing: 'easeInOutCirc'
                        },
                        scales: {
                            xAxes: [{
                                categoryPercentage: 0.5,
                                barPercentage: 1.0,
                                
                                stacked: true
                            }],
                            yAxes: [{
                                stacked: true,
                                ticks: {
                                    beginAtZero: false,
                                    callback: function (value, index, values) {
                                        if (parseInt(value) > 0) {
                                            if (parseInt(value) >= 1000) {
                                                return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                            }
                                            else {
                                                return '$' + value;
                                            }
                                        }
                                        else{
                                            if (parseInt(value) <= -1000) {
                                                let v = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                                v = v.replace(/-/,"-$")
                                                return v
                                            }
                                            else {
                                                let v = value.toString()
                                                v = v.replace(/-/,"-$")
                                                return v
                                            }
                                        }
                                    }
                                }
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
                    }
                    }
                />
            </div>
        )
    }
}
