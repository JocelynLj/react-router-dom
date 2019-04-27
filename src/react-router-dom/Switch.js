import React, { Component } from 'react';
import { render } from 'react-dom';
import { Consumer } from './context';
import pathToExpReg from 'path-to-regexp';

export default class Switch extends Component {
    constructor() {
        super();
    }

    render() {
        return (<Consumer>
            {state => {
                let pathname = state.location.pathname;
                let children = this.props.children;

                for (var i = 0; i < children.length; i++) {
                    let child = children[i];
                    let path = child.props.path || '';
                    let exact = child.props.exact || false;
                    let result = pathToExpReg(path, [], { end: exact }).test(pathname);

                    if (result) {
                        return child;
                    }
                }
                return null;
            }}
        </Consumer>)
    }
}