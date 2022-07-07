import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';
import RestClient from '../../RestAPI/RestClient';
import AppUrl  from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';

export default class Video extends Component {
    constructor(){
        super();
        this.state = {
          show:false,
          video_description : '',
          video_url: '',
          loading : true
        }
      }
      componentDidMount(){
        RestClient.GetRequest(AppUrl.HomeVideo).then(result => 
          this.setState({video_description: result[0]['video_description'], video_url: result[0]['video_url'],loading : false}))
      }  

    modalCLose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})
  render() {
    if(this.state.loading == true ){
      return <Loading />
    } else {
      return (
        <Fragment>
          <Container className='text-center'>
              <h1 className='serviceMainTitle'>OUR VIDEOS</h1>
              <div className='bottom'></div>
              <Row>
                  <Col lg={6} md={6} sm={12}>
                      <p>{this.state.video_description}</p>
                  </Col>
                  <Col lg={6} md={6} sm={12} className='videoCard'>
                      <FontAwesomeIcon onClick={this.modalOpen} className='projectIcon' icon={faVideoSlash} />
                  
                  </Col>
              </Row>
          </Container>
          <Modal show={this.state.show} onHide={this.modalCLose}>
              <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Player
                  playsInline
                  src={this.state.video_url}>
                  <BigPlayButton position='center' />
              </Player>    
              </Modal.Body>
              <Modal.Footer>
              <Button variant="secondary" onClick={this.modalCLose}>
                  Close
              </Button>
              <Button variant="primary" onClick={this.modalCLose}>
                  Save Changes
              </Button>
          </Modal.Footer>
        </Modal>
        </Fragment>
      )
    }
  }
}
