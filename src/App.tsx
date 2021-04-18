import React, { useState } from "react";
import MenuList from "./components/MenuList";
import { GenreResponseProps, SideBar } from "./components/Sidebar";

import "./styles/global.scss";

export function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>();

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        handleSelectGenre={setSelectedGenre}
        selectedGenre={selectedGenre}
      />
      <MenuList id={selectedGenre?.id || 28} />
    </div>
  );
}
