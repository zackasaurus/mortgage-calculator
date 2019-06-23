import React, { Component } from 'react'
import {Doughnut} from 'react-chartjs-2';
export default class DonutChart extends Component {
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
                <Doughnut
                    height={null} width={null}
                    data={this.props.data}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        aspectRatio: 0.8,
                        elements: {
                            point: {
                                radius: 0
                            }
                        },
                        animation: {
                            duration: 400,
                            easing: 'easeInOutCirc'
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
