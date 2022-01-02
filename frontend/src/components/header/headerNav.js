import React, { Component } from 'react'
import '../../css/nav.css'
import {NavDropdown, Navbar, Nav, Container} from 'react-bootstrap'
import Logo from '../../imgs/RCUCoEsLogo.png'
class HeaderNav extends Component {
    render() {
        return (
            <div>
              <Navbar className="color-nav" expand="lg" style={{backgroundColor:"#000917"}} >
  <Container>

  <Navbar.Brand href="#home" >
      <img
      alt="logo"
      src={Logo}
      style={{height:'10vw', height:'10vw'}}
      >
      </img>
  </Navbar.Brand>
  <Navbar.Toggle style={{backgroundColor:'white',marginRight:'15px'}} aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/announcement">Announcement</Nav.Link>
      <Nav.Link href="/event">Events</Nav.Link>
      <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
      <Nav.Link href="/portfolio">Portfolio</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
        )
    }
}
export default HeaderNav