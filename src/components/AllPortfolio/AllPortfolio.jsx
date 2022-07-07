import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestClient from '../../RestAPI/RestClient';
import AppUrl  from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

class AllPortfolio extends Component {
    constructor(){
        super();
        this.state = {
          myData : [],
          loading : true,
          error: false
        }
      }
      componentDidMount(){
        RestClient.GetRequest(AppUrl.CourseAll).then(result => {
          if(result == null){
            this.setState({error: true, loading: false})
          }else{
            this.setState({myData: result, loading: false})
          }
        }).catch(error=>{
          this.setState({error: true})
        })  
      }    
      render() {
        if(this.state.loading == true ){
          return <Loading />
        } else if(this.state.loading == false) {
            const myList = this.state.myData;
            const myView = myList.map(myList => {
              return <Col lg={6} md={12} sm={12}　className='mb-2 d-flex justify-content-center'>
              <Row>
                  <Col lg={6} md={6} sm={12}>
                      <img className='courseImage' src={myList.small_img}/>
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                  <h5>{myList.short_title}</h5>
                  <p>{myList.short_description}</p>
                  <Link to={'/coursedetails/'+ myList.id + '/' + myList.short_title}>View details</Link>
                  </Col>
              </Row>
          </Col>
            });
        return (
            <Fragment>
              <Container className='text-center'>
                  <h1 className='serviceMainTitle'>MY COURSES</h1>
                  <div className='bottom'></div>
                  <Row>
                      { myView }
                  </Row>
              </Container>
          </Fragment>
        )
        }else if(this.state.error == true) {
          return <Error />
        }
  }
}

export default AllPortfolio