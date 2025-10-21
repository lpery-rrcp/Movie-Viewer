import "./App.css";
import Favorite from "./pages/Favorites";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/favorites" element={<Favorite />}></Route>
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
