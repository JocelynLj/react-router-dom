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
                // let pathname = state.location.pathname;
                // let children = this.props.children;
                // for (let i = 0; i < children.length; i++) {
                //     let path = children[i].path || '';
                //     let exact = children[i].exact || false;
                //     let Component = children[i].component || '';
                //     let result = pathname.match(path, [], { end: exact });
                //     if (result) {
                //         return <Component></Component>
                //     }
                // }
                return this.props.children;
            }}
        </Consumer>)
    }
}