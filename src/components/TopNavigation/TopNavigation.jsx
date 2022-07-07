import React, { Component, Fragment } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import whiteLogo from '../../asset/image/logo_white.png';
import darkLogo from '../../asset/image/logo_dark.png';
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import { NavLink as BaseNavLink } from "react-router-dom";

export default class TopNavigation extends Component {
    constructor(props){
        super();
        this.state={
            navBarTitle: 'navbarTitle',
            navBarLogo: [whiteLogo],
            navVariant:'dark',
            navBackground: 'navBackground',
            navItem: 'navItem',
            pageTitle:props.title
        }
    }

    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navBarTitle: 'navTitleScroll', navBarLogo: [darkLogo], navVariant:'light', navBackground: 'navBackgroundScroll', navItem: 'navItemScroll'})
        }else if(window.scrollY<100){
            this.setState({navBarTitle: 'navbarTitle', navBarLogo: [whiteLogo], navVariant:'dark', navBackground: 'navBackground',navItem: 'navItem'})
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.onScroll);
    }

  render() {
    return (
      <Fragment>
        <title>{this.state.pageTitle}</title>
        <Navbar collapseOnSelect fixed="top" expand="lg"  variant={this.state.navVariant} className={this.state.navBackground}>
            <Container>
            <Navbar.Brand href="#home" className={this.state.navBarTitle}>
                <NavLink exact to="/" ><img src={this.state.navBarLogo} className="logo"/></NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
            
                </Nav>
                <Nav>
                <Nav.Link><NavLink exact activeStyle={{color:'#27a168'}} to="/" className={this.state.navItem}>Home</NavLink></Nav.Link>
                <Nav.Link><NavLink exact activeStyle={{color:'#27a168'}} to="/about" className={this.state.navItem}>About</NavLink></Nav.Link>
                <Nav.Link><NavLink exact activeStyle={{color:'#27a168'}} to="/service" className={this.state.navItem}>Service</NavLink></Nav.Link>
                <Nav.Link><NavLink exact activeStyle={{color:'#27a168'}} to="/course" className={this.state.navItem}>Courses</NavLink></Nav.Link>
                <Nav.Link><NavLink exact activeStyle={{color:'#27a168'}} to="/portfolio" className={this.state.navItem}>Portfolio</NavLink></Nav.Link>
                <Nav.Link><NavLink exact activeStyle={{color:'#27a168'}} to="/contact" className={this.state.navItem}>Contact</NavLink></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
      </Fragment>
    )
  }
}

// to let the activeStyle work
const NavLink = React.forwardRef(
    ({ activeClassName, activeStyle, ...props }, ref) => {
      return (
        <BaseNavLink
          ref={ref}
          {...props}
          className={({ isActive }) =>
            [
              props.className,
              isActive ? activeClassName : null,
            ]
              .filter(Boolean)
              .join(" ")
          }
          style={({ isActive }) => ({
            ...props.style,
            ...(isActive ? activeStyle : null),
          })}
        />
      );
    }
  );