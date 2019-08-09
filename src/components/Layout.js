import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import routes from "../routes";

class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "WHITEBOARD CROSSFIT RIVNE",
        };
    }

    render() {
        return (
            <div>
                <Header title={ this.state.title } />
                <Switch>
                    { routes.map( route => <Route key={ route.path } { ...route } /> ) }
                </Switch>
            </div>
        );
    }
}

export default Layout;
