import React from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";

import TheoryReact from "./Theory/React/React"; 
import TheorySpring from "./Theory/Spring/Spring";
import TheoryWebApplication from "./Theory/WebApplication/WebApplication";

//현재 위치 routes! 
import ProjectsReact from "./Projects/React/React";
import ProjectsReactBoardProject from "./Projects/React/BoardProject";
import ProjectsSpring from "./Projects/Spring/Spring";
import ProjectsWebApplication from "./Projects/WebApplication/WebApplication";

import Diary from "./Diary/Diary";



export default () => (
    <HashRouter>
        <Switch>
            <Route exact path="/Theory/React" component = { TheoryReact }/>
            <Route exact path="/Theory/Spring" component = { TheorySpring }/>
            <Route exact path="/Theory/WebApplication" component = {TheoryWebApplication}/>
            <Route exact path="/Projects/React" component = {ProjectsReact}/>
            <Route exact path="/Projects/Spring" component = {ProjectsSpring}/>
            <Route exact path="/Projects/WebApplication" component = {ProjectsWebApplication}/>
            <Route exact path="/Projects/React/BoardProject" component={ProjectsReactBoardProject}/>
            <Route exact path="/Diary" component = {Diary}/>
        </Switch>
    </HashRouter>
);
