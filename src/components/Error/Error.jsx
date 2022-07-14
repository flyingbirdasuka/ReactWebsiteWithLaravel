import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import errorIcon from '../../asset/image/error.svg'

export class Error extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <Fragment>
        <Container className='text-center'>
            <Row>
                <Col>
                <img src={errorIcon} className='errorIcon' />
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Error