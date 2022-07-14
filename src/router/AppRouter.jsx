import React, { Component, Fragment } from 'react'
import { Routes, Route } from "react-router-dom";
import AboutPage from '../pages/AboutPage';
import AllPortfolioPage from '../pages/AllPortfolioPage';
import ContactPage from '../pages/ContactPage';
import PortfolioDetailsPage from '../pages/PortfolioDetailsPage';
import Home from '../pages/Home';
import NotFoundPage from '../pages/NotFoundPage';


class AppRouter extends Component {
  
  render() {
    return (
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/allportfolio" element={<AllPortfolioPage />} />
          <Route exact path="/about" element={<AboutPage/>} />
          <Route exact path="/contact" element={<ContactPage/>} />
          <Route exact path="/portfoliodetails/:portfolioID/:name" element={<PortfolioDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Fragment>
    )
  }
}

export default AppRouter