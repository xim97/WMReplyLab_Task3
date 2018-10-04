import React, { Component } from "react";
import CalendarColumn from "./CalendarColumn";

export default class CalendarGrid extends Component {
    render() {
        return (
            <div className="calendar-grid">
                {
                    this.props.dataForGrid.map((element, index) => {
                        return (
                            <CalendarColumn
                                handleClickOnCell={this.props.handleClickOnCell}
                                events={this.props.events}
                                key={index}
                                showingDate={this.props.showingDate}
                                viewType={this.props.viewType}
                                element={element}
                                index={index}
                            />
                        );
                    })
                }
            </div>
        );
    }
}