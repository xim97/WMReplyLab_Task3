import React, { Component } from "react";
import HeaderRightPart from "./HeaderRightPart";
import Calendar from "./Calendar";
import getDataForGrid from "../utils/getDataForGrid";
import getFirstMonday from "../utils/getFirstMonday";
import getLastSunday from "../utils/getLastSunday";

export default class RightPart extends Component {
    render() {
        let dataForGrid, numberOfWeeks;
        const firstMonday = getFirstMonday(this.props.showingDate),
            lastSunday = getLastSunday(this.props.showingDate);
        dataForGrid = getDataForGrid(firstMonday, lastSunday);       
        return (
            <div className="right-part">
                <HeaderRightPart
                    handleChangeViewTypeInput={this.props.handleChangeViewTypeInput}
                    viewType={this.props.viewType}
                    setToday={this.props.setToday}
                    setNextMonth={this.props.setNextMonth}
                    setPrevMonth={this.props.setPrevMonth}
                    showingDate={this.props.showingDate}
                />                
                <Calendar
                        viewType={this.props.viewType}
                        numberOfWeeks={numberOfWeeks}
                        dataForGrid={dataForGrid}
                        showingDate={this.props.showingDate}
                    />

            </div>
        );
    }
}