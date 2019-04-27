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
                //重定向就是匹配不到路径后直接跳转到Redirect中的to路径
                state.history.push(this.props.to);
                return null;
            }}
        </Consumer>)
    }
}