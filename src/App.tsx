import React, { useState } from "react";
import MenuList from "./components/MenuList";
import { SideBar } from "./components/Sidebar";

import "./styles/global.scss";

export function App() {
  // const [selectedGenre, setSelectedGenres] = useState<GenreResponseProps>(
  //   {} as GenreResponseProps
  // );

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
      // handleSelectGenre={setSelectedGenres}
      // selectedGenre={selectedGenre}
      />
      <MenuList />
    </div>
  );
}
