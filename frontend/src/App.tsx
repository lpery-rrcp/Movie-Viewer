import "./App.css";
import Favorite from "./pages/Favorites";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <>
      <MovieProvider>
        <NavBar />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/favorites" element={<Favorite />}></Route>
          </Routes>
        </main>
      </MovieProvider>
    </>
  );
}

export default App;
