import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import getEventsInShowingMonth from "../utils/getEventsInShowingMonth";

class CalendarCell extends Component {
    constructor(props) {
        super(props);

        this.clickOnCell = this.clickOnCell.bind(this);
    }

    clickOnCell() {
        if (this.props.showingDate.getMonth() === this.props.item.getMonth()) {
            this.props.setInputDate(this.props.item);
        }
    }

    render() {
        const cellClass = `${this.props.viewType}-cell`;
        const cellClassNotThisMonth = `${this.props.viewType}-cell not-this-month-cell`;
        const todayClass = Date.parse(this.props.item) === (new Date(Date.now())).setHours(0, 0, 0, 0) ? "today" : "";
        const isThisMonth = this.props.showingDate.getMonth() === this.props.item.getMonth();
        const todayEvents = this.props.events.filter(event =>
            event.startTime.getDate() === this.props.item.getDate() &&
            event.startTime.getFullYear() <= this.props.item.getFullYear()
        )
        return (
            <div
                onClick={this.clickOnCell}
                key={Date.parse(this.props.item)}
                className=
                {(isThisMonth ? cellClass : cellClassNotThisMonth) + " " + todayClass}
            >
                {
                    this.props.viewType === "short" && <Fragment>
                        <p>{this.props.item.getDate()}</p>
                        {
                            (isThisMonth && todayEvents.length > 0) && <i className="far fa-bell"></i>
                        }
                    </Fragment>
                }
                {
                    this.props.viewType === "full" && <Fragment>
                        <p className="number-of-day">{this.props.item.getDate()}</p>
                        <ul className="list-of-events">
                            {
                                isThisMonth && <Fragment>
                                    {
                                        todayEvents.sort((event1, event2) => event1.startTime >= event2.startTime)
                                            .map(event => {
                                                return (
                                                    <li key={event.startTime}>{event.title}</li>
                                                )
                                            })
                                    }
                                </Fragment>
                            }

                        </ul>
                    </Fragment>
                }

            </div>
        );
    }
}

export default connect(
    store => ({
        events: getEventsInShowingMonth(store.events, store.showingDate),
        viewType: store.viewType,
        showingDate: store.showingDate,
    }),
    dispatch => ({
        setInputDate: (date) => dispatch({ type: "SET_INPUT_DATE", date: date })
    })
)(CalendarCell);