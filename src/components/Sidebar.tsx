import { useEffect, useState } from "react";
import { api, API_KEY } from "../services/api";

import "../styles/sidebar.scss";
import { Button } from "./Button";

export interface GenreResponseProps {
  id: number;
  name: string;
}

interface SideBarProps {
  handleSelectGenre: (genre: GenreResponseProps) => void;
  selectedGenre?: GenreResponseProps;
}

export function SideBar({ handleSelectGenre, selectedGenre }: SideBarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [, setSelectedGenre] = useState(selectedGenre);

  useEffect(() => {
    api
      .get(`genre/movie/list?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setGenres(response.data.genres);
      });
  }, []);

  return (
    <nav className="sidebar">
      <span>
        Movie<p>Time</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={genre.id}
            title={genre.name}
            icon={genre.name}
            selected={genre.id === selectedGenre?.id}
            onClick={() => {
              handleSelectGenre(genre);
            }}
          />
        ))}
      </div>
    </nav>
  );
}
