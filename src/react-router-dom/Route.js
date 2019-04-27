import React, { Component } from 'react';
import { render } from 'react-dom';
import { Consumer } from './context';
import pathToRegExp from 'path-to-regexp';

export default class Route extends Component {
    constructor() {
        super();
    }

    render() {
        return (<Consumer>
            {state => {
                //组件中的path和location.pathname进行匹配
                //组件中的path（以'/home'为例）的正则，hash为/home和/home/123是均可以匹配到home
                //hash为/home/123，也可以匹配到path为/home 和 /home/123的组件，此时则需要严格匹配以区分/home 和 /home/123的组件
                let pathname = state.location.pathname;
                let { path, component: Component, exact = false } = this.props;
                let keys = [];
                let reg = pathToRegExp(path, keys, { end: exact });
                keys = keys.map(item => item.name);//['id']
                let result = pathname.match(reg);
                let [url, ...values] = result || [];//[1]
                let props = {
                    location: state.location,
                    history: state.history,
                    match: keys.reduce((obj, current, index) => {
                        obj[current] = values[index];
                        return obj;
                    }, {})
                }
                if (result) {
                    return <Component {...props}></Component>;
                }
                return null;

            }}
        </Consumer>)
    }
}