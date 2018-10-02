import React, { Component } from "react";
import MonthPicker from "./MonthPicker";
import TodayComponent from "./TodayComponent";

export default class RightPart extends Component {
    render() {
        return (
            <div className="right-part">
                <div className="header">
                    <TodayComponent
                        setToday={this.props.setToday}
                    />
                    <MonthPicker
                        setNextMonth={this.props.setNextMonth}
                        setPrevMonth={this.props.setPrevMonth}
                        showingDate={this.props.showingDate}
                    />
                </div>

            </div>
        );
    }
}