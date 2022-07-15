import React, { Component, Fragment } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';
import RestClient from '../../RestAPI/RestClient';
import AppUrl  from '../../RestAPI/AppUrl';
import parse from 'html-react-parser';

export class PortfolioDetails extends Component {
    constructor(props){
        super();
        this.state = {
            myPortfolioId : props.id,
            title : '',
            short_description : '',
            small_img : '',
            long_description : '',
            skill_all : '',
            video_url : ''
        }
    }
    componentDidMount(){
        RestClient.GetRequest(AppUrl.PortfolioDetails + this.state.myPortfolioId).then(result => 
          this.setState({title: result[0]['title'], short_description: result[0]['short_description'], small_img: result[0]['small_img'], long_description: result[0]['long_description'], skill_all: result[0]['skill_all'], video_url: result[0]['video_url']}))
      } 
  render() {
    return (
      <Fragment>
        <Container className='mt-5'>
            <Row>
                <Col lg={8} md={6} sm={12}>
                    <Player
                    playsInline
                    src={this.state.video_url}>
                    <BigPlayButton position='center' />
                </Player>  
                </Col>
                <Col lg={4} md={6} sm={12}>
                <div className='widgetFeature'>
                    <h4 className='widgetTitle text-center'>Portfolio Description</h4>
                    <hr />
                    <p className='detailsText'> {parse(this.state.long_description)}</p>
                    <div className='text-center priceWrap'>
                       <FontAwesomeIcon icon={faTags} /> <span> Tags: </span>{this.state.skill_all}
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default PortfolioDetails