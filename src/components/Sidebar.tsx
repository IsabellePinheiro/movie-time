import { useState } from "react";

import "../styles/sidebar.scss";
import { Button } from "./Button";

export function SideBar() {
  const [genres, setGenres] = useState(["Action", "Comedy", "Documentary"]);

  return (
    <nav className="sidebar">
      <span>
        Movie<p>Time</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre, key) => (
          <Button key={key} title={genre} />
        ))}
      </div>
    </nav>
  );
}
