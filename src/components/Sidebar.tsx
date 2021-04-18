import { useState } from "react";

import "../styles/sidebar.scss";

export default function SideBar() {
  const [genres, setGenres] = useState(["Action", "Comedy", "Documentary"]);

  return (
    <nav className="sidebar">
      <span>
        Movie<p>Time</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre, key) => (
          <button key={key}>{genre}</button>
        ))}
      </div>
    </nav>
  );
}
