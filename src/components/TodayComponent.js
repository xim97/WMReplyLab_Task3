import React, { Component } from "react";
import { connect } from "react-redux";

class TodayComponent extends Component {
    render() {
        return (
            <button
                className="today-button"
                onClick={() => this.props.today()}
            >
                Сегодня
            </button>
        );

    }
}

export default connect(() => ({}),
    dispatch => ({
        today: () => dispatch({ type: "SET_SHOWING_DATE_TODAY" })
    })
)(TodayComponent);