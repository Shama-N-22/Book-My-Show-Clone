import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Table,
  Badge,
  Button,
} from "react-bootstrap";

// Mock movie data
const allMovies = [
  {
    id: 1,
    title: "Avengers: Endgame",
    genre: "Action",
    language: "English",
    duration: "3h 1m",
    rating: 8.4,
    releaseDate: "2019-04-26",
  },
  {
    id: 2,
    title: "The Batman",
    genre: "Action",
    language: "English",
    duration: "2h 56m",
    rating: 7.9,
    releaseDate: "2022-03-04",
  },
  {
    id: 3,
    title: "Dune",
    genre: "Sci-Fi",
    language: "English",
    duration: "2h 35m",
    rating: 8.1,
    releaseDate: "2021-10-22",
  },
  {
    id: 4,
    title: "No Time To Die",
    genre: "Action",
    language: "English",
    duration: "2h 43m",
    rating: 7.3,
    releaseDate: "2021-09-30",
  },
  {
    id: 5,
    title: "Spider-Man: No Way Home",
    genre: "Action",
    language: "English",
    duration: "2h 28m",
    rating: 8.3,
    releaseDate: "2021-12-17",
  },
  {
    id: 6,
    title: "Parasite",
    genre: "Drama",
    language: "Korean",
    duration: "2h 12m",
    rating: 8.5,
    releaseDate: "2019-10-11",
  },
  {
    id: 7,
    title: "Joker",
    genre: "Crime",
    language: "English",
    duration: "2h 2m",
    rating: 8.4,
    releaseDate: "2019-10-04",
  },
  {
    id: 8,
    title: "Black Panther",
    genre: "Action",
    language: "English",
    duration: "2h 14m",
    rating: 7.3,
    releaseDate: "2018-02-16",
  },
];

// Extract unique genres for filter options
const genres = [...new Set(allMovies.map((movie) => movie.genre))];
const languages = [...new Set(allMovies.map((movie) => movie.language))];

/**
 * Movies Page Component with filtering and sorting
 */
const MoviesPage = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [sortBy, setSortBy] = useState("rating");
  const [sortOrder, setSortOrder] = useState("desc");

  // Filter movies based on selected criteria
  const filteredMovies = allMovies
    .filter((movie) => (selectedGenre ? movie.genre === selectedGenre : true))
    .filter((movie) =>
      selectedLanguage ? movie.language === selectedLanguage : true
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      } else {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    });

  return (
    <Container className="my-4">
      <h1 className="mb-4">Movies</h1>

      {/* Filters and Sorting Options */}
      <Row className="mb-4">
        <Col md={3}>
          <Form.Group>
            <Form.Label>Genre</Form.Label>
            <Form.Select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              <option value="">All Genres</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group>
            <Form.Label>Language</Form.Label>
            <Form.Select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              <option value="">All Languages</option>
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group>
            <Form.Label>Sort By</Form.Label>
            <Form.Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="rating">Rating</option>
              <option value="title">Title</option>
              <option value="releaseDate">Release Date</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group>
            <Form.Label>Order</Form.Label>
            <Form.Select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="desc">Descending</option>
              <option value="asc">Ascending</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      {/* Movies Table */}
      <div className="table-responsive">
        <Table striped hover>
          <thead className="table-dark">
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Language</th>
              <th>Duration</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredMovies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>
                  <Badge bg="secondary">{movie.genre}</Badge>
                </td>
                <td>{movie.language}</td>
                <td>{movie.duration}</td>
                <td>
                  <Badge
                    bg={
                      movie.rating >= 8
                        ? "success"
                        : movie.rating >= 6
                        ? "warning"
                        : "danger"
                    }
                  >
                    {movie.rating}/10
                  </Badge>
                </td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    href={`#/movie/${movie.id}`}
                  >
                    Book Now
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {filteredMovies.length === 0 && (
        <div className="text-center p-5">
          <h3>No movies found matching your filters.</h3>
          <Button
            variant="outline-danger"
            onClick={() => {
              setSelectedGenre("");
              setSelectedLanguage("");
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </Container>
  );
};

export default MoviesPage;
