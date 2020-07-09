import React from 'react';
import Home from './common/home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ChatBody from './chat/chatBody'

function MainPage(){
    return(
        <Router>
            <div className="container-fluid">
                <div className="row">
                    <Switch>
                        <Route path="/" exact component={Home}/>
                    </Switch>
                    <ChatBody/>
                </div>
            </div>
        </Router>
    );
}

export default MainPage;