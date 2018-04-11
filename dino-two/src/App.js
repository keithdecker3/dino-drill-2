import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Profiles from '.components/Profiles'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Footer />
      </div>
    );
  }
}

export default App;
