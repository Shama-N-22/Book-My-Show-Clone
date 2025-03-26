import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";

/**
 * MovieList component for displaying a grid of movies
 * Props:
 * - movies: array of movie objects
 * - title: section title
 */
const MovieList = ({ movies, title }) => {
  return (
    <Container className="my-4 px-md-3 px-2">
      <h2 className="mb-3">{title}</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-3">
        {movies.map((movie) => (
          <Col key={movie.id} className="mb-3">
            <MovieCard
              id={movie.id}
              title={movie.title}
              image={movie.image}
              genre={movie.genre}
              rating={movie.rating}
              language={movie.language}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieList;
