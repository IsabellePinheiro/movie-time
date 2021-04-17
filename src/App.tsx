import React from "react";
import MenuList from "./components/MenuList";
import Sidebar from "./components/Sidebar";

import "./styles/global.scss";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <MenuList />
    </div>
  );
}

export default App;
