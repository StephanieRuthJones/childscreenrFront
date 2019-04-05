import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';

import Navbar from './components/Navbar'
import Materials from './components/screeningprep/Materials'
import StudentInfo from './components/screeningprep/StudentInfo'
import Receptive from './components/languageareas/Receptive'
import Expressive from './components/languageareas/Expressive'
import Social from './components/languageareas/Social'
import RedFlags from './components/RedFlags'
import ResultsChart from './components/results/ResultsChart'
import Report from './components/results/Report'


const url = 'http://localhost:3002/'
const testAccuracyData = []
let totalScore = 0
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      testItemData: [],
      studentScores: []
    }
  }
  async componentDidMount() {
    const response1 = await fetch(url)
    const testItems = await response1.json()
    const response2 = await fetch(url + 'students')
    const studentData = await response2.json()

    const scores = studentData.map(data => data.totalScore)

    this.setState({
      testItemData: testItems,
      studentScores: scores

    })
    console.log('student scores', this.state.studentScores)
  }



  responseAccuracyButton(e) {
    console.log('button clicked', e.target.id)
    testAccuracyData.push({ student_id: 26, testItem_id: Number(e.target.id), accuracy: Number(e.target.value) })
    console.log('test acc data', testAccuracyData)
    //need to figure out how to find student ID
    //post above info
    totalScore += Number(e.target.value)
    console.log('total score', totalScore)
  }

  render() {
    console.log(this.state.testItemData)
    return (
      <div className="ui container">

        <BrowserRouter>

          <div>
            <Navbar />
            <Route path="/" exact component={Materials} />
            <Route path="/studentinfo" exact component={StudentInfo} />
            <Route path="/receptive" exact render={() => <Receptive testItemData={this.state.testItemData} responseAccuracyButton={this.responseAccuracyButton} />} />
            <Route path="/expressive" exact render={() => <Expressive testItemData={this.state.testItemData} />} />
            <Route path="/social" exact render={() => <Social testItemData={this.state.testItemData} />} />
            <Route path="/redflags" exact component={RedFlags} />
            {/* <Route path="/resultschart" exact component={ResultsChart} /> */}
            <Route path="/resultschart" exact render={() => <ResultsChart studentScores={this.state.studentScores} />} />
            <Route path="/report" exact component={Report} />
          </div>

        </BrowserRouter>
      </div>

    );
  }
}

export default App;
