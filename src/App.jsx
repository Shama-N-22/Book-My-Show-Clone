import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Components
import BookMyShowNavbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import MoviesPage from "./pages/MoviesPage";
import MovieDetails from "./pages/MovieDetails";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/Reset.css";
import "./styles/AppStyles.css";
import "./styles/BookingStyles.css";
import "./App.css";

/**
 * Main App Component
 */
function App() {
  return (
    <Router>
      <div className="app-container d-flex flex-column min-vh-100">
        {/* Navbar */}
        <BookMyShowNavbar />

        {/* Main Content */}
        <main className="flex-grow-1" style={{ paddingTop: "70px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
