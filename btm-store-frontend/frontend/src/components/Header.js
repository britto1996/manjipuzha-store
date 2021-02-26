import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">BTM-STORE</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <SearchBox />
            <Nav className="ml-auto">
              <Nav.Link href="/cart">
                <i className="fas fa-shopping-cart"></i> Cart
              </Nav.Link>

              <NavDropdown>
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>

                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/signin">
                <i className="fas fa-user"></i> Sign In
              </Nav.Link>

              <NavDropdown title="Admin" id="adminmenu">
                <NavDropdown.Item href="/admin/userlist">
                  Users
                </NavDropdown.Item>

                <NavDropdown.Item href="/admin/productlist">
                  Products
                </NavDropdown.Item>

                <NavDropdown.Item href="/admin/orderlist">
                  Orders
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
