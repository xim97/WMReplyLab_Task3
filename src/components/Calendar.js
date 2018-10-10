import React, { Component } from "react";
import CalendarGrid from "./CalendarGrid";

export default class Calendar extends Component {
    render() {
        return (
            <div className="calendar">
                <CalendarGrid
                    dataForGrid={this.props.dataForGrid}
                />
            </div>
        );
    }
}