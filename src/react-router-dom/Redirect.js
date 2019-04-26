import React, { Component } from 'react';
import { render } from 'react-dom';
import { Consumer } from './context';

export default class Redirect extends Component {
    constructor() {
        super();
    }

    render() {
        return (<Consumer>
            {state => {
                console.log(state);
            }}
        </Consumer>)
    }
}