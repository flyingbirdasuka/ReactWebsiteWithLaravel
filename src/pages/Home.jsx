import React, { Component, Fragment } from 'react'
import TopBanner from '../components/TopBanner/TopBanner'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Analysis from '../components/Analysis/Analysis'
import Portfolio from '../components/Portfolio/Portfolio'
import AboutMe from '../components/AboutMe/AboutMe'
import Footer from '../components/Footer/Footer'

export class Home extends Component {
  componentDidMount(){
    window.scroll(0,0);
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title='Home'/>
        <TopBanner />
        <Portfolio />
        <Analysis />
        <AboutMe />
        <Footer />
      </Fragment>
    )
  }
}

export default Home