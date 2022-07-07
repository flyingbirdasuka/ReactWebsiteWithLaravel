import React, { Component, Fragment } from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faUser, faClock, faClipboard, faClone, faTags } from '@fortawesome/free-solid-svg-icons';
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';
import RestClient from '../../RestAPI/RestClient';
import AppUrl  from '../../RestAPI/AppUrl';

export class CourseDetails extends Component {
    constructor(props){
        super();
        this.state = {
            myCourseId : props.id,
            short_title : '',
            short_description : '',
            small_img : '',
            long_title : '',
            long_description : '',
            total_duration : '',
            total_lecture : '',
            total_student : '',
            skill_all : '',
            video_url : ''
        }
    }
    componentDidMount(){
        RestClient.GetRequest(AppUrl.CourseDetails + this.state.myCourseId).then(result => 
          this.setState({short_title: result[0]['short_title'], short_description: result[0]['short_description'], small_img: result[0]['small_img'], long_title: result[0]['long_title'], long_description: result[0]['long_description'], total_duration: result[0]['total_duration'], total_lecture: result[0]['total_lecture'], total_student: result[0]['total_student'], skill_all: result[0]['skill_all'], video_url: result[0]['video_url']}))
      } 
  render() {
    return (
      <Fragment>
        <Container className='mt-5'>
            <Row>
                <Col lg={8} md={6} sm={12}>
                    <h1 className='courseDetailsText'>{this.state.long_title}</h1>
                    <img className='courseDetailsImg' src={this.state.short_img} />
                    <p>{this.state.long_description}</p>
                </Col>
                <Col lg={4} md={6} sm={12}>
                <div className='widgetFeature'>
                    <h4 className='widgetTitle text-center'>Course Features</h4>
                    <hr />
                    <ul>
                    {this.state.long_description}
                        <li><FontAwesomeIcon icon={faUser} /> <span> Enrolled:</span>{this.state.total_student} students</li>
                        <li><FontAwesomeIcon icon={faClock} /> <span> Duration:</span>{this.state.total_duration}</li>
                        <li><FontAwesomeIcon icon={faClipboard} /> <span> Lectures:</span>{this.state.total_lecture}</li>
                        <li><FontAwesomeIcon icon={faClone} /> <span> Categories:</span>Technology</li>
                        <li><FontAwesomeIcon icon={faTags} /> <span> Tags:</span>Android, Javascript</li>
                        <li><FontAwesomeIcon icon={faCheckSquare} /> <span> Intsructor:</span>Ethan Dean</li>
                    </ul>
                    <div className='text-center priceWrap'>
                        <h5>Price: <span>$54.00</span></h5>
                        <Button variant='warning'>Enroll Course</Button>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
        <Container className='mt-5'>
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <div className='widget-feature'>
                        <h1 className='course-details-text'>Skill You Need</h1><hr />
                        <ul>
                            <li><FontAwesomeIcon icon={faCheckSquare} /> <span> Intsructor:</span>Ethan Dean</li>
                            <li><FontAwesomeIcon icon={faCheckSquare} /> <span> Intsructor:</span>Ethan Dean</li>
                            <li><FontAwesomeIcon icon={faCheckSquare} /> <span> Intsructor:</span>Ethan Dean</li>
                            <li><FontAwesomeIcon icon={faCheckSquare} /> <span> Intsructor:</span>Ethan Dean</li>
                            <li><FontAwesomeIcon icon={faCheckSquare} /> <span> Intsructor:</span>Ethan Dean</li>
                            <li><FontAwesomeIcon icon={faCheckSquare} /> <span> Intsructor:</span>Ethan Dean</li>

                        </ul>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                <Player
                    playsInline
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                    <BigPlayButton position='center' />
                </Player>    
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default CourseDetails