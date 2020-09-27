import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Lobby from "../Lobby/Lobby";
import Game from "../Game/Game";
import css from './style.module.css';

const Main = () => {
    return (
        <Router>
            <Switch>
                <Route path="/lobby" component={Lobby}/>
                <Route path="/game/:id" component={Game}/>
                <Redirect to="/lobby"/>
            </Switch>
        </Router>
    );
};

export default Main;