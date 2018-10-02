import React, { Component } from "react";

export default class TodayComponent extends Component {

    constructor(props) {
        super(props);

        this.handleClickTodayButton = this.handleClickTodayButton.bind(this);
    }

    handleClickTodayButton() {
        this.props.setToday();
    }

    render() {
        return (
            <button
                className="today-button"
                onClick={this.handleClickTodayButton}
            >
                Сегодня
            </button>
        );

    }
}