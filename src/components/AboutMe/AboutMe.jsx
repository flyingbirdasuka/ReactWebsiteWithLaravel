import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import face from '../../asset/image/asuka.jpeg';  
import RestClient from '../../RestAPI/RestClient';
import AppUrl  from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';
import parse from 'html-react-parser';


export default class AboutMe extends Component {
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
        this.setState({about: result[0]['about'], loading: false});
    }).catch(error=>{
      this.setState({error: true})
    })   
  }    
 
  render() {
    if(this.state.loading === true ){
      return <Loading />
    } else  {
    return (
      <Fragment>
        <Container className='text-center'>
            <h1 className='serviceMainTitle'>ABOUT ME</h1>
            <div className='bottom'></div>
            <Row>
                <Col lg={6} md={6} sm={12} className="d-flex align-items-center justify-content-center flex-column">
                    <div className='aboutMeImageContainer'>
                        <img className='aboutMeImage' src={face}/>
                    </div>
                    <div className='aboutMeBody text-center'>
                        <h5>Hi There, I'm</h5><h4>Asuka</h4>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12} className="d-flex align-items-center justify-content-center flex-column">
                    <div className='text-left'>
                    {parse(this.state.about)}
                    </div>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}
}