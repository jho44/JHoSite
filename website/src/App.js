import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/MultiplePages/Footer";

import HomePage from "./Components/Home/HomePage";
import PhotosPage from "./Components/Photos/PhotosPage";
import MobileDevPage from "./Components/Code/MobileDev/MobileDevPage";
import WebDevPage from "./Components/Code/WebDev/WebDevPage";
import PythonPage from "./Components/Code/Python/PythonPage";
import TestPage from "./Components/TestPage/TestPage";
import FunPage from "./Components/Fun/FunPage";
import UnderDevelopmentPage from "./Components/UnderDevelopmentPage";

import PrivateRoute from "./Components/Auth/PrivateRoute";
import Login from "./Components/Auth/Login";

import { AuthProvider } from "./context/auth";

function App(props) {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/photos" component={PhotosPage} />
            <Route exact path="/code/mobiledev" component={MobileDevPage} />
            <Route exact path="/code/webdev" component={WebDevPage} />
            <Route exact path="/code/pythondata" component={PythonPage} />
            <PrivateRoute exact path="/test" component={TestPage} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/fun" component={FunPage} />
            {/* <Route exact path="/bby1" component={Bby1}/>
                    <Route exact path="/bby1/bby2" component={Bby2}/> */}
          </Switch>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
