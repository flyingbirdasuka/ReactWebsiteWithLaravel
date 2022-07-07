import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import AppUrl  from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';

export class Services extends Component {
  constructor(){
    super();
    this.state = {
      myData : [],
      loading : true
    }
  }
  componentDidMount(){
    RestClient.GetRequest(AppUrl.Services).then(result => 
      this.setState({myData: result, loading : false}))
  }    
  render() {
    if(this.state.loading == true ){
      return <Loading />
    } else {
      const myList = this.state.myData;
      const myView = myList.map(myList => {
        return <Col lg={4} md={6} sm={12} className='d-flex justify-content-center'>
          <div className='serviceCard text-center'>
                <img className='icon' src={myList.service_logo}/>
                <h2>{myList.service_name}</h2>
                <p>{myList.service_description}</p>
            </div>
        </Col>
      });
      return (
        <Fragment>
          <Container className='text-center'>
              <h1 className='serviceMainTitle'>MY SERVICES</h1>
              <div className='bottom'></div>
              <Row>
                  { myView }
              </Row>
              </Container>
        </Fragment>
      )
    }  
  }
}

export default Services