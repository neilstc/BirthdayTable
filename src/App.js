import React, { Component } from 'react';
import Filter from './components/Filter';
import RecordTable from './components/RecordTable';

class App extends Component {

  constructor() {
    super();
    // this.namecheckRef = React.createRef();
    // this.ageCheckRef = React.createRef();
    this.state = {
      name: false,
      age: false

    }
    this.filterRef = React.createRef();
    this.eventhandler = this.eventhandler.bind(this);
  }
  eventhandler(data) {
    const { nameFilter, ageFilter } = data;
    this.setState({
      name: nameFilter,
      age: ageFilter
    });

  }
  render() {
    return (
      <div className="container-fluid">
        <center><h1>Birthday Records</h1></center>
        <Filter onChange={this.eventhandler} ></Filter>
        <RecordTable nameFilter={this.state.name} ageFilter={this.state.age} ></RecordTable>
      </div>
    );
  }
}

export default App;
