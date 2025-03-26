import React from "react";
import FeaturedCarousel from "../components/FeaturedCarousel";
import MovieList from "../components/MovieList";

// Mock Data - Featured Movies
const featuredMovies = [
  {
    id: 1,
    title: "Avengers: Endgame",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    genre: "Action/Sci-Fi",
    description:
      "After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
  },
  {
    id: 2,
    title: "The Batman",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2MyNTAwZGEtNTAxNC00ODVjLTgzZjUtYmU0MTcyOTM3ZGUxXkEyXkFqcGdeQXVyNDc2NTg3NzA@._V1_.jpg",
    genre: "Action/Crime",
    description:
      "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
  },
  {
    id: 3,
    title: "Dune",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    genre: "Sci-Fi/Adventure",
    description:
      "Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
  },
];

// Mock Data - Now Showing Movies
const nowShowingMovies = [
  {
    id: 1,
    title: "Avengers: Endgame",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    genre: "Action",
    rating: 8.4,
    language: "English",
  },
  {
    id: 2,
    title: "The Batman",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtYzg3N2UwYTExMzYyXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg",
    genre: "Action",
    rating: 7.9,
    language: "English",
  },
  {
    id: 3,
    title: "Dune",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    genre: "Sci-Fi",
    rating: 8.1,
    language: "English",
  },
  {
    id: 4,
    title: "No Time To Die",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5OGUxMWE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
    genre: "Action",
    rating: 7.3,
    language: "English",
  },
  {
    id: 5,
    title: "Spider-Man: No Way Home",
    image:
      "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg",
    genre: "Action",
    rating: 8.3,
    language: "English",
  },
  {
    id: 6,
    title: "Black Widow",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    genre: "Action",
    rating: 6.7,
    language: "English",
  },
  {
    id: 7,
    title: "Eternals",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTExZmVjY2ItYTAzYi00MDdlLWFlOWItNTJhMDRjMzQ5ZGY0XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg",
    genre: "Action",
    rating: 6.3,
    language: "English",
  },
  {
    id: 8,
    title: "Shang-Chi",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    genre: "Action",
    rating: 7.4,
    language: "English",
  },
];

// Mock Data - Upcoming Events
const upcomingEvents = [
  {
    id: 101,
    title: "Coldplay World Tour",
    image: "https://i.scdn.co/image/ab6761610000e5ebbb1684405d5f8c376bfb9fb4",
    genre: "Music Concert",
    rating: 9.2,
    language: "English",
  },
  {
    id: 102,
    title: "Stand-up Comedy Night",
    image:
      "https://media.istockphoto.com/id/1355687160/photo/stand-up-comedy-neon-sign-with-a-microphone-against-a-brick-wall-3d-render.jpg?s=612x612&w=0&k=20&c=uLrVT8dhT-I8IG6U6OkhI8n_PYptFDlZPs9K_K9mxvI=",
    genre: "Comedy",
    rating: 8.5,
    language: "English",
  },
  {
    id: 103,
    title: "Broadway Musical: Hamilton",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjViNWRjYWEtZTI0NC00N2E3LTk0NGQtMjY4NTM3OGNkZjY0XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_.jpg",
    genre: "Musical",
    rating: 9.5,
    language: "English",
  },
  {
    id: 104,
    title: "Rock Music Festival",
    image:
      "https://media.istockphoto.com/id/1189205501/photo/people-enjoying-a-music-concert.jpg?s=612x612&w=0&k=20&c=UWq2Jb_6JRIe6OzPiDkCL_fRQdx0qJJAMDHDs9KOcMM=",
    genre: "Music Festival",
    rating: 8.8,
    language: "English",
  },
];

/**
 * Home Page Component
 */
const Home = () => {
  return (
    <div className="flex-grow-1">
      {/* Featured Carousel */}
      <FeaturedCarousel items={featuredMovies} title="Featured Movies" />

      {/* Now Showing Movies */}
      <MovieList movies={nowShowingMovies} title="Now Showing" />

      {/* Upcoming Events */}
      <MovieList movies={upcomingEvents} title="Upcoming Events" />
    </div>
  );
};

export default Home;
