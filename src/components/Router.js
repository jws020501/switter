import React, { useState } from "react";
import { HashRouter as Router , Route , Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/home";

export default () => {
    const[islogin, setislogin] = useState(false) 
    return() => 
        <Router>
            <Switch>
                 {islogin ? <><Route exact path="/"> <Home/> </Route> </> : <Route exact path="/"> <Auth/> </Route>}
            </Switch>
        </Router>
}