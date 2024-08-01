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
<<<<<<< HEAD
            <Nav.Link href="#home">UY</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <Nav.Link href="#link">Support</Nav.Link>
            <Nav.Link href="#link">Help Me!</Nav.Link>
=======
            <Nav.Link href="https://60d6ca0c2ad00.site123.me/">Admission</Nav.Link>
            <Nav.Link href="https://olympiad.nordicuniversity.org/en">TASIMO</Nav.Link>
            <Nav.Link href="https://nordicmail.uz/">Mail</Nav.Link>
            <Nav.Link href="https://t.me/Pirmamatov_o">Support</Nav.Link>
            <Nav.Link href="https://nordicuniversity.org/contacts.html">Help Me!</Nav.Link>
>>>>>>> 049c3747d82236d5dd625fac910551638c24aff4
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
