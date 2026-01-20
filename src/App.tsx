import { useState } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex">
          <Dashboard />
        </main>
      </div>
    </>
  );
}

export default App;
