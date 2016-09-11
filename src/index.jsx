import React, { Component } from 'react';
import { render } from 'react-dom';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';

import About from './common/about.jsx';
import Home from './common/home.jsx';
import Main from './common/main.jsx';

render(
    <Router history={browserHistory}>
        <Route component={Main} path='/'>
            <IndexRoute component={Home}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
