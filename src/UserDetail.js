import React, { Component } from 'react';
import { render } from 'react-dom';
export default class UserDetail extends Component {
    constructor() {
        super();
    }

    render() {
        return (<div>
            UserDetail {this.props.match.id}
        </div>);
    }
}