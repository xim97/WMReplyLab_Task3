import React, { Component } from "react";
import getDateForInput from "../utils/getDateForInput";

export default class LeftPart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            startTime: "",
            finishTime: "",
            isEveryYear: false
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onInputDate = this.onInputDate.bind(this);
        this.onAddClick = this.onAddClick.bind(this);
    }

    onAddClick() {
        if (this.state.startTime > this.state.finishTime) {
            window.alert("Время начала события позже времени конца, исправьте");
        } else {
            this.setState({
                title: "",
                startTime: "",
                finishTime: "",
                isEveryYear: false
            });
            this.props.handleAddEvent(this.state)
        }
    }

    onInputChange(event) {
        const value = event.target.type !== "checkbox" ? event.target.value : event.target.checked;
        this.setState({
            [event.target.name]: value
        });
    }

    onInputDate(event) {
        const value = event.target.value;
        this.props.handleInputDate(value);
        this.setState({
            date: this.props.date
        });
    }

    render() {
        return (
            <form className="left-part">
                <label>Событие</label>
                <input
                    onChange={this.onInputChange}
                    required={true}
                    name="title"
                    type="text"
                    value={this.state.title}
                    placeholder="Введите событие"
                />
                <label>Дата</label>
                <input
                    required={true}
                    onChange={this.onInputDate}
                    value={getDateForInput(this.props.date)}
                    name="date"
                    type="date"
                />
                <label>Время начала</label>
                <input
                    required={true}
                    onChange={this.onInputChange}
                    name="startTime"
                    type="time"
                    value={this.state.startTime}
                />
                <label>Время конца</label>
                <input
                    required={true}
                    onChange={this.onInputChange}
                    name="finishTime"
                    type="time"
                    value={this.state.finishTime}
                />
                <label>Событие ежегодное?</label>
                <input
                    checked={this.state.isEveryYear}
                    onChange={this.onInputChange}
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