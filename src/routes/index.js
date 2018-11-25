import React, {Component} from 'react';
import {Route, Switch} from 'react-router-native'; 
import Home from './screens/Home/Home'; 

export const Routes = () =>  {
    return (
        <Switch> 
            <Route exact path="/" component={Home} />  
        </Switch>
    ); 
}