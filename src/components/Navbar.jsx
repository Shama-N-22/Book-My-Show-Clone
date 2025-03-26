import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

/**
 * Navbar component for BookMyShow
 * Features:
 * - Left-aligned logo
 * - Centered menu items
 * - Right-aligned search and user profile
 * - Fully responsive with hamburger menu on mobile
 */
const BookMyShowNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-3" fixed="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <span className="text-danger">BOOK</span>MY
          <span className="text-danger">SHOW</span>
        </Navbar.Brand>

        {/* Hamburger menu for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible navbar content */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Centered menu items */}
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/movies">
              Movies
            </Nav.Link>
            <Nav.Link as={NavLink} to="/">
              Events
            </Nav.Link>
            <Nav.Link as={NavLink} to="/">
              Sports
            </Nav.Link>
            <Nav.Link as={NavLink} to="/">
              Offers
            </Nav.Link>
          </Nav>

          {/* Right-aligned search, book now button and profile */}
          <div className="d-flex align-items-center">
            <Form className="d-flex me-2">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>

            <Link to="/movies" className="me-3">
              <Button variant="danger" className="fw-bold">
                Book Now
              </Button>
            </Link>

            <div className="position-relative">
              <NavDropdown
                title={<i className="bi bi-person-circle fs-5"></i>}
                id="basic-nav-dropdown"
                align="end"
                className="profile-dropdown"
              >
                <NavDropdown.Item as={Link} to="/">
                  <i className="bi bi-person me-2"></i>
                  My Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">
                  <i className="bi bi-ticket-perforated me-2"></i>
                  My Bookings
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/">
                  <i className="bi bi-box-arrow-right me-2"></i>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BookMyShowNavbar;
