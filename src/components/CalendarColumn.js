import React, { Component } from "react";
import getDayOfTheWeekName from "../utils/getDayOfTheWeekName";
import CalendarCell from "./CalendarCell";

export default class CalendarColumn extends Component {
    render() {
        return (
            <div key={this.props.index} className="column">
                <div className="short-cell">
                    {
                        getDayOfTheWeekName(this.props.index)
                    }
                </div>
                {

                    this.props.element.map(item => {
                        return (
                            <CalendarCell                               
                                key={Date.parse(item)}
                                item={item}                                
                            />
                        );
                    })
                }
            </div>
        );
    }
}