import React, { useState } from "react";
import { Card, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import getPlaceholderImage from "../assets/placeholders/image-placeholder";

/**
 * MovieCard component for displaying movie information
 * Props:
 * - id: unique identifier for the movie
 * - title: movie title
 * - image: poster image URL
 * - genre: movie genre (displayed as badge)
 * - rating: movie rating (0-10)
 * - language: movie language
 */
const MovieCard = ({ id, title, image, genre, rating, language }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Card className="h-100 shadow-sm card-hover overflow-hidden">
      <div className="card-img-container">
        <Card.Img
          variant="top"
          src={imageError ? getPlaceholderImage("movie") : image}
          alt={title}
          style={{ height: "250px", objectFit: "cover" }}
          onError={handleImageError}
        />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="mb-1 text-truncate" title={title}>
          {title}
        </Card.Title>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Badge bg="secondary">{genre}</Badge>
          <Badge
            bg={rating >= 8 ? "success" : rating >= 6 ? "warning" : "danger"}
          >
            {rating}/10
          </Badge>
        </div>
        <Card.Text className="text-muted small mb-2">{language}</Card.Text>
        <Link to={`/movie/${id}`} className="mt-auto">
          <Button variant="danger" className="w-100">
            Book Now
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
