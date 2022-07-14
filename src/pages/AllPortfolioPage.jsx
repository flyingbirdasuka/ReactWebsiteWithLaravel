import React, { Component, Fragment } from 'react'
import AllPortfolio from '../components/AllPortfolio/AllPortfolio'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class AllPortfolioPage extends Component {
  componentDidMount(){
    window.scroll(0,0);
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title='All My Portfolio'/>
        <PageTop pageTitle='All My Portfolio'/>
        <AllPortfolio />
        <Footer />
      </Fragment>
    )
  }
}

export default AllPortfolioPage