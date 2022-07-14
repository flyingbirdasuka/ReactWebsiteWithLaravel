import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestClient from '../../RestAPI/RestClient';
import AppUrl  from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import Isotope from 'isotope-layout';
import parse from 'html-react-parser';

class AllPortfolio extends Component {
    constructor(){
        super();
        this.state = {
          myData : [],
          loading : true,
          error: false
        }
    }
      componentDidMount(){
        RestClient.GetRequest(AppUrl.PortfolioAll).then(result => {
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
              return <div className={myList.filter}>
                  <Col className='d-flex align-items-center'>
                      <img className='portfolioImage' src={myList.small_img}/>
                  </Col>
                  <Col className='d-flex flex-column justify-content-center'>
                  <h5>{myList.title}</h5>
                  {parse(myList.short_description)}
                  <Link to={'/portfoliodetails/'+ myList.id + '/' + myList.title}>View details</Link>
                  </Col>
              </div>
            });
            // Porfolio isotope and filter
            let portfolioContainer = select('.portfolio-container');
            if (portfolioContainer) {
              let portfolioIsotope = new Isotope(portfolioContainer, {
                itemSelector: '.portfolio-item'
              });
              let portfolioFilters = select('#portfolio-flters li', true);
        
              on('click', '#portfolio-flters li', function(e) {
                e.preventDefault();
                portfolioFilters.forEach(function(el) {
                  el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');          
                portfolioIsotope.arrange({
                  filter: this.getAttribute('data-filter')
                });
        
              }, true);
            }
        return (
            <Fragment>
              <div className="portfolio">
              <Container className='text-center'>
                  <h1 className='serviceMainTitle'>My Portfolio</h1>
                  <div className='bottom'></div>
                  <ul id="portfolio-flters" class="d-flex justify-content-center">
                      <li data-filter="*" class="filter-active">All</li>
                      <li data-filter=".filter-php">PHP</li>
                      <li data-filter=".filter-javascript">JAVASCRIPT</li>
                      <li data-filter=".filter-laravel">Laravel</li>
                      <li data-filter=".filter-react">React</li>
                      <li data-filter=".filter-api">API</li>
                      <li data-filter=".filter-ajax">AJAX</li>
                      <li data-filter=".filter-wordpress">WordPress</li>
                    </ul>
                 
                    
                  <div className="portfolio-container row">
                      { myView }
                  </div>
              
              </Container>
              </div>
          </Fragment>
        )
        }else if(this.state.error == true) {
          return <Error />
        }
  }
}

export default AllPortfolio

const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}
const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all)
  if (selectEl) {
    if (all) {
      selectEl.forEach(e => e.addEventListener(type, listener))
    } else {
      selectEl.addEventListener(type, listener)
    }
  }
}  