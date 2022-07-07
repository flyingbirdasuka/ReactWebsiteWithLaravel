import React, { Component, Fragment } from 'react'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import Services from '../components/Services/Services'
import ContactSection from '../components/ContactSection/ContactSection'

class AllServicePage extends Component {
  componentDidMount(){
    window.scroll(0,0);
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title='Our Services'/>
        <PageTop pageTitle='Our Services' />
        <Services />
        <ContactSection />
        <Footer />
      </Fragment>
    )
  }
}

export default AllServicePage