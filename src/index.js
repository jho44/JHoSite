import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import Footer from "../src/Components/MultiplePages/Footer"

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HomePage from "../src/Components/Home/HomePage"
import PhotosPage from "../src/Components/Photos/PhotosPage"
import IOSDevPage from "./Components/Code/IOSDev/IOSDevPage"
import WebDevPage from "./Components/Code/WebDev/WebDevPage"
import PythonPage from "./Components/Code/Python/PythonPage"
import TestPage from "./Components/TestPage/TestPage"
import FunPage from "./Components/Fun/FunPage"

import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";
import history from "./utils/history";

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
    history.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  };

ReactDOM.render(
    
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/home" component={HomePage} />
                    <Route exact path="/photos" component={PhotosPage} />
                    <Route exact path="/code/iosdev" component={IOSDevPage} />
                    <Route exact path="/code/webdev" component={WebDevPage} />
                    <Route exact path="/code/pythondata" component={PythonPage} />
                    <Route exact path="/test" component={TestPage} />
                    <Auth0Provider
                        domain={config.domain}
                        client_id={config.clientId}
                        redirect_uri="https://offtheclockjho.com/fun"
                        onRedirectCallback={onRedirectCallback}
                    >
                        <Route exact path="/fun" component={FunPage}/>
                    </Auth0Provider>
                </Switch>
                <Footer/>
            </div>
        </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
