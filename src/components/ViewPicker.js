import React, { Component, Fragment } from "react";

export default class ViewPicker extends Component {
    render() {
        return (
            <Fragment>
                <label>
                    <input
                        type="radio"
                        name="viewType"
                        value="short"
                        checked={this.props.viewType === "short"}
                        onChange={this.props.handleChangeViewTypeInput}
                    />
                    Краткое
                    </label>
                <label>
                    <input
                        type="radio"
                        name="viewType"
                        value="full"
                        checked={this.props.viewType === "full"}
                        onChange={this.props.handleChangeViewTypeInput}
                    />
                    Полное
                    </label>
            </Fragment>
        );

    }
}