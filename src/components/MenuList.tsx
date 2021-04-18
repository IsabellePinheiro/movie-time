import { useEffect, useState } from "react";
import { api, API_KEY } from "../services/api";
import { MovieCard } from "./MovieCard";
import { GenreResponseProps } from "./Sidebar";
import "../styles/menu-list.scss";
interface ContentProps {
  id: number;
}
interface MovieProps {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

export default function MenuList({ id }: ContentProps) {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>();

  useEffect(() => {
    api
      .get(`discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${id}`)
      .then((response) => {
        setMovies(response.data.results);
      });
  }, [id]);

  return (
    <div className="container">
      <header>
        <span className="category">Your movie list</span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              vote_average={movie.vote_average}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
