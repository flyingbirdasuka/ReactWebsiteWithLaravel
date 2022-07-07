import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestClient from '../../RestAPI/RestClient';
import AppUrl  from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';

export default class RecentProject extends Component {
  constructor(){
    super();
    this.state = {
      myData : [],
      loading : true
    }
  }
  componentDidMount(){
    RestClient.GetRequest(AppUrl.ProjectHome).then(result => 
      this.setState({myData: result, loading : false}))
  }    
  render() {
    if(this.state.loading == true ){
      return <Loading />
    } else {
      const myList = this.state.myData;
      const myView = myList.map(myList => {
        return <Col lg={4} md={6} sm={12} className='d-flex justify-content-center'>
        <Card className='projectCard' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={myList.img_one} />
            <Card.Body>
                <Card.Title className='cardTitle'>{myList.project_name} </Card.Title>
                <Card.Text>
                {myList.project_description} 
                </Card.Text>
                <Button variant="primary"><Link className='linkStyle' to={'/projectdetails/'+ myList.id　+ '/' + myList.project_name} >View More</Link></Button>
            </Card.Body>
        </Card>
    </Col>
      });
      return (
        <Fragment>
          <Container className='text-center'>
              <h1 className='serviceMainTitle'>RECENT PROJECT</h1>
              <div className='bottom'></div>
              <Row>
                  { myView }
              </Row>
          </Container>
        </Fragment>
      )
    }  
  }
}
