import { useState } from "react";
import Navbar from "./components/Navbar";

import Landing from "./pages/Landing";

function App() {
  return (
    <main className="min-h-screen lg:pt-6 bg-home-page-mobile sm:bg-home-page-tablet lg:bg-home-page-desktop bg-cover bg-center">
      <Navbar />
    </main>
  );
}

export default App;
