import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import face from '../../asset/image/asuka.jpeg';  
import RestClient from '../../RestAPI/RestClient';
import AppUrl  from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';
import parse from 'html-react-parser';


export class AboutDescription extends Component {
  constructor(){
    super();
    this.state = {
      about : [],
      education:[],
      work:[],
      loading : true,
      error : false
    }
  }
  componentDidMount(){
    RestClient.GetRequest(AppUrl.Information).then(result => {
        this.setState({about: result[0]['about'], loading: false});
    });   
    RestClient.GetRequest(AppUrl.EducationAll).then(result => {
      if(result == null){
        this.setState({error: true, loading: false})
      }else{
        this.setState({education: result});
      }
    }).catch(error=>{
      this.setState({error: true})
    })   
    RestClient.GetRequest(AppUrl.WorkAll).then(result => {
      if(result == null){
        this.setState({error: true, loading: false})
      }else{
        this.setState({work: result});
      }
    }).catch(error=>{
      this.setState({error: true})
    })   
  }    
 
  render() {
    if(this.state.loading == true ){
      return <Loading />
    } else if(this.state.loading == false) {
        const myList = this.state.education;
        const myView = myList.map(myList => {
          return <Col className='mb-4 d-flex text-left'>
          <Row>
              <Col className="resume-item">
                  <h4>{myList.title}</h4>
                  <h5>{myList.year}</h5>
                  <p>{myList.schoolname}</p>
                  
                  {parse(myList.description)}
              </Col>
          </Row>
        </Col>
        });
        const myList2 = this.state.work;
        const myView2 = myList2.map(myList2 => {
          return <Col className='mb-4 d-flex text-left'>
          <Row>
              <Col  className="resume-item">
                  <h4>{myList2.title}</h4>
                  <h5>{myList2.year}</h5>
                  {parse(myList2.description)}
              </Col>
            </Row>
        </Col>
        });


    return (
      <Fragment>
        <Container className='text-center'>
            <h1 className='serviceMainTitle'>ABOUT ME</h1>
            <div className='bottom'></div>
            <Row className="mb-5">
                <Col lg={6} md={6} sm={12} className="d-flex align-items-center justify-content-center flex-column">
                    <div className='aboutMeImageContainer'>
                        <img className='aboutMeImage' src={face}/>
                    </div>
                    <div className='aboutMeBody text-center'>
                        <h5>Hi There, I'm</h5><h4>Asuka</h4>
                        <p>Web Developer</p>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12} className="d-flex align-items-center justify-content-center flex-column">
                    <div className='text-left'>
                    {parse(this.state.about)}
                    </div>
                </Col>
            </Row>
            <hr></hr>
            <Row className='mt-5'>
              <Col className="container resume flex-column">
              { myView2 }
              </Col>
              <Col className="container resume flex-column">
          
              { myView }
         
              </Col>
            
            </Row>  
        </Container>
      </Fragment>
    )
  }
}
}
export default AboutDescription