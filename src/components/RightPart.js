import React, { Component } from "react";
import MonthPicker from "./MonthPicker";

export default class RightPart extends Component {
    render() {
        return (
            <div className="right-part">
                
                <MonthPicker
                    setNextMonth={this.props.setNextMonth}
                    setPrevMonth={this.props.setPrevMonth}
                    showingDate={this.props.showingDate}
                />
            </div>
        );
    }
}