import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HomePage from "../src/Components/Home/HomePage"
import PhotosPage from "../src/Components/Photos/PhotosPage"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import Footer from "../src/Components/MultiplePages/Footer"

ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/home" component={HomePage} />
                <Route exact path="/photos" component={PhotosPage} />
            </Switch>
            <Footer/>
        </div>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
