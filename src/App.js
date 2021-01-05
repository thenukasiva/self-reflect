import React, { Component } from 'react';
import Entries from './Entries';
import Form from './Form';

class App extends Component {
  state = {
    entries: [

    ]
  }

  removeEntry = index => {
    const { entries } = this.state

    this.setState({
      entries: entries.filter ((entry, i) => {
        return i != index
      })
    })
  }

  handleSubmit = entry => {
    this.setState({ entries: [...this.state.entries, entry]})
  }

  render () {
    const { entries } = this.state;
    
    return (
      <div className="App container">
        <h1 style={{paddingBottom:"30px", paddingTop:"10px"}}>My Journal App</h1>
        <Form handleSubmit={this.handleSubmit}/>
        <Entries entryData={entries} removeEntry={this.removeEntry}/>
      </div>
    );
  }

}

export default App;
