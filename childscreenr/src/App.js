import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

import Navbar from './components/Navbar'
import Login from './components/Login'
import Materials from './components/Materials'
import StudentInfo from './components/StudentInfo'
import Receptive from './components/Receptive'
import Expressive from './components/Expressive'
import Articulation from './components/Articulation'
import Social from './components/Social'
import RedFlags from './components/RedFlags'

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
    this.setState({ testItemData: json })
    console.log(this.state.testItemData[0].test_item)
  }

  render() {
    // console.log(this.state.testItemData[0])
    return (
      <div className="App row">
        <div className="column">

          <BrowserRouter>
            <Navbar />
            <div>

              <Route path="/" exact component={Login} />
              <Route path="/materials" exact component={Materials} />
              <Route path="/student" exact component={StudentInfo} />
              <Route path="/receptive" exact component={Receptive} />
              <Route path="/expressive" exact component={Expressive} />
              <Route path="/articulation" exact component={Articulation} />
              <Route path="/social" exact component={Social} />
              <Route path="/redflags" exact component={RedFlags} />
            </div>
          </BrowserRouter>
        </div>
      </div >
    );
  }
}

export default App;
