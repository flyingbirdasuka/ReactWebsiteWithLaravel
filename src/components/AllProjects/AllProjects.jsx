import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestClient from '../../RestAPI/RestClient';
import AppUrl  from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

export class AllProjects extends Component {
    constructor(){
        super();
        this.state = {
          myData : [],
          loading : true,
          error: false
        }
      }
      componentDidMount(){
        RestClient.GetRequest(AppUrl.ProjectAll).then(result => {
          if(result == null){
            this.setState({error: true, loading: false})
          }else{
            this.setState({myData: result, loading: false})
          }
        }).catch(error=>{
          this.setState({error: true})
        })  
      }    
      render() {
        if(this.state.loading == true ){
          return <Loading />
        } else if(this.state.loading == false) {
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
                      <Button variant="primary"><Link className='linkStyle' to={'/projectdetails/'+ myList.id+ '/' + myList.project_name}>View More</Link></Button>
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
        }else if(this.state.error == true) {
          return <Error />
        }
  }
}

export default AllProjects