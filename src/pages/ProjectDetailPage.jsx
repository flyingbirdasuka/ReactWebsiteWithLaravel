import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import ProjectDetails from '../components/ProjectDetails/ProjectDetails'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import { useParams } from "react-router-dom";


class ProjectDetailPage extends Component {
  componentDidMount(){
    window.scroll(0,0);

  }
  render() {
    return (
      <Fragment>
        <TopNavigation title='Project Details'/>
        <PageTop pageTitle={this.props.params.projectName}/>
        <ProjectDetails id={this.props.params.projectID}/>
        <Footer />
      </Fragment>
    )
  }
}

export default (props) => (
  <ProjectDetailPage
      {...props}
      params={useParams()}
  />
);