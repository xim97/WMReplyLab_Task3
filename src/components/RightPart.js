import React, { Component } from "react";
import HeaderRightPart from "./HeaderRightPart";
import Calendar from "./Calendar";
import getDataForGrid from "../utils/getDataForGrid";
import getFirstMonday from "../utils/getFirstMonday";
import getLastSunday from "../utils/getLastSunday";
import { connect } from "react-redux";

class RightPart extends Component {
    render() {
        let dataForGrid;
        const firstMonday = getFirstMonday(this.props.showingDate),
            lastSunday = getLastSunday(this.props.showingDate);
        dataForGrid = getDataForGrid(firstMonday, lastSunday);
        return (
            <div className="right-part">
                <HeaderRightPart />
                <Calendar
                    dataForGrid={dataForGrid}
                />
            </div>
        );
    }
}

export default connect(store => {
    return {
        showingDate: store.showingDate
    }
})(RightPart);