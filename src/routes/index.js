import React from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";

import TheoryReact from "./Theory/React/React"; 
import TheorySpring from "./Theory/Spring/Spring";
import TheoryWebApplication from "./Theory/WebApplication/WebApplication";

import ProjectsReact from "./Projects/React/React";
import ProjectsSpring from "./Projects/Spring/Spring";
import ProjectsWebApplication from "./Projects/WebApplication/WebApplication";

export default () => (
    <HashRouter>
        <Switch>
            <Route exact path="/Theory/React" component = { TheoryReact }/>
            <Route exact path="/Theory/Spring" component = { TheorySpring }/>
            <Route exact path="/Theory/WebApplication" component = {TheoryWebApplication}/>
            <Route exact path="/Projects/React" component = {ProjectsReact}/>
            <Route exact path="/Projects/Spring" component = {ProjectsSpring}/>
            <Route exact path="/Projects/WebApplication" component = {ProjectsWebApplication}/>
        </Switch>
    </HashRouter>
);
