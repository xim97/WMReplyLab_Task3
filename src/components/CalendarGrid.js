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
                                key={index}
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