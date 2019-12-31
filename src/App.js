 
//******************************************
//****** APP.JS - Main App Entry Point *****
//******************************************

import React, { Component } from 'react';
import HomePage from './Components/Home';
import { BrowserRouter,Route } from 'react-router-dom';
import DetailsPage from './Components/Details';

function App(){

    return (
      <BrowserRouter>
      <div className="container">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/detailsPage" component={DetailsPage} />
      </div>
      </BrowserRouter>
    )
}

export default App;