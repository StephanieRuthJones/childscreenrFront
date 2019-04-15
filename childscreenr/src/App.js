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
let totalScored = 0
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      testItemData: [],
      studentScores: [],
      totalScore: 0,
      schoolName: '',
      firstName: '',
      lastName: '',
      sex: '',
      age: '',
      primaryLanguage: '',
      secondaryLanguage: '',
      teacherName: '',
      SLPName: '',
      zScore: 0


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


  responseAccuracyButton = (e) => {

    testAccuracyData.push({ student_id: 26, testItem_id: Number(e.target.id), accuracy: Number(e.target.value) })
    totalScored += Number(e.target.value)
    console.log('total score', totalScored)
    this.setState({
      totalScore: totalScored
    })
  }

  studentInfoForm = (e) => {
    console.log('student form changed')
    console.log('id', e.target.id)
    console.log('value', e.target.value)
    this.setState({
      [e.target.id]: e.target.value
    })

  }


  render() {
    console.log('firstname in state', this.state.firstName)
    return (
      <div className="ui container">

        <BrowserRouter>

          <div>
            <Navbar />
            <Route path="/" exact component={Materials} />

            <Route path="/studentinfo" exact render={() => <StudentInfo
              studentInfoForm={this.studentInfoForm} />} />

            <Route path="/receptive" exact render={() => <Receptive
              testItemData={this.state.testItemData}
              responseAccuracyButton={this.responseAccuracyButton} />} />

            <Route path="/expressive" exact render={() => <Expressive
              testItemData={this.state.testItemData}
              responseAccuracyButton={this.responseAccuracyButton} />}
            />

            <Route path="/social" exact render={() => <Social
              testItemData={this.state.testItemData}
              responseAccuracyButton={this.responseAccuracyButton} />}
            />

            <Route path="/redflags" exact component={RedFlags} />

            <Route path="/resultschart" exact render={() => <ResultsChart
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              studentScores={this.state.studentScores}
              totalScore={this.state.totalScore} />}
            />

            <Route path="/report" exact render={() => <Report
              schoolName={this.state.schoolName}
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              sex={this.state.sex}
              age={this.state.age}
              primaryLanguage={this.state.primaryLanguage}
              secondaryLanguage={this.state.secondaryLanguage}
              teacherName={this.state.teacherName}
              SLPName={this.state.SLPName}
              totalScore={this.state.totalScore}
              zScore={this.state.zScore} />} />

          </div>

        </BrowserRouter>
      </div>

    );
  }
}

export default App;
