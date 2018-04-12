import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Profiles from './components/Profiles'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
  }

  componentDidMount() {
    fetch('./dinosaurs.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Profiles dinos= {this.state.data} />
        <Footer />
      </div>
    );
  }
}

export default App;
