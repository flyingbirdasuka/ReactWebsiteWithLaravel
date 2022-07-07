import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import AppUrl  from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';
import Error from '../Error/Error'

export class AboutDescription extends Component {
  constructor(){
    super();
    this.state = {
      about : [],
      loading : true,
      error : false
    }
  }
  componentDidMount(){
    RestClient.GetRequest(AppUrl.Information).then(result => {
      if(result == null){
        this.setState({error: true, loading: false})
      }else{
        this.setState({about: result[0]['about'], loading: false});
      }
    }).catch(error=>{
      this.setState({error: true})
    })  
  }   
  render() {
    if(this.state.loading == true ){
      return <Loading />
    } else if(this.state.loading == false) {
      return (
          <Fragment>
          <Container className='text-center'>
              <Row> 
                  <Col lg={12} md={12} sm={12} className='text-center mt-5'>
                      <h1 className='mt-5'>Our Mission</h1>
                      <hr />
                      <p>{this.state.about}</p>
                  </Col>
              </Row>
          </Container>
        </Fragment>
      )
    } else if(this.state.error == true) {
      return <Error />
    }
  }
}

export default AboutDescription