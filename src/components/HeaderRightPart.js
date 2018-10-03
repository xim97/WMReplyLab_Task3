import React, { Component } from "react";
import MonthPicker from "./MonthPicker";
import TodayComponent from "./TodayComponent";
import ViewPicker from "./ViewPicker";

export default class HeaderRightPart extends Component {
    render() {
        return (
            <div className="header">
                <ViewPicker
                    handleChangeViewTypeInput={this.props.handleChangeViewTypeInput}
                    viewType={this.props.viewType}
                />
                <TodayComponent
                    setToday={this.props.setToday}
                />
                <MonthPicker
                    setNextMonth={this.props.setNextMonth}
                    setPrevMonth={this.props.setPrevMonth}
                    showingDate={this.props.showingDate}
                />
            </div>
        );
    }
}