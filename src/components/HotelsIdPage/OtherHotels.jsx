import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import HotelCard from "../HomePage/HotelCard"


const OtherHotels = ({ hotel }) => {

    const url = `https://hotels-api.academlo.tech/hotels?cityId=${hotel?.cityId}`

    const [hotelsInCity, getHotelsInCity ] = useFetch(url)

    useEffect(() => {
        if (hotel){
            getHotelsInCity()
        }
        
    },[hotel])

    



  return (
    <section className="hotel__others">
        <h3 className="other__hotels"> Other hotels in <span className="other__tittle">{hotel?.city.name}</span></h3>
        <div className="hotel__other__container">
            {
                hotelsInCity?.filter (hotelInfo => hotelInfo.id !== hotel.id).map(hotelInfo =>
                    <HotelCard 
                        key = {hotelInfo.id} 
                        hotel = {hotelInfo}
                        />)
            }
        </div>

    </section>
  )
}

export default OtherHotels