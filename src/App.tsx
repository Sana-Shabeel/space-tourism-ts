import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Homepage from "./pages/Homepage";
import Technology from "./pages/Technology";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </main>
  );
}

export default App;
