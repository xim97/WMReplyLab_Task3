import React, { Component } from "react";
import MonthPicker from "./MonthPicker";
import TodayComponent from "./TodayComponent";
import ViewPicker from "./ViewPicker";

export default class HeaderRightPart extends Component {
    render() {
        return (
            <div className="header">
                <ViewPicker />
                <TodayComponent />
                <MonthPicker />
            </div>
        );
    }
}