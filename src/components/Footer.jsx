import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

/**
 * Footer component for BookMyShow
 */
const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>
              <span className="text-danger">BOOK</span>MY
              <span className="text-danger">SHOW</span>
            </h5>
            <p className="small">
              The ultimate destination for movie, events and sports tickets.
            </p>
          </Col>

          <Col md={2} className="mb-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/movies"
                  className="text-white-50 text-decoration-none"
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-white-50 text-decoration-none"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/sports"
                  className="text-white-50 text-decoration-none"
                >
                  Sports
                </Link>
              </li>
              <li>
                <Link
                  to="/offers"
                  className="text-white-50 text-decoration-none"
                >
                  Offers
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={3} className="mb-3">
            <h6>Help & Support</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/faq" className="text-white-50 text-decoration-none">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-white-50 text-decoration-none"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-white-50 text-decoration-none"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white-50 text-decoration-none"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={3} className="mb-3">
            <h6>Follow Us</h6>
            <div className="d-flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </Col>
        </Row>

        <hr className="my-3" />

        <div className="text-center text-white-50 small">
          <p>© 2023 BookMyShow. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
