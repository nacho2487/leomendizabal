import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from './detail';
import Result from './result';
import Welcome from './welcome';
import NotFound from './notFound';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/items" component={Result} />
                <Route exact path="/items/:id" component={Detail} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );    
}

export default Routes;
