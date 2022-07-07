import React, { Component } from 'react'
import { BrowserRouter } from "react-router-dom";
import AppRouter from './router/AppRouter';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <AppRouter />
      </BrowserRouter>
    )
  }
}
