import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class ResultsChart extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }




    render() {
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
            return mean

        }

        const standardDeviation = (arr) => {
            let diffArr = []
            for (let i = 0; i < arr.length; i++) {
                diffArr.push(Math.pow(arr[i] - (findMean(arr)), 2))
            }
            return Math.sqrt(findMean(diffArr))

        }

        const getClassIntervals = (arr) => {
            const intervalWidth = standardDeviation(arr) / 3
            return intervalWidth
        }

        const getScoreFrequency = (arr) => {
            return arr.reduce(function (acc, curr) {
                if (typeof acc[curr] == 'undefined') {
                    acc[curr] = 1;
                } else {
                    acc[curr] += 1;
                }

                return acc;
            }, {});
        }


        const data = {
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
            datasets: [{
                label: 'Group A',
                data: [12, 19, 3, 5],
                backgroundColor: 'rgba(255, 99, 132, 1)',
            }]
        }

        return (
            <div className="App" >
                <header className="App-header">
                    <h1>Student Results Chart</h1>
                    <p>Number of Test Takers: {numberOfTestTakers(this.props.studentScores)}</p>
                    <p>Score Range: {findRange(this.props.studentScores)} points</p>
                    <p>Standard Deviation: {standardDeviation(this.props.studentScores)}</p>
                    <p>Interval Width: {getClassIntervals(this.props.studentScores)}</p>
                </header>
                <article className="canvas-container">
                    <Bar data={data} />
                </article>
            </div >
        );
    }
}

export default ResultsChart;




// import React, { Component } from 'react'
// import { Bar } from 'react-chartjs-2'

// class ResultsChart extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {

//             chartData: {
//                 // labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
//                 datasets: [{
//                     label: 'Scores',
//                     data: this.props.studentScores,
//                     backgroundColor: [
//                         'rgba(255, 99, 132, 0.2)',
//                         'rgba(54, 162, 235, 0.2)',
//                         'rgba(255, 206, 86, 0.2)',
//                         'rgba(75, 192, 192, 0.2)',
//                         'rgba(153, 102, 255, 0.2)',
//                         'rgba(255, 159, 64, 0.2)'
//                     ],
//                     borderColor: [
//                         'rgba(255, 99, 132, 1)',
//                         'rgba(54, 162, 235, 1)',
//                         'rgba(255, 206, 86, 1)',
//                         'rgba(75, 192, 192, 1)',
//                         'rgba(153, 102, 255, 1)',
//                         'rgba(255, 159, 64, 1)'
//                     ],
//                     borderWidth: 1
//                 }]
//             }
//         }
//     }
//     render() {
//         return (
//             <div className="chart">
//                 <Bar
//                     data={this.state.chartData}
//                     options={{
//                         maintainAspectRatio: false
//                     }}
//                 />
//             </div>
//         )
//     }
// }

// export default ResultsChart