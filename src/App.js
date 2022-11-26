import logo from "./logo.svg"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Navigation from "./Routes/Navigation/navigation.component"
import MovieList from "./Components/movies-preview/movies-preview.component"
import MovieDetail from "./Routes/Details/movie-details.component"
import Seats from "./Components/Seats/seats-component"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<MovieList />} />
        <Route path="details/*" element={<MovieDetail />} />
        <Route path="seats/*" element={<Seats />} />
      </Route>
    </Routes>
  )
}

export default App
