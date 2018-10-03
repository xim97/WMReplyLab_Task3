import React, { Component } from "react";
import CalendarGrid from "./CalendarGrid";

export default class Calendar extends Component {
    render() {
        return (
            <div className="calendar">                
                <CalendarGrid
                    viewType={this.props.viewType}
                    showingDate={this.props.showingDate}
                    numberOfWeeks={this.props.numberOfWeeks}
                    dataForGrid={this.props.dataForGrid}
                />
            </div>
        );
    }
}