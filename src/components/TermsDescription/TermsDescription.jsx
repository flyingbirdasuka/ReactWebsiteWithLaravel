import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import AppUrl  from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';
import Error from '../Error/Error'

export class TermsDescription extends Component {
  constructor(){
    super();
    this.state = {
      terms : [],
      loading : true,
      error : false
   }
  }
  componentDidMount(){
    RestClient.GetRequest(AppUrl.Information).then(result => {
      if(result == null){
        this.setState({error: true, loading: false})
      }else{
      this.setState({terms: result[0]['terms'],loading: false})
      }
    }).catch(error=>{
      this.setState({error: true})
    }) 
  } 
  render() {
    if(this.state.loading == true ){
      return <Loading />
    } else if (this.state.loading == false)  {
      return (
        <Fragment>
          <Container>
              <Row>
              <Col lg={12} md={12} sm={12}>
                      <h1>Terms And Condition</h1>
                      <p>{this.state.terms}</p>
                  </Col>
              </Row>
          </Container>
        </Fragment>
      )
    }  else if(this.state.error == true) {
      return <Error />
    }
  }
}

export default TermsDescription