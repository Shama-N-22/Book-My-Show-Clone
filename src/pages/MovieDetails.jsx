import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Badge,
  Button,
  Card,
  Form,
} from "react-bootstrap";

// Mock Movie Data - In a real app, you would fetch this based on ID
const movieData = {
  id: 1,
  title: "Avengers: Endgame",
  image:
    "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
  genre: "Action/Sci-Fi",
  rating: 8.4,
  language: "English",
  duration: "3h 1m",
  releaseDate: "April 26, 2019",
  director: "Anthony Russo, Joe Russo",
  cast: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson",
  description:
    "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
  trailerUrl: "https://www.youtube.com/embed/TcMBFSGVi1c",
};

// Available showtimes
const showtimes = [
  { id: 1, time: "10:00 AM", date: "Today" },
  { id: 2, time: "1:30 PM", date: "Today" },
  { id: 3, time: "4:45 PM", date: "Today" },
  { id: 4, time: "8:00 PM", date: "Today" },
  { id: 5, time: "11:00 AM", date: "Tomorrow" },
  { id: 6, time: "2:30 PM", date: "Tomorrow" },
  { id: 7, time: "5:45 PM", date: "Tomorrow" },
  { id: 8, time: "9:00 PM", date: "Tomorrow" },
];

/**
 * MovieDetails Component with Seat Booking
 */
const MovieDetails = () => {
  const [selectedShowtime, setSelectedShowtime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingStep, setBookingStep] = useState(1);

  // Theater layout - 8 rows (A-H) x 10 seats per row
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const seatsPerRow = 10;

  // Some seats are already booked (for demo)
  const bookedSeats = [
    "A1",
    "A2",
    "B5",
    "C3",
    "C4",
    "C5",
    "D7",
    "D8",
    "E2",
    "F10",
    "G1",
    "G2",
  ];

  // Handle seat selection
  const handleSeatClick = (seat) => {
    if (bookedSeats.includes(seat)) return; // Already booked

    if (selectedSeats.includes(seat)) {
      // Deselect seat
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      // Select seat
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  // Seat status class
  const getSeatClass = (seat) => {
    if (bookedSeats.includes(seat)) {
      return "seat-booked";
    }
    if (selectedSeats.includes(seat)) {
      return "seat-selected";
    }
    return "seat-available";
  };

  // Continue to next booking step
  const continueBooking = () => {
    if (bookingStep === 1 && selectedShowtime) {
      setBookingStep(2);
    } else if (bookingStep === 2 && selectedSeats.length > 0) {
      setBookingStep(3);
    }
  };

  // Process booking (demo only)
  const processBooking = () => {
    alert(
      `Booked ${selectedSeats.length} seats (${selectedSeats.join(", ")}) for ${
        movieData.title
      } at ${
        showtimes.find((st) => st.id === selectedShowtime)?.time
      }. Thank you!`
    );
    // Reset state
    setSelectedSeats([]);
    setSelectedShowtime(null);
    setBookingStep(1);
  };

  return (
    <Container className="my-4 px-md-3 px-2">
      <Row className="gx-md-4 gx-2">
        {/* Movie Details Column */}
        <Col lg={8} className="mb-4">
          <Row className="mb-4 g-3">
            <Col xs={12} md={4} className="mb-3 mb-md-0">
              <img
                src={movieData.image}
                alt={movieData.title}
                className="img-fluid rounded shadow mx-auto d-block"
                style={{ maxHeight: "450px" }}
              />
            </Col>
            <Col xs={12} md={8}>
              <h1 className="mb-2">{movieData.title}</h1>
              <div className="mb-3">
                <Badge bg="secondary" className="me-2">
                  {movieData.genre}
                </Badge>
                <Badge bg="info" className="me-2">
                  {movieData.language}
                </Badge>
                <Badge bg="dark" className="me-2">
                  {movieData.duration}
                </Badge>
                <Badge bg={movieData.rating >= 8 ? "success" : "warning"}>
                  {movieData.rating}/10
                </Badge>
              </div>
              <p className="mb-1">
                <strong>Director:</strong> {movieData.director}
              </p>
              <p className="mb-1">
                <strong>Cast:</strong> {movieData.cast}
              </p>
              <p className="mb-1">
                <strong>Release Date:</strong> {movieData.releaseDate}
              </p>
              <p className="mb-3">{movieData.description}</p>
            </Col>
          </Row>

          {/* Trailer Section */}
          <div className="mb-4">
            <h3 className="mb-3">Trailer</h3>
            <div className="video-container">
              <iframe
                src={movieData.trailerUrl}
                title="Movie Trailer"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </Col>

        {/* Booking Column */}
        <Col lg={4}>
          <Card className="shadow">
            <Card.Header className="bg-danger text-white">
              <h4 className="mb-0">Book Tickets</h4>
            </Card.Header>
            <Card.Body>
              {/* Step 1: Select Showtime */}
              {bookingStep === 1 && (
                <>
                  <h5 className="mb-3">Select Showtime</h5>
                  <Row className="g-2 mb-3">
                    {showtimes.map((show) => (
                      <Col xs={6} key={show.id}>
                        <Button
                          variant={
                            selectedShowtime === show.id
                              ? "danger"
                              : "outline-danger"
                          }
                          className="w-100 mb-2"
                          onClick={() => setSelectedShowtime(show.id)}
                        >
                          {show.time}
                          <div className="small">{show.date}</div>
                        </Button>
                      </Col>
                    ))}
                  </Row>
                  <Button
                    variant="danger"
                    className="w-100"
                    disabled={!selectedShowtime}
                    onClick={continueBooking}
                  >
                    Continue to Select Seats
                  </Button>
                </>
              )}

              {/* Step 2: Select Seats */}
              {bookingStep === 2 && (
                <>
                  <h5 className="mb-3">Select Seats</h5>
                  <div className="text-center mb-3">
                    <div className="screen-container">
                      <div className="screen mb-4">Screen</div>
                    </div>

                    <div className="seat-map">
                      {rows.map((row) => (
                        <div key={row} className="seat-row">
                          <div className="row-label">{row}</div>
                          {[...Array(seatsPerRow)].map((_, index) => {
                            const seatNumber = `${row}${index + 1}`;
                            return (
                              <div
                                key={seatNumber}
                                className={`seat ${getSeatClass(seatNumber)}`}
                                onClick={() => handleSeatClick(seatNumber)}
                              >
                                {index + 1}
                              </div>
                            );
                          })}
                        </div>
                      ))}
                    </div>

                    <div className="seat-legend mt-3 mb-4">
                      <div className="legend-item">
                        <div className="seat seat-available legend-box"></div>
                        <span>Available</span>
                      </div>
                      <div className="legend-item">
                        <div className="seat seat-selected legend-box"></div>
                        <span>Selected</span>
                      </div>
                      <div className="legend-item">
                        <div className="seat seat-booked legend-box"></div>
                        <span>Booked</span>
                      </div>
                    </div>
                  </div>

                  <div className="selected-seats mb-3">
                    <strong>Selected Seats:</strong>{" "}
                    {selectedSeats.length ? selectedSeats.join(", ") : "None"}
                  </div>

                  <Row className="mb-3">
                    <Col>
                      <Button
                        variant="outline-secondary"
                        className="w-100"
                        onClick={() => setBookingStep(1)}
                      >
                        Back
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        variant="danger"
                        className="w-100"
                        disabled={selectedSeats.length === 0}
                        onClick={continueBooking}
                      >
                        Continue
                      </Button>
                    </Col>
                  </Row>
                </>
              )}

              {/* Step 3: Summary and Payment */}
              {bookingStep === 3 && (
                <>
                  <h5 className="mb-3">Booking Summary</h5>
                  <p>
                    <strong>Movie:</strong> {movieData.title}
                  </p>
                  <p>
                    <strong>Showtime:</strong>{" "}
                    {showtimes.find((st) => st.id === selectedShowtime)?.time} (
                    {showtimes.find((st) => st.id === selectedShowtime)?.date})
                  </p>
                  <p>
                    <strong>Seats:</strong> {selectedSeats.join(", ")}
                  </p>
                  <p>
                    <strong>Total Amount:</strong> ₹
                    {(selectedSeats.length * 250).toFixed(2)}
                  </p>

                  <Form className="mb-3">
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Enter your phone number"
                      />
                    </Form.Group>
                  </Form>

                  <Row className="mb-3">
                    <Col>
                      <Button
                        variant="outline-secondary"
                        className="w-100"
                        onClick={() => setBookingStep(2)}
                      >
                        Back
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        variant="danger"
                        className="w-100"
                        onClick={processBooking}
                      >
                        Confirm Booking
                      </Button>
                    </Col>
                  </Row>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
