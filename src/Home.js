import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Home extends Component {
    constructor() {
        super();
    }

    render() {
        console.log(this.props);
        return (<div>
            Home
        </div>)
    }
}