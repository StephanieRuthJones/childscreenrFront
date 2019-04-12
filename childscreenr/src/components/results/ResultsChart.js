import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class ResultsChart extends Component {





    render() {
        function scoreFrequency(arr) {
            let scores = [], frequency = [], prev;

            arr.sort();
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] !== prev) {
                    scores.push(arr[i]);
                    frequency.push(1);
                } else {
                    frequency[frequency.length - 1]++;
                }
                prev = arr[i];
            }

            return { scores, frequency };
        }

        const scoresForChart = scoreFrequency(this.props.studentScores).scores

        const scoreFrequencyForChart = scoreFrequency(this.props.studentScores).frequency



        const data = {
            labels: scoresForChart,
            datasets: [{
                label: 'Scores',
                data: scoreFrequencyForChart,
                backgroundColor: 'rgba(255, 99, 132, 1)',
            }]
        }
        const options = {
            scales: {
                xAxes: [{
                    display: false,
                    barPercentage: .85,
                }, {
                    display: true,
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }


        const numberOfTestTakers = (arr) => {
            return arr.length
        }

        const findRange = (arr) => {
            let sortedArr = arr.sort()
            console.log('sortedArr', sortedArr)
            let min = sortedArr[0]
            console.log('min', min)
            let max = sortedArr[sortedArr.length - 1]
            console.log('max', max)
            let range = max - min
            return range
        }

        const getNumberOfIntervals = (num) => {
            let squareRoot = Math.sqrt(numberOfTestTakers)
            let intervals = Math.round(squareRoot)
            return intervals
        }

        const findMean = (arr) => {
            let sum = 0
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i]
            }
            console.log('sum', sum)
            let mean = sum / arr.length
            return mean.toFixed(2)

        }

        const standardDeviation = (arr) => {
            let diffArr = []
            for (let i = 0; i < arr.length; i++) {
                diffArr.push(Math.pow(arr[i] - (findMean(arr)), 2))
            }
            return Math.sqrt(findMean(diffArr)).toFixed(2)

        }

        const getClassIntervals = (arr) => {
            const intervalWidth = standardDeviation(arr) / 3
            return intervalWidth.toFixed(2)
        }

        const totalScore = this.props.totalScore

        const findZScore = (score, arr) => {
            let zFunctionTop = score - findMean(arr)
            let zFunctionBottom = standardDeviation(arr)
            let zScore = zFunctionTop / zFunctionBottom

            return zScore.toFixed(2)
        }


        const interpretZScore = (z) => {
            if (.09 < z < .99) {
                return 'Average'
            } else if (z > .99) {
                return 'Above Average'
            } else if (z < .09) {
                return 'Below Average'
            } else {
                return 'No description available'
            }
        }




        return (
            <div className="App" >
                <header className="App-header">
                    <h1>Student Results Chart</h1>
                    <p>Accuracy: 33 out of 44 test items</p>
                    <p>Score Description: {interpretZScore(findZScore(33, this.props.studentScores))}</p>
                    <p>Z-score: -0.87 </p>
                    {/* <p>Z-score: -0.87 {findZScore(this.props.totalScore, this.props.studentScores)}</p> */}
                    <p>Number of Test Takers: {numberOfTestTakers(this.props.studentScores)}</p>
                    <p>Mean: {findMean(this.props.studentScores)}</p>
                    <p>Standard Deviation: {standardDeviation(this.props.studentScores)}</p>
                    {/* <p>Score Range: {findRange(this.props.studentScores)} points</p> */}

                    {/* <p>Interval Width: {getClassIntervals(this.props.studentScores)}</p> */}
                </header>
                <article className="canvas-container">
                    <Bar data={data} options={options} />
                </article>
            </div >
        );
    }
}

export default ResultsChart;


