import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestClient from '../../RestAPI/RestClient';
import AppUrl  from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';
export default class Portfolio extends Component {
  constructor(){
    super();
    this.state = {
      myData : [],
      loading : true
    }
  }
  componentDidMount(){
    RestClient.GetRequest(AppUrl.PortfolioHome).then(result => 
      this.setState({myData: result, loading : false}))
  }    
  render() {
    if(this.state.loading == true ){
      return <Loading />
    } else {
      const myList = this.state.myData;
      const myView = myList.map(myList => {
        return <Col lg={6} md={12} sm={12}>
        <Row>
            <Col lg={6} md={6} sm={12} className='mb-5 d-flex justify-content-center'>
                <img className='portfolioImage' src={ myList.small_img}/>
            </Col>
            <Col lg={6} md={6} sm={12}>
            <h5>{myList.title}</h5>
            <p>{myList.short_description}</p>
            <Link to={'/portfoliodetails/'+ myList.id + '/' + myList.title}>View details</Link>
            </Col>
        </Row>
    </Col>
      });
      return (
        <Fragment>
          <Container className='text-center'>
              <h1 className='serviceMainTitle'>MY Portfolio</h1>
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
