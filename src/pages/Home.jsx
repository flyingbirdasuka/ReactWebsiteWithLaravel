import React, { Component, Fragment } from 'react'
import TopBanner from '../components/TopBanner/TopBanner'
import Services from '../components/Services/Services'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Analysis from '../components/Analysis/Analysis'
import Summary from '../components/Summary/Summary'
import RecentProject from '../components/RecentProject/RecentProject'
import Portfolio from '../components/Portfolio/Portfolio'
import Video from '../components/Video/Video'
import ClientReview from '../components/ClientReview/ClientReview'
import AboutMe from '../components/AboutMe/AboutMe'
import Footer from '../components/Footer/Footer'
import Welcome from '../components/Welcome/Welcome'

export class Home extends Component {
  componentDidMount(){
    window.scroll(0,0);
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title='Home'/>
        <TopBanner />
        <Welcome />
        <Services />
        <Analysis />
        <Summary />
        <RecentProject />
        <Portfolio />
        <Video />
        <ClientReview />
        <AboutMe />
        <Footer />
      </Fragment>
    )
  }
}

export default Home