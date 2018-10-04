import React, { Component } from 'react';
import './App.css';
import LeftPart from './components/LeftPart';
import RightPart from "./components/RightPart";
import getEventsInShowingMonth from "./utils/getEventsInShowingMonth";
import findIntersections from "./utils/findIntersections";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingDate: new Date(),
      viewType: "full",
      dateInAddForm: new Date(),
      events: [
        {
          title: "title5",
          startTime: new Date((new Date()).setHours(11, 11, 0)),
          finishTime: new Date((new Date()).setHours(11, 12, 0)),
          isEveryYear: false
        },
        {
          title: "title2",
          startTime: new Date((new Date()).setHours(16, 22, 0)),
          finishTime: new Date((new Date()).setHours(17, 0, 0)),
          isEveryYear: false
        },
        {
          title: "title1",
          startTime: new Date((new Date()).setHours(13, 22, 0)),
          finishTime: new Date((new Date()).setHours(14, 0, 0)),
          isEveryYear: false
        }        
      ]
    }

    this.setToday = this.setToday.bind(this);

    this.setNextMonth = this.setNextMonth.bind(this);
    this.setPrevMonth = this.setPrevMonth.bind(this);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddEvent = this.handleAddEvent.bind(this);

    this.handleClickOnCell = this.handleClickOnCell.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.getAttribute("name") !== "isEveryYear" ? event.target.value : event.target.checked;
    this.setState({
      [event.target.name]: value
    });
  }

  handleAddEvent(newEvent) {
    let events = this.state.events;
    let startTimeHour, startTimeMinute, finishTimeHour, finishTimeMinute;
    [startTimeHour, startTimeMinute] = newEvent.startTime.split(":");
    [finishTimeHour, finishTimeMinute] = newEvent.finishTime.split(":");
    let addingEvent = {
      title: newEvent.title,
      isEveryYear: newEvent.isEveryYear,
      startTime: new Date((new Date(this.state.dateInAddForm)).setHours(startTimeHour, startTimeMinute)),
      finishTime: new Date((new Date(this.state.dateInAddForm)).setHours(finishTimeHour, finishTimeMinute))
    }
    let confirmationAdding = true;
    if (findIntersections(events, addingEvent)) {
      confirmationAdding = window.confirm("Новое событие пересекается с уже созданными, хотите его добавить?");
    }
    if (confirmationAdding) {
      events.push(addingEvent);
      this.setState({
        events: events,
        dateInAddForm: new Date()
      });
    }

  }

  handleClickOnCell(item) {
    this.setState({
      dateInAddForm: new Date(item)
    });
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
        <LeftPart
          handleInputDate={this.handleClickOnCell}
          date={this.state.dateInAddForm}
          handleAddEvent={this.handleAddEvent}
        />
        <RightPart
          handleClickOnCell={this.handleClickOnCell}
          events={getEventsInShowingMonth(this.state.events, this.state.showingDate)}
          handleChangeViewTypeInput={this.handleInputChange}
          viewType={this.state.viewType}
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
