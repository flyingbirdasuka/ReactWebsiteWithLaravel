import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Button, Form} from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import AppUrl  from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';

class ContactSection extends Component {
    constructor(){
        super();
        this.state = {
          address : '',
          email : '',
          phone : '',
          loading : true,
          sendMessage: ''
        }
      }

      componentDidMount(){
        RestClient.GetRequest(AppUrl.FooterData).then(result => 
          this.setState({address: result[0]['address'], email: result[0]['email'], phone: result[0]['phone'], loading: false}))
      } 

      sendContact(){
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;
        let jsonObject = { name:name, email:email, message:message };
        RestClient.PostRequest(AppUrl.ContactSend, JSON.stringify(jsonObject)).then(result=> {this.setState({sendMessage: result})
        }).catch(error=> {alert(error)});
      }
  render() {
    if(this.state.loading == true ){
      return <Loading />
    } else {
      return (
          <Fragment>
          <Container className='mt-5'>
            
              <Row>
                  <Col lg={6} md={6} sm={12}>
                      <Form>
                          <Form.Group className="mb-3">
                              <Form.Label>Your Name</Form.Label>
                              <Form.Control id="name" type="text" placeholder="Enter your name" />
                          </Form.Group>
                          <Form.Group className="mb-3">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control id="email" type="email" placeholder="Enter email" />
                              <Form.Text className="text-muted">
                              </Form.Text>
                          </Form.Group>
                          <Form.Group className="mb-3">
                              <Form.Label>Your Message</Form.Label>
                              <Form.Control id="message" as="textarea" rows={3} />
                          </Form.Group>

                          <Button onClick={() => this.sendContact()} variant="primary">
                              Send
                          </Button>
                        </Form>
                        <p className='mt-2 sendMessage'>{this.state.sendMessage}</p>
                  </Col>
                  <Col lg={6} md={6} sm={12} className="d-flex flex-column align-items-center">
                      <p className="mb-2">Email: {this.state.email}</p><br></br>
                  </Col>
              </Row>
          </Container>
        </Fragment>
      )
    }
  }
}

export default ContactSection