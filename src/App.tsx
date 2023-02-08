import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Homepage from "./pages/Home";
import Technology from "./pages/Technology";

function App() {
  return (
    <main className="m-h-screen bg-black">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </main>
  );
}

export default App;
