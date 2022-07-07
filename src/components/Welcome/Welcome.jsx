import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import pageOne from '../../asset/image/page1.png';
import pageTwo from '../../asset/image/page2.png';
import pageThree from '../../asset/image/page3.png';
import imageOne from '../../asset/image/19.png';
import imageTwo from '../../asset/image/20.png';
import imageThree from '../../asset/image/21.png';
import Jump from 'react-reveal/Jump';

export class Welcome extends Component {
  render() {
    return (
      <Fragment>
        <div className='introAreaTop'>
        <Container>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div className='sectionTitle text-center'>
                        <div className='introAreaInner'>
                            <h6 className='subTitle doubleLine'>Welcome</h6>
                            <Jump>
                            <h2 className='maintitle'>
                                An exemplary<br></br>
                                learning community
                            </h2>   
                            </Jump>
                            <Container className='text-center mt-5'>
                                <Row>
                                    <Col lg={4} md={6} sm={12}>
                                        <img src={pageOne} />
                                        <h1>test 1</h1>
                                    </Col>
                                    <Col lg={4} md={6} sm={12}>
                                        <img src={pageTwo} />
                                        <h1>test 1</h1>
                                    </Col>
                                    <Col lg={4} md={6} sm={12}>
                                        <img src={pageThree} />
                                        <h1>test 1</h1>
                                    </Col>
                                </Row>
                                <Row className='introFooter bgBase'>
                <Col lg={4} md={6} sm={12}>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img className='sideImage' src={imageOne} />
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h5>Development</h5>
                            <p>test</p>
                        </Col>
                    </Row>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img className='sideImage' src={imageTwo} />
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h5>Web design</h5>
                            <p>test</p>
                        </Col>
                    </Row>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img className='sideImage' src={imageThree} />
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h5>Ecommerce</h5>
                            <p>test</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
                            </Container> 
                        </div>
                    </div>
                </Col>
            </Row>
            
        </Container>
        </div>
      </Fragment>
    )
  }
}

export default Welcome