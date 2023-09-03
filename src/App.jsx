import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import NavBar from "./components/NavBar"
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
    <NavBar/>
      <Outlet />
    </>
  );
}

export default App;