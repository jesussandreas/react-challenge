import React, { Component } from 'react';
import './App.css'

// Import data
import data from './api.json';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js';

import Header from './components/Header/Header';
import Table from './components/Table/Table';
import Results from './components/Results/Results';
import Graphs from './components/Graphs/Graphs';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Table data={data} />
        <Results/>
        <Graphs/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
