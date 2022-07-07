import React, { Component, Fragment } from 'react'
import PortfolioDetails from '../components/PortfolioDetails/CourseDetails'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import { useParams } from "react-router-dom";

class CourseDetailsPage extends Component {
  
  componentDidMount(){
    window.scroll(0,0);
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title='Course Details'/>
        <PageTop pageTitle={this.props.param.portfolioName}/>
        <PortfolioDetails id={this.props.params.portfolioID}/>
        <Footer />
      </Fragment>
    )
  }
}

export default (props) => (
  <CourseDetailsPage
      {...props}
      params={useParams()}
  />
);