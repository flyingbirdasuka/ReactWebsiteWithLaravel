import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone,  faHome } from '@fortawesome/free-solid-svg-icons';
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
          this.setState({address: result[0]['address'], email: result[0]['email'], phone: result[0]['phone'],linkedin: result[0]['linkedin'], github: result[0]['github'], footer_credit: result[0]['footer_credit'], loaderClass:'d-none', mainDivClass:'text-center' })
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
        
            <Row className='d-flex justify-content-center'>
                <Col className={this.state.loaderClass}>
                    <Loading />
                </Col>
                <Col lg={3} md={6} sm={12} className={this.state.mainDivClass}>
                    <h2 className='footerName'>Links</h2>
                    <div className='socialContainer'>
                        <a href={this.state.linkedin} target="_blank"  rel="noopener noreferrer" className='social'><FontAwesomeIcon icon={faLinkedin} size='2x'/></a>
                        <a href={this.state.github} target="_blank" className='social' rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size='2x'/></a>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} className={this.state.mainDivClass}>
                    <h2 className='footerName'>Contact</h2>
                    <FontAwesomeIcon icon={faEnvelope} /> Email: {this.state.email}<br></br>
                </Col>
                <Col lg={3} md={6} sm={12} className={this.state.mainDivClass}>
                    <h2 className='footerName'>Information</h2>
                    <Link to='/about' className='footerLink'>About Me</Link><br></br>
                    <Link  to='/allportfolio' className='footerLink'>Portfolio</Link><br></br>
                    <Link to='/contact' className='footerLink'>Contact me</Link>
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
