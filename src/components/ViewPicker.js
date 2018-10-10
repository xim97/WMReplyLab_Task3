import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class ViewPicker extends Component {
    constructor(props) {
        super(props);

        this.handleChangeViewTypeInput = this.handleChangeViewTypeInput.bind(this);
    }

    handleChangeViewTypeInput(event) {
        this.props.setViewType(event.target.value);
    }

    render() {
        return (
            <Fragment>
                <label>
                    <input
                        type="radio"
                        name="viewType"
                        value="short"
                        checked={this.props.viewType === "short"}
                        onChange={this.handleChangeViewTypeInput}
                    />
                    Краткое
                    </label>
                <label>
                    <input
                        type="radio"
                        name="viewType"
                        value="full"
                        checked={this.props.viewType === "full"}
                        onChange={this.handleChangeViewTypeInput}
                    />
                    Полное
                    </label>
            </Fragment>
        );

    }
}

export default connect(
    store => ({
        viewType: store.viewType
    }),
    dispatch => ({
        setViewType: (viewType) => dispatch({ type: "SET_VIEW_TYPE", viewType: viewType })
    })
)(ViewPicker);