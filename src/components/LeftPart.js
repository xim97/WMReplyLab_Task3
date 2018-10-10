import React, { Component } from "react";
import getDateForInput from "../utils/getDateForInput";
import { connect } from "react-redux";
import findIntersections from "../utils/findIntersections";

class LeftPart extends Component {
    constructor(props) {
        super(props);

        this.onAddClick = this.onAddClick.bind(this);
    }

    onAddClick() {
        if (this.props.startTime > this.props.finishTime) {
            window.alert("Время начала события позже времени конца, исправьте");
        } else {
            let startTimeHour, startTimeMinute, finishTimeHour, finishTimeMinute;
            [startTimeHour, startTimeMinute] = this.props.startTime.split(":");
            [finishTimeHour, finishTimeMinute] = this.props.finishTime.split(":");
            let addingEvent = {
                title: this.props.title,
                isEveryYear: this.props.isEveryYear,
                startTime: new Date((new Date(this.props.date)).setHours(startTimeHour, startTimeMinute)),
                finishTime: new Date((new Date(this.props.date)).setHours(finishTimeHour, finishTimeMinute))
            }
            let confirmationAdding = true;
            if (findIntersections(this.props.events, addingEvent)) {
                confirmationAdding = window.confirm("Новое событие пересекается с уже созданными, хотите его добавить?");
            }
            if (confirmationAdding) {
                this.props.addNewEvent(addingEvent);
            }
        }
    }

    render() {
        return (
            <form className="left-part">
                <label>Событие</label>
                <input
                    onChange={(event) => this.props.inputTitle(event.target.value)}
                    required={true}
                    name="title"
                    type="text"
                    value={this.props.title}
                    placeholder="Введите событие"
                />
                <label>Дата</label>
                <input
                    required={true}
                    onChange={(event) => this.props.inputDate(event.target.value)}
                    value={getDateForInput(this.props.date)}
                    name="date"
                    type="date"
                />
                <label>Время начала</label>
                <input
                    required={true}
                    onChange={(event) => this.props.inputStartTime(event.target.value)}
                    name="startTime"
                    type="time"
                    value={this.props.startTime}
                />
                <label>Время конца</label>
                <input
                    required={true}
                    onChange={(event) => this.props.inputFinishTime(event.target.value)}
                    name="finishTime"
                    type="time"
                    value={this.props.finishTime}
                />
                <label>Событие ежегодное?</label>
                <input
                    checked={this.props.isEveryYear}
                    onChange={(event) => this.props.inputEveryYear(event.target.checked)}
                    name="isEveryYear"
                    type="checkbox"
                />
                <input
                    onClick={this.onAddClick}
                    type="button"
                    value="Добавить"
                />
            </form>
        );
    }
}

export default connect(
    store => ({
        title: store.title,
        date: store.date,
        startTime: store.startTime,
        finishTime: store.finishTime,
        isEveryYear: store.isEveryYear,
        events: store.events
    }),
    dispatch => ({
        inputTitle: (title) => dispatch({ type: "SET_INPUT_TITLE", title: title }),
        inputDate: (date) => dispatch({ type: "SET_INPUT_DATE", date: date }),
        inputStartTime: (time) => dispatch({ type: "SET_INPUT_START_TIME", time: time }),
        inputFinishTime: (time) => dispatch({ type: "SET_INPUT_FINISH_TIME", time: time }),
        inputEveryYear: (isEveryYear) => dispatch({ type: "SET_INPUT_EVERYYEAR", isEveryYear: isEveryYear }),
        addNewEvent: (event) => dispatch({ type: "ADD_EVENT", event: event })
    })
)(LeftPart);