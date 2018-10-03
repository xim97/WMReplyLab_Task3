import React, { Component } from "react";

export default class LeftPart extends Component {
    render() {
        return (
            <form className="left-part">
                <label>Событие<input type="text" placeholder="Введите событие" /></label>
                
            </form>
        );
    }
}