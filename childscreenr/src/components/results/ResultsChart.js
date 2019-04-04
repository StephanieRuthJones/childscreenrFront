import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'

class ResultsChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chartData: {
                labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                datasets: [{
                    label: 'Scores',
                    data: this.props.studentScores
                }],

            }
        }
    }
    render() {
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        )
    }
}

export default ResultsChart