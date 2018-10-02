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

    this.setToday = this.setToday.bind(this);

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

  setToday() {
    this.setState({
      showingDate: new Date(Date.now())
    })
  }

  render() {
    return (
      <div className="App">
        <LeftPart />
        <RightPart
          setToday={this.setToday}
          setNextMonth={this.setNextMonth}
          setPrevMonth={this.setPrevMonth}
          showingDate={this.state.showingDate}
        />
      </div>
    );
  }
}

export default App;
