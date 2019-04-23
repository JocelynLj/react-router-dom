import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from './react-router-dom';
import Home from './Home';
import Profile from './Profile';
import User from './User';
export default class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (<Router>
            {/* exact参数表示是否完全匹配 配置以使得hash中的/home/123匹配不到/home,只能匹配到/home/123 */}
            <Route path="/home" exact={true} component={Home}></Route>
            <Route path="/home/123" component={Home}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/user" component={User}></Route>
        </Router>)
    }
}

render(<App></App>, window.root);