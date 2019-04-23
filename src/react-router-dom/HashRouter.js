import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from './context';

export default class HashRouter extends Component {
    constructor() {
        super();
        this.state = {
            value: {
                location: {
                    pathname: window.location.hash.slice(1) || '/',
                }
            }
        }
    }

    componentDidMount() {
        window.location.hash = window.location.hash || '/';
        window.addEventListener('hashchange', () => {
            this.setState({
                value: {
                    location: {
                        ...this.state.location,
                        pathname: window.location.hash.slice(1) || '/',
                    }
                }
            })
        })
    }

    render() {
        return (<Provider value={this.state.value}>
            {this.props.children}
        </Provider>)
    }
}