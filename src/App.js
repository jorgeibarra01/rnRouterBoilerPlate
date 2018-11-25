import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import {Routes} from './routes'

export default class App extends Component{
  render() {
    return (
      <NativeRouter>
        <Routes /> 
      </NativeRouter>
    );
  }
}
