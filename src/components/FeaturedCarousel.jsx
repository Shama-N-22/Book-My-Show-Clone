import React, { useState } from "react";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import getPlaceholderImage from "../assets/placeholders/image-placeholder";

/**
 * FeaturedCarousel component for showcasing featured content
 * Props:
 * - items: array of objects to be displayed in the carousel
 * - title: title of the carousel section
 */
const FeaturedCarousel = ({ items, title }) => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (itemId) => {
    setImageErrors((prev) => ({
      ...prev,
      [itemId]: true,
    }));
  };

  return (
    <Container className="my-3 px-md-3 px-2">
      <h2 className="mb-3">{title}</h2>
      <Carousel
        indicators={true}
        controls={true}
        interval={3000}
        pause="hover"
        className="shadow-sm rounded overflow-hidden"
      >
        {items.map((item) => (
          <Carousel.Item key={item.id}>
            <Row className="align-items-center g-0">
              <Col xs={12} md={6} className="mb-3 mb-md-0">
                <div className="px-md-2">
                  <img
                    className="d-block w-100 rounded mx-auto"
                    src={
                      imageErrors[item.id]
                        ? getPlaceholderImage("movie")
                        : item.image
                    }
                    alt={item.title}
                    onError={() => handleImageError(item.id)}
                    style={{
                      maxHeight: "350px",
                      objectFit: "cover",
                      maxWidth: "100%",
                    }}
                  />
                </div>
              </Col>
              <Col xs={12} md={6} className="p-3 p-md-4">
                <h3 className="text-break">{item.title}</h3>
                <p className="text-muted">{item.genre}</p>
                <p className="text-break d-none d-md-block">
                  {item.description}
                </p>
                <p className="text-break d-block d-md-none">
                  {item.description.length > 100
                    ? `${item.description.substring(0, 100)}...`
                    : item.description}
                </p>
                <Link to={`/movie/${item.id}`}>
                  <Button variant="danger">Book Now</Button>
                </Link>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default FeaturedCarousel;
