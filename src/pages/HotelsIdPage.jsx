import { Link, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect, useState } from "react"
import { Map, Marker, Overlay } from "pigeon-maps"
import '../components/styles/HotelsIdPage.css'
import OtherHotels from "../components/HotelsIdPage/OtherHotels"
import FormReserve from "../components/HotelsIdPage/FormReserve"
import RatingStar from "../components/HomePage/RatingStar"
import SliderImgs from "../components/HotelsIdPage/SliderImgs"
import useCrud from "../hooks/useCrud"
import CardReviews from "../components/CardReviews/CardReviews"



const HotelsIdPage = () => {

const { id } = useParams()

const url = `https://hotels-api.academlo.tech/hotels/${id}`

const [ hotel, getHotel ] = useFetch(url)



useEffect(() => {

  getHotel()

}, [id])
const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

const [review, getReview] = useCrud()

  useEffect(() => {
    const url = `https://hotels-api.academlo.tech/reviews?hotelId=${hotel?.id}&userId=${user?.id}`
    getReview(url)
  }, [id])

  return (
    <div className="hotelid">
      <h2 className="hotelid__name">{hotel?.name}</h2>
      <h4 className="hotelid__name"><RatingStar rating = {hotel}/></h4>
        
        
       <SliderImgs hotel = {hotel} />
        
      <div className="hotelid__map">
        {
          hotel &&
          <div >
            <Map height={250} defaultCenter={[+hotel.lat, +hotel.lon]} zoom ={15} maxZoom={16} minZoom={10}>

            <Overlay anchor={[+hotel.lat, +hotel.lon]} offset={[20, 20]}>
              <img className="hotelid__icon" src="/hotel-icon.png" alt="" width={30}/> 
              
            </Overlay>
            </Map>
        </div>
        }
      </div>
<section className="hotelid__section">
  <h3 className="hotelid__name">
    {hotel?.city.name}, {hotel?.city.country}
    </h3>
  <p className="hotelid__directions">
  <i class='bx bx-map'></i>
  <span>{hotel?.address}</span>
  </p>
  <p className="hotelid__description">
    {hotel?.description}
  </p>
</section>

  <section className="hotelid__reserve__container">
    {
      localStorage.getItem('token')
      ? <FormReserve hotelId = {hotel?.id}/>
      : <span >If you want to make a reservation, please. <Link to={'/login'}>login</Link> </span>
    }
</section>
<div>
  <OtherHotels 
    hotel = {hotel}
  />
</div>
<h3 className='title__comment'>Comments</h3>
      <div className='detail__review'>
        {
          review?.results.map((review, index) => (
            <CardReviews
              key={index}
              review={review}
            />
          ))
        }
      </div>
</div>
    
  )
}

export default HotelsIdPage