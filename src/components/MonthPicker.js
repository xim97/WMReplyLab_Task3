import React, { Component } from "react";
import getMonthName from "../utils/getMonthName";

export default class MonthPicker extends Component {

    constructor(props) {
        super(props);

        this.handleClickNextMonth = this.handleClickNextMonth.bind(this);
        this.handleClickPrevMonth = this.handleClickPrevMonth.bind(this);
    }

    handleClickNextMonth() {
        this.props.setNextMonth();
    }

    handleClickPrevMonth() {
        this.props.setPrevMonth();
    }

    render() {
        const showingDate = new Date(this.props.showingDate);
        return (
            <div className="month-picker">
                <button onClick={this.handleClickPrevMonth}>Пред. месяц</button>
                <p>
                    {
                        getMonthName(showingDate.getMonth()) + ", "
                    }
                    {
                        showingDate.getFullYear()
                    }
                </p>
                <button onClick={this.handleClickNextMonth}>След. месяц</button>
            </div>
        );
    }
}