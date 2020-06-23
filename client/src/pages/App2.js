import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homeuser from "./home/home";

import EducationVideos from "./educationVideo/educationVideos";
import Watcheducationvideos from "./educationVideo/watcheducationvideos";
import EducationGames from "./educationGames/educationGames";

import Movie from "./movie/movie";
import Game from "./games/games"

import Readingbooks from "./readingbooks/readingbooks";
import Readbook from "./readingbooks/readBook";
import Listenbooks from "./Listenbook/Listenbook";




import App from "../App.js"


import Navbar from "../components/navbar";

class App2 extends Component {
 
    render() { 
        return ( 
     <>
        <Navbar />
        <Switch>  
          <Route  exact path='/home' component={Homeuser} />
          <Route exact path="/home/edVideo" component={EducationVideos} />
          <Route exact path="/home/edVideo/:title" component={Watcheducationvideos} />
          <Route  exact path="/home/edGames" component={EducationGames} />
          <Route exact path="/home/movie" component={Movie} />
          <Route exact path="/home/movie/:title" component={Watcheducationvideos} />
          <Route exact path="/home/game" component={Game} />

          <Route exact path="/home/readingbooks" component={Readingbooks} />
          <Route exact path="/home/readingbooks/:title" component={Readbook}/>
          

          <Route exact path="/home/listen" component={Listenbooks} />
          <Route exact path="/home/listen/:title" component={Readbook} />

        </Switch>
    
</>
         );
    }
}
 
export default App2;