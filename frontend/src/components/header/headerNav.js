import React, { Component } from 'react'
import '../../css/nav.css'
import {NavDropdown, Navbar, Nav, Container} from 'react-bootstrap'
class HeaderNav extends Component {
    render() {
        return (
            <div>
              <Navbar variant="dark" bg="dark" expand="sm">
    <Container>
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link style={{color:'white'}} href="/announcement">Announcement</Nav.Link>
    <Nav.Link style={{color:'white'}} href="/event">Events</Nav.Link>
    <Nav.Link style={{color:'white'}} href="/leaderboard">Leaderboard</Nav.Link>
    <Nav.Link style={{color:'white'}} href="/portfolio">Portfolio</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
            </div>
        )
    }
}
export default HeaderNav