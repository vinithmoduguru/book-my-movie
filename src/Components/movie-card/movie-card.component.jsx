import { useNavigate } from "react-router-dom"
import { MovieCardContainer } from "./movie-card.styles"

const MovieCard = ({ movie }) => {
  const { id, name, imageUrl, theatre, language, price } = movie || {}
  const navigate = useNavigate()
  const goToDetailHandler = (id) => {
    navigate({
      pathname: "/details",
      search: `?id=${id}`,
    })
  }
  return (
    <MovieCardContainer
      onClick={() => {
        goToDetailHandler(id)
      }}>
      <h2>
        {name}({theatre})
      </h2>
      {/* <img src={imageUrl} alt={`${name}`} /> */}
      <span>{language}</span>
    </MovieCardContainer>
  )
}
export default MovieCard
