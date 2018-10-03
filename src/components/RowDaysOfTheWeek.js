import React, { Component } from "react";

export default class RowDayOfTheWeek extends Component {
    render() {
        return (
            <div className="row">
                {
                    ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вск"].map((element, idx) => {
                        return (
                            <div className="day-of-week-cell" key={idx}>
                                {element}
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}