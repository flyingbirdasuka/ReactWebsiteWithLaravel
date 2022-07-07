import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import loaderIcon from '../../asset/image/loader.svg';

class Loading extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center'>
            <Row>
                <Col>
                    <img className='loaderAnimation' src={loaderIcon}/>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Loading