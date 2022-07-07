import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import RestClient from '../../RestAPI/RestClient';
import AppUrl  from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';
import Error from '../Error/Error'


export default class Footer extends Component {
    constructor(){
        super();
        this.state = {
          address : '',
          email : '',
          phone : '',
          facebook : '',
          instagram : '',
          youtube : '',
          linkedin : '',
          github : '',
          loaderClass : 'text-center',
          mainDivClass: 'd-none',
          error : false
        }
      }
      componentDidMount(){
        RestClient.GetRequest(AppUrl.FooterData).then(result => {
            if(result == null){
              this.setState({error: true})
            }else{
          this.setState({address: result[0]['address'], email: result[0]['email'], phone: result[0]['phone'],facebook: result[0]['facebook'], instagram: result[0]['instagram'], youtube: result[0]['youtube'], linkedin: result[0]['linkedin'], github: result[0]['github'], footer_credit: result[0]['footer_credit'], loaderClass:'d-none', mainDivClass:'text-center' })
        }    
        }).catch(error=>{
            this.setState({error: true})
          }) 
      } 
  render() {
    if(this.state.error == false){
    return (
        <Fragment>
        <Container fluid='true' className='text-center footerSection'>
        
            <Row>
                <Col className={this.state.loaderClass}>
                    <Loading />
                </Col>
                <Col lg={3} md={6} sm={12} className={this.state.mainDivClass}>
                    <h2 className='footerName'>Follow Us</h2>
                    <div className='socialContainer'>
                        <a href={this.state.facebook} className='social'><FontAwesomeIcon icon={faFacebook} size='2x' /></a>
                        <a href={this.state.instagram} className='social'><FontAwesomeIcon icon={faInstagram} size='2x'/></a>
                        <a href={this.state.youtube} className='social'><FontAwesomeIcon icon={faYoutube} size='2x'/></a>
                        <a href={this.state.linkedin} className='social'><FontAwesomeIcon icon={faLinkedin} size='2x' target='_blank'/></a>
                        <a href={this.state.github} className='social'><FontAwesomeIcon icon={faGithub} size='2x' target='_blank'/></a>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} className={this.state.mainDivClass}>
                    <h2 className='footerName'>Address</h2>
                    {this.state.address}<br></br>
                    <FontAwesomeIcon icon={faEnvelope} /> Email: {this.state.email}<br></br>
                    <FontAwesomeIcon icon={faPhone} /> Phone: {this.state.phone}<br></br>
                </Col>
                <Col lg={3} md={6} sm={12} className={this.state.mainDivClass}>
                    <h2 className='footerName'>Information</h2>
                    <Link to='/about' className='footerLink'>About Me</Link><br></br>
                    <Link  to='/about' className='footerLink'>Company Profile</Link><br></br>
                    <Link to='/contact' className='footerLink'>Contact me</Link>
                </Col>
                <Col lg={3} md={6} sm={12} className={this.state.mainDivClass}>
                    <h2 className='footerName'>Policy</h2>
                    <Link to='/refund' className='footerLink'>Refund Policy</Link><br></br>
                    <Link to='/terms' className='footerLink'>Terms and Condition</Link><br></br>
                    <Link to='/privacy' className='footerLink'>Privacy Policy</Link>
                </Col>
                
            </Row>
        </Container>
        <Container fluid='true' className='text-center copyrightSection'>
            <p>© {this.state.footer_credit}</p>
        </Container>
      </Fragment>
    )
    } else if(this.state.error == true) {
        return <Error />
    } 
    
  }
}
