import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import homePage from "./BuildingApp/homePage"
import aboutPage from "./BuildingApp/aboutPage"
import servicePage from "./BuildingApp/servicePage"
import projectsPage from './BuildingApp/projectsPage'
import contactUsPage from './BuildingApp/contactUsPage'
const Navigator = () =>{
    return(
        <Router> 
            <Switch>
                <Route exact path="/" component={homePage} />
                <Route path="/aboutPage" component={aboutPage} />
                <Route path="/servicePage" component={servicePage} />
                <Route path="/projectsPage" component={projectsPage} />
                <Route path="/contactUsPage" component={contactUsPage} />
            </Switch>
        </Router>
    )
}

export default Navigator