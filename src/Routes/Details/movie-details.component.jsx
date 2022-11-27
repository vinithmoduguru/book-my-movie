import { useNavigate, useSearchParams } from "react-router-dom"
import MOVIE_DATA from "../../movies-data.json"
import { Button } from "../../Components/Button/button.styles"
import {
  ButtonsContainer,
  MovieBookingContainer,
  MovieBookingHeader,
} from "./movie-details.styles"
const MovieDetail = () => {
  const [searchparams] = useSearchParams()
  const query_id = searchparams.get("id")
  const { id, name, price, language } = MOVIE_DATA.filter(
    (movie) => movie.id === query_id
  )[0]

  const navigate = useNavigate()
  const bookingHandler = (id) => {
    navigate({
      pathname: "/seats",
      search: `?id=${id}`,
    })
  }
  const customiseSeatHandler = (id) => {
    navigate({
      pathname: "/customise",
      search: `?id=${id}`,
    })
  }

  return (
    <>
      <MovieBookingContainer>
        <MovieBookingHeader>
          <h2>
            {name} - {language}
          </h2>
          <h3>Ticket Cost: ₹{price}</h3>
        </MovieBookingHeader>
      </MovieBookingContainer>

      <ButtonsContainer>
        <Button onClick={() => bookingHandler(id)}>BOOK TICKET</Button>
        <Button onClick={() => customiseSeatHandler(id)}>CUSTOMIZE ROW</Button>
      </ButtonsContainer>
    </>
  )
}
export default MovieDetail
