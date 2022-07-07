import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import face from '../../asset/image/asuka.jpeg';  
import RestClient from '../../RestAPI/RestClient';
import AppUrl  from '../../RestAPI/AppUrl';

export default class AboutMe extends Component {
  constructor(){
    super();
    this.state = {
      myData : []
    }
  }
  componentDidMount(){
    RestClient.GetRequest(AppUrl.Information).then(result => 
      this.setState({myData: result}))
  }    
  render() {
    return (
      <Fragment>
        <Container className='text-center'>
            <h1 className='serviceMainTitle'>ABOUT ME</h1>
            <div className='bottom'></div>
            <Row>
                <Col lg={6} md={6} sm={12} className="d-flex justify-content-center">
                    <div className='aboutMeImageContainer'>
                        <img className='aboutMeImage' src={face}/>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12} className="d-flex align-items-center">
                    <div className='aboutMeBody'>
                        <h2>Hi There, I'm</h2>
                        <h2>Asuka</h2>
                        <h3>work as a <span id='myElement'> Web Developer</span></h3>
                    </div>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}
