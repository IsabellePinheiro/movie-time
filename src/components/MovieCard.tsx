import { Star, Clock } from "react-feather";

import "../styles/movie-card.scss";

interface MovieCardProps {
  title: string;
  poster: string;
  vote_average: number;
  // overview: string;
}

export function MovieCard(props: MovieCardProps) {
  return (
    <div className="movie-card">
      <img src={props.poster} alt={props.title} />

      <div>
        <div className="movie-info">
          <span>{props.title}</span>
          <div className="meta">
            <div>
              <Star /> {props.vote_average}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
