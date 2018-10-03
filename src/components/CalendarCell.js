import React, { Component, Fragment } from "react";

export default class CalendarCell extends Component {
    render() {
        const cellClass = `${this.props.viewType}-cell`;
        const cellClassNotThisMonth = `${this.props.viewType}-cell not-this-month-cell`;
        const todayClass = Date.parse(this.props.item) === (new Date(Date.now())).setHours(0, 0, 0, 0) ? "today" : "";
        const isThisMonth = this.props.showingDate.getMonth() === this.props.item.getMonth();
        return (
            <div
                key={Date.parse(this.props.item)}
                className=
                {(isThisMonth ? cellClass : cellClassNotThisMonth) + " " + todayClass}
            >
                {
                    this.props.viewType === "short" && <Fragment>
                        <p>{this.props.item.getDate()}</p>
                        {
                            isThisMonth && <i className="far fa-bell"></i>
                        }
                    </Fragment>
                }
                {
                    (this.props.viewType === "full") && <Fragment>
                        <p className="number-of-day">{this.props.item.getDate()}</p>
                        <ul className="list-of-events">
                            {
                                isThisMonth && <Fragment>
                                    <li>sadf asd fasdf asdf asdf asdf s </li>
                                    <li>sadf</li>
                                    <li>sadf</li>
                                </Fragment>
                            }

                        </ul>
                    </Fragment>
                }

            </div>
        );
    }
}