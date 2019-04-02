import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';

import Navbar from './components/Navbar'
import Materials from './components/Materials'
import StudentInfo from './components/StudentInfo'
import Receptive from './components/Receptive'
import Expressive from './components/Expressive'
import Articulation from './components/Articulation'
import Social from './components/Social'
import RedFlags from './components/RedFlags'
import ResultsChart from './components/ResultsChart'
import Report from './components/Report'


const url = 'http://localhost:3002/'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      testItemData: []
    }
  }
  async componentDidMount() {
    const response = await fetch(url)
    const json = await response.json()

    this.setState({
      testItemData: json
    })

  }

  responseAccuracyButton(e) {
    console.log('button clicked', e.target.value)
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
            <Route path="/articulation" exact component={Articulation} />
            <Route path="/social" exact render={() => <Social testItemData={this.state.testItemData} />} />
            <Route path="/redflags" exact component={RedFlags} />
            <Route path="/resultschart" exact component={ResultsChart} />
            <Route path="/report" exact component={Report} />
          </div>

        </BrowserRouter>
      </div>

    );
  }
}

export default App;
