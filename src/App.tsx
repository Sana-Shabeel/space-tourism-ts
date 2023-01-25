import { useState } from "react";
import Navbar from "./components/Navbar";

import Landing from "./containers/Landing";

function App() {
  return (
    <main className="min-h-screen bg-home-page-mobile bg-cover bg-center	">
      <Navbar />
    </main>
  );
}

export default App;
