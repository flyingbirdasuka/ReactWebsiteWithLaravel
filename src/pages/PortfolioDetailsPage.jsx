import React, { Component, Fragment } from 'react'
import PortfolioDetails from '../components/PortfolioDetails/PortfolioDetails'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import { useParams } from "react-router-dom";

class PortfolioDetailsPage extends Component {
  
  componentDidMount(){
    window.scroll(0,0);
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title='Portfolio Details'/>
        {/* <PageTop pageTitle={this.props.param.portfolioName}/> */}
        <PageTop pageTitle={this.props.params.name} />
        <PortfolioDetails id={this.props.params.portfolioID}/>
        <Footer />
      </Fragment>
    )
  }
}

export default (props) => (
  <PortfolioDetailsPage
      {...props}
      params={useParams()}
  />
);