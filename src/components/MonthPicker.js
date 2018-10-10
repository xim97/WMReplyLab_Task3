import React, { Component } from "react";
import getMonthName from "../utils/getMonthName";
import { connect } from "react-redux";

class MonthPicker extends Component {
    render() {
        return (
            <div className="month-picker">
                <button onClick={() => this.props.prevMonth()}>Пред. месяц</button>
                <p>
                    {
                        getMonthName(this.props.showingDate.getMonth()) + ", " +
                        this.props.showingDate.getFullYear()
                    }
                </p>
                <button onClick={() => this.props.nextMonth()}>След. месяц</button>
            </div>
        );
    }
}

export default connect(
    store => ({
        showingDate: store.showingDate
    }),
    dispatch => ({
        nextMonth: () => dispatch({ type: "SET_SHOWING_DATE_NEXT_MONTH" }),
        prevMonth: () => dispatch({ type: "SET_SHOWING_DATE_PREV_MONTH" })
    }),

)(MonthPicker);