import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getHotelsThunk } from "../store/states/hotels.slice"
import HotelCard from "../components/HomePage/HotelCard"
import '../components/styles/HomePage.css'
import CategoryFilter from "../components/HomePage/CategoryFilter"
import PriceFIlter from "../components/HomePage/PriceFIlter"


const HomePage = () => {

    const [inputName, setInputName] = useState('')
    const [fromTo, setFromTo] = useState({
        from: 0,
        to: Infinity
    })



    const hotels= useSelector((states) => states.hotels )
    console.log(hotels)

    const inputValue = useRef()

    const handleChange = () => {
        setInputName(inputValue.current.value)
    }

    const cbfilter = hotelInfo => {
        //Filter by Name
        const filterName = hotelInfo.name.toLowerCase().includes(inputName.toLowerCase().trim())
        //Filter by Price
        const price = Number(hotelInfo.price)
        const filterPrice = price >= fromTo.from && price <= fromTo.to

        return filterName && filterPrice;
    }

  return (
    <div className="homepage">
        <div className="hotel__title">

            <h1 className="tittle">Hotels for reservations</h1>
        </div>
        
        <div className="filters__sub-container">
            <h2 className="filters__title "> Filters: </h2>
            <input className="filters__cont-input" onChange={handleChange} value={inputName} ref={inputValue} type="text" />
        </div>
        <aside>
            <CategoryFilter/>
            <PriceFIlter
            setFromTo={setFromTo}
            />
           
        </aside>
        <div className="homepage__container">
            {
                hotels?.filter(cbfilter).map( hotelInfo => (
                    <HotelCard
                        key = {hotelInfo.id}
                        hotel = {hotelInfo}
                    />
                ))
            }

        </div>

    </div>
  )
}

export default HomePage