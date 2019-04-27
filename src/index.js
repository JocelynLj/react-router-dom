import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Link, Redirect, Switch } from './react-router-dom';
import Home from './Home';
import Profile from './Profile';
import User from './User';
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (<Router>
            <div className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-heading">
                        <div className="navbar-brand">Jocelyn's Excercise</div>
                    </div>
                    <div className="nav navbar-nav">
                        <li><Link to="/home">首页</Link></li>
                        <li><Link to="/profile">个人中心</Link></li>
                        <li><Link to="/user">用户</Link></li>
                    </div>
                </div>
            </div>
            {/* exact参数表示是否完全匹配 配置以使得hash中的/home/123匹配不到/home,只能匹配到/home/123 */}
            <div className="container">
                <Switch>
                    <Route path="/home" exact={true} component={Home}></Route>
                    {/* <Route path="/home/123" component={Home}></Route> */}
                    <Route path="/profile" component={Profile}></Route>
                    <Route path="/user" component={User}></Route>
                    <Redirect to="/home"></Redirect>
                </Switch>
            </div>
        </Router>)
    }
}

render(<App></App>, window.root);