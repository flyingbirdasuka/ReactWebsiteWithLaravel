import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from 'recharts';
import RestClient from '../../RestAPI/RestClient';
import AppUrl  from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';
import parse from 'html-react-parser';

export default class Analysis extends Component {

    constructor(){
        super();
        this.state={
            data:[],
            techDescription : '',
            loading : true
        }
    }
    componentDidMount(){
        RestClient.GetRequest(AppUrl.ChartData).then(result => 
                this.setState({data: result, loading : false}))
        RestClient.GetRequest(AppUrl.HomeTechDesc).then(result => 
                this.setState({techDescription: result[0]['tech_description']}))
      }   
  render() {
    if(this.state.loading == true ){
        return <Loading />
      } else {
        return (
        <Fragment>
            <Container className='text-center'>
                <h1 className='serviceMainTitle'>Key skills</h1>
                <div className='bottom'></div>
                <Row> 
                    <Col style={{width:'100px', height: '300px'}} lg={6} md={12} sm={12}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart width={150} height={300} data={this.state.data}>
                                <XAxis dataKey="technology"/>
                                <Bar dataKey="projects" fill="#473F72" />
                                <Tooltip />
                            </BarChart>
                        </ResponsiveContainer>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                    {parse(this.state.techDescription)}
                    <div class="interests container ">
                        <div class="section-title">
                            <span>Languages: </span>
                        </div>
                        <div class="row icon-container">
                            <div class="icon-box">
                                <h5>Japanese</h5>
                            </div>
                            <div class="icon-box">
                                <h5>English</h5>
                            </div>
                            <div class="icon-box">
                                <h5>Dutch</h5>
                            </div>
                        </div>
                        
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
        )
    }    
  }
}
