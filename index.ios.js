import React, {Component} from "react";
import {AppRegistry, text} from "react-native";

class HelloWorldApp extends Component {
  render(){
    return (<Text>Hello World!</Text>);
  }
}

AppRegistry.registerComponent("HellowWorldApp", ()=> HelloWorldApp);
