import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import MainLogo from "/src/assets/logo/LogoWhite.png";
import "./navbar.scss";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary customNavbar">
      <Container>
        <Navbar.Brand href="https:">
          <img className="mainLogo" src={MainLogo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <Nav.Link href="#link">Support</Nav.Link>
            <Nav.Link href="#link">Help Me!</Nav.Link>
          </Nav>
          <NavDropdown title="Language" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">UZ</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">EN</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">RU</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
