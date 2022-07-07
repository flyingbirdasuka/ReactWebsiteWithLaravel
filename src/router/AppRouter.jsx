import React, { Component, Fragment } from 'react'
import { Routes, Route } from "react-router-dom";
import AboutPage from '../pages/AboutPage';
import AllPortfolioPage from '../pages/AllPortfolioPage';
import AllServicePage from '../pages/AllServicePage';
import ContactPage from '../pages/ContactPage';
import PortfolioDetailsPage from '../pages/PortfolioDetailsPage';
import Home from '../pages/Home';
import NotFoundPage from '../pages/NotFoundPage';
import PortfolioPage from '../pages/PortfolioPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import RefundPage from '../pages/RefundPage';
import TermsPage from '../pages/TermsPage';


class AppRouter extends Component {
  
  render() {
    return (
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/service" element={<AllServicePage />} />
          <Route exact path="/allportfolio" element={<AllPortfolioPage />} />
          <Route exact path="/portfolio" element={<PortfolioPage/>} />
          <Route exact path="/about" element={<AboutPage/>} />
          <Route exact path="/contact" element={<ContactPage/>} />
          <Route exact path="/refund" element={<RefundPage/>} />
          <Route exact path="/terms" element={<TermsPage />} />
          <Route exact path="/privacy" element={<PrivacyPage />} />
          <Route exact path="/projectdetails/:projectID/:projectName" element={<ProjectDetailPage />} />
          <Route exact path="/portfoliodetails/:portfolioID/:portfolioName" element={<PortfolioDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Fragment>
    )
  }
}

export default AppRouter