import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import AppUrl  from '../../RestAPI/AppUrl';

export class ProjectDetails extends Component {
  constructor(props){
    super();
    this.state = {
      myProjectId : props.id,
      img_two : '',
      project_name : '',
      project_description : '',
      project_features : true,
      live_preview : ''
    }
  }
  componentDidMount(){
    RestClient.GetRequest(AppUrl.ProjectDetails + this.state.myProjectId).then(result => 
      this.setState({img_two: result[0]['img_two'], project_name: result[0]['project_name'], project_description: result[0]['project_description'], project_description: result[0]['project_description'], project_features: result[0]['project_features'], live_preview: result[0]['live_preview']}))
  } 
  render() {
    return (
      <Fragment>
        <Container className='mt-5'>
            <Row>
                <Col lg={6} md={6} sm={12}>
                  <div>
                    <img src={this.state.img_two}/>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12} className='mt-5'>
                <div className='projectDetails'>
                    <h1 className='projectDetailsText'>{this.state.project_name}</h1>
                    <p>{this.state.project_description}</p>
                   
                    <p className='cardSubTitle'>{this.state.project_features}</p>
                    <p><a href={this.state.live_preview}>Live Preview</a></p>
                  </div>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default ProjectDetails