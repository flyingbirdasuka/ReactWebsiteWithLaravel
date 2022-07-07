import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'; 

export class Summary extends Component {
  render() {
    return (
     <Fragment>
        <Container fluid={true} className='summaryBanner p-0'>
            <div className='summaryOverlay'>
                <Container className='text-center'>
                    <Row className='countSection'> 
                        <Col lg={8} md={6} sm={12}>
                           <Row>
                                <Col>
                                <FontAwesomeIcon className='projectIcon' icon={faGlobe} /> 
                                <h1 className='countNumber'>
                                <CountUp start={0} end={35000}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                 </CountUp>
                                </h1>
                                <h4 className='countTitle'>Students Worldwide</h4>
                                <hr className='bg-white w-25' />
                                </Col>
                                <Col>
                                <FontAwesomeIcon className='projectIcon' icon={faLaptop} /> 
                                <h1 className='countNumber'>
                                <CountUp start={0} end={35}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                </h1>
                                <h4 className='countTitle'>Courses Publised</h4>
                                <hr className='bg-white w-25' />
                                </Col>
                                <Col>
                                <FontAwesomeIcon className='projectIcon' icon={faStar} /> 
                                <h1 className='countNumber'>
                                <CountUp start={0} end={3000}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                 </CountUp>
                                </h1>
                                <h4 className='countTitle'>Student reviews</h4>
                                <hr className='bg-white w-25' />
                                </Col>  
                           </Row>
                        </Col>
                        <Col lg={4} md={6} sm={12} className='d-flex justify-content-center'>
                        <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title className='cardTitle'>What I Have Archieved</Card.Title>
                                    <Card.Text>
                                        <p className='cardSubTitle'><FontAwesomeIcon icon={faCheckSquare} /> Requirement gatharing</p>
                                        <p className='cardSubTitle'><FontAwesomeIcon icon={faCheckSquare} /> System Analysis</p>
                                        <p className='cardSubTitle'><FontAwesomeIcon icon={faCheckSquare} /> Coding Testing</p>
                                        <p className='cardSubTitle'><FontAwesomeIcon icon={faCheckSquare} /> Implementation</p>
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                         </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
     </Fragment>
    )
  }
}

export default Summary