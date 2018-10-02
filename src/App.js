import React, { Component } from 'react';
import './App.css';
import LeftPart from './components/LeftPart';
import RightPart from "./components/RightPart";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingDate: new Date(Date.now())
    }

    this.setNextMonth = this.setNextMonth.bind(this);
    this.setPrevMonth = this.setPrevMonth.bind(this);
  }

  setNextMonth() {
    const currentDate = this.state.showingDate;
    this.setState({
      showingDate: new Date(currentDate.setMonth(currentDate.getMonth() + 1))
    });
  }

  setPrevMonth() {
    const currentDate = this.state.showingDate;    
    this.setState({
      showingDate: new Date(currentDate.setMonth(currentDate.getMonth() - 1))
    });
  }

  render() {
    return (
      <div className="App">
        <LeftPart />
        <RightPart
          setNextMonth={this.setNextMonth}
          setPrevMonth={this.setPrevMonth}
          showingDate={this.state.showingDate}
        />
      </div>
    );
  }
}

export default App;
