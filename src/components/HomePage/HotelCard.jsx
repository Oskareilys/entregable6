import { useNavigate } from "react-router-dom"
import '../styles/HotelCard.css'
import RatingStar from "./RatingStar"


const hotelcard = ({ hotel }) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/hotels/${hotel.id}`)
    }

    
  return (
    <article className="hotelcard">
      <header className="hotelcard__header">
            <img className="hotelcard__img" src={hotel.images[0].url} alt="" />
      </header>  
      <section className="hotelcard__body">
        <h3 className="hotelcard__name">{hotel.name}</h3>
        <div>
          <RatingStar rating = {hotel}/>
        </div>
       
        <span className="hotelcard__place">{hotel.city.name}, {hotel.city.country}</span>
        <div className="hotelcard__price">$ {hotel.price}</div>
      </section>
      <footer className="hotelcard__footer">
        <button className="hotelcard__btn" onClick={handleClick}>See more...</button>

      </footer>
    </article>
  )
}

export default hotelcard