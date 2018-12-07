import React, { Component } from 'react';

// Import data
import data from './api.json';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js';

import Header from './components/Header/Header';
import Table from './components/Table/Table';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Table data={data} />
      </React.Fragment>
    );
  }
}

export default App;
