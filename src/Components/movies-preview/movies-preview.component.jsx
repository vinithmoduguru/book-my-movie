import MOVIE_DATA from "../../movies-data.json"
import MovieCard from "../movie-card/movie-card.component"
import { Heading, MovieListContainer } from "./movies-preview.styles"
const MovieList = () => {
  return (
    <>
      <Heading>Recommended Movies</Heading>
      <MovieListContainer>
        {MOVIE_DATA.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </MovieListContainer>
    </>
  )
}
export default MovieList
