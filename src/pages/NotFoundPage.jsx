import React, { Component, Fragment } from 'react'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import NotFound from '../components/NotFound/NotFound'

export class NotFoundPage extends Component {
  render() {
    return (
        <Fragment>
            <TopNavigation title='404 Page Not Found'/>
            <PageTop pageTitle = '404 Page Not Found'/>
            <NotFound />
            <Footer />
      </Fragment>
    )
  }
}

export default NotFoundPage